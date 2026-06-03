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
  title: 'Kakobuy Spreadsheet 2026 — 5.000+ link e foto QC',
  description:
    'Hub indipendente Kakobuy Spreadsheet per il 2026: oltre 5.000 find Taobao, Weidian e 1688 con foto QC. Categorie, guide paste-link, acquista via Kakobuy.',
  keywords:
    'elenco Kakobuy, catalogo di repliche, link Weidian, guida al controllo qualità Taobao, spedizioniere dalla Cina',
  webPageName: 'Kakobuy Spreadsheet 2026 · kakobuy-cn.com',
  webPageKeywords: [
    'elenco di repliche',
    'guida per agenti d\'acquisto',
    'link verificati',
    'foto di controllo qualità',
    'assistente di spedizione',
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
      h3: 'Cos\'è un Kakobuy Spreadsheet Hub?',
      paragraphs: [
        'In pratica, è una collezione selezionata a mano dei migliori link di prodotti provenienti da marketplace cinesi come Taobao, Weidian e 1688. Aggiungiamo note sui „batches“ (versioni di qualità), stime di prezzo e foto, così non dovrai tirare a indovinare mentre cerchi su siti che non sono nella tua lingua.',
        'Questo sito web agisce come tua guida e indice. Mentre noi ti aiutiamo a trovare gli articoli, Kakobuy gestisce l\'acquisto effettivo, il controllo qualità nel loro magazzino e la spedizione del pacco a casa tua.',
      ],
    },
    {
      h3: 'Come acquisto una volta scelto un articolo?',
      paragraphs: [
        'È facile: copia il link del prodotto, incollalo nella barra di ricerca di Kakobuy e scegli la tua taglia e il tuo colore. Una volta pagato il prezzo nazionale, l\'articolo viene inviato al magazzino di Kakobuy dove scattano foto professionali per la tua revisione.',
        'Controlla sempre attentamente queste foto „QC“. Se l\'articolo sembra diverso da quello che ti aspettavi, puoi chiedere un reso o un cambio prima che lasci la Cina.',
      ],
    },
    {
      h3: 'Perché usare un agente come Kakobuy?',
      paragraphs: [
        'La maggior parte dei venditori in Cina non spedisce direttamente a indirizzi internazionali. Gli agenti colmano questo divario. Forniscono un posto sicuro dove conservare i tuoi articoli, verificano che tu abbia ricevuto esattamente ciò per cui hai pagato e consolidano più articoli in un\'unica scatola per farti risparmiare sulla spedizione.',
        'L\'uso di un agente ti offre anche protezione sui pagamenti e un modo chiaro per gestire le controversie se un venditore invia il lotto o la taglia sbagliati.',
      ],
    },
    {
      h3: 'E per i link morti o gli articoli esauriti?',
      paragraphs: [
        'Il mercato si muove velocemente: i venditori spesso aggiornano i loro link o esauriscono le scorte senza preavviso. Aggiorniamo costantemente la nostra directory per mantenere tutto funzionante, ma se trovi un link interrotto, controlla semplicemente la pagina della categoria per un\'alternativa fresca.',
        'Se un articolo che hai acquistato diventa improvvisamente non disponibile, Kakobuy ti avviserà e ti rimborserà il denaro sul tuo saldo in modo che tu possa scegliere qualcos\'altro.',
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
    homeHubBackLink: '← Hub Kakobuy Spreadsheet',
    introToggleLabel: 'Informazioni su questa categoria',
    externalBtnTemplate: '{uiName} su MaisonLooks →',
    noProducts: 'Ancora nessun prodotto trovato in questa categoria. Torna presto!',
  },
};
