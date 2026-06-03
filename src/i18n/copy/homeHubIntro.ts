import type { RouteLocale } from '../config';

export type HomeHubIntroCopy = {
  title: string;
  paragraphs: readonly string[];
};

const en: HomeHubIntroCopy = {
  title: 'New to Kakobuy? Here is how we help you shop.',
  paragraphs: [
    'Shopping directly on Taobao or Weidian can be a headache if you don’t speak the language or know which sellers to trust. That’s why we built this Kakobuy spreadsheet directory. We spend our time digging through thousands of marketplace listings to find the highest-quality items, so you can spend your time building the perfect haul.',
    'Think of the featured grid higher on this page as our “daily picks.” Because sellers in China move fast—renaming shops or updating batches overnight—we keep this list alive and updated. If a link doesn’t work, don’t worry; just jump into our Category lanes or check the Full Directory to find a fresh alternative.',
    'Our goal is simple: We provide the links and the “insider tips” on sizing and quality, while Kakobuy handles the heavy lifting—the purchasing, the warehouse inspections (QC), and the international shipping. If you’re ready to start, grab a link, paste it into Kakobuy, and let’s get your haul moving.',
  ],
};

const byLocale: Record<RouteLocale, HomeHubIntroCopy> = {
  en,
  de: {
    title: 'Neu bei Kakobuy? So helfen wir dir beim Shoppen.',
    paragraphs: [
      'Direkt bei Taobao oder Weidian einzukaufen kann Kopfschmerzen bereiten, wenn man die Sprache nicht spricht oder nicht weiß, welchen Verkäufern man vertrauen kann. Deshalb haben wir dieses Kakobuy Spreadsheet Verzeichnis erstellt. Wir durchforsten tausende von Marktplatz-Angeboten, um die hochwertigsten Artikel zu finden, damit du dich ganz auf dein perfektes Haul konzentrieren kannst.',
      'Betrachte das Featured-Grid weiter oben auf dieser Seite als unsere „tägliche Auswahl“. Da sich Verkäufer in China schnell bewegen – Shops umbenennen oder Batches über Nacht aktualisieren – halten wir diese Liste aktuell. Wenn ein Link nicht funktioniert, keine Sorge; schau einfach in unsere Kategorien oder in das vollständige Verzeichnis für eine frische Alternative.',
      'Unser Ziel ist einfach: Wir liefern die Links und die „Insider-Tipps“ zu Größe und Qualität, während Kakobuy die schwere Arbeit übernimmt – den Einkauf, die Lagerprüfung (QC) und den internationalen Versand. Wenn du bereit bist, schnapp dir einen Link, füge ihn bei Kakobuy ein und bring dein Haul auf den Weg.',
    ],
  },
  es: {
    title: '¿Nuevo en Kakobuy? Así es como te ayudamos a comprar.',
    paragraphs: [
      'Comprar directamente en Taobao o Weidian puede ser un dolor de cabeza si no hablas el idioma o no sabes en qué vendedores confiar. Por eso creamos este directorio de Kakobuy Spreadsheet. Pasamos nuestro tiempo buscando entre miles de listados para encontrar los artículos de mejor calidad, para que tú puedas dedicar el tuyo a armar el paquete perfecto.',
      'Piensa en la cuadrícula destacada de arriba como nuestras „selecciones diarias“. Como los vendedores en China se mueven rápido —cambiando nombres de tiendas or actualizando lotes de la noche a la mañana— mantenemos esta lista viva y actualizada. Si un enlace no funciona, no te preocupes; solo entra en nuestras categorías o revisa el directorio completo para encontrar una alternativa.',
      'Nuestro objetivo es simple: nosotros te damos los enlaces y los „consejos de expertos“ sobre tallas y calidad, mientras que Kakobuy se encarga del trabajo pesado: la compra, la inspección en almacén (QC) y el envío internacional. Si estás listo, elige un enlace, pégalo en Kakobuy y ¡que empiece tu envío!',
    ],
  },
  fr: {
    title: 'Nouveau sur Kakobuy ? Voici comment nous vous aidons.',
    paragraphs: [
      'Acheter directement sur Taobao ou Weidian peut être un vrai casse-tête si vous ne parlez pas la langue ou ne savez pas à quels vendeurs faire confiance. C’est pourquoi nous avons créé ce répertoire Kakobuy Spreadsheet. Nous passons notre temps à fouiller parmi des milliers d’annonces pour trouver les articles de la meilleure qualité, afin que vous puissiez consacrer le vôtre à préparer le colis parfait.',
      'Considérez la grille de produits ci-dessus comme nos „coups de cœur du jour“. Comme les vendeurs en Chine évoluent vite — en renommant leurs boutiques ou en mettant à jour les lots du jour au lendemain — nous gardons cette liste active et à jour. Si un lien ne fonctionne pas, ne vous inquiétez pas ; parcourez nos catégories ou consultez le répertoire complet pour trouver une alternative.',
      'Notre objectif est simple : nous fournissons les liens et les „conseils d’initiés“ sur les tailles et la qualité, tandis que Kakobuy s’occupe du reste — l’achat, l’ispezione en entrepôt (QC) et l’expédition internationale. Si vous êtes prêt, prenez un lien, collez-le dans Kakobuy et lancez votre commande !',
    ],
  },
  it: {
    title: 'Nuovo su Kakobuy? Ecco come ti aiutiamo con lo shopping.',
    paragraphs: [
      'Acquistare direttamente su Taobao o Weidian può essere un mal di testa se non parli la lingua o non sai di quali venditori fidarti. Ecco perché abbiamo creato questa directory Kakobuy Spreadsheet. Passiamo il nostro tempo a scavare tra migliaia di annunci per trovare gli articoli di altissima qualità, così tu puoi dedicare il tuo a creare il pacco perfetto.',
      'Pensa alla griglia in evidenza qui sopra come alle nostre „scelte del giorno“. Poiché i venditori in Cina si muovono velocemente — cambiando nome ai negozi o aggiornando i lotti da un giorno all’altro — manteniamo questa lista attiva e aggiornata. Se un link non funziona, non preoccuparti; vai nelle nostre categorie o controlla la directory completa per trovare un’alternativa.',
      'Il nostro obiettivo è semplice: noi forniamo i link e i „consigli degli esperti“ su taglie e qualità, mentre Kakobuy si occupa del lavoro pesante — l’acquisto, l’ispezione in magazzino (QC) e la spedizione internazionale. Se sei pronto, prendi un link, incollalo su Kakobuy e fai partire il tuo ordine!',
    ],
  },
  pl: {
    title: 'Nowy w Kakobuy? Oto jak pomagamy Ci w zakupach.',
    paragraphs: [
      'Kupowanie bezpośrednio na Taobao lub Weidian może być trudne, jeśli nie znasz języka lub nie wiesz, którym sprzedawcom ufać. Dlatego stworzyliśmy ten katalog Kakobuy Spreadsheet. Spędzamy czas na przeszukiwaniu tysięcy ofert, aby znaleźć produkty najwyższej jakości, dzięki czemu Ty możesz skupić się na budowaniu idealnego zamówienia.',
      'Potraktuj wyróżnioną siatkę powyżej jako nasze „dzienne wybory“. Ponieważ sprzedawcy w Chinach działają szybko — zmieniając nazwy sklepów lub aktualizując partie z dnia na dzień — dbamy o to, aby ta lista była aktualna. Jeśli link nie działa, nie martw się; po prostu sprawdź nasze kategorie lub pełny katalog, aby znaleźć alternatywę.',
      'Nasz cel jest prosty: dostarczamy linki i „rady ekspertów“ dotyczące rozmiarów i jakości, podczas gdy Kakobuy zajmuje się resztą — zakupem, kontrolą w magazynie (QC) i wysyłką międzynarodową. Jeśli jesteś gotowy, skopiuj link, wklej go w Kakobuy i ruszaj z zakupami!',
    ],
  },
  pt: {
    title: 'Novo no Kakobuy? Veja como te ajudamos a comprar.',
    paragraphs: [
      'Comprar diretamente no Taobao ou Weidian pode ser uma dor de cabeça se você não fala o idioma ou não sabe em quais vendedores confiar. É por isso que criamos este diretório Kakobuy Spreadsheet. Passamos nosso tempo garimpando milhares de anúncios para encontrar os itens de melhor qualidade, para que você possa dedicar o seu a montar o envio perfeito.',
      'Pense na grade de destaque acima como nossas „escolhas do dia“. Como os vendedores na China se movem rápido — mudando nomes de lojas ou atualizando lotes da noite para o dia — mantemos esta lista viva e atualizada. Se um link não funcionar, não se preocupe; basta entrar em nossas categorias ou conferir o diretório completo para encontrar uma alternativa.',
      'Nosso objetivo é simple: nós fornecemos os links e as „dicas de quem entende“ sobre tamanhos e qualidade, enquanto o Kakobuy cuida do trabalho pesado — a compra, a inspeção no armazém (QC) e o envio internacional. Se estiver pronto, pegue um link, cole no Kakobuy e vamos fazer esse envio acontecer!',
    ],
  },
};

export function getHomeHubIntroCopy(locale: string): HomeHubIntroCopy {
  const lc = locale as RouteLocale;
  return byLocale[lc] ?? byLocale.en;
}
