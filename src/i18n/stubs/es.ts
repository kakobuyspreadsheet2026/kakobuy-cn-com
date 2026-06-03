import type { HomeStubContent } from '../types';
import { pillsFor } from './categoryPaths';

const es = {
  shoes: {
    label: 'Zapatillas',
    alt: 'calzado Weidian/Taobao con QC si el anuncio lo muestra',
  },
  't-shirts': {
    label: 'Camisetas',
    alt: 'oversize, lavados ácido y street basics',
  },
  pants: {
    label: 'Pantalones',
    alt: 'denim, joggers y shorts verificables',
  },
  accessories: {
    label: 'Accesorios',
    alt: 'cinturones, joyería ligera y detalles',
  },
  bags: {
    label: 'Bolsos',
    alt: 'crossbody, mochilas y tote listos para pegar en Kakobuy',
  },
  electronics: {
    label: 'Electrónica',
    alt: 'gadgets y audio con contexto de precio',
  },
  jackets: {
    label: 'Chaquetas',
    alt: 'outerwear estacional y capas técnicas',
  },
  hoodies: {
    label: 'Sudaderas',
    alt: 'hoodies zip, crew y punto',
  },
  headwear: {
    label: 'Gorros',
    alt: 'gorras, buckets y beanies',
  },
  jersey: {
    label: 'Jerseys',
    alt: 'mesh y camisetas deportivas sin manga',
  },
  perfume: {
    label: 'Beauty',
    alt: 'fragancias y beauty del catálogo',
  },
  other: {
    label: 'Mix',
    alt: 'categorías cruzadas y hallazgos raros',
  },
} as const;

