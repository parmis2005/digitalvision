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
  image: string;
  imageAlt: string;
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
    excerpt: "Ziel, Struktur und Inhalte zuerst klären, bevor das Design entsteht.",
    category: "Websites",
    date: "2026-08-02",
    readingTime: "8 Min. Lesezeit",
    focusKeyword: "Website planen",
    image: "/blog/website-planen-vor-dem-design.jpg",
    imageAlt: "Workspace mit Laptop, Wireframes und Website-Planung",
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
        heading: "Der praktische Ablauf vor dem Design",
        body: [
          "Sinnvoll ist ein kurzer Vorbereitungsprozess, bevor die eigentliche Gestaltung beginnt. Zuerst wird gesammelt, welche Leistungen, Zielgruppen, Referenzen und Kontaktwege wichtig sind. Danach entsteht eine Seitenstruktur, die festlegt, welche Information wo erscheinen soll.",
          "Erst wenn diese Grundlage steht, wird das Design leichter. Dann muss die Gestaltung nicht mehr raten, sondern kann klare Inhalte sichtbar machen: Einstieg, Nutzen, Leistungsbereiche, Vertrauen, Ablauf und Anfrage.",
        ],
        bullets: [
          "Leistungen und Zielgruppen sortieren",
          "Startseite und Unterseiten grob strukturieren",
          "Bilder, Beispiele und Vertrauenssignale festlegen",
          "Kontaktweg und Anfrageprozess definieren",
        ],
      },
      {
        heading: "Typische Fehler in der Vorbereitung",
        body: [
          "Ein häufiger Fehler ist, zu früh über einzelne Farben oder Effekte zu sprechen. Dadurch wird die Website optisch diskutiert, obwohl noch nicht klar ist, welche Inhalte überzeugen müssen und welche Seite welche Aufgabe hat.",
          "Auch zu viele gleich wichtige Aussagen schwächen den Auftritt. Wenn alles im Mittelpunkt steht, erkennt der Besucher keinen nächsten Schritt. Eine gute Planung reduziert deshalb, sortiert Prioritäten und macht die wichtigsten Wege sichtbar.",
        ],
        bullets: [
          "Zu viele Leistungen ohne klare Reihenfolge",
          "Keine eindeutige Hauptaktion auf der Startseite",
          "Texte ohne Bezug zu echten Kundenfragen",
          "Designentscheidungen ohne fertige Inhaltsstruktur",
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
    title: "Branchenwebsites: Praxis, Studio und Beratung richtig aufbauen",
    description:
      "Branchenwebsites funktionieren besser, wenn Aufbau, Bildsprache und Kontaktführung zum echten Angebot passen.",
    excerpt: "Jede Branche braucht eigene Signale, Inhalte und Kontaktwege.",
    category: "Branchen",
    date: "2026-08-02",
    readingTime: "8 Min. Lesezeit",
    focusKeyword: "Branchenwebsite",
    image: "/blog/branchenwebsites-richtig-aufbauen.jpg",
    imageAlt: "Digitale Design-Panels für unterschiedliche Branchenwebsites",
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
        heading: "Welche Inhalte je Branche Vertrauen schaffen",
        body: [
          "Vertrauen entsteht nicht überall gleich. Eine Praxis profitiert von klaren Informationen zu Leistungen, Team, Erreichbarkeit und Terminablauf. Ein Studio braucht starke Bilder, Preise, Atmosphäre und einfache Buchung. Eine Versicherung oder Beratung muss Sicherheit, Erfahrung und einen verständlichen Prozess zeigen.",
          "Wenn diese Inhalte fehlen, bleibt der Look zwar schön, aber die Website beantwortet zu wenig. Deshalb sollte jede Branchenwebsite zuerst definieren, welche Zweifel Besucher haben und welche Belege diese Zweifel reduzieren.",
        ],
        bullets: [
          "Praxen brauchen klare Erreichbarkeit und Leistungsübersicht",
          "Studios brauchen Atmosphäre, Bilder und einfache Terminwege",
          "Beratungen brauchen Vertrauen, Ablauf und Nutzenargumente",
          "Shops brauchen Kategorien, Produktlogik und Kaufanreize",
        ],
      },
      {
        heading: "Warum die Reihenfolge auf der Seite entscheidet",
        body: [
          "Nicht nur die Inhalte selbst sind wichtig, sondern auch ihre Reihenfolge. Besucher müssen zuerst verstehen, worum es geht, danach Vertrauen aufbauen und anschließend einfach handeln können. Wird diese Reihenfolge vertauscht, wirkt die Website schnell anstrengend.",
          "Ein Praxisbesucher sucht zuerst Orientierung und Kontakt. Eine Kundin eines Studios will Atmosphäre, Leistungen und Termine sehen. Ein Beratungskunde möchte verstehen, wie der Ablauf funktioniert und warum er Vertrauen haben kann.",
        ],
        bullets: [
          "Erst Orientierung, dann Details",
          "Vertrauen sichtbar machen, bevor die Anfrage erwartet wird",
          "Kontaktwege dort platzieren, wo Entscheidungen entstehen",
          "Branchenlogik stärker gewichten als reine Designvorlagen",
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
    excerpt: "So werden Formulare, Status und Zuständigkeiten sauber organisiert.",
    category: "Prozesse",
    date: "2026-08-02",
    readingTime: "7 Min. Lesezeit",
    focusKeyword: "Kundenanfragen organisieren",
    image: "/blog/kundenanfragen-digital-organisieren.jpg",
    imageAlt: "Dashboard für Kundenanfragen, Nachrichten und Statusübersicht",
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
        heading: "Wie aus einer Anfrage ein sauberer Prozess wird",
        body: [
          "Nach dem Absenden sollte klar sein, was automatisch passiert und was intern erledigt werden muss. Eine gute Lösung sendet eine Bestätigung, informiert die richtige Person und legt die Anfrage so ab, dass sie später nachvollziehbar bleibt.",
          "Noch besser wird der Ablauf, wenn Anfragen nach Thema, Dringlichkeit oder Status sortiert werden können. Dann sieht das Team sofort, was neu ist, was beantwortet wurde und wo noch Rückmeldung fehlt.",
        ],
        bullets: [
          "Automatische Bestätigung an den Kunden",
          "Interne Benachrichtigung an die richtige Stelle",
          "Status wie neu, in Bearbeitung oder erledigt",
          "Saubere Ablage für spätere Rückfragen",
        ],
      },
      {
        heading: "Welche Fehler im Alltag Zeit kosten",
        body: [
          "Viele Unternehmen verlieren keine Anfrage, weil das Formular schlecht aussieht, sondern weil der interne Ablauf danach unsauber ist. Eine Nachricht landet im falschen Postfach, wird nicht markiert oder niemand weiß, ob bereits geantwortet wurde.",
          "Besonders problematisch wird es, wenn mehrere Personen gleichzeitig mit Kundenanfragen arbeiten. Ohne Status, Zuständigkeit und Verlauf entstehen doppelte Antworten, lange Reaktionszeiten und vermeidbare Rückfragen.",
        ],
        bullets: [
          "Anfragen werden nur per E-Mail weitergeleitet",
          "Es gibt keinen Bearbeitungsstatus",
          "Zuständigkeiten sind nicht klar sichtbar",
          "Wichtige Kundendaten müssen mehrfach gesucht werden",
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
    excerpt: "Shop, Anfrage oder Buchung: Die Lösung muss zum Angebot passen.",
    category: "Online-Shops",
    date: "2026-08-02",
    readingTime: "8 Min. Lesezeit",
    focusKeyword: "Online-Shop oder Website",
    image: "/blog/online-shop-oder-website.jpg",
    imageAlt: "Digitale Entscheidung zwischen Online-Shop und Unternehmenswebsite",
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
        heading: "Welche Lösung Kunden wirklich erwarten",
        body: [
          "Die Entscheidung sollte aus Sicht der Kunden getroffen werden. Wer ein Produkt kaufen möchte, erwartet Varianten, Preis, Bilder, Lieferinformationen und eine einfache Bestellung. Wer eine Dienstleistung sucht, erwartet eher Vertrauen, Erklärung, Beispiele und einen unkomplizierten Anfrageweg.",
          "Deshalb ist ein Shop nicht automatisch professioneller als eine Website. Professionell ist die Lösung, die zur Entscheidungssituation passt und den nächsten Schritt ohne Umwege ermöglicht.",
        ],
        bullets: [
          "Bei Produkten zählt schnelle Orientierung im Sortiment",
          "Bei Dienstleistungen zählt Vertrauen vor der Anfrage",
          "Bei individuellen Angeboten hilft ein Anfrageformular mehr als ein Warenkorb",
          "Bei wiederkehrenden Buchungen kann ein Terminmodul sinnvoll sein",
        ],
      },
      {
        heading: "Warum weniger Funktionen oft besser sind",
        body: [
          "Viele digitale Auftritte werden zu kompliziert geplant. Ein Shop braucht nicht sofort jedes Feature, wenn am Anfang nur wenige Produkte verkauft werden. Eine Dienstleistungsseite braucht keinen Warenkorb, wenn jedes Angebot individuell besprochen wird.",
          "Besser ist ein schlanker Start mit den Funktionen, die Kunden wirklich nutzen. Danach kann die Lösung erweitert werden, wenn echte Anforderungen entstehen und nicht nur theoretische Möglichkeiten gesammelt werden.",
        ],
        bullets: [
          "Nur Funktionen einbauen, die den nächsten Schritt erleichtern",
          "Checkout, Anfrage oder Buchung klar voneinander trennen",
          "Komplexität erst erweitern, wenn sie gebraucht wird",
          "Technik nicht wichtiger machen als Verständlichkeit",
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
    excerpt: "Wann ein Dashboard mehr Überblick schafft als verstreute Tabellen.",
    category: "Systeme",
    date: "2026-08-02",
    readingTime: "8 Min. Lesezeit",
    focusKeyword: "Verwaltungssystem",
    image: "/blog/verwaltungssystem-dashboard-statt-excel.jpg",
    imageAlt: "Modernes Dashboard als Alternative zu Tabellen und Papierchaos",
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
        heading: "Woran man ein gutes Dashboard erkennt",
        body: [
          "Ein gutes Dashboard zeigt nicht alles, was technisch möglich ist, sondern genau das, was im Alltag gebraucht wird. Die wichtigsten Informationen stehen oben, wiederkehrende Aufgaben sind schnell erreichbar und Zustände sind eindeutig erkennbar.",
          "Wenn Mitarbeitende lange suchen müssen oder zu viele Felder pflegen sollen, wird das System nicht genutzt. Deshalb sollte ein Dashboard schlank starten und später dort erweitert werden, wo echte Arbeitszeit verloren geht.",
        ],
        bullets: [
          "Wichtige Kennzahlen und neue Einträge sofort sichtbar",
          "Klare Statuslogik statt unübersichtlicher Listen",
          "Kurze Bearbeitungswege für wiederkehrende Aufgaben",
          "Erweiterbar, aber nicht überladen",
        ],
      },
      {
        heading: "Welche Daten nicht ins System gehören",
        body: [
          "Ein System wird nicht besser, nur weil es mehr Felder hat. Zu viele Eingaben verlangsamen die Arbeit und führen dazu, dass wichtige Daten unvollständig gepflegt werden. Deshalb sollte vor der Umsetzung entschieden werden, welche Informationen wirklich gebraucht werden.",
          "Alles, was niemand auswertet, bearbeitet oder für eine Entscheidung benötigt, sollte nicht im Mittelpunkt stehen. Ein gutes Verwaltungssystem macht den Alltag einfacher und zwingt Teams nicht in unnötige Pflegearbeit.",
        ],
        bullets: [
          "Keine Felder ohne klaren Nutzen",
          "Keine doppelten Angaben aus mehreren Quellen",
          "Keine Prozesse, die nur auf dem Papier sinnvoll wirken",
          "Keine Übersichten, die niemand regelmäßig verwendet",
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
    slug: "seo-grundlagen-fuer-kleine-unternehmen",
    title: "SEO-Grundlagen für kleine Unternehmen: Was wirklich zählt",
    description:
      "Suchmaschinenoptimierung muss nicht kompliziert starten. Entscheidend sind klare Inhalte, saubere Seitenstruktur und Antworten auf echte Kundenfragen.",
    excerpt: "Wie kleine Unternehmen mit klaren Inhalten und Struktur sichtbarer werden.",
    category: "SEO",
    date: "2026-08-03",
    readingTime: "8 Min. Lesezeit",
    focusKeyword: "SEO-Grundlagen",
    image: "/blog/seo-grundlagen-fuer-kleine-unternehmen.jpg",
    imageAlt: "Laptop mit Suchergebnissen, Keyword-Notizen und SEO-Struktur",
    takeaways: [
      "SEO beginnt mit verständlichen Inhalten, nicht mit Tricks.",
      "Jede wichtige Leistung sollte eine klare eigene Seite oder Sektion haben.",
      "Technik, Struktur und Aktualität entscheiden mit über Sichtbarkeit.",
    ],
    sections: [
      {
        heading: "Warum SEO nicht erst nach dem Launch beginnt",
        body: [
          "Viele Unternehmen denken erst an SEO, wenn die Website bereits fertig ist. Dann fehlen oft klare Seitenstrukturen, passende Überschriften oder Inhalte, die echte Suchanfragen beantworten.",
          "Besser ist es, Sichtbarkeit von Anfang an mitzudenken. Wenn Leistungen, Orte, Zielgruppen und Kundenfragen sauber sortiert sind, kann die Website leichter verstanden werden: von Besuchern und von Suchmaschinen.",
        ],
      },
      {
        heading: "Welche Inhalte für kleine Unternehmen wichtig sind",
        body: [
          "Gute SEO-Inhalte beantworten konkrete Fragen. Was wird angeboten? Für wen ist die Leistung gedacht? In welcher Region ist das Unternehmen tätig? Wie läuft die Anfrage oder Buchung ab?",
          "Dabei geht es nicht darum, Texte künstlich mit Keywords zu füllen. Wichtig ist, dass jede Seite ein klares Thema hat und Besucher schnell erkennen, ob sie richtig sind.",
        ],
        bullets: [
          "Leistungen klar benennen und einzeln erklären",
          "Häufige Kundenfragen direkt beantworten",
          "Region, Kontaktwege und Öffnungszeiten sichtbar machen",
          "Vertrauen durch Beispiele, Bewertungen oder Referenzen stärken",
        ],
      },
      {
        heading: "Warum Seitenstruktur so viel ausmacht",
        body: [
          "Eine Website mit guter Struktur ist leichter zu nutzen und leichter zu indexieren. Wenn alle Leistungen nur auf einer langen Startseite stehen, bleiben wichtige Themen oft zu oberflächlich.",
          "Sinnvoll ist eine klare Ordnung: Startseite für Überblick, Leistungsbereiche für Details, Kontaktseite für den nächsten Schritt und bei Bedarf einzelne Unterseiten für besonders wichtige Angebote.",
        ],
        bullets: [
          "Jede wichtige Leistung bekommt genug Raum",
          "Überschriften beschreiben den Inhalt eindeutig",
          "Interne Links verbinden passende Seiten miteinander",
          "Besucher finden den nächsten Schritt ohne Umwege",
        ],
      },
      {
        heading: "Technische Grundlagen, die nicht fehlen sollten",
        body: [
          "SEO ist nicht nur Text. Ladezeit, mobile Darstellung, Bildgrößen, Meta-Titel, Beschreibungen und saubere Links beeinflussen, wie zuverlässig eine Website funktioniert.",
          "Gerade kleine technische Fehler können die Wirkung guter Inhalte schwächen. Deshalb sollten wichtige Seiten regelmäßig geprüft werden, besonders nach Designänderungen, neuen Bildern oder neuen Funktionen.",
        ],
        bullets: [
          "Schnelle Ladezeiten auf mobilen Geräten",
          "Aussagekräftige Seitentitel und Beschreibungen",
          "Komprimierte Bilder mit passenden Alt-Texten",
          "Fehlerfreie Links, Formulare und Weiterleitungen",
        ],
      },
      {
        heading: "Wie DigitalVision SEO pragmatisch einbindet",
        body: [
          "DigitalVision betrachtet SEO als Teil der Website-Planung. Zuerst werden Leistungen, Zielgruppen und Suchintentionen sortiert. Danach entsteht eine Struktur, die Besucher führt und Suchmaschinen klare Signale gibt.",
          "So entsteht keine überladene SEO-Strategie, sondern eine Website, die verständlich aufgebaut ist, relevante Inhalte zeigt und langfristig gepflegt werden kann.",
        ],
      },
    ],
    faq: [
      {
        question: "Wann sollte SEO bei einer neuen Website eingeplant werden?",
        answer:
          "Am besten direkt vor oder während der Website-Planung. Dann können Seitenstruktur, Inhalte, Überschriften und technische Grundlagen sauber berücksichtigt werden.",
      },
      {
        question: "Braucht jedes kleine Unternehmen einen großen SEO-Plan?",
        answer:
          "Nein. Oft reicht ein sauberer Start mit klaren Leistungsseiten, guter lokaler Orientierung, schnellen Ladezeiten und regelmäßig gepflegten Inhalten.",
      },
      {
        question: "Kann DigitalVision bestehende Websites für SEO verbessern?",
        answer:
          "Ja. Bestehende Seiten können strukturell, inhaltlich und technisch geprüft und Schritt für Schritt verbessert werden.",
      },
    ],
  },
  {
    slug: "website-pflege-nach-dem-launch",
    title: "Nach dem Launch: Warum eine Website Pflege braucht",
    description:
      "Eine Website ist nach dem Launch nicht fertig. Inhalte, Technik, Bilder, Formulare und Erweiterungen sollten regelmäßig geprüft werden.",
    excerpt: "Warum Websites nach dem Launch regelmäßig gepflegt werden sollten.",
    category: "Betreuung",
    date: "2026-08-02",
    readingTime: "7 Min. Lesezeit",
    focusKeyword: "Website Pflege",
    image: "/blog/website-pflege-nach-dem-launch.jpg",
    imageAlt: "Laptop mit Website-Wartung, Checklisten und Update-Symbolen",
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
        heading: "Welche Pflege besonders häufig vergessen wird",
        body: [
          "Oft werden nur sichtbare Texte aktualisiert, während technische und funktionale Punkte liegen bleiben. Dabei sind gerade Formulare, Weiterleitungen, Ladezeiten, Bildgrößen und mobile Ansichten entscheidend dafür, ob eine Website zuverlässig funktioniert.",
          "Auch alte Referenzen, veraltete Teamangaben oder nicht mehr passende Angebote schwächen den Eindruck. Pflege bedeutet deshalb nicht nur Technik, sondern auch Aktualität und Vertrauen.",
        ],
        bullets: [
          "Kontaktformulare und Benachrichtigungen regelmäßig testen",
          "Veraltete Leistungen, Preise und Teamangaben entfernen",
          "Bilder komprimieren und mobile Darstellung prüfen",
          "Neue Projekte oder Beispiele ergänzen",
        ],
      },
      {
        heading: "Wie Website-Pflege planbar bleibt",
        body: [
          "Pflege funktioniert am besten, wenn sie nicht zufällig passiert. Sinnvoll ist ein kurzer Rhythmus, in dem wichtige Bereiche geprüft werden: Kontaktwege, Leistungen, Bilder, technische Funktion und sichtbare Aktualität.",
          "Dadurch entstehen keine großen Baustellen, sondern kleine, regelmäßige Verbesserungen. Die Website bleibt verständlich, aktuell und technisch sauber, ohne dass jedes Mal ein kompletter Relaunch nötig wird.",
        ],
        bullets: [
          "Monatlich Formulare und Kontaktwege prüfen",
          "Quartalsweise Inhalte und Bilder kontrollieren",
          "Nach jeder Änderung mobile Darstellung testen",
          "Neue Leistungen oder Referenzen direkt ergänzen",
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
