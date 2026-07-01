import categoryProducts from '../data/api/category-products.json';
import { defaultOgImagePath } from '../consts';
import { getBlogCatalogCategories, blogSlugFromCanonical } from './blogCatalogCrossLinkMap';

type CatalogProduct = {
  slug: string;
  title: string;
  brand?: string;
  images?: string[];
  qcPhotoCount?: number;
};

export type BlogHeroMeta = {
  /** Hero + listing thumbnail URL (absolute CDN or site-relative path). */
  imageUrl: string;
  alt: string;
  /** Same as imageUrl unless a dedicated OG asset is added later. */
  ogImageUrl: string;
  isDefault: boolean;
};

export type BlogInlineFigure = {
  src: string;
  alt: string;
  caption: string;
  href?: string;
};

const PILLAR_SLUGS = new Set([
  'kakobuy-spreadsheet-brands-catalog-2026',
  'kakobuy-spreadsheet-browse-navigation-guide',
]);

const PILLAR_HERO_PATH = '/hero-banner.jpg';

/** UI category slug (matches `/category/[slug]/`) → API pool key in `category-products.json`. */
const UI_TO_API_CATEGORY: Record<string, string> = {
  shoes: 'sneakers',
  't-shirts': 't-shirts',
  pants: 'trousers-pants',
  accessories: 'accessory-others',
  bags: 'bags-backpacks',
  electronics: 'electronics',
  jackets: 'jackets',
  hoodies: 'hoodies-sweatshirts',
  headwear: 'headwear',
  jersey: 'jersey',
  perfume: 'perfume',
  other: 'formal-dresses',
};

const LANE_PRIMARY_UI_CATEGORY: Record<string, string> = {
  'kakobuy-sneakers-spreadsheet-lane-guide-2026': 'shoes',
  'kakobuy-t-shirts-spreadsheet-lane-guide-2026': 't-shirts',
  'kakobuy-hoodies-sweatshirts-spreadsheet-lane-2026': 'hoodies',
  'kakobuy-jackets-outerwear-spreadsheet-lane-2026': 'jackets',
  'kakobuy-coats-trench-spreadsheet-lane-2026': 'jackets',
  'kakobuy-blazers-formal-spreadsheet-lane-2026': 'jackets',
  'kakobuy-jeans-denim-spreadsheet-lane-2026': 'pants',
  'kakobuy-tracksuits-pants-spreadsheet-lane-2026': 'pants',
  'kakobuy-bags-spreadsheet-lane-guide-2026': 'bags',
  'kakobuy-electronics-spreadsheet-lane-guide-2026': 'electronics',
  'kakobuy-perfume-fragrance-spreadsheet-lane-2026': 'perfume',
  'kakobuy-headwear-spreadsheet-lane-guide-2026': 'headwear',
  'kakobuy-jersey-sportswear-spreadsheet-lane-2026': 'jersey',
  'kakobuy-jewelry-watches-spreadsheet-lane-2026': 'accessories',
  'kakobuy-belts-spreadsheet-lane-guide-2026': 'accessories',
  'kakobuy-accessories-spreadsheet-lane-guide-2026': 'accessories',
  'kakobuy-formal-dresses-spreadsheet-lane-2026': 'other',
};

const QC_SLUGS = new Set([
  'kakobuy-spreadsheet-qc',
  'kakobuy-4k-qc-video-inspection-guide',
  'qc-retake-reject-decision-spreadsheet-2026',
  'community-crowdsourced-qc-verification-batches',
  'qc-websites-landscape',
]);

