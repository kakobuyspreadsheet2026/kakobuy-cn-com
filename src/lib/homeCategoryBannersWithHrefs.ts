import homeCategoryBannersData from '../data/homeCategoryBanners.json';
import { ml } from '../consts';
import { getRelativeLocaleUrl } from 'astro:i18n';

export type HomeCategoryBannerRow = (typeof homeCategoryBannersData)[number] & { href?: string };

/** Six tap URLs for the homepage / News banner strip — keep `NewsPageBody` card CTAs in lockstep. */
export function homeCategoryBannerTapUrls(locale: string) {
  const howToHref = getRelativeLocaleUrl(locale, 'how-to-buy');
  /** Locale-agnostic path so `/de/…` home still resolves to the same EN mirror article. */
  const mayPromoHref = '/promotions/kakobuy-may-2026';
  return [
    'https://discord.com/invite/9hrqg53zgs',
    'https://kakobuy.com/',
    mayPromoHref,
    ml,
    ml,
    howToHref,
  ] as const;
}

/**
 * Homepage / News promo strip: pairs each banner asset with its tap target.
 * Index 2 is the May 2026 promotions detail page (EN hub mirror).
 */
export function homeCategoryBannersWithHrefs(locale: string): HomeCategoryBannerRow[] {
  const hrefs = homeCategoryBannerTapUrls(locale);

  return homeCategoryBannersData.map((b, i) => ({
    ...b,
    ...(hrefs[i] ? { href: hrefs[i]! } : {}),
  }));
}
