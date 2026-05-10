import type { RouteLocale } from '../config';

export type AboutPageCopy = {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  /** Visible breadcrumb + back link label for the locale home */
  breadcrumbHomeLabel: string;
  introHtml: string;
  sections: readonly { h2: string; html: string }[];
};

const en: AboutPageCopy = {
  title: 'About kakobuy-cn.com · Editorial independence & Kakobuy Spreadsheet hub',
  description:
    'Who publishes kakobuy-cn.com, how we relate to Kakobuy and third-party marketplaces, and how to interpret our guides versus binding checkout policies.',
  keywords:
    'kakobuy-cn.com about, Kakobuy Spreadsheet editorial, shopping agent disclaimer',
  h1: 'About this site',
  breadcrumbHomeLabel: 'Home',
  introHtml: `<p class="section-intro"><strong>kakobuy-cn.com</strong> is an independent editorial hub about <strong>Kakobuy Spreadsheet</strong> workflows—link hygiene, warehouse QC context, freight literacy, and cautious sourcing habits. We explain and curate entry points; we do not operate checkout, warehousing, or dispute resolution on your behalf.</p>`,
  sections: [
    {
      h2: 'Relationship to Kakobuy',
      html: `<p>We reference <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">kakobuy.com</a> because readers search for Kakobuy-related guidance. We are <strong>not</strong> Kakobuy’s official documentation, support desk, or affiliate program unless explicitly stated on a specific page. Product surfaces, coupons, QC tooling, and freight quotes can change without notice—always rely on what you see when signed in at Kakobuy for binding decisions.</p>`,
    },
    {
      h2: 'Marketplaces and catalogue bridges',
      html: `<p>Listings on Taobao, Weidian, 1688, and partner catalogues are operated by sellers and platforms under their own terms. Our <a href="/spreadsheet/">Spreadsheet</a> notes and outbound catalogue links are convenience context; they do not guarantee availability, authenticity, or seller behaviour.</p>`,
    },
    {
      h2: 'Editorial standards',
      html: `<p>Where we state industry-wide facts (for example how chargeable weight compares scale weight to volumetric weight in air freight), we prefer neutral primers and standards bodies when possible. Opinion and workflow advice are labelled as editorial. Corrections matter: if something on-site contradicts Kakobuy’s live UI, trust Kakobuy first and consider our page stale until it is updated.</p>`,
    },
    {
      h2: 'Language coverage',
      html: `<p>Navigation and several hub pages are localized. Long-form <a href="/blog/">blog</a> articles are written in <strong>English</strong> first; localized blog indices repeat that so expectations stay clear.</p>`,
    },
  ],
};

