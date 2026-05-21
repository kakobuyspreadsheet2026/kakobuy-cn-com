/** Maps category grid UI slugs to API category keys in cached JSON. */
export const UI_TO_API_CATEGORY: Record<string, string> = {
  shoes: 'sneakers',
  't-shirts': 't-shirts',
  pants: 'trousers-pants',
  accessories: 'accessories',
  bags: 'bags-backpacks',
  electronics: 'electronics',
  jackets: 'jackets',
  hoodies: 'hoodies-sweatshirts',
  headwear: 'headwear',
  jersey: 'jersey',
  perfume: 'perfume',
  other: 'clothing',
};

const API_TO_UI_CATEGORY = Object.fromEntries(
  Object.entries(UI_TO_API_CATEGORY).map(([ui, api]) => [api, ui]),
) as Record<string, string>;

export function getCategoryUiSlug(apiSlug: string): string {
  return API_TO_UI_CATEGORY[apiSlug] ?? apiSlug;
}

export function getCategoryUiLabel(apiSlug: string): string {
  const ui = getCategoryUiSlug(apiSlug);
  return ui.charAt(0).toUpperCase() + ui.slice(1).replace('-', ' ');
}
