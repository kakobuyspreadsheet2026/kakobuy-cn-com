import type { RouteLocale } from '../config';

/** Tokens replaced in `hydrateNewsCopy`: `{guideUrl}` `{buyerUrl}` `{howToUrl}` `{kakobuyHomeUrl}` `{homeCuratedUrl}` `{mlCatalogUrl}` `{carouselTap0}` … `{carouselTap5}` `{kakobuyIssueUrl}` `{count}` (`carouselTap*` from `homeCategoryBannerTapUrls(locale)`). */
export type NewsActivityItem = {
  title: string;
  pillVariant: 'internal' | 'external';
  pillText: string;
  bodyHtml: string;
  moreHtml: string;
};

export type NewsOfficialBlock = {
  badge: string;
  faqHubLabel: string;
  metaHtml: string;
  sourcePageLabel: string;
};

export type NewsCopy = {
  title: string;
  description: string;
  keywords: string;
  backHomeLabel: string;
  h1: string;
  topIntroHtml: string;
  featuredBannerHeading: string;
  featuredBannerIntroHtml: string;
  activityHeading: string;
  activityIntroHtml: string;
  activityItems: NewsActivityItem[];
  official: NewsOfficialBlock;
  stepsHeading: string;
  stepListItemsHtml: string[];
  tipsHeading: string;
  tipListItemsHtml: string[];
  disclaimerHtml: string;
  howToSchema: {
    name: string;
    description: string;
    step: { name: string; text: string }[];
  };
};

const K_HELP_HUB = 'https://kakobuy.com/';

export function hydrateNewsCopy(
  raw: NewsCopy,
  urls: {
    guideUrl: string;
    buyerUrl: string;
    howToUrl: string;
    kakobuyHomeUrl: string;
    homeCuratedUrl: string;
    mlCatalogUrl: string;
    excerptCount: number;
    /** Same six URLs as `homeCategoryBannerTapUrls(locale)` — card CTAs mirror carousel taps. */
    carouselTapUrls: readonly [string, string, string, string, string, string];
  },
): NewsCopy {
  const taps = urls.carouselTapUrls;
  const map: Record<string, string> = {
    '{guideUrl}': urls.guideUrl,
    '{buyerUrl}': urls.buyerUrl,
    '{howToUrl}': urls.howToUrl,
    '{kakobuyHomeUrl}': urls.kakobuyHomeUrl,
    '{homeCuratedUrl}': urls.homeCuratedUrl,
    '{mlCatalogUrl}': urls.mlCatalogUrl,
    '{carouselTap0}': taps[0],
    '{carouselTap1}': taps[1],
    '{carouselTap2}': taps[2],
    '{carouselTap3}': taps[3],
    '{carouselTap4}': taps[4],
    '{carouselTap5}': taps[5],
    '{kakobuyIssueUrl}': K_HELP_HUB,
    '{count}': String(urls.excerptCount),
  };

  function sub(html: string) {
    let o = html;
    for (const [k, v] of Object.entries(map)) {
      o = o.split(k).join(v);
    }
    return o;
  }

  const activityItems = raw.activityItems.map((it) => ({
    ...it,
    bodyHtml: sub(it.bodyHtml),
    moreHtml: sub(it.moreHtml),
  }));

  let officialMeta = raw.official.metaHtml.replaceAll('{count}', String(urls.excerptCount));
  officialMeta = officialMeta.split('{kakobuyIssueUrl}').join(K_HELP_HUB);

  return {
    ...raw,
    topIntroHtml: sub(raw.topIntroHtml),
    featuredBannerIntroHtml: sub(raw.featuredBannerIntroHtml),
    activityIntroHtml: sub(raw.activityIntroHtml),
    activityItems,
    official: { ...raw.official, metaHtml: officialMeta },
    stepListItemsHtml: raw.stepListItemsHtml.map(sub),
    tipListItemsHtml: raw.tipListItemsHtml.map(sub),
    disclaimerHtml: sub(raw.disclaimerHtml),
  };
}

const en: NewsCopy = {
  title: 'Kakobuy Spreadsheet desk — buyer notes, mirrored notices & paste-to-agent primers | kakobuy-cn.com',
  description:
    'Editorial briefing for Kakobuy Spreadsheet shoppers: how the paste path fits together, warehouse QC framing, freight realities, mirrored Kakobuy notices for context, and agent walk-throughs you can read offline—billing and parcels still happen only on kakobuy.com.',
  keywords:
    'Kakobuy spreadsheet briefing, Spreadsheet catalogue primer, mirrored Kakobuy FAQ snippets, warehouse QC photography, FashionReps spreadsheet freight primer, shopping agent paste workflow, Kakobuy Spreadsheet news desk',
  backHomeLabel: '← Back to home',
  h1: 'News & guides',
  topIntroHtml: `Need the playbook spelled out? Start with the <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">Kakobuy Spreadsheet buying guide</a>. Want crowd timelines? <a href="{buyerUrl}">Buyer shares</a> collects haul stories and transit anecdotes. Service fees, surcharges, and courier roster churn constantly—your signed-in <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a> console is the tie-breaker. kakobuy-cn.com never rings up a cart; you settle invoices through Kakobuy itself.`,
  featuredBannerHeading: 'Promo carousel, decoded',
  featuredBannerIntroHtml: `It is the same rotating strip you see after <a href="{homeCuratedUrl}">homepage → Explore categories</a>. A few chips land on explainers hosted here; the remainder deep-link to <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a> or jump straight into <a href="{mlCatalogUrl}" target="_blank" rel="noopener noreferrer">the Spreadsheet catalogue</a> in a fresh tab. Creative assets, headlines, and perk copy remain the property of whoever ran the campaign.`,
  activityHeading: 'Carousel slides, decoded',
  activityIntroHtml: `Each card pairs one homepage carousel creative with its explainer—<strong>same order as Explore categories on the home page</strong>. Prize maths, budgets, and deadlines always defer to <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">live Kakobuy announcements</a>.`,
  activityItems: [
    {
      title: 'Discord · free gifts & lucky draw',
      pillVariant: 'external',
      pillText: 'Opens Discord invite',
      bodyHtml: `<p>The bright “JOIN FREE GIFT &amp; LUCKY DRAW” tile steers shoppers toward Kakobuy’s Discord community—drops and raffle framing typically land there first. Treat perks as aspirational until Kakobuy or Discord publish eligibility rules.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap0}" target="_blank" rel="noopener noreferrer">Open Discord invite ↗</a></p>`,
    },
    {
      title: 'New registration · “3000” bonus teaser',
      pillVariant: 'external',
      pillText: 'Opens Kakobuy',
      bodyHtml: `<p>The REGISTER artwork spotlights a headline <strong>3000</strong> bundle—whether points, vouchers, or wallet credits is defined only inside Kakobuy’s signup funnel. Nothing on kakobuy-cn.com mints that balance.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap1}" target="_blank" rel="noopener noreferrer">Open Kakobuy signup hub ↗</a></p>`,
    },
    {
      title: 'Spring Super Sale · May 08–31',
      pillVariant: 'internal',
      pillText: 'Recap on kakobuy-cn.com',
      bodyHtml: `<p>Pastel SUPER SPECIAL OFFER / BIG SALE artwork with an on-banner calendar band reading <strong>May 08–31</strong>. Markdown ladders, coupon stacking, and SKU eligibility ship strictly through Kakobuy’s seasonal promo rails.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap2}">May promotions detail page →</a></p>`,
    },
    {
      title: 'Invite friends · referral cash prizes',
      pillVariant: 'external',
      pillText: 'Opens Maison Looks',
      bodyHtml: `<p>Festive “INVITE FRIENDS · CLAIM HUGE CASH PRIZES” creative—referral thresholds, payout tiers, and clawback clauses live exclusively inside Kakobuy’s referral tooling.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap3}" target="_blank" rel="noopener noreferrer">Open Maison Looks hub ↗</a></p>`,
    },
    {
      title: 'Share & Earn BIG',
      pillVariant: 'external',
      pillText: 'Opens Maison Looks',
      bodyHtml: `<p>Gold-coin SHARE &amp; EARN BIG banner—usually tied to Kakobuy’s social-share bounty programmes. Submission proofs, caps, and reversal policies appear only in Kakobuy campaign collateral.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap4}" target="_blank" rel="noopener noreferrer">Open Maison Looks hub ↗</a></p>`,
    },
    {
      title: 'How To Buy · onboarding banner',
      pillVariant: 'internal',
      pillText: 'Guide on kakobuy-cn.com',
      bodyHtml: `<p>Colourful HOW TO BUY artwork mirrors Kakobuy’s onboarding funnel. Pair it with our <strong>Kakobuy Spreadsheet</strong> walk-through here while remembering checkout and wallet debits stay on Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap5}">How to buy guide →</a></p>`,
    },
  ],
  official: {
    badge: 'Official excerpts sampler · Kakobuy',
    faqHubLabel: 'Kakobuy support hub ↗',
    metaHtml: `These accordions replay Kakobuy service notices mirrored here for offline reading. Everything loads collapsed—expand a heading to read the archived wording. When copy conflicts arise, rely on <a href="{kakobuyIssueUrl}" target="_blank" rel="noopener noreferrer">Kakobuy’s live help centre</a>. <strong>{count}</strong> snippets are archived below.`,
    sourcePageLabel: 'Canonical page ↗',
  },
  stepsHeading: 'Field guide',
  stepListItemsHtml: [
    `<strong>Pick a curated lane.</strong> From the <a href="{homeCuratedUrl}">homepage category mosaic</a>, choose the wardrobe lane you care about. Each shortcut opens the right Kakobuy Spreadsheet browse or search surface in another tab.`,
    `<strong>Land on a SKU page.</strong> Open a listing whose variant grid, measurement callouts, and photography still feel trustworthy. Storefront splash pages without a specific SKU rarely survive later disputes.`,
    `<strong>Capture the canonical URL.</strong> Copy the full marketplace address from the product listing—or any share flow that still resolves to that exact SKU—not a static screenshot gallery.`,
    `<strong>Feed Kakobuy the link.</strong> On <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">kakobuy.com</a>, drop the URL into the paste slot your workflow exposes, then double-check size, colourway, and quantity before authorising domestic spend.`,
    `<strong>Fund the order on Kakobuy.</strong> Their warehouse routing, add-on services, and domestic haul costs apply—nothing on kakobuy-cn.com substitutes for that ledger.`,
    `<strong>QC before you green-light exports.</strong> When inbound photography lands, treat it as binding evidence: flag mismatches with the agent <em>before</em> you accept an international label.`,
    `<strong>Book the outbound line consciously.</strong> Match the courier to your risk tolerance and budget, then remember DIM weight on bulky sneakers, puffers, or gadgets—spreadsheet list prices almost never include the all-in door-to-door ticket.`,
  ],
  tipsHeading: 'Reality checks',
  tipListItemsHtml: [
    `Stack this desk with <a href="{howToUrl}">How to buy</a> whenever you want literal UI choreography next to the excerpts.`,
    `Your spreadsheet columns—batch chatter, CNY cells, QC hyperlinks—remain your private scratchpad even when browsing starts in the spreadsheet browse.`,
    `Only Kakobuy’s checkout can quote live freight or capture payments; our pages never touch ledgers or courier APIs.`,
  ],
  disclaimerHtml: `<strong>Disclaimer:</strong> Editorial distillation only. Enforcement on prohibited goods, refunds, duties, and carrier liability sits with Kakobuy, marketplaces, couriers, and your local regulators—re-verify every listing before you spend.`,
  howToSchema: {
    name: 'From Spreadsheet browse to Kakobuy purchase: a seven-step paste ritual',
    description:
      'Walk the spreadsheet catalogue rails, harvest a durable marketplace link, hand it to Kakobuy, interrogate warehouse photography, and only then commit to international shipping with realistic landed math.',
    step: [
      {
        name: 'Choose a category entry',
        text: 'On kakobuy-cn.com’s homepage, pick the category chip that aligns with your hunt—each opens the paired Spreadsheet catalogue route in a separate tab.',
      },
      {
        name: 'Open the listing you intend to buy',
        text: 'Inside the browse chrome, load the product detail view and reconcile variant descriptors, galleries, and any batch annotations before touching the URL.',
      },
      {
        name: 'Copy a stable listing URL',
        text: 'Grab the complete address that resolves to the SKU you reviewed—avoid image CDNs, album-only pages, or shortened redirects that silently swap inventory.',
      },
      {
        name: 'Paste into Kakobuy’s intake',
        text: 'Authenticate on kakobuy.com, launch their paste-to-buy flow, insert the link, and lock every selector the listing demanded.',
      },
      {
        name: 'Pay domestically and wait for inbound scans',
        text: 'Complete Kakobuy’s charge step; their logistics partners handle the domestic leg up to the photography bench.',
      },
      {
        name: 'Audit warehouse QC imagery',
        text: 'When Kakobuy publishes QC shots, pixel-peep panel alignment, hue drift, logos, and sizing aids prior to approving any export line.',
      },
      {
        name: 'Ship home with eyes open',
        text: 'Pick the international service class, settle freight, and monitor tracking—your landed receipt should include duties, service fees, and volumetric adjustments, not just the spreadsheet cell.',
      },
    ],
  },
};

