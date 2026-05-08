export const ml = 'https://maisonlooks.com/en';

/** English catalogue base URL for Kakobuy Spreadsheet browse (site primary locale). */
export const mlSpreadsheetKakobuy = `${ml}/spreadsheet/kakobuy`;

/** Site branding (aligned with `<meta property="og:site_name">` and JSON-LD). */
export const siteName = 'Kakobuy Spreadsheet Hub';

/**
 * TOP promo strip image (wide banner). Replace with a Kakobuy-hosted asset when you have one;
 * current URL may still resolve from legacy CDNs — swap before launch if off-brand.
 */
export const kakobuyTopBannerImageUrl =
  'https://libcdn1.hahbuy.com/prod/banner/TOP/20260324/PC%E6%A8%AA%E5%B9%853x_1774318924268.png';

/** Centered strip inner max width (CSS px); full-bleed black rail wraps this. */
export const kakobuyTopBannerInnerMaxPx = 1920;

/**
 * Kakobuy-style homepage hero background (official CDN asset referenced from kakobuy.com HTML).
 * Swap if you prefer a self-hosted image under `/public/`.
 */
export const kakobuyHomeHeroBannerUrl =
  'https://nstatic.kakobuy.com/banner/202602/22/ab3a65c9bec3db13c1ba90d790b76781.jpeg';

/** Thin homepage promo strip above nav (same asset rules as kakobuy.com: img max-height 40px, max-width 100%). */
export const kakobuyHomeTopStripBannerUrl =
  'https://nstatic.kakobuy.com/banner/202605/07/d95c7e68b8c432b1ca1f18189308fb39.png';

/** Default Discord invite (TOP banner `/join/discord` redirect + floating dock). Override with `PUBLIC_KAKOBUY_DISCORD_URL` or `PUBLIC_FLOAT_DISCORD_URL`. */
export const defaultKakobuyDiscordUrl = 'https://discord.gg/9hrqg53zgs';

/** Community subreddit referenced across the hub (floating dock, stubs). Override Reddit URL via `PUBLIC_FLOAT_REDDIT_URL` where applicable. */
export const defaultCommunityRedditUrl = 'https://www.reddit.com/r/kakobuy/';

/** Default WhatsApp deep link for floating dock; override with `PUBLIC_FLOAT_WHATSAPP_URL`. */
export const defaultFloatingWhatsappUrl = 'https://wa.me/447594927259';

/**
 * Default floating-dock intro MP4 (official Kakobuy `nstatic`).
 * Override with `PUBLIC_FLOAT_VIDEO_URL` (any HTTPS MP4 or same-origin path).
 */
export const defaultFloatingIntroVideoUrl =
  'https://nstatic.kakobuy.com/www/kakobuy.mp4';

/**
 * Default Open Graph / Twitter preview image (public path, resolved with `Astro.site`).
 * Standard 1200×630 for large social link previews.
 */
export const defaultOgImagePath = '/og-default.png';
export const defaultOgImageWidth = 1200;
export const defaultOgImageHeight = 630;

/** Logo for JSON-LD `Organization` (min ~112×112 recommended; we use 512×512 PNG). */
export const structuredDataLogoPath = '/logo-512.png';
export const structuredDataLogoWidth = 512;
export const structuredDataLogoHeight = 512;

/** Stable JSON-LD `@id`s — must stay in sync with `src/layouts/Layout.astro`. */
export function siteStructuredDataIds(siteOrigin: string) {
  const o = siteOrigin.replace(/\/$/, '');
  return {
    organizationId: `${o}/#organization`,
    websiteId: `${o}/#website`,
  } as const;
}
