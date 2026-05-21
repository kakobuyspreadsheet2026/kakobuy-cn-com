import fs from 'node:fs/promises';
import path from 'node:path';
import {
  CATEGORY_PRODUCT_LIMIT,
  diversifyByBrand,
  aggregateVirtualCategory,
  isRenderableProduct,
  normalizeBrand,
} from './lib/catalogDiversify.mjs';
import {
  parseMaisonLooksAvailableSizes,
  parseMaisonLooksSourceUrl,
} from './lib/parseMaisonLooksPage.mjs';

const API_BASE = 'https://api.maisonlooks.com/public/v1';
const API_KEY = 'ml_pub_40a7fda08f34b8e6c37b22748469f5d5';
const DATA_DIR = './src/data/api';
const CATEGORY_FETCH_POOL = 100;
const SOURCE_URLS_FILE = path.join(DATA_DIR, 'product-source-urls.json');
const PRODUCT_SIZES_FILE = path.join(DATA_DIR, 'product-sizes.json');
const SOURCE_URL_CONCURRENCY = 20;

const REFRESH_CATALOG =
  process.env.REFRESH_CATALOG === '1' || process.env.REFRESH_CATALOG === 'true';
/** When unset/false, keep committed `featured-products.json` (homepage Editor's Pick grid). */
const REFRESH_FEATURED =
  REFRESH_CATALOG ||
  process.env.REFRESH_FEATURED === '1' ||
  process.env.REFRESH_FEATURED === 'true';
/** When unset/false, keep committed `category-products.json` (category grids + spreadsheet PDP pool). */
const REFRESH_CATEGORIES =
  REFRESH_CATALOG ||
  process.env.REFRESH_CATEGORIES === '1' ||
  process.env.REFRESH_CATEGORIES === 'true';

const UI_TO_API_CATEGORY = {
  shoes: 'sneakers',
  't-shirts': 't-shirts',
  pants: 'trousers-pants',
  accessories: 'accessories',
  bags: 'bags-backpacks',
  electronics: 'electronics',
  jackets: 'jackets',
  hoodies: 'hoodies-sweatshirts',
  headwear: 'headwear',
  jersey: 'jersey',
  perfume: 'perfume',
  other: 'clothing',
};

const API_TIMEOUT_MS = 60000;

async function apiFetch(url, timeoutMs = API_TIMEOUT_MS) {
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      return await fetch(url, {
        headers: { 'X-API-Key': API_KEY, Accept: 'application/json' },
        signal: AbortSignal.timeout(timeoutMs),
      });
    } catch (error) {
      if (attempt === 2) {
        console.log(`  Request failed: ${url} (${error.message})`);
        return null;
      }
      console.log(`  Retry ${attempt}/2: ${url}`);
    }
  }
  return null;
}

async function readJsonFile(fileName, fallback = null) {
  try {
    return JSON.parse(await fs.readFile(path.join(DATA_DIR, fileName), 'utf8'));
  } catch {
    return fallback;
  }
}

function countUiGridProducts(catProducts) {
  const slugs = new Set();
  for (const apiSlug of Object.values(UI_TO_API_CATEGORY)) {
    for (const product of catProducts[apiSlug] || []) {
      if (isRenderableProduct(product)) slugs.add(product.slug);
    }
  }
  return slugs.size;
}

async function logPinnedCatalog() {
  const featured = await readJsonFile('featured-products.json', []);
  const catProducts = await readJsonFile('category-products.json', {});
  console.log(
    `  Homepage featured: ${featured.length} items in featured-products.json`,
  );
  console.log(
    `  Category / PDP pool: ${countUiGridProducts(catProducts)} unique UI products in category-products.json`,
  );
}

