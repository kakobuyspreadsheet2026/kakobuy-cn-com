import type { RouteLocale } from '../config';

export type BuyerSharesGalleryUi = {
  buyerKind: string;
  shippingKind: string;
  defaultBase: string;
  /** Placeholders: `{kind}`, `{title}`, `{i}`, `{n}` (1-based index). */
  altPattern: string;
};

export type BuyerSharesCopy = {
  title: string;
  description: string;
  keywords: string;
  backHomeLabel: string;
  h1: string;
  /** Embed `<a href="{newsUrl}" …>` and `<a href="{howToUrl}" …>` (anchor copy localized per locale). */
  leadHtml: string;
  /** Usually `<a href="{kakobuyUrl}" target="_blank" rel="noopener noreferrer">… localized label …</a>`. */
  disclaimerHtml: string;
  gallery: BuyerSharesGalleryUi;
};

const en: BuyerSharesCopy = {
  title: 'Reddit Kakobuy Spreadsheet stories — hauls, QC notes & transit timelines | kakobuy-cn.com',
  description:
    'Community-facing recap page (2026): Reddit buyers documenting Kakobuy Spreadsheet discovery → Kakobuy checkout → international freight—not sanctioned Kakobuy marketing.',
  keywords:
    'Kakobuy Spreadsheet Reddit recap, FashionReps haul summary, warehouse QC thread, Weidian spreadsheet transit diary',
  backHomeLabel: '← Back to home',
  h1: 'Buyer shares',
  leadHtml: `Cards summarize <strong>Reddit members shipping via Kakobuy after Spreadsheet-sourced URLs</strong>: haul photography, packing critiques, warehouse QC chatter, or <strong>carrier ETA experiments</strong>. Layout keeps <strong>one narrative card per row</strong>, newest editorial summaries surface first. Light-blue rail emphasizes chronology-heavy posts. Platform FAQs remain mirrored inside <a href="{newsUrl}">News &amp; guides</a>; procedural cadence lives in <a href="{howToUrl}">How to buy</a>.`,
  disclaimerHtml: `<strong>Disclaimer:</strong> Crowdsourced Reddit prose—not screened endorsements from kakobuy-cn.com or Kakobuy corporate. Threads stale quickly; pricing/policy truth stays inside <a href="{kakobuyUrl}" target="_blank" rel="noopener noreferrer">your Kakobuy session</a>.`,
  gallery: {
    buyerKind: 'haul recap',
    shippingKind: 'route timeline',
    defaultBase: 'kakobuy spreadsheet · Reddit digest',
    altPattern:
      'kakobuy spreadsheet · Reddit digest · {kind} · {title} · frame {i}/{n}',
  },
};

const de: BuyerSharesCopy = {
  title:
    'Reddit-Stories zum Kakobuy Spreadsheet — Hauls, QC & Transit | Käufer-Stimmen | kakobuy-cn.com',
  description:
    'Editorischer Überblick (2026) über Reddit-Fäden zum Spreadsheet→Kakobuy-Weg — keine offiziellen Kakobuy-Verlautbarungen.',
  keywords:
    'Kakobuy Spreadsheet Reddit, FashionReps Haul Zusammenfassung, QC Timeline Deutschland',
  backHomeLabel: '← Zur Startseite',
  h1: 'Käufer-Stimmen',
  leadHtml: `Die Karten fassen <strong>Reddit-Erfahrungen nach Spreadsheet-Recherche und Kakobuy-Checkout</strong> zusammen — Fotoserien, Packshots, QC-Streit oder <strong>internationale Laufzeiten</strong>. Pro Zeile eine Breitkarte, neue Redaktionsupdates stehen oben; der blaue Streifen hebt zeitkritische Routen hervor. Offizielle Kakobuy-Hinweise auf <a href="{newsUrl}">News &amp; Anleitungen</a>; Prozess bei <a href="{howToUrl}">So kaufen</a>.`,
  disclaimerHtml: `<strong>Hinweis:</strong> Nur Community-Inhalt — nicht von dieser Domain oder Kakobuy kuratiert. Verbindliche Daten immer bei <a href="{kakobuyUrl}" target="_blank" rel="noopener noreferrer">Kakobuy eingeloggt prüfen</a>.`,
  gallery: {
    buyerKind: 'Haul-Karte',
    shippingKind: 'Transitlinie',
    defaultBase: 'kakobuy spreadsheet · Reddit Digest',
    altPattern: 'kakobuy spreadsheet · Reddit Digest · {kind} · {title} · Bild {i}/{n}',
  },
};

