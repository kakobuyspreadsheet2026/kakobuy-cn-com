import type { RouteLocale } from '../config';

export type HomeRecentBuyerSharesCopy = {
  heading: string;
  viewAll: string;
  englishArticlesNote: string;
  lastUpdatedLabel: string;
  newBadge: string;
};

const en: HomeRecentBuyerSharesCopy = {
  heading: 'Latest buyer shares',
  viewAll: 'All buyer shares →',
  englishArticlesNote: '',
  lastUpdatedLabel: 'Feed refreshed',
  newBadge: 'New',
};

const byLocale: Record<RouteLocale, HomeRecentBuyerSharesCopy> = {
  en,
  de: {
    heading: 'Neueste Buyer Shares',
    viewAll: 'Alle Buyer Shares →',
    englishArticlesNote:
      'Kurztipps derzeit auf Englisch · Liste verlinkt zur Übersichtsseite; dort weiter zu Reddit.',
    lastUpdatedLabel: 'Stand',
    newBadge: 'Neu',
  },
  pt: {
    heading: 'Últimos buyer shares',
    viewAll: 'Todos os buyer shares →',
    englishArticlesNote:
      'Resumos por enquanto em inglês · a lista abre a página interna; Reddit para o fio original.',
    lastUpdatedLabel: 'Atualizado',
    newBadge: 'Novo',
  },
  es: {
    heading: 'Últimos buyer shares',
    viewAll: 'Todos los buyer shares →',
    englishArticlesNote:
      'Resúmenes por ahora en inglés · la lista va a la página interna; Reddit para el hilo original.',
    lastUpdatedLabel: 'Actualizado',
    newBadge: 'Nuevo',
  },
  fr: {
    heading: 'Derniers buyer shares',
    viewAll: 'Tous les buyer shares →',
    englishArticlesNote:
      "Résumés pour l'instant en anglais · la liste ouvre la page interne ; Reddit pour le fil d’origine.",
    lastUpdatedLabel: 'Mis à jour',
    newBadge: 'Nouveau',
  },
  it: {
    heading: 'Ultimi buyer shares',
    viewAll: 'Tutti i buyer shares →',
    englishArticlesNote:
      'Riassunti al momento in inglese · la lista apre la pagina interna; Reddit per il thread originale.',
    lastUpdatedLabel: 'Aggiornato',
    newBadge: 'Nuovo',
  },
  pl: {
    heading: 'Najnowsze buyer shares',
    viewAll: 'Wszystkie buyer shares →',
    englishArticlesNote:
      'Streszczenia na razie po angielsku · lista prowadzi na stronę zbiorczą; Reddit do oryginału.',
    lastUpdatedLabel: 'Aktualizacja',
    newBadge: 'Nowe',
  },
};

export function getHomeRecentBuyerSharesCopy(locale: string): HomeRecentBuyerSharesCopy {
  const lc = locale as RouteLocale;
  return byLocale[lc] ?? byLocale.en;
}
