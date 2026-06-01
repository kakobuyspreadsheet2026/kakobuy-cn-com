import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/** Must match `site` — used for sitemap URLs. */
const site = 'https://kakobuy-cn.com';

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      /** Ensure trailing-slash URLs for routes that need explicit inclusion (must stay crawlable). */
      customPages: [
        new URL('/news/openstar-recruit/', site).href,
        new URL('/promotions/kakobuy-may-2026/', site).href,
      ],
      filter: (page) => {
        const url = new URL(page);
        const path = url.pathname;
        // Exclude product detail pages: /spreadsheet/[category]/[slug]/
        // Note: /spreadsheet/ itself should stay.
        const segs = path.split('/').filter(Boolean);
        if (segs[0] === 'spreadsheet' && segs.length >= 3) {
          return false;
        }
        return true;
      },
    }),
  ],
  compressHTML: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'pt', 'es', 'fr', 'it', 'pl'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  /**
   * Dev on **4788** on purpose: many machines still have another Astro (e.g. `oopbuyai-com`)
   * bound on **4321** for IPv4 while **IPv6 ::1:4321** serves `astro preview` — `localhost:4321`
   * then loads the wrong site. Use `http://127.0.0.1:4788/` for this hub.
   */
  server: {
    port: 4788,
    host: true,
    open: '/',
    headers: {
      'Cache-Control': 'no-store',
    },
  },
});