const de: NewsCopy = {
  title: 'Kakobuy Spreadsheet Redaktion — Hintergrundnotizen, Kakobuy-Spiegel & Paste-Primers | kakobuy-cn.com',
  description:
    'Unabhängiger Schreibtisch für Nutzer von Spreadsheet-Katalog und Kakobuy: wie Copy-Paste-Flows zusammenspielen, welche Lager-QC bedeutet, welche Fracht-Realitäten drohen, plus gespiegelte Kakobuy-Hinweise und Brokertipps nur zum Lesen — gebucht wird weiterhin exklusiv auf kakobuy.com.',
  keywords:
    'Kakobuy Spreadsheet Redaktion, Spreadsheet-Katalog-Primer, gespiegelte Kakobuy FAQ, Lagerfotografie QC, FashionReps Fracht Realismus, Agent Paste Workflow, Spreadsheet Newsdesk',
  backHomeLabel: '← Zur Startseite',
  h1: 'News & Anleitungen',
  topIntroHtml: `Ausführliche Anleitung? Starte beim <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">Kakobuy Spreadsheet Einkaufsguide</a>. Community-Ton und Zeitachsen findest du unter <a href="{buyerUrl}">Käufer-Stimmen</a>. Zuschläge, Dienstleistungsgebühren und Kurierportfolios wechseln ständig — dein eingeloggtes <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a>-Backend entscheidet Streitfragen. kakobuy-cn.com führt keinen Warenkorb; Rechnungen begleichst du bei Kakobuy.`,
  featuredBannerHeading: 'Promo-Karussell erklärt',
  featuredBannerIntroHtml: `Identisch zum Banner nach <a href="{homeCuratedUrl}">Startseite → Kategorien erkunden</a>. Manche Chips verlinken Erklärertexte hier; andere springen zu <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a> oder öffnen <a href="{mlCatalogUrl}" target="_blank" rel="noopener noreferrer">den Spreadsheet-Katalog</a> in einem neuen Tab. Key-Visuals, Headlines und Prämien-Copy bleiben beim jeweiligen Kampagnenteam.`,
  activityHeading: 'Karussell-Slides erklärt',
  activityIntroHtml: `Jede Karte zeigt ein Karussell-Motiv von der Startseite mit der passenden Erläuterung — <strong>gleiche Reihenfolge wie bei „Kategorien erkunden“</strong>. Budgets, Fristen und Teilnahmeregeln entscheiden immer nur die <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">aktuellen Kakobuy-Meldungen</a>.`,
  activityItems: [
    {
      title: 'Discord · Free Gift & Lucky Draw',
      pillVariant: 'external',
      pillText: 'Öffnet Discord-Einladung',
      bodyHtml: `<p>Das knallblaue „JOIN FREE GIFT &amp; LUCKY DRAW“-Motiv lenkt zur Kakobuy-Discord-Community — Drops und Lose sind dort dokumentiert. Vorteile gelten erst, wenn Kakobuy oder Discord sie konkret beschreiben.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap0}" target="_blank" rel="noopener noreferrer">Discord-Einladung öffnen ↗</a></p>`,
    },
    {
      title: 'Neuregistrierung · „3000“-Bonus',
      pillVariant: 'external',
      pillText: 'Öffnet Kakobuy',
      bodyHtml: `<p>Das REGISTER-Visual wirbt mit einer <strong>3000</strong>-Einlage — ob Punkte, Coupons oder Wallet-Guthaben nur Kakobuy in seinem Sign-up-Flow definiert. kakobuy-cn.com schreibt keine Kontostände gut.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap1}" target="_blank" rel="noopener noreferrer">Zum Kakobuy-Onboarding ↗</a></p>`,
    },
    {
      title: 'Spring Super Sale · 08.–31. Mai',
      pillVariant: 'internal',
      pillText: 'Zusammenfassung auf kakobuy-cn.com',
      bodyHtml: `<p>Pastellfarbenes SUPER SPECIAL OFFER / BIG SALE-Motiv mit Datumsband <strong>08.–31. MAI</strong>. SKU-Zugehörigkeit, Rabattstaffeln und Coupon-Stapel nur über Kakobuys saisonale Promo-Oberfläche.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap2}">Detailseite Mai-Promos →</a></p>`,
    },
    {
      title: 'Freunde einladen · Referral-Cash',
      pillVariant: 'external',
      pillText: 'Öffnet Maison Looks',
      bodyHtml: `<p>Festliches „INVITE FRIENDS · CLAIM HUGE CASH PRIZES“ — Schwellen, Auszahlungsplan und Rückbuchungen liegen ausschließlich im Kakobuy-Referral-Tool.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap3}" target="_blank" rel="noopener noreferrer">Maison-Looks-Hub öffnen ↗</a></p>`,
    },
    {
      title: 'Share & Earn BIG',
      pillVariant: 'external',
      pillText: 'Öffnet Maison Looks',
      bodyHtml: `<p>Gold-Glitzer SHARE &amp; EARN BIG — typischerweise Social-Share-Bounties mit Kakobuy-Regeln zu Caps und Nachweisen.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap4}" target="_blank" rel="noopener noreferrer">Maison-Looks-Hub öffnen ↗</a></p>`,
    },
    {
      title: 'How To Buy · Onboarding-Banner',
      pillVariant: 'internal',
      pillText: 'Guide auf kakobuy-cn.com',
      bodyHtml: `<p>Das farbenfrohe HOW TO BUY-Motiv spiegelt Kakobuy-Onboarding. Ergänze es mit unserem <strong>Kakobuy Spreadsheet</strong>-Walkthrough hier — bezahlen bleibt dennoch nur bei Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap5}">Leitfaden So kaufen →</a></p>`,
    },
  ],
  official: {
    badge: 'Offizielle Kakobuy-Auszüge (Sampler)',
    faqHubLabel: 'Kakobuy Hilfe-Center live ↗',
    metaHtml: `Diese Accordions wiederholen Kakobuy-Service-Hinweise hier nur zum offline Lesen. Standardmäßig zugeklappt — Titel anklicken, um den archivierten Fließtext zu sehen. Bei Widersprüchen gilt <a href="{kakobuyIssueUrl}" target="_blank" rel="noopener noreferrer">Kakobuys Live-Help</a>. <strong>{count}</strong> Snippets liegen unten.`,
    sourcePageLabel: 'Kanonische Quellseite ↗',
  },
  stepsHeading: 'Praxisleitfaden',
  stepListItemsHtml: [
    `<strong>Curated Lane wählen.</strong> Im <a href="{homeCuratedUrl}">Kategorien-Mosaik</a> die Wardrobe-Spur markieren, die passt — jeder Shortcut öffnet die passende Spreadsheet-Browse-/Suchansicht im zweiten Tab.`,
    `<strong>SKU-Detailseite öffnen.</strong> Nimm ein Listing, dessen Variantenmatrix, Maßtabellen und Bilder noch vertrauenswürdig wirken. Reine Shop-Startseiten ohne konkrete SKU überstehen später kaum Reklamationen.`,
    `<strong>Kanonische URL sichern.</strong> Kopiere die vollständige Marktplatzadresse von der Produktseite — oder einen Teilen-Link, der garantiert auf genau dieses Produkt zeigt, keine reine Screenshot-Galerie.`,
    `<strong>Link an Kakobuy übergeben.</strong> Auf <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">kakobuy.com</a> im Paste-Slot deines Workflows einfügen, dann Größe, Farbcode und Stückzahl gegen das Listing spiegeln, bevor du Inlandskosten freigibst.`,
    `<strong>Bezahlung nur im Kakobuy-ledger.</strong> Warehouse-Routing, Add-ons und Inlandstransit folgen deren Regeln — nicht diesem Hub.`,
    `<strong>Vor Export-Clearance QC lesen.</strong> Sobald Inbound-Fotos da sind, gilt das als Beweisstandard: Abweichungen mit Agent klären <em>bevor</em> du ein internationales Label nimmst.`,
    `<strong>Outbound-Linie bewusst buchen.</strong> Courier zum Risikoappetit wählen und DIM-Gewicht bei chunky Sneakern, Daunen oder Gadgets merken — Spreadsheet-Spaltenpreise sind selten der Door-to-Door-Beleg.`,
  ],
  tipsHeading: 'Realitätschecks',
  tipListItemsHtml: [
    `Kombiniere diesen Schreibtisch mit <a href="{howToUrl}">So kaufen</a>, wenn du Klick-für-Klick neben den Auszügen willst.`,
    `Deine Spreadsheet-Spalten — Batch-Chatter, CNY-Zellen, QC-Hyperlinks — bleiben dein privates Notizbuch, auch wenn Discovery im Spreadsheet-Katalog startet.`,
    `Nur Kakobuys Checkout liefert Live-Fracht oder nimmt Zahlungen an; unsere Seite spricht nie Carrier-APIs oder Ledger an.`,
  ],
  disclaimerHtml: `<strong>Hinweis:</strong> Redaktionelle Zusammenfassung. Durchsetzung bei Verbotenen, Rückerstattung, Zoll und Haftung liegt bei Kakobuy, Marktplätzen, Frachtführern und deinen Behörden — jedes Listing vor Outlay doppelt prüfen.`,
  howToSchema: {
    name: 'Vom Spreadsheet-Browse zum Kakobuy-Kauf: ein siebenstufiges Paste-Ritual',
    description:
      'Spreadsheet-Katalogschienen abwandern, stabilen Marktplatzlink ernten, Kakobuy füttern, Lagerfotografie zerlegen und erst dann international buchen — mit realistischer Landed-Math.',
    step: [
      {
        name: 'Kategorieeinstieg wählen',
        text: 'Pill auf kakobuy-cn.com antippen — jeder Chip öffnet die passende Spreadsheet-Strecke in neuem Tab.',
      },
      {
        name: 'Das Listing öffnen, das du wirklich willst',
        text: 'Im Browse-Chrome die Produktdetailansicht laden und Variantentexte, Galerie, Batch-Hinweise gegenlesen, bevor du die URL anfasst.',
      },
      {
        name: 'Stabile Listing-URL kopieren',
        text: 'Ganze Adresse erfassen, die nach Review noch exakt dieselbe SKU zeigt — keine Bild-CDNs, keine Album-only Pages, keine Silent-Redirects.',
      },
      {
        name: 'In Kakobuys Intake einfügen',
        text: 'Einloggen, Paste-to-buy starten, Link setzen und jede Option bestätigen, die das Listing forderte.',
      },
      {
        name: 'Inland bezahlen und Scans abwarten',
        text: 'Kakobuy-Abrechnung abschließen; domestische Etappen bis zur Foto-Bank laufen über deren Netzwerk.',
      },
      {
        name: 'Warehouse-QC pixeln',
        text: 'Sobald Kakobuy QC veröffentlicht: Paneele, Farbdrift, Logos und Größenhilfen prüfen, bevor Export freigegeben wird.',
      },
      {
        name: 'Mit offenen Augen nach Hause shipen',
        text: 'Internationalen Service wählen, Fracht tilgen, Tracking beobachten — der Landed-Beleg enthält Gebühren, Volumen und Zoll, nicht bloß die Tabellenzeile.',
      },
    ],
  },
};

