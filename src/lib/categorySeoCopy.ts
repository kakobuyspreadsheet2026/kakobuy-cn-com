type CategorySeoLane = {
  title: string;
  description: string;
};

const CATEGORY_SEO_EN: Record<string, CategorySeoLane> = {
  shoes: {
    title: 'Kakobuy 2026 Sneakers & Shoes: Curated Spreadsheet Finds',
    description: 'Explore premium Kakobuy shoes, boots, and sneaker spreadsheet finds for 2026. Get direct marketplace links, size guides, and warehouse QC photos.',
  },
  't-shirts': {
    title: 'Summer Tees & Graphic Tops - Kakobuy 2026 Spreadsheet',
    description: 'Upgrade your rotation with the best Kakobuy t-shirts and graphic tees spreadsheet lines. Audited Weidian & Taobao seller listings with actual QC.',
  },
  pants: {
    title: 'Premium Cargos, Denim & Pants: Kakobuy Spreadsheet Guide',
    description: 'Find cargos, tactical trousers, jeans, and casual pants on our updated Kakobuy spreadsheet. Verified seller ratings and sizing helper inside.',
  },
  accessories: {
    title: 'Essential Kakobuy Accessories & Extra Finds (2026)',
    description: 'Access curated accessory spreadsheet rows: belts, keychains, socks, and everyday accessories with verified links ready for Kakobuy pasting.',
  },
  bags: {
    title: 'Top Crossbody Bags & Slings on Kakobuy Spreadsheet',
    description: 'Shop top-tier designer bags, travel backpacks, and crossbody slings via our curated Kakobuy directory. Real warehouse QC checks included.',
  },
  electronics: {
    title: 'Low-Latency Audio & Tech Gadgets - Kakobuy Spreadsheet',
    description: 'Browse high-definition headphones, Bluetooth speakers, and tech accessories on the Kakobuy spreadsheet. Sizing and pricing specs verified.',
  },
  jackets: {
    title: 'Puffers, Windbreakers & Outerwear on Kakobuy Spreadsheet',
    description: 'Stay warm with the best Kakobuy jackets, shells, and puffer spreadsheets. Optimized for volumetric freight savings before you ship.',
  },
  hoodies: {
    title: 'Heavyweight Hoodies & Fleece - Kakobuy 2026 Directory',
    description: 'Source cozy hoodies, zip-ups, and sweaters on the Kakobuy spreadsheet. Sift through batch nicknames and find the perfect fit safely.',
  },
  headwear: {
    title: 'Caps, Beanies & Headwear - Kakobuy Sourcing List',
    description: 'Secure streetwear caps, beanies, and hats from our active Kakobuy spreadsheet. Real quality check alignment notes provided for each.',
  },
  jersey: {
    title: 'Verified Sports Kits & Court Jerseys - Kakobuy Spreadsheet',
    description: 'Rep your team with court jerseys and football kits on the Kakobuy spreadsheet. Includes print and patch quality verification references.',
  },
  perfume: {
    title: 'Fragrance, Beauty & Scent Columns on Kakobuy',
    description: 'Discover signature fragrances and packaging-verified beauty lines on the Kakobuy spreadsheet. Authentic-looking gift options listed.',
  },
  other: {
    title: 'Miscellaneous Wardrobe & Underwear - Kakobuy Spreadsheet',
    description: "Discover overflow wardrobe finds, underwear, and lifestyle items. Fully compatible with Kakobuy's 2026 purchasing console.",
  },
};

