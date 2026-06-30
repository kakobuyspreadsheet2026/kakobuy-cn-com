/** UI category slugs to surface at the bottom of each blog article. */
const DEFAULT_CATEGORIES = ['shoes', 't-shirts', 'hoodies'] as const;

/** End-of-article hub CTA target. Default is homepage catalogue. */
export type BlogHubLinkKind = 'home' | 'spreadsheet' | 'how-to-buy';

/** Spreadsheet workflow / curation essays — keep linking to `/spreadsheet/`. */
const SPREADSHEET_GUIDE_SLUGS = new Set<string>([
  'browser-extensions-link-rot-prevention',
  'web-spreadsheets-vs-whatsapp-sellers-safety',
  'evolution-of-reps-spreadsheets-excel-to-web',
  'identifying-phishing-spreadsheet-scams-reps-2026',
  'yupoo-album-spreadsheet-kakobuy-intake',
  'telegram-finds-spreadsheet-kakobuy-link-hygiene',
  'spreadsheet-volumetric-chargeable-weight-basics',
  'spreadsheet-row-archiving-vanished-listings',
  'spreadsheet-column-schema-kakobuy-curators',
  'google-sheets-sharing-spreadsheet-curator-opsec',
  'kakobuy-spreadsheet-hubs-compared',
  'decoding-spreadsheet-batch-prices-discrepancies',
  'spotting-red-flag-sellers-community-spreadsheets',
  'qc-websites-landscape',
  'community-crowdsourced-qc-verification-batches',
]);

/** Paste-link / intake walkthroughs — link to `/how-to-buy/`. */
const HOW_TO_BUY_SLUGS = new Set<string>([
  'kakobuy-taobao',
  'kakobuy-weidian',
  'kakobuy-1688',
  'kakobuy-spreadsheet-to-parcel-checklist',
  'kakobuy-links-discovery-url-hygiene',
]);

export const BLOG_HUB_LINK_LABELS: Record<BlogHubLinkKind, string> = {
  home: 'Kakobuy Spreadsheet home',
  spreadsheet: 'Kakobuy Spreadsheet guide',
  'how-to-buy': 'How to buy guide',
};

