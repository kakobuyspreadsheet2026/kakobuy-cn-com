import fs from 'node:fs/promises';
import path from 'node:path';

const API_BASE = 'https://api.maisonlooks.com/public/v1';
const API_KEY = 'ml_pub_40a7fda08f34b8e6c37b22748469f5d5';
const DATA_DIR = './src/data/api';

async function fetchAllData() {
  console.log('Starting full data fetch from MaisonLooks API with brand diversity...');
  
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });

    // 1. Fetch Categories
    console.log('Fetching categories...');
    const catRes = await fetch(`${API_BASE}/categories`, {
      headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' }
    });
    if (!catRes.ok) throw new Error(`Category API error: ${catRes.status}`);
    const categories = await catRes.json();
    await fs.writeFile(path.join(DATA_DIR, 'categories.json'), JSON.stringify(categories, null, 2));

    // 2. Fetch Featured Products (for homepage)
    console.log('Fetching featured products...');
    let featuredSlugs = [];
    try {
      const outfitRes = await fetch(`${API_BASE}/outfits?featured=true&limit=50`, {
        headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' }
      });
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
        const res = await fetch(`${API_BASE}/products/${slug}`, {
          headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' }
        });
        if (res.ok) {
          const prod = await res.json();
          const brand = prod.brand || 'Other';
          if (brand.toLowerCase() !== 'other' && brand.toLowerCase() !== 'unknown') {
            featuredProducts.push(prod);
          }
        }
      }
    }

    // 3. Fetch Products for each Category (with Brand Diversity)
    console.log('Fetching products for each category (diversifying brands)...');
    const catProducts = {};
    const allFetchedProducts = [];

    for (const cat of categories) {
      console.log(`  Processing category: ${cat.slug}...`);
      
      const prodRes = await fetch(`${API_BASE}/products?category=${cat.slug}&limit=50`, {
        headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' }
      });

      if (prodRes.ok) {
        const json = await prodRes.json();
        const rawData = json.data || [];
        allFetchedProducts.push(...rawData);
        
        // Diversity Logic: Group by brand, take max 3 per brand
        const brandGroups = {};
        for (const item of rawData) {
          const brand = item.brand || 'Other';
          if (!brandGroups[brand]) brandGroups[brand] = [];
          brandGroups[brand].push(item);
        }

        const diversified = [];
        const brands = Object.keys(brandGroups).filter(b => b.toLowerCase() !== 'other' && b.toLowerCase() !== 'unknown');
        
        let brandIdx = 0;
        const brandCounters = {};
        
        while (diversified.length < 50 && brands.length > 0) {
          const brand = brands[brandIdx % brands.length];
          brandCounters[brand] = (brandCounters[brand] || 0);
          
          if (brandGroups[brand].length > brandCounters[brand]) {
            diversified.push(brandGroups[brand][brandCounters[brand]]);
            brandCounters[brand]++;
          }
          
          brandIdx++;
          if (brandIdx > brands.length * 50) break; 
        }

        if (diversified.length < 50) {
          for (const item of rawData) {
            if (diversified.length >= 50) break;
            if (!diversified.find(d => d.slug === item.slug)) {
              diversified.push(item);
            }
          }
        }

        catProducts[cat.slug] = diversified;
      }
    }

    // 4. Handle "Virtual" Categories (Electronics, Clothing, Jersey)
    console.log('Handling virtual categories...');

    // A. Electronics (Aggregate from children)
    const electronicsChildren = categories.filter(c => c.parentSlug === 'electronics').map(c => c.slug);
    catProducts['electronics'] = [];
    for (const child of electronicsChildren) {
      catProducts['electronics'].push(...(catProducts[child] || []));
    }
    catProducts['electronics'] = catProducts['electronics'].slice(0, 50);

    // B. Clothing (Aggregate from children)
    const clothingChildren = categories.filter(c => c.parentSlug === 'clothing').map(c => c.slug);
    catProducts['clothing'] = [];
    for (const child of clothingChildren) {
      catProducts['clothing'].push(...(catProducts[child] || []));
    }
    catProducts['clothing'] = catProducts['clothing'].slice(0, 50);

    // C. Jersey (Search in all fetched products)
    catProducts['jersey'] = allFetchedProducts
      .filter(p => p.title.toLowerCase().includes('jersey'))
      .filter((v, i, a) => a.findIndex(t => t.slug === v.slug) === i) // Unique
      .slice(0, 50);

    // Fallback for featured products if still empty
    if (featuredProducts.length === 0) {
      console.log('Featured products still empty, picking from categories...');
      const fallbackPool = [];
      for (const catSlug in catProducts) {
        fallbackPool.push(...catProducts[catSlug]);
      }
      // Shuffle and take 60
      if (fallbackPool.length > 0) {
        featuredProducts.push(...fallbackPool.sort(() => 0.5 - Math.random()).slice(0, 60));
      }
    }
    
    if (featuredProducts.length > 0) {
      console.log(`Successfully prepared ${featuredProducts.length} featured products.`);
      await fs.writeFile(path.join(DATA_DIR, 'featured-products.json'), JSON.stringify(featuredProducts, null, 2));
    } else {
      console.log('No featured products found, skipping file write to preserve existing data.');
    }

    if (Object.keys(catProducts).length > 0) {
      await fs.writeFile(path.join(DATA_DIR, 'category-products.json'), JSON.stringify(catProducts, null, 2));
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