const CATEGORY_SEO_DE: Record<string, CategorySeoLane> = {
  shoes: {
    title: 'Kakobuy 2026 Sneaker & Schuhe: Kuratierte Spreadsheet-Funde',
    description: 'Entdecke erstklassige Kakobuy-Schuhe, Stiefel und Sneaker-Funde für 2026. Hol dir direkte Marktplatz-Links, Größenberater und Lager-QC-Fotos.',
  },
  't-shirts': {
    title: 'Sommer-T-Shirts & Grafik-Tops - Kakobuy 2026 Spreadsheet',
    description: 'Erfrische deine Kollektion mit den besten T-Shirts im Kakobuy Spreadsheet. Überprüfte Weidian- und Taobao-Anbieter mit echten QC-Bildern.',
  },
  pants: {
    title: 'Premium Cargos, Denim & Hosen: Kakobuy Spreadsheet-Leitfaden',
    description: 'Finde Cargos, taktische Hosen und Jeans im aktualisierten Kakobuy-Spreadsheet. Verifizierte Bewertungen und Größenberater inklusive.',
  },
  accessories: {
    title: 'Wichtige Kakobuy-Accessoires & Extras im Katalog (2026)',
    description: 'Greife auf kuratierte Zubehör-Tabellen zu: Gürtel, Schlüsselanhänger, Socken und nützliche Alltags-Funde mit verifizierten Kauflinks.',
  },
  bags: {
    title: 'Beste Umhängetaschen & Rucksäcke im Kakobuy Spreadsheet',
    description: 'Shoppe erstklassige Designer-Taschen, Reiserucksäcke und Umhängetaschen über unser Verzeichnis. Inklusive echter Qualitätskontrollen.',
  },
  electronics: {
    title: 'Audio & Tech-Gadgets im indexierten Kakobuy Spreadsheet',
    description: 'Durchsuche Kopfhörer, Bluetooth-Lautsprecher und Tech-Zubehör im Kakobuy-Spreadsheet. Spezifikationen und Preisklassen geprüft.',
  },
  jackets: {
    title: 'Daunenjacken, Shells & Winterkleidung - Kakobuy Spreadsheet',
    description: 'Finde die besten Jacken, Parkas und Mäntel im Kakobuy-Spreadsheet. Optimiert für Volumengewicht-Ersparnisse beim Auslandsversand.',
  },
  hoodies: {
    title: 'Schwere Hoodies & Fleece-Sweatshirts - Kakobuy-Katalog',
    description: 'Finde kuschelige Kapuzenpullover, Zip-ups und Strickwaren im Kakobuy-Spreadsheet. Umgehe schlechte Batches mit Community-Vetting.',
  },
  headwear: {
    title: 'Mützen, Beanies & Caps - Aktive Kakobuy Sourcing-Liste',
    description: 'Sichere dir Streetwear-Caps, Beanies und Hüte aus unserem aktiven Spreadsheet. Echte QC-Hinweise zur Logo-Ausrichtung vorhanden.',
  },
  jersey: {
    title: 'Verifizierte Trikots & Sportbekleidung im Kakobuy Spreadsheet',
    description: 'Unterstütze dein Team mit Sporttrikots im Kakobuy-Spreadsheet. Mit Qualitätsprüfungen für Sponsoren-Prints und Stickereien.',
  },
  perfume: {
    title: 'Düfte, Parfüms & Beauty-Spalten auf Kakobuy',
    description: 'Entdecke Düfte und verifizierte Kosmetiklinien im Kakobuy-Spreadsheet. Schöne Geschenkideen mit Originalverpackung gelistet.',
  },
  other: {
    title: 'Unterwäsche & Verschiedene Wardrobe-Funde im Kakobuy Spreadsheet',
    description: 'Entdecke Lifestyle-Artikel, Unterwäsche und Sets im Kakobuy-Spreadsheet. Vollständig kompatibel mit der Kakobuy-Konsole.',
  },
};

