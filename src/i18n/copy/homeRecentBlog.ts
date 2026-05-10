import type { RouteLocale } from '../config';

export type HomeRecentBlogCopy = {
  heading: string;
  viewAll: string;
  englishArticlesNote: string;
  /** Shown above the list next to the heading — precedes the `<time>` with the latest post date */
  lastUpdatedLabel: string;
  /** Short badge for posts whose `published` date is within ~7 days (build time) */
  newBadge: string;
};

const en: HomeRecentBlogCopy = {
  heading: 'Latest from the blog',
  viewAll: 'View all posts →',
  englishArticlesNote: '',
  lastUpdatedLabel: 'Feed refreshed',
  newBadge: 'New',
};

const byLocale: Record<RouteLocale, HomeRecentBlogCopy> = {
  en,
  de: {
    heading: 'Neueste im Blog',
    viewAll: 'Alle Beiträge →',
    englishArticlesNote:
      'Beiträge derzeit vollständig auf Englisch; Kurztitel und Daten erscheinen hier lokalisiert.',
    lastUpdatedLabel: 'Stand',
    newBadge: 'Neu',
  },
  pt: {
    heading: 'Últimas no blog',
    viewAll: 'Ver todas as publicações →',
    englishArticlesNote:
      'Posts integralmente em inglês por agora; títulos e datas seguem o idioma da página.',
    lastUpdatedLabel: 'Atualizado',
    newBadge: 'Novo',
  },
  es: {
    heading: 'Lo último en el blog',
    viewAll: 'Ver todas las entradas →',
    englishArticlesNote:
      'Artículos íntegramente en inglés por ahora; títulos y fechas siguen el idioma del sitio.',
    lastUpdatedLabel: 'Actualizado',
    newBadge: 'Nuevo',
  },
  fr: {
    heading: 'Derniers articles du blog',
    viewAll: 'Voir tous les articles →',
    englishArticlesNote:
      'Articles entièrement en anglais pour l’instant ; titres et dates suivent la langue du site.',
    lastUpdatedLabel: 'Mis à jour',
    newBadge: 'Nouveau',
  },
  it: {
    heading: 'Ultimi dal blog',
    viewAll: 'Vedi tutti gli articoli →',
    englishArticlesNote:
      'Articoli per ora interamente in inglese; titoli e date seguono la lingua della pagina.',
    lastUpdatedLabel: 'Aggiornato',
    newBadge: 'Nuovo',
  },
  pl: {
    heading: 'Najnowsze na blogu',
    viewAll: 'Zobacz wszystkie wpisy →',
    englishArticlesNote:
      'Wpisy na razie w całości po angielsku; tytuły i daty są lokalnie na tej stronie.',
    lastUpdatedLabel: 'Aktualizacja',
    newBadge: 'Nowe',
  },
};

export function getHomeRecentBlogCopy(locale: string): HomeRecentBlogCopy {
  const lc = locale as RouteLocale;
  return byLocale[lc] ?? byLocale.en;
}
