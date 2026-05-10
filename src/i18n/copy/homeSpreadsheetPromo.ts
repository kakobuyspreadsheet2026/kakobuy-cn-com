import type { RouteLocale } from '../config';

export type HomeSpreadsheetPromoCopy = {
  title: string;
  body: string;
  bullets: readonly string[];
  ctaSpreadsheet: string;
  ctaHowToBuy: string;
};

const en: HomeSpreadsheetPromoCopy = {
  title: 'Spreadsheet smarts before you paste',
  body:
    'A row can look perfect until the link 404s, the thumbnail QC lies, or shipping math shocks you at export. Skim this guide for the usual traps—then open longer reads only when you need them.',
  bullets: [
    'Grab real item URLs, not shop splash pages that ghost variants',
    'Treat spreadsheet pics as hints—warehouse shots are what you approve against',
    'Budget volumetrics, insurance, and duties beyond whatever the row implies',
  ],
  ctaSpreadsheet: 'Open the Spreadsheet guide →',
  ctaHowToBuy: 'Paste links step by step → How to buy',
};

const byLocale: Record<RouteLocale, HomeSpreadsheetPromoCopy> = {
  en,
  de: {
    title: 'Spreadsheet-Wissen vor dem Einfügen',
    body:
      'Eine Zeile wirkt sicher—bis der Link stirbt, QC-Thumbnails trügen oder Export-Fracht überrascht. Kurz die klassischen Stolpersteine; Tiefgang nur bei Bedarf.',
    bullets: [
      'Echte Artikel-URLs holen, keine Shop-Splashs ohne Varianten',
      'Spreadsheet-Bilder nur als Hinweis—Warehouse-Fotos sind die Entscheidungsbasis',
      'Volumetrie, Versicherung und Zoll einplanen, nicht nur Zellenpreise',
    ],
    ctaSpreadsheet: 'Zum Spreadsheet-Leitfaden →',
    ctaHowToBuy: 'Links Schritt für Schritt → So kaufen',
  },
  pt: {
    title: 'Entenda o spreadsheet antes de colar',
    body:
      'Tudo parece certo até o link cair, o QC da miniatura enganar ou o frete pesar no export. Um passe rápido pelos erros comuns; guias longos só quando precisar.',
    bullets: [
      'Use URL do produto certo, não página vitrine que some variante',
      'Foto na planilha orienta—foto do armazém é o que você valida',
      'Prevista volumetria, seguro e tributos além do preço da célula',
    ],
    ctaSpreadsheet: 'Abrir guia do Spreadsheet →',
    ctaHowToBuy: 'Colar links passo a passo → Como comprar',
  },
  es: {
    title: 'Repasa el spreadsheet antes de pegar',
    body:
      'Todo parece claro hasta que el link muere, el QC miniatura miente o el flete te golpea al exportar. Repaso rápido de trampas habituales; lecturas largas solo si hace falta.',
    bullets: [
      'Copia URL de ítem real, no splash de tienda que pierde variantes',
      'Miniatura en hoja orienta—fotos de almacén son las que apruebas',
      'Cuenta volumetría, seguro y aranceles, no solo la celda',
    ],
    ctaSpreadsheet: 'Ver guía Spreadsheet →',
    ctaHowToBuy: 'Pegar enlaces paso a paso → Cómo comprar',
  },
  fr: {
    title: 'Maîtrisez le spreadsheet avant de coller',
    body:
      'La ligne semble nickel jusqu’au lien mort, au QC trompeur en vignette ou au fret qui explose à l’export. Les pièges courants en bref ; guides longs seulement si besoin.',
    bullets: [
      'URL produit complète, pas la vitrine qui perd les variantes',
      'Images dans la feuille = repères ; photos entrepôt = décision',
      'Anticipe volumétrie, assurance et droits au-delà du prix affiché',
    ],
    ctaSpreadsheet: 'Ouvrir le guide Spreadsheet →',
    ctaHowToBuy: 'Coller les liens étape par étape → Comment acheter',
  },
  it: {
    title: 'Spreadsheet: cosa controllare prima dell’incolla',
    body:
      'La riga sembra sicura finché il link non muore, il QC in miniatura inganna o il freight all’export ti stupisce. Errori tipici in sintesi; articoli lunghi solo se serve.',
    bullets: [
      'URL prodotto vero, non splash vetrina che perde varianti',
      'Thumb nel foglio orienta—foto magazzino è ciò che approvi',
      'Volume, assicurazione e dazi oltre la cella “prezzo”',
    ],
    ctaSpreadsheet: 'Apri la guida Spreadsheet →',
    ctaHowToBuy: 'Incolla i link passo passo → Come acquistare',
  },
  pl: {
    title: 'Sprawdź spreadsheet zanim wkleisz link',
    body:
      'Wiersz wygląda pewnie—dopóki nie odkryjesz martwego linku, mylącego QC na miniaturze lub kosztów frachtu przy eksporcie. Szybki przegląd typowych pułapek; dłuższe teksty tylko gdy trzeba.',
    bullets: [
      'URL konkretnego produktu, nie strona sklepu bez wariantów',
      'Obrazek w arkuszu to wskazówka—zdjęcia magazynowe rozstrzygają QC',
      'Liczb volumetrykę, ubezpieczenie i cła, nie tylko komórkę z ceną',
    ],
    ctaSpreadsheet: 'Otwórz przewodnik Spreadsheet →',
    ctaHowToBuy: 'Wklejaj linki krok po kroku → Jak kupować',
  },
};

export function getHomeSpreadsheetPromoCopy(locale: string): HomeSpreadsheetPromoCopy {
  const lc = locale as RouteLocale;
  return byLocale[lc] ?? byLocale.en;
}
