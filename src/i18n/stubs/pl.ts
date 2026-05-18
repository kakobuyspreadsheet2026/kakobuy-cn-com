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
    tagline: 'Komunikacja katalogu po ludzku — kasa zostaje w Kakobuy',
    kicker: '2026 · Weidian · Taobao · 1688 · zdjęcia inbound',
    body:
      'Odkrywanie zaczyna się na kakobuy-cn.com: przeglądaj kategorie i słowa kluczowe, otwieraj stabilne strony marketplace na Taobao, Weidian i 1688, a następnie przekaż czysty adres URL do Kakobuy w celu sfinalizowania zakupu i wykonania zdjęć magazynowych. Ta strona jest tylko warstwą przeglądania — koszyk, opłaty i zatwierdzenia wysyłki pozostają w Twojej sesji agenta.',
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
  exploreKickerLead: 'Wejdź przez kategorię i dokończ zakupy w ',
  exploreKickerTrail: '',
  exploreIntro:
    'Każdy przycisk otwiera indeksowane przeglądanie (miks Taobao / Weidian / 1688 zależnie od toru). Zbieraj tam prawdziwe URL SKU, potem wracaj do konta Kakobuy pod płatności i zdjęcia magazynowe.',
  exploreSub:
    'Ikony celowo otwierają nową kartę, żebyś mógł trzymać tę stronę referencyjną obok sesji Kakobuy.',
  introH2:
    'Dlaczego kupującym Kakobuy Spreadsheet nadal zależy na URL w 2026',
  introP:
    'Stabilne linki marketplace, ceny czytane z nieufnością i fotografie magazynowe pokonują hype’owe screeny — nawet jeśli pochodzą z kuratorskiego wiersza. Poniższy przewodnik prowadzi przez cały proces zakupu bez udawania, że ta domena obsługuje płatności.',
  guideH2: 'Kakobuy Spreadsheet zdekodowany — poradnik agenta (wydanie 2026)',
  guideIntro:
    'Poniżej znajduje się zrekonstruowana referencja, która odzwierciedla ewolucję żargonu hobby: co rozumie się przez wiersz Kakobuy Spreadsheet, dlaczego kakobuy-cn.com pozostaje tylko redakcyjnym towarzyszem, jak adresy URL przetrwają zmiany na platformach, kiedy QC ma znaczenie i jak zoptymalizować ostateczny koszt przed kliknięciem „wyślij”. Zasady, faktury i spory pozostają u agenta — ta warstwa nigdy nie zastępuje oficjalnej płatności.',
  sections: [
    {
      h3: '1. Co hobbyści mają na myśli mówiąc „Kakobuy Spreadsheet”',
      paragraphs: [
        'W wątkach ten termin (lub po prostu „spreadsheet”) oznacza dowolną kuratorską siatkę — Arkusze Google, eksporty Airtable albo skórki katalogu — zestawiającą chińskie URL marketplace obok plotek o partiach (batchach), ściąg rozmiarowych, podpowiedzi cenowych i sporadycznych zdjęć QC sprzedawcy. Traktuj każdy wiersz jako zapisany punkt orientacyjny, a nie magiczną obietnicę stanu magazynu.',
        'Celowo używamy tego słownictwa: kategorie przenoszą Cię na indeksowane tory przeglądania, aby zbierać SKU jak weterani Discorda. Niezależnie od tego, czy mówimy o arkuszu Weidian czy Taobao, mechanika jest ta sama — wklejasz rozwiązany URL do Kakobuy, opłacasz transport krajowy, czekasz na zdjęcia magazynowe i dopiero potem zatwierdzasz wysyłkę międzynarodową.',
      ],
    },
    {
      h3:
        '2. Listy społeczności Kakobuy Spreadsheet vs. korporacyjny głos Kakobuy · rola kakobuy-cn.com',
      paragraphs: [
        'Niewiele kopii posiada oficjalną pieczęć ; większość to zestawienia prowadzone przez wolontariuszy, oparte na tym samym folklorze, który widzisz w relacjach z zakupów. Przejęcia, zwroty, zakazane SKU lub spory zawsze przechodzą przez agenta i Twoje lokalne przepisy celne. W poszukiwaniu wiążących tekstów zaglądaj do sekcji FAQ agenta i regulaminów sprzedawcy — nie do podsumowań na Discordzie z zakładki udostępniania.',
        'kakobuy-cn.com trzyma się z dala od każdego etapu płatności: brak koszyków, portfeli czy obsługi zamówień. Wszystko, co brzmi jak „zgłoszenie do pomocy technicznej”, odbywa się w panelach agenta lub u sprzedawców zewnętrznych. Jeśli oficjalna płatność zaprzecza artykułowi tutaj, decydujące znaczenie ma płatność — ten hub dostarcza jedynie kontekstu.',
      ],
    },
    {
      h3:
        '3. Rytm operacyjny — zakładka katalog → migawki Kakobuy',
      paragraphs: [
        'Zacznij od powierzchni przeglądania podlinkowanej z tego huba, wejdź na stronę produktu i skopiuj pełny adres HTTPS z paska adresu — to ten sam krok, który zakłada każdy samouczek. Unikaj przekierowań, które usuwają identyfikatory wariantów, pustych ramek CDN lub stron głównych sklepów ukrywających opcje — generują one późniejsze problemy z zamówieniami.',
        'W Kakobuy skorzystaj z kreatora wklejania linków w swoim interfejsie. Zatwierdź kolor/rozmiar/partię przed naliczeniem opłat i zwróć uwagę na wliczone koszty serwisowe. Najpierw transport krajowy; obsesja na punkcie pikseli QC ma sens dopiero po odbiorze, przed drogimi etapami wysyłki międzynarodowej — waga wolumetryczna zazwyczaj przewyższa optymistyczną kwotę z komórki arkusza.',
      ],
    },
    {
      h3:
        '4. Dlaczego agenci zorganizowani wygrywają z bezpośrednimi wiadomościami (to nadal cel ostateczny)',
      paragraphs: [
        'Agenci scalają etapy krajowe, zarządzają fotografią QC i oferują system zgłoszeń, aby problemy wyszły na jaw przed eksportem — dlatego te procesy prawie zawsze kończą się w polu wklejania agenta, a nie w wiadomości do sprzedawcy. Nie eliminuje to ryzyka celnego — zastępuje jedynie chaotyczne przelewy bezpośrednie audytowalnymi panelami, które możesz udokumentować obok swoich notatek.',
      ],
    },
    {
      h3:
        '5. Opieka nad linkami, gdy oferty zmieniają nazwy co godzinę — utrzymuj rzetelność wierszy',
      paragraphs: [
        'Platformy marketplace zmieniają adresy URL ze względu na SEO, blokady lub przebudowy sklepów; agent nie może zamrozić linków osób trzecich. Karty, które nie są odświeżane, gromadzą martwe linki. Dobrzy kuratorzy wpisują datę kliknięcia, oznaczają nieaktywne wiersze i dodają adnotację „wymaga weryfikacji”.',
        'Wybieraj adresy URL, których selektor wariantów nadal odzwierciedla dyskusje lub zarchiwizowane komentarze. Zapisuj datę obok zrzutów ekranu, aby wiedzieć, czy referencja QC jest starsza od ostatniej zmiany — strony główne zmieniają się szybciej niż linki do produktów skopiowane z arkusza.',
      ],
    },
    {
      h3: '6. Fotografia magazynowa vs. galerie marketingowe',
      paragraphs: [
        'Po zakończeniu etapu krajowego Kakobuy fotografuje to, co faktycznie dotarło. Te ujęcia to QC, o którym dyskutuje społeczność — ostre światło, szczere kąty, niedoskonałe złożenia. Galerie w ogłoszeniach pozostają kierunkiem artystycznym ; zdjęcia magazynowe pokazują szwy, krzywe logo lub różnice w odcieniu przed wysyłką międzynarodową — nigdy nie myl błyszczącej miniatury z prawdą magazynową.',
        'Jeśli obraz znacząco odbiega od opisu sprzedawcy lub legendy w arkuszu, zrób przerwę i otwórz spór u agenta przed zatwierdzeniem wysyłki. Po przekazaniu paczki kurierowi międzynarodowemu naprawa staje się kosztowna — notatka w arkuszu nie poprawi szwów w trakcie lotu.',
      ],
    },
    {
      h3: '7. Cena w wierszu vs. rzeczywista matematyka ostateczna',
      paragraphs: [
        'Dopóki wiersz nie wymienia każdej dopłaty, traktuj widoczną cenę jako wskazówkę — a nie ostateczną wycenę dla Twojego kodu pocztowego. Koszt całkowity sumuje transport krajowy, usługi agenta, opcjonalne pomiary, rozliczenie wolumetryczne, klauzule paliwowe, opcje ubezpieczenia, kursy walut i wymagania przewoźnika.',
        'Masywne buty, puchówki i zestawy technologiczne są karane przez wagę wolumetryczną — prowadź własny dziennik przesyłek obok arkusza; Twoje historyczne średnie zawsze będą lepsze niż zaokrąglenia z forum.',
      ],
    },
    {
      h3: '8. Ocena kuratorów Kakobuy Spreadsheet, batchy i plotek społeczności',
      paragraphs: [
        'Nawet świetni edytorzy Kakobuy Spreadsheet wyprzedza rzeczywistość marketplace: batch wygasają, materiały się zmieniają, werdykty „GL” się starzeją. Porównuj żywe listingi, świeże dowody z Reddit i sens zwrotów zanim zaufasz nostalgii wiersza Kakobuy Spreadsheet.',
        'Traktuj ten hub Kakobuy Spreadsheet jak kompas, nie autopilota. Podejrzanie tanie sylwetki zwykle znaczą obrócone batche, przynęty listingów lub źle odczytane tabele rozmiarów — wklej ostrożnie, QC agresywnie i respektuj timery sporów Kakobuy nawet gdy Kakobuy Spreadsheet twierdzi coś innego.',
      ],
    },
    {
      h3: '9. Powtarzające się pułapki',
      paragraphs: [
        'Ślepa wiara w rozmiar literowy bez tabel mm/cm; pomijanie masy odzieży przed kubaturą; traktowanie klonów jako identycznych bliźniaków, bo tak mówi komórka w arkuszu; akceptacja QC na nieczytelnej miniaturze; cytowanie pojedynczej kolumny jako ceny ostatecznej z cłem dla swojego regionu.',
      ],
    },
    {
      h3:
        '10. Wspólne biblioteki Kakobuy Spreadsheet uczciwe sezon po sezonie',
      paragraphs: [
        'Segmentuj zakładki wg verticali, zamroź nagłówki, adnotuj ID batchy i planuj audyty URL — zwłaszcza po mega‑odświeżeniach „rewrite 2026”. Żywe dokumenty Kakobuy Spreadsheet biją zrzuty ekranu: tnij martwe hiperłącza, koduj kolorem podejrzane SKU i opisuj zamienniki dla kolejnego czytelnika Kakobuy Spreadsheet.',
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
};
