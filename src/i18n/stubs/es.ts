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
  title: 'Mejor Kakobuy Spreadsheet 2026 (Actualizado) — 5.000+ Reps Links y QC',
  description:
    'La mejor Kakobuy Spreadsheet para 2026. Explora nuestro catálogo actualizado de reps para zapatillas, sudaderas y chaquetas con enlaces directos y fotos QC.',
  keywords:
    'directorio Kakobuy, catálogo de réplicas, enlaces Weidian, guía de control de calidad Taobao, agente de compras de China',
  webPageName: 'Mejor Kakobuy Spreadsheet 2026 · kakobuy-cn.com',
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
      h3: '1. ¿Qué es una Kakobuy Spreadsheet?',
      paragraphs: [
        'En la comunidad, una "spreadsheet" es una lista curada de enlaces de mercados (Taobao, Weidian, 1688) con información de lotes y fotos QC. Es un atajo para encontrar los mejores productos rápidamente.',
        'Nuestra plataforma transforma estas listas estáticas en una experiencia interactiva. Usa nuestras categorías para encontrar artículos verificados.',
      ],
    },
    {
      h3: '2. ¿Cómo comprar?',
      paragraphs: [
        'El proceso es sencillo: encuentra un artículo en nuestro catálogo, copia el enlace HTTPS y pégalo en la barra de búsqueda de Kakobuy. Allí podrás elegir talla, color y finalizar tu compra.',
      ],
    },
    {
      h3: '3. Control de Calidad (QC)',
      paragraphs: [
        'Cuando tu artículo llegue al almacén, recibirás fotos profesionales de QC. Revísalas cuidadosamente para verificar la calidad antes de aprobar el envío internacional.',
      ],
    },
    {
      h3: '4. Gastos y Envío',
      paragraphs: [
        'El coste total incluye el envío nacional, las tarifas del agente y el flete internacional. El peso volumétrico es clave para calcular el coste final del envío de tu paquete.',
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
    externalBtnTemplate: 'Ver catálogo completo de {uiName} en MaisonLooks →',
    noProducts: 'Aún no se han encontrado productos en esta categoría. ¡Vuelve pronto!',
  },
};