const CATEGORY_SEO_ES: Record<string, CategorySeoLane> = {
  shoes: {
    title: 'Zapatillas y Tenis Kakobuy 2026: Directorio de Spreadsheet',
    description: 'Encuentra las mejores zapatillas, botas y tenis en la hoja de Kakobuy con fotos de control de calidad. Enlaces de compra directos para tu pedido.',
  },
  't-shirts': {
    title: 'Camisetas de Verano y Tops Gráficos - Kakobuy Spreadsheet',
    description: 'Luce los mejores diseños con camisetas y prendas básicas verificadas desde Weidian y Taobao. Control de calidad y fotos de almacén reales.',
  },
  pants: {
    title: 'Pantalones Deportivos, Vaqueros y Cargos en Kakobuy',
    description: 'Descubre los pantalones más buscados en nuestra hoja de Kakobuy. Reseñas verificadas, medidas exactas y fotos reales de almacén.',
  },
  accessories: {
    title: 'Accesorios Esenciales de Kakobuy y Detalles (2026)',
    description: 'Cinturones, joyería, calcetines y más accesorios indispensables en el catálogo de Kakobuy. Copia y pega de forma 100% segura.',
  },
  bags: {
    title: 'Bolsos de Diseñador, Mochilas y Slings en Kakobuy',
    description: 'Compra los mejores bolsos y mochilas de viaje a través de nuestro directorio de Kakobuy. Fotos del control de calidad incluidas en cada fila.',
  },
  electronics: {
    title: 'Auriculares, Altavoces y Gadgets en Kakobuy Spreadsheet',
    description: 'Equípate con audio de alta fidelidad y accesorios tecnológicos en el spreadsheet de Kakobuy. Compara precios y detalles técnicos.',
  },
  jackets: {
    title: 'Abrigos, Plumíferos y Chaquetas en Kakobuy Spreadsheet',
    description: 'Protégete del frío con chaquetas, cortavientos y plumíferos en el catálogo de Kakobuy. Consejos para ahorrar volumen de envío.',
  },
  hoodies: {
    title: 'Sudaderas Pesadas con Capucha y Cremallera - Kakobuy',
    description: 'Las sudaderas más cómodas y buscadas en la hoja de Kakobuy. Evita lotes de baja calidad gracias a las recomendaciones de la comunidad.',
  },
  headwear: {
    title: 'Gorras, Gorros y Headwear en Kakobuy Spreadsheet',
    description: 'Consigue las gorras y gorros de streetwear más populares en nuestro spreadsheet activo. Notas sobre la alineación del logotipo.',
  },
  jersey: {
    title: 'Camisetas de Fútbol y Equipaciones en Kakobuy',
    description: 'Apoya a tu equipo con equipaciones deportivas y camisetas en el spreadsheet de Kakobuy. Verificación de bordados y estampados.',
  },
  perfume: {
    title: 'Perfumes de Autor y Cosmética en la Hoja de Kakobuy',
    description: 'Fragancias icónicas y cosméticos de alta gama verificados en el catálogo de Kakobuy. Opciones ideales para regalar con caja original.',
  },
  other: {
    title: 'Ropa Interior y Básicos en el Spreadsheet de Kakobuy',
    description: 'Encuentra básicos de armario, ropa interior y packs en el spreadsheet de Kakobuy. Totalmente compatibles con el agente de compras.',
  },
};