const pt: NewsCopy = {
  title: 'Mesa editorial Kakobuy Spreadsheet — notas de compradores, espelhos Kakobuy e primers “copiar e colar” | kakobuy-cn.com',
  description:
    'Briefing independente para quem usa spreadsheet e Kakobuy: encaixe do fluxo de links, leitura de QC no armazém, frete sem romantizar, avisos Kakobuy espelhados e tutoriais de agente só para consulta — faturamento e encomendas continuam exclusivamente em kakobuy.com.',
  keywords:
    'mesa editorial Kakobuy Spreadsheet, primer catálogo spreadsheet, FAQ Kakobuy espelhada, fotografia QC armazém, frete realista FashionReps, fluxo paste agente, newsdesk spreadsheet',
  backHomeLabel: '← Voltar ao início',
  h1: 'Notícias & guias',
  topIntroHtml: `Quer o manual completo? Abra o <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">guia de compra Kakobuy Spreadsheet</a>. Para voz de comunidade e cronologias, use <a href="{buyerUrl}">Voz dos compradores</a>. Taxas de serviço, sobretaxas e linhas de courier mudam sem aviso — o console <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a> autenticado é quem desempata. kakobuy-cn.com não abre carrinho; você liquida tudo dentro da Kakobuy.`,
  featuredBannerHeading: 'Carrossel promocional, traduzido',
  featuredBannerIntroHtml: `É a mesma faixa dinâmica que aparece depois de <a href="{homeCuratedUrl}">home → Explorar categorias</a>. Alguns chips levam a explicadores hospedados aqui; outros saltam para <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a> ou abrem <a href="{mlCatalogUrl}" target="_blank" rel="noopener noreferrer">o catálogo Spreadsheet</a> noutro separador. Criativos, headlines e cópia de benefícios pertencem a cada campanha.`,
  activityHeading: 'Slides do carrossel explicados',
  activityIntroHtml: `Cada cartão junta um criativo do carrossel da página inicial à sua explicação — <strong>a mesma ordem da faixa «Explorar categorias»</strong>. Regras, prémios e calendários valem apenas o que a <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy publicar ao vivo</a>.`,
  activityItems: [
    {
      title: 'Discord · Free Gift & Lucky Draw',
      pillVariant: 'external',
      pillText: 'Abre convite Discord',
      bodyHtml: `<p>O azul vivo “JOIN FREE GIFT &amp; LUCKY DRAW” encaminha para a comunidade Discord da Kakobuy — sorteios e ofertas comunitárias costumam ser detalhados lá. Trate benefícios como promessa apenas depois de Kakobuy/Discord publicarem critérios.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap0}" target="_blank" rel="noopener noreferrer">Abrir convite Discord ↗</a></p>`,
    },
    {
      title: 'Registo novo · bónus “3000”',
      pillVariant: 'external',
      pillText: 'Abre Kakobuy',
      bodyHtml: `<p>O criativo REGISTER destaca um pacote <strong>3000</strong> — pontos, cupões ou créditos são definidos só no onboarding Kakobuy. kakobuy-cn.com não credita carteiras.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap1}" target="_blank" rel="noopener noreferrer">Hub de registo Kakobuy ↗</a></p>`,
    },
    {
      title: 'Spring Super Sale · 08–31 maio',
      pillVariant: 'internal',
      pillText: 'Resumo em kakobuy-cn.com',
      bodyHtml: `<p>Arte pastel SUPER SPECIAL OFFER / BIG SALE com faixa <strong>08–31 MAY</strong>. SKUs elegíveis, descontos e stacking de vouchers ficam nas promoções sazonais Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap2}">Página da promoção de maio →</a></p>`,
    },
    {
      title: 'Convidar amigos · prémios em dinheiro',
      pillVariant: 'external',
      pillText: 'Abre Maison Looks',
      bodyHtml: `<p>Festa “INVITE FRIENDS · CLAIM HUGE CASH PRIZES” — limiares de referral, tabela de pagamento e reversões moram na ferramenta Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap3}" target="_blank" rel="noopener noreferrer">Abrir hub Maison Looks ↗</a></p>`,
    },
    {
      title: 'Share & Earn BIG',
      pillVariant: 'external',
      pillText: 'Abre Maison Looks',
      bodyHtml: `<p>O SHARE &amp; EARN BIG dourado liga-se a campanhas de partilha social da Kakobuy; tetos e provas exigidas aparecem nos materiais oficiais.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap4}" target="_blank" rel="noopener noreferrer">Abrir hub Maison Looks ↗</a></p>`,
    },
    {
      title: 'How To Buy · banner de onboarding',
      pillVariant: 'internal',
      pillText: 'Guia em kakobuy-cn.com',
      bodyHtml: `<p>O criativo HOW TO BUY ecoa o onboarding Kakobuy. Combine com o walkthrough <strong>Kakobuy Spreadsheet</strong> aqui — checkout permanece só na Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap5}">Guia Como comprar →</a></p>`,
    },
  ],
  official: {
    badge: 'Amostra de excertos oficiais · Kakobuy',
    faqHubLabel: 'Central de ajuda Kakobuy ↗',
    metaHtml: `Estes acordeões repetem avisos de serviço Kakobuy espelhados só para leitura offline. Tudo chega recolhido — expanda o título para ver o texto arquivado. Em conflito textual, manda a <a href="{kakobuyIssueUrl}" target="_blank" rel="noopener noreferrer">ajuda Kakobuy ao vivo</a>. <strong>{count}</strong> recortes estão abaixo.`,
    sourcePageLabel: 'Página canónica ↗',
  },
  stepsHeading: 'Guia de campo',
  stepListItemsHtml: [
    `<strong>Escolha um corredor curado.</strong> No <a href="{homeCuratedUrl}">mosaico de categorias</a>, aponte o segmento de guarda-roupa certo — cada atalho abre a vista Spreadsheet adequada noutro separador.`,
    `<strong>Aterre numa página SKU.</strong> Prefira anúncios cuja grelha de variantes, tabelas métricas e fotos ainda inspiram confiança. Homes genéricas sem SKU concreto falham em disputas.`,
    `<strong>Capture o URL canónico.</strong> Copie o endereço completo do marketplace a partir da página do produto — ou um fluxo de partilha que ainda abra exactamente o mesmo SKU, não uma galeria estática.`,
    `<strong>Alimente a Kakobuy com o link.</strong> Em <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">kakobuy.com</a>, largue o URL na ranhura de paste do fluxo e confirme tamanho, cor e quantidade antes de autorizar despesas domésticas.`,
    `<strong>Pague só na folha Kakobuy.</strong> Roteamento de armazém, add-ons e haul nacional seguem as regras dela — não deste hub.`,
    `<strong>QC antes de autorizar exportações.</strong> Quando chegarem fotos inbound, trate-as como prova vinculativa: abra ticket com o agente <em>antes</em> de aceitar etiqueta internacional.`,
    `<strong>Reserve courier com consciência.</strong> Escolha serviço alinhado ao risco e orçamento e lembre peso cubado em sapatos volumosos, casacos felpudos ou gadgets — células de planilha raramente mostram o recibo porta-a-porta.`,
  ],
  tipsHeading: 'Checagens de realidade',
  tipListItemsHtml: [
    `Empilhe esta mesa com <a href="{howToUrl}">Como comprar</a> quando quiser cliques literais ao lado dos excertos.`,
    `As suas colunas de planilha — gossip de batch, yuan, hiperligações QC — continuam o seu caderno privado mesmo quando a descoberta começa no catálogo indexado.`,
    `Só o checkout Kakobuy obtém frete em tempo real ou captura pagamentos; estas páginas nunca tocam em APIs de transportadora.`,
  ],
  disclaimerHtml: `<strong>Aviso:</strong> destilação editorial. Fiscalização de produtos proibidos, reembolsos, alfândega e responsabilidade de transporte fica com Kakobuy, marketplaces, transportadoras e reguladores locais — revalide cada anúncio antes de gastar.`,
  howToSchema: {
    name: 'Do browse Spreadsheet à compra Kakobuy: ritual de colagem em sete passos',
    description:
      'Percorra as linhas do catálogo indexado, colha um link de marketplace durável, entregue-o à Kakobuy, desmonte fotografias de armazém e só depois feche envio internacional com matemática landed realista.',
    step: [
      {
        name: 'Escolha uma entrada de categoria',
        text: 'Toque a pill certa em kakobuy-cn.com — cada chip abre o par Spreadsheet noutro separador.',
      },
      {
        name: 'Abra o listing que pretende comprar',
        text: 'Dentro do cromado de browse, carregue a vista detalhada e confronte variantes, galeria e notas de batch antes de tocar no URL.',
      },
      {
        name: 'Copie URL de listing estável',
        text: 'Guarde o endereço completo que, após revisão, ainda aponta à mesma SKU — evite CDNs de imagem, páginas só-álbum ou redirects silenciosos.',
      },
      {
        name: 'Cole no intake Kakobuy',
        text: 'Autentique-se, arranque o fluxo colar‑para‑comprar, insira o link e bloqueie cada selector que o anúncio exigia.',
      },
      {
        name: 'Pague doméstica e espere scans',
        text: 'Conclua a cobrança Kakobuy; o trecho nacional até ao banco fotográfico roda na rede deles.',
      },
      {
        name: 'Audite QC pixel a pixel',
        text: 'Assim que a Kakobuy publicar QC, inspecione painéis, deriva de cor, logotipos e auxiliares de medida antes de liberar exportação.',
      },
      {
        name: 'Envie para casa de olhos abertos',
        text: 'Escolha classe internacional, quite frete, acompanhe tracking — o recibo landed inclui taxas, volume e deveres, não só a célula da folha.',
      },
    ],
  },
};

