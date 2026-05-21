import productDetailSlugs from '../data/productDetailSlugs.json';
import { getRelativeLocaleUrl } from 'astro:i18n';

const DETAIL_SLUGS = new Set(productDetailSlugs);

export function hasProductDetailPage(slug: string): boolean {
  return DETAIL_SLUGS.has(slug);
}

export function productDetailHref(locale: string, slug: string): string {
  return getRelativeLocaleUrl(locale, `product/${slug}/`);
}

export function productCardHref(
  locale: string,
  slug: string,
  externalUrl: string,
): string {
  return hasProductDetailPage(slug) ? productDetailHref(locale, slug) : externalUrl;
}
