import type { HomeStubContent } from '../types';
import { pillsFor } from './categoryPaths';

const it = {
  shoes: {
    label: 'Scarpe',
    alt: 'runner e chunky sneakers con QC se visibile',
  },
  't-shirts': {
    label: 'T-shirt',
    alt: 'tee lavati, boxy fit e grafiche',
  },
  pants: {
    label: 'Pantaloni',
    alt: 'denim, jogger e shorts',
  },
  accessories: {
    label: 'Accessori',
    alt: 'cinture, bijoux minimal e gadget',
  },
  bags: {
    label: 'Borse',
    alt: 'zaini, crossbody e tote da incollare su Kakobuy',
  },
  electronics: {
    label: 'Tech',
    alt: 'audio e gadget price-aware',
  },
  jackets: {
    label: 'Giacche',
    alt: 'shell, piumini e strati tecnici',
  },
  hoodies: {
    label: 'Felpe',
    alt: 'zip, crew e maglieria',
  },
  headwear: {
    label: 'Headwear',
    alt: 'snapback, bucket e berretti',
  },
  jersey: {
    label: 'Jersey',
    alt: 'canotte mesh e sport',
  },
  perfume: {
    label: 'Beauty',
    alt: 'fragranze e beauty nel catalogo',
  },
  other: {
    label: 'Mix',
    alt: 'categorie ibridate e curiosità',
  },
} as const;

export const itHome: HomeStubContent = {
  title: 'Migliore Kakobuy Spreadsheet 2026 (Aggiornato) — 5.000+ Reps Links & QC',
  description:
    'Il Kakobuy Spreadsheet definitivo per il 2026. Sfoglia il nostro catalogo reps aggiornato per scarpe, felpe e giacche con link diretti e foto QC.',
  keywords:
    'Kakobuy Spreadsheet 2026, catalogo spreadsheet, Weidian agente, QC magazzino, paste link Taobao, FashionReps EU',
  webPageName: 'Migliore Kakobuy Spreadsheet 2026 · kakobuy-cn.com',
  webPageKeywords: [
    'Kakobuy Spreadsheet',
    'UI del catalogo',
    'Weidian Italia',
    'QC warehouse',
    'shopping agent',
  ],
  hero: {
    h1: 'Kakobuy Spreadsheet 2026',
    kicker: 'Taobao · Weidian · 1688 · Foto QC',
    body:
      'Accedi a oltre 5.000 reps di alta qualità con link verificati e foto QC professionali. Forniamo i dati, Kakobuy gestisce il resto.',
    ctaBrowse: 'Apri catalogo spreadsheet →',
    ctaLogin: 'Accedi a Kakobuy',
    heroPlaneAlt:
      'kakobuy spreadsheet · illustrazione aereo stile Kakobuy · hero decorativo · kakobuy-cn.com',
    searchAria:
      'kakobuy spreadsheet · ricerca hub (apre catalogo indicizzato per risultati)',
    searchPlaceholder: 'Brand, vibe o parole chiave…',
    searchByImage: 'Ricerca immagine',
    searchSubmit: 'Cerca',
    searchByImageAria:
      'kakobuy spreadsheet · ricerca immagine catalogo indicizzato · nuova scheda, stack identico',
  },
  categoriesAria: 'Scorciatoie categoria verso il catalogo',
  exploreTitle: 'Sfoglia binari Kakobuy Spreadsheet per categoria',
  redditAria: 'Community r/kakobuy (Reddit, nuova scheda)',
  redditSnooAlt:
    'kakobuy spreadsheet · Snoo Reddit r/kakobuy — haul, QC spreadsheet e confronti agent',
  sections: [
    {
      h3: '1. Cos\'è un Kakobuy Spreadsheet?',
      paragraphs: [
        'Nella community, uno "spreadsheet" è una lista curata di link (Taobao, Weidian, 1688) con informazioni sui lotti e foto QC. È una scorciatoia per trovare rapidamente i migliori prodotti.',
        'La nostra piattaforma trasforma queste liste statiche in un\'esperienza interattiva. Usa le nostre categorie per trovare articoli verificati.',
      ],
    },
    {
      h3: '2. Come acquistare?',
      paragraphs: [
        'Il processo è simple: trova un articolo nel nostro catalogo, copia il link HTTPS e incollalo nella barra di ricerca di Kakobuy. Lì potrai scegliere taglia, colore e completare l\'acquisto.',
      ],
    },
    {
      h3: '3. Controllo Qualità (QC)',
      paragraphs: [
        'Una volta che il tuo articolo arriva in magazzino, riceverai foto QC professionali. Controllale attentamente per verificare la qualità prima di approvare la spedizione internazionale.',
      ],
    },
    {
      h3: '4. Costi e Spedizione',
      paragraphs: [
        'Il costo totale include la spedizione nazionale, le commissioni dell\'agente e il trasporto internazionale. Il peso volumetrico è fondamentale per calcolare il costo finale della spedizione.',
      ],
    },
  ],
  ctaHeading: 'Passa al catalogo Kakobuy Spreadsheet',
  ctaIntro: 'Continua la discovery tramite',
  ctaIntroSuffix:
    ' — resta in modalità Browse mentre cacci URL e autenticati su Kakobuy quando incolli ordini.',
  ctaFooterNote: 'Piattaforme terze — due diligence consigliata.',
  sheetLinkLabel: 'il ponte Kakobuy Spreadsheet → spreadsheet agent',
  categoryPills: pillsFor(it),
  footer: {
    disclaimerLabel: 'Disclaimer',
    disclaimerHtml:
      'kakobuy-cn.com è hub editoriale di link. <a href="https://maisonlooks.com/en" target="_blank" rel="noopener noreferrer">catalogo indicizzato</a> e <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">Kakobuy</a> restano terze parti; nessun pagamento su questo dominio. Verifica QC e policy alla fonte. Nessun rapporto commerciale ufficiale con Kakobuy dichiarato qui.',
    copyrightLine:
      '© 2026 kakobuy-cn.com — note da acquirente; ordini chiusi su Kakobuy.',
  },
  categoryPage: {
    titleTemplate: 'Migliore Kakobuy {uiName} Spreadsheet 2026 — Top Picks & QC',
    descriptionTemplate: 'Sfoglia l’ultima Kakobuy {uiName} spreadsheet per il 2026. Selezione curata di {uiNameLower} premium con link diretti e foto QC verificate.',
    introTemplate: 'Scopri i migliori {uiNameLower} selezionati per la community di Kakobuy. Tutti gli articoli sono verificati manualmente con link di acquisto attivi e riferimenti QC di magazzino.',
    externalBtnTemplate: 'Visualizza il catalogo completo di {uiName} su MaisonLooks →',
    noProducts: 'Ancora nessun prodotto trovato in questa categoria. Torna presto!',
  },
};