const es: NewsCopy = {
  title: 'Mesa editorial Kakobuy Spreadsheet — contexto para compradores, avisos espejo y pasos “copiar y pegar” | kakobuy-cn.com',
  description:
    'Briefing independiente si usas spreadsheet con Kakobuy: encaje del flujo de enlaces, lectura realista de QC en almacén, honestidad sobre flete, extractos espejo de Kakobuy y tutoriales de agente solo para consulta; el cobro sigue exclusivamente en kakobuy.com.',
  keywords:
    'mesa editorial Kakobuy Spreadsheet, primer catálogo spreadsheet, FAQ Kakobuy espejada, fotografía QC almacén, flete realista FashionReps, flujo paste agente, newsdesk spreadsheet',
  backHomeLabel: '← Volver al inicio',
  h1: 'Noticias y guías',
  topIntroHtml: `¿Necesitas el manual completo? Empieza por la <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">guía de compra Kakobuy Spreadsheet</a>. Para voz de comunidad y cronologías revisa <a href="{buyerUrl}">Historias de compradores</a>. Comisiones, recargos y ofertas de courier saltan sin aviso — la consola <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a> iniciada desempata. kakobuy-cn.com no abre caja; liquidas dentro de Kakobuy.`,
  featuredBannerHeading: 'Carrusel promocional, traducido',
  featuredBannerIntroHtml: `Es la misma tira dinámica que ves tras <a href="{homeCuratedUrl}">inicio → Explorar categorías</a>. Varios chips apuntan a traducciones alojadas aquí; otros te lanzan a <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a> o a <a href="{mlCatalogUrl}" target="_blank" rel="noopener noreferrer">el catálogo Spreadsheet</a> en otra pestaña. Creatividad, titulares y copy de beneficios son de cada campaña.`,
  activityHeading: 'Diapositivas del carrusel explicadas',
  activityIntroHtml: `Cada tarjeta une un creativo del carrusel de la página de inicio con su texto — <strong>el mismo orden que «Explorar categorías»</strong>. Premios y calendarios solo cuentan lo que <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy publique en vivo</a>.`,
  activityItems: [
    {
      title: 'Discord · Free Gift & Lucky Draw',
      pillVariant: 'external',
      pillText: 'Abre invitación Discord',
      bodyHtml: `<p>El azul brillante “JOIN FREE GIFT &amp; LUCKY DRAW” dirige al Discord de Kakobuy — sorteos y drops suelen detallarse allí. Considera ventajas válidas solo cuando Kakobuy o Discord publiquen bases.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap0}" target="_blank" rel="noopener noreferrer">Abrir invitación Discord ↗</a></p>`,
    },
    {
      title: 'Registro nuevo · bono “3000”',
      pillVariant: 'external',
      pillText: 'Abre Kakobuy',
      bodyHtml: `<p>El creativo REGISTER celebra un paquete <strong>3000</strong> — puntos, cupones o créditos solo Kakobuy los define en su alta de usuario. kakobuy-cn.com no acredita saldos.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap1}" target="_blank" rel="noopener noreferrer">Hub de registro Kakobuy ↗</a></p>`,
    },
    {
      title: 'Spring Super Sale · 08–31 mayo',
      pillVariant: 'internal',
      pillText: 'Resumen en kakobuy-cn.com',
      bodyHtml: `<p>Arte pastel SUPER SPECIAL OFFER / BIG SALE con banda <strong>08–31 MAY</strong>. SKUs incluidos, descuentos y combinación de cupones están solo en las campañas Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap2}">Detalle de la promo de mayo →</a></p>`,
    },
    {
      title: 'Invitar amigos · premios en efectivo',
      pillVariant: 'external',
      pillText: 'Abre Maison Looks',
      bodyHtml: `<p>Campaña festiva “INVITE FRIENDS · CLAIM HUGE CASH PRIZES” — umbrales de referidos, tabla de pagos y revertidos solo en el centro Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap3}" target="_blank" rel="noopener noreferrer">Abrir hub Maison Looks ↗</a></p>`,
    },
    {
      title: 'Share & Earn BIG',
      pillVariant: 'external',
      pillText: 'Abre Maison Looks',
      bodyHtml: `<p>Banner dorado SHARE &amp; EARN BIG ligado a incentivos de compartir en redes; límites y pruebas están en la legal Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap4}" target="_blank" rel="noopener noreferrer">Abrir hub Maison Looks ↗</a></p>`,
    },
    {
      title: 'How To Buy · banner introductorio',
      pillVariant: 'internal',
      pillText: 'Guía en kakobuy-cn.com',
      bodyHtml: `<p>El HOW TO BUY multicolor refleja el onboarding Kakobuy. Combínalo con nuestra guía <strong>Kakobuy Spreadsheet</strong> aquí — el cobro sigue solo en Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap5}">Guía Cómo comprar →</a></p>`,
    },
  ],
  official: {
    badge: 'Muestra de extractos oficiales · Kakobuy',
    faqHubLabel: 'Centro de ayuda Kakobuy ↗',
    metaHtml: `Estos acordeones repiten avisos Kakobuy espejados solo para leer offline. Llegan plegados — expande el título para ver el texto archivado. Si choca el copy, manda la <a href="{kakobuyIssueUrl}" target="_blank" rel="noopener noreferrer">ayuda Kakobuy en vivo</a>. Hay <strong>{count}</strong> recortes debajo.`,
    sourcePageLabel: 'Página canónica ↗',
  },
  stepsHeading: 'Guía de campo',
  stepListItemsHtml: [
    `<strong>Elige un corredor curado.</strong> En el <a href="{homeCuratedUrl}">mosaico de categorías</a> marca el vertical de armario que te interesa — cada atajo abre la vista Spreadsheet adecuada en otra pestaña.`,
    `<strong>Aterriza en página SKU.</strong> Prioriza anuncios cuya rejilla de variantes, tablas de medida y fotos aún inspiren confianza. Una home genérica sin SKU concreto revienta reclamaciones.`,
    `<strong>Captura el URL canónico.</strong> Copia la dirección completa del marketplace desde la ficha del producto — o un enlace compartido que siga resolviendo exactamente el mismo SKU, no una galería estática.`,
    `<strong>Alimenta Kakobuy con el enlace.</strong> En <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">kakobuy.com</a> suelta el URL en la ranura de pegado y confirma talla, combinación de color y cantidad antes de autorizar gasto nacional.`,
    `<strong>Paga solo en el libro Kakobuy.</strong> Ruteo a almacén, upsells y haul nacional siguen sus reglas — no este hub.`,
    `<strong>QC antes de exportar.</strong> Cuando lleguen fotos inbound, trátalas como prueba vinculante: abre ticket con el agente <em>antes</em> de aceptar etiqueta internacional.`,
    `<strong>Reserva courier con ojos abiertos.</strong> Elige servicio acorde a riesgo y presupuesto y recuerda peso volumétrico en zapatos voluminosos, plumíferos o gadgets — celdas de hoja rara vez muestran el ticket puerta a puerta.`,
  ],
  tipsHeading: 'Chequeos de realidad',
  tipListItemsHtml: [
    `Apila esta mesa con <a href="{howToUrl}">Cómo comprar</a> cuando quieras clics literales junto a los extractos.`,
    `Tus columnas de hoja — cháchara de batch, yuanes, hipervínculos QC — siguen siendo tu libreta privada aunque descubras en el catálogo indexado.`,
    `Solo el checkout Kakobuy obtiene flete en vivo o cobra pagos; estas páginas jamás tocan APIs de transportista.`,
  ],
  disclaimerHtml: `<strong>Descargo:</strong> destilación editorial. Vigilancia de productos prohibidos, reembolsos, aduanas y riesgo logístico vive en Kakobuy, marketplaces, transportistas y reguladores locales — revalida cada anuncio antes de gastar.`,
  howToSchema: {
    name: 'Del browse Spreadsheet al pedido Kakobuy: ritual de pegado en siete pasos',
    description:
      'Recorre los raíles del catálogo, cosecha un enlace de marketplace duradero, entrégalo a Kakobuy, desglosa fotografía de almacén y solo después cierra envío internacional con matemática landed realista.',
    step: [
      {
        name: 'Escoge una entrada de categoría',
        text: 'Toca la pill correcta en kakobuy-cn.com — cada chip abre el par Spreadsheet en otra pestaña.',
      },
      {
        name: 'Abre el listing que realmente quieres',
        text: 'Dentro del cromado browse carga la vista detallada y contrasta variantes, galería y notas de batch antes de tocar el URL.',
      },
      {
        name: 'Copia URL de listing estable',
        text: 'Guarda la dirección completa que tras la revisión todavía apunta al mismo SKU — evita CDN de imagen, páginas solo de álbum o redirects silenciosos.',
      },
      {
        name: 'Pégalo en el intake Kakobuy',
        text: 'Autentícate, arranca el flujo pegar-para-comprar, inserta el enlace y bloquea cada selector que el anuncio exigió.',
      },
      {
        name: 'Paga domestica y espera scans',
        text: 'Completa la cobranza Kakobuy; el tramo nacional hasta el banco fotográfico corre en su red.',
      },
      {
        name: 'Audita QC píxel a píxel',
        text: 'Cuando Kakobuy publique QC, inspecciona paneles, deriva de color, logotipos y apoyos de talla antes de liberar exportación.',
      },
      {
        name: 'Envía a casa sin ilusiones',
        text: 'Elige clase internacional, salda flete, monitoriza tracking — el recibo landed suma tasas, volumen y aranceles, no solo la celda.',
      },
    ],
  },
};

