/** Curated internal blog links for hub pages (how-to-buy, spreadsheet, categories). */

export type RelatedGuideEntry = {
  slug: string;
  title: string;
  description: string;
};

export const HOW_TO_BUY_RELATED_GUIDES: readonly RelatedGuideEntry[] = [
  {
    slug: 'kakobuy-spreadsheet-to-parcel-checklist',
    title: 'Spreadsheet → parcel checklist',
    description: 'Paste, QC, consolidate, and ship in order.',
  },
  {
    slug: 'kakobuy-links-discovery-url-hygiene',
    title: 'URL discovery & link hygiene',
    description: 'Stable Taobao, Weidian, and 1688 URLs before paste.',
  },
  {
    slug: 'kakobuy-spreadsheet-qc',
    title: 'Warehouse QC guide',
    description: 'What inbound photos can and cannot prove.',
  },
  {
    slug: 'kakobuy-taobao',
    title: 'Kakobuy & Taobao',
    description: 'SKU grids, variants, and mobile redirect traps.',
  },
  {
    slug: 'kakobuy-weidian',
    title: 'Kakobuy & Weidian',
    description: 'Album vs item URLs and fashion-forward rows.',
  },
];

export const SPREADSHEET_RELATED_GUIDES: readonly RelatedGuideEntry[] = [
  {
    slug: 'kakobuy-spreadsheet-browse-navigation-guide',
    title: 'Browse navigation guide',
    description: 'Featured grid, categories, and full directory layers.',
  },
  {
    slug: 'kakobuy-spreadsheet-brands-catalog-2026',
    title: '2026 brand catalogue',
    description: '140+ labels mapped across twelve homepage lanes.',
  },
  {
    slug: 'kakobuy-first-haul-budget-planner-2026',
    title: 'First haul budget planner',
    description: 'Item spend, fees, and freight in separate buckets.',
  },
  {
    slug: 'browser-extensions-link-rot-prevention',
    title: 'Fighting link rot',
    description: 'Keep spreadsheet links alive as sellers rotate.',
  },
  {
    slug: 'kakobuy-spreadsheet-hubs-compared',
    title: 'Spreadsheet hubs compared',
    description: 'Safety context for third-party catalogue bridges.',
  },
];

export const PILLAR_HUB_GUIDES: readonly RelatedGuideEntry[] = [
  {
    slug: 'kakobuy-spreadsheet-brands-catalog-2026',
    title: 'Brand catalogue guide (2026)',
    description: 'What brand labels appear in our English mirror.',
  },
  {
    slug: 'kakobuy-spreadsheet-browse-navigation-guide',
    title: 'Browse navigation guide',
    description: 'How homepage picks, categories, and deep pools fit together.',
  },
];

/** Lane guide blog slugs surfaced from pillar pages and category hubs. */
export const LANE_GUIDE_INDEX: readonly RelatedGuideEntry[] = [
  {
    slug: 'kakobuy-sneakers-spreadsheet-lane-guide-2026',
    title: 'Sneakers lane guide',
    description: 'Footwear batches, QC, and freight.',
  },
  {
    slug: 'kakobuy-jackets-outerwear-spreadsheet-lane-2026',
    title: 'Jackets & outerwear guide',
    description: 'Parkas, shells, and volumetric freight.',
  },
  {
    slug: 'kakobuy-t-shirts-spreadsheet-lane-guide-2026',
    title: 'T-shirts lane guide',
    description: 'Streetwear tees, print QC, and sizing.',
  },
  {
    slug: 'kakobuy-bags-spreadsheet-lane-guide-2026',
    title: 'Bags lane guide',
    description: 'Leather goods and branded routing.',
  },
  {
    slug: 'kakobuy-perfume-fragrance-spreadsheet-lane-2026',
    title: 'Perfume lane guide',
    description: 'Liquid logistics and bottle QC.',
  },
  {
    slug: 'kakobuy-electronics-spreadsheet-lane-guide-2026',
    title: 'Electronics lane guide',
    description: 'Batteries, IATA rules, and function tests.',
  },
];

