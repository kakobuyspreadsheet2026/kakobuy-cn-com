import type { RouteLocale } from '../config';

export type HomeRecentBuyerSharesCopy = {
  heading: string;
  viewAll: string;
  englishArticlesNote: string;
};

const en: HomeRecentBuyerSharesCopy = {
  heading: 'Latest buyer shares',
  viewAll: 'All buyer shares →',
  englishArticlesNote: '',
};

const byLocale: Record<RouteLocale, HomeRecentBuyerSharesCopy> = {
  en,
  de: {
    heading: 'Neueste Buyer Shares',
    viewAll: 'Alle Buyer Shares →',
    englishArticlesNote: 'Kurztipps derzeit auf Englisch · Links öffnen Reddit.',
  },
  pt: {
    heading: 'Últimos buyer shares',
    viewAll: 'Todos os buyer shares →',
    englishArticlesNote: 'Resumos por enquanto em inglês · links abrem o Reddit.',
  },
  es: {
    heading: 'Últimos buyer shares',
    viewAll: 'Todos los buyer shares →',
    englishArticlesNote: 'Resúmenes por ahora en inglés · los enlaces abren Reddit.',
  },
  fr: {
    heading: 'Derniers buyer shares',
    viewAll: 'Tous les buyer shares →',
    englishArticlesNote: "Résumés pour l'instant en anglais · les liens ouvrent Reddit.",
  },
  it: {
    heading: 'Ultimi buyer shares',
    viewAll: 'Tutti i buyer shares →',
    englishArticlesNote: 'Riassunti al momento in inglese · i link aprono Reddit.',
  },
  pl: {
    heading: 'Najnowsze buyer shares',
    viewAll: 'Wszystkie buyer shares →',
    englishArticlesNote: 'Streszczenia na razie po angielsku · linki prowadzą na Reddit.',
  },
};

export function getHomeRecentBuyerSharesCopy(locale: string): HomeRecentBuyerSharesCopy {
  const lc = locale as RouteLocale;
  return byLocale[lc] ?? byLocale.en;
}