const fr: NewsCopy = {
  title: 'Rédaction Kakobuy Spreadsheet — notes acheteurs, miroirs Kakobuy & rituels “copier-coller” | kakobuy-cn.com',
  description:
    'Briefing indépendant pour acheteurs combinant spreadsheet et Kakobuy : lecture du parcours liens, QC entrepôt sans filtre rose, fret au réel, extraits miroir des annonces Kakobuy et tutoriels agent à consulter hors ligne — règlement et colis restent exclusivement sur kakobuy.com.',
  keywords:
    'desk éditorial Kakobuy Spreadsheet, primer catalogue spreadsheet, FAQ Kakobuy miroir, photo QC entrepôt, fret réaliste FashionReps, flux paste agent, newsdesk spreadsheet',
  backHomeLabel: '← Retour à l’accueil',
  h1: 'Actualités & guides',
  topIntroHtml: `Besoin du manuel complet ? Ouvrez le <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">guide d’achat Kakobuy Spreadsheet</a>. Pour la voix communauté, rendez-vous sous <a href="{buyerUrl}">Retours acheteurs</a>. Commissions, suppléments et grilles courier bougent sans prévenir — la console <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a> connectée tranche. kakobuy-cn.com ne passe aucune caisse ; vous liquidez chez Kakobuy.`,
  featuredBannerHeading: 'Carrousel promo, décrypté',
  featuredBannerIntroHtml: `C’est la même bande animée qu’après <a href="{homeCuratedUrl}">accueil → Explorer les catégories</a>. Certains chips pointent vers des explications hébergées ici ; d’autres vous envoient vers <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a> ou ouvrent <a href="{mlCatalogUrl}" target="_blank" rel="noopener noreferrer">le catalogue Spreadsheet</a> dans un nouvel onglet. Créas, titres et promesses restent la propriété de chaque campagne.`,
  activityHeading: 'Slides du carrousel décryptées',
  activityIntroHtml: `Chaque carte associe un visuel du carrousel d’accueil à son texte — <strong>même ordre que « Explorer les catégories »</strong>. Récompenses et calendriers valent uniquement ce que <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy publie en direct</a>.`,
  activityItems: [
    {
      title: 'Discord · Free Gift & Lucky Draw',
      pillVariant: 'external',
      pillText: 'Ouvre invitation Discord',
      bodyHtml: `<p>Le bleu vif « JOIN FREE GIFT &amp; LUCKY DRAW » envoie vers le Discord Kakobuy — tirages et drops s’y précisent souvent. Ne considérez les avantages comme fermes que lorsque Kakobuy ou Discord publient les conditions.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap0}" target="_blank" rel="noopener noreferrer">Ouvrir l’invitation Discord ↗</a></p>`,
    },
    {
      title: 'Inscription · bonus « 3000 »',
      pillVariant: 'external',
      pillText: 'Ouvre Kakobuy',
      bodyHtml: `<p>Le créatif REGISTER met en avant un pack <strong>3000</strong> — points, bons ou crédits sont définis uniquement par Kakobuy dans son tunnel d’inscription. kakobuy-cn.com ne crédite aucun solde.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap1}" target="_blank" rel="noopener noreferrer">Hub d’inscription Kakobuy ↗</a></p>`,
    },
    {
      title: 'Spring Super Sale · 08–31 mai',
      pillVariant: 'internal',
      pillText: 'Synthèse sur kakobuy-cn.com',
      bodyHtml: `<p>Visuel pastel SUPER SPECIAL OFFER / BIG SALE avec bandeau <strong>08–31 MAY</strong>. SKU admis, rabais et cumul de coupons vivent uniquement dans les campagnes Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap2}">Page promo de mai →</a></p>`,
    },
    {
      title: 'Inviter des amis · gains en espèces',
      pillVariant: 'external',
      pillText: 'Ouvre Maison Looks',
      bodyHtml: `<p>Campagne festive « INVITE FRIENDS · CLAIM HUGE CASH PRIZES » — seuils de parrainage, grille de paiements et annulations ne sont détaillés que dans l’espace Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap3}" target="_blank" rel="noopener noreferrer">Ouvrir le hub Maison Looks ↗</a></p>`,
    },
    {
      title: 'Share & Earn BIG',
      pillVariant: 'external',
      pillText: 'Ouvre Maison Looks',
      bodyHtml: `<p>Bannière dorée SHARE &amp; EARN BIG liée aux incitations de partage social ; plafonds et preuves sont dans les règles Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap4}" target="_blank" rel="noopener noreferrer">Ouvrir le hub Maison Looks ↗</a></p>`,
    },
    {
      title: 'How To Buy · bandeau d’introduction',
      pillVariant: 'internal',
      pillText: 'Guide sur kakobuy-cn.com',
      bodyHtml: `<p>Le HOW TO BUY multicolore reflète l’onboarding Kakobuy. Croisez avec notre guide <strong>Kakobuy Spreadsheet</strong> ici — le paiement reste exclusivement sur Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap5}">Guide Comment acheter →</a></p>`,
    },
  ],
  official: {
    badge: 'Échantillon d’extraits officiels · Kakobuy',
    faqHubLabel: 'Centre d’aide Kakobuy ↗',
    metaHtml: `Ces accordéons rejouent les avis service Kakobuy miroités uniquement pour lecture hors ligne. Tout arrive replié — développez le titre pour lire le texte archivé. En cas de divergence, la <a href="{kakobuyIssueUrl}" target="_blank" rel="noopener noreferrer">FAQ Kakobuy live</a> fait foi. <strong>{count}</strong> extraits sont listés.`,
    sourcePageLabel: 'Page canonique ↗',
  },
  stepsHeading: 'Guide de terrain',
  stepListItemsHtml: [
    `<strong>Choisissez un couloir curaté.</strong> Depuis la <a href="{homeCuratedUrl}">mosaïque des catégories</a>, ciblez la verticale garde-robe voulue — chaque raccourci ouvre la vue Spreadsheet adéquate dans un autre onglet.`,
    `<strong>Atterrissez sur une fiche SKU.</strong> Privilégiez les annonces dont la grille variantes, les tableaux mesure et les photos restent crédibles. Une home générique sans SKU précis casse les litiges.`,
    `<strong>Saisissez l’URL canonique.</strong> Copiez l’adresse marketplace complète depuis la page produit — ou tout lien partagé qui ouvre encore exactement le même SKU, pas une galerie figée.`,
    `<strong>Nourrissez Kakobuy du lien.</strong> Sur <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">kakobuy.com</a>, déposez l’URL dans la fente collage et verrouillez taille, coloris, quantité avant d’autoriser la dépense domestique.`,
    `<strong>Réglez uniquement sur le grand livre Kakobuy.</strong> Routage entrepôt, options payantes et acheminement CN suivent leurs règles — pas ce hub.`,
    `<strong>QC avant export.</strong> Dès que les photos inbound arrivent, traitez-les comme preuve : ouvrez un ticket agent <em>avant</em> d’accepter une étiquette internationale.`,
    `<strong>Réservez le courier lucidement.</strong> Choisissez la classe selon risque et budget, puis rappelez le poids volumétrique sur grosses paires, doudounes ou tech — une cellule spreadsheet ne vaut rarement pas le ticket porte-à-porte.`,
  ],
  tipsHeading: 'Contrôles réalité',
  tipListItemsHtml: [
    `Empilez ce bureau avec <a href="{howToUrl}">Comment acheter</a> quand vous voulez le pas-à-pas UI à côté des extraits.`,
    `Vos colonnes spreadsheet — bavardage batch, colonne yuan, hyperliens QC — restent votre carnet privé même si la découverte depuis la vue spreadsheet.`,
    `Seul le checkout Kakobuy obtient du fret temps réel ou encaisse ; ces pages ne touchent jamais aux API transporteurs.`,
  ],
  disclaimerHtml: `<strong>Avertissement :</strong> distillation éditoriale. Interdits, remboursements, douane et responsabilité transport restent entre Kakobuy, marketplaces, transporteurs et autorités locales — revalidez chaque annonce avant dépense.`,
  howToSchema: {
    name: 'Du browse Spreadsheet à la commande Kakobuy : rituel collage en sept passes',
    description:
      'Parcourez les rails du catalogue, récoltez un lien marketplace durable, remettez-le à Kakobuy, démontez la photo entrepôt puis bouclez l’international avec une landed math honnête.',
    step: [
      {
        name: 'Sélectionnez une entrée catégorie',
        text: 'Touchez la bonne pill sur kakobuy-cn.com — chaque puce ouvre la paire Spreadsheet dans un nouvel onglet.',
      },
      {
        name: 'Ouvrez l’annonce réellement visée',
        text: 'Dans le chrome browse chargez la vue détail et confrontez variantes, galerie, notes batch avant l’URL.',
      },
      {
        name: 'Copiez une URL listing stable',
        text: 'Conservez l’adresse complète qui pointe encore la même SKU après relecture — évitez CDN image, pages album-only ou redirections silencieuses.',
      },
      {
        name: 'Collez dans l’intake Kakobuy',
        text: 'Authentifiez-vous, lancez le flux coller-pour-acheter, insérez le lien, bloquez chaque sélecteur exigé par l’annonce.',
      },
      {
        name: 'Payez domestique et attendez les scans',
        text: 'Bouclez la facturation Kakobuy ; le segment national jusqu’au banc photo tourne sur leur réseau.',
      },
      {
        name: 'Auditez le QC pixel par pixel',
        text: 'Quand Kakobuy publie le QC, inspectez panneaux, dérive couleur, logos et aides pointure avant libération export.',
      },
      {
        name: 'Expédiez chez vous sans illusion',
        text: 'Choisissez classe internationale, payez fret, suivez le tracking — le reçu landed cumule frais, cube et droits, pas seulement la cellule.',
      },
    ],
  },
};

