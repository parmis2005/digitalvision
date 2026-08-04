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
    | "coffee"
    | "wellness"
    | "medical"
    | "hospital"
    | "hair"
    | "salt"
    | "footcare"
    | "sinja-nails"
    | "cleaning"
    | "insurance"
    | "nails";
  category: string;
  intro: string;
  highlights: string[];
  previewUrl?: string;
};

export const products: ProductItem[] = [
  {
    slug: "beauty-haus",
    type: "Kosmetik Website",
    title: "Kosmetik Studio",
    detail: "Elegante Website für Kosmetik, Behandlungen und moderne Beauty Services",
    variant: "earth",
    category: "Webseiten",
    intro: "Beispiel für eine moderne Kosmetik-Website mit hochwertiger Wirkung, klarer Nutzerführung und starker visueller Präsenz.",
    highlights: [
      "Starke Bildsprache für Kosmetik- und Beauty-Marken",
      "Eleganter Aufbau für Behandlungen, Vertrauen und Buchungsanfragen",
      "Geeignet für Kosmetikstudios, Beauty Brands und Premium-Services",
    ],
    previewUrl: "https://kosmetik-test.vercel.app/",
  },
  {
    slug: "autohaus-nordglanz",
    type: "Autohaus Website",
    title: "Autohaus Nordglanz",
    detail: "Moderne Autohaus-Website für Fahrzeuge, Suche und vertrauensstarken Verkauf",
    variant: "auto",
    category: "Webseiten",
    intro: "Beispiel für eine Autohaus-Website mit Fahrzeugsuche, starker Hero-Fläche und klarer Nutzerführung für Anfragen und Bestand.",
    highlights: [
      "Starker Hero-Bereich mit Fahrzeugsuche und direktem Einstieg",
      "Moderne Präsentation für Jahreswagen, Gebrauchtwagen und Business-Fahrzeuge",
      "Geeignet für Autohäuser, Fahrzeughändler und Premium-Bestände",
    ],
    previewUrl: "/autohaus-preview/index.html",
  },
  {
    slug: "salzgrotte-aura",
    type: "Salzgrotte Website",
    title: "Salzgrotte Aura",
    detail: "Ruhige Salzgrotte-Website für Halotherapie, Preise und Termine",
    variant: "salt",
    category: "Webseiten",
    intro:
      "Beispiel für eine moderne Salzgrotte-Website mit ruhiger Wellness-Wirkung, klarer Angebotsstruktur und direktem Terminbuchungsfokus.",
    highlights: [
      "Atmosphärischer Hero-Bereich für Salzluft, Ruhe und Wohlbefinden",
      "Klare Bereiche für Anwendungen, Wirkung, Preise, Öffnungszeiten und Kontakt",
      "Geeignet für Salzgrotten, Halotherapie-Angebote und ruhige Wellness-Konzepte",
    ],
    previewUrl: "/salzgrotte-preview/index.html",
  },
  {
    slug: "bean-bark",
    type: "Coffee Shop Website",
    title: "Bean & Bark",
    detail: "Warme Coffee-Shop-Website für Specialty Coffee, Menü und Standorte",
    variant: "coffee",
    category: "Webseiten",
    intro: "Beispiel für eine moderne Coffee-Shop-Website mit warmer Markenwirkung, klarer Menüführung und einladender Atmosphäre.",
    highlights: [
      "Warmer Premium-Look für Café, Coffee Shop und Hospitality-Marken",
      "Klarer Aufbau für Menü, Story, Nachhaltigkeit und Standorte",
      "Geeignet für Cafés, Röstereien, Brunch-Spots und urbane Gastro-Konzepte",
    ],
    previewUrl: "/coffeeshop-preview/index.html",
  },
  {
    slug: "velora-fashion",
    type: "Damenmode Online-Shop",
    title: "VELORA Fashion",
    detail: "Femininer Fashion-Shop mit Kleidern, Blusen und Tailoring-Fokus",
    variant: "fashion",
    category: "Webseiten",
    intro:
      "Beispiel für einen modernen Damenmode-Shop mit editorialer Bildsprache, sanfter Farbwelt und klarer Produktführung.",
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
    intro: "Beispiel für eine moderne Wellnessstudio-Website mit starker Bildsprache, Buchungskalender und hochwertiger Recovery-Atmosphäre.",
    highlights: [
      "Premium-Look für Wellness, Spa, Recovery und Private Sessions",
      "Klarer Buchungsaufbau mit Verfügbarkeit, Filtern und Erlebnis-Modulen",
      "Geeignet für Spa-Studios, Recovery-Lounges und moderne Health-Konzepte",
    ],
    previewUrl: "/wellness-preview/index.html",
  },
  {
    slug: "arztpraxis-weber",
    type: "Arztpraxis Website",
    title: "Arztpraxis Weber",
    detail: "Moderne Praxis-Website für Hausarztmedizin, Leistungen, Team und Kontakt",
    variant: "medical",
    category: "Webseiten",
    intro:
      "Beispiel für eine moderne Arztpraxis-Website mit klarer Patientenführung, vertrauensvoller Bildsprache und direktem Kontaktaufbau.",
    highlights: [
      "Vertrauensvoller Praxis-Auftritt mit Hero, Leistungen und Team-Bereich",
      "Klare Struktur für Terminwunsch, Telefonnummer, Standort und Kontakt",
      "Geeignet für Hausarztpraxen, Facharztpraxen und moderne Gesundheitsangebote",
    ],
    previewUrl: "/arztpraxis-preview/index.html",
  },
  {
    slug: "cleanpro-reinigung",
    type: "Reinigungsfirma Website",
    title: "CleanPro Reinigung",
    detail: "Moderne Website für Gebäudereinigung, Leistungen, Standorte und Angebote",
    variant: "cleaning",
    category: "Webseiten",
    intro:
      "Beispiel für eine moderne Reinigungsfirma-Website mit klarer Leistungsstruktur, vertrauensvoller Bildsprache und direktem Angebotsfokus.",
    highlights: [
      "Starker Hero-Bereich für Gebäudereinigung, Erfahrung und Vertrauen",
      "Klare Leistungsbereiche für Büroreinigung, Glasreinigung und Desinfektion",
      "Geeignet für Reinigungsfirmen, Facility-Services und regionale Dienstleister",
    ],
    previewUrl: "/reinigungsfirma-preview/index.html",
  },
  {
    slug: "fussoase-eppendorf",
    type: "Fußpflege Website",
    title: "Fußoase Eppendorf",
    detail: "Elegante Fußpflege-Website für Behandlungen, Preise und Termine",
    variant: "footcare",
    category: "Webseiten",
    intro:
      "Beispiel für eine moderne Fußpflege-Website mit ruhiger Beauty-Wirkung, klaren Leistungen, Preisen und direktem Terminbuchungsfokus.",
    highlights: [
      "Atmosphärischer Hero-Bereich für Fußpflege, Podologie und Wohlgefühl",
      "Klare Bereiche für Leistungen, Preise, Galerie, Bewertungen und Kontakt",
      "Geeignet für Fußpflege-Studios, Podologie-Angebote und Beauty-Praxen",
    ],
    previewUrl: "/fusspflege-preview/index.html",
  },
  {
    slug: "alphaschutz-versicherung",
    type: "Versicherungsberatung Website",
    title: "AlphaSchutz Versicherung",
    detail: "Premium-Website für Versicherungsberatung, Schutzkonzepte und Kontakt",
    variant: "insurance",
    category: "Webseiten",
    intro:
      "Beispiel für eine moderne Versicherungsberater-Website mit seriöser Markenwirkung, klarer Leistungsstruktur und direktem Beratungsfokus.",
    highlights: [
      "Starker Hero-Bereich für Vertrauen, Beratung und Absicherung",
      "Klare Struktur für Leistungen, Prozess, Bewertungen und Kontakt",
      "Geeignet für Versicherungsmakler, Finanzberater und Beratungsbüros",
    ],
    previewUrl: "/versicherung-preview/index.html",
  },
  {
    slug: "luna-nails",
    type: "Nagelstudio Website",
    title: "Luna Nails",
    detail: "Elegante Nagelstudio-Website für Maniküre, Pediküre, Nailart und Termine",
    variant: "nails",
    category: "Webseiten",
    intro:
      "Beispiel für eine moderne Nagelstudio-Website mit hochwertiger Beauty-Wirkung, klarer Leistungsstruktur und direktem Terminfokus.",
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
    intro:
      "Beispiel für eine moderne Krankenhaus-Website mit klarer Patientenführung, 24/7-Notaufnahme, Fachbereichen und direkter Terminvereinbarung.",
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
    intro:
      "Beispiel für eine moderne Friseur-Website mit hochwertiger Salon-Atmosphäre, Video-Hero, klaren Leistungen und direkter Terminbuchung.",
    highlights: [
      "Starker Video-Hero für Salon-Atmosphäre, Beratung und moderne Looks",
      "Klare Bereiche für Galerie, Leistungen, Preise, Portfolio und Bewertungen",
      "Geeignet für Friseursalons, Barber-Shops und hochwertige Beauty-Studios",
    ],
    previewUrl: "/friseur-preview/index.html",
  },
  {
    slug: "nagelstudio-sinja",
    type: "Nagelstudio Website",
    title: "Nagelstudio by Mira",
    detail: "Kreative Nagelstudio-Website für Modellage, Nailart, Preise und Termine",
    variant: "sinja-nails",
    category: "Webseiten",
    intro:
      "Beispiel für eine moderne Nagelstudio-Website mit kreativer Nailart-Wirkung, klaren Leistungen, Preisen und direktem Kontaktfokus.",
    highlights: [
      "Auffälliger Hero-Bereich für Modellage, Nailart und direkte Terminführung",
      "Klare Bereiche für Leistungen, Preise, Galerie, Reels, Studio und Kontakt",
      "Geeignet für Nagelstudios, Nailart-Angebote und moderne Beauty-Ateliers",
    ],
    previewUrl: "/nagelstudio-sinja-preview/index.html",
  },
];

export const repeatedProducts = [...products, ...products];