export const esHome: HomeStubContent = {
  title: 'Kakobuy Spreadsheet 2026 — 5.000+ enlaces y fotos QC',
  description:
    'Hub independiente de Kakobuy Spreadsheet para 2026: más de 5.000 finds de Taobao, Weidian y 1688 con fotos QC. Categorías, guías para pegar enlaces, compra vía Kakobuy.',
  keywords:
    'directorio Kakobuy, catálogo de réplicas, enlaces Weidian, guía de control de calidad Taobao, agente de compras de China',
  webPageName: 'Kakobuy Spreadsheet 2026 · kakobuy-cn.com',
  webPageKeywords: [
    'directorio de réplicas',
    'guía de agente de compras',
    'enlaces verificados',
    'fotos de control de calidad',
    'asistente de envíos',
  ],
  hero: {
    h1: 'Kakobuy Spreadsheet 2026',
    kicker: 'Taobao · Weidian · 1688 · Fotos QC',
    body:
      'Accede a más de 5.000 reps de alta calidad con enlaces verificados y fotos QC profesionales. Nosotros ponemos los datos, Kakobuy hace el resto.',
    ctaBrowse: 'Abrir browse del catálogo →',
    ctaLogin: 'Entrar en Kakobuy',
    heroPlaneAlt:
      'kakobuy spreadsheet · Ilustración avión estilo Kakobuy · hero decorativo · kakobuy-cn.com',
    searchAria:
      'kakobuy spreadsheet · buscar en hub editorial (abre catálogo indexado)',
    searchPlaceholder: 'Marcas, keywords o estética…',
    searchByImage: 'Buscar por imagen',
    searchSubmit: 'Buscar',
    searchByImageAria:
      'kakobuy spreadsheet · búsqueda por imagen en catálogo indexado · nueva pestaña, mismo stack',
  },
  categoriesAria: 'Categorías del catálogo explicadas en voz cercana',
  exploreTitle: 'Explora carriles Kakobuy Spreadsheet por categoría',
  redditAria: 'Comunidad r/kakobuy (Reddit, nueva pestaña)',
  redditSnooAlt:
    'kakobuy spreadsheet · Snoo Reddit — r/kakobuy debates QC, hauls y agents',
  sections: [
    {
      h3: '¿Qué es un Kakobuy Spreadsheet Hub?',
      paragraphs: [
        'En la práctica, es una colección seleccionada a mano de los mejores enlaces de productos de mercados chinos como Taobao, Weidian y 1688. Añadimos notas sobre „batches“ (versiones de calidad), estimaciones de precios y fotos para que no tengas que adivinar mientras buscas en sitios que no están en tu idioma.',
        'Este sitio web actúa como tu guía e índice. Mientras te ayudamos a encontrar los artículos, Kakobuy se encarga de la compra real, la comprobación de la calidad en su almacén y el envío del paquete a tu puerta.',
      ],
    },
    {
      h3: '¿Cómo compro una vez que elijo un artículo?',
      paragraphs: [
        'Es fácil: copia el enlace del producto, pégalo en la barra de búsqueda de Kakobuy y elige tu talla y color. Una vez que pagues el precio doméstico, el artículo se envía al almacén de Kakobuy, donde toman fotos profesionales para que las revises.',
        'Revisa siempre estas fotos „QC“ cuidadosamente. Si el artículo se ve diferente de lo que esperabas, puedes solicitar una devolución o cambio antes de que salga de China.',
      ],
    },
    {
      h3: '¿Por qué usar un agente como Kakobuy?',
      paragraphs: [
        'La mayoría de los vendedores en China no realizan envíos directos a direcciones internacionales. Los agentes cierran esa brecha. Proporcionan un lugar seguro para almacenar tus artículos, verifican que recibiste exactamente lo que pagaste y consolidan varios artículos en una sola caja para ahorrarte dinero en el envío.',
        'El uso de un agente también te brinda protección de pago y una forma clara de manejar disputas si un vendedor envía el lote o la talla incorrectos.',
      ],
    },
    {
      h3: '¿Qué pasa con los enlaces muertos o los artículos agotados?',
      paragraphs: [
        'El mercado se mueve rápido: los vendedores suelen actualizar sus enlaces o quedarse sin existencias sin previo aviso. Actualizamos nuestro directorio constantemente para que todo siga funcionando, pero si encuentras un enlace roto, simplemente consulta la página de la categoría para encontrar una alternativa fresca.',
        'Si un artículo que compraste de repente no está disponible, Kakobuy te notificará y te devolverá el dinero a tu saldo para que puedas elegir otra cosa.',
      ],
    },
  ],
  ctaHeading: 'Salta al directorio Kakobuy Spreadsheet',
  ctaIntro: 'Sigue descubriendo vía',
  ctaIntroSuffix:
    ' — permanece en modo Browse mientras buscas URLs y autentícate en Kakobuy al pegar compras.',
  ctaFooterNote: 'Plataformas de terceros — validación manual recomendada.',
  sheetLinkLabel: 'el puente Kakobuy Spreadsheet → spreadsheets del agente',
  categoryPills: pillsFor(es),
  footer: {
    disclaimerLabel: 'Aviso',
    disclaimerHtml:
      'kakobuy-cn.com es un hub editorial. Los enlaces a <a href="https://maisonlooks.com/en" target="_blank" rel="noopener noreferrer">catálogo indexado</a> y <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">Kakobuy</a> son servicios independientes; este dominio no procesa pagos ni abandera pedidos. Revisa QC y políticas en origen. No afiliación oficial con Kakobuy.',
    copyrightLine:
      '© 2026 kakobuy-cn.com — notas de comprador; las transacciones viven en Kakobuy.',
  },
  categoryPage: {
    titleTemplate: 'Mejor Kakobuy {uiName} Spreadsheet 2026 — Top Picks y QC',
    descriptionTemplate: 'Explora la mejor Kakobuy {uiName} spreadsheet para 2026. Selección curada de {uiNameLower} premium con enlaces directos y fotos QC verificadas.',
    introTemplate: 'Descubre los mejores {uiNameLower} seleccionados para la comunidad de Kakobuy. Todos los artículos están verificados manualmente con enlaces de compra activos y referencias de QC de almacén.',
    homeHubBackLink: '← Hub Kakobuy Spreadsheet',
    introToggleLabel: 'Sobre esta categoría',
    externalBtnTemplate: '{uiName} en MaisonLooks →',
    noProducts: 'Aún no se han encontrado productos en esta categoría. ¡Vuelve pronto!',
  },
};
