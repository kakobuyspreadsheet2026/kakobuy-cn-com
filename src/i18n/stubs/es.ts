import type { HomeStubContent } from '../types';
import { pillsFor } from './categoryPaths';

const es = {
  shoes: {
    label: 'Zapatillas',
    alt: 'kakobuy spreadsheet — calzado Weidian/Taobao con QC si el anuncio lo muestra',
  },
  't-shirts': {
    label: 'Camisetas',
    alt: 'kakobuy spreadsheet — oversize, lavados ácido y street basics',
  },
  pants: {
    label: 'Pantalones',
    alt: 'kakobuy spreadsheet — denim, joggers y shorts verificables',
  },
  accessories: {
    label: 'Accesorios',
    alt: 'kakobuy spreadsheet — cinturones, joyería ligera y detalles',
  },
  bags: {
    label: 'Bolsos',
    alt: 'kakobuy spreadsheet — crossbody, mochilas y tote listos para pegar en Kakobuy',
  },
  electronics: {
    label: 'Electrónica',
    alt: 'kakobuy spreadsheet — gadgets y audio con contexto de precio',
  },
  jackets: {
    label: 'Chaquetas',
    alt: 'kakobuy spreadsheet — outerwear estacional y capas técnicas',
  },
  hoodies: {
    label: 'Sudaderas',
    alt: 'kakobuy spreadsheet — hoodies zip, crew y punto',
  },
  headwear: {
    label: 'Gorros',
    alt: 'kakobuy spreadsheet — gorras, buckets y beanies',
  },
  jersey: {
    label: 'Jerseys',
    alt: 'kakobuy spreadsheet — mesh y camisetas deportivas sin manga',
  },
  perfume: {
    label: 'Beauty',
    alt: 'kakobuy spreadsheet — fragancias y beauty del catálogo',
  },
  other: {
    label: 'Mix',
    alt: 'kakobuy spreadsheet — categorías cruzadas y hallazgos raros',
  },
} as const;