const CATEGORY_SEO_FR: Record<string, CategorySeoLane> = {
  shoes: {
    title: 'Kakobuy Basket & Chaussures 2026 : Le Guide Spreadsheet',
    description: 'Découvrez des chaussures, bottes et sneakers premium sur le guide Kakobuy de 2026. Liens directs Weidian/Taobao et photos QC de l’entrepôt.',
  },
  't-shirts': {
    title: 'T-Shirts d’Été et Hauts Graphiques - Kakobuy Spreadsheet',
    description: 'Affichez les meilleurs t-shirts graphiques et basiques sur la feuille Kakobuy. Vendeurs Weidian/Taobao audités avec photos QC réelles.',
  },
  pants: {
    title: 'Pantalons Cargo, Jeans et Joggings sur Kakobuy',
    description: 'Trouvez des pantalons cargo, jeans et joggings confortables sur notre feuille Kakobuy. Évaluations de vendeurs et guides de tailles inclus.',
  },
  accessories: {
    title: 'Accessoires Indispensables Kakobuy et Extras (2026)',
    description: 'Ceintures, bijoux, chaussettes et petits gadgets de notre catalogue Kakobuy. Liens testés et sécurisés prêts pour le copier-coller.',
  },
  bags: {
    title: 'Sacs de Créateurs, Sacs à Dos et Slings sur Kakobuy',
    description: 'Achetez les meilleurs sacs et bagages de voyage via notre annuaire Kakobuy. Photos de contrôle qualité de l’entrepôt incluses.',
  },
  electronics: {
    title: 'Écouteurs, Enceintes et Gadgets sur Kakobuy Spreadsheet',
    description: 'Écouteurs de haute qualité et accessoires tech sur le spreadsheet de Kakobuy. Caractéristiques et gammes de prix vérifiées.',
  },
  jackets: {
    title: 'Doudounes, Coupes-Vent et Vestes sur Kakobuy Spreadsheet',
    description: 'Restez au chaud avec les meilleures doudounes et vestes de notre catalogue Kakobuy. Astuces d’emballage pour économiser sur le fret.',
  },
  hoodies: {
    title: 'Sweats à Capuche Épais et Zippés sur Kakobuy',
    description: 'Les sweats à capuche et pulls les plus chauds sur la feuille Kakobuy. Évitez les mauvais lots grâce aux avis de la communauté.',
  },
  headwear: {
    title: 'Casquettes, Bonnets et Headwear sur Kakobuy Spreadsheet',
    description: 'Trouvez les casquettes et bonnets streetwear les plus populaires dans notre répertoire. Notes de conformité pour l’alignement des logos.',
  },
  jersey: {
    title: 'Maillots de Foot et Tenues de Sport sur Kakobuy',
    description: 'Soutenez votre équipe avec des maillots et shorts de sport sur le spreadsheet de Kakobuy. Vérification des broderies et patchs.',
  },
  perfume: {
    title: 'Parfums de Marque et Cosmétiques sur Kakobuy',
    description: 'Fragrances emblématiques et soins haut de gamme dans le catalogue Kakobuy. Idées cadeaux parfaites avec boîte d’origine incluse.',
  },
  other: {
    title: 'Sous-Vêtements et Basiques sur le Spreadsheet Kakobuy',
    description: 'Trouvez des sous-vêtements, chaussettes et ensembles basiques sur le spreadsheet de Kakobuy. Entièrement compatible avec l’agent.',
  },
};

