import type { Locale } from "../lib/i18n/config";

export type ProductCharacter = {
  title: string;
  text: string;
};

export type ProductCharacterFallback = {
  eyebrow: string;
  title: string;
  text: string;
};

export const productCharacters: Record<Locale, Record<string, ProductCharacter>> = {
  de: {
    "beauty-haus": {
      title: "Beauty-Auftritt mit echter Website-Anmutung statt Platzhalter.",
      text: "Diese Produktseite zeigt bewusst den Stil des echten Kosmetik-Projekts: elegante Farbwelt, hochwertige Ruhe, klare Behandlungsführung und ein Look, der für Premium-Kosmetik sofort Vertrauen aufbaut.",
    },
    "luna-nails": {
      title: "Nagelstudio-Auftritt mit eleganter Beauty-Wirkung und direktem Terminfokus.",
      text: "Diese Produktseite zeigt den Stil des echten HappyNails-Projekts: ruhige Beauty-Farbwelt, Hero-Video, klare Leistungen, Galerie, Bewertungen und ein Aufbau, der Besucher schnell zur Anfrage führt.",
    },
    "bean-bark": {
      title: "Coffee-Shop-Auftritt mit warmer Markenwirkung und echter Menüführung.",
      text: "Diese Produktseite zeigt den Stil des echten Coffee-Shop-Projekts: warme Farbwelt, starke Markenatmosphäre, klare Menüstruktur und ein Aufbau, der Genuss, Aufenthaltsgefühl und Reservierungen verbindet.",
    },
    "serenity-studio": {
      title: "Wellness-Auftritt mit Buchungskalender und ruhiger Premium-Atmosphäre.",
      text: "Diese Produktseite zeigt den Stil des echten Wellnessstudio-Projekts: großzügige Bildflächen, klare Buchungslogik, Recovery-Fokus und ein hochwertiges Erscheinungsbild für Spa- und Wellness-Angebote.",
    },
    "velora-fashion": {
      title: "Femininer Fashion-Shop mit editorialer Bildsprache und klarer Produktführung.",
      text: "Diese Produktseite zeigt den Stil des echten Damenmode-Shops: ruhige Farbwelt, starke Produktbilder, klare Kategorien und eine Shop-Struktur für Neuheiten, Bestseller und Sale.",
    },
    "autohaus-nordglanz": {
      title: "Autohaus-Auftritt mit echter Bestands- und Suchlogik.",
      text: "Diese Produktseite zeigt den Stil des echten Autohaus-Projekts: starke Fahrzeugbilder, klare Suchführung, vertrauensbildende Struktur und ein Aufbau, der Fahrzeuge und Anfragen sauber zusammenführt.",
    },
    "arztpraxis-weber": {
      title: "Praxis-Auftritt mit klarer Patientenführung und vertrauensvoller Wirkung.",
      text: "Diese Produktseite zeigt den Stil des echten Arztpraxis-Projekts: ruhige medizinische Farbwelt, klare Navigation, Leistungen, Team, Kontakt und ein Aufbau, der Patienten schnell zur richtigen Information führt.",
    },
    "vulkaneifeltherme": {
      title: "Thermen-Auftritt mit Video-Hero, Wellness-Wirkung und direktem Ticketfokus.",
      text: "Diese Produktseite zeigt den Stil des echten Thermen-Projekts: atmosphärischer Video-Einstieg, warme Naturfarben, klare Bereiche für Thermalbad, Sauna, Wellness, Gastronomie, Preise, Öffnungszeiten und ein Aufbau, der Besucher schnell zur Buchung führt.",
    },
    "st-elisabeth-klinikum": {
      title: "Krankenhaus-Auftritt mit klarer Patientenführung und 24/7-Notfallfokus.",
      text: "Diese Produktseite zeigt den Stil des echten Krankenhaus-Projekts: Notfall-Hinweis, Fachbereiche, Ärzteteam, Terminlogik, Patientenstimmen und ein Aufbau, der Patientinnen und Patienten schnell zur richtigen Information führt.",
    },
    "haarwerk-studio": {
      title: "Friseur-Auftritt mit Video-Hero, Salon-Atmosphäre und direktem Terminfokus.",
      text: "Diese Produktseite zeigt den Stil des echten Friseur-Projekts: emotionaler Video-Einstieg, hochwertige Salonbilder, transparente Leistungen, Portfolio, Bewertungen und ein Aufbau, der Besucher schnell zur Terminbuchung führt.",
    },
    "salzgrotte-aura": {
      title: "Salzgrotte-Auftritt mit ruhiger Wellness-Wirkung und direktem Terminfokus.",
      text: "Diese Produktseite zeigt den Stil des echten Salzgrotte-Projekts: warme Naturfarben, atmosphärische Bildflächen, klare Anwendungen, Preise, Öffnungszeiten, Kontakt und ein Aufbau, der Besucher schnell zur Terminbuchung führt.",
    },
    "fussoase-eppendorf": {
      title: "Fußpflege-Auftritt mit ruhiger Beauty-Wirkung und direkter Terminbuchung.",
      text: "Diese Produktseite zeigt den Stil des echten Fußpflege-Projekts: sanfte Farbwelt, Video-Hero, klare Behandlungen, Preise, Galerie, Bewertungen und ein Aufbau, der Besucher schnell zur Terminbuchung führt.",
    },
    "autohaus-falkenstein": {
      title: "Premium-Autohaus-Auftritt mit Video-Hero und direktem Probefahrtfokus.",
      text: "Diese Produktseite zeigt den Stil des echten Autohaus-Projekts: dunkler Premium-Look, starke Fahrzeugbilder, Fahrzeugbestand, Detailseiten, Service- und Finanzierungsbereiche sowie ein Aufbau, der Interessenten schnell zur Probefahrt oder Anfrage führt.",
    },
    "nagelstudio-sinja": {
      title: "Nagelstudio-Auftritt mit kreativer Nailart-Wirkung und direktem Kontaktfokus.",
      text: "Diese Produktseite zeigt den Stil des echten Nagelstudio-Projekts: expressive Hero-Fläche, starke Nailart-Bilder, klare Leistungen, Preise, Reels, Galerie und ein Aufbau, der Besucher schnell zur Anfrage führt.",
    },
    "maison-lumiere": {
      title: "Restaurant-Auftritt mit starker Atmosphäre und direktem Reservierungsfokus.",
      text: "Diese Produktseite zeigt den Stil des echten Restaurant-Projekts: hochwertiger Video-Hero, warme Fine-Dining-Farbwelt, Speisekarte, Galerie, Bewertungen, Standort und ein Aufbau, der Gäste schnell zur Reservierung führt.",
    },
    "aurum-grand-hotel": {
      title: "Luxushotel-Auftritt mit hochwertiger Atmosphäre und direktem Reservierungsfokus.",
      text: "Diese Produktseite zeigt den Stil des echten Hotel-Projekts: Video-Hero, elegante Premium-Farbwelt, Zimmer und Suiten, Restaurant, Spa, Galerie, Kontakt und ein Aufbau, der Gäste schnell zur Reservierungsanfrage führt.",
    },
    "cleanpro-reinigung": {
      title: "Reinigungsfirma-Auftritt mit starkem Angebotsfokus und klarer Leistungsstruktur.",
      text: "Diese Produktseite zeigt den Stil des echten Reinigungsfirma-Projekts: klare Service-Bereiche, vertrauensbildende Kennzahlen, regionale Standorte und ein Aufbau, der Interessenten schnell zur Anfrage führt.",
    },
    "alphaschutz-versicherung": {
      title: "Versicherungsauftritt mit seriöser Markenwirkung und klarem Beratungsfokus.",
      text: "Diese Produktseite zeigt den Stil des echten Versicherungs-Projekts: hochwertiger Hero-Bereich, klare Leistungsstruktur, Prozess, Bewertungen und ein Aufbau, der Vertrauen und Beratungsanfragen sauber zusammenführt.",
    },
  },
  en: {
    "beauty-haus": {
      title: "A beauty presence with the feel of a real website instead of placeholders.",
      text: "This product page deliberately shows the style of the real cosmetics project: an elegant colour palette, high-end calm, clear treatment guidance and a look that immediately builds trust for premium cosmetics.",
    },
    "luna-nails": {
      title: "A nail salon presence with elegant beauty appeal and a direct focus on appointments.",
      text: "This product page shows the style of the real HappyNails project: a calm beauty colour palette, hero video, clear services, gallery, reviews and a structure that quickly guides visitors to an enquiry.",
    },
    "bean-bark": {
      title: "A coffee shop presence with warm brand appeal and real menu guidance.",
      text: "This product page shows the style of the real coffee shop project: a warm colour palette, strong brand atmosphere, clear menu structure and a layout that brings together enjoyment, a sense of place and reservations.",
    },
    "serenity-studio": {
      title: "A wellness presence with a booking calendar and a calm premium atmosphere.",
      text: "This product page shows the style of the real wellness studio project: generous imagery, clear booking logic, a recovery focus and a high-end appearance for spa and wellness offerings.",
    },
    "velora-fashion": {
      title: "A feminine fashion shop with editorial imagery and clear product guidance.",
      text: "This product page shows the style of the real women's fashion shop: a calm colour palette, strong product images, clear categories and a shop structure for new arrivals, bestsellers and sale.",
    },
    "autohaus-nordglanz": {
      title: "A car dealership presence with real inventory and search logic.",
      text: "This product page shows the style of the real car dealership project: strong vehicle images, clear search guidance, a trust-building structure and a layout that neatly brings vehicles and enquiries together.",
    },
    "arztpraxis-weber": {
      title: "A medical practice presence with clear patient guidance and a trustworthy feel.",
      text: "This product page shows the style of the real medical practice project: a calm medical colour palette, clear navigation, services, team, contact and a structure that quickly guides patients to the right information.",
    },
    "vulkaneifeltherme": {
      title: "A thermal spa presence with video hero, wellness appeal and a direct focus on tickets.",
      text: "This product page shows the style of the real thermal spa project: an atmospheric video intro, warm natural colours, clear sections for thermal baths, sauna, wellness, dining, prices, opening hours and a structure that quickly guides visitors to booking.",
    },
    "st-elisabeth-klinikum": {
      title: "A hospital presence with clear patient guidance and a 24/7 emergency focus.",
      text: "This product page shows the style of the real hospital project: emergency notice, departments, medical team, appointment logic, patient testimonials and a structure that quickly guides patients to the right information.",
    },
    "haarwerk-studio": {
      title: "A hair salon presence with video hero, salon atmosphere and a direct focus on appointments.",
      text: "This product page shows the style of the real hair salon project: an emotional video intro, high-quality salon images, transparent services, portfolio, reviews and a structure that quickly guides visitors to appointment booking.",
    },
    "salzgrotte-aura": {
      title: "A salt cave presence with a calm wellness feel and a direct focus on appointments.",
      text: "This product page shows the style of the real salt cave project: warm natural colours, atmospheric imagery, clear treatments, prices, opening hours, contact and a structure that quickly guides visitors to appointment booking.",
    },
    "fussoase-eppendorf": {
      title: "A foot care presence with a calm beauty feel and direct appointment booking.",
      text: "This product page shows the style of the real foot care project: a soft colour palette, video hero, clear treatments, prices, gallery, reviews and a structure that quickly guides visitors to appointment booking.",
    },
    "autohaus-falkenstein": {
      title: "A premium car dealership presence with video hero and a direct focus on test drives.",
      text: "This product page shows the style of the real car dealership project: a dark premium look, strong vehicle images, vehicle inventory, detail pages, service and financing sections, and a structure that quickly guides prospects to a test drive or enquiry.",
    },
    "nagelstudio-sinja": {
      title: "A nail salon presence with creative nailart appeal and a direct focus on contact.",
      text: "This product page shows the style of the real nail salon project: an expressive hero area, strong nailart images, clear services, prices, reels, gallery and a structure that quickly guides visitors to an enquiry.",
    },
    "maison-lumiere": {
      title: "A restaurant presence with strong atmosphere and a direct focus on reservations.",
      text: "This product page shows the style of the real restaurant project: a high-quality video hero, warm fine dining colour palette, menu, gallery, reviews, location and a structure that quickly guides guests to a reservation.",
    },
    "aurum-grand-hotel": {
      title: "A luxury hotel presence with a high-end atmosphere and a direct focus on reservations.",
      text: "This product page shows the style of the real hotel project: video hero, elegant premium colour palette, rooms and suites, restaurant, spa, gallery, contact and a structure that quickly guides guests to a reservation request.",
    },
    "cleanpro-reinigung": {
      title: "A cleaning company presence with a strong focus on quotes and a clear service structure.",
      text: "This product page shows the style of the real cleaning company project: clear service areas, trust-building key figures, regional locations and a structure that quickly guides prospects to an enquiry.",
    },
    "alphaschutz-versicherung": {
      title: "An insurance presence with a professional brand impact and a clear focus on advice.",
      text: "This product page shows the style of the real insurance project: a high-quality hero section, clear service structure, process, reviews and a structure that neatly brings together trust and consultation requests.",
    },
  },
};

export const productCharacterFallback: Record<Locale, ProductCharacterFallback> = {
  de: {
    eyebrow: "Vorbereitet für dein Produkt",
    title: "Diese Seite ist dein Vorbau für spätere echte Inhalte.",
    text: "Hier können später dein finaler Text, deine echten Screenshots, Funktionen, Preisstruktur und dein individueller Verkaufsaufbau rein.",
  },
  en: {
    eyebrow: "Prepared for your product",
    title: "This page is your foundation for real content later on.",
    text: "Your final copy, real screenshots, features, pricing structure and individual sales flow can go here later.",
  },
};
