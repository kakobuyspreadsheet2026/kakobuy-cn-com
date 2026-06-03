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
  title: 'Kakobuy Spreadsheet 2026 — 5 000+ liens et photos QC',
  description:
    'Hub indépendant Kakobuy Spreadsheet pour 2026 : plus de 5 000 finds Taobao, Weidian et 1688 avec photos QC. Catégories, guides paste-link, achetez via Kakobuy.',
  keywords:
    'répertoire Kakobuy, catalogue de répliques, liens Weidian, guide de contrôle de qualité Taobao, agent de transport de Chine',
  webPageName: 'Kakobuy Spreadsheet 2026 · kakobuy-cn.com',
  webPageKeywords: [
    'répertoire de répliques',
    'guide d\'agent d\'achat',
    'liens vérifiés',
    'photos de contrôle qualité',
    'assistant de livraison',
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
      h3: 'Qu\'est-ce qu\'un Kakobuy Spreadsheet Hub ?',
      paragraphs: [
        'En pratique, il s’agit d’une collection sélectionnée à la main des meilleurs liens de produits provenant de places de marché chinoises comme Taobao, Weidian et 1688. Nous ajoutons des notes sur les „batches“ (versions de qualité), des estimations de prix et des photos pour que vous n’ayez pas à deviner en cherchant sur des sites qui ne sont pas dans votre langue.',
        'Ce site web agit comme votre guide et votre index. Alors que nous vous aidons à trouver les articles, Kakobuy s’occupe de l’achat réel, de la vérification de la qualité dans son entrepôt et de l’expédition du colis à votre porte.',
      ],
    },
    {
      h3: 'Comment acheter une fois que j’ai choisi un article ?',
      paragraphs: [
        'C’est facile : copiez le lien du produit, collez-le dans la barre de recherche de Kakobuy et choisissez votre taille et votre couleur. Une fois que vous avez payé le prix domestique, l’article est envoyé à l’entrepôt Kakobuy où ils prennent des photos professionnelles pour que vous puissiez les examiner.',
        'Vérifiez toujours attentivement ces photos „QC“. Si l’article semble différent de ce que vous attendiez, vous pouvez demander un retour ou un échange avant qu’il ne quitte la Chine.',
      ],
    },
    {
      h3: 'Pourquoi utiliser un agent comme Kakobuy ?',
      paragraphs: [
        'La plupart des vendeurs en Chine n’expédient pas directement vers des adresses internationales. Les agents comblent cette lacune. Ils fournissent un endroit sûr pour stocker vos articles, vérifient que vous avez reçu exactement ce que vous avez payé et regroupent plusieurs articles dans une seule boîte pour vous faire économiser sur les frais d’expédition.',
        'L’utilisation d’un agent vous offre également une protection de paiement et un moyen clair de gérer les litiges si un vendeur envoie le mauvais lot ou la mauvaise taille.',
      ],
    },
    {
      h3: 'Qu’en est-il des liens morts ou des articles en rupture de stock ?',
      paragraphs: [
        'Le marché évolue vite — les vendeurs mettent souvent à jour leurs liens ou tombent en rupture de stock sans prévenir. Nous actualisons constamment notre répertoire pour que tout fonctionne, mais si vous tombez sur un lien brisé, consultez simplement la page de la catégorie pour trouver une alternative fraîche.',
        'Si un article que vous avez acheté devient soudainement indisponible, Kakobuy vous en informera et vous remboursera sur votre solde afin que vous puissiez choisir autre chose.',
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
    homeHubBackLink: '← Hub Kakobuy Spreadsheet',
    introToggleLabel: 'À propos de cette catégorie',
    externalBtnTemplate: '{uiName} sur MaisonLooks →',
    noProducts: 'Aucun produit trouvé dans cette catégorie pour le moment. Revenez bientôt !',
  },
};
