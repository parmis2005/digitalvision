export type ProductItem = {
  slug: string;
  type: string;
  title: string;
  detail: string;
  variant:
    | "earth"
    | "forest"
    | "studio"
    | "fashion"
    | "portal"
    | "schedule"
    | "seo"
    | "auto"
    | "premium-auto"
    | "gs-auto"
    | "coffee"
    | "restaurant"
    | "doener"
    | "hotel"
    | "wellness"
    | "rose"
    | "riding"
    | "electrician"
    | "thermal"
    | "medical"
    | "hospital"
    | "hair"
    | "salt"
    | "footcare"
    | "sinja-nails"
    | "cleaning"
    | "insurance"
    | "craft"
    | "skincare"
    | "nails";
  category: string;
  intro: string;
  highlights: string[];
  previewUrl?: string;
  externalUrl?: string;
};

const productItems: ProductItem[] = [
  {
    slug: "maison-lumiere",
    type: "Restaurant Website",
    title: "Maison Lumière",
    detail: "Elegante Restaurant-Website für Fine Dining, Speisekarte und Reservierungen",
    variant: "restaurant",
    category: "Webseiten",
    intro: "Restaurant-Website mit Atmosphäre, Speisekarte, Galerie und Reservierung.",
    highlights: [
      "Atmosphärischer Hero-Bereich für Fine Dining, Ambiente und direkte Reservierung",
      "Klare Bereiche für Über uns, Speisekarte, Galerie, Bewertungen, Standort und Kontakt",
      "Geeignet für Restaurants, Bistros, Bars, Cafés und gehobene Gastronomie",
    ],
    previewUrl: "/restaurant-preview/index.html",
  },
  {
    slug: "beauty-haus",
    type: "Kosmetik Website",
    title: "Kosmetik Studio",
    detail: "Elegante Website für Kosmetik, Behandlungen und moderne Beauty Services",
    variant: "earth",
    category: "Webseiten",
    intro: "Kosmetik-Website mit hochwertigem Look und klarer Anfrageführung.",
    highlights: [
      "Starke Bildsprache für Kosmetik- und Beauty-Marken",
      "Eleganter Aufbau für Behandlungen, Vertrauen und Buchungsanfragen",
      "Geeignet für Kosmetikstudios, Beauty Brands und Premium-Services",
    ],
    previewUrl: "/beauty-haus-preview/index.html",
  },
  {
    slug: "ates-feuerdoener",
    type: "Döner Restaurant Website",
    title: "Ateş Feuerdöner",
    detail: "Feurige Restaurant-Website für Döner, Speisekarte, Standorte und Bestellungen",
    variant: "doener",
    category: "Webseiten",
    intro: "Döner-Restaurant-Website mit Video-Hero, Speisekarte, Reels und Bestellfokus.",
    highlights: [
      "Starker Video-Hero für offenes Feuer, frische Zutaten und direkte Bestellung",
      "Klare Bereiche für Speisekarte, Reels, Standorte, Bewertungen und Franchise",
      "Geeignet für Dönerläden, Imbisse, Food-Brands und moderne Gastro-Konzepte",
    ],
    previewUrl: "/doener-preview/index.html",
  },
  {
    slug: "aurum-grand-hotel",
    type: "Luxushotel Website",
    title: "AURUM Grand Hotel",
    detail: "Premium-Hotel-Website für Suiten, Restaurant, Spa und Reservierungen",
    variant: "hotel",
    category: "Webseiten",
    intro: "Hotel-Website mit Suiten, Spa, Galerie und Reservierung.",
    highlights: [
      "Atmosphärischer Hero-Bereich für Hotel, Suiten und Premium-Aufenthalte",
      "Klare Bereiche für Zimmer, Restaurant, Spa, Galerie, Kontakt und Reservierungen",
      "Geeignet für Hotels, Boutique-Hotels, Resorts und gehobene Hospitality-Konzepte",
    ],
    previewUrl: "/luxushotel-preview/index.html",
  },
  {
    slug: "salzgrotte-aura",
    type: "Salzgrotte Website",
    title: "Salzgrotte Aura",
    detail: "Ruhige Salzgrotte-Website für Halotherapie, Preise und Termine",
    variant: "salt",
    category: "Webseiten",
    intro: "Salzgrotte-Website mit ruhiger Wirkung, Preisen und Terminbuchung.",
    highlights: [
      "Atmosphärischer Hero-Bereich für Salzluft, Ruhe und Wohlbefinden",
      "Klare Bereiche für Anwendungen, Wirkung, Preise, Öffnungszeiten und Kontakt",
      "Geeignet für Salzgrotten, Halotherapie-Angebote und ruhige Wellness-Konzepte",
    ],
    previewUrl: "/salzgrotte-preview/index.html",
  },
  {
    slug: "alphaschutz-versicherung",
    type: "Versicherungsberatung Website",
    title: "AlphaSchutz Versicherung",
    detail: "Premium-Website für Versicherungsberatung, Schutzkonzepte und Kontakt",
    variant: "insurance",
    category: "Webseiten",
    intro: "Versicherungs-Website mit Leistungen, Prozess und Beratungsfokus.",
    highlights: [
      "Starker Hero-Bereich für Vertrauen, Beratung und Absicherung",
      "Klare Struktur für Leistungen, Prozess, Bewertungen und Kontakt",
      "Geeignet für Versicherungsmakler, Finanzberater und Beratungsbüros",
    ],
    previewUrl: "/versicherung-preview/index.html",
  },
  {
    slug: "fussoase-eppendorf",
    type: "Fußpflege Website",
    title: "Fußoase Eppendorf",
    detail: "Elegante Fußpflege-Website für Behandlungen, Preise und Termine",
    variant: "footcare",
    category: "Webseiten",
    intro: "Fußpflege-Website mit Leistungen, Preisen und Terminbuchung.",
    highlights: [
      "Atmosphärischer Hero-Bereich für Fußpflege, Podologie und Wohlgefühl",
      "Klare Bereiche für Leistungen, Preise, Galerie, Bewertungen und Kontakt",
      "Geeignet für Fußpflege-Studios, Podologie-Angebote und Beauty-Praxen",
    ],
    previewUrl: "/fusspflege-preview/index.html",
  },
  {
    slug: "velora-fashion",
    type: "Damenmode Online-Shop",
    title: "VELORA Fashion",
    detail: "Femininer Fashion-Shop mit Kleidern, Blusen und Tailoring-Fokus",
    variant: "fashion",
    category: "Webseiten",
    intro: "Fashion-Shop mit Editorial-Look, Kategorien und Produktführung.",
    highlights: [
      "Editoriale Startseite mit Hero, Kategorien und Produkt-Sets",
      "Klarer Fokus auf Kleider, Blusen, Tailoring und Sale",
      "Geeignet für Mode-Shops, Boutiquen und feminine Kollektionen",
    ],
    previewUrl: "/velora-fashion-preview/site/index.html",
  },
  {
    slug: "serenity-studio",
    type: "Wellness Studio Website",
    title: "Serenity Studio",
    detail: "Ruhige Wellness-Website für Spa, Recovery, Massage und Private Sessions",
    variant: "wellness",
    category: "Webseiten",
    intro: "Wellness-Website mit starker Bildsprache und Buchungsfokus.",
    highlights: [
      "Premium-Look für Wellness, Spa, Recovery und Private Sessions",
      "Klarer Buchungsaufbau mit Verfügbarkeit, Filtern und Erlebnis-Modulen",
      "Geeignet für Spa-Studios, Recovery-Lounges und moderne Health-Konzepte",
    ],
    previewUrl: "/wellness-preview/index.html",
  },
  {
    slug: "kosmetik-atelier-rosenblick",
    type: "Kosmetikstudio Website",
    title: "Kosmetik Atelier Rosenblick",
    detail: "Elegante Kosmetik-Website für apparative Schönheitspflege, Produkte und Termine",
    variant: "rose",
    category: "Webseiten",
    intro: "Kosmetikstudio-Website mit Video-Hero, Leistungen, Galerie und Terminbuchung.",
    highlights: [
      "Atmosphärischer Hero-Bereich für apparative Kosmetik und Elektroepilation",
      "Klare Bereiche für Leistungen, Produkte, Galerie, Bewertungen und Terminbuchung",
      "Geeignet für Kosmetikstudios, Beauty-Ateliers und moderne Hautpflege-Angebote",
    ],
    previewUrl: "/kosmetik-rose-preview/index.html",
  },
  {
    slug: "reitschule-sonnenhof",
    type: "Reitschule Website",
    title: "Reitschule Sonnenhof",
    detail: "Warme Reitschule-Website für Kurse, Pferdepension, Trainerteam und Probestunden",
    variant: "riding",
    category: "Webseiten",
    intro: "Reitschule-Website mit Video-Hero, Kursangeboten, Galerie, Trainerteam und Kontaktfokus.",
    highlights: [
      "Atmosphärischer Hero-Bereich mit Pferdevideos, Kennzahlen und Probestunden-Fokus",
      "Klare Bereiche für Kurse, Pferdepension, Trainerteam, Galerie, Bewertungen und Standort",
      "Geeignet für Reitschulen, Pferdepensionen, Reitvereine und ländliche Erlebnisangebote",
    ],
    previewUrl: "/reitschule-preview/index.html",
  },
  {
    slug: "voltara-elektrotechnik",
    type: "Elektriker Website",
    title: "Voltara Elektrotechnik",
    detail: "Moderne Elektriker-Website für Elektroinstallation, Smart Home, E-Check und Anfragen",
    variant: "electrician",
    category: "Webseiten",
    intro: "Elektriker-Website mit Video-Hero, Leistungsbereichen, Preisen, Referenzen und Kontaktfokus.",
    highlights: [
      "Starker Hero-Bereich für Meisterbetrieb, Notdienst und direkte Termin-Anfrage",
      "Klare Bereiche für Elektroinstallation, Smart Home, Beleuchtung, E-Check, Wallbox und Photovoltaik",
      "Geeignet für Elektriker, Elektrobetriebe, Gebäudetechnik-Firmen und regionale Handwerksbetriebe",
    ],
    previewUrl: "/elektriker-preview/index.html",
  },
  {
    slug: "arztpraxis-weber",
    type: "Arztpraxis Website",
    title: "Arztpraxis Weber",
    detail: "Moderne Praxis-Website für Hausarztmedizin, Leistungen, Team und Kontakt",
    variant: "medical",
    category: "Webseiten",
    intro: "Praxis-Website mit Leistungen, Team, Standort und Kontakt.",
    highlights: [
      "Vertrauensvoller Praxis-Auftritt mit Hero, Leistungen und Team-Bereich",
      "Klare Struktur für Terminwunsch, Telefonnummer, Standort und Kontakt",
      "Geeignet für Hausarztpraxen, Facharztpraxen und moderne Gesundheitsangebote",
    ],
    previewUrl: "/arztpraxis-preview/index.html",
  },
  {
    slug: "bean-bark",
    type: "Coffee Shop Website",
    title: "Bean & Bark",
    detail: "Warme Coffee-Shop-Website für Specialty Coffee, Menü und Standorte",
    variant: "coffee",
    category: "Webseiten",
    intro: "Coffee-Shop-Website mit Menü, Story und warmer Markenwirkung.",
    highlights: [
      "Warmer Premium-Look für Café, Coffee Shop und Hospitality-Marken",
      "Klarer Aufbau für Menü, Story, Nachhaltigkeit und Standorte",
      "Geeignet für Cafés, Röstereien, Brunch-Spots und urbane Gastro-Konzepte",
    ],
    previewUrl: "/coffeeshop-preview/index.html",
  },
  {
    slug: "vulkaneifeltherme",
    type: "Thermalbad Website",
    title: "Vulkaneifel Therme",
    detail: "Atmosphärische Thermen-Website für Thermalbad, Sauna, Wellness und Tickets",
    variant: "thermal",
    category: "Webseiten",
    intro: "Thermen-Website mit Video-Einstieg, Sauna, Preisen und Tickets.",
    highlights: [
      "Starker Video-Hero für Thermalbad, Mineralquelle, Sauna und Wellness",
      "Klare Struktur für Badewelt, Saunen, Anwendungen, Gastronomie, Preise und Kontakt",
      "Geeignet für Thermen, Erlebnisbäder, Saunalandschaften und Wellness-Resorts",
    ],
    previewUrl: "/vulkaneifeltherme-preview/index.html",
  },
  {
    slug: "cleanpro-reinigung",
    type: "Reinigungsfirma Website",
    title: "CleanPro Reinigung",
    detail: "Moderne Website für Gebäudereinigung, Leistungen, Standorte und Angebote",
    variant: "cleaning",
    category: "Webseiten",
    intro: "Reinigungs-Website mit Leistungen, Vertrauen und Angebotsfokus.",
    highlights: [
      "Starker Hero-Bereich für Gebäudereinigung, Erfahrung und Vertrauen",
      "Klare Leistungsbereiche für Büroreinigung, Glasreinigung und Desinfektion",
      "Geeignet für Reinigungsfirmen, Facility-Services und regionale Dienstleister",
    ],
    previewUrl: "/reinigungsfirma-preview/index.html",
  },
  {
    slug: "meisterhand-handwerksservice",
    type: "Handwerker Website",
    title: "MeisterHand",
    detail: "Moderne Handwerker-Website für Leistungen, Referenzen, Team und Anfragen",
    variant: "craft",
    category: "Webseiten",
    intro: "Handwerker-Website mit starkem Hero, Leistungsübersicht und Anfragefokus.",
    highlights: [
      "Starker Hero-Bereich für Meisterbetrieb, Festpreisgarantie und schnelle Anfrage",
      "Klare Bereiche für Leistungen, Galerie, Referenzen, Team und Kontakt",
      "Geeignet für Handwerksbetriebe, Sanierer, Elektriker, Maler, Schreiner und Fliesenleger",
    ],
    previewUrl: "/handwerker-preview/index.html",
  },
  {
    slug: "autohaus-falkenstein",
    type: "Premium Autohaus Website",
    title: "Autohaus Falkenstein",
    detail: "Premium-Website für Sportwagen, Fahrzeugbestand, Service und Probefahrten",
    variant: "premium-auto",
    category: "Webseiten",
    intro: "Premium-Autohaus mit Video-Hero, Bestand und Probefahrtfokus.",
    highlights: [
      "Starker Hero-Bereich für Premium-Fahrzeuge, Emotion und direkte Fahrzeugauswahl",
      "Klare Struktur für Bestand, Fahrzeugdetails, Finanzierung, Service und Kontakt",
      "Geeignet für Autohäuser, Premium-Händler, Sportwagenanbieter und Fahrzeugvermittler",
    ],
    previewUrl: "/autohaus-falkenstein-preview/index.html",
  },
  {
    slug: "gs-automotive-excellence",
    type: "Autohaus Website",
    title: "GS Automotive Excellence",
    detail: "Moderne Autohaus-Website für Fahrzeugsuche, Service, Ankauf und Kontakt",
    variant: "gs-auto",
    category: "Webseiten",
    intro: "Autohaus-Website mit großem Hero, Fahrzeugsuche, Servicebereichen und Kontaktfokus.",
    highlights: [
      "Starker Autohaus-Hero mit direkter Fahrzeugsuche und klarer Markenwirkung",
      "Struktur für Fahrzeugbestand, Finanzierung, Garantie, Zulassung und Ankauf",
      "Geeignet für Autohäuser, Gebrauchtwagenhändler und Automotive-Service-Anbieter",
    ],
    previewUrl: "/gs-automotive-preview/index.html",
  },
  {
    slug: "luna-nails",
    type: "Nagelstudio Website",
    title: "Luna Nails",
    detail: "Elegante Nagelstudio-Website für Maniküre, Pediküre, Nailart und Termine",
    variant: "nails",
    category: "Webseiten",
    intro: "Nagelstudio-Website mit Leistungen, Galerie und Terminfokus.",
    highlights: [
      "Eleganter Hero-Bereich mit Video, Bewertungen und direktem Termin-Einstieg",
      "Klare Bereiche für Maniküre, Pediküre, Gel-Modellage, Nailart und Galerie",
      "Geeignet für Nagelstudios, Beauty-Ateliers und moderne Pflegeangebote",
    ],
    previewUrl: "/happynails-preview/index.html",
  },
  {
    slug: "st-elisabeth-klinikum",
    type: "Krankenhaus Website",
    title: "St. Elisabeth Klinikum",
    detail: "Moderne Krankenhaus-Website für Fachbereiche, Notaufnahme, Team und Termine",
    variant: "hospital",
    category: "Webseiten",
    intro: "Klinik-Website mit Fachbereichen, Notfallhinweis und Terminen.",
    highlights: [
      "Starker Hero-Bereich mit Notfall-Hinweis, Termin-Einstieg und Klinikprofil",
      "Klare Struktur für Fachbereiche, Ärzteteam, Patientenstimmen und Kontakt",
      "Geeignet für Kliniken, Medizinzentren und größere Gesundheitseinrichtungen",
    ],
    previewUrl: "/krankenhaus-preview/index.html",
  },
  {
    slug: "haarwerk-studio",
    type: "Friseur Website",
    title: "Haarwerk Studio",
    detail: "Moderne Friseur-Website für Schnitte, Coloration, Galerie und Termine",
    variant: "hair",
    category: "Webseiten",
    intro: "Friseur-Website mit Salon-Atmosphäre, Leistungen und Buchung.",
    highlights: [
      "Starker Video-Hero für Salon-Atmosphäre, Beratung und moderne Looks",
      "Klare Bereiche für Galerie, Leistungen, Preise, Portfolio und Bewertungen",
      "Geeignet für Friseursalons, Barber-Shops und hochwertige Beauty-Studios",
    ],
    previewUrl: "/friseur-preview/index.html",
  },
  {
    slug: "simpleskin-test",
    type: "Kosmetik Website",
    title: "Liora Hautatelier",
    detail: "Dermazeutische Kosmetik-Website für Hautanalyse, Behandlungen und Termine",
    variant: "skincare",
    category: "Webseiten",
    intro: "Kosmetik-Website mit Hautanalyse, Wirkstoffkosmetik und Terminfokus.",
    highlights: [
      "Starker Hero-Bereich mit Video, Beratungseinstieg und direkter Terminführung",
      "Klare Bereiche für Behandlungen, Hautanalyse, Ergebnisse, Produkte und Kontakt",
      "Geeignet für Kosmetikstudios, Hautateliers und moderne Beauty-Services",
    ],
    previewUrl: "/simpleskin-preview/index.html",
  },
  {
    slug: "nagelstudio-sinja",
    type: "Nagelstudio Website",
    title: "Nagelstudio by Mira",
    detail: "Kreative Nagelstudio-Website für Modellage, Nailart, Preise und Termine",
    variant: "sinja-nails",
    category: "Webseiten",
    intro: "Nagelstudio-Website mit Nailart, Preisen und Kontaktfokus.",
    highlights: [
      "Auffälliger Hero-Bereich für Modellage, Nailart und direkte Terminführung",
      "Klare Bereiche für Leistungen, Preise, Galerie, Reels, Studio und Kontakt",
      "Geeignet für Nagelstudios, Nailart-Angebote und moderne Beauty-Ateliers",
    ],
    previewUrl: "/nagelstudio-sinja-preview/index.html",
  },
];

const preferredWebsiteOrder = [
  "beauty-haus",
  "maison-lumiere",
  "aurum-grand-hotel",
  "ates-feuerdoener",
  "gs-automotive-excellence",
  "vulkaneifeltherme",
  "nagelstudio-sinja",
  "alphaschutz-versicherung",
  "salzgrotte-aura",
  "autohaus-falkenstein",
  "fussoase-eppendorf",
  "haarwerk-studio",
  "simpleskin-test",
  "meisterhand-handwerksservice",
];

const orderedProducts = preferredWebsiteOrder
  .map((slug) => productItems.find((product) => product.slug === slug))
  .filter((product): product is ProductItem => Boolean(product));

export const products: ProductItem[] = [
  ...orderedProducts,
  ...productItems.filter((product) => !preferredWebsiteOrder.includes(product.slug)),
];

export const repeatedProducts = [...products, ...products];
