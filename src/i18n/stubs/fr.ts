import type { HomeStubContent } from '../types';
import { pillsFor } from './categoryPaths';

const fr = {
  shoes: {
    label: 'Chaussures',
    alt: 'sneakers Weidian/Taobao avec QC lorsque visible',
  },
  't-shirts': {
    label: 'T-shirts',
    alt: 'coupes boxy, délavages et graphiques',
  },
  pants: {
    label: 'Pantalons',
    alt: 'denim, joggers et shorts prêts à coller',
  },
  accessories: {
    label: 'Accessoires',
    alt: 'ceintures, petits bijoux et détails',
  },
  bags: {
    label: 'Sacs',
    alt: 'sacoches, sacs à dos et cabas pour workflow agent',
  },
  electronics: {
    label: 'Tech',
    alt: 'gadgets et audio avec repère prix',
  },
  jackets: {
    label: 'Vestes',
    alt: 'coupe-vent, doudounes et couches techniques',
  },
  hoodies: {
    label: 'Sweats',
    alt: 'zips, crews et maille',
  },
  headwear: {
    label: 'Casquettes',
    alt: 'snapbacks, buckets et bonnets',
  },
  jersey: {
    label: 'Jerseys',
    alt: 'maillots mesh et sans manches',
  },
  perfume: {
    label: 'Beauté',
    alt: 'parfums et beauty du catalogue',
  },
  other: {
    label: 'Mix',
    alt: 'liste fourre-tout et catégories hybrides',
  },
} as const;

