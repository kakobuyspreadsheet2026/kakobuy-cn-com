import { getRelativeLocaleUrl } from 'astro:i18n';
import { absoluteCanonicalUrl } from './canonicalPath';

export function productDetailHref(
  locale: string,
  categorySlug: string,
  slug: string,
): string {
  return getRelativeLocaleUrl(locale, `spreadsheet/${categorySlug}/${slug}/`);
}

export function productDetailAbsoluteUrl(
  locale: string,
  categorySlug: string,
  slug: string,
  site: URL | string | undefined,
): string {
  return absoluteCanonicalUrl(productDetailHref(locale, categorySlug, slug), site);
}
