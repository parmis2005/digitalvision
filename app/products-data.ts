export type ProductItem = {
  slug: string;
  type: string;
  title: string;
  detail: string;
  variant: "earth" | "forest" | "studio" | "portal" | "schedule" | "seo";
  category: string;
  intro: string;
  highlights: string[];
};

export const products: ProductItem[] = [
  {
    slug: "luxus-homepage",
    type: "Brand Website",
    title: "Luxus Homepage",
    detail: "Markenauftritt mit starkem ersten Eindruck",
    variant: "earth",
    category: "Webseiten",
    intro: "Vorlage für hochwertige Unternehmensseiten mit starker Bildsprache, klarer Struktur und exklusiver Wirkung.",
    highlights: [
      "Edles Layout für Premium-Marken",
      "Klare Conversion-Flächen und Kontaktpunkte",
      "Ideal für Dienstleister, Studios und starke Markenauftritte",
    ],
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