export const esHome: HomeStubContent = {
  title:
    'Kakobuy Spreadsheet 2026 — raíles del catálogo indexado, lectura de QC y URLs para pegar | kakobuy-cn.com',
  description:
    'Puente editorial 2026 entre el browse del catálogo y Kakobuy: vocabulario de spreadsheet, alertas de fotografía en almacén y recordatorios de flete — descubre en kakobuy-cn.com, paga siempre en kakobuy.com.',
  keywords:
    'Kakobuy Spreadsheet 2026, catálogo indexado, Weidian paste link, Taobao agente QC, 1688 spreadsheet, FashionReps haul hub',
  webPageName: 'Hub editorial Kakobuy Spreadsheet (kakobuy-cn.com)',
  webPageKeywords: [
    'Kakobuy Spreadsheet',
    'browse spreadsheet',
    'Weidian',
    'QC warehouse',
    'agente China',
  ],
  hero: {
    h1: 'Kakobuy Spreadsheet 2026',
    tagline: 'El catálogo habla streetwear; Kakobuy cobra la factura',
    kicker: '2026 · Weidian · Taobao · 1688 · fotos reales',
    body:
      'Accesos rápidos a las mismas rutas del catálogo indexado que comparte la escena spreadsheet, con contexto en español sobre qué validar antes de aprobar un pedido. Esta web no sustituye el checkout de Kakobuy: solo ordena vocabulario, advertencias y atajos.',
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
  exploreKickerLead: 'Entra por categoría y termina tus compras dentro de ',
  exploreKickerTrail: '',
  exploreIntro:
    'Cada chip abre navegación indexada Kakobuy Spreadsheet (mezclas Taobao / Weidian / 1688 según el carril). Captura URLs reales de SKU allí y continúa en tu cuenta Kakobuy para pagos e imágenes de almacén.',
  exploreSub:
    'Los iconos abren pestaña nueva a propósito para mantener esta referencia junto a tu sesión Kakobuy.',
  introH2:
    'Por qué a los compradores Kakobuy Spreadsheet les siguen importando las URLs en 2026',
  introP:
    'Enlaces de marketplace estables, precios leídos con escepticismo y fotografía de almacén ganan a capturas hypeadas — incluso cuando vienen de una fila Kakobuy Spreadsheet. La guía siguiente recorre todo el arco Kakobuy Spreadsheet sin fingir que este dominio ejecuta checkout.',
  guideH2: 'Kakobuy Spreadsheet descifrado — manual del agente (edición 2026)',
  guideIntro:
    'Aquí tienes una referencia Kakobuy Spreadsheet reconstruida que sigue cómo evolucionó el jargon: qué llaman fila Kakobuy Spreadsheet, por qué kakobuy-cn.com sigue siendo solo compañero editorial Kakobuy Spreadsheet, cómo sobreviven los URLs al churn del marketplace, cuándo importa el QC y cómo estrujar el gasto landed antes de pulsar “enviar”. Políticas, facturas y disputas siguen dentro de Kakobuy: la capa Kakobuy Spreadsheet nunca sustituye checkout.',
  sections: [
    {
      h3: '1. Qué quieren decir los aficionados con “Kakobuy Spreadsheet”',
      paragraphs: [
        'En la mayoría de hilos usan “Kakobuy Spreadsheet” (o solo “spreadsheet”) para cualquier rejilla curada — Google Sheets, exportaciones Airtable o skins de catálogo — que alinea URLs de marketplaces chinos junto a cotilleos de batch, chuletas de tallas, pistas yuan/US y algún still QC del vendedor. Piensa cada fila Kakobuy Spreadsheet como waypoint guardado, no promesa mágica de inventario.',
        'Tomamos ese vocabulario a propósito: las pills Kakobuy Spreadsheet te dejan en raíles browse indexadas Kakobuy Spreadsheet para cosechar SKUs como veteranos de Discord. Llámalo spreadsheet Weidian o Taobao dentro de un libro Kakobuy Spreadsheet: la mecánica no cambia — pegas el listing resuelto en Kakobuy, financias la pata doméstica, esperas fotos inbound y solo después apruebas el courier internacional.',
      ],
    },
    {
      h3:
        '2. Listas comunitarias Kakobuy Spreadsheet vs. voz corporativa Kakobuy · papel de kakobuy-cn.com',
      paragraphs: [
        'Pocos espejos Kakobuy Spreadsheet llevan sello corporativo; la mayoría son digests mantenidos por voluntarios sobre el mismo folklore Kakobuy Spreadsheet que ves en hauls. Decomisos, reembolsos, SKUs vetados o disputas siempre pasan por Kakobuy y tu aduana local. Para texto nivel contrato lee la FAQ viva de Kakobuy y políticas del seller — no recaps de Discord de una pestaña Kakobuy Spreadsheet.',
        'kakobuy-cn.com queda a distancia de cada flujo checkout Kakobuy Spreadsheet: sin carritos, carteras ni mesa de fulfillment. Todo lo que suene a “ticket de soporte” sigue en dashboards Kakobuy o sellers externos. Si el checkout contradice un ensayo aquí, gana el checkout — este hub Kakobuy Spreadsheet solo explica contexto.',
      ],
    },
    {
      h3:
        '3. Ritmo operativo Kakobuy Spreadsheet — pestaña catálogo → snapshots Kakobuy',
      paragraphs: [
        'Empieza en la superficie browse Kakobuy Spreadsheet enlazada desde este hub, entra en página SKU y copia el HTTPS completo de la barra — la misma entrega que todo tutorial Kakobuy Spreadsheet da por hecha. Evita wrappers que borran IDs de variante, frames CDN desnudos o raíces de tienda que ocultan opciones — crean pedidos fantasmas abajo.',
        'Dentro de Kakobuy usa el asistente de pegar enlace de tu UI. Bloquea color/talla/batch antes de aceptar cargos y lee fees embebidas. Primero inbound doméstico; solo tras recepción merece la pena obsesionarte con píxeles QC antes del tramo courier caro — la volumetría suele tragarse cualquier cifra optimista que vivía en la celda Kakobuy Spreadsheet.',
      ],
    },
    {
      h3:
        '4. Por qué los agentes enrutados ganan a DMs sueltas con sellers (sigue siendo el final Kakobuy Spreadsheet)',
      paragraphs: [
        'Los agentes consolidan saltos domésticos, empaquetan fotografía QC y exponen ticketing para que los fallos aparezcan antes de exportar — por eso los flujos Kakobuy Spreadsheet casi siempre terminan en la caja de pegado del agente y no en DM del seller. No borra la ruleta aduanera — solo cambia transferencias caóticas peer-to-peer por paneles auditables que puedes capturar junto a tus notas Kakobuy Spreadsheet.',
      ],
    },
    {
      h3:
        '5. Custodia de enlaces cuando los drops cambian cada hora · mantén honestas las filas Kakobuy Spreadsheet',
      paragraphs: [
        'Los marketplaces mutan URLs por SEO, bans o reconstrucciones de tienda; Kakobuy no puede congelar permalinks ajenos. Las pestañas Kakobuy Spreadsheet que no se refrescan acumulan fantasmas. Buenas curatorías Kakobuy Spreadsheet marcan fecha del clic, avisan filas muertas y etiquetan “needs verification”.',
        'Prefiere URLs cuyo selector de variantes refleje el chatter Discord o los comentarios Kakobuy Spreadsheet que usaste. Archiva la fecha junto a screenshots hype para saber si una referencia QC es anterior al último rewrite — las splash driftan más rápido que los anclas SKU copiadas de un Kakobuy Spreadsheet.',
      ],
    },
    {
      h3: '6. Imagen de almacén vs. galerías de marketing Kakobuy Spreadsheet',
      paragraphs: [
        'Una vez libera inbound, Kakobuy fotografía lo físico que llegó. Esos frames son el QC que debaten los aficionados — luz dura, ángulos sinceros, pliegues imperfectos. Las galerías del listing son aspiracionales; los sets de almacén muestran costuras torcidas, logos descentrados o cambios de tinte antes de etiquetas internacionales — no confundas un thumbnail Kakobuy Spreadsheet brillante con la verdad del almacén.',
        'Si la imagen diverge materialmente del cuento del seller o del pie Kakobuy Spreadsheet, pausa y abre dispute/ticket Kakobuy antes de aprobar freight outbound. Tras pasar a DHL/FedEx/EMS arreglar sale caro — ninguna nota al pie Kakobuy Spreadsheet remienda costuras en tránsito.',
      ],
    },
    {
      h3: '7. Precio en fila Kakobuy Spreadsheet vs. matemática landed real',
      paragraphs: [
        'Salvo que la fila Kakobuy Spreadsheet enumere cada recargo, trata el precio visible como pista del ítem — no como cotización landed para tu código postal. Landed apila forwarding doméstico, servicios del agente, mediciones opcionales, billing volumétrico, cláusulas de combustible, toggles de seguro, spreads FX y lo que tu clase courier exija en ese momento.',
        'Calzado voluminoso, plumíferos y bundles tech castigan peso DIM — lleva diario propio de envíos junto al Kakobuy Spreadsheet; tus medias históricas superan el redondeo de grupo.',
      ],
    },
    {
      h3: '8. Evaluar curadores Kakobuy Spreadsheet, batches y palique',
      paragraphs: [
        'Incluso editores Kakobuy Spreadsheet brillantes van detrás del marketplace: batches mueren, materiales pivotan, veredictos “GL” caducan. Cruza listings vivos, evidencia Reddit fresca y políticas de devolución antes de confiar en la nostalgia de una fila Kakobuy Spreadsheet.',
        'Usa este hub Kakobuy Spreadsheet como brújula, no autopiloto. Siluetas sospechosamente baratas suelen implicar batches rotados, listings cebo o tablas de tallas mal leídas — pega con cautela, QC agresivo y respeta timers de disputa Kakobuy incluso cuando el Kakobuy Spreadsheet dice lo contrario.',
      ],
    },
    {
      h3: '9. Trampas repetidas del Kakobuy Spreadsheet',
      paragraphs: [
        'Confiar en tallas letra sin tabla mm/cm; saltar pesos de prenda antes de volumetría; leer clones “inspired” como gemelos 1:1 porque una celda Kakobuy Spreadsheet lo dijo; aprobar QC en miniatura ilegible; citar una sola columna Kakobuy Spreadsheet como precio landed con impuestos para tu código postal.',
      ],
    },
    {
      h3:
        '10. Mantener bibliotecas comunitarias Kakobuy Spreadsheet honestas temporada tras temporada',
      paragraphs: [
        'Segmenta pestañas por vertical, congela cabeceras, anota IDs de batch y agenda auditorías URL — sobre todo tras mega-refreshes “rewrite 2026”. Documentos Kakobuy Spreadsheet vivos ganan a dumps de screenshot: elimina hyperlinks muertos, colorea SKUs sospechosos y narra reemplazos para que el siguiente lector Kakobuy Spreadsheet herede claridad en vez de caos.',
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
};
