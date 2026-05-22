import products from '../data/api/featured-products.json';
import { catalogItemListLd } from './catalogItemListLd';

export function getHotProductsLd(_origin: string) {
  const slice = products.slice(0, 20);
  return catalogItemListLd('Trending Kakobuy Spreadsheet Finds', slice, (p) =>
    `https://maisonlooks.com/p/${p.slug}`,
  );
}