export const CATEGORY_RELATED_GUIDES: Record<string, readonly RelatedGuideEntry[]> = {
  shoes: [
    {
      slug: 'kakobuy-sneakers-spreadsheet-lane-guide-2026',
      title: 'Sneakers lane guide (2026)',
      description: '45 rows, batch culture, and QC checkpoints.',
    },
    {
      slug: 'decoding-spreadsheet-batch-prices-discrepancies',
      title: 'Batch price discrepancies',
      description: 'Why identical thumbnails hide ¥ gaps.',
    },
    {
      slug: 'kakobuy-spreadsheet-qc',
      title: 'Warehouse QC guide',
      description: 'Approve or reject before export freight.',
    },
  ],
  't-shirts': [
    {
      slug: 'kakobuy-t-shirts-spreadsheet-lane-guide-2026',
      title: 'T-shirts lane guide (2026)',
      description: '40 rows, print alignment, and sizing.',
    },
    {
      slug: 'kakobuy-sizing-spreadsheet-apparel',
      title: 'Apparel sizing guide',
      description: 'Charts, measurements, and Asian size drift.',
    },
    {
      slug: 'kakobuy-first-haul-budget-planner-2026',
      title: 'First haul budget planner',
      description: 'Build a tee-heavy cart without freight surprises.',
    },
  ],
  pants: [
    {
      slug: 'kakobuy-tracksuits-pants-spreadsheet-lane-2026',
      title: 'Tracksuits & pants guide',
      description: '44 trousers rows plus tracksuit sets.',
    },
    {
      slug: 'kakobuy-jeans-denim-spreadsheet-lane-2026',
      title: 'Jeans & denim guide',
      description: 'Inseam QC and distressed batches.',
    },
    {
      slug: 'kakobuy-sizing-spreadsheet-apparel',
      title: 'Apparel sizing guide',
      description: 'Waist, rise, and length before paste.',
    },
  ],
  jackets: [
    {
      slug: 'kakobuy-jackets-outerwear-spreadsheet-lane-2026',
      title: 'Jackets & outerwear guide',
      description: 'Parkas, badges, and branded shipping.',
    },
    {
      slug: 'kakobuy-coats-trench-spreadsheet-lane-2026',
      title: 'Coats & trench guide',
      description: '30 coat rows and volumetric freight.',
    },
    {
      slug: 'winter-puffer-jacket-shipping-volumetric-hacks',
      title: 'Puffer volumetric hacks',
      description: 'DIM weight tactics for down jackets.',
    },
  ],
  hoodies: [
    {
      slug: 'kakobuy-hoodies-sweatshirts-spreadsheet-lane-2026',
      title: 'Hoodies lane guide (2026)',
      description: '38 rows, embroidery QC, and freight weight.',
    },
    {
      slug: 'kakobuy-sizing-spreadsheet-apparel',
      title: 'Apparel sizing guide',
      description: 'Chest width and sleeve drop measurements.',
    },
    {
      slug: 'group-haul-consolidation-freight-savings',
      title: 'Group haul consolidation',
      description: 'Bundle hoodies with heavier lanes efficiently.',
    },
  ],
  bags: [
    {
      slug: 'kakobuy-bags-spreadsheet-lane-guide-2026',
      title: 'Bags lane guide (2026)',
      description: 'Monogram QC and leather routing.',
    },
    {
      slug: 'shipping-branded-vs-unbranded-spreadsheet-restrictions',
      title: 'Branded vs unbranded shipping',
      description: 'Route restrictions for logo leather goods.',
    },
    {
      slug: 'kakobuy-spreadsheet-brands-catalog-2026',
      title: '2026 brand catalogue',
      description: 'Luxury bag labels across the site mirror.',
    },
  ],
  accessories: [
    {
      slug: 'kakobuy-accessories-spreadsheet-lane-guide-2026',
      title: 'Accessories lane guide',
      description: 'Belts, small leather, and haul fillers.',
    },
    {
      slug: 'kakobuy-belts-spreadsheet-lane-guide-2026',
      title: 'Belts lane guide',
      description: '30 belt rows and buckle macro QC.',
    },
    {
      slug: 'kakobuy-jewelry-watches-spreadsheet-lane-2026',
      title: 'Jewelry & watches guide',
      description: 'Cardholders and timepiece-adjacent rows.',
    },
  ],
  electronics: [
    {
      slug: 'kakobuy-electronics-spreadsheet-lane-guide-2026',
      title: 'Electronics lane guide',
      description: 'Audio, wearables, and battery routing.',
    },
    {
      slug: 'shipping-electronics-batteries-iata-2026-rules',
      title: 'Battery & IATA rules',
      description: 'Which lines accept powered gadgets.',
    },
    {
      slug: 'mixing-categories-outbound-parcel-spreadsheet-2026',
      title: 'Mixed-category parcels',
      description: 'When to split electronics from liquids.',
    },
  ],
  headwear: [
    {
      slug: 'kakobuy-headwear-spreadsheet-lane-guide-2026',
      title: 'Headwear lane guide',
      description: 'Caps, beanies, and embroidery QC.',
    },
    {
      slug: 'kakobuy-t-shirts-spreadsheet-lane-guide-2026',
      title: 'T-shirts lane guide',
      description: 'Pair hats with lightweight tee fillers.',
    },
    {
      slug: 'kakobuy-spreadsheet-qc',
      title: 'Warehouse QC guide',
      description: 'Macro photos for logo alignment.',
    },
  ],
  jersey: [
    {
      slug: 'kakobuy-jersey-sportswear-spreadsheet-lane-2026',
      title: 'Jersey lane guide',
      description: 'Patch alignment and kit sizing.',
    },
    {
      slug: 'kakobuy-sneakers-spreadsheet-lane-guide-2026',
      title: 'Sneakers lane guide',
      description: 'Complete match-day haul planning.',
    },
    {
      slug: 'kakobuy-spreadsheet-qc',
      title: 'Warehouse QC guide',
      description: 'Number and crest spacing checks.',
    },
  ],
  perfume: [
    {
      slug: 'kakobuy-perfume-fragrance-spreadsheet-lane-2026',
      title: 'Perfume lane guide',
      description: 'Liquid routes and glass bottle QC.',
    },
    {
      slug: 'mixing-categories-outbound-parcel-spreadsheet-2026',
      title: 'Mixed-category parcels',
      description: 'Never assume perfume ships with every line.',
    },
    {
      slug: 'kakobuy-first-haul-budget-planner-2026',
      title: 'First haul budget planner',
      description: 'Stack bottles without freight shock.',
    },
  ],
  other: [
    {
      slug: 'kakobuy-spreadsheet-browse-navigation-guide',
      title: 'Browse navigation guide',
      description: 'Find odd-lane rows across the directory.',
    },
    {
      slug: 'kakobuy-formal-dresses-spreadsheet-lane-2026',
      title: 'Formal dresses guide',
      description: 'Silhouette and fit QC for dress rows.',
    },
    {
      slug: 'kakobuy-spreadsheet-brands-catalog-2026',
      title: '2026 brand catalogue',
      description: 'Full brand map across all lanes.',
    },
  ],
};