const CATEGORY_SEO_IT: Record<string, CategorySeoLane> = {
  shoes: {
    title: 'Kakobuy Sneaker e Scarpe 2026: Il Guide Spreadsheet',
    description: 'Trova sneaker di alta qualità, stivali e scarpe sportive sul catalogo Kakobuy 2026. Link di acquisto e foto QC reali del magazzino.',
  },
  't-shirts': {
    title: 'T-Shirt Estive e Magliette Grafiche - Kakobuy Spreadsheet',
    description: 'Aggiorna la tua collezione con le t-shirt grafiche e i basici sulla foglia Kakobuy. Venditori Weidian/Taobao testati con immagini QC.',
  },
  pants: {
    title: 'Pantaloni Cargo, Jeans e Joggers su Kakobuy',
    description: 'Scopri i pantaloni cargo, jeans e pantaloni casual sul nostro spreadsheet Kakobuy. Guide alle taglie e valutazioni dei venditori incluse.',
  },
  accessories: {
    title: 'Accessori Essenziali Kakobuy e Dettagli (2026)',
    description: 'Cinture, gioielli, calzini e accessori utili nel catalogo Kakobuy. Link testati e pronti per il copia-incolla sul tuo agente.',
  },
  bags: {
    title: 'Borse di Designer, Zaini e Slings su Kakobuy',
    description: 'Acquista zaini da viaggio e borse a tracolla attraverso la nostra directory Kakobuy. Foto del controllo qualità incluse per ogni riga.',
  },
  electronics: {
    title: 'Cuffie, Altoparlanti e Gadgets su Kakobuy Spreadsheet',
    description: 'Sfoglia cuffie wireless e accessori tecnologici sul foglio di calcolo Kakobuy. Prezzi e specifiche tecniche interamente verificati.',
  },
  jackets: {
    title: 'Piumini, Giacche e Cappotti su Kakobuy Spreadsheet',
    description: 'Rimani al caldo con i migliori piumini e giacche del catalogo Kakobuy. Consigli utili per risparmiare sul peso volumetrico.',
  },
  hoodies: {
    title: 'Felpe Pesanti con Cappuccio e Zip su Kakobuy',
    description: 'Le felpe con cappuccio e i maglioni più caldi sul foglio di calcolo Kakobuy. Evita lotti scadenti grazie al controllo dei badge.',
  },
  headwear: {
    title: 'Cappelli, Berretti e Headwear su Kakobuy Spreadsheet',
    description: 'Trova i cappellini e i berretti streetwear più popolari nel nostro catalogo attivo. Note di conformità per l’allineamento dei loghi.',
  },
  jersey: {
    title: 'Maglie da Calcio e Divise Sportive su Kakobuy',
    description: 'Sostieni la tua squadra con maglie e divise da gioco sul foglio di calcolo Kakobuy. Verifica dei ricami e delle patch cucite.',
  },
  perfume: {
    title: 'Profumi e Cosmetici sulla Foglia di Kakobuy',
    description: 'Fragranze iconiche e cosmetici di alta gamma verificati nel catalogo Kakobuy. Opzioni regalo perfette con confezione originale.',
  },
  other: {
    title: 'Intimo e Basici sul Foglio di Calcolo di Kakobuy',
    description: 'Trova biancheria intima, calzini e set basici sul foglio di calcolo di Kakobuy. Completamente compatibili con l’agente di acquisto.',
  },
};

const CATEGORY_SEO_PL: Record<string, CategorySeoLane> = {
  shoes: {
    title: 'Buty i Sneakersy Kakobuy 2026: Katalog i Spreadsheet',
    description: 'Przeglądaj sneakersy, buty i obuwie sportowe w katalogu Kakobuy na 2026 rok. Bezpośrednie linki i rzeczywiste zdjęcia QC z magazynu.',
  },
  't-shirts': {
    title: 'Koszulki i T-shirty Graficzne - Kakobuy Spreadsheet',
    description: 'Zaktualizuj swoją garderobę dzięki najlepszym koszulkom w spreadsheet Kakobuy. Sprawdzeni sprzedawcy z Weidian i Taobao ze zdjęciami QC.',
  },
  pants: {
    title: 'Spodnie Cargo, Jeansy i Dresy w Spreadsheet Kakobuy',
    description: 'Znajdź dresy, bojówki i jeansy w naszym arkuszu Kakobuy. Zweryfikowane oceny sprzedawców i porady dotyczące tabeli rozmiarów.',
  },
  accessories: {
    title: 'Akcesoria Kakobuy i Dodatki w Katalogu (2026)',
    description: 'Paski, biżuteria i inne niezbędne akcesoria w katalogu Kakobuy. Bezpieczne i przetestowane linki gotowe do wklejenia na stronie agenta.',
  },
  bags: {
    title: 'Torby Projektantów, Plecaki i Slings w Kakobuy',
    description: 'Kupuj plecaki podróżne i torby na ramię przez nasz katalog Kakobuy. Zdjęcia kontroli jakości (QC) dołączone do każdego rzędu.',
  },
  electronics: {
    title: 'Słuchawki, Głośniki i Gadżety w Kakobuy Spreadsheet',
    description: 'Przeglądaj słuchawki bezprzewodowe i akcesoria technologiczne w arkuszu Kakobuy. Ceny i specyfikacje techniczne zweryfikowane.',
  },
  jackets: {
    title: 'Kurtki Zimowe, Puchówki i Wiatrówki w Kakobuy',
    description: 'Chroń się przed zimnem dzięki najlepszym kurtkom puchowym w arkuszu Kakobuy. Wskazówki jak zaoszczędzić na wadze gabarytowej.',
  },
  hoodies: {
    title: 'Ciepłe Bluzy z Kapturem i Rozpinane - Kakobuy',
    description: 'Najpopularniejsze bluzy i swetry w naszym arkuszu Kakobuy. Unikaj wadliwych partii dzięki ocenom i recenzjom społeczności.',
  },
  headwear: {
    title: 'Czapki z Daszkiem, Zimowe i Headwear w Kakobuy',
    description: 'Zdobądź czapki zimowe i czapki z daszkiem w naszym aktywnym spreadsheet. Uwagi dotyczące symetrii i haftu logo na zdjęciach QC.',
  },
  jersey: {
    title: 'Koszulki Piłkarskie i Stroje Sportowe w Kakobuy',
    description: 'Wspieraj swoją drużynę dzięki strojom sportowym i koszulkom w arkuszu Kakobuy. Weryfikacja haftów, nadruków i naszywek.',
  },
  perfume: {
    title: 'Markowe Perfumy i Kosmetyki w Arkuszu Kakobuy',
    description: 'Ikoniczne zapachy i kosmetyki premium w katalogu Kakobuy. Idealne propozycje na prezent z oryginalnym pudełkiem w zestawie.',
  },
  other: {
    title: 'Bielizna i Odzież Basowa w Spreadsheet Kakobuy',
    description: 'Znajdź komplety bielizny, skarpetki i podstawowe ubrania w arkuszu Kakobuy. Pełna kompatybilność z polskim panelem agenta.',
  },
};