export function blogSlugFromCanonical(canonicalPath: string): string {
  return canonicalPath.replace(/^\/blog\//, '').replace(/\/$/, '');
}

export function getBlogHubLinkKind(canonicalPath: string): BlogHubLinkKind {
  const slug = blogSlugFromCanonical(canonicalPath);
  if (HOW_TO_BUY_SLUGS.has(slug)) return 'how-to-buy';
  if (SPREADSHEET_GUIDE_SLUGS.has(slug)) return 'spreadsheet';
  return 'home';
}

export function getBlogHubLinkSegment(kind: BlogHubLinkKind): '' | 'spreadsheet/' | 'how-to-buy/' {
  if (kind === 'spreadsheet') return 'spreadsheet/';
  if (kind === 'how-to-buy') return 'how-to-buy/';
  return '';
}

const BLOG_CATALOG_MAP: Record<string, readonly string[]> = {
  'annual-reps-shopping-calendar-2026': ['shoes', 'jackets', 'hoodies'],
  'browser-extensions-link-rot-prevention': ['shoes', 't-shirts', 'accessories'],
  'group-haul-consolidation-freight-savings': ['bags', 'jackets', 'hoodies'],
  'web-spreadsheets-vs-whatsapp-sellers-safety': ['shoes', 't-shirts', 'hoodies'],
  'secure-payment-methods-kakobuy-2026': ['shoes', 'electronics', 'bags'],
  'kakobuy-vip-tier-loyalty-program-worth-it': ['shoes', 't-shirts', 'perfume'],
  'kakobuy-eco-friendly-green-haul-shipping': ['bags', 'jackets', 'electronics'],
  'timing-the-reps-hype-cycle-spreadsheets': ['shoes', 'hoodies', 't-shirts'],
  'kakobuy-app-vs-web-2026-comparison': ['shoes', 'electronics', 'accessories'],
  'evolution-of-reps-spreadsheets-excel-to-web': ['shoes', 't-shirts', 'hoodies'],
  'winter-puffer-jacket-shipping-volumetric-hacks': ['jackets', 'hoodies', 'pants'],
  'weidian-vs-taobao-price-index-2026-report': ['shoes', 't-shirts', 'accessories'],
  'identifying-phishing-spreadsheet-scams-reps-2026': ['shoes', 't-shirts', 'hoodies'],
  'canada-cbsa-customs-declaration-spreadsheet-guide': ['jackets', 'shoes', 'bags'],
  'shipping-electronics-batteries-iata-2026-rules': ['electronics', 'accessories'],
  'eu-ets-shipping-carbon-tax-kakobuy-haul': ['jackets', 'bags', 'electronics'],
  'ai-search-discovery-kakobuy-spreadsheet-reps': ['shoes', 't-shirts', 'hoodies'],
  'us-customs-de-minimis-exemption-kakobuy-spreadsheet': ['shoes', 't-shirts', 'accessories'],
  'yupoo-album-spreadsheet-kakobuy-intake': ['shoes', 'hoodies', 'bags'],
  'telegram-finds-spreadsheet-kakobuy-link-hygiene': ['shoes', 't-shirts', 'accessories'],
  'taobao-tmall-618-2026-spreadsheet-forwarding-rhythm': ['t-shirts', 'shoes', 'electronics'],
  'spreadsheet-volumetric-chargeable-weight-basics': ['jackets', 'bags', 'hoodies'],
  'spreadsheet-row-archiving-vanished-listings': ['shoes', 't-shirts', 'hoodies'],
  'spreadsheet-column-schema-kakobuy-curators': ['shoes', 't-shirts', 'pants'],
  'mega-sale-split-arrivals-consolidation-spreadsheet': ['shoes', 't-shirts', 'hoodies'],
  'kakobuy-net-finds-spreadsheet-lane': ['shoes', 't-shirts', 'accessories'],
  'google-sheets-sharing-spreadsheet-curator-opsec': ['shoes', 'hoodies', 't-shirts'],
  'eu-import-vat-landed-cost-spreadsheet-buyers': ['shoes', 'perfume', 'electronics'],
  'double-11-logistics-interop-spreadsheet-buyers': ['shoes', 't-shirts', 'electronics'],
  'china-public-holidays-agent-forwarding-2026': ['shoes', 't-shirts', 'hoodies'],
  'kakobuy-customs-declared-value-primer': ['shoes', 'bags', 'jackets'],
  'kakobuy-coupons': ['shoes', 't-shirts', 'hoodies'],
  'kakobuy-rehearsal-packaging-freight': ['jackets', 'bags', 'shoes'],
  'kakobuy-1688': ['t-shirts', 'pants', 'other'],
  'kakobuy-taobao': ['t-shirts', 'shoes', 'accessories'],
  'kakobuy-weidian': ['shoes', 'hoodies', 'bags'],
  'kakobuy-discord': ['shoes', 'jersey', 'hoodies'],
  'kakobuy-spreadsheet-reddit': ['shoes', 't-shirts', 'hoodies'],
  'kakobuy-spreadsheet-to-parcel-checklist': ['shoes', 'hoodies', 'jackets'],
  'kakobuy-spreadsheet-hubs-compared': ['shoes', 't-shirts', 'hoodies'],
  'kakobuy-links-discovery-url-hygiene': ['shoes', 'accessories', 't-shirts'],
  'oopbuy-agent-user-experience-shell': ['shoes', 't-shirts', 'hoodies'],
  'kakobuy-top-up-payment-rails-exchange-rates': ['electronics', 'shoes', 'bags'],
  'reverse-image-search-taobao-weidian-listings': ['shoes', 't-shirts', 'accessories'],
  'kakobuy-domestic-returns-before-international-ship': ['shoes', 't-shirts', 'hoodies'],
  'kakobuy-warehouse-storage-spreadsheet': ['shoes', 'jackets', 'bags'],
  'litbuy-agent-taobao-weidian-context': ['shoes', 't-shirts', 'accessories'],
  'kakobuy-sizing-spreadsheet-apparel': ['shoes', 't-shirts', 'pants', 'hoodies'],
  'kakobuy-mobile-spreadsheet-shopping-guide-2026': ['shoes', 't-shirts', 'hoodies'],
  'kakobuy-freight-line-picker-spreadsheet-2026': ['shoes', 'jackets', 'bags'],
  'kakobuy-gift-season-spreadsheet-planning-2026': ['jackets', 'hoodies', 'bags'],
  'kakobuy-warehouse-hold-summer-2026': ['shoes', 't-shirts', 'hoodies'],
  'kakobuy-customs-seizure-aftercare-spreadsheet-2026': ['shoes', 'bags', 'jackets'],
  'spreadsheet-wrong-variant-recovery-2026': ['shoes', 't-shirts', 'hoodies'],
  'kakobuy-third-haul-veteran-spreadsheet-playbook-2026': ['shoes', 'hoodies', 'bags'],
  'mixing-categories-outbound-parcel-spreadsheet-2026': ['shoes', 'perfume', 'electronics'],
  'shoe-box-keep-or-drop-consolidation-2026': ['shoes', 't-shirts', 'hoodies'],
  'qc-retake-reject-decision-spreadsheet-2026': ['shoes', 'hoodies', 'jackets'],
  'summer-lightweight-haul-freight-2026': ['t-shirts', 'pants', 'shoes'],
  'australia-customs-kakobuy-spreadsheet-import-2026': ['shoes', 'jackets', 't-shirts'],
  'france-douane-kakobuy-spreadsheet-import-2026': ['shoes', 'bags', 'perfume'],
  'germany-zoll-kakobuy-spreadsheet-import-2026': ['shoes', 'jackets', 'bags'],
  'kakobuy-formal-dresses-spreadsheet-lane-2026': ['other', 'jackets', 'accessories'],
  'kakobuy-belts-spreadsheet-lane-guide-2026': ['accessories', 'bags', 'shoes'],
  'kakobuy-coats-trench-spreadsheet-lane-2026': ['jackets', 'hoodies', 'pants'],
  'kakobuy-blazers-formal-spreadsheet-lane-2026': ['jackets', 'pants', 'accessories'],
  'kakobuy-jeans-denim-spreadsheet-lane-2026': ['pants', 't-shirts', 'shoes'],
  'kakobuy-jewelry-watches-spreadsheet-lane-2026': ['accessories', 'bags', 'shoes'],
  'kakobuy-second-haul-spreadsheet-strategy-2026': ['shoes', 'hoodies', 't-shirts'],
  'kakobuy-tracksuits-pants-spreadsheet-lane-2026': ['pants', 'hoodies', 'shoes'],
  'uk-hmrc-kakobuy-spreadsheet-import-guide-2026': ['shoes', 'jackets', 'bags'],
  'kakobuy-headwear-spreadsheet-lane-guide-2026': ['headwear', 't-shirts', 'hoodies'],
  'kakobuy-jersey-sportswear-spreadsheet-lane-2026': ['jersey', 'shoes', 't-shirts'],
  'kakobuy-accessories-spreadsheet-lane-guide-2026': ['accessories', 'bags', 'shoes'],
  'kakobuy-electronics-spreadsheet-lane-guide-2026': ['electronics', 'accessories'],
  'kakobuy-hoodies-sweatshirts-spreadsheet-lane-2026': ['hoodies', 't-shirts', 'jackets'],
  'kakobuy-t-shirts-spreadsheet-lane-guide-2026': ['t-shirts', 'hoodies', 'headwear'],
  'kakobuy-bags-spreadsheet-lane-guide-2026': ['bags', 'accessories', 'jackets'],
  'kakobuy-first-haul-budget-planner-2026': ['shoes', 't-shirts', 'hoodies'],
  'kakobuy-sneakers-spreadsheet-lane-guide-2026': ['shoes', 'jersey', 'pants'],
  'kakobuy-perfume-fragrance-spreadsheet-lane-2026': ['perfume', 'accessories', 'other'],
  'kakobuy-spreadsheet-browse-navigation-guide': ['shoes', 't-shirts', 'hoodies'],
  'kakobuy-jackets-outerwear-spreadsheet-lane-2026': ['jackets', 'hoodies', 'pants'],
  'kakobuy-spreadsheet-brands-catalog-2026': ['shoes', 'bags', 'jackets'],
  'kakobuy-spreadsheet-qc': ['shoes', 'hoodies', 'jackets'],
  'kakobuy-4k-qc-video-inspection-guide': ['shoes', 'hoodies', 'jackets'],
  'community-crowdsourced-qc-verification-batches': ['shoes', 'jersey', 'hoodies'],
  'qc-websites-landscape': ['shoes', 'bags', 'electronics'],
  'shipping-branded-vs-unbranded-spreadsheet-restrictions': ['shoes', 'jackets', 'bags'],
  'decoding-spreadsheet-batch-prices-discrepancies': ['shoes', 'hoodies', 't-shirts'],
  'spotting-red-flag-sellers-community-spreadsheets': ['shoes', 't-shirts', 'accessories'],
  'mathematics-of-volumetric-weight-spreadsheet-freight': ['jackets', 'bags', 'hoodies'],
  'rehearsal-packaging-spreadsheet-power-users-guide': ['shoes', 'jackets', 'pants'],
};

export function getBlogCatalogCategories(canonicalPath: string): string[] {
  const slug = blogSlugFromCanonical(canonicalPath);
  const mapped = BLOG_CATALOG_MAP[slug];
  return mapped ? [...mapped] : [...DEFAULT_CATEGORIES];
}
