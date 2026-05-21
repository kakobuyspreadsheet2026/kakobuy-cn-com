import products from '../data/api/featured-products.json';
import { productSchemaRatingFields } from './productAggregateRating';

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
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: {
            '@type': 'MonetaryAmount',
            value: '5.00',
            currency: 'USD',
          },
          shippingDestination: {
            '@type': 'DefinedRegion',
            addressCountry: 'US',
          },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: {
              '@type': 'QuantitativeValue',
              minValue: 1,
              maxValue: 3,
              unitCode: 'd',
            },
            transitTime: {
              '@type': 'QuantitativeValue',
              minValue: 7,
              maxValue: 15,
              unitCode: 'd',
            },
          },
        },
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy',
          applicableCountry: 'US',
          returnPolicyCategory: 'MerchantReturnFiniteReturnPeriod',
          merchantReturnDays: 7,
          returnMethod: 'ReturnByMail',
          returnFees: 'FreeReturn',
        },
      },
      ...productSchemaRatingFields(p.slug),
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
