import products from '../data/api/featured-products.json';

export function getHotProductsLd(origin: string) {
  const itemListElement = products.slice(0, 20).map((p, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Product',
      name: p.title,
      image: p.images[0],
      description: p.description,
      brand: {
        '@type': 'Brand',
        name: p.brand,
      },
      offers: {
        '@type': 'Offer',
        price: p.priceUsdEstimate[0],
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `https://maisonlooks.com/p/${p.slug}`,
      },
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Trending Kakobuy Spreadsheet Finds',
    numberOfItems: itemListElement.length,
    itemListElement,
  };
}
