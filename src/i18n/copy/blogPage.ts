import type { RouteLocale } from '../config';

export type BlogPageCopy = {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  /** Visible breadcrumb first crumb → locale home */
  breadcrumbHomeLabel: string;
  introHtml: string;
  /** Shown under intro when locale ≠ en: English-only article expectation */
  blogEnglishBannerLead: string;
  blogEnglishBannerLinkText: string;
  /** Footer line on each card for EN posts when locale ≠ en */
  postCardEnglishNote: string;
};

const en: BlogPageCopy = {
  title: 'Blog · Kakobuy Spreadsheet hub | kakobuy-cn.com',
  description:
    'Long-form editorial posts on Kakobuy Spreadsheet workflows, sourcing discipline, warehouse QC, and freight realism—published on a steady cadence.',
  keywords:
    'Kakobuy Spreadsheet blog, agent shopping guides, spreadsheet sourcing, Kakobuy QC freight',
  h1: 'Blog',
  breadcrumbHomeLabel: 'Home',
  introHtml: `<p class="section-intro">Editorial articles land here first. Older posts will appear below as the archive grows.</p>`,
  blogEnglishBannerLead: '',
  blogEnglishBannerLinkText: '',
  postCardEnglishNote: '',
};

/** Nav label stays “Blog”; body copy follows locale where translated. */
const byLocale: Record<RouteLocale, BlogPageCopy> = {
  en,
  de: {
    ...en,
    title: 'Blog · Kakobuy Spreadsheet Hub | kakobuy-cn.com',
    description:
      'Längere Redaktionsartikel zu Kakobuy Spreadsheet, Beschaffung, Lager-QC und Fracht — im gleichen Rhythmus wie die englische Ausgabe.',
    keywords:
      'Kakobuy Spreadsheet Blog, Agent-Shopping, Spreadsheet Einkauf, Kakobuy QC Fracht',
    h1: 'Blog',
    breadcrumbHomeLabel: 'Startseite',
    introHtml: `<p class="section-intro">Redaktionelle Artikel erscheinen hier. Sobald der Feed wächst, listen wir ältere Beiträge darunter.</p>`,
    blogEnglishBannerLead:
      'Die verlinkten Blogbeiträge sind vollständig auf Englisch; diese Übersichtsseite ist lokalisiert.',
    blogEnglishBannerLinkText: 'Redaktion & Unabhängigkeit',
    postCardEnglishNote: 'Vollständiger Artikel auf Englisch',
  },
  pt: {
    ...en,
    title: 'Blog · Kakobuy Spreadsheet hub | kakobuy-cn.com',
    description:
      'Posts editoriais longos sobre fluxos Kakobuy Spreadsheet, sourcing, QC em armazém e frete com pé no chão.',
    keywords: 'Blog Kakobuy Spreadsheet, guias agente, sourcing spreadsheet',
    h1: 'Blog',
    breadcrumbHomeLabel: 'Início',
    introHtml: `<p class="section-intro">Os artigos editoriais passam por aqui primeiro. Arquivo antigo aparecerá abaixo quando houver mais entradas.</p>`,
    blogEnglishBannerLead:
      'Os posts listados estão integralmente em inglês; esta página de índice segue o idioma do site.',
    blogEnglishBannerLinkText: 'Sobre o projeto',
    postCardEnglishNote: 'Artigo completo em inglês',
  },
  es: {
    ...en,
    title: 'Blog · Kakobuy Spreadsheet hub | kakobuy-cn.com',
    description:
      'Artículos editoriales largos sobre flujos Kakobuy Spreadsheet, sourcing, QC en almacén y flete realista.',
    keywords: 'Blog Kakobuy Spreadsheet, guías agente, sourcing spreadsheet',
    h1: 'Blog',
    breadcrumbHomeLabel: 'Inicio',
    introHtml: `<p class="section-intro">Los artículos editoriales se publican aquí primero. El archivo crecerá abajo con el tiempo.</p>`,
    blogEnglishBannerLead:
      'Los artículos enlazados están íntegramente en inglés; esta página índice está localizada.',
    blogEnglishBannerLinkText: 'Acerca del sitio',
    postCardEnglishNote: 'Artículo completo en inglés',
  },
  fr: {
    ...en,
    title: 'Blog · Kakobuy Spreadsheet hub | kakobuy-cn.com',
    description:
      'Articles éditoriaux longs sur les workflows Kakobuy Spreadsheet, le sourcing, le QC entrepôt et le fret au réel.',
    keywords: 'Blog Kakobuy Spreadsheet, guides agent, sourcing spreadsheet',
    h1: 'Blog',
    breadcrumbHomeLabel: 'Accueil',
    introHtml: `<p class="section-intro">Les articles éditoriaux sont publiés ici en premier. L’archive s’étoffera ci-dessous.</p>`,
    blogEnglishBannerLead:
      'Les articles listés sont entièrement en anglais ; cette page d’index est localisée.',
    blogEnglishBannerLinkText: 'À propos du site',
    postCardEnglishNote: 'Article complet en anglais',
  },
  it: {
    ...en,
    title: 'Blog · Kakobuy Spreadsheet hub | kakobuy-cn.com',
    description:
      'Articoli editoriali lunghi su workflow Kakobuy Spreadsheet, sourcing, QC in magazzino e spedizioni realistiche.',
    keywords: 'Blog Kakobuy Spreadsheet, guide agent, sourcing spreadsheet',
    h1: 'Blog',
    breadcrumbHomeLabel: 'Home',
    introHtml: `<p class="section-intro">Gli articoli editoriali arrivano qui per primi. L’archivio comparirà sotto man mano che cresce il feed.</p>`,
    blogEnglishBannerLead:
      'Gli articoli collegati sono interamente in inglese; questa pagina indice è localizzata.',
    blogEnglishBannerLinkText: 'Informazioni sul sito',
    postCardEnglishNote: 'Articolo completo in inglese',
  },
  pl: {
    ...en,
    title: 'Blog · Kakobuy Spreadsheet hub | kakobuy-cn.com',
    description:
      'Dłuższe artykuły redakcyjne o workflow Kakobuy Spreadsheet, sourcingu, QC w magazynie i realnym frachcie.',
    keywords: 'Blog Kakobuy Spreadsheet, poradniki agent, sourcing spreadsheet',
    h1: 'Blog',
    breadcrumbHomeLabel: 'Strona główna',
    introHtml: `<p class="section-intro">Artykuły redakcyjne trafiają tu najpierw. Starsze wpisy pojawią się poniżej w miarę rozwoju archiwum.</p>`,
    blogEnglishBannerLead:
      'Powiązane wpisy są w całości po angielsku; ta strona indeksu jest zlokalizowana.',
    blogEnglishBannerLinkText: 'O serwisie',
    postCardEnglishNote: 'Pełny artykuł po angielsku',
  },
};

export function getBlogCopy(locale: string): BlogPageCopy {
  const lc = locale as RouteLocale;
  return byLocale[lc] ?? byLocale.en;
}