const it: NewsCopy = {
  title: 'Redazione Kakobuy Spreadsheet — note acquirenti, mirror Kakobuy e rituali “copia-incolla” | kakobuy-cn.com',
  description:
    'Briefing indipendente per chi usa spreadsheet con Kakobuy: come incastonare il flusso link, QC magazzino senza filtri rosa, spedizioni raccontate senza hype, avvisi Kakobuy specchiati e tutorial agent solo da leggere — cassa e pacchi restano esclusivamente su kakobuy.com.',
  keywords:
    'desk editoriale Kakobuy Spreadsheet, primer catalogo spreadsheet, FAQ Kakobuy mirror, fotografia QC magazzino, fret realista FashionReps, workflow paste agent, newsdesk spreadsheet',
  backHomeLabel: '← Torna alla home',
  h1: 'Notizie & guide',
  topIntroHtml: `Ti serve il manuale intero? Parti dalla <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">guida agli acquisti Kakobuy Spreadsheet</a>. Per voci di community e timeline apri <a href="{buyerUrl}">Voci dagli acquirenti</a>. Fee, surcharge e roster courier cambiano senza preavviso — la console <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a> autenticata decide gli spareggi. kakobuy-cn.com non apre carrelli; saldi tutto dentro Kakobuy.`,
  featuredBannerHeading: 'Carosello promo, tradotto',
  featuredBannerIntroHtml: `È la stessa fascia dinamica che vedi dopo <a href="{homeCuratedUrl}">home → Esplora categorie</a>. Alcune pill portano spiegazioni hostate qui; altre ti scaricano su <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a> o aprono <a href="{mlCatalogUrl}" target="_blank" rel="noopener noreferrer">il catalogo Spreadsheet</a> in una nuova scheda. Key visual, titoli e copy promessa restano dei rispettivi brand campaign.`,
  activityHeading: 'Slide del carosello spiegate',
  activityIntroHtml: `Ogni scheda abbina un creativo del carosello della home alla sua spiegazione — <strong>stesso ordine della fascia «Esplora categorie»</strong>. Premi e calendari valgono solo ciò che <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy pubblica in tempo reale</a>.`,
  activityItems: [
    {
      title: 'Discord · Free Gift & Lucky Draw',
      pillVariant: 'external',
      pillText: 'Apre invito Discord',
      bodyHtml: `<p>Il blu “JOIN FREE GIFT &amp; LUCKY DRAW” porta al Discord Kakobuy — estrazioni e drop sono di solito dettagliati lì. Considera i benefit confermati solo quando Kakobuy o Discord pubblicano regole e idoneità.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap0}" target="_blank" rel="noopener noreferrer">Apri invito Discord ↗</a></p>`,
    },
    {
      title: 'Registrazione · bonus “3000”',
      pillVariant: 'external',
      pillText: 'Apri Kakobuy',
      bodyHtml: `<p>Il creative REGISTER promuove un bundle <strong>3000</strong> — punti, coupon o crediti li definisce solo Kakobuy nel flusso di iscrizione. kakobuy-cn.com non accredita saldi.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap1}" target="_blank" rel="noopener noreferrer">Hub iscrizione Kakobuy ↗</a></p>`,
    },
    {
      title: 'Spring Super Sale · 08–31 maggio',
      pillVariant: 'internal',
      pillText: 'Sintesi su kakobuy-cn.com',
      bodyHtml: `<p>Arte pastello SUPER SPECIAL OFFER / BIG SALE con fascia <strong>08–31 MAY</strong>. SKU inclusi, sconti e combinazione coupon stanno solo nelle campagne Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap2}">Pagina promo di maggio →</a></p>`,
    },
    {
      title: 'Invita amici · premi in contanti',
      pillVariant: 'external',
      pillText: 'Apre Maison Looks',
      bodyHtml: `<p>Campagna “INVITE FRIENDS · CLAIM HUGE CASH PRIZES” — soglie referral, tabella pagamenti e storni sono nel centro Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap3}" target="_blank" rel="noopener noreferrer">Apri hub Maison Looks ↗</a></p>`,
    },
    {
      title: 'Share & Earn BIG',
      pillVariant: 'external',
      pillText: 'Apre Maison Looks',
      bodyHtml: `<p>Banner dorato SHARE &amp; EARN BIG legato a incentivi di condivisione social; limiti e prove sono nel legalese Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap4}" target="_blank" rel="noopener noreferrer">Apri hub Maison Looks ↗</a></p>`,
    },
    {
      title: 'How To Buy · banner introduttivo',
      pillVariant: 'internal',
      pillText: 'Guida su kakobuy-cn.com',
      bodyHtml: `<p>L’HOW TO BUY multicolore rispecchia l’onboarding Kakobuy. Incrocialo con la nostra guida <strong>Kakobuy Spreadsheet</strong> qui — il pagamento resta solo su Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap5}">Guida Come acquistare →</a></p>`,
    },
  ],
  official: {
    badge: 'Campione di estratti ufficiali · Kakobuy',
    faqHubLabel: 'Centro assistenza Kakobuy ↗',
    metaHtml: `Questi accordion ripetono avvisi Kakobuy specchiati solo per lettura offline. Tutto arriva chiuso — espandi il titolo per il testo archiviato. In caso di conflitto fa fede l’<a href="{kakobuyIssueUrl}" target="_blank" rel="noopener noreferrer">help Kakobuy live</a>. Sotto ci sono <strong>{count}</strong> stralci.`,
    sourcePageLabel: 'Pagina canonica ↗',
  },
  stepsHeading: 'Guida sul campo',
  stepListItemsHtml: [
    `<strong>Scegli un corridoio curato.</strong> Dal <a href="{homeCuratedUrl}">mosaico categorie</a> indica il vertical guardaroba giusto — ogni scorciatoia apre la vista Spreadsheet corretta in un’altra scheda.`,
    `<strong>Atterra su una pagina SKU.</strong> Privilegia inserzioni la cui griglia varianti, tabelle misura e foto restano credibili. Una home vaga senza SKU concreto fracassa i reclami.`,
    `<strong>Cattura l’URL canonico.</strong> Copia l’indirizzo marketplace completo dalla scheda prodotto — o da una condivisione che risolve ancora esattamente lo stesso SKU, non una galleria statica.`,
    `<strong>Nutri Kakobuy col link.</strong> Su <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">kakobuy.com</a> incolla nella slot del flusso e conferma taglia, colorway e quantità prima di autorizzare spesa domestica.`,
    `<strong>Paga solo nel libro mastro Kakobuy.</strong> Routing magazzino, add-on e tratto CN seguono le loro regole — non questo hub.`,
    `<strong>QC prima dell’export.</strong> Quando arrivano le foto inbound trattale come prova: ticket con l’agente <em>prima</em> di accettare etichetta internazionale.`,
    `<strong>Prenota corriere lucidamente.</strong> Allinea servizio a rischio e budget e ricorda il peso volumetrico su sneaker ingombranti, piumini o gadget — una cella foglio raramente vale lo scontrino porta a porta.`,
  ],
  tipsHeading: 'Reality check',
  tipListItemsHtml: [
    `Impila questo desk con <a href="{howToUrl}">Come acquistare</a> quando vuoi click UI accanto agli estratti.`,
    `Le tue colonne foglio — chiacchiera batch, yuan, hyperlink QC — restano taccuino privato anche se la discovery parte dal browse spreadsheet.`,
    `Solo il checkout Kakobuy ottiene freight live o incassa; queste pagine non toccano API corrieri.`,
  ],
  disclaimerHtml: `<strong>Dichiarazione:</strong> distillazione editoriale. Vietati, rimborsi, dogana e rischio trasporto restano tra Kakobuy, marketplace, corrieri e autorità — rivaluta ogni inserzione prima di spendere.`,
  howToSchema: {
    name: 'Dal browse Spreadsheet all’ordine Kakobuy: rituale incolla in sette passi',
    description:
      'Percorri i binari del catalogo, raccogli un link marketplace durevole, consegnalo a Kakobuy, decostruisci le foto magazzino e chiudi l’internazionale con landed math onesta.',
    step: [
      {
        name: 'Scegli un ingresso categoria',
        text: 'Tocca la pill giusta su kakobuy-cn.com — ogni chip apre il paio Spreadsheet in nuova scheda.',
      },
      {
        name: 'Apri l’inserzione che vuoi davvero',
        text: 'Nel chrome browse carica la vista dettaglio e confronta varianti, galleria, note batch prima dell’URL.',
      },
      {
        name: 'Copia URL listing stabile',
        text: 'Conserva l’indirizzo completo che dopo review punta ancora alla stessa SKU — niente CDN immagine, pagine solo album o redirect silenziosi.',
      },
      {
        name: 'Incolla nell’intake Kakobuy',
        text: 'Autenticati, avvia il flusso incolla-per-comprare, inserisci il link, blocca ogni selettore richiesto dall’inserzione.',
      },
      {
        name: 'Paga domestico e attendi scan',
        text: 'Chiudi la fatturazione Kakobuy; il segmento nazionale fino al banco foto gira sulla loro rete.',
      },
      {
        name: 'Audita QC pixel per pixel',
        text: 'Quando Kakobuy pubblica QC ispeziona pannelli, deriva colore, loghi e ausili taglia prima di liberare export.',
      },
      {
        name: 'Spedisci a casa senza illusioni',
        text: 'Scegli classe internazionale, salda freight, traccia pacco — la ricevuta landed somma fee, cubatura e dazi, non solo la cella.',
      },
    ],
  },
};

