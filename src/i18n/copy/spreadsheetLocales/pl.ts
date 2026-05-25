import type { SpreadsheetPageCopy } from '../spreadsheetCopy.types';

export const pl: SpreadsheetPageCopy = {
  title: 'Jak używać Kakobuy Spreadsheet — przewodnik linków i QC',
  description:
    'Przewodnik krok po kroku Kakobuy Spreadsheet na 2026: przeglądaj tory, kopiuj URL Taobao, Weidian lub 1688, ustaw oczekiwania QC i wklejaj linki w Kakobuy przed wysyłką.',
  keywords:
    'katalog produktowy chiny, sprawdzone linki repliki, jak zamawiac przez agenta, oryginalne zdjecia qc, weidian taobao arkusz',
  backHomeLabel: '← Wróć na stronę główną',
  h1: 'Kakobuy Spreadsheet',
  h2Hero:
    'Żywy katalog skrótów do marketplace pod kątem kupujących przez Kakobuy.',
  subhead:
    'Przejrzyj sneakersy, okrycia wierzchnie, akcesoria, torby, elektronikę i nietypowe tory w powiązanym katalogu, skopiuj URL produktu i przekaż go do Kakobuy pod krajowy routing, zdjęcia inbound i wybór kuriera.',
  introHtml: `Traktuj kakobuy-cn.com jako <strong>warstwę narracji</strong> obok <strong><a href="{ml}" target="_blank" rel="noopener noreferrer">interfejsu przeglądarki spreadsheetu</a></strong>. Tłumaczymy żargon, ostrzegamy przed lukami QC i łączymy artykuły — ale tylko <strong><a href="{kakobuyUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a></strong> prowadzi płatności, compliance, matematykę paczek i spory. Połącz ten materiał z <a href="{newsUrl}">Newsem i poradnikami</a> dla zsynchronizowanych komunikatów lub z <a href="{howToUrl}">Jak kupować</a> pod dosłowne kroki wklejania linków.<br/><br/>
<strong>kakobuy-cn.com nie hostuje</strong> żywej siatki SKU; publikujemy lustra redakcyjne, żeby wyjaśnić, czemu znikają wiersze, czemu screenshoty wyolbrzymiają QC i gdzie outboundowy fracht rozjeżdża się z optymistycznymi komórkami.`,
  heroTags: [
    'Puli SKU w skali katalogu',
    'QC sprzedawcy ≠ QC magazynu',
    'UX odkrywania oparty na torach',
    'Wiersze odświeżane sezonowo',
    'Słownik dla początkujących',
    'Płatności tylko w Kakobuy',
  ],
  whatIsTitle:
    'Czym jest ten „spreadsheet”, który wszyscy screenują?',
  whatIsBodyHtml: `W praktyce to <strong>sieć zakładek</strong>: wiersze wskazują na towary z Taobao, Weidian lub 1688 bez codziennego ruletkowania wyszukiwarką marketplace. Zsynchronizowana <strong><a href="{ml}" target="_blank" rel="noopener noreferrer">powłoka przeglądania</a></strong> odzwierciedla, jak twórcy tagują buty, streetwear, niszową elektronikę, zestawy i spontaniczne zakupy perfum.<br/><br/>
Niektóre kolumny chwalą się statycznymi zdjęciami fabrycznymi — traktuj je jako <em>okruszki marketingowe</em>, dopóki Kakobuy nie wgra w Twoim koncie zdjęć z magazynu. Na tej domenie nie przechowujemy SKU ani nie pobieramy płatności.<br/><br/>
<strong>Rytm aktualizacji ma znaczenie:</strong> sprzedawcy zmieniają albumy, usuwają warianty lub przemianowują batche szybciej niż starzeją się screenshoty z Discorda. W razie wątpliwości ponownie otwórz <strong><a href="{ml}" target="_blank" rel="noopener noreferrer">przeglądarkę katalogu</a></strong>, zanim uwierzysz starym eksportom.`,
  learnMoreLabel: 'Zagłęb się →',
  previewTitle: 'Archetypy, które kupujący polują w spreadsheetach',
  previewIntroHtml: `Karty poniżej są jak <strong>zakładki gatunkowe</strong>, a nie live ceny — retro biegówki, sprane koszulki, bluzy na dwa suwaki, torby sling, meshowe jerseje, słuchawki gamingowe. Asortyment obraca się w rytmie sprzedawców; ceny obok arkusza ignorują ruletkę celną i volumetry. Wejdź do <strong><a href="{ml}" target="_blank" rel="noopener noreferrer">katalogu</a></strong> po to, co da się dziś kupić.`,
  previewFiltersLabel: 'Gorące filtry teraz:',
  previewCards: [
    {
      title: 'Sylwetka heritage runner',
      category: 'Buty',
      priceHint: 'Szacunkowo ~34 USD',
      tagsLine:
        'QC still gdy sprzedawca dołącza · stały tor · dużo batch talku',
    },
    {
      title: 'Koszulka boxy z acid wash',
      category: 'Koszulki',
      priceHint: 'Szacunkowo ~15 USD',
      tagsLine: 'Letnia rotacja · oversize · częste restocki',
    },
    {
      title: 'Bluza polarowa na dwa suwaki',
      category: 'Bluzy / swetry',
      priceHint: 'Szacunkowo ~29 USD',
      tagsLine:
        'QC magazynu kluczowe · masywne suwaki · uważaj na DIM',
    },
    {
      title: 'Modułowa torba crossbody sling',
      category: 'Torby',
      priceHint: 'Szacunkowo ~23 USD',
      tagsLine: 'Tor EDC · QC okuć paska · grubość wyściółki zmienna',
    },
    {
      title: 'Jersey kortowy z wentylacją',
      category: 'Jersey',
      priceHint: 'Szacunkowo ~18 USD',
      tagsLine:
        'Napięcie siatki się zmienia · nadruki sponsorów kruche · porównaj oferty',
    },
    {
      title: 'Bezprzewodowe słuchawki low-latency',
      category: 'Elektronika',
      priceHint: 'Szacunkowo ~27 USD',
      tagsLine:
        'Loteria driverów · czytaj screeny komentarzy · sprawdź etui ładujące',
    },
  ],
  whyTitle: 'Dlaczego odkrywanie od katalogu wciąż wygrywa',
  whyItems: [
    {
      title: 'Skakanie między torami bije ślepe ruletkowanie słów kluczy',
      body: 'Kafelki wrzucają Cię w filtrowany przegląd pod kulturę spreadsheetu zamiast zgadywać triki SEO na Taobao.',
    },
    {
      title: 'Okruszki QC, gdy sprzedawcy współpracują',
      body: 'Część wierszy ma statyki sprzedawcy — sensowna orientacja, nigdy zamiennik dla ujęć magazynowych Kakobuy.',
    },
    {
      title: 'Podział wizualny według pionów garderoby',
      body: 'Obuwie, dzianiny, torby, elektronika i impulsy zapachowe siedzą w osobnych kubełkach dla szybszego skanowania.',
    },
    {
      title: 'URL przyjazne schowkowi',
      body: 'Wiersze niosą community vetting — mniej nocy na walidacji martwych hopów Weidian przed wklejeniem do Kakobuy.',
    },
    {
      title: 'Porównania batchy bez archeologii Discorda',
      body: 'Podgląd kilku sylwetek lub widełek cen zanim otworzysz nieskończoność kart Chrome.',
    },
    {
      title: 'Onboarding prostym językiem',
      body: 'Połącz ten tekst z Jak kupować, gdy sleng Discorda wydaje się gatekeepowany.',
    },
  ],
  howTitle: 'Ściągawka workflow',
  howSteps: [
    {
      title: 'Krok 1 — wybierz tor',
      body: 'Zacznij od obuwia, dzianin, akcesoriów, elektroniki lub wyszukiwania w powłoce przeglądarki.',
    },
    {
      title: 'Krok 2 — zweryfikuj ogłoszenie',
      body: 'Potwierdź siatkę wariantów, tabelę rozmiarów, QC sprzedawcy (jeśli jest). Kopiuj kanoniczny URL produktu — nie stronę sklepu.',
    },
    {
      title: 'Krok 3 — przełóż przez Kakobuy',
      body: 'Wklej w flow pozyskania Kakobuy, opłać krajowy etap i czekaj na skany inbound.',
    },
    {
      title: 'Krok 4 — audyt zdjęć magazynowych',
      body: 'Powiększ szwy, panele, podeszwy, lakier — kwestionuj rozbieżności zanim zatwierdzisz eksport.',
    },
    {
      title: 'Krok 5 — zarezerwuj fracht międzynarodowy',
      body: 'Wybierz linie balansując znajomość ceł, apetyt na ubezpieczenie i uczciwość volumetryki — śledzenie w Kakobuy.',
    },
  ],
  columnsTitle: 'Czytanie wierszy spreadsheetu bez utonięcia',
  columnsIntroHtml: `Układy różnią się między kuratorami, ale arkusze pod Kakobuy powtarzają te same motywy: URL-e marketplace, skróty batchy, opcjonalne zdjęcia sprzedawcy i „kierunkowe” ceny bez ceł i volumetrycznych niespodzianek. Traktuj każdą komórkę jak <strong>wskazówkę routingu</strong>, dopóki <strong><a href="{kakobuyUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a></strong> nie przyjmie wklejki i nie opublikuje zdjęć magazynowych.<br/><br/>
Jeśli żargon wciąż mętny, dodaj <a href="{howToUrl}">Jak kupować</a>, żeby nie skopiować przypadkiem URL-i ze strony sklepowej.`,
  columnTips: [
    {
      title: 'Kanoniczny URL produktu vs skrót sklepu',
      body: 'Zawsze kopiuj permalink ogłoszenia, który Taobao / Weidian / 1688 pokazuje dla danego SKU. Strony „hero” sklepu często tracą warianty po rozwiązaniu siatek przez agenta.',
    },
    {
      title: 'Przezwiska batchy i żargon fabryczny',
      body: 'Komórki z nazwami batchy to pamięć Discorda, nie gwarancje. Datuj notatki obok, żeby wiedzieć, która narracja pasuje do którego sezonu sprzedawcy.',
    },
    {
      title: 'Miniaturki QC inline',
      body: 'Wbudowane statyczne zdjęcia to marketing sprzedawcy. Fotografie inbound Kakobuy są egzekwowaniem — kwestionuj rozbieżności przed zatwierdzeniem eksportu.',
    },
    {
      title: 'Ceny „przy spreadsheetzie”',
      body: 'Kolumny rzadko uwzględniają cła, przełączniki ubezpieczeń, FX i dzielniki volumetryki. Licz landed cost w Kakobuy zamiast wierzyć różowym wierszom.',
    },
    {
      title: 'Filtry torów i sezonowe zakładki',
      body: 'Obuwie, dzianiny, akcesoria, elektronika i perfumy zwykle żyją na osobnych torach — przejrzyj filtry przeglądarki, zanim uznasz, że wiersz zniknął.',
    },
  ],
  resourcesTitle: 'Pogłębione teksty na tej domenie',
  resourcesIntroHtml: `Te dłuższe artykuły zostają na kakobuy-cn.com, żebyś rzadziej robił screenshoty: świadomość QC po uploadzie magazynu, osie czasu inspirowane Reddit oraz checklista paczki między optymizmem spreadsheetu a fakturami frachtu. Checkout jest wyłącznie w <strong><a href="{kakobuyUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a></strong> — tu nie ma koszyków.`,
  resourceCards: [
    {
      title: 'QC magazynowe po wklejeniu wiersza',
      bodyHtml: `Statyczne zdjęcia sprzedawcy w arkuszu to tylko orientacja. Powiększenia, timing sporów i czemu inbound bije hype — w naszym <a href="/blog/kakobuy-spreadsheet-qc/">przewodniku Kakobuy Spreadsheet QC</a>.`,
    },
    {
      title: 'Oś czasu społeczności bez archeologii Discorda',
      bodyHtml: `Szukanie <strong>kakobuy spreadsheet reddit</strong> to zwykle potrzeba dowodu frachtu wstecz — streśćmy to w <a href="/blog/kakobuy-spreadsheet-reddit/">Spreadsheet × Reddit notes</a>.`,
    },
    {
      title: 'Od wiersza spreadsheetu do etykiety eksportu',
      bodyHtml: `Użyj <a href="/blog/kakobuy-spreadsheet-to-parcel-checklist/">checklisty Spreadsheet → parcel</a> pod volumetrykę, ubezpieczenia i moment, kiedy ponowne QC ma sens zamiast ślepej akceptacji.`,
    },
  ],
  marketplaceBridgeTitle: 'Gdy link prowadzi na Taobao, Weidian lub 1688',
  marketplaceBridgeIntroHtml: `Te trzy światy starzeją się inaczej — URL padają, siatki rozmiarów się rozjeżdżają, hurt dokłada MOQ. Wybierz pasujący primer, potem idź do <a href="{howToUrl}">Jak kupować</a> po konkretne kliknięcia w Kakobuy.`,
  marketplaceBridgeCards: [
    {
      title: 'Taobao za wieloma wierszami',
      bodyHtml: `Wciąż kręgosłup obuwia i warstw — zobacz <a href="/blog/kakobuy-taobao/">Kakobuy × Taobao primer</a> o wariantach i URL-ach sklepu bez SKU.`,
    },
    {
      title: 'Weidian, które obraca albumy',
      bodyHtml: `Sklepy-albumy zmieniają się szybciej niż screenshoty — przeczytaj <a href="/blog/kakobuy-weidian/">Kakobuy × Weidian notes</a> zanim uwierzysz w miniaturę.`,
    },
    {
      title: 'Wiersze hurtowe 1688',
      bodyHtml: `URL-e bulk ciągną MOQ i klauzule — zacznij od <a href="/blog/kakobuy-1688/">Kakobuy × 1688 guide</a>, gdy arkusz pachnie hurtem.`,
    },
  ],
  faqTitle: 'FAQ — szybkie doprecyzowania',
  faqs: [
    {
      q: 'Zdefiniuj Kakobuy Spreadsheet bez hypesu?',
      aHtml: `To <strong>ludzko kuratorowany kręgosłup katalogu</strong> z URL chińskich marketplace. Ta domena tłumaczy strategię; live asortyment siedzi w <a href="{ml}" target="_blank" rel="noopener noreferrer">przeglądarce spreadsheetu</a>; transakcje wykonujesz na <a href="{kakobuyUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a>.`,
    },
    {
      q: 'Czy nowicjusze odnajdą się?',
      aHtml: `Tak — zestaw tę stronę z <a href="{howToUrl}">Jak kupować</a> dla dosłownych kliknięć w UI i z <a href="{newsUrl}">Newsem i poradnikami</a>, gdy chcesz lustrzanych ogłoszeń Kakobuy.`,
    },
    {
      q: 'Które piony pojawiają się najczęściej?',
      aHtml: `Obuwie, warstwy streetwearowe, torby, akcesoria, jerseje, impulsy beauty, eksperymenty elektroniczne plus „misc” — dostępność faluje sezonami sprzedawców.`,
    },
    {
      q: 'Czy QC z arkusza zastępuje zdjęcia magazynowe?',
      aHtml: `Nigdy. Inline QC to nadal <strong>marketing sprzedawcy</strong>; inbound photography Kakobuy to warstwa egzekwowania.`,
    },
    {
      q: 'Czemu nie pominąć spreadsheetów całkiem?',
      aHtml: `Możesz — ale kuratorowane tory kompresują czas weryfikacji; mniej nocy na potwierdzaniu martwych hopów Weidian.`,
    },
    {
      q: 'Jak zmienna jest dostępność?',
      aHtml: `Bardzo. Gdy URL daje 404, zakładaj rotację stocku — zaloguj błąd w ticketcie agenta zamiast wkurzonej odpowiedzi na Discordzie.`,
    },
    {
      q: 'Czy kakobuy-cn.com to „oficjalny” spreadsheet Kakobuy?',
      aHtml: `Nie — niezależny hub redakcyjny. Handel działa na <a href="{kakobuyUrl}" target="_blank" rel="noopener noreferrer">kakobuy.com</a>; przeglądarka spreadsheetu żyje na <a href="{ml}" target="_blank" rel="noopener noreferrer">powierzchni katalogu</a>. My opisujemy proces wokół.`,
    },
    {
      q: 'Czemu URL ze spreadsheetu znikł z dnia na dzień?',
      aHtml: `Sprzedawcy przebudowują ogłoszenia bez przerwy. Wczoraj świetnie, dziś 404 — odnotuj w Kakobuy zanim krzyknie się „sabotaż”. Odśwież przez <a href="{ml}" target="_blank" rel="noopener noreferrer">żywy browse</a>, zanim sklonujesz linki.`,
    },
    {
      q: 'Wystarczą screenshoty z Discorda?',
      aHtml: `Starzeją się najszybciej na torach ciężkiego frachtu. Dodaj <a href="{howToUrl}">Jak kupować</a> dla czystego wklejania i wróć do powyższych poradników, gdy QC wymaga więcej niż hype’owych wątków.`,
    },
  ],
  bottomCtaTitle: 'Gotowy otworzyć przeglądarkę spreadsheetu?',
  bottomCtaIntroHtml: `Uruchom <strong><a href="{ml}" target="_blank" rel="noopener noreferrer">powierzchnię katalogu</a></strong>, przypnij <a href="{howToUrl}">Jak kupować</a> dla higieny procedury i przejrzyj <a href="{newsUrl}">News i poradniki</a>, gdy Kakobuy zmienia polityki. Ceny obok spreadsheetu traktuj jako <strong>tylko kierunek</strong>; cła, przełączniki ubezpieczeń, volumetryka i FX należą do Twojego ledgeru Kakobuy.`,
  bulletsTitle: 'Zanim opuścisz tę stronę',
  bullets: [
    'Tu nie ma koszyków — nigdy nie przelewaj środków na kakobuy-cn.com.',
    'Bierz URL na poziomie SKU; skróty do sklepu psują warianty w agencie.',
    'Marketingowe QC ≠ inbound QC — ponownie sprawdź po uploadzie magazynu.',
    'Landed cost bije cenę z kolumny — uwzględnij DIM i opłaty linii.',
    'Zmiany polityk śledź przez News — komórki rzadko ogłaszają compliance.',
    'Notuj skróty batchy obok URL-i, żeby pamiętać, który slang śledziłeś.',
  ],
  ctaLabel: 'Wejdź do katalogu na żywo →',
  howToBuyLabel: 'Playbook wklejania → Jak kupować',
  newsLinkLabel: 'Biuro newsów →',
};
