import type { HomeStubContent } from '../types';
import { pillsFor } from './categoryPaths';

const fr = {
  shoes: {
    label: 'Chaussures',
    alt: 'kakobuy spreadsheet — sneakers Weidian/Taobao avec QC lorsque visible',
  },
  't-shirts': {
    label: 'T-shirts',
    alt: 'kakobuy spreadsheet — coupes boxy, délavages et graphiques',
  },
  pants: {
    label: 'Pantalons',
    alt: 'kakobuy spreadsheet — denim, joggers et shorts prêts à coller',
  },
  accessories: {
    label: 'Accessoires',
    alt: 'kakobuy spreadsheet — ceintures, petits bijoux et détails',
  },
  bags: {
    label: 'Sacs',
    alt: 'kakobuy spreadsheet — sacoches, sacs à dos et cabas pour workflow agent',
  },
  electronics: {
    label: 'Tech',
    alt: 'kakobuy spreadsheet — gadgets et audio avec repère prix',
  },
  jackets: {
    label: 'Vestes',
    alt: 'kakobuy spreadsheet — coupe-vent, doudounes et couches techniques',
  },
  hoodies: {
    label: 'Sweats',
    alt: 'kakobuy spreadsheet — zips, crews et maille',
  },
  headwear: {
    label: 'Casquettes',
    alt: 'kakobuy spreadsheet — snapbacks, buckets et bonnets',
  },
  jersey: {
    label: 'Jerseys',
    alt: 'kakobuy spreadsheet — maillots mesh et sans manches',
  },
  perfume: {
    label: 'Beauté',
    alt: 'kakobuy spreadsheet — parfums et beauty du catalogue',
  },
  other: {
    label: 'Mix',
    alt: 'kakobuy spreadsheet — liste fourre-tout et catégories hybrides',
  },
} as const;