const pl: NewsCopy = {
  title: 'Redakcja Kakobuy Spreadsheet — notatki kupujących, lustra Kakobuy i rytuał „wklej link” | kakobuy-cn.com',
  description:
    'Niezależny briefing dla osób łączących przeglądarkę spreadsheet z Kakobuy: jak układa się flow linków, jak czytać QC magazynowe bez różowych okularów, jak myśleć o frachcie, plus zwierciadlane komunikaty Kakobuy i poradniki agentskie tylko do czytania — rozliczenia i paczki zostają wyłącznie na kakobuy.com.',
  keywords:
    'desk redakcyjny Kakobuy Spreadsheet, primer katalogu spreadsheet, FAQ Kakobuy lustro, fotografia QC magazyn, fracht realistyczny FashionReps, workflow paste agent, newsdesk spreadsheet',
  backHomeLabel: '← Wróć na stronę główną',
  h1: 'Aktualności i poradniki',
  topIntroHtml: `Potrzebujesz pełnego podręcznika? Zacznij od <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">poradnika zakupów Kakobuy Spreadsheet</a>. Głosy społeczności i oś czasu znajdziesz w <a href="{buyerUrl}">Głosy kupujących</a>. Opłaty serwisowe, dopłaty i oferty kurierów zmieniają się bez ostrzeżenia — rozstrzyga zalogowany panel <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a>. kakobuy-cn.com nie otwiera koszyka; płacisz w obrębie Kakobuy.`,
  featuredBannerHeading: 'Karuzela promocji, zdekodowana',
  featuredBannerIntroHtml: `To ta sama dynamiczna taśma co po <a href="{homeCuratedUrl}">stronie głównej → Poznaj kategorie</a>. Część chipów wskazuje wyjaśnienia hostowane tutaj; inne przenoszą do <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy</a> lub otwierają <a href="{mlCatalogUrl}" target="_blank" rel="noopener noreferrer">katalog Spreadsheet</a> w nowej karcie. Kreacje, nagłówki i copy benefitów należą do organizatorów kampanii.`,
  activityHeading: 'Slajdy karuzeli wyjaśnione',
  activityIntroHtml: `Każda karta łączy jeden baner z karuzeli strony głównej z opisem — <strong>ta sama kolejność co na taśmie „Poznaj kategorie”</strong>. Nagrody i terminy obowiązują tylko wtedy, gdy <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">Kakobuy publikuje je na żywo</a>.`,
  activityItems: [
    {
      title: 'Discord · Free Gift & Lucky Draw',
      pillVariant: 'external',
      pillText: 'Otwiera zaproszenie Discord',
      bodyHtml: `<p>Jasnoniebieski baner „JOIN FREE GIFT &amp; LUCKY DRAW” prowadzi do Discorda Kakobuy — losowania i dropy są tam zwykle opisane. Traktuj korzyści jako pewne dopiero po publikacji zasad przez Kakobuy lub Discord.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap0}" target="_blank" rel="noopener noreferrer">Otwórz zaproszenie Discord ↗</a></p>`,
    },
    {
      title: 'Rejestracja · pakiet „3000”',
      pillVariant: 'external',
      pillText: 'Otwórz Kakobuy',
      bodyHtml: `<p>Kreacja REGISTER promuje pakiet <strong>3000</strong> — punkty, kupony lub kredyty definiuje wyłącznie Kakobuy w swoim flow rejestracji. kakobuy-cn.com nie dopisuje sald.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap1}" target="_blank" rel="noopener noreferrer">Hub rejestracji Kakobuy ↗</a></p>`,
    },
    {
      title: 'Spring Super Sale · 08–31 maja',
      pillVariant: 'internal',
      pillText: 'Streszczenie na kakobuy-cn.com',
      bodyHtml: `<p>Pastelowa grafika SUPER SPECIAL OFFER / BIG SALE z paskiem <strong>08–31 MAY</strong>. SKU objęte promocją, zniżki i łączenie kuponów są tylko w kampaniach Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap2}">Strona promocji majowej →</a></p>`,
    },
    {
      title: 'Zaproś znajomych · nagrody pieniężne',
      pillVariant: 'external',
      pillText: 'Otwiera Maison Looks',
      bodyHtml: `<p>Kampania „INVITE FRIENDS · CLAIM HUGE CASH PRIZES” — progi poleceń, poziomy wypłat i zasady cofania nagród są w narzędziach Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap3}" target="_blank" rel="noopener noreferrer">Otwórz hub Maison Looks ↗</a></p>`,
    },
    {
      title: 'Share & Earn BIG',
      pillVariant: 'external',
      pillText: 'Otwiera Maison Looks',
      bodyHtml: `<p>Złoty baner SHARE &amp; EARN BIG dotyczy nagród za udostępnianie w socialach; limity i dowody są w regulaminie Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap4}" target="_blank" rel="noopener noreferrer">Otwórz hub Maison Looks ↗</a></p>`,
    },
    {
      title: 'How To Buy · baner wprowadzający',
      pillVariant: 'internal',
      pillText: 'Poradnik na kakobuy-cn.com',
      bodyHtml: `<p>Wielokolorowy HOW TO BUY odzwierciedla onboarding Kakobuy. Połącz go z naszym przewodnikiem <strong>Kakobuy Spreadsheet</strong> tutaj — płatność nadal tylko w Kakobuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{carouselTap5}">Poradnik Jak kupować →</a></p>`,
    },
  ],
  official: {
    badge: 'Próbka oficjalnych wycinków · Kakobuy',
    faqHubLabel: 'Centrum pomocy Kakobuy ↗',
    metaHtml: `Te akordeony powtarzają komunikaty serwisowe Kakobuy z lustra wyłącznie do czytania offline. Wiersze startują zwinięte — rozwiń tytuł, by zobaczyć treść archiwalną. W razie sprzeczności rozstrzyga <a href="{kakobuyIssueUrl}" target="_blank" rel="noopener noreferrer">pomoc Kakobuy na żywo</a>. Poniżej jest <strong>{count}</strong> snippetów.`,
    sourcePageLabel: 'Strona kanoniczna ↗',
  },
  stepsHeading: 'Przewodnik polowy',
  stepListItemsHtml: [
    `<strong>Wybierz kuratorowany korytarz.</strong> Z <a href="{homeCuratedUrl}">mozaiki kategorii</a> wskaż właściwy pion garderoby — każdy skrót otwiera właściwy widok Spreadsheet w kolejnej karcie.`,
    `<strong>Wyląduj na stronie SKU.</strong> Preferuj ogłoszenia z wiarygodną siatką wariantów, tabelami miar i fotografią. Ogólna strona sklepu bez konkretnej SKU psuje reklamacje.`,
    `<strong>Przechwyć kanoniczny URL.</strong> Skopiuj pełny adres marketplace ze strony produktu — albo link udostępniania, który nadal prowadzi dokładnie do tego samego SKU, nie statyczną galerię.`,
    `<strong>Nakłon Kakobuy linkiem.</strong> Na <a href="{kakobuyHomeUrl}" target="_blank" rel="noopener noreferrer">kakobuy.com</a> wklej w slot workflow i potwierdź rozmiar, zestawienie kolorystyczne oraz ilość zanim zatwierdzisz krajowy koszt.`,
    `<strong>Płać tylko w księdze Kakobuy.</strong> Trasa do magazynu, dodatki i domestic haul podlegają ich zasadom — nie temu hubowi.`,
    `<strong>QC przed eksportem.</strong> Gdy nadejdą zdjęcia inbound, traktuj je jako dowód: otwórz ticket u agenta <em>zanim</em> przyjmiesz międzynarodową etykietę.`,
    `<strong>Zarezerwuj kuriera świadomie.</strong> Dobierz klasę do ryzyka i budżetu oraz pamiętaj o wadze kubaturowej przy masywnych sneakach, puchówkach czy elektronice — komórka arkusza rzadko równa się paragonowi door-to-door.`,
  ],
  tipsHeading: 'Testy rzeczywistości',
  tipListItemsHtml: [
    `Połącz ten biurko z <a href="{howToUrl}">Jak kupować</a>, gdy chcesz dosłownych klików obok wycinków.`,
    `Twoje kolumny arkusza — plotki o batchu, juan-y, hiperłącza QC — zostają prywatnym notesem nawet jeśli odkrywanie zaczyna się w widoku spreadsheet.`,
    `Tylko checkout Kakobuy podaje fracht live lub zbiera płatności; te strony nie dotykają API przewoźników.`,
  ],
  disclaimerHtml: `<strong>Uwaga:</strong> destylacja redakcyjna. Zakazy, zwroty, cło i ryzyko transportu pozostają między Kakobuy, marketplace’ami, przewoźnikami i regulatorami — zweryfikuj każdą ofertę przed wydatkiem.`,
  howToSchema: {
    name: 'Od przeglądu Spreadsheet do zamówienia Kakobuy: siedmiostopniowy rytuał wklejania',
    description:
      'Przejdź po szynach katalogu indeksowanego, zbierz trwały link marketplace, przekaż go Kakobuy, rozłóż fotografię magazynową i dopiero domknij wysyłkę międzynarodową z uczciwą matematyką landed.',
    step: [
      {
        name: 'Wybierz wejście kategorii',
        text: 'Dotknij właściwej pigułki na kakobuy-cn.com — każdy chip otwiera parę Spreadsheet w nowej karcie.',
      },
      {
        name: 'Otwórz ogłoszenie, które naprawdę chcesz',
        text: 'W chrome przeglądarki załaduj widok szczegółowy i zestaw warianty, galerię, notatki batch przed URL.',
      },
      {
        name: 'Skopiuj stabilny URL oferty',
        text: 'Zachowaj pełny adres, który po weryfikacji wciąż wskazuje tę samą SKU — unikaj CDN obrazów, stron tylko-album czy cichych przekierowań.',
      },
      {
        name: 'Wklej do intake Kakobuy',
        text: 'Zaloguj się, uruchom flow wklej-aby-kupić, wstaw link, zablokuj każdy selektor wymagany przez ogłoszenie.',
      },
      {
        name: 'Opłać domestic i czekaj na skany',
        text: 'Domknij rozliczenie Kakobuy; krajowy odcinek do stołu fotograficznego leci w ich sieci.',
      },
      {
        name: 'Audytuj QC piksel po pikselu',
        text: 'Gdy Kakobuy opublikuje QC, sprawdź panele, dryf koloru, logo i podpowiedzi rozmiaru przed zwolnieniem eksportu.',
      },
      {
        name: 'Wyślij pod adres bez złudzeń',
        text: 'Wybierz klasę międzynarodową, opłać fracht, śledź przesyłkę — paragon landed sumuje opłaty, kubaturę i cła, nie tylko komórkę arkusza.',
      },
    ],
  },
};

export const NEWS_PAGE_COPY: Record<RouteLocale, NewsCopy> = {
  en,
  de,
  pt,
  es,
  fr,
  it,
  pl,
};

export function getNewsCopy(locale: string): NewsCopy {
  const lc = locale as RouteLocale;
  return NEWS_PAGE_COPY[lc] ?? en;
}

export function newsHowToJsonLd(copy: NewsCopy, inLanguage: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: copy.howToSchema.name,
    description: copy.howToSchema.description,
    inLanguage,
    totalTime: 'PT20M',
    step: copy.howToSchema.step.map((s) => ({
      '@type': 'HowToStep',
      name: s.name,
      text: s.text,
    })),
  };
}