const CATEGORY_SEO_PT: Record<string, CategorySeoLane> = {
  shoes: {
    title: 'Tênis e Calçados Kakobuy 2026: Catálogo e Spreadsheet',
    description: 'Explore tênis, botas e sapatos premium no catálogo da Kakobuy para 2026. Links diretos para Weidian/Taobao e fotos QC do armazém.',
  },
  't-shirts': {
    title: 'Camisetas de Verão e Estampadas - Kakobuy Spreadsheet',
    description: 'Adicione camisetas gráficas e básicas ao seu carrinho com nossa planilha Kakobuy. Vendedores Weidian/Taobao testados com fotos QC.',
  },
  pants: {
    title: 'Calças Cargo, Jeans e Joguers na Planilha Kakobuy',
    description: 'Encontre calças jeans, cargos e joggers confortáveis no spreadsheet da Kakobuy. Tabela de tamanhos e avaliações de vendedores.',
  },
  accessories: {
    title: 'Acessórios Essenciais Kakobuy e Detalhes (2026)',
    description: 'Cintos, joias, meias e mais acessórios indispensáveis no catálogo da Kakobuy. Links seguros prontos para colar na página do agente.',
  },
  bags: {
    title: 'Bolsas de Grife, Mochilas e Slings na Kakobuy',
    description: 'Compre bolsas transversais e mochilas de viagem através do nosso diretório da Kakobuy. Fotos do controle de qualidade inclusas.',
  },
  electronics: {
    title: 'Fones, Caixas de Som e Eletrônicos na Kakobuy',
    description: 'Navegue por fones wireless e acessórios de tecnologia no spreadsheet da Kakobuy. Preços e especificações técnicas verificados.',
  },
  jackets: {
    title: 'Jaquetas, Corta-Ventos e Casacos na Kakobuy',
    description: 'Proteja-se do frio com corta-ventos e jaquetas bobojaco na planilha da Kakobuy. Dicas de embalagem para economizar no frete.',
  },
  hoodies: {
    title: 'Moletons Pesados e Agasalhos com Capuz - Kakobuy',
    description: 'Os moletons mais quentes e confortáveis na planilha da Kakobuy. Evite lotes ruins usando as recomendações da comunidade.',
  },
  headwear: {
    title: 'Bonés, Gorros e Headwear no Spreadsheet Kakobuy',
    description: 'Consiga bonés e gorros de streetwear em nosso diretório ativo da Kakobuy. Notas sobre o alinhamento de logotipos no armazém.',
  },
  jersey: {
    title: 'Camisas de Time e Mantos Esportivos na Kakobuy',
    description: 'Apoie o seu time com mantos de futebol e uniformes no spreadsheet da Kakobuy. Verificação de bordados e patches costurados.',
  },
  perfume: {
    title: 'Perfumes Importados e Beleza no Spreadsheet Kakobuy',
    description: 'Fragrâncias icônicas e cosméticos de luxo no catálogo da Kakobuy. Excelentes opções de presente com embalagem original inclusa.',
  },
  other: {
    title: 'Roupa Íntima e Básicos de Planilha na Kakobuy',
    description: 'Encontre cuecas, meias e conjuntos básicos no spreadsheet da Kakobuy. Compatibilidade garantida com o agente de compras.',
  },
};

