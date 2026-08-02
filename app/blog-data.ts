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
    slug: "webseite-erstellen-lassen-unternehmen",
    title: "Webseite erstellen lassen: Worauf Unternehmen achten sollten",
    description:
      "Ein praktischer Leitfaden für Unternehmen, die eine professionelle Website erstellen lassen möchten: Struktur, Inhalte, SEO, Vertrauen und Conversion.",
    excerpt:
      "Eine gute Unternehmenswebsite braucht mehr als ein modernes Design. Entscheidend sind klare Ziele, saubere Struktur, schnelle Ladezeiten und Inhalte, die Vertrauen aufbauen.",
    category: "Webdesign",
    date: "2026-08-02",
    readingTime: "7 Min. Lesezeit",
    focusKeyword: "Webseite erstellen lassen",
    featured: true,
    takeaways: [
      "Eine Website sollte zuerst ein klares Geschaeftsziel verfolgen.",
      "Struktur, Texte, Design und Technik müssen zusammen geplant werden.",
      "SEO beginnt nicht nach dem Launch, sondern bei der Seitenarchitektur.",
    ],
    sections: [
      {
        heading: "Warum eine Website kein digitales Prospekt sein sollte",
        body: [
          "Viele Unternehmen sehen ihre Website zuerst als optische Visitenkarte. Das ist zu wenig. Eine moderne Website muss Besucher führen, Fragen beantworten und aus Interesse eine konkrete Anfrage machen.",
          "Bevor Design oder Farben entschieden werden, sollte klar sein, welche Leistung verkauft wird, welche Zielgruppe erreicht werden soll und welcher nächste Schritt auf jeder Seite logisch ist.",
        ],
      },
      {
        heading: "Die wichtigsten Bausteine einer professionellen Website",
        body: [
          "Eine starke Startseite erklärt sofort, wer das Unternehmen ist, welches Problem gelöst wird und warum Besucher vertrauen können. Danach folgen Leistungen, Referenzen, Ablauf, häufige Fragen und ein einfacher Kontaktweg.",
          "Gerade für lokale Dienstleister ist eine klare Leistungsstruktur wichtig. Jede wichtige Leistung sollte eine eigene, suchmaschinenfreundliche Fläche bekommen, statt nur als kurzer Stichpunkt auf einer Sammelseite zu stehen.",
        ],
        bullets: [
          "Klare Hero-Botschaft mit direktem Nutzen",
          "Leistungsbereiche mit eigener Struktur",
          "Vertrauenssignale wie Beispiele, Bewertungen oder Prozess",
          "Schneller Kontakt auf Desktop und Smartphone",
        ],
      },
      {
        heading: "SEO gehört in die Planung",
        body: [
          "Wenn SEO erst nach dem Design beginnt, entstehen oft unklare URLs, doppelte Inhalte oder Seiten ohne Suchintention. Besser ist es, die wichtigsten Suchbegriffe und Themen schon vor dem Aufbau zu definieren.",
          "Dazu gehoeren sprechende Seitentitel, klare H1- und H2-Strukturen, interne Verlinkung, schnelle Ladezeiten und Inhalte, die echte Fragen beantworten.",
        ],
      },
      {
        heading: "Was DigitalVision anders macht",
        body: [
          "DigitalVision verbindet Webdesign, SEO-Struktur und technische Umsetzung in einem Prozess. Ziel ist kein austauschbares Layout, sondern eine Website, die zur Branche passt und Anfragen erleichtert.",
          "Der Aufbau wird so geplant, dass Besucher die richtige Information schnell finden und Google die Inhalte sauber einordnen kann.",
        ],
      },
    ],
    faq: [
      {
        question: "Was kostet es, eine Website erstellen zu lassen?",
        answer:
          "Das haengt von Umfang, Seitenanzahl, Designanspruch, SEO-Zielen und Zusatzfunktionen ab. DigitalVision bietet Websites mit Anzahlung oder als monatliches Modell an.",
      },
      {
        question: "Wie lange dauert eine professionelle Website?",
        answer:
          "Kleine Unternehmensseiten können oft in wenigen Wochen umgesetzt werden. Umfangreichere Projekte mit mehreren Unterseiten, SEO-Struktur oder Systemfunktionen brauchen mehr Planung.",
      },
      {
        question: "Kann eine neue Website direkt für Google optimiert werden?",
        answer:
          "Ja. Dafür sollten Struktur, URLs, Inhalte, Meta-Daten, interne Links und technische Performance von Anfang an berücksichtigt werden.",
      },
    ],
  },
  {
    slug: "lokale-seo-google-ranking",
    title: "Lokale SEO: Wie Unternehmen bei Google besser gefunden werden",
    description:
      "Lokale SEO für Dienstleister und Unternehmen: So verbessern Standortseiten, Leistungsseiten, Google-Unternehmensprofil und Inhalte die Sichtbarkeit.",
    excerpt:
      "Wer lokal gefunden werden will, braucht mehr als eine schoene Website. Entscheidend sind Standortbezug, klare Leistungen und ein konsistentes Vertrauenssignal.",
    category: "SEO",
    date: "2026-08-02",
    readingTime: "8 Min. Lesezeit",
    focusKeyword: "lokale SEO",
    featured: true,
    takeaways: [
      "Lokale SEO verbindet Website, Standortsignale und Vertrauen.",
      "Leistungsseiten sollten konkrete Suchanfragen abdecken.",
      "Google-Unternehmensprofil, Bewertungen und Kontaktdaten müssen zusammenpassen.",
    ],
    sections: [
      {
        heading: "Was lokale SEO bedeutet",
        body: [
          "Lokale SEO sorgt dafür, dass ein Unternehmen bei Suchanfragen mit regionalem Bezug besser gefunden wird. Das betrifft zum Beispiel Suchanfragen wie Webdesign Mönchengladbach, SEO Agentur in der Nähe oder Website erstellen lassen für Handwerker.",
          "Google bewertet dabei nicht nur die Website selbst, sondern auch Standortdaten, Bewertungen, Branchenbezug und die Klarheit der angebotenen Leistungen.",
        ],
      },
      {
        heading: "Die Website bleibt die Basis",
        body: [
          "Ein Google-Unternehmensprofil hilft, ersetzt aber keine starke Website. Die Website erklärt Leistungen, beantwortet Fragen und schafft Vertrauen, bevor jemand Kontakt aufnimmt.",
          "Wichtig ist, dass zentrale Leistungen nicht nur in einem Menue stehen, sondern mit eigenen Texten, Beispielen und Kontaktwegen sichtbar werden.",
        ],
        bullets: [
          "Eine eigene Seite pro wichtiger Leistung",
          "Standort und Einzugsgebiet klar nennen",
          "Einheitliche Telefonnummer, Adresse und E-Mail",
          "Bewertungen und Projektbeispiele einbinden",
        ],
      },
      {
        heading: "Warum Inhalte lokal konkret sein müssen",
        body: [
          "Allgemeine Texte wie Wir sind Ihr Partner für alles bringen wenig. Besser sind klare Aussagen: Welche Leistung wird angeboten, für wen, in welchem Gebiet und mit welchem Ergebnis?",
          "Je konkreter eine Seite eine Suchintention beantwortet, desto leichter können Besucher und Suchmaschinen den Nutzen verstehen.",
        ],
      },
      {
        heading: "Wie DigitalVision lokale SEO aufbaut",
        body: [
          "DigitalVision plant lokale Sichtbarkeit über Struktur, Texte, technische Sauberkeit und klare Anfragewege. Besonders für Dienstleister, Praxen, Studios und Beratungen ist das ein wichtiger Hebel.",
          "Ziel ist eine Website, die nicht nur besucht wird, sondern Besucher zu passenden Anfragen führt.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie schnell wirkt lokale SEO?",
        answer:
          "Erste Verbesserungen können nach einigen Wochen sichtbar werden. Nachhaltige lokale Rankings brauchen aber saubere Inhalte, technische Pflege und kontinuierliche Optimierung.",
      },
      {
        question: "Braucht jedes Unternehmen lokale SEO?",
        answer:
          "Wenn Kunden regional suchen oder ein Standort wichtig ist, lohnt lokale SEO fast immer. Das gilt für Praxen, Studios, Handwerker, Beratungen und viele Dienstleister.",
      },
      {
        question: "Was ist wichtiger: Website oder Google-Unternehmensprofil?",
        answer:
          "Beides gehört zusammen. Das Profil erzeugt Sichtbarkeit in Maps und lokalen Ergebnissen, die Website baut Vertrauen auf und erklärt Leistungen ausführlicher.",
      },
    ],
  },
  {
    slug: "moderne-webseiten-struktur-conversion",
    title: "Moderne Webseiten brauchen Struktur, nicht nur Design",
    description:
      "Warum gutes Webdesign erst wirkt, wenn Seitenaufbau, Nutzerführung, Vertrauen und Conversion zusammenspielen.",
    excerpt:
      "Schoene Websites werden schnell vergessen, wenn Besucher nicht verstehen, was sie tun sollen. Struktur entscheidet, ob aus Aufmerksamkeit eine Anfrage wird.",
    category: "Webdesign",
    date: "2026-08-02",
    readingTime: "6 Min. Lesezeit",
    focusKeyword: "moderne Website",
    takeaways: [
      "Design muss Orientierung geben, nicht nur gut aussehen.",
      "Jede Seite braucht eine klare Aufgabe.",
      "Vertrauen entsteht durch Aufbau, Sprache und Beweise.",
    ],
    sections: [
      {
        heading: "Der erste Eindruck reicht nicht",
        body: [
          "Eine moderne Website kann visuell stark sein und trotzdem wenig bringen. Wenn Besucher nicht schnell verstehen, welche Leistung angeboten wird und warum sie vertrauen sollen, verlassen sie die Seite wieder.",
          "Design ist deshalb kein Selbstzweck. Es muss Inhalte ordnen, Prioritaeten sichtbar machen und den nächsten Schritt erleichtern.",
        ],
      },
      {
        heading: "Gute Struktur beantwortet Fragen in der richtigen Reihenfolge",
        body: [
          "Besucher kommen selten ohne Frage auf eine Website. Sie wollen wissen, ob das Unternehmen ihr Problem versteht, ob die Leistung passt, wie der Ablauf ist und wie sie Kontakt aufnehmen können.",
          "Eine gute Seite führt durch diese Fragen. Sie beginnt mit Nutzen, zeigt Leistungen, erklärt Vertrauen, reduziert Unsicherheit und endet mit einem klaren Kontaktangebot.",
        ],
      },
      {
        heading: "Conversion entsteht durch Reibungsfreiheit",
        body: [
          "Wenn Kontaktbuttons versteckt sind, Texte zu allgemein bleiben oder wichtige Informationen fehlen, entstehen Reibungsverluste. Jede Unsicherheit senkt die Wahrscheinlichkeit einer Anfrage.",
          "Darum sollten Formulare kurz, Kontaktwege sichtbar und Call-to-Actions eindeutig sein.",
        ],
        bullets: [
          "Ein Hauptziel pro Seite",
          "Wiederkehrende Kontaktmoeglichkeiten",
          "Kurze Abschnitte statt Textbloecke",
          "Visuelle Beweise wie Projekte oder Bewertungen",
        ],
      },
    ],
    faq: [
      {
        question: "Was macht eine moderne Website aus?",
        answer:
          "Eine moderne Website verbindet klares Design, schnelle Ladezeiten, mobile Optimierung, gute Inhalte und eine eindeutige Nutzerführung.",
      },
      {
        question: "Warum ist Conversion wichtig?",
        answer:
          "Sichtbarkeit allein reicht nicht. Conversion beschreibt, ob Besucher den gewuenschten Schritt machen, zum Beispiel eine Anfrage senden oder einen Termin buchen.",
      },
      {
        question: "Kann man bestehende Websites strukturell verbessern?",
        answer:
          "Ja. Oft reicht schon eine bessere Startseite, klarere Leistungsstruktur und sichtbarere Kontaktführung, um die Wirkung deutlich zu verbessern.",
      },
    ],
  },
  {
    slug: "verwaltungssystem-dashboard-statt-excel",
    title: "Verwaltungssystem statt Excel-Chaos: Wann sich ein Dashboard lohnt",
    description:
      "Wann Unternehmen von einem eigenen Verwaltungssystem profitieren und welche Prozesse sich durch Dashboards, Admin-Bereiche und Automatisierung vereinfachen lassen.",
    excerpt:
      "Wenn Anfragen, Kundendaten oder Termine über mehrere Listen verteilt sind, wird Arbeit unnötig langsam. Ein eigenes System kann Ordnung schaffen.",
    category: "Systeme",
    date: "2026-08-02",
    readingTime: "7 Min. Lesezeit",
    focusKeyword: "Verwaltungssystem",
    takeaways: [
      "Ein Verwaltungssystem lohnt sich, wenn Prozesse wiederholt und fehleranfällig sind.",
      "Dashboards schaffen Überblick über Anfragen, Inhalte und Aufgaben.",
      "Individuelle Systeme sollten genau zum Ablauf des Unternehmens passen.",
    ],
    sections: [
      {
        heading: "Wann Excel nicht mehr reicht",
        body: [
          "Tabellen sind für den Start praktisch. Sobald mehrere Personen, viele Anfragen oder wiederkehrende Prozesse beteiligt sind, entstehen schnell Fehler: doppelte Daten, veraltete Stände und unklare Verantwortlichkeiten.",
          "Ein Verwaltungssystem lohnt sich besonders dann, wenn Informationen zentral verfügbar sein sollen und Arbeitsabläufe wiederholt werden.",
        ],
      },
      {
        heading: "Typische Einsatzbereiche",
        body: [
          "Ein eigenes Dashboard kann Kundenanfragen, Termine, Leistungen, Produkte, Projektstatus oder interne Aufgaben verwalten. Wichtig ist nicht die Menge der Funktionen, sondern die Passung zum echten Alltag.",
          "Ein gutes System nimmt Arbeit ab, statt neue Komplexitaet zu erzeugen.",
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
    slug: "seo-texte-schreiben",
    title: "SEO-Texte schreiben: Inhalte, die Menschen und Google verstehen",
    description:
      "So entstehen SEO-Texte, die nicht kuenstlich wirken: Suchintention, klare Struktur, hilfreiche Antworten und interne Verlinkung.",
    excerpt:
      "Gute SEO-Texte sind keine Keyword-Sammlungen. Sie beantworten echte Fragen, strukturieren Informationen und führen Besucher zum nächsten Schritt.",
    category: "Content SEO",
    date: "2026-08-02",
    readingTime: "6 Min. Lesezeit",
    focusKeyword: "SEO Texte schreiben",
    takeaways: [
      "SEO-Texte müssen Suchintentionen beantworten.",
      "Überschriften strukturieren Inhalt für Leser und Suchmaschinen.",
      "Interne Links helfen Google und Besuchern bei der Orientierung.",
    ],
    sections: [
      {
        heading: "Was einen guten SEO-Text ausmacht",
        body: [
          "Ein SEO-Text soll nicht nur ein Keyword enthalten. Er soll eine konkrete Frage beantworten und dem Besucher helfen, eine Entscheidung zu treffen.",
          "Dafür braucht der Text eine klare Hauptaussage, sinnvolle Zwischenüberschriften und konkrete Beispiele statt austauschbarer Werbesprache.",
        ],
      },
      {
        heading: "Suchintention vor Keyword-Dichte",
        body: [
          "Frueher wurden Texte oft auf Keyword-Dichte geschrieben. Heute ist wichtiger, ob der Inhalt die Absicht hinter der Suche trifft. Wer Website erstellen lassen sucht, braucht andere Informationen als jemand, der Website Pflege Kosten sucht.",
          "Deshalb sollten Inhalte nach Fragen, Problemen und Entscheidungssituationen aufgebaut werden.",
        ],
      },
      {
        heading: "Die Struktur eines starken SEO-Textes",
        body: [
          "Ein guter Text beginnt mit einer klaren Antwort und vertieft danach Details. Lange Einleitungen ohne Mehrwert sollten vermieden werden.",
          "Am Ende sollte klar sein, welcher nächste Schritt sinnvoll ist: mehr Informationen lesen, eine Leistung vergleichen oder eine Anfrage stellen.",
        ],
        bullets: [
          "H1 mit Hauptthema",
          "H2-Struktur für Teilfragen",
          "Kurze Absaetze mit konkreten Aussagen",
          "Interne Links zu passenden Leistungen",
          "FAQ-Bereich für häufige Suchfragen",
        ],
      },
    ],
    faq: [
      {
        question: "Wie lang sollte ein SEO-Text sein?",
        answer:
          "So lang wie noetig, um die Suchintention gut zu beantworten. Ein klarer, hilfreicher Text ist wichtiger als eine feste Wortzahl.",
      },
      {
        question: "Sind Keywords noch wichtig?",
        answer:
          "Ja, aber sie sollten natuerlich eingesetzt werden. Wichtiger ist, dass der Text Thema, Kontext und Nutzerfrage vollstaendig abdeckt.",
      },
      {
        question: "Soll jede Leistung einen eigenen SEO-Text haben?",
        answer:
          "Wenn die Leistung gesucht wird und wichtig für das Unternehmen ist, sollte sie eine eigene gut strukturierte Seite bekommen.",
      },
    ],
  },
  {
    slug: "website-relaunch-ohne-ranking-verlust",
    title: "Website-Relaunch ohne Ranking-Verlust: Die wichtigste Checkliste",
    description:
      "Worauf Unternehmen beim Website-Relaunch achten sollten, damit Rankings, URLs, Inhalte und technische Signale nicht verloren gehen.",
    excerpt:
      "Ein Relaunch kann Sichtbarkeit verbessern oder Rankings kosten. Entscheidend ist, dass SEO-Struktur, Weiterleitungen und Inhalte kontrolliert umgezogen werden.",
    category: "SEO",
    date: "2026-08-02",
    readingTime: "7 Min. Lesezeit",
    focusKeyword: "Website Relaunch",
    takeaways: [
      "Ein Relaunch braucht eine SEO-Bestandsaufnahme vor dem Designstart.",
      "Wichtige URLs dürfen nicht ohne Weiterleitung verschwinden.",
      "Performance, Meta-Daten und interne Links sollten vor dem Launch geprüft werden.",
    ],
    sections: [
      {
        heading: "Warum Relaunches riskant sein können",
        body: [
          "Bei einem Relaunch werden oft Design, Technik, Inhalte und URLs gleichzeitig verändert. Wenn dabei wichtige Seiten verschwinden oder falsch weitergeleitet werden, kann Google bestehende Rankings verlieren.",
          "Darum sollte ein Relaunch nicht nur als Designprojekt betrachtet werden, sondern als kontrollierter Umzug der gesamten Website-Struktur.",
        ],
      },
      {
        heading: "Vor dem Relaunch: Bestand sichern",
        body: [
          "Vor dem Start sollten alle wichtigen Seiten, aktuellen Rankings, Suchbegriffe und Kontaktwege dokumentiert werden. Nur so lässt sich entscheiden, was erhalten, verbessert oder entfernt werden darf.",
          "Besonders Seiten mit Besuchern, Backlinks oder Anfragen sollten nicht leichtfertig gelöscht werden.",
        ],
        bullets: [
          "Bestehende URLs exportieren",
          "Wichtige Rankings und Seiten identifizieren",
          "Inhalte auf Aktualität prüfen",
          "Weiterleitungen für geänderte URLs planen",
        ],
      },
      {
        heading: "Nach dem Launch: Kontrolle statt Hoffnung",
        body: [
          "Nach dem Launch sollten Sitemap, Robots, Indexierung, Ladezeiten, interne Links und Formulare geprüft werden. Kleine technische Fehler können sonst viel Wirkung kosten.",
          "Ein guter Relaunch verbessert nicht nur die Optik, sondern macht die Website schneller, klarer und besser auffindbar.",
        ],
      },
    ],
    faq: [
      {
        question: "Kann ein Relaunch SEO verbessern?",
        answer:
          "Ja, wenn Struktur, Inhalte, Technik und Nutzerführung verbessert werden. Ohne SEO-Plan kann ein Relaunch aber auch Rankings kosten.",
      },
      {
        question: "Sind Weiterleitungen beim Relaunch wichtig?",
        answer:
          "Ja. Wenn URLs geändert werden, sollten passende 301-Weiterleitungen eingerichtet werden, damit Besucher und Suchmaschinen die neuen Seiten finden.",
      },
      {
        question: "Wann sollte SEO beim Relaunch eingeplant werden?",
        answer:
          "Von Anfang an. SEO sollte vor Design und Umsetzung in die Seitenstruktur und Content-Planung einfließen.",
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