async function cacheProductPageMeta(catProducts) {
  const slugs = new Set();
  for (const apiSlug of Object.values(UI_TO_API_CATEGORY)) {
    for (const product of catProducts[apiSlug] || []) {
      if (isRenderableProduct(product)) slugs.add(product.slug);
    }
  }

  let sourceUrls = {};
  let productSizes = {};
  try {
    sourceUrls = JSON.parse(await fs.readFile(SOURCE_URLS_FILE, 'utf8'));
  } catch {
    // start fresh when cache file does not exist yet
  }
  try {
    productSizes = JSON.parse(await fs.readFile(PRODUCT_SIZES_FILE, 'utf8'));
  } catch {
    // start fresh when cache file does not exist yet
  }

  const missing = [...slugs].filter(
    (slug) => !sourceUrls[slug] || !Array.isArray(productSizes[slug]),
  );
  console.log(
    `Caching marketplace page meta: ${missing.length} to fetch, ${slugs.size - missing.length} cached (${slugs.size} UI products).`,
  );

  async function fetchPageMeta(slug, attempt = 1) {
    try {
      const res = await fetch(`https://maisonlooks.com/en/p/${slug}`);
      if (!res.ok) {
        if (attempt < 2) {
          await new Promise((resolve) => setTimeout(resolve, 400));
          return fetchPageMeta(slug, attempt + 1);
        }
        return;
      }
      const html = await res.text();
      const sourceUrl = parseMaisonLooksSourceUrl(html);
      if (sourceUrl) sourceUrls[slug] = sourceUrl;
      const sizes = parseMaisonLooksAvailableSizes(html);
      if (sizes.length === 0 && attempt < 2) {
        await new Promise((resolve) => setTimeout(resolve, 400));
        return fetchPageMeta(slug, attempt + 1);
      }
      productSizes[slug] = sizes;
    } catch {
      if (attempt < 2) {
        await new Promise((resolve) => setTimeout(resolve, 400));
        return fetchPageMeta(slug, attempt + 1);
      }
    }
  }

  for (let i = 0; i < missing.length; i += SOURCE_URL_CONCURRENCY) {
    const batch = missing.slice(i, i + SOURCE_URL_CONCURRENCY);
    await Promise.all(batch.map(fetchPageMeta));
    console.log(`  Page meta progress: ${Math.min(i + batch.length, missing.length)}/${missing.length}`);
  }

  if (Object.keys(sourceUrls).length > 0) {
    await fs.writeFile(SOURCE_URLS_FILE, JSON.stringify(sourceUrls, null, 2));
  } else {
    console.log('No source URLs cached, skipping product-source-urls.json write.');
  }

  if (Object.keys(productSizes).length > 0) {
    await fs.writeFile(PRODUCT_SIZES_FILE, JSON.stringify(productSizes, null, 2));
    const withSizes = Object.values(productSizes).filter((sizes) => sizes.length > 0).length;
    console.log(`  Saved product sizes for ${Object.keys(productSizes).length} slugs (${withSizes} with options).`);
  } else {
    console.log('No product sizes cached, skipping product-sizes.json write.');
  }
}

