import type { HomeStubContent } from '../types';
import { pillsFor } from './categoryPaths';

const pl = {
  shoes: {
    label: 'Buty',
    alt: 'sneakersy Weidian/Taobao z QC jeśli widać',
  },
  't-shirts': {
    label: 'Koszulki',
    alt: 'oversized, acid wash i grafiki',
  },
  pants: {
    label: 'Spodnie',
    alt: 'denim, joggery i szorty',
  },
  accessories: {
    label: 'Dodatki',
    alt: 'paski, drobiazgi biżu i gadżety',
  },
  bags: {
    label: 'Torby',
    alt: 'plecaki i nerki pod paste do Kakobuy',
  },
  electronics: {
    label: 'Elektronika',
    alt: 'audio i gadżety z kontekstem ceny',
  },
  jackets: {
    label: 'Kurtki',
    alt: 'kurtki techniczne i zimowe',
  },
  hoodies: {
    label: 'Bluzy',
    alt: 'bluzy zip, crew i swetry',
  },
  headwear: {
    label: 'Czapki',
    alt: 'snapbacki, buckety i beanie',
  },
  jersey: {
    label: 'Jersey',
    alt: 'koszulki sportowe i mesh',
  },
  perfume: {
    label: 'Beauty',
    alt: 'perfumy i beauty w indeksowanym katalogu',
  },
  other: {
    label: 'Mix',
    alt: 'kategorie hybrydowe i ciekawostki',
  },
} as const;

