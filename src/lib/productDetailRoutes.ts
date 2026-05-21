import { getRelativeLocaleUrl } from 'astro:i18n';
import { absoluteCanonicalUrl } from './canonicalPath';

/** PDP routes are EN-only (`/spreadsheet/{category}/{slug}/`); ignore page locale for hrefs. */
export function productDetailHref(
  _locale: string,
  categorySlug: string,
  slug: string,
): string {
  return getRelativeLocaleUrl('en', `spreadsheet/${categorySlug}/${slug}/`);
}

export function productDetailAbsoluteUrl(
  locale: string,
  categorySlug: string,
  slug: string,
  site: URL | string | undefined,
): string {
  return absoluteCanonicalUrl(productDetailHref(locale, categorySlug, slug), site);
}