async function fetchAllData() {
  console.log('Starting catalog prebuild...');

  try {
    await fs.mkdir(DATA_DIR, { recursive: true });

    if (!REFRESH_FEATURED && !REFRESH_CATEGORIES) {
      console.log(
        'Catalog data pinned — skipping MaisonLooks product API (set REFRESH_CATALOG=1 to refresh all).',
      );
      await logPinnedCatalog();
      return;
    }

    console.log('Starting MaisonLooks API fetch with brand diversity...');

    // 1. Fetch Categories
    console.log('Fetching categories...');
    const catRes = await apiFetch(`${API_BASE}/categories`);
    if (!catRes?.ok) throw new Error(`Category API error: ${catRes?.status ?? 'network'}`);
    const categories = await catRes.json();
    await fs.writeFile(path.join(DATA_DIR, 'categories.json'), JSON.stringify(categories, null, 2));

    // 2. Fetch Featured Products (homepage) — pinned unless REFRESH_FEATURED=1
    if (!REFRESH_FEATURED) {
      const pinned = await readJsonFile('featured-products.json', []);
      console.log(
        `Featured products pinned: keeping ${pinned.length} items from featured-products.json (set REFRESH_FEATURED=1 to refresh from API).`,
      );
    } else {
      console.log('Fetching featured products (REFRESH_FEATURED=1)...');
      let featuredSlugs = [];
      try {
        const outfitRes = await apiFetch(`${API_BASE}/outfits?featured=true&limit=50`);
        if (outfitRes.ok) {
          const outfitJson = await outfitRes.json();
          featuredSlugs = [...new Set((outfitJson.data || []).flatMap(o => o.productSlugs))];
        } else {
          console.log(`Outfit API error: ${outfitRes.status}`);
        }
      } catch (e) {
        console.log('Outfit API failed:', e.message);
      }

      const featuredProducts = [];

      if (featuredSlugs.length > 0) {
        console.log(`Found ${featuredSlugs.length} featured slugs from outfits.`);
        for (const slug of featuredSlugs.slice(0, 100)) {
          if (featuredProducts.length >= 60) break;
          const res = await apiFetch(`${API_BASE}/products/${slug}`);
          if (res?.ok) {
            const prod = await res.json();
            const brand = prod.brand || 'Other';
            if (brand.toLowerCase() !== 'other' && brand.toLowerCase() !== 'unknown' && isRenderableProduct(prod)) {
              featuredProducts.push(prod);
            }
          }
        }
      }

      if (featuredProducts.length > 0) {
        console.log(`Successfully prepared ${featuredProducts.length} featured products.`);
        await fs.writeFile(
          path.join(DATA_DIR, 'featured-products.json'),
          JSON.stringify(featuredProducts, null, 2),
        );
      } else {
        console.log('No featured products fetched — keeping existing featured-products.json.');
      }
    }

    if (!REFRESH_CATEGORIES) {
      const pinned = await readJsonFile('category-products.json', {});
      console.log(
        `Category products pinned: keeping ${countUiGridProducts(pinned)} UI products from category-products.json (set REFRESH_CATEGORIES=1 to refresh from API).`,
      );
      console.log('Catalog prebuild finished (category pools pinned).');
      return;
    }

    // 3. Fetch Products for each Category (with Brand Diversity)
    console.log('Fetching products for each category (diversifying brands)...');
    let catProducts = (await readJsonFile('category-products.json')) || {};
    const allFetchedProducts = [];
    const rawCategoryPools = {};

    for (const cat of categories) {
      console.log(`  Processing category: ${cat.slug}...`);

      const prodRes = await apiFetch(`${API_BASE}/products?category=${cat.slug}&limit=${CATEGORY_FETCH_POOL}`);

      if (prodRes?.ok) {
        const json = await prodRes.json();
        const rawData = json.data || [];
        allFetchedProducts.push(...rawData);
        rawCategoryPools[cat.slug] = rawData.filter(isRenderableProduct);
        catProducts[cat.slug] = diversifyByBrand(rawData, CATEGORY_PRODUCT_LIMIT);
      } else {
        console.log(`  Skipping ${cat.slug}: API error ${prodRes?.status ?? 'network'}, keeping cached products.`);
        rawCategoryPools[cat.slug] = (catProducts[cat.slug] || []).filter(isRenderableProduct);
      }
    }

    // 4. Handle "Virtual" Categories (Electronics, Clothing, Accessories, Jersey)
    console.log('Handling virtual categories...');

    const accessoriesExcludedChildren = new Set(['bags-backpacks', 'headwear']);
    const accessoriesChildren = categories
      .filter((c) => c.parentSlug === 'accessories' && !accessoriesExcludedChildren.has(c.slug))
      .map((c) => c.slug);
    const accessoriesPool = aggregateVirtualCategory(rawCategoryPools, accessoriesChildren, CATEGORY_PRODUCT_LIMIT);
    if (accessoriesPool.length > 0) {
      catProducts['accessories'] = accessoriesPool;
    }
    console.log(`  Accessories virtual pool: ${(catProducts['accessories'] || []).length} items from [${accessoriesChildren.join(', ')}]`);

    const electronicsChildren = categories.filter(c => c.parentSlug === 'electronics').map(c => c.slug);
    const electronicsPool = aggregateVirtualCategory(rawCategoryPools, electronicsChildren, CATEGORY_PRODUCT_LIMIT);
    if (electronicsPool.length > 0) {
      catProducts['electronics'] = electronicsPool;
    }

    const clothingChildren = categories.filter(c => c.parentSlug === 'clothing').map(c => c.slug);
    const clothingPool = aggregateVirtualCategory(rawCategoryPools, clothingChildren, CATEGORY_PRODUCT_LIMIT);
    if (clothingPool.length > 0) {
      catProducts['clothing'] = clothingPool;
    }

    const jerseyPool = diversifyByBrand(
      allFetchedProducts.filter((p) => p.title.toLowerCase().includes('jersey')),
      CATEGORY_PRODUCT_LIMIT,
    );
    if (jerseyPool.length > 0) {
      catProducts['jersey'] = jerseyPool;
    }

    const shoesChildren = categories
      .filter((c) => c.parentSlug === 'shoes')
      .map((c) => c.slug);
    const shoesPool = aggregateVirtualCategory(rawCategoryPools, shoesChildren, CATEGORY_PRODUCT_LIMIT);
    if (shoesPool.length > 0) {
      catProducts['sneakers'] = shoesPool;
      console.log(`  Shoes virtual pool: ${shoesPool.length} items from [${shoesChildren.join(', ')}]`);
    }

    await cacheProductPageMeta(catProducts);

    for (const [uiSlug, apiSlug] of Object.entries(UI_TO_API_CATEGORY)) {
      const items = catProducts[apiSlug] || [];
      const brandCounts = {};
      for (const item of items) {
        const brand = normalizeBrand(item.brand);
        brandCounts[brand] = (brandCounts[brand] || 0) + 1;
      }
      const top = Object.entries(brandCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(([brand, count]) => `${brand}(${count})`)
        .join(', ');
      console.log(`  UI ${uiSlug}: ${items.length} items, ${Object.keys(brandCounts).length} brands — ${top}`);
    }

    if (Object.keys(catProducts).length > 0) {
      await fs.writeFile(path.join(DATA_DIR, 'category-products.json'), JSON.stringify(catProducts, null, 2));
      await fs.writeFile(
        path.join(DATA_DIR, 'category-products-raw.json'),
        JSON.stringify(rawCategoryPools, null, 2),
      );
    } else {
      console.log('No category products found, skipping file write to preserve existing data.');
    }

    console.log('Full diversified data fetch completed successfully.');
  } catch (error) {
    console.error('Data fetch failed:', error.message);
    process.exit(1);
  }
}

fetchAllData();
