export type BlogSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  date: string;
  updatedAt?: string;
  readingTime: string;
  focusKeyword: string;
  featured?: boolean;
  takeaways: string[];
  sections: BlogSection[];
  faq: BlogFaq[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "website-planen-vor-dem-design",
    title: "Website planen: Was vor dem Design geklärt sein sollte",
    description:
      "Eine gute Website beginnt nicht mit Farben, sondern mit Ziel, Struktur, Inhalten und einem klaren Weg zur Anfrage.",
    excerpt:
      "Bevor ein Layout entsteht, sollten Zielgruppe, Leistungen, Kontaktwege und Inhalte sauber sortiert sein. So wird aus einer Website ein funktionierender digitaler Auftritt.",
    category: "Websites",
    date: "2026-08-02",
    readingTime: "6 Min. Lesezeit",
    focusKeyword: "Website planen",
    featured: true,
    takeaways: [
      "Eine Website braucht zuerst ein klares Ziel.",
      "Struktur und Inhalte entscheiden, ob Besucher verstehen, was angeboten wird.",
      "Design wirkt besser, wenn die Nutzerführung vorher feststeht.",
    ],
    sections: [
      {
        heading: "Warum Planung wichtiger ist als der erste Entwurf",
        body: [
          "Viele Projekte starten direkt mit Farben, Bildern und Animationen. Das sieht schnell nach Fortschritt aus, löst aber selten das eigentliche Problem. Eine Website muss zuerst erklären, wer du bist, was du anbietest und warum Besucher den nächsten Schritt machen sollten.",
          "Wenn diese Grundlage fehlt, wird selbst ein hochwertiges Design unruhig. Gute Planung sorgt dafür, dass jede Fläche eine Aufgabe hat.",
        ],
      },
      {
        heading: "Diese Fragen sollten vor dem Aufbau geklärt sein",
        body: [
          "Eine starke Website entsteht aus klaren Entscheidungen. Welche Leistung steht im Fokus? Welche Zielgruppe soll angesprochen werden? Welche Fragen müssen beantwortet werden, bevor jemand Kontakt aufnimmt?",
          "Auch der Ablauf nach der Anfrage gehört dazu. Ein Kontaktformular bringt wenig, wenn danach intern Chaos entsteht.",
        ],
        bullets: [
          "Welche Leistung soll zuerst verstanden werden?",
          "Welche Einwände haben Besucher vor der Anfrage?",
          "Welche Beispiele, Bewertungen oder Bilder schaffen Vertrauen?",
          "Welche Aktion soll auf jeder Seite möglich sein?",
        ],
      },
      {
        heading: "Wie DigitalVision Websites strukturiert",
        body: [
          "DigitalVision plant Websites als klare Wege: Einstieg, Orientierung, Vertrauen, Entscheidung und Kontakt. Dadurch wirkt die Seite nicht nur moderner, sondern wird für Besucher leichter verständlich.",
          "Das Ergebnis ist keine reine Online-Visitenkarte, sondern ein Auftritt, der zur Branche, zum Angebot und zum Alltag des Unternehmens passt.",
        ],
      },
    ],
    faq: [
      {
        question: "Wann sollte man mit der Website-Planung beginnen?",
        answer:
          "Am besten vor Design und Umsetzung. Je früher Ziel, Seitenstruktur und Inhalte klar sind, desto sauberer wird das Ergebnis.",
      },
      {
        question: "Braucht jede Website viele Unterseiten?",
        answer:
          "Nein. Wichtig ist nicht die Menge, sondern ob die Seiten die wichtigsten Leistungen und Fragen klar abdecken.",
      },
      {
        question: "Kann DigitalVision auch bestehende Websites neu strukturieren?",
        answer:
          "Ja. Bestehende Inhalte können analysiert, neu geordnet und in einen klareren Aufbau gebracht werden.",
      },
    ],
  },
  {
    slug: "branchenwebsites-richtig-aufbauen",
    title: "Warum Praxis, Studio und Beratung nicht gleich aussehen sollten",
    description:
      "Branchenwebsites funktionieren besser, wenn Aufbau, Bildsprache und Kontaktführung zum echten Angebot passen.",
    excerpt:
      "Eine Arztpraxis braucht andere Signale als ein Nagelstudio, eine Versicherung oder ein Online-Shop. Genau deshalb sollte jede Website einen eigenen Aufbau bekommen.",
    category: "Branchen",
    date: "2026-08-02",
    readingTime: "7 Min. Lesezeit",
    focusKeyword: "Branchenwebsite",
    featured: true,
    takeaways: [
      "Jede Branche hat andere Vertrauenssignale.",
      "Der Aufbau sollte zur Entscheidungssituation der Kunden passen.",
      "Gute Websites fühlen sich nicht austauschbar an.",
    ],
    sections: [
      {
        heading: "Warum Vorlagen oft nicht reichen",
        body: [
          "Viele Websites wirken gleich, obwohl die Unternehmen dahinter völlig unterschiedlich sind. Das passiert, wenn Layouts nur optisch angepasst werden, aber nicht an die Branche und das Angebot.",
          "Ein Studio verkauft Atmosphäre und Terminvertrauen. Eine Praxis verkauft Kompetenz und Erreichbarkeit. Eine Beratung verkauft Sicherheit und Klarheit. Diese Unterschiede müssen im Aufbau sichtbar werden.",
        ],
      },
      {
        heading: "Der richtige Schwerpunkt pro Branche",
        body: [
          "Bei lokalen Dienstleistern sind schnelle Kontaktwege, Bewertungen und Leistungen wichtig. Bei beratungsintensiven Angeboten braucht es mehr Erklärung, Prozess und Vertrauen. Bei Shops zählen Produktführung, Kategorien und ein leichter Kaufweg.",
          "Die Frage ist deshalb nicht: Welche Website sieht schön aus? Sondern: Welche Website hilft Kunden, schneller zu verstehen und sicherer zu entscheiden?",
        ],
        bullets: [
          "Praxis: Erreichbarkeit, Leistungen, Team, Termine",
          "Studio: Atmosphäre, Bilder, Preise, Buchung",
          "Beratung: Vertrauen, Ablauf, Nutzen, Kontakt",
          "Shop: Kategorien, Produkte, Orientierung, Kaufimpuls",
        ],
      },
      {
        heading: "Wie daraus ein passender Look entsteht",
        body: [
          "Der Look folgt dem Inhalt. Farben, Typografie, Bildflächen und Abstände sollten die Positionierung unterstützen. Eine Website für Wellness darf ruhig und hochwertig wirken, während eine Reinigungsfirma klarer, direkter und leistungsorientierter auftreten sollte.",
          "So entsteht ein Auftritt, der nicht generisch aussieht, sondern zur Marke passt.",
        ],
      },
    ],
    faq: [
      {
        question: "Kann DigitalVision Websites für unterschiedliche Branchen bauen?",
        answer:
          "Ja. DigitalVision erstellt individuelle Website-Konzepte für Praxen, Studios, Dienstleister, Beratungen, Shops und weitere Branchen.",
      },
      {
        question: "Warum ist der Branchenlook wichtig?",
        answer:
          "Weil Besucher innerhalb weniger Sekunden spüren, ob eine Website professionell wirkt und zum erwarteten Angebot passt.",
      },
      {
        question: "Soll eine Branchenwebsite komplett individuell sein?",
        answer:
          "Sie sollte mindestens in Struktur, Text, Bildsprache und Kontaktführung individuell auf das Angebot abgestimmt sein.",
      },
    ],
  },
  {
    slug: "kundenanfragen-digital-organisieren",
    title: "Kundenanfragen digital organisieren: Vom Formular zum Überblick",
    description:
      "Wie Kontaktformulare, Terminwünsche und interne Abläufe besser zusammenarbeiten, damit keine Anfrage verloren geht.",
    excerpt:
      "Eine moderne Website endet nicht beim Formular. Entscheidend ist, was danach passiert: Benachrichtigung, Übersicht, Status und klare Zuständigkeit.",
    category: "Prozesse",
    date: "2026-08-02",
    readingTime: "6 Min. Lesezeit",
    focusKeyword: "Kundenanfragen organisieren",
    takeaways: [
      "Anfragen sollten sichtbar, sortierbar und nachvollziehbar sein.",
      "Ein gutes Formular fragt nur ab, was wirklich gebraucht wird.",
      "Digitale Prozesse sparen Zeit, wenn sie zum Team passen.",
    ],
    sections: [
      {
        heading: "Warum Formulare allein nicht genug sind",
        body: [
          "Ein Kontaktformular ist nur der Eingang. Wenn Anfragen danach in E-Mails untergehen, mehrfach beantwortet werden oder niemand den Status kennt, entsteht unnötiger Aufwand.",
          "Ein sauberer digitaler Ablauf macht sichtbar, welche Anfrage neu ist, wer zuständig ist und was als Nächstes passieren muss.",
        ],
      },
      {
        heading: "Welche Informationen wirklich wichtig sind",
        body: [
          "Je länger ein Formular ist, desto eher brechen Besucher ab. Trotzdem braucht ein Unternehmen genug Informationen, um sinnvoll reagieren zu können. Gute Formulare treffen diesen Mittelweg.",
          "Statt alles abzufragen, sollten nur die wichtigsten Angaben erfasst werden: Anliegen, Kontaktmöglichkeit, Zeitraum und relevante Details zum Projekt.",
        ],
        bullets: [
          "Kurze Felder mit klarer Beschriftung",
          "Auswahlmöglichkeiten für typische Anliegen",
          "Automatische Bestätigung nach dem Absenden",
          "Interne Übersicht für neue und bearbeitete Anfragen",
        ],
      },
      {
        heading: "Vom Formular zum kleinen System",
        body: [
          "Je nach Bedarf kann aus einer Website ein einfaches Anfrage-System entstehen. Dort werden Kontakte gesammelt, sortiert und weiterbearbeitet.",
          "Für Studios, Praxen, Dienstleister und Beratungen kann das den Alltag deutlich vereinfachen, weil Website und Verwaltung zusammenarbeiten.",
        ],
      },
    ],
    faq: [
      {
        question: "Kann ein Formular mit einem Dashboard verbunden werden?",
        answer:
          "Ja. Anfragen können in einem Admin-Bereich gesammelt, markiert und weiterbearbeitet werden.",
      },
      {
        question: "Was sollte ein Kontaktformular abfragen?",
        answer:
          "Nur die Informationen, die für eine erste Einschätzung nötig sind. Zu viele Pflichtfelder senken die Anfragequote.",
      },
      {
        question: "Lohnt sich ein digitales Anfrage-System für kleine Unternehmen?",
        answer:
          "Ja, wenn regelmäßig Anfragen eingehen und der Überblick über Status, Rückmeldung oder Zuständigkeit wichtig ist.",
      },
    ],
  },
  {
    slug: "online-shop-oder-website",
    title: "Online-Shop oder Website: Welche Lösung passt zu deinem Angebot?",
    description:
      "Nicht jedes Unternehmen braucht sofort einen kompletten Shop. Oft entscheidet der Angebotsprozess, welche digitale Lösung sinnvoll ist.",
    excerpt:
      "Produkte, Buchungen, Anfragen und Beratung brauchen unterschiedliche Wege. Ein guter digitaler Auftritt wählt die passende Lösung statt unnötige Funktionen einzubauen.",
    category: "Online-Shops",
    date: "2026-08-02",
    readingTime: "7 Min. Lesezeit",
    focusKeyword: "Online-Shop oder Website",
    takeaways: [
      "Ein Shop lohnt sich, wenn Produkte direkt online verkauft werden sollen.",
      "Für Beratungen und Dienstleistungen reicht oft ein klarer Anfrageprozess.",
      "Die Lösung sollte zum Kaufverhalten der Kunden passen.",
    ],
    sections: [
      {
        heading: "Der Unterschied liegt im nächsten Schritt",
        body: [
          "Eine Website informiert und führt zur Anfrage. Ein Online-Shop führt zum Kauf. Dazwischen gibt es viele Mischformen: Buchungsseiten, Produktkataloge, Anfrage-Konfiguratoren oder Landingpages.",
          "Die richtige Lösung hängt davon ab, wie Kunden entscheiden. Kaufen sie sofort? Vergleichen sie zuerst? Brauchen sie Beratung oder einen Termin?",
        ],
      },
      {
        heading: "Wann ein Online-Shop sinnvoll ist",
        body: [
          "Ein Shop ist sinnvoll, wenn Produkte klar beschrieben, bepreist und direkt versendet oder digital bereitgestellt werden können. Dann zählen gute Kategorien, Produktseiten, Warenkorb und ein sauberer Checkout.",
          "Für Mode, Beauty-Produkte, digitale Vorlagen oder klar definierte Angebote kann ein Shop ein starker Verkaufskanal sein.",
        ],
        bullets: [
          "Produkte sind eindeutig und direkt kaufbar",
          "Preise und Varianten sind klar",
          "Kunden brauchen wenig persönliche Beratung",
          "Versand, Zahlung und Bestellabwicklung sind vorbereitet",
        ],
      },
      {
        heading: "Wann eine Website besser passt",
        body: [
          "Wenn das Angebot individuell ist, sollte die Website zuerst Vertrauen und Klarheit aufbauen. Dann ist eine Anfrage, ein Erstgespräch oder eine Terminbuchung oft sinnvoller als ein Warenkorb.",
          "DigitalVision plant solche Entscheidungen früh, damit die Website nicht unnötig kompliziert wird.",
        ],
      },
    ],
    faq: [
      {
        question: "Kann man eine Website später zum Shop erweitern?",
        answer:
          "Ja, wenn Struktur und Technik sinnvoll geplant sind, kann ein Shop später ergänzt werden.",
      },
      {
        question: "Braucht ein kleiner Shop viele Funktionen?",
        answer:
          "Nein. Ein kleiner Shop sollte übersichtlich starten und nur Funktionen enthalten, die wirklich gebraucht werden.",
      },
      {
        question: "Was ist besser für Dienstleistungen?",
        answer:
          "Für Dienstleistungen ist häufig eine klare Website mit Anfrage- oder Buchungsfunktion besser als ein klassischer Shop.",
      },
    ],
  },
  {
    slug: "verwaltungssystem-dashboard-statt-excel",
    title: "Verwaltungssystem statt Excel-Chaos: Wann ein Dashboard hilft",
    description:
      "Wann Unternehmen von einem eigenen Verwaltungssystem profitieren und welche Abläufe sich durch Dashboards vereinfachen lassen.",
    excerpt:
      "Wenn Anfragen, Kundendaten oder Termine über mehrere Listen verteilt sind, wird Arbeit unnötig langsam. Ein eigenes System schafft Überblick.",
    category: "Systeme",
    date: "2026-08-02",
    readingTime: "7 Min. Lesezeit",
    focusKeyword: "Verwaltungssystem",
    takeaways: [
      "Ein Dashboard lohnt sich, wenn Abläufe wiederholt und fehleranfällig sind.",
      "Zentrale Übersichten reduzieren Sucherei und doppelte Arbeit.",
      "Individuelle Systeme sollten genau zum Alltag des Unternehmens passen.",
    ],
    sections: [
      {
        heading: "Wann Excel nicht mehr reicht",
        body: [
          "Tabellen sind für den Start praktisch. Sobald mehrere Personen, viele Anfragen oder wiederkehrende Prozesse beteiligt sind, entstehen schnell Fehler: doppelte Daten, veraltete Stände und unklare Verantwortlichkeiten.",
          "Ein Verwaltungssystem lohnt sich besonders dann, wenn Informationen zentral verfügbar sein sollen und Arbeitsschritte regelmäßig wiederkehren.",
        ],
      },
      {
        heading: "Typische Einsatzbereiche",
        body: [
          "Ein eigenes Dashboard kann Kundenanfragen, Termine, Leistungen, Produkte, Projektstatus oder interne Aufgaben verwalten. Wichtig ist nicht die Menge der Funktionen, sondern die Passung zum echten Alltag.",
          "Ein gutes System nimmt Arbeit ab, statt neue Komplexität zu erzeugen.",
        ],
        bullets: [
          "Anfragen zentral erfassen und bearbeiten",
          "Inhalte oder Angebote selbst verwalten",
          "Termine, Status und Aufgaben sichtbar machen",
          "Wiederkehrende Schritte automatisieren",
        ],
      },
      {
        heading: "Warum individuelle Systeme oft besser passen",
        body: [
          "Standardtools können viel, sind aber häufig überladen. Ein individuelles Verwaltungssystem konzentriert sich auf genau die Funktionen, die das Unternehmen wirklich braucht.",
          "So entsteht weniger Ablenkung, bessere Akzeptanz im Team und ein sauberer Prozess vom Eingang bis zur Auswertung.",
        ],
      },
    ],
    faq: [
      {
        question: "Was ist ein Verwaltungssystem?",
        answer:
          "Ein Verwaltungssystem ist ein digitaler Bereich, in dem Inhalte, Anfragen, Termine, Kunden oder Prozesse zentral organisiert werden.",
      },
      {
        question: "Brauche ich ein Dashboard oder reicht eine Website?",
        answer:
          "Eine Website ist für Besucher. Ein Dashboard ist für interne Verwaltung. Wenn Daten nach einer Anfrage weiterverarbeitet werden müssen, kann ein Dashboard sinnvoll sein.",
      },
      {
        question: "Kann ein Verwaltungssystem mit der Website verbunden werden?",
        answer:
          "Ja. Formulare, Anfragen, Inhalte oder Termine können direkt mit einem Admin-Bereich verbunden werden.",
      },
    ],
  },
  {
    slug: "website-pflege-nach-dem-launch",
    title: "Nach dem Launch: Warum eine Website Pflege braucht",
    description:
      "Eine Website ist nach dem Launch nicht fertig. Inhalte, Technik, Bilder, Formulare und Erweiterungen sollten regelmäßig geprüft werden.",
    excerpt:
      "Der Launch ist nur der Start. Damit eine Website professionell bleibt, müssen Inhalte aktuell, Formulare funktionsfähig und Technik sauber gepflegt werden.",
    category: "Betreuung",
    date: "2026-08-02",
    readingTime: "6 Min. Lesezeit",
    focusKeyword: "Website Pflege",
    takeaways: [
      "Websites sollten nach dem Launch regelmäßig geprüft werden.",
      "Aktuelle Inhalte wirken vertrauenswürdiger.",
      "Technische Pflege schützt vor Fehlern, Langsamkeit und veralteten Bereichen.",
    ],
    sections: [
      {
        heading: "Warum der Launch nicht das Ende ist",
        body: [
          "Nach dem Launch verändert sich fast jedes Unternehmen weiter. Leistungen kommen dazu, Preise ändern sich, Bilder werden alt oder Kontaktwege passen nicht mehr. Wenn die Website nicht mitzieht, wirkt sie schnell veraltet.",
          "Regelmäßige Pflege sorgt dafür, dass Besucher aktuelle Informationen finden und das Unternehmen professionell wahrnehmen.",
        ],
      },
      {
        heading: "Was regelmäßig geprüft werden sollte",
        body: [
          "Nicht jede Website braucht jede Woche neue Inhalte. Trotzdem sollten die wichtigsten Bereiche kontrolliert werden: Formulare, Ladezeiten, Texte, Bilder, Links und rechtliche Pflichtseiten.",
          "Gerade kleine Fehler fallen intern oft nicht auf, können aber Anfragen kosten.",
        ],
        bullets: [
          "Kontaktformulare testen",
          "Leistungen und Öffnungszeiten aktualisieren",
          "Bilder und Referenzen erneuern",
          "Technische Updates und Ladezeiten prüfen",
        ],
      },
      {
        heading: "Wie Betreuung entlasten kann",
        body: [
          "Viele Unternehmen wollen ihre Website nutzen, aber nicht ständig technisch betreuen. Eine laufende Betreuung nimmt diese Arbeit ab und hält den Auftritt sauber.",
          "DigitalVision kann Inhalte, Technik und Erweiterungen so begleiten, dass die Website langfristig nutzbar bleibt.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie oft sollte eine Website gepflegt werden?",
        answer:
          "Das hängt vom Projekt ab. Inhalte sollten immer dann aktualisiert werden, wenn sich Leistungen, Öffnungszeiten, Preise oder Ansprechpartner ändern.",
      },
      {
        question: "Kann ich Inhalte selbst ändern?",
        answer:
          "Je nach Aufbau kann ein Admin-Bereich sinnvoll sein, damit Texte, Bilder oder Angebote selbst gepflegt werden können.",
      },
      {
        question: "Warum sind Formular-Tests wichtig?",
        answer:
          "Weil defekte Formulare direkt Anfragen kosten können. Sie sollten nach Änderungen und in regelmäßigen Abständen geprüft werden.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  return blogPosts
    .filter((entry) => entry.slug !== post.slug)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) {
        return -1;
      }

      if (a.category !== post.category && b.category === post.category) {
        return 1;
      }

      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit);
}
