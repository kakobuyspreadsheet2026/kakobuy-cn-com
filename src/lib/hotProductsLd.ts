import products from '../data/api/featured-products.json';
import { buildProductUiCategoryIndex } from './catalogUiCategories';
import { catalogItemListLd } from './catalogItemListLd';
import { productDetailAbsoluteUrl } from './productDetailRoutes';

export function getHotProductsLd(origin: string) {
  const productUiCategoryIndex = buildProductUiCategoryIndex();
  const slice = products
    .filter((p) => productUiCategoryIndex.has(p.slug))
    .slice(0, 20);

  return catalogItemListLd('Trending Kakobuy Spreadsheet Finds', slice, (p) => {
    const uiCategorySlug = productUiCategoryIndex.get(p.slug);
    if (!uiCategorySlug) return `${origin}/`;
    return productDetailAbsoluteUrl('en', uiCategorySlug, p.slug, origin);
  });
}
