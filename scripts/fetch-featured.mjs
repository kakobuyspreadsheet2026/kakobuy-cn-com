import fs from 'node:fs/promises';
import path from 'node:path';

const API_BASE = 'https://api.maisonlooks.com/public/v1';
const API_KEY = 'ml_pub_40a7fda08f34b8e6c37b22748469f5d5';
const OUT_FILE = './src/data/api/featured-products.json';

async function fetchFeatured() {
  console.log('Fetching premium branded products from MaisonLooks API...');
  
  try {
    // 1. Fetch featured outfits
    const outfitRes = await fetch(`${API_BASE}/outfits?featured=true&limit=50`, {
      headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' }
    });
    if (!outfitRes.ok) throw new Error(`Outfit API error: ${outfitRes.status}`);
    const outfitJson = await outfitRes.json();
    const outfits = outfitJson.data || [];
    
    // 2. Extract product slugs
    const productSlugs = [...new Set(outfits.flatMap(o => o.productSlugs))];
    console.log(`Found ${productSlugs.length} unique products in featured outfits.`);
    
    // 3. Fetch product details and filter by brand
    const products = [];
    const seenSlugs = new Set();

    for (const slug of productSlugs) {
      if (products.length >= 30) break;
      
      try {
        const prodRes = await fetch(`${API_BASE}/products/${slug}`, {
          headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' }
        });
        
        if (prodRes.ok) {
          const prod = await prodRes.json();
          // FILTER: Skip "Other" brand or empty brands
          const brand = (prod.brand || '').toLowerCase();
          if (brand && brand !== 'other' && brand !== 'unknown') {
            products.push(prod);
            seenSlugs.add(prod.slug);
          }
        }
      } catch (e) {
        console.warn(`Failed to fetch product ${slug}:`, e.message);
      }
    }

    // 4. Fallback: If still not enough, fetch latest products but keep filtering "Other"
    if (products.length < 15) {
      console.log('Not enough branded products from outfits, fetching latest branded products as fallback...');
      const latestRes = await fetch(`${API_BASE}/products?limit=100`, {
        headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' }
      });
      
      if (latestRes.ok) {
        const latestJson = await latestRes.json();
        const latestItems = latestJson.data || [];
        
        for (const item of latestItems) {
          if (products.length >= 30) break;
          if (seenSlugs.has(item.slug)) continue;
          
          const brand = (item.brand || '').toLowerCase();
          if (brand && brand !== 'other' && brand !== 'unknown') {
            products.push(item);
            seenSlugs.add(item.slug);
          }
        }
      }
    }

    await fs.writeFile(OUT_FILE, JSON.stringify(products, null, 2));
    console.log(`Successfully saved ${products.length} premium branded products to ${OUT_FILE}`);
  } catch (error) {
    console.error('Failed to fetch products:', error.message);
    process.exit(1);
  }
}

fetchFeatured();
