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
    kicker: 'Taobao · Weidian · 1688 · Photos QC',
    body:
      'Accédez à plus de 5 000 reps de haute qualité avec des liens vérifiés et des photos QC professionnelles. Nous fournissons les données, Kakobuy s’occupe du reste.',
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
  sections: [
    {
      h3: '1. Qu\'est-ce qu\'un Kakobuy Spreadsheet ?',
      paragraphs: [
        'Dans la communauté, un "spreadsheet" est une liste curatée de liens (Taobao, Weidian, 1688) avec des infos sur les lots et des photos QC. C\'est un raccourci pour trouver les meilleurs articles rapidement.',
        'Notre plateforme transforme ces listes statiques en une expérience interactive. Utilisez nos catégories pour trouver des articles vérifiés.',
      ],
    },
    {
      h3: '2. Comment acheter ?',
      paragraphs: [
        'Le processus est simple : trouvez un article dans notre catalogue, copiez le lien HTTPS et collez-le dans la barre de recherche de Kakobuy. Vous pourrez y choisir la taille, la couleur et finaliser votre achat.',
      ],
    },
    {
      h3: '3. Contrôle Qualité (QC)',
      paragraphs: [
        'Une fois votre article arrivé à l\'entrepôt, vous recevrez des photos QC professionnelles. Vérifiez-les attentivement pour valider la qualité avant d\'approuver l\'expédition internationale.',
      ],
    },
    {
      h3: '4. Frais et Livraison',
      paragraphs: [
        'Le coût total inclut la livraison domestique, les frais de l\'agent et le fret international. Le poids volumétrique est essentiel pour calculer le coût final de l\'envoi de votre colis.',
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
