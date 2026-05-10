import type { RouteLocale } from '../config';

export type HomeRecentBlogCopy = {
  heading: string;
  viewAll: string;
  englishArticlesNote: string;
};

const en: HomeRecentBlogCopy = {
  heading: 'Latest from the blog',
  viewAll: 'View all posts →',
  englishArticlesNote: '',
};

const byLocale: Record<RouteLocale, HomeRecentBlogCopy> = {
  en,
  de: {
    heading: 'Neueste im Blog',
    viewAll: 'Alle Beiträge →',
    englishArticlesNote:
      'Beiträge derzeit vollständig auf Englisch; Kurztitel und Daten erscheinen hier lokalisiert.',
  },
  pt: {
    heading: 'Últimas no blog',
    viewAll: 'Ver todas as publicações →',
    englishArticlesNote:
      'Posts integralmente em inglês por agora; títulos e datas seguem o idioma da página.',
  },
  es: {
    heading: 'Lo último en el blog',
    viewAll: 'Ver todas las entradas →',
    englishArticlesNote:
      'Artículos íntegramente en inglés por ahora; títulos y fechas siguen el idioma del sitio.',
  },
  fr: {
    heading: 'Derniers articles du blog',
    viewAll: 'Voir tous les articles →',
    englishArticlesNote:
      'Articles entièrement en anglais pour l’instant ; titres et dates suivent la langue du site.',
  },
  it: {
    heading: 'Ultimi dal blog',
    viewAll: 'Vedi tutti gli articoli →',
    englishArticlesNote:
      'Articoli per ora interamente in inglese; titoli e date seguono la lingua della pagina.',
  },
  pl: {
    heading: 'Najnowsze na blogu',
    viewAll: 'Zobacz wszystkie wpisy →',
    englishArticlesNote:
      'Wpisy na razie w całości po angielsku; tytuły i daty są lokalnie na tej stronie.',
  },
};

export function getHomeRecentBlogCopy(locale: string): HomeRecentBlogCopy {
  const lc = locale as RouteLocale;
  return byLocale[lc] ?? byLocale.en;
}