const byLocale: Record<RouteLocale, AboutPageCopy> = {
  en,
  de: {
    ...en,
    breadcrumbHomeLabel: 'Startseite',
    title: 'Über kakobuy-cn.com · Redaktionelle Unabhängigkeit',
    description:
      'Wer kakobuy-cn.com betreibt, wie wir zu Kakobuy und Marktplätzen stehen, und wie unsere Texte sich von verbindlichen Kassen-/Warehouse-Regeln unterscheiden.',
    keywords:
      'kakobuy-cn.com Über uns, Kakobuy Spreadsheet Redaktion, Disclaimer Agent',
    h1: 'Über diese Website',
    introHtml: `<p class="section-intro"><strong>kakobuy-cn.com</strong> ist ein unabhängiges Redaktionsprojekt zu <strong>Kakobuy Spreadsheet</strong>-Workflows—Links, QC-Kontext, Frachtrealismus und vorsichtiges Sourcing. Wir erklären und kuratieren Einstiege; wir betreiben keine Kasse, kein Lager und keine Streitbeilegung für Sie.</p>`,
    sections: [
      {
        h2: 'Verhältnis zu Kakobuy',
        html: `<p>Wir verweisen auf <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">kakobuy.com</a>, weil Leser danach suchen. Wir sind <strong>nicht</strong> die offizielle Dokumentation oder der Support von Kakobuy. Oberflächen, Coupons und Fracht können sich ändern—maßgeblich ist, was Sie bei Kakobuy eingeloggt sehen.</p>`,
      },
      {
        h2: 'Marktplätze und Katalog-Brücken',
        html: `<p>Listings auf Taobao, Weidian, 1688 und Partnerkatalogen unterliegen jeweiligen Anbietern. Unsere <a href="/de/spreadsheet/">Spreadsheet</a>-Hinweise sind Kontext, keine Verfügbarkeits- oder Echtheitsgarantie.</p>`,
      },
      {
        h2: 'Redaktionslinie',
        html: `<p>Sachliche Branchenfakten belegen wir nach Möglichkeit mit neutralen Primärquellen. Meinung und Workflow sind als Redaktionelles gekennzeichnet. Widerspricht eine Seite der Live-Oberfläche von Kakobuy, gilt Kakobuy.</p>`,
      },
      {
        h2: 'Sprachen',
        html: `<p>Die Navigation und Teile des Hubs sind übersetzt. Die Artikel im <a href="/blog/">Blog</a> sind zuerst auf <strong>Englisch</strong>; die Blog-Übersicht verweist darauf.</p>`,
      },
    ],
  },
  pt: {
    ...en,
    breadcrumbHomeLabel: 'Início',
    title: 'Sobre o kakobuy-cn.com · Independência editorial',
    description:
      'Quem publica o hub, relação com Kakobuy e marketplaces, e como ler os guias frente às regras vinculantes no checkout.',
    keywords: 'kakobuy-cn.com sobre, Kakobuy Spreadsheet editorial',
    h1: 'Sobre este site',
    introHtml: `<p class="section-intro">O <strong>kakobuy-cn.com</strong> é um hub editorial independente sobre fluxos de <strong>Kakobuy Spreadsheet</strong>—higiene de links, contexto de QC, frete e sourcing cauteloso. Explicamos e curamos pontos de entrada; não operamos checkout, armazém ou disputas por si.</p>`,
    sections: [
      {
        h2: 'Relação com a Kakobuy',
        html: `<p>Citamos <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">kakobuy.com</a> porque é o que as pessoas procuram. <strong>Não somos</strong> documentação oficial nem suporte da Kakobuy. O que vale é o que aparece na sua conta na Kakobuy.</p>`,
      },
      {
        h2: 'Marketplaces',
        html: `<p>Anúncios em Taobao, Weidian, 1688 e catálogos seguem regras dos vendedores. Notas no <a href="/pt/spreadsheet/">Spreadsheet</a> são contexto, não garantia.</p>`,
      },
      {
        h2: 'Padrão editorial',
        html: `<p>Fatos gerais do setor preferimos apoiar em fontes neutras. Opinião e fluxos são editoriais. Se algo divergir da UI ao vivo da Kakobuy, prevalece a Kakobuy.</p>`,
      },
      {
        h2: 'Idiomas',
        html: `<p>Parte do hub está localizada. Os posts do <a href="/blog/">blog</a> estão em <strong>inglês</strong>; o índice indica isso.</p>`,
      },
    ],
  },
  es: {
    ...en,
    breadcrumbHomeLabel: 'Inicio',
    title: 'Acerca de kakobuy-cn.com · Independencia editorial',
    description:
      'Quién publica el hub, la relación con Kakobuy y los marketplaces, y cómo interpretar las guías frente a las políticas vinculantes del checkout.',
    keywords: 'kakobuy-cn.com acerca, Kakobuy Spreadsheet editorial',
    h1: 'Acerca de este sitio',
    introHtml: `<p class="section-intro"><strong>kakobuy-cn.com</strong> es un hub editorial independiente sobre flujos de <strong>Kakobuy Spreadsheet</strong>—enlaces, contexto de QC, flete y sourcing prudente. Explicamos y curamos puntos de entrada; no operamos checkout, almacén ni disputas por usted.</p>`,
    sections: [
      {
        h2: 'Relación con Kakobuy',
        html: `<p>Mencionamos <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">kakobuy.com</a> porque así buscan los lectores. <strong>No somos</strong> la documentación oficial ni el soporte de Kakobuy. Lo vinculante es lo que ve en su cuenta.</p>`,
      },
      {
        h2: 'Marketplaces',
        html: `<p>Las fichas en Taobao, Weidian, 1688 y catálogos dependen de vendedores y plataformas. Las notas del <a href="/es/spreadsheet/">Spreadsheet</a> son contexto, no garantía.</p>`,
      },
      {
        h2: 'Línea editorial',
        html: `<p>Los hechos del sector, cuando sea posible, enlazamos a fuentes neutras. Opiniones y flujos son editoriales. Si hay conflicto con la UI en vivo de Kakobuy, prima Kakobuy.</p>`,
      },
      {
        h2: 'Idiomas',
        html: `<p>Parte del sitio está localizada. Los artículos del <a href="/blog/">blog</a> están en <strong>inglés</strong>; el índice lo indica.</p>`,
      },
    ],
  },
  fr: {
    ...en,
    breadcrumbHomeLabel: 'Accueil',
    title: 'À propos de kakobuy-cn.com · Indépendance éditoriale',
    description:
      'Qui publie le hub, relation avec Kakobuy et places de marché, et comment lire les guides par rapport aux règles contractuelles au checkout.',
    keywords: 'kakobuy-cn.com à propos, Kakobuy Spreadsheet éditorial',
    h1: 'À propos de ce site',
    introHtml: `<p class="section-intro"><strong>kakobuy-cn.com</strong> est un hub éditorial indépendant sur les workflows <strong>Kakobuy Spreadsheet</strong>—hygiène des liens, contexte QC, fret et sourcing prudent. Nous expliquons et curons des points d’entrée ; nous n’exploitons pas la caisse, l’entrepôt ou les litiges pour vous.</p>`,
    sections: [
      {
        h2: 'Rapport avec Kakobuy',
        html: `<p>Nous renvoyons vers <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">kakobuy.com</a> car les lecteurs cherchent ces sujets. Nous ne sommes <strong>pas</strong> la documentation officielle ni le support Kakobuy. Faites confiance à votre session Kakobuy pour le décisionnel.</p>`,
      },
      {
        h2: 'Places de marché',
        html: `<p>Les annonces Taobao, Weidian, 1688 et catalogues relèvent des vendeurs. Les notes <a href="/fr/spreadsheet/">Spreadsheet</a> sont contextuelles, sans garantie.</p>`,
      },
      {
        h2: 'Standards éditoriaux',
        html: `<p>Les faits sectoriels sont étayés par des sources neutres quand c’est possible. Les opinions sont éditoriales. En cas de divergence avec l’UI Kakobuy, Kakobuy prime.</p>`,
      },
      {
        h2: 'Langues',
        html: `<p>Partie du site est localisée. Les articles du <a href="/blog/">blog</a> sont en <strong>anglais</strong> ; l’index l’indique.</p>`,
      },
    ],
  },
  it: {
    ...en,
    breadcrumbHomeLabel: 'Home',
    title: 'Informazioni su kakobuy-cn.com · Indipendenza editoriale',
    description:
      'Chi pubblica l’hub, rapporto con Kakobuy e marketplace, e come leggere le guide rispetto alle policy vincolanti.',
    keywords: 'kakobuy-cn.com chi siamo, Kakobuy Spreadsheet editoriale',
    h1: 'Informazioni sul sito',
    introHtml: `<p class="section-intro"><strong>kakobuy-cn.com</strong> è un hub editoriale indipendente sui workflow <strong>Kakobuy Spreadsheet</strong>—igiene dei link, contesto QC, spedizioni e sourcing prudente. Spieghiamo e curiamo punti di ingresso; non gestiamo checkout, magazzino o dispute al posto vostro.</p>`,
    sections: [
      {
        h2: 'Rapporto con Kakobuy',
        html: `<p>Rinviamo a <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">kakobuy.com</a> perché è ciò che cercano i lettori. <strong>Non</strong> siamo documentazione ufficiale né assistenza Kakobuy. Decide ciò che vedete nel vostro account Kakobuy.</p>`,
      },
      {
        h2: 'Marketplace',
        html: `<p>Inserzioni su Taobao, Weidian, 1688 e cataloghi sono dei venditori. Le note <a href="/it/spreadsheet/">Spreadsheet</a> sono contesto, non garanzia.</p>`,
      },
      {
        h2: 'Linea editoriale',
        html: `<p>I fatti di settore, quando possibile, citano fonti neutre. Opinioni e flussi sono editoriali. In caso di conflitto con la UI live Kakobuy, prevale Kakobuy.</p>`,
      },
      {
        h2: 'Lingue',
        html: `<p>Parte del sito è localizzata. Gli articoli del <a href="/blog/">blog</a> sono in <strong>inglese</strong>; l’indice lo indica.</p>`,
      },
    ],
  },
  pl: {
    ...en,
    breadcrumbHomeLabel: 'Strona główna',
    title: 'O kakobuy-cn.com · Niezależność redakcyjna',
    description:
      'Kto prowadzi hub, relacja do Kakobuy i marketplace oraz jak czytać poradniki wobec wiążących zasad checkoutu.',
    keywords: 'kakobuy-cn.com o nas, Kakobuy Spreadsheet redakcja',
    h1: 'O tej stronie',
    introHtml: `<p class="section-intro"><strong>kakobuy-cn.com</strong> to niezależny hub redakcyjny o workflow <strong>Kakobuy Spreadsheet</strong>— higiena linków, kontekst QC, fracht i ostrożny sourcing. Wyjaśniamy i kurujemy wejścia; nie prowadzimy kasy, magazynu ani sporów za Czytelnika.</p>`,
    sections: [
      {
        h2: 'Stosunek do Kakobuy',
        html: `<p>Odwołujemy się do <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">kakobuy.com</a>, bo tak szukają użytkownicy. To <strong>nie</strong> oficjalna dokumentacja ani support Kakobuy. Wiążące jest to, co widzisz po zalogowaniu.</p>`,
      },
      {
        h2: 'Marketplace',
        html: `<p>Listy na Taobao, Weidian, 1688 i w katalogach należą do sprzedawców. Notatki <a href="/pl/spreadsheet/">Spreadsheet</a> to kontekst, nie gwarancja.</p>`,
      },
      {
        h2: 'Standardy redakcyjne',
        html: `<p>Fakty branżowe tam, gdzie to możliwe, opieramy na neutralnych źródłach. Opinie i workflow są redakcyjne. Rozbieżność z UI Kakobuy — pierwszeństwo ma Kakobuy.</p>`,
      },
      {
        h2: 'Języki',
        html: `<p>Część serwisu jest zlokalizowana. Artykuły na <a href="/blog/">blogu</a> są po <strong>angielsku</strong>; indeks to sygnalizuje.</p>`,
      },
    ],
  },
};

export function getAboutPageCopy(locale: string): AboutPageCopy {
  const lc = locale as RouteLocale;
  return byLocale[lc] ?? byLocale.en;
}
