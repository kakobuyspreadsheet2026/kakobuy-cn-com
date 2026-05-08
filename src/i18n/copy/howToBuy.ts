import type { RouteLocale } from '../config';

export type HowToBuyCopy = {
  title: string;
  description: string;
  keywords: string;
  backHomeLabel: string;
  h1: string;
  /** Use `{ml}` for spreadsheet catalogue URL. */
  introHtml: string;
  badge: string;
  officialFaqHrefLabel: string;
  /** `{count}` = number of excerpts. */
  officialMetaHtml: string;
  sourcePageLabel: string;
};

const en: HowToBuyCopy = {
  title: 'How to run the Kakobuy Spreadsheet loop — URLs, QC & freight | kakobuy-cn.com',
  description:
    'Condensed Kakobuy Spreadsheet playbook (2026): open spreadsheet catalogue lanes, harvest stable Taobao / Weidian / 1688 URLs, paste into Kakobuy, dissect warehouse photography, then approve parcel exports—editorial notes only.',
  keywords:
    'Kakobuy spreadsheet walkthrough, paste marketplace URL Kakobuy, warehouse QC checklist, Taobao agent tutorial, Weidian spreadsheet tips, FashionReps freight primer',
  backHomeLabel: '← Back to home',
  h1: 'How to buy',
  introHtml: `This walkthrough narrates the usual <strong>Kakobuy spreadsheet</strong> cadence: scout listings through <a href="{ml}" target="_blank" rel="noopener noreferrer">Spreadsheet-indexed browse</a>, then execute checkout, domestic inbound, and QC entirely inside <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">Kakobuy</a>. Menu labels mutate—always mirror whatever authenticated UI you actually see.`,
  badge: 'Archived Kakobuy excerpts · reference',
  officialFaqHrefLabel: 'Live Kakobuy FAQ ↗',
  officialMetaHtml: `Snapshots below mirror Kakobuy communications (collapsed until expanded). If wording diverges from <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">today’s FAQ hub</a>, trust Kakobuy’s live copy. <strong>{count}</strong> excerpts mirrored here.`,
  sourcePageLabel: 'Mirror source ↗',
};

const de: HowToBuyCopy = {
  title: 'Kakobuy Spreadsheet Loop — Links, QC & Export | kakobuy-cn.com',
  description:
    'Kompakter Workflow (2026): Spreadsheet-Katalogstrecken öffnen, stabile Taobao/Weidian/1688-URLs sichern, bei Kakobuy einfügen, Lagerfotos interpretieren, Exportfreigaben erteilen — nur Lehrinhalt.',
  keywords:
    'Kakobuy Spreadsheet Anleitung, Produktlink einfügen, QC Magazin Tutorial, Taobao Agent Workflow',
  backHomeLabel: '← Zur Startseite',
  h1: 'So kaufen',
  introHtml: `Diese Seite beschreibt den üblichen <strong>Kakobuy-Spreadsheet</strong>-Zyklus: Discovery über <a href="{ml}" target="_blank" rel="noopener noreferrer">den indexierten Browse</a>, Zahlung sowie QC komplett bei <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">Kakobuy</a>. UI-Beschriftungen ändern sich — orientiere dich immer am eingeloggten Panel.`,
  badge: 'FAQ-Spiegel · Kakobuy',
  officialFaqHrefLabel: 'Live-FAQ Kakobuy ↗',
  officialMetaHtml: `Die folgenden Blöcke sind gespiegelte Kakobuy-Hinweise (aufklappbar). Maßgeblich ist bei Konflikten die <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">aktuelle FAQ</a>. <strong>{count}</strong> Auszüge archiviert.`,
  sourcePageLabel: 'Spiegelquelle ↗',
};

const pt: HowToBuyCopy = {
  title: 'Fluxo Kakobuy Spreadsheet — links, QC e exportação | kakobuy-cn.com',
  description:
    'Passo a passo editorial (2026): abrir trilhos do catálogo indexado, copiar URLs Taobao/Weidian/1688, colar no Kakobuy, analisar fotos de armazém e liberar envio internacional — sem checkout neste domínio.',
  keywords:
    'tutorial Kakobuy spreadsheet, colar URL produto, QC warehouse, agente Taobao',
  backHomeLabel: '← Voltar ao início',
  h1: 'Como comprar',
  introHtml: `Explicamos o ciclo típico do <strong>Kakobuy spreadsheet</strong>: descobrir links pelo <a href="{ml}" target="_blank" rel="noopener noreferrer">catálogo indexado</a> e concluir pagamentos/QC somente em <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">Kakobuy</a>. Botões mudam — siga o painel logado.`,
  badge: 'Recortes oficiais · Kakobuy',
  officialFaqHrefLabel: 'FAQ oficial Kakobuy ↗',
  officialMetaHtml: `Blocos abaixo espelham comunicados Kakobuy (fechados até expandir). Divergências favorecem a <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">FAQ ao vivo</a>. <strong>{count}</strong> excertos.`,
  sourcePageLabel: 'Fonte espelhada ↗',
};