const pt: BuyerSharesCopy = {
  title:
    'Reddit · Kakobuy Spreadsheet — hauls, QC e tempos | Voz dos compradores | kakobuy-cn.com',
  description:
    'Resumo editorial (2026) de tópicos Reddit sobre descoberta via spreadsheet e checkout Kakobuy — não é comunicado oficial.',
  keywords:
    'Kakobuy spreadsheet Reddit, haul FashionReps, linha do tempo envio',
  backHomeLabel: '← Voltar ao início',
  h1: 'Voz dos compradores',
  leadHtml: `Cada cartão condensa <strong>histórias Reddit pós-spreadsheet com pagamento Kakobuy</strong>: fotos de haul, debates QC ou <strong>testes de correio internacional</strong>. Mantemos <strong>um cartão largo por linha</strong>; atualizações editoriais mais novas primeiro; faixa azul destaca narrativas cronológicas. Notícias espelhadas em <a href="{newsUrl}">Notícias &amp; guias</a>; passos em <a href="{howToUrl}">Como comprar</a>.`,
  disclaimerHtml: `<strong>Aviso:</strong> Texto voluntário do Reddit — sem aval deste site ou Kakobuy. Confirme valores em <a href="{kakobuyUrl}" target="_blank" rel="noopener noreferrer">Kakobuy autenticado</a>.`,
  gallery: {
    buyerKind: 'relato haul',
    shippingKind: 'linha temporal',
    defaultBase: 'kakobuy spreadsheet · Reddit digest',
    altPattern: 'kakobuy spreadsheet · Reddit digest · {kind} · {title} · foto {i}/{n}',
  },
};

const es: BuyerSharesCopy = {
  title:
    'Reddit · Kakobuy Spreadsheet — hauls, QC y plazos | Comunidad | kakobuy-cn.com',
  description:
    'Síntesis 2026 de hilos Reddit sobre flujo spreadsheet→Kakobuy — meramente editorial.',
  keywords:
    'Kakobuy spreadsheet Reddit, haul FashionReps, tránsito internacional',
  backHomeLabel: '← Volver al inicio',
  h1: 'Historias de compradores',
  leadHtml: `Resumimos <strong>relatos Reddit donde el spreadsheet precede al checkout Kakobuy</strong>: fotos de recepción, debates QC o <strong>experimentos de mensajería</strong>. <strong>Una tarjeta completa por fila</strong>; los recortes editoriales más nuevos arriba; la franja azul marca hilos centrados en tiempo. FAQ en <a href="{newsUrl}">Noticias &amp; guías</a>; cómo hacerlo en <a href="{howToUrl}">Cómo comprar</a>.`,
  disclaimerHtml: `<strong>Descargo:</strong> UGC Reddit sin validación corporativa. Pedidos reales solo dentro de <a href="{kakobuyUrl}" target="_blank" rel="noopener noreferrer">tu Kakobuy</a>.`,
  gallery: {
    buyerKind: 'historia haul',
    shippingKind: 'cronología envío',
    defaultBase: 'kakobuy spreadsheet · digest Reddit',
    altPattern: 'kakobuy spreadsheet · digest Reddit · {kind} · {title} · foto {i}/{n}',
  },
};

const fr: BuyerSharesCopy = {
  title:
    'Reddit · Kakobuy Spreadsheet — hauls, QC & délais | Retours acheteurs | kakobuy-cn.com',
  description:
    'Synthèse éditoriale 2026 des fils Reddit autour du duo spreadsheet + Kakobuy — pas de communication officielle.',
  keywords:
    'Kakobuy spreadsheet Reddit, haul FashionReps, chronologie fret',
  backHomeLabel: '← Retour à l’accueil',
  h1: 'Retours acheteurs',
  leadHtml: `Les cartes condensent <strong>des récits Reddit après découverte spreadsheet et paiement Kakobuy</strong> — albums photo, débats QC ou <strong>journal de transit</strong>. <strong>Une carte pleine largeur par ligne</strong>, ajouts récents en tête ; bandeau bleu pour les timelines maritimes/aériennes. Extraits officiels sous <a href="{newsUrl}">Actualités &amp; guides</a>, méthodo sous <a href="{howToUrl}">Comment acheter</a>.`,
  disclaimerHtml: `<strong>Avertissement :</strong> contributions Reddit brutes — pas de validation Kakobuy ni du site. Vérifiez vos données sur <a href="{kakobuyUrl}" target="_blank" rel="noopener noreferrer">Kakobuy connecté</a>.`,
  gallery: {
    buyerKind: 'récit haul',
    shippingKind: 'chrono fret',
    defaultBase: 'kakobuy spreadsheet · digest Reddit',
    altPattern: 'kakobuy spreadsheet · digest Reddit · {kind} · {title} · visuel {i}/{n}',
  },
};

