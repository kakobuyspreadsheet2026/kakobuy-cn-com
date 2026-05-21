type CategorySeoLane = {
  tagline: string;
  focus: string;
};

const CATEGORY_SEO: Record<string, CategorySeoLane> = {
  shoes: {
    tagline: 'Sneakers, Boots & Runners QC',
    focus: 'sneakers, runners, boots, and sandals with paste-ready marketplace links',
  },
  't-shirts': {
    tagline: 'Tees, Graphics & Boxy Fits',
    focus: 'graphic tees, boxy fits, and summer rotation spreadsheet rows',
  },
  pants: {
    tagline: 'Trousers, Cargos & Track Pants',
    focus: 'trousers, cargos, and track pants with sizing notes and QC breadcrumbs',
  },
  accessories: {
    tagline: 'Belts, Socks, Cases & EDC',
    focus: 'belts, socks, phone cases, and everyday carry spreadsheet picks',
  },
  bags: {
    tagline: 'Crossbody, Backpacks & Slings',
    focus: 'crossbody bags, backpacks, and slings with hardware QC callouts',
  },
  electronics: {
    tagline: 'Audio, Cases & Gadget Rows',
    focus: 'audio, phone accessories, and gadget rows with variant notes',
  },
  jackets: {
    tagline: 'Puffers, Shells & Outerwear QC',
    focus: 'puffers, shells, and outerwear with volumetric shipping awareness',
  },
  hoodies: {
    tagline: 'Fleece, Zip-ups & Knit Layers',
    focus: 'fleece hoodies, zip layers, and knit rows with batch chatter',
  },
  headwear: {
    tagline: 'Caps, Beanies & Hats',
    focus: 'caps, beanies, and headwear with logo alignment QC notes',
  },
  jersey: {
    tagline: 'Football Kits & Court Jerseys',
    focus: 'football kits, court jerseys, and sponsor print QC rows',
  },
  perfume: {
    tagline: 'Fragrance & Scent Lanes',
    focus: 'fragrance and scent rows with batch and packaging notes',
  },
  other: {
    tagline: 'Underwear, Sets & Misc Finds',
    focus: 'underwear, sets, and miscellaneous wardrobe rows',
  },
};

export function getCategorySeoCopy(uiSlug: string, uiName: string): { title: string; description: string } {
  const lane = CATEGORY_SEO[uiSlug] ?? {
    tagline: 'Top Picks & QC',
    focus: `curated ${uiName.toLowerCase()} spreadsheet rows`,
  };
  const uiNameLower = uiName.toLowerCase();

  return {
    title: `Best Kakobuy ${uiName} Spreadsheet 2026 — ${lane.tagline}`,
    description: `Shop the Kakobuy ${uiNameLower} spreadsheet lane for 2026: ${lane.focus}. On-site rows with paste links, sizes, and QC notes before you buy on Kakobuy.`,
  };
}