function slugHash(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i += 1) {
    h = (Math.imul(31, h) + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

function productsForUiCategory(uiCategory: string): CatalogProduct[] {
  const apiKey = UI_TO_API_CATEGORY[uiCategory] ?? uiCategory;
  const pool = (categoryProducts as Record<string, CatalogProduct[]>)[apiKey];
  return Array.isArray(pool) ? pool.filter((p) => p.images?.[0]) : [];
}

function pickProduct(
  slug: string,
  uiCategories: readonly string[],
  preferQc = false,
): CatalogProduct | undefined {
  for (const uiCat of uiCategories) {
    const pool = productsForUiCategory(uiCat);
    if (pool.length === 0) continue;

    const sorted = [...pool].sort((a, b) => a.slug.localeCompare(b.slug));
    const qcPool = preferQc ? sorted.filter((p) => (p.qcPhotoCount ?? 0) > 0) : sorted;
    const pickFrom = qcPool.length > 0 ? qcPool : sorted;
    const idx = slugHash(slug) % pickFrom.length;
    return pickFrom[idx];
  }
  return undefined;
}

function productHero(product: CatalogProduct, label: string): BlogHeroMeta {
  const imageUrl = product.images![0];
  const brand = product.brand?.trim();
  const alt = brand
    ? `${label}: ${brand} row on the Kakobuy Spreadsheet catalogue`
    : `${label} on the Kakobuy Spreadsheet catalogue`;
  return { imageUrl, alt, ogImageUrl: imageUrl, isDefault: false };
}

function defaultHero(): BlogHeroMeta {
  return {
    imageUrl: defaultOgImagePath,
    alt: 'Kakobuy Spreadsheet Hub editorial guide',
    ogImageUrl: defaultOgImagePath,
    isDefault: true,
  };
}

function pillarHero(slug: string): BlogHeroMeta {
  const alt =
    slug === 'kakobuy-spreadsheet-brands-catalog-2026'
      ? 'Kakobuy Spreadsheet brands catalogue — editorial pillar guide'
      : 'Browse the Kakobuy Spreadsheet by category — navigation guide';
  return {
    imageUrl: PILLAR_HERO_PATH,
    alt,
    ogImageUrl: PILLAR_HERO_PATH,
    isDefault: false,
  };
}

export function getBlogHeroMeta(slug: string, headline?: string): BlogHeroMeta {
  if (PILLAR_SLUGS.has(slug)) {
    return pillarHero(slug);
  }

  const laneCategory = LANE_PRIMARY_UI_CATEGORY[slug];
  if (laneCategory) {
    const product = pickProduct(slug, [laneCategory]);
    if (product) {
      const label = headline?.replace(/\s*\(20\d\d\)\s*$/, '').trim() ?? 'Lane guide';
      return productHero(product, label);
    }
  }

  const catalogCategories = getBlogCatalogCategories(`/blog/${slug}/`);
  const product = pickProduct(slug, catalogCategories, QC_SLUGS.has(slug));
  if (product) {
    return productHero(product, headline ?? 'Kakobuy Spreadsheet guide');
  }

  return defaultHero();
}

export function getBlogHeroFromCanonical(canonicalPath: string, headline?: string): BlogHeroMeta {
  return getBlogHeroMeta(blogSlugFromCanonical(canonicalPath), headline);
}

function figureFromProduct(
  product: CatalogProduct | undefined,
  alt: string,
  caption: string,
  href?: string,
): BlogInlineFigure | undefined {
  const src = product?.images?.[0];
  if (!src) return undefined;
  return { src, alt, caption, href };
}

function findProductWithQc(minCount = 1): CatalogProduct | undefined {
  const sneakers = productsForUiCategory('shoes');
  return sneakers.find((p) => (p.qcPhotoCount ?? 0) >= minCount);
}

/** Phase C — contextual inline figures for tutorial / pillar posts. */
export function getBlogInlineFigures(slug: string): BlogInlineFigure[] {
  const shoes = pickProduct(`${slug}-fig-a`, ['shoes']);
  const bags = pickProduct(`${slug}-fig-b`, ['bags']);
  const hoodies = pickProduct(`${slug}-fig-c`, ['hoodies']);
  const qcShoe = findProductWithQc(5);

  switch (slug) {
    case 'kakobuy-spreadsheet-browse-navigation-guide':
      return [
        figureFromProduct(
          shoes,
          'Sneakers category rows on kakobuy-cn.com',
          'Start from a category shortcut on the homepage, then drill into lane rows before you paste into Kakobuy.',
          '/category/shoes/',
        ),
        figureFromProduct(
          hoodies,
          'Hoodies lane on the Kakobuy Spreadsheet mirror',
          'Each card is a curated row—thumbnail, brand label, and paste-ready metadata—not a checkout page.',
          '/category/hoodies/',
        ),
      ].filter(Boolean) as BlogInlineFigure[];

    case 'kakobuy-spreadsheet-brands-catalog-2026':
      return [
        figureFromProduct(
          bags,
          'Luxury bag rows indexed on kakobuy-cn.com',
          'Brand clusters in the catalogue mirror how curators group spreadsheet rows—not trademark authorization.',
          '/category/bags/',
        ),
        figureFromProduct(
          shoes,
          'Footwear brands in the June 2026 catalogue snapshot',
          'Cross-check brand labels against warehouse QC; spreadsheets index links, not factory tiers.',
          '/category/shoes/',
        ),
      ].filter(Boolean) as BlogInlineFigure[];

    case 'kakobuy-spreadsheet-qc':
    case 'kakobuy-4k-qc-video-inspection-guide':
    case 'qc-retake-reject-decision-spreadsheet-2026':
      return [
        figureFromProduct(
          qcShoe,
          'Listing with multiple warehouse QC photos on the Kakobuy Spreadsheet',
          'Rows with QC photo counts signal community verification—still inspect every warehouse upload before you ship international.',
          '/category/shoes/',
        ),
      ].filter(Boolean) as BlogInlineFigure[];

    case 'kakobuy-mobile-spreadsheet-shopping-guide-2026':
      return [
        figureFromProduct(
          pickProduct(`${slug}-mobile`, ['t-shirts']),
          'T-shirt row browsed on mobile from the Kakobuy Spreadsheet mirror',
          'Mobile browsing works best when you paste clean links into the Kakobuy app—finish heavy QC on a larger screen.',
          '/category/t-shirts/',
        ),
      ].filter(Boolean) as BlogInlineFigure[];

    case 'kakobuy-taobao':
    case 'kakobuy-weidian':
    case 'kakobuy-1688':
      return [
        figureFromProduct(
          pickProduct(`${slug}-intake`, ['t-shirts', 'accessories']),
          'Spreadsheet row ready to paste into Kakobuy after Taobao / Weidian discovery',
          'The mirror indexes paste-ready metadata—your agent console still owns checkout, QC, and freight quotes.',
          '/how-to-buy/',
        ),
      ].filter(Boolean) as BlogInlineFigure[];

    case 'germany-zoll-kakobuy-spreadsheet-import-2026':
    case 'france-douane-kakobuy-spreadsheet-import-2026':
    case 'uk-hmrc-kakobuy-spreadsheet-import-guide-2026':
    case 'australia-customs-kakobuy-spreadsheet-import-2026':
      return [
        figureFromProduct(
          pickProduct(`${slug}-customs`, ['jackets', 'bags']),
          'Outerwear row in a consolidated Kakobuy haul — customs declared value context',
          'Heavier categories affect declared-value planning before you pick an outbound freight line.',
          '/category/jackets/',
        ),
      ].filter(Boolean) as BlogInlineFigure[];

    case 'kakobuy-customs-declared-value-primer':
      return [
        figureFromProduct(
          bags,
          'Bag row for declared-value planning on agent parcels',
          'Consolidation mixes categories—annotate honest totals before you lock a freight line.',
          '/category/bags/',
        ),
      ].filter(Boolean) as BlogInlineFigure[];

    case 'kakobuy-freight-line-picker-spreadsheet-2026':
      return [
        figureFromProduct(
          pickProduct(`${slug}-freight`, ['jackets']),
          'Jacket row — volumetric weight affects freight line choice',
          'Bulky lanes often push you toward split parcels or rehearsal packaging before ship.',
          '/category/jackets/',
        ),
      ].filter(Boolean) as BlogInlineFigure[];

    default:
      return [];
  }
}