const it: BuyerSharesCopy = {
  title:
    'Reddit · Kakobuy Spreadsheet — haul, QC e tempi | Voci | kakobuy-cn.com',
  description:
    'Riassunto editoriale 2026 dei thread Reddit sul flusso spreadsheet Kakobuy — non comunicato ufficiale.',
  keywords:
    'Kakobuy spreadsheet Reddit, haul FashionReps, cronologia spedizioni',
  backHomeLabel: '← Torna alla home',
  h1: 'Voci dagli acquistatori',
  leadHtml: `Le schede racchiudono <strong>post Reddit dopo scouting spreadsheet e pagamento Kakobuy</strong>: foto haul, dibattiti QC o <strong>timeline logistiche</strong>. <strong>Una scheda per riga</strong>, aggiornamenti editoriali freschi in testa; fascia blu per narrazioni tempo-centriche. Notizie ufficiali in <a href="{newsUrl}">Notizie &amp; guide</a>; tutorial in <a href="{howToUrl}">Come acquistare</a>.`,
  disclaimerHtml: `<strong>Dichiarazione:</strong> contenuti Reddit volontari — non verificati da Kakobuy o dal dominio. Ordini reali solo dentro <a href="{kakobuyUrl}" target="_blank" rel="noopener noreferrer">il tuo Kakobuy</a>.`,
  gallery: {
    buyerKind: 'racconto haul',
    shippingKind: 'timeline spedizione',
    defaultBase: 'kakobuy spreadsheet · digest Reddit',
    altPattern: 'kakobuy spreadsheet · digest Reddit · {kind} · {title} · foto {i}/{n}',
  },
};

const pl: BuyerSharesCopy = {
  title:
    'Reddit · Kakobuy Spreadsheet — haul/QC/czasy | Głosy kupujących | kakobuy-cn.com',
  description:
    'Skróty redakcyjne 2026 wątków Reddit o ścieżce spreadsheet→Kakobuy — nieoficjalne.',
  keywords:
    'Kakobuy spreadsheet Reddit, haul FashionReps, czasy wysyłki',
  backHomeLabel: '← Wróć na stronę główną',
  h1: 'Głosy kupujących',
  leadHtml: `Karty zbijają <strong>relacje Reddit po odkryciu linków spreadsheet i płatności Kakobuy</strong>: zdjęcia haul, spory QC lub <strong>dzienniki przesyłek</strong>. <strong>Jedna szeroka karta na rząd</strong>, świeższe streszczenia na górze; niebieski pas dla historii czasowych. Oficjalne fragmenty w <a href="{newsUrl}">Aktualnościach i poradnikach</a>; instrukcja w <a href="{howToUrl}">Jak kupować</a>.`,
  disclaimerHtml: `<strong>Uwaga:</strong> treść społeczności Reddit — brak akceptacji Kakobuy ani witryny. Dane zamówień tylko w <a href="{kakobuyUrl}" target="_blank" rel="noopener noreferrer">panelu Kakobuy</a>.`,
  gallery: {
    buyerKind: 'relacja haul',
    shippingKind: 'oś czasu wysyłki',
    defaultBase: 'kakobuy spreadsheet · digest Reddit',
    altPattern: 'kakobuy spreadsheet · digest Reddit · {kind} · {title} · kadr {i}/{n}',
  },
};

export const BUYER_SHARES_COPY: Record<RouteLocale, BuyerSharesCopy> = {
  en,
  de,
  pt,
  es,
  fr,
  it,
  pl,
};

export function getBuyerSharesCopy(lc: string): BuyerSharesCopy {
  const locale = lc as RouteLocale;
  return BUYER_SHARES_COPY[locale] ?? en;
}

const KAKOBUY_HOME = 'https://kakobuy.com/';

export function hydrateBuyerSharesCopy(
  raw: BuyerSharesCopy,
  urls: { newsUrl: string; howToUrl: string; kakobuyUrl?: string },
): BuyerSharesCopy {
  const agentHome = urls.kakobuyUrl ?? KAKOBUY_HOME;
  return {
    ...raw,
    leadHtml: raw.leadHtml
      .replace(/\{newsUrl\}/g, urls.newsUrl)
      .replace(/\{howToUrl\}/g, urls.howToUrl),
    disclaimerHtml: raw.disclaimerHtml.replace(/\{kakobuyUrl\}/g, agentHome),
  };
}
