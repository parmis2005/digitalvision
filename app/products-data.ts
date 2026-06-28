export type ProductItem = {
  slug: string;
  type: string;
  title: string;
  detail: string;
  variant: "earth" | "forest" | "studio" | "fashion" | "portal" | "schedule" | "seo" | "auto" | "coffee" | "wellness";
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
    slug: "lead-funnel",
    type: "SEO Landingpage",
    title: "Lead-Funnel",
    detail: "Klarer Aufbau mit Ranking- und Anfragefokus",
    variant: "forest",
    category: "SEO",
    intro: "Vorlage für Seiten, die Leistungen sauber erklären, Sichtbarkeit aufbauen und Interessenten in Anfragen verwandeln.",
    highlights: [
      "SEO-orientierte Seitenstruktur",
      "Fokus auf Google-Ranking und Conversion",
      "Geeignet für lokale Angebote und Kampagnenseiten",
    ],
  },
  {
    slug: "creative-showcase",
    type: "Portfolio",
    title: "Creative Showcase",
    detail: "Visuelle Website für Personen und Marken",
    variant: "studio",
    category: "Webseiten",
    intro: "Vorlage für kreative Portfolios, Personal Brands und visuell geführte Markenpräsentationen.",
    highlights: [
      "Starke Typografie und Bildflächen",
      "Ideal für kreative Berufe",
      "Aufbau für Referenzen, Über-mich und Kontakt",
    ],
  },
  {
    slug: "kundenportal",
    type: "Verwaltungssystem",
    title: "Business Hub",
    detail: "Zentrale Verwaltung für Anfragen, Inhalte und Prozesse",
    variant: "portal",
    category: "Verwaltungssysteme",
    intro: "Vorlage für interne Systeme, in denen du Anfragen, Inhalte, Kundenabläufe oder Zugriffe zentral steuerst.",
    highlights: [
      "Geschützter Login-Bereich",
      "Saubere Prozess- und Datenverwaltung",
      "Geeignet für Teams, Agenturen und Dienstleister",
    ],
  },
  {
    slug: "buchungsseite",
    type: "Termin-System",
    title: "Termin Flow",
    detail: "Terminbuchung, Zeitfenster und Kontakt in einem klaren Ablauf",
    variant: "schedule",
    category: "Verwaltungssysteme",
    intro: "Vorlage für Buchungs- und Terminseiten, bei denen Nutzer schnell zum passenden Slot und zur Anfrage geführt werden.",
    highlights: [
      "Klare Nutzerführung für Terminbuchungen",
      "Ideal für Beratung, Events und Services",
      "Kann später mit Formularen und Automationen erweitert werden",
    ],
  },
  {
    slug: "service-hub",
    type: "SEO & Struktur",
    title: "Service Hub",
    detail: "Mehr Sichtbarkeit für Leistungen und lokale Suche",
    variant: "seo",
    category: "SEO",
    intro: "Vorlage für strukturierte Leistungsseiten mit sauberer Informationsarchitektur und Fokus auf Sichtbarkeit.",
    highlights: [
      "Saubere Content-Struktur für mehrere Leistungen",
      "Stark für lokale Suchbegriffe",
      "Ideal als Basis für spätere SEO-Erweiterungen",
    ],
  },
];

export const repeatedProducts = [...products, ...products];