export const frHome: HomeStubContent = {
  title: 'Meilleur Kakobuy Spreadsheet 2026 (Mis à jour) — 5 000+ Reps Links & QC',
  description:
    'Le Kakobuy Spreadsheet ultime pour 2026. Parcourez notre catalogue reps mis à jour pour chaussures, sweats et vestes avec liens directs et photos QC.',
  keywords:
    'Kakobuy Spreadsheet 2026, catalogue spreadsheet, Weidian agent, QC entrepôt, paste link Taobao, 1688 FashionReps',
  webPageName: 'Meilleur Kakobuy Spreadsheet 2026 · kakobuy-cn.com',
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
      'La découverte commence sur kakobuy-cn.com : parcourez les catégories et mots-clés, ouvrez des pages marketplace stables sur Taobao, Weidian et 1688, puis transmettez une URL propre à Kakobuy pour le paiement et la photographie d’entrepôt. Ce site n’est que la couche de navigation — le panier, les frais et les validations d’expédition restent dans votre session d’agent.',
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
    'Chaque bouton ouvre la navigation indexée (mix Taobao / Weidian / 1688 selon la voie). Capturez-y les URL SKU réelles, puis poursuivez dans votre compte Kakobuy pour les paiements et la photographie d’entrepôt.',
  exploreSub:
    'Les icônes ouvrent volontairement un nouvel onglet afin de garder cette page de référence à côté de votre session Kakobuy.',
  introH2:
    'Pourquoi les acheteurs Kakobuy Spreadsheet se soucient encore des URL en 2026',
  introP:
    'Des liens marketplace stables, des prix lus avec scepticisme et des clichés d’entrepôt battent les captures d’écran hype — même lorsqu’elles proviennent d’une ligne curatée. Le guide suivant parcourt tout le processus d’achat sans prétendre gérer le paiement.',
  guideH2: 'Kakobuy Spreadsheet décrypté — manuel agent (édition 2026)',
  guideIntro:
    'Voici une référence reconstituée qui reflète l’évolution du jargon : ce qu’on appelle une ligne de Kakobuy Spreadsheet, pourquoi kakobuy-cn.com reste uniquement un compagnon éditorial, comment les URL survivent aux refontes des marketplaces, quand le QC compte et comment optimiser le coût final avant de valider l’expédition. Les politiques, factures et litiges restent chez l’agent — cette couche ne remplace jamais le paiement officiel.',
  sections: [
    {
      h3: '1. Ce que les hobbyistes veulent dire par « Kakobuy Spreadsheet »',
      paragraphs: [
        'Sur les forums, on utilise ce terme (ou simplement « spreadsheet ») pour toute grille curatée — Google Sheets, exports Airtable ou interfaces de catalogue — alignant des URL chinoises à côté de rumeurs sur les lots, d’aides‑mémoire pour les tailles, d’indices de prix et de quelques photos QC du vendeur. Considérez chaque ligne comme un point de repère sauvegardé, pas une promesse magique de stock.',
        'Nous adoptons volontairement ce vocabulaire : les catégories vous placent sur des rails de navigation indexés pour récolter des SKU comme les vétérans de Discord. Qu’on parle de classeur Weidian ou Taobao, la mécanique reste identique — vous collez l’URL résolue dans Kakobuy, financez le segment domestique, attendez les clichés d’entrepôt puis approuvez l’expédition internationale.',
      ],
    },
    {
      h3:
        '2. Listes communautaires Kakobuy Spreadsheet vs. voix corporate Kakobuy · rôle de kakobuy-cn.com',
      paragraphs: [
        'Peu de miroirs portent un sceau officiel ; ce sont surtout des résumés bénévoles basés sur le même folklore que dans les discussions de commandes. Les saisies, remboursements, SKU interdits ou litiges passent toujours par l’agent et votre douane locale. Pour des textes contractuels, lisez la FAQ en direct de l’agent et les politiques du vendeur — pas les captures Discord d’un onglet de partage.',
        'kakobuy-cn.com demeure à distance de chaque parcours de paiement : pas de paniers, de portefeuilles ni de gestion de commandes. Tout ce qui ressemble à un « ticket support » vit dans les interfaces de l’agent ou chez les vendeurs tiers. Si le paiement officiel contredit un article ici, c’est le paiement qui prime — ce hub apporte seulement du contexte.',
      ],
    },
    {
      h3:
        '3. Rythme opérationnel — onglet catalogue → snapshots Kakobuy',
      paragraphs: [
        'Partez de la surface de navigation reliée à ce hub, ouvrez une page SKU et copiez le lien HTTPS complet depuis la barre d’adresse — la même étape que tout tutoriel suppose. Évitez les redirections qui retirent les IDs de variantes, les cadres CDN nus ou les racines de boutique qui masquent les options — ils créent des commandes fantômes par la suite.',
        'Chez Kakobuy, suivez l’assistant de collage de lien. Verrouillez la couleur, la taille et le lot avant les frais annexes et notez les frais de service inclus. Le transport domestique vient d’abord ; l’obsession pour les pixels QC ne vient qu’après réception, avant les segments de livraison coûteux — la volumétrie éclipse souvent le chiffre optimiste qui figurait dans la cellule du partage.',
      ],
    },
    {
      h3:
        '4. Pourquoi les agents organisés battent les messages directs (toujours l’objectif final)',
      paragraphs: [
        'Les agents consolident les trajets domestiques, gèrent les photos QC et exposent un système de tickets pour faire remonter les problèmes avant l’export — voilà pourquoi ces workflows finissent presque toujours dans la boîte de collage de l’agent plutôt que par message au vendeur. Cela n’efface pas la roulette douanière — cela remplace les transferts directs chaotiques par des tableaux de bord auditables à côté de vos notes.',
      ],
    },
    {
      h3:
        '5. Gestion des liens quand les stocks changent de nom — garder les lignes honnêtes',
      paragraphs: [
        'Les marketplaces modifient les URL pour le SEO, les suspensions ou les refontes de boutiques ; l’agent ne peut pas figer les liens tiers. Les onglets jamais rafraîchis accumulent des liens morts. De bons curateurs horodatent les clics, signalent les lignes mortes et annotent « vérification nécessaire ».',
        'Privilégiez les URL dont le sélecteur de variantes reflète encore les discussions ou les commentaires archivés. Datez vos captures pour savoir si une référence QC est antérieure à la dernière modification — les pages d’accueil changent plus vite que les liens SKU copiés depuis un classeur.',
      ],
    },
    {
      h3: '6. Imagerie d’entrepôt vs. galeries marketing',
      paragraphs: [
        'Une fois le trajet domestique terminé, Kakobuy photographie ce qui est arrivé physiquement. Ces clichés alimentent le QC des passionnés — lumière dure, angles francs, plis imparfaits. Les galeries de l’annonce restent une direction artistique aspirationnelle ; les clichés d’entrepôt révèlent les coutures décentrées, les logos mal placés ou les écarts de teinte avant l’expédition internationale — ne confondez jamais une miniature brillante avec la vérité de l’entrepôt.',
        'Si une divergence matérielle apparaît avec le récit du vendeur ou la légende du partage, faites une pause et ouvrez un litige auprès de l’agent avant l’envoi. Après le passage au transporteur international, toute correction coûte cher — une note dans un classeur ne recoud pas les coutures en plein vol.',
      ],
    },
    {
      h3: '7. Prix affiché vs. coût final réel',
      paragraphs: [
        'Tant qu’une ligne n’énumère pas chaque supplément, considérez le prix visible comme une indication — pas un devis final pour votre code postal. Le coût total cumule le transport domestique, les services de l’agent, les mesures optionnelles, la facturation volumétrique, les clauses carburant, les options d’assurance, les taux de change et les exigences du transporteur.',
        'Les chaussures massives, les doudounes et les produits high-tech sont pénalisés par le poids volumétrique — tenez un journal d’envois personnel à côté de vos listes ; vos moyennes historiques battront toujours les arrondis des forums.',
      ],
    },
    {
      h3: '8. Évaluer les curateurs, les lots et les avis pairs',
      paragraphs: [
        'Même les éditeurs les plus brillants sont en retard sur la réalité du marché : les lots disparaissent, les matériaux changent, les verdicts « GL » vieillissent. Croisez les annonces en direct, les preuves récentes sur les réseaux et les politiques de retour avant de vous fier à la nostalgie d’une ligne de partage.',
        'Servez‑vous de ce hub comme d’une boussole, pas d’un autopilote. Des prix anormalement bas suggèrent souvent des lots modifiés, des annonces leurres ou des grilles de tailles mal lues — collez avec prudence, soyez exigeant sur le QC et respectez les délais de litige de l’agent même si le classeur dit le contraire.',
      ],
    },
    {
      h3: '9. Pièges récurrents',
      paragraphs: [
        'Se fier aux tailles en lettres sans tableau de mesures ; ignorer le poids des vêtements avant la volumétrie ; traiter des clones comme des jumeaux identiques parce qu’une cellule l’a dit ; valider un QC sur une miniature illisible ; citer une seule colonne comme prix final taxes incluses pour votre zone.',
      ],
    },
    {
      h3:
        '10. Des bibliothèques communautaires honnêtes saison après saison',
      paragraphs: [
        'Segmentez les onglets par thématique, figez les en‑têtes, notez les IDs de lots et planifiez des audits d’URL — surtout après les grandes mises à jour. Des documents vivants valent mieux que des captures d’écran : supprimez les liens morts, marquez les SKU suspects et expliquez les remplacements pour le prochain lecteur.',
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
  categoryPage: {
    titleTemplate: 'Meilleur Kakobuy {uiName} Spreadsheet 2026 — Top Picks & QC',
    descriptionTemplate: 'Parcourez l’ultime Kakobuy {uiName} spreadsheet pour 2026. Sélection curatée de {uiNameLower} premium avec liens directs et photos QC vérifiées.',
    introTemplate: 'Découvrez les meilleurs {uiNameLower} sélectionnés pour la communauté Kakobuy. Tous les articles sont vérifiés manuellement avec des liens d’achat actifs et des références QC d’entrepôt.',
    externalBtnTemplate: 'Voir le catalogue complet {uiName} sur MaisonLooks →',
    noProducts: 'Aucun produit trouvé dans cette catégorie pour le moment. Revenez bientôt !',
  },
};
