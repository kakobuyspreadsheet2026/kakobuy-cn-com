import type { RouteLocale } from '../config';

export type BlogPageCopy = {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  /** Visible breadcrumb first crumb → locale home */
  breadcrumbHomeLabel: string;
  introHtml: string;
  /** Inserted before ` | ` in `<title>` when listing page &gt; 1 (replace `{current}`). */
  paginationTitleAffixBeforePipeTemplate: string;
  /** Shown under intro when locale ≠ en: English-only article expectation */
  blogEnglishBannerLead: string;
  blogEnglishBannerLinkText: string;
  /** Footer line on each card for EN posts when locale ≠ en */
  postCardEnglishNote: string;
  paginationPrevious: string;
  paginationNext: string;
  /** Replace `{current}` and `{total}` for visible summary line */
  paginationPageSummaryTemplate: string;
  paginationNavAriaLabel: string;
};

const en: BlogPageCopy = {
  title: 'Blog · Kakobuy Spreadsheet hub | kakobuy-cn.com',
  description:
    'Long-form editorial posts on Kakobuy Spreadsheet workflows, sourcing discipline, warehouse QC, and freight realism—published on a steady cadence.',
  keywords:
    'Kakobuy Spreadsheet blog, agent shopping guides, spreadsheet sourcing, Kakobuy QC freight',
  h1: 'Blog',
  breadcrumbHomeLabel: 'Home',
  introHtml: `<p class="section-intro">Editorial articles land here first, newest posts shown first — ten per page; use Next below for older entries.</p>`,
  paginationTitleAffixBeforePipeTemplate: ' · Page {current}',
  blogEnglishBannerLead: '',
  blogEnglishBannerLinkText: '',
  postCardEnglishNote: '',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationPageSummaryTemplate: 'Page {current} of {total}',
  paginationNavAriaLabel: 'Blog archive pagination',
};

