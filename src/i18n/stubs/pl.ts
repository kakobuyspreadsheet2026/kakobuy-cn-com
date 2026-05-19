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
  title: 'Najlepszy Kakobuy Spreadsheet 2026 (Aktualizacja) — 5 000+ Reps Links & QC',
  description:
    'Najlepszy Kakobuy Spreadsheet na 2026 rok. Przeglądaj nasz zaktualizowany katalog reps dla butów, bluz i kurtek z bezpośrednimi linkami i zdjęciami QC.',
  keywords:
    'Kakobuy Spreadsheet 2026, indeksowany katalog spreadsheet, Weidian agent, QC magazyn, paste link Taobao, FashionReps PL',
  webPageName: 'Najlepszy Kakobuy Spreadsheet 2026 · kakobuy-cn.com',
  webPageKeywords: [
    'Kakobuy Spreadsheet',
    'indeksowany katalog',
    'Weidian UE',
    'QC zdjęcia',
    'agent zakupy',
  ],
  hero: {
    h1: 'Kakobuy Spreadsheet 2026',
    tagline: 'Znajdź najlepsze reps. Kupuj na Kakobuy.',
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
  introH2:
    'Dlaczego kupującym Kakobuy Spreadsheet nadal zależy na URL w 2026',
  introP:
    'Stabilne linki marketplace, ceny czytane z nieufnością i fotografie magazynowe pokonujuą hype’owe screeny — nawet jeśli pochodzą z kuratorskiego wiersza. Poniższy przewodnik prowadzi przez cały proces zakupu bez udawania, że ta domena obsługuje płatności.',
  guideH2: 'Kakobuy Spreadsheet zdekodowany — poradnik agenta (wydanie 2026)',
  guideIntro:
    'Poniżej znajduje się zrekonstruowana referencja, która odzwierciedla ewolucję żargonu hobby: co rozumie się przez wiersz Kakobuy Spreadsheet, dlaczego kakobuy-cn.com pozostaje tylko redakcyjnym towarzyszem, jak adresy URL przetrwają zmiany na platformach, kiedy QC ma znaczenie i jak zoptymalizować ostateczny koszt przed kliknięciem „wyślij”。 Zasady, faktury i spory pozostają u agenta — ta warstwa nigdy nie zastępuje oficjalnej płatności.',
  sections: [
    {
      h3: '1. Co to jest Kakobuy Spreadsheet?',
      paragraphs: [
        'W społeczności "spreadsheet" to wyselekcjonowana lista linków (Taobao, Weidian, 1688) z informacjami o partiach i zdjęciami QC. To skrót do szybkiego znalezienia najlepszych produktów.',
        'Nasza platforma zmienia te statyczne listy w interaktywne doświadczenie. Użyj naszych kategorii, aby znaleźć zweryfikowane artykuły.',
      ],
    },
    {
      h3: '2. Jak kupować?',
      paragraphs: [
        'Proces jest prosty: znajdź produkt w naszym katalogu, skopiuj link HTTPS i wklej go w pasku wyszukiwania Kakobuy. Tam wybierzesz rozmiar, kolor i sfinalizujesz zakup.',
      ],
    },
    {
      h3: '3. Kontrola Jakości (QC)',
      paragraphs: [
        'Gdy Twój produkt dotrze do magazynu, otrzymasz profesjonalne zdjęcia QC. Sprawdź je dokładnie, aby zweryfikować jakość przed zatwierdzeniem wysyłki międzynarodowej.',
      ],
    },
    {
      h3: '4. Koszty i Wysyłka',
      paragraphs: [
        'Całkowity koszt obejmuje dostawę krajową, prowizje agenta i fracht międzynarodowy. Waga wolumetryczna jest kluczowa przy obliczaniu końcowej ceny wysyłki paczki.',
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
    externalBtnTemplate: 'Zobacz pełny katalog {uiName} na MaisonLooks →',
    noProducts: 'Nie znaleziono jeszcze żadnych produktów w tej kategorii. Zajrzyj tu wkrótce!',
  },
};