const es: HowToBuyCopy = {
  title: 'Bucle Kakobuy Spreadsheet — enlaces, QC y exportación | kakobuy-cn.com',
  description:
    'Guía condensada (2026): raíles del catálogo indexado, URLs Taobao/Weidian/1688, pegado en Kakobuy, lectura de fotos de almacén y aprobación de envíos — solo texto editorial.',
  keywords:
    'tutorial Kakobuy spreadsheet, pegar enlace marketplace, QC warehouse Taobao',
  backHomeLabel: '← Volver al inicio',
  h1: 'Cómo comprar',
  introHtml: `Aquí resume el circuito <strong>Kakobuy spreadsheet</strong>: explorar con el <a href="{ml}" target="_blank" rel="noopener noreferrer">browse indexado</a> y ejecutar cobros/QC únicamente en <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">Kakobuy</a>. La interfaz muta — respeta tu sesión autenticada.`,
  badge: 'Extractos Kakobuy · referencia',
  officialFaqHrefLabel: 'FAQ Kakobuy en vivo ↗',
  officialMetaHtml: `Los bloques espelan avisos Kakobuy (plegados por defecto). Si algo contradice la <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">FAQ vigente</a>, gana Kakobuy. <strong>{count}</strong> extractos.`,
  sourcePageLabel: 'Fuente espejo ↗',
};

const fr: HowToBuyCopy = {
  title: 'Cycle Kakobuy Spreadsheet — liens, QC & export | kakobuy-cn.com',
  description:
    'Mode opératoire réduit (2026) : rails du catalogue indexé, URL marketplace stables, collage Kakobuy, analyse photo entrepôt puis validation fret international — page explicative.',
  keywords:
    'tutoriel Kakobuy spreadsheet, coller lien produit, QC entrepôt Taobao',
  backHomeLabel: '← Retour à l’accueil',
  h1: 'Comment acheter',
  introHtml: `Synthèse du flux <strong>Kakobuy spreadsheet</strong> : exploration via <a href="{ml}" target="_blank" rel="noopener noreferrer">le browse indexé</a>, règlements/QC exclusivement sur <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">Kakobuy</a>. Les libellés évoluent — suivez votre espace connecté.`,
  badge: 'Extraits Kakobuy · mémo',
  officialFaqHrefLabel: 'FAQ Kakobuy officielle ↗',
  officialMetaHtml: `Sections ci-dessous = miroirs (repliables). En cas d’écart, prévaloir la <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">FAQ en ligne</a>. <strong>{count}</strong> extraits.`,
  sourcePageLabel: 'Source miroir ↗',
};

const it: HowToBuyCopy = {
  title: 'Ciclo Kakobuy Spreadsheet — link, QC ed export | kakobuy-cn.com',
  description:
    'Guida sintetica (2026): percorsi del catalogo indicizzato, URL marketplace stabili, incolla su Kakobuy, lettura foto magazzino e ok alla spedizione internazionale — solo editoriale.',
  keywords:
    'guida Kakobuy spreadsheet, incolla URL prodotto, QC magazzino Taobao',
  backHomeLabel: '← Torna alla home',
  h1: 'Come acquistare',
  introHtml: `Illustriamo il tipico <strong>ciclo Kakobuy spreadsheet</strong>: ricerca tramite <a href="{ml}" target="_blank" rel="noopener noreferrer">browse indicizzato</a>, pagamenti/QC solo su <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">Kakobuy</a>. L’interfaccia cambia — segui ciò che vedi loggato.`,
  badge: 'Estratti Kakobuy · riferimento',
  officialFaqHrefLabel: 'FAQ Kakobuy live ↗',
  officialMetaHtml: `I blocchi specchiano comunicazioni Kakobuy (chiusi finché non espandi). Vince sempre la <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">FAQ aggiornata</a>. <strong>{count}</strong> estratti.`,
  sourcePageLabel: 'Fonte mirror ↗',
};

const pl: HowToBuyCopy = {
  title: 'Pętla Kakobuy Spreadsheet — linki, QC i eksport | kakobuy-cn.com',
  description:
    'Skrót warsztatowy (2026): szlaki zindeksowanego katalogu, adresy Taobao/Weidian/1688, wklejenie w Kakobuy, analiza zdjęć magazynu i akceptacja przesyłki — treść pomocnicza.',
  keywords:
    'poradnik Kakobuy spreadsheet, wklej URL produktu, QC magazyn Taobao',
  backHomeLabel: '← Wróć na stronę główną',
  h1: 'Jak kupować',
  introHtml: `Opisujemy standardową <strong>pętlę Kakobuy spreadsheet</strong>: odkrywanie przez <a href="{ml}" target="_blank" rel="noopener noreferrer">zindeksowany przegląd</a>, płatności/QC wyłącznie na <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">Kakobuy</a>. Etykiety UI się zmieniają — wzoruj się na widoku po zalogowaniu.`,
  badge: 'Wycinki Kakobuy · dokumentacja',
  officialFaqHrefLabel: 'FAQ Kakobuy na żywo ↗',
  officialMetaHtml: `Poniższe sekcje lustrują komunikaty Kakobuy (zwinięte domyślnie). Spory rozstrzyga <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">aktualne FAQ</a>. <strong>{count}</strong> wpisów.`,
  sourcePageLabel: 'Źródło lustra ↗',
};

export const HOW_TO_BUY_COPY: Record<RouteLocale, HowToBuyCopy> = {
  en,
  de,
  pt,
  es,
  fr,
  it,
  pl,
};

export function getHowToBuyCopy(locale: string): HowToBuyCopy {
  const lc = locale as RouteLocale;
  return HOW_TO_BUY_COPY[lc] ?? en;
}

export function hydrateHowToBuyCopy(raw: HowToBuyCopy, mlHref: string, count: number): HowToBuyCopy {
  return {
    ...raw,
    officialMetaHtml: raw.officialMetaHtml.replaceAll('{count}', String(count)),
    introHtml: raw.introHtml.replace(/\{ml\}/g, mlHref),
  };
}