export const plHome: HomeStubContent = {
  title: 'Kakobuy Spreadsheet 2026 — 5 000+ linków i zdjęcia QC',
  description:
    'Niezależny hub Kakobuy Spreadsheet na 2026: ponad 5 000 findów Taobao, Weidian i 1688 ze zdjęciami QC. Kategorie, poradniki paste-link, kupuj przez Kakobuy.',
  keywords:
    'kakobuy opinie, kakobuy poradnik, repliki ubran buty, jak zamawiac z chin, paczka clo poradnik, tania wysylka agent',
  webPageName: 'Kakobuy Spreadsheet 2026 · kakobuy-cn.com',
  webPageKeywords: [
    'baza replik',
    'poradnik agenta zakupowego',
    'zweryfikowane linki',
    'zdjęcia kontroli jakości',
    'asystent wysyłki',
  ],
  hero: {
    h1: 'Kakobuy Spreadsheet 2026',
    kicker: 'Taobao · Weidian · 1688 · Zdjęcia QC',
    body:
      'Uzyskaj dostęp do ponad 5 000 wysokiej jakości reps ze zweryfikowanymi linkami i profesjonalnymi zdjęciami QC. My dostarczamy dane, Kakobuy zajmuje się resztą.',
    ctaBrowse: 'Otwórz katalog spreadsheet →',
    ctaLogin: 'Zaloguj się do Kakobuy',
    heroPlaneAlt:
      'kakobuy spreadsheet · ilustracja samolotu w stylu Kakobuy · dekoracja hero · kakobuy-cn.com',
    searchAria:
      'kakobuy spreadsheet · szukaj w hubie (wyniki w nowej karcie katalogu)',
    searchPlaceholder: 'Marki, moodboardy, słowa kluczowe…',
    searchByImage: 'Szukaj obrazem',
    searchSubmit: 'Szukaj',
    searchByImageAria:
      'kakobuy spreadsheet · wyszukiwanie obrazem w katalogu · nowa karta, ten sam stack',
  },
  categoriesAria: 'Skróty kategorii do frontu katalogu',
  exploreTitle: 'Przeglądaj tory Kakobuy Spreadsheet wg kategorii',
  redditAria: 'Społeczność r/kakobuy (Reddit, nowa karta)',
  redditSnooAlt:
    'kakobuy spreadsheet · Snoo Reddit r/kakobuy — dyskusje haul, spreadsheet QC i agenci',
  sections: [
    {
      h3: 'Czym jest Kakobuy Spreadsheet Hub?',
      paragraphs: [
        'W praktyce jest to starannie dobrana kolekcja najlepszych linków do produktów z chińskich platform handlowych, takich jak Taobao, Weidian i 1688. Dodajemy notatki o „batche’ach” (wersjach jakościowych), szacunkowe ceny i zdjęcia, dzięki czemu nie musisz zgadywać podczas przeszukiwania stron, które nie są w Twoim języku.',
        'Ta strona internetowa działa jako Twój przewodnik i indeks. Podczas gdy my pomagamy Ci znaleźć produkty, Kakobuy zajmuje się faktycznym zakupem, sprawdzaniem jakości w swoim magazynie i wysyłką paczki pod Twoje drzwi.',
      ],
    },
    {
      h3: 'Jak kupować po wybraniu produktu?',
      paragraphs: [
        'To proste: skopiuj link do produktu, wklej go w pasek wyszukiwania w Kakobuy i wybierz swój rozmiar oraz kolor. Gdy opłacisz cenę krajową, produkt zostanie wysłany do magazynu Kakobuy, gdzie zrobią profesjonalne zdjęcia do Twojej recenzji.',
        'Zawsze dokładnie sprawdzaj te zdjęcia „QC”. Jeśli produkt wygląda inaczej niż oczekiwałeś, możesz poprosić o zwrot lub wymianę, zanim opuści on Chiny.',
      ],
    },
    {
      h3: 'Dlaczego warto korzystać z agenta takiego jak Kakobuy?',
      paragraphs: [
        'Większość sprzedawców w Chinach nie wysyła produktów bezpośrednio na adresy międzynarodowe. Agenci wypełniają tę lukę. Zapewniają bezpieczne miejsce do przechowywania Twoich produktów, weryfikują, czy otrzymałeś dokładnie to, za co zapłaciłeś, i konsolidują wiele produktów w jedno pudełko, aby zaoszczędzić Ci pieniądze na wysyłce.',
        'Korzystanie z agenta zapewnia również ochronę płatności i jasny sposób obsługi sporów, jeśli sprzedawca wyśle niewłaściwą partię lub rozmiar.',
      ],
    },
    {
      h3: 'Co z niedziałającymi linkami lub produktami wyprzedanymi?',
      paragraphs: [
        'Rynek zmienia się szybko – sprzedawcy często aktualizują swoje linki lub kończą im się zapasy bez ostrzeżenia. Stale odświeżamy nasz katalog, aby wszystko działało, ale jeśli trafisz na niedziałający link, po prostu sprawdź stronę kategorii w poszukiwaniu świeżej alternatywy.',
        'Jeśli zakupiony przez Ciebie produkt nagle stanie się niedostępny, Kakobuy powiadomi Cię o tym i zwróci pieniądze na Twoje saldo, abyś mógł wybrać coś innego.',
      ],
    },
  ],
  ctaHeading: 'Skok do katalogu Kakobuy Spreadsheet',
  ctaIntro: 'Kontynuuj odkrywanie przez',
  ctaIntroSuffix:
    ' — zostaw tryb Browse podczas polowania na URL i loguj się do Kakobuy przy wklejaniu zakupów.',
  ctaFooterNote: 'Usługi zewnętrzne — weryfikacja ręczna zalecana.',
  sheetLinkLabel: 'most Kakobuy Spreadsheet → arkusze agenta',
  categoryPills: pillsFor(pl),
  footer: {
    disclaimerLabel: 'Zastrzeżenie',
    disclaimerHtml:
      'kakobuy-cn.com jest hubem linków redakcyjnych. Odnośniki do <a href="https://maisonlooks.com/en" target="_blank" rel="noopener noreferrer">indeksowany katalog</a> i <a href="https://kakobuy.com/" target="_blank" rel="noopener noreferrer">Kakobuy</a> prowadzą do niezależnych usług; brak płatności na tej domenie. Sprawdzaj QC i regulaminy u źródeł. Brak deklarowanego partnerstwa z Kakobuy.',
    copyrightLine:
      '© 2026 kakobuy-cn.com — notatki czytelnicze; zamówienia zamykasz na Kakobuy.',
  },
  categoryPage: {
    titleTemplate: 'Najlepszy Kakobuy {uiName} Spreadsheet 2026 — Top Picks & QC',
    descriptionTemplate: 'Przeglądaj najlepszy arkusz Kakobuy {uiName} na rok 2026. Wyselekcjonowany wybór produktów premium {uiNameLower} z bezpośrednimi linkami i zweryfikowanymi zdjęciami QC.',
    introTemplate: 'Odkryj najlepsze {uiNameLower} wyselekcjonowane dla społeczności Kakobuy. Wszystkie produkty są ręcznie weryfikowane z aktywnymi linkami do zakupu i referencjami QC z magazynu.',
    homeHubBackLink: '← Hub Kakobuy Spreadsheet',
    introToggleLabel: 'O tej kategorii',
    externalBtnTemplate: '{uiName} na MaisonLooks →',
    noProducts: 'Nie znaleziono jeszcze żadnych produktów w tej kategorii. Zajrzyj tu wkrótce!',
  },
};
