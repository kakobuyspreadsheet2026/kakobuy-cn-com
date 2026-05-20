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
    const outfitRes = await fetch(`${API_BASE}/outfits?featured=true&limit=100`, {
      headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' }
    });
    const outfitJson = await outfitRes.json();
    const featuredSlugs = [...new Set((outfitJson.data || []).flatMap(o => o.productSlugs))];
    
    const featuredProducts = [];
    for (const slug of featuredSlugs.slice(0, 100)) {
      if (featuredProducts.length >= 60) break;
      const res = await fetch(`${API_BASE}/products/${slug}`, {
        headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' }
      });
      if (res.ok) {
        const prod = await res.json();
        if (prod.brand && prod.brand.toLowerCase() !== 'other' && prod.brand.toLowerCase() !== 'unknown') {
          featuredProducts.push(prod);
        }
      }
    }
    await fs.writeFile(path.join(DATA_DIR, 'featured-products.json'), JSON.stringify(featuredProducts, null, 2));

    // 3. Fetch Products for each Category (with Brand Diversity)
    console.log('Fetching products for each category (diversifying brands)...');
    const categoryProducts = {};
    const allFetchedProducts = [];

    for (const cat of categories) {
      console.log(`  Processing category: ${cat.slug}...`);
      
      const prodRes = await fetch(`${API_BASE}/products?category=${cat.slug}&limit=100`, {
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
        const brands = Object.keys(brandGroups).filter(b => b.toLowerCase() !== 'other');
        
        let brandIdx = 0;
        const brandCounters = {};
        
        while (diversified.length < 20 && brands.length > 0) {
          const brand = brands[brandIdx % brands.length];
          brandCounters[brand] = (brandCounters[brand] || 0);
          
          if (brandGroups[brand].length > brandCounters[brand]) {
            diversified.push(brandGroups[brand][brandCounters[brand]]);
            brandCounters[brand]++;
          }
          
          brandIdx++;
          if (brandIdx > brands.length * 20) break; 
        }

        if (diversified.length < 20) {
          for (const item of rawData) {
            if (diversified.length >= 20) break;
            if (!diversified.find(d => d.slug === item.slug)) {
              diversified.push(item);
            }
          }
        }

        categoryProducts[cat.slug] = diversified;
      }
    }

    // 4. Handle "Virtual" Categories (Electronics, Clothing, Jersey)
    console.log('Handling virtual categories...');

    // A. Electronics (Aggregate from children)
    const electronicsChildren = categories.filter(c => c.parentSlug === 'electronics').map(c => c.slug);
    categoryProducts['electronics'] = [];
    for (const child of electronicsChildren) {
      categoryProducts['electronics'].push(...(categoryProducts[child] || []));
    }
    categoryProducts['electronics'] = categoryProducts['electronics'].slice(0, 20);

    // B. Clothing (Aggregate from children)
    const clothingChildren = categories.filter(c => c.parentSlug === 'clothing').map(c => c.slug);
    categoryProducts['clothing'] = [];
    for (const child of clothingChildren) {
      categoryProducts['clothing'].push(...(categoryProducts[child] || []));
    }
    categoryProducts['clothing'] = categoryProducts['clothing'].slice(0, 20);

    // C. Jersey (Search in all fetched products)
    categoryProducts['jersey'] = allFetchedProducts
      .filter(p => p.title.toLowerCase().includes('jersey'))
      .filter((v, i, a) => a.findIndex(t => t.slug === v.slug) === i) // Unique
      .slice(0, 20);

    await fs.writeFile(path.join(DATA_DIR, 'category-products.json'), JSON.stringify(categoryProducts, null, 2));

    console.log('Full diversified data fetch completed successfully.');
  } catch (error) {
    console.error('Data fetch failed:', error.message);
    process.exit(1);
  }
}

fetchAllData();
