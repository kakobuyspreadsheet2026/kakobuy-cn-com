import fs from 'node:fs/promises';
import path from 'node:path';

const API_BASE = 'https://api.maisonlooks.com/public/v1';
const API_KEY = 'ml_pub_40a7fda08f34b8e6c37b22748469f5d5';
const OUT_FILE = './src/data/api/featured-products.json';

async function fetchFeatured() {
  console.log('Fetching featured outfits to find premium products...');
  
  try {
    // 1. Fetch featured outfits
    const outfitRes = await fetch(`${API_BASE}/outfits?featured=true&limit=20`, {
      headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' }
    });
    if (!outfitRes.ok) throw new Error(`Outfit API error: ${outfitRes.status}`);
    const outfitJson = await outfitRes.json();
    const outfits = outfitJson.data || [];
    
    // 2. Extract product slugs
    const productSlugs = [...new Set(outfits.flatMap(o => o.productSlugs))];
    console.log(`Found ${productSlugs.length} unique products in featured outfits.`);
    
    // 3. Fetch product details for each slug
    const products = [];
    for (const slug of productSlugs.slice(0, 30)) {
      try {
        const prodRes = await fetch(`${API_BASE}/products/${slug}`, {
          headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' }
        });
        if (prodRes.ok) {
          const prod = await prodRes.json();
          products.push(prod);
        }
      } catch (e) {
        console.warn(`Failed to fetch product ${slug}:`, e.message);
      }
    }

    // 4. If we don't have enough products, fallback to latest products
    if (products.length < 10) {
      console.log('Not enough products from outfits, fetching latest products as fallback...');
      const latestRes = await fetch(`${API_BASE}/products?limit=20`, {
        headers: { 'X-API-Key': API_KEY, 'Accept': 'application/json' }
      });
      if (latestRes.ok) {
        const latestJson = await latestRes.json();
        const latest = latestJson.data || [];
        // Add only unique ones
        const existingSlugs = new Set(products.map(p => p.slug));
        for (const p of latest) {
          if (!existingSlugs.has(p.slug)) {
            products.push(p);
            existingSlugs.add(p.slug);
          }
        }
      }
    }

    await fs.writeFile(OUT_FILE, JSON.stringify(products, null, 2));
    console.log(`Successfully saved ${products.length} products to ${OUT_FILE}`);
  } catch (error) {
    console.error('Failed to fetch products:', error.message);
    process.exit(1);
  }
}

fetchFeatured();