export const frHome: HomeStubContent = {
  title:
    'Kakobuy Spreadsheet 2026 — rails catalogue spreadsheet, culture QC & URLs à coller | kakobuy-cn.com',
  description:
    "Passerelle éditoriale 2026 : jargon spreadsheet lisible, photos d'entrepôt mises en perspective, rappels fret réalistes — navigation sur kakobuy-cn.com, règlement sur Kakobuy uniquement.",
  keywords:
    'Kakobuy Spreadsheet 2026, catalogue spreadsheet, Weidian agent, QC entrepôt, paste link Taobao, 1688 FashionReps',
  webPageName: 'Hub lecture Kakobuy Spreadsheet (kakobuy-cn.com)',
  webPageKeywords: [
    'Kakobuy Spreadsheet',
    'catalogue spreadsheet',
    'Weidian EU',
    'QC warehouse',
    'agent Chine',
  ],
  hero: {
    h1: 'Kakobuy Spreadsheet 2026',
    tagline: 'Le catalogue raconte ; Kakobuy encaisse',
    kicker: '2026 · Weidian · Taobao · 1688 · photos inbound',
    body:
      'Accès express aux mêmes couloirs du catalogue que les feuilles partagées, traduits ici en français clair sur ce qu’il faut vérifier avant d’approuver un envoi. Aucun paiement sur ce domaine : votre session Kakobuy reste la source de vérité.',
    ctaBrowse: 'Ouvrir le catalogue spreadsheet →',
    ctaLogin: 'Se connecter sur Kakobuy',
    heroPlaneAlt:
      'kakobuy spreadsheet · illustration avion façon Kakobuy · décor hero · kakobuy-cn.com',
    searchAria:
      'kakobuy spreadsheet · recherche hub éditorial (ouvre catalogue spreadsheet)',
    searchPlaceholder: 'Marques, moodboards ou mots-clés…',
    searchByImage: 'Recherche image',
    searchSubmit: 'Chercher',
    searchByImageAria:
      'kakobuy spreadsheet · recherche image catalogue spreadsheet · nouvel onglet, même pile',
  },
  categoriesAria: 'Raccourcis catégories vers le front catalogue',
  exploreTitle: 'Parcourez les rails Kakobuy Spreadsheet par catégorie',
  redditAria: 'Communauté r/kakobuy (Reddit, nouvel onglet)',
  redditSnooAlt:
    'kakobuy spreadsheet · Snoo Reddit — r/kakobuy haul, QC spreadsheets et agents',
  exploreKickerLead: 'Choisissez une catégorie, puis finalisez vos achats dans ',
  exploreKickerTrail: '',
  exploreIntro:
    'Chaque chip ouvre la navigation indexée Kakobuy Spreadsheet (mix Taobao / Weidian / 1688 selon la voie). Capturez-y les URL SKU réelles, puis poursuivez dans votre compte Kakobuy pour paiements et photographie d’entrepôt.',
  exploreSub:
    'Les icônes ouvrent volontairement un nouvel onglet afin de garder cette page de référence à côté de votre session Kakobuy.',
  introH2:
    'Pourquoi les acheteurs Kakobuy Spreadsheet se soucient encore des URL en 2026',
  introP:
    'Liens marketplace stables, prix lus avec scepticisme et clichés entrepôt battent captures hype — même lorsqu’elles viennent d’une ligne Kakobuy Spreadsheet. La référence suivante parcourt tout l’arc Kakobuy Spreadsheet sans prétendre tenir checkout.',
  guideH2: 'Kakobuy Spreadsheet décrypté — manuel agent (édition 2026)',
  guideIntro:
    'Voici une référence Kakobuy Spreadsheet reconstituée qui reflète comment le jargon hobby a évolué : ce qu’on appelle ligne Kakobuy Spreadsheet, pourquoi kakobuy-cn.com reste uniquement compagnon éditorial Kakobuy Spreadsheet, comment les URL survivent aux refontes marketplace, quand le QC compte et comment stress‑tester le « landed » avant de valider l’expédition. Politiques, factures et litiges restent chez Kakobuy — la couche Kakobuy Spreadsheet ne remplace jamais checkout.',
  sections: [
    {
      h3: '1. Ce que les hobbyistes veulent dire par « Kakobuy Spreadsheet »',
      paragraphs: [
        'Sur les threads on utilise « Kakobuy Spreadsheet » (ou simplement « spreadsheet ») pour toute grille curatée — Google Sheets, exports Airtable ou skins catalogue — alignant des URL chinoises à côté de ragots batch, aides‑mémoire tailles, indices yuan/US et quelques stills QC vendeur. Voyez chaque ligne Kakobuy Spreadsheet comme waypoint sauvegardé, pas promesse magique de stock.',
        'Nous adoptons volontairement ce vocabulaire : les pills Kakobuy Spreadsheet vous placent sur rails browse indexés Kakobuy Spreadsheet pour récolter SKU comme les vétérans Discord. Qu’on dise spreadsheet Weidian ou Taobao dans un classeur Kakobuy Spreadsheet, la mécanique reste identique — vous collez l’URL résolue dans Kakobuy, financez le segment domestique, attendez les clichés inbound puis approuvez le fret export.',
      ],
    },
    {
      h3:
        '2. Listes communautaires Kakobuy Spreadsheet vs. voix corporate Kakobuy · rôle de kakobuy-cn.com',
      paragraphs: [
        'Peu de miroirs Kakobuy Spreadsheet portent un sceau corporate ; ce sont surtout digests bénévoles empilés sur le même folklore Kakobuy Spreadsheet que dans les threads haul. Saisies, remboursements, SKU interdits ou disputes passent toujours par Kakobuy et votre douane locale. Pour du texte niveau contrat, lisez la FAQ live Kakobuy et les politiques vendeur — pas les recap Discord d’un onglet Kakobuy Spreadsheet.',
        'kakobuy-cn.com demeure à distance de chaque parcours checkout Kakobuy Spreadsheet : pas de paniers, wallets ni desk fulfilment. Tout ce qui ressemble à « ticket support » vit dans dashboards Kakobuy ou sellers tiers. Si checkout contradictoire avec un essai ici, le checkout prime — ce hub Kakobuy Spreadsheet contextualise seulement.',
      ],
    },
    {
      h3:
        '3. Rythme opérationnel Kakobuy Spreadsheet — onglet catalogue → snapshots Kakobuy',
      paragraphs: [
        'Partez de la surface browse Kakobuy Spreadsheet reliée à ce hub, ouvrez une page SKU et copiez le HTTPS complet depuis la barre d’adresse — la même remise que tout tutoriel Kakobuy Spreadsheet suppose. Évitez wrappers qui retirent IDs variantes, cadres CDN nus ou racines boutique qui masquent options — ils créent commandes fantômes ensuite.',
        'Chez Kakobuy suivez l’assistant coller‑lien de votre UI. Verrouillez couleur/taille/batch avant charges annexes et notez frais embarqués. Inbound domestique d’abord ; obsession QC pixels seulement après réception avant segments courier coûteux — volumétrie éclipse souvent le chiffre optimiste qui vivait dans la cellule Kakobuy Spreadsheet.',
      ],
    },
    {
      h3:
        '4. Pourquoi agents routés battent DMs vendeurs désordonnées (toujours la fin Kakobuy Spreadsheet)',
      paragraphs: [
        'Les agents consolident sauts domestiques, packagent photo QC et exposent ticketing pour faire remonter problèmes avant export — voilà pourquoi workflows Kakobuy Spreadsheet finissent presque toujours dans boîte collage agent plutôt que DM vendeur. Cela n’efface pas roulette douanière — ça remplace transferts peer‑to‑peer chaotiques par tableaux auditable screenshot‑ables à côté de vos notes Kakobuy Spreadsheet.',
      ],
    },
    {
      h3:
        '5. Gestion des liens quand drops se renomment à l’heure · garder lignes Kakobuy Spreadsheet honnêtes',
      paragraphs: [
        'Les marketplaces mutent URLs pour SEO, bans ou rebuild boutiques ; Kakobuy ne fige pas permaliens tiers. Les onglets Kakobuy Spreadsheet jamais rafraîchis accumulent fantômes. De bons curateurs Kakobuy Spreadsheet horodatent clics, signalent lignes mortes, annotent « needs verification ».',
        'Privilégiez URL dont sélecteur variantes reflète encore chatter Discord ou commentaires Kakobuy Spreadsheet archivés. Datez captures hype pour savoir si référence QC précède dernier rewrite — splash drift plus vite que SKU ancre copiée depuis Kakobuy Spreadsheet.',
      ],
    },
    {
      h3: '6. Imagerie entrepôt vs. galeries marketing Kakobuy Spreadsheet',
      paragraphs: [
        'Une fois inbound libéré, Kakobuy photographie ce qui est arrivé physiquement. Ces clichés alimentent QC hobby — lumière dure, angles francs, plis imparfaits. Galeries listing restent direction artistique aspirationnelle ; sets entrepôt révèlent coutures décentrées, logos off‑center ou shifts teinte avant étiquettes internationales — ne confondez jamais miniature Kakobuy Spreadsheet brillante avec vérité entrepôt.',
        'Si divergence matérielle avec récit vendeur ou légende Kakobuy Spreadsheet, pausez et ouvrez dispute/ticket Kakobuy avant freight outbound. Après passage DHL/FedEx/EMS remediation coûte cher — note Kakobuy Spreadsheet ne recoud pas mid‑flight.',
      ],
    },
    {
      h3: '7. Prix ligne Kakobuy Spreadsheet vs. math landed réelle',
      paragraphs: [
        'Tant qu’une ligne Kakobuy Spreadsheet n’énumère pas chaque surcharge, traitez prix visible comme indice item‑facing — pas devis landed pour votre code postal. Landed empile forwarding domestique, services agent, mesures optionnelles, billing volumétrique, clauses carburant, toggles assurance, spreads FX et exigences classe courier.',
        'Chaussures massives, doudounes et bundles tech punissent poids DIM — tenez journal d’envois personnel à côté du Kakobuy Spreadsheet ; moyennes historiques battent arrondis de salon Discord.',
      ],
    },
    {
      h3: '8. Évaluer curateurs Kakobuy Spreadsheet, batches et ragots pairs',
      paragraphs: [
        'Même éditeurs Kakobuy Spreadsheet brillants retardent réalité marketplace : batches meurent, matériaux pivotent, verdicts « GL » vieillissent. Croisez listings vivants, preuves Reddit fraîches et politiques retour avant nostalgie ligne Kakobuy Spreadsheet.',
        'Servez‑vous de ce hub Kakobuy Spreadsheet comme boussole, pas autopilote. Silhouettes trop bon marché suggèrent batches tournés, listings leurres ou grilles taille mal lues — collez prudemment, QC agressif et respectez timers disputes Kakobuy même quand Kakobuy Spreadsheet dit le contraire.',
      ],
    },
    {
      h3: '9. Pièges Kakobuy Spreadsheet récurrents',
      paragraphs: [
        'Tailles lettre sans tableau mm/cm ; ignorer poids vêtements avant volumétrie ; traiter clones « inspired » comme jumeaux 1:1 parce qu’une cellule Kakobuy Spreadsheet l’a dit ; valider QC sur miniature illisible ; citer colonne Kakobuy Spreadsheet unique comme prix landed taxes incluses pour votre code postal.',
      ],
    },
    {
      h3:
        '10. Bibliothèques communautaires Kakobuy Spreadsheet honnêtes saison après saison',
      paragraphs: [
        'Segmentez onglets par vertical, figez en‑têtes, notez IDs batch et planifiez audits URL — surtout après mega‑refresh « rewrite 2026 ». Documents Kakobuy Spreadsheet vivants surpassent dumps screenshot : supprimez hyperlinks morts, codez couleur SKU suspects et racontez remplacements pour lecteur Kakobuy Spreadsheet suivant.',
      ],
    },
  ],
  ctaHeading: 'Passer au répertoire Kakobuy Spreadsheet',
  ctaIntro: 'Poursuivez la découverte via',
  ctaIntroSuffix:
    ' — restez en mode Browse pendant la chasse aux URL puis authentifiez‑vous sur Kakobuy lorsque vous collez des achats.',
  ctaFooterNote: 'Services tiers — diligence raisonnable obligatoire.',
  sheetLinkLabel: 'le pont Kakobuy Spreadsheet → spreadsheets agent',
  categoryPills: pillsFor(fr),
  footer: {
    disclaimerLabel: 'Mentions',
    disclaimerHtml:
      'kakobuy-cn.com est un hub de navigation indépendant. Les liens vers <a href="https://maisonlooks.com/en" target="_blank" rel="noopener noreferrer">catalogue spreadsheet</a> et <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">Kakobuy</a> pointent vers des opérateurs tiers ; aucun paiement ici. Vérifiez QC & CGU à la source. Pas de partenariat officiel revendiqué avec Kakobuy.',
    copyrightLine:
      '© 2026 kakobuy-cn.com — repères lecteurs ; commandes finalisées sur Kakobuy.',
  },
};