const LOCALE_MAP: Record<string, Record<string, CategorySeoLane>> = {
  de: CATEGORY_SEO_DE,
  es: CATEGORY_SEO_ES,
  fr: CATEGORY_SEO_FR,
  it: CATEGORY_SEO_IT,
  pl: CATEGORY_SEO_PL,
  pt: CATEGORY_SEO_PT,
};

export function getCategorySeoCopy(uiSlug: string, uiName: string, locale: string = 'en'): { title: string; description: string } {
  const map = LOCALE_MAP[locale] ?? CATEGORY_SEO_EN;
  const lane = map[uiSlug] ?? CATEGORY_SEO_EN[uiSlug];

  if (lane) return lane;

  const uiNameLower = uiName.toLowerCase();
  if (locale === 'de') {
    return {
      title: `Beste Kakobuy ${uiName} Spreadsheet 2026 — Top Picks & QC`,
      description: `Durchstöbere das ultimative Kakobuy ${uiName} Spreadsheet für 2026. Kuratierte Auswahl an Premium-${uiNameLower} mit direkten Agent-Links.`,
    };
  } else if (locale === 'es') {
    return {
      title: `Mejor Kakobuy ${uiName} Spreadsheet 2026 — Top Picks y QC`,
      description: `Explora la mejor Kakobuy ${uiName} Spreadsheet para 2026. Selección curada de ${uiNameLower} premium con enlaces de agente directos.`,
    };
  } else if (locale === 'fr') {
    return {
      title: `Meilleur Kakobuy ${uiName} Spreadsheet 2026 — Top Picks & QC`,
      description: `Le Kakobuy ${uiName} Spreadsheet ultime pour 2026. Parcourez notre catalogue premium pour ${uiNameLower} avec liens directs.`,
    };
  } else if (locale === 'it') {
    return {
      title: `Migliore Kakobuy ${uiName} Spreadsheet 2026 — Top Picks & QC`,
      description: `Il Kakobuy ${uiName} Spreadsheet definitivo per il 2026. Sfoglia la selezione premium di ${uiNameLower} con link diretti.`,
    };
  } else if (locale === 'pl') {
    return {
      title: `Najlepszy Kakobuy ${uiName} Spreadsheet 2026 — Top Picks & QC`,
      description: `Najlepszy Kakobuy ${uiName} Spreadsheet na 2026 rok. Zaktualizowana lista ${uiNameLower} premium z bezpośrednimi linkami.`,
    };
  } else if (locale === 'pt') {
    return {
      title: `Melhor Kakobuy ${uiName} Spreadsheet 2026 — Top Picks & QC`,
      description: `A melhor Kakobuy ${uiName} Spreadsheet para 2026. Seleção premium de ${uiNameLower} com links diretos de agente.`,
    };
  }

  return {
    title: `Best Kakobuy ${uiName} Spreadsheet 2026 — Sourcing Guide`,
    description: `Shop verified ${uiNameLower} on Kakobuy. Browse on-site rows with direct buying links, sizing specs, and actual warehouse QC pictures.`,
  };
}