/** Nav label stays “Blog”; body copy follows locale where translated. */
const byLocale: Record<RouteLocale, BlogPageCopy> = {
  en,
  de: {
    ...en,
    title: 'Blog · Kakobuy-Einkaufsführer & Tipps | kakobuy-cn.com',
    description:
      'Längere Redaktionsartikel zu Kakobuy Spreadsheet, Beschaffung, Lager-QC und Fracht — im gleichen Rhythmus wie die englische Ausgabe.',
    keywords:
      'Kakobuy Spreadsheet Blog, Agent-Shopping, Spreadsheet Einkauf, Kakobuy QC Fracht',
    h1: 'Blog',
    breadcrumbHomeLabel: 'Startseite',
    introHtml: `<p class="section-intro">Redaktionelle Artikel erscheinen hier, neueste zuerst — zehn Beiträge pro Seite; ältere über „Weiter“ unten.</p>`,
    paginationTitleAffixBeforePipeTemplate: ' · Seite {current}',
    blogEnglishBannerLead:
      'Die verlinkten Blogbeiträge sind vollständig auf Englisch; diese Übersichtsseite ist lokalisiert.',
    blogEnglishBannerLinkText: 'Redaktion & Unabhängigkeit',
    postCardEnglishNote: 'Vollständiger Artikel auf Englisch',
    paginationPrevious: 'Zurück',
    paginationNext: 'Weiter',
    paginationPageSummaryTemplate: 'Seite {current} von {total}',
    paginationNavAriaLabel: 'Seiten der Blog-Übersicht',
  },
  pt: {
    ...en,
    title: 'Blog · Guias de Compra & Dicas Kakobuy | kakobuy-cn.com',
    description:
      'Posts editoriais longos sobre fluxos Kakobuy Spreadsheet, sourcing, QC em armazém e frete com pé no chão.',
    keywords: 'Blog Kakobuy Spreadsheet, guias agente, sourcing spreadsheet',
    h1: 'Blog',
    breadcrumbHomeLabel: 'Início',
    introHtml: `<p class="section-intro">Artigos editoriais aparecem aqui primeiro, mais novos primeiro — dez por página; entradas mais antigas em „Próxima“, abaixo.</p>`,
    paginationTitleAffixBeforePipeTemplate: ' · Página {current}',
    blogEnglishBannerLead:
      'Os posts listados estão integralmente em inglês; esta página de índice segue o idioma do site.',
    blogEnglishBannerLinkText: 'Sobre o projeto',
    postCardEnglishNote: 'Artigo completo em inglês',
    paginationPrevious: 'Anterior',
    paginationNext: 'Próxima',
    paginationPageSummaryTemplate: 'Página {current} de {total}',
    paginationNavAriaLabel: 'Paginação do arquivo do blog',
  },
  es: {
    ...en,
    title: 'Blog · Guías de Compra & Consejos Kakobuy | kakobuy-cn.com',
    description:
      'Artículos editoriales largos sobre flujos Kakobuy Spreadsheet, sourcing, QC en almacén y flete realista.',
    keywords: 'Blog Kakobuy Spreadsheet, guías agente, sourcing spreadsheet',
    h1: 'Blog',
    breadcrumbHomeLabel: 'Inicio',
    introHtml: `<p class="section-intro">Los artículos editoriales se publican aquí primero, los más recientes primero — diez por página; más antiguos con „Siguiente“, abajo.</p>`,
    paginationTitleAffixBeforePipeTemplate: ' · Página {current}',
    blogEnglishBannerLead:
      'Los artículos enlazados están íntegramente en inglés; esta página índice está localizada.',
    blogEnglishBannerLinkText: 'Acerca del sitio',
    postCardEnglishNote: 'Artículo completo en inglés',
    paginationPrevious: 'Anterior',
    paginationNext: 'Siguiente',
    paginationPageSummaryTemplate: 'Página {current} de {total}',
    paginationNavAriaLabel: 'Paginación del archivo del blog',
  },
  fr: {
    ...en,
    title: 'Blog · Guides d\'achat & Astuces Kakobuy | kakobuy-cn.com',
    description:
      'Articles éditoriaux longs sur les workflows Kakobuy Spreadsheet, le sourcing, le QC entrepôt et le fret au réel.',
    keywords: 'Blog Kakobuy Spreadsheet, guides agent, sourcing spreadsheet',
    h1: 'Blog',
    breadcrumbHomeLabel: 'Accueil',
    introHtml: `<p class="section-intro">Les articles éditoriaux sont publiés ici en premier, les plus récents d’abord — dix par page ; les plus anciens via „Suivant“, ci-dessous.</p>`,
    paginationTitleAffixBeforePipeTemplate: ' · Page {current}',
    blogEnglishBannerLead:
      'Les articles listés sont entièrement en anglais ; cette page d’index est localisée.',
    blogEnglishBannerLinkText: 'À propos du site',
    postCardEnglishNote: 'Article complet en anglais',
    paginationPrevious: 'Précédent',
    paginationNext: 'Suivant',
    paginationPageSummaryTemplate: 'Page {current} sur {total}',
    paginationNavAriaLabel: 'Pagination de l’archive du blog',
  },
  it: {
    ...en,
    title: 'Blog · Guide all\'acquisto & Consigli Kakobuy | kakobuy-cn.com',
    description:
      'Articoli editoriali lunghi su workflow Kakobuy Spreadsheet, sourcing, QC in magazzino e spedizioni realistiche.',
    keywords: 'Blog Kakobuy Spreadsheet, guide agent, sourcing spreadsheet',
    h1: 'Blog',
    breadcrumbHomeLabel: 'Home',
    introHtml: `<p class="section-intro">Gli articoli editoriali arrivano qui per primi, i più recenti in cima — dieci per pagina; i più vecchi con „Successiva“, sotto.</p>`,
    paginationTitleAffixBeforePipeTemplate: ' · Pagina {current}',
    blogEnglishBannerLead:
      'Gli articoli collegati sono interamente in inglese; questa pagina indice è localizzata.',
    blogEnglishBannerLinkText: 'Informazioni sul sito',
    postCardEnglishNote: 'Articolo completo in inglese',
    paginationPrevious: 'Precedente',
    paginationNext: 'Successiva',
    paginationPageSummaryTemplate: 'Pagina {current} di {total}',
    paginationNavAriaLabel: 'Paginazione dell’archivio del blog',
  },
  pl: {
    ...en,
    title: 'Blog · Poradniki zakupowe & Wskazówki Kakobuy | kakobuy-cn.com',
    description:
      'Dłuższe artykuły redakcyjne o workflow Kakobuy Spreadsheet, sourcingu, QC w magazynie i realnym frachcie.',
    keywords: 'Blog Kakobuy Spreadsheet, poradniki agent, sourcing spreadsheet',
    h1: 'Blog',
    breadcrumbHomeLabel: 'Strona główna',
    introHtml: `<p class="section-intro">Artykuły redakcyjne trafiają tu najpierw, najnowsze na górze — dziesięć na stronę; starsze przez „Następna“, poniżej.</p>`,
    paginationTitleAffixBeforePipeTemplate: ' · Strona {current}',
    blogEnglishBannerLead:
      'Powiązane wpisy są w całości po angielsku; ta strona indeksu jest zlokalizowana.',
    blogEnglishBannerLinkText: 'O serwisie',
    postCardEnglishNote: 'Pełny artykuł po angielsku',
    paginationPrevious: 'Poprzednia',
    paginationNext: 'Następna',
    paginationPageSummaryTemplate: 'Strona {current} z {total}',
    paginationNavAriaLabel: 'Paginacja archiwum bloga',
  },
};

export function getBlogCopy(locale: string): BlogPageCopy {
  const lc = locale as RouteLocale;
  return byLocale[lc] ?? byLocale.en;
}
