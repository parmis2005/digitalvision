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
    slug: "mobile-website-optimieren-smartphone-nutzer",
    title: "Mobile Website optimieren: Worauf Smartphone-Nutzer achten",
    description:
      "Eine Website muss auf dem Smartphone schnell, lesbar und einfach bedienbar sein. Mobile Optimierung entscheidet oft darüber, ob Besucher bleiben oder abspringen.",
    excerpt: "Wie mobile Websites klarer, schneller und leichter bedienbar werden.",
    category: "Websites",
    date: "2026-08-13",
    readingTime: "8 Min. Lesezeit",
    focusKeyword: "Mobile Website optimieren",
    image: "/blog/mobile-website-optimieren-smartphone-nutzer.png",
    imageAlt: "Smartphone mit responsiver Website, Performancekarten und Geräteansichten",
    featured: true,
    takeaways: [
      "Mobile Besucher brauchen schnelle Ladezeiten und klare Prioritäten.",
      "Buttons, Texte und Formulare müssen auf kleinen Screens leicht bedienbar sein.",
      "Mobile Optimierung beginnt bei Struktur, nicht erst bei CSS.",
    ],
    sections: [
      {
        heading: "Warum Mobile nicht nur eine kleinere Desktop-Seite ist",
        body: [
          "Viele Websites werden zuerst am großen Bildschirm geplant und später nur verkleinert. Das reicht nicht aus. Auf dem Smartphone haben Besucher weniger Platz, weniger Geduld und oft ein konkreteres Ziel.",
          "Mobile Optimierung bedeutet deshalb, Inhalte neu zu priorisieren. Was muss sofort sichtbar sein? Welche Aktion soll möglich sein? Welche Informationen können später folgen?",
        ],
      },
      {
        heading: "Was Smartphone-Nutzer zuerst brauchen",
        body: [
          "Mobile Besucher suchen meistens schnelle Orientierung. Sie möchten verstehen, ob das Angebot passt, wie sie Kontakt aufnehmen können und ob die Seite vertrauenswürdig wirkt.",
          "Deshalb sollten Einstieg, Nutzen, Kontaktbutton und wichtige Vertrauenssignale auf mobilen Seiten klar erreichbar sein. Lange Textblöcke, zu kleine Buttons und versteckte Formulare bremsen den nächsten Schritt.",
        ],
        bullets: [
          "Kurzer Einstieg mit klarer Aussage",
          "Gut sichtbarer Kontakt- oder Anfragebutton",
          "Lesbare Schriftgrößen und kurze Abschnitte",
          "Schnelle Ladezeit trotz guter Bilder",
        ],
      },
      {
        heading: "Welche Fehler mobile Anfragen kosten",
        body: [
          "Viele mobile Probleme wirken klein, kosten aber direkt Anfragen. Wenn ein Button schwer zu treffen ist, ein Formularfeld springt oder eine Navigation zu viel Platz einnimmt, steigt die Abbruchquote.",
          "Auch überladene Hero-Bereiche sind kritisch. Auf dem Smartphone sollte der erste Bildschirm nicht nur aus Dekoration bestehen, sondern sofort erklären, worum es geht.",
        ],
        bullets: [
          "Buttons zu klein oder zu nah beieinander",
          "Formulare mit zu vielen Pflichtfeldern",
          "Bilder, die wichtige Inhalte nach unten drücken",
          "Navigation, die mehr stört als hilft",
        ],
      },
      {
        heading: "Wie Performance und Design zusammenhängen",
        body: [
          "Eine schöne mobile Website wirkt nur professionell, wenn sie schnell lädt. Große Bilder, schwere Animationen oder unnötige Skripte machen Seiten langsam und lassen Besucher abspringen.",
          "Gute mobile Gestaltung setzt deshalb auf saubere Bildgrößen, klare Komponenten und Effekte, die den Inhalt unterstützen statt ihn zu überdecken.",
        ],
        bullets: [
          "Bilder passend komprimieren",
          "Animationen sparsam einsetzen",
          "Layout-Sprünge vermeiden",
          "Formulare und Buttons regelmäßig mobil testen",
        ],
      },
      {
        heading: "Wie Digital Vision mobile Seiten prüft",
        body: [
          "Digital Vision plant mobile Ansichten nicht als Nachtrag. Struktur, Inhalte und Kontaktwege werden so aufgebaut, dass sie auf Smartphone und Desktop funktionieren.",
          "Vor dem Launch werden Lesbarkeit, Bedienung, Formulare, Bildgrößen und Ladezeiten geprüft. Dadurch wird die mobile Website nicht nur responsive, sondern wirklich nutzbar.",
        ],
      },
    ],
    faq: [
      {
        question: "Warum ist mobile Optimierung so wichtig?",
        answer:
          "Weil viele Besucher über Smartphones kommen. Wenn die Seite dort schlecht lesbar oder langsam ist, gehen Vertrauen und Anfragen verloren.",
      },
      {
        question: "Reicht Responsive Design allein aus?",
        answer:
          "Nicht immer. Responsive Design passt Layouts an, aber Inhalte, Prioritäten und Bedienung müssen ebenfalls mobil gedacht werden.",
      },
      {
        question: "Kann Digital Vision bestehende mobile Websites verbessern?",
        answer:
          "Ja. Bestehende Seiten können auf Ladezeit, Lesbarkeit, Kontaktwege und mobile Bedienung geprüft und gezielt verbessert werden.",
      },
    ],
  },
  {
    slug: "website-texte-schreiben-die-kunden-verstehen",
    title: "Website-Texte schreiben, die Kunden wirklich verstehen",
    description:
      "Gute Website-Texte erklären nicht nur Leistungen, sondern beantworten echte Kundenfragen und führen verständlich zum nächsten Schritt.",
    excerpt: "Wie Texte klarer werden und Besucher schneller zur Anfrage führen.",
    category: "Content",
    date: "2026-08-13",
    readingTime: "8 Min. Lesezeit",
    focusKeyword: "Website-Texte schreiben",
    image: "/blog/website-texte-schreiben-die-kunden-verstehen.png",
    imageAlt: "Laptop mit Website-Textstruktur, Inhaltskarten und redaktionellem Plan",
    featured: true,
    takeaways: [
      "Website-Texte sollten konkrete Fragen beantworten, nicht nur schön klingen.",
      "Klare Überschriften helfen Besuchern, Inhalte schnell zu scannen.",
      "Gute Texte verbinden Nutzen, Vertrauen und Kontaktweg.",
    ],
    sections: [
      {
        heading: "Warum viele Website-Texte zu allgemein bleiben",
        body: [
          "Viele Websites beschreiben Leistungen mit austauschbaren Begriffen. Besucher lesen dann, dass ein Unternehmen professionell, individuell oder zuverlässig arbeitet, verstehen aber nicht konkret, was angeboten wird.",
          "Gute Website-Texte übersetzen Leistungen in Nutzen. Sie zeigen, für wen das Angebot gedacht ist, welches Problem gelöst wird und wie der nächste Schritt aussieht.",
        ],
      },
      {
        heading: "Welche Fragen Texte beantworten müssen",
        body: [
          "Besucher kommen mit offenen Fragen auf eine Website. Sie möchten wissen, ob das Angebot passt, wie der Ablauf funktioniert, was sie erwarten können und warum sie Vertrauen haben sollten.",
          "Texte sollten diese Fragen nicht verstecken. Je klarer eine Seite antwortet, desto leichter fällt die Entscheidung zur Anfrage.",
        ],
        bullets: [
          "Was wird konkret angeboten?",
          "Für wen ist die Leistung geeignet?",
          "Wie läuft der nächste Schritt ab?",
          "Welche Belege schaffen Vertrauen?",
        ],
      },
      {
        heading: "Warum Überschriften wichtiger sind als lange Absätze",
        body: [
          "Viele Besucher lesen Websites nicht von oben bis unten. Sie scannen Überschriften, Zwischenzeilen, Karten und Buttons. Wenn diese Elemente unklar sind, helfen auch gute Absätze wenig.",
          "Eine gute Überschrift sagt nicht nur, worum es geht, sondern gibt Orientierung. Danach kann ein kurzer Absatz erklären, vertiefen und zur passenden Aktion führen.",
        ],
        bullets: [
          "Überschriften konkret formulieren",
          "Absätze kurz halten",
          "Fachbegriffe erklären oder vermeiden",
          "Buttons passend zum Inhalt benennen",
        ],
      },
      {
        heading: "Wie Texte Vertrauen aufbauen",
        body: [
          "Vertrauen entsteht nicht durch große Versprechen, sondern durch klare Informationen. Beispiele, Abläufe, Referenzen, häufige Fragen und transparente Kontaktwege machen ein Angebot greifbarer.",
          "Auch ehrliche Begrenzung hilft. Wenn eine Website erklärt, für wen eine Leistung passt und wann sie nicht passt, wirkt sie glaubwürdiger.",
        ],
        bullets: [
          "Konkrete Beispiele nennen",
          "Ablauf verständlich erklären",
          "Einwände direkt beantworten",
          "Kontaktweg ohne Druck anbieten",
        ],
      },
      {
        heading: "Wie Digital Vision Website-Texte strukturiert",
        body: [
          "Digital Vision entwickelt Texte aus der Seitenstruktur heraus. Zuerst wird geklärt, welche Aufgabe eine Seite hat und welche Fragen dort beantwortet werden müssen.",
          "Danach entstehen Texte, die Design, SEO und Nutzerführung unterstützen. Dadurch wirkt die Website nicht nur hochwertig, sondern verständlich und handlungsorientiert.",
        ],
      },
    ],
    faq: [
      {
        question: "Müssen Website-Texte lang sein?",
        answer:
          "Nicht unbedingt. Sie sollten lang genug sein, um wichtige Fragen zu beantworten, aber klar genug, damit Besucher schnell verstehen, worum es geht.",
      },
      {
        question: "Sind SEO-Texte anders als normale Website-Texte?",
        answer:
          "Gute SEO-Texte sind zuerst verständliche Website-Texte. Sie berücksichtigen Suchbegriffe, aber beantworten vor allem echte Nutzerfragen.",
      },
      {
        question: "Kann Digital Vision bestehende Texte überarbeiten?",
        answer:
          "Ja. Bestehende Texte können gekürzt, neu strukturiert und stärker auf Nutzen, Vertrauen und Anfrage ausgerichtet werden.",
      },
    ],
  },
  {
    slug: "lokale-sichtbarkeit-verbessern-fuer-dienstleister",
    title: "Lokale Sichtbarkeit verbessern: Websites für Dienstleister",
    description:
      "Lokale Dienstleister werden besser gefunden, wenn Website, Leistungen, Standortsignale und Kontaktwege klar zusammenspielen.",
    excerpt: "Wie lokale Anbieter online sichtbarer und leichter kontaktierbar werden.",
    category: "SEO",
    date: "2026-08-13",
    readingTime: "8 Min. Lesezeit",
    focusKeyword: "Lokale Sichtbarkeit verbessern",
    image: "/blog/lokale-sichtbarkeit-verbessern-fuer-dienstleister.png",
    imageAlt: "Laptop mit lokaler Suche, Kartenansicht, Bewertungen und Standortsignalen",
    featured: true,
    takeaways: [
      "Lokale Sichtbarkeit braucht klare Leistungen, Standortsignale und Vertrauen.",
      "Kontaktwege und Öffnungszeiten sollten schnell erreichbar sein.",
      "Bewertungen, Bilder und lokale Inhalte stärken die Entscheidung.",
    ],
    sections: [
      {
        heading: "Warum lokale Sichtbarkeit mehr ist als ein Eintrag",
        body: [
          "Ein Google-Eintrag ist wichtig, aber er ersetzt keine klare Website. Viele Besucher prüfen nach einem Suchergebnis, ob Leistungen, Standort, Kontakt und Vertrauen zusammenpassen.",
          "Die Website sollte deshalb lokale Orientierung geben. Wer wird angesprochen? In welchem Gebiet wird gearbeitet? Welche Leistungen sind vor Ort verfügbar?",
        ],
      },
      {
        heading: "Welche Informationen lokale Kunden suchen",
        body: [
          "Lokale Besucher haben oft konkrete Anliegen. Sie wollen wissen, ob ein Anbieter in ihrer Nähe ist, welche Leistung angeboten wird, wann Kontakt möglich ist und ob andere Kunden gute Erfahrungen gemacht haben.",
          "Diese Informationen sollten nicht versteckt sein. Besonders auf mobilen Geräten müssen Adresse, Telefonnummer, Anfrageweg und Leistungen schnell erreichbar bleiben.",
        ],
        bullets: [
          "Standort, Region oder Einsatzgebiet",
          "Leistungen mit klaren Beschreibungen",
          "Telefon, Anfrageformular oder Buchung",
          "Bewertungen, Referenzen oder echte Bilder",
        ],
      },
      {
        heading: "Wie Leistungsseiten lokale Suche unterstützen",
        body: [
          "Wenn alle Angebote nur auf einer Startseite genannt werden, bleiben wichtige Themen oft zu oberflächlich. Einzelne Leistungsbereiche können besser erklären, was angeboten wird und für wen es relevant ist.",
          "Für lokale Anbieter ist außerdem wichtig, dass Inhalte nicht künstlich mit Ortsnamen gefüllt werden. Besser sind natürliche Standortsignale, klare Leistungen und hilfreiche Antworten auf echte Kundenfragen.",
        ],
        bullets: [
          "Wichtige Leistungen einzeln erklären",
          "Region natürlich einordnen",
          "Häufige Fragen lokal beantworten",
          "Interne Links zu Kontakt und Buchung setzen",
        ],
      },
      {
        heading: "Welche Fehler lokale Sichtbarkeit schwächen",
        body: [
          "Unvollständige Kontaktangaben, veraltete Öffnungszeiten oder widersprüchliche Informationen schaffen Unsicherheit. Auch generische Texte ohne lokalen Bezug helfen Besuchern wenig.",
          "Besonders problematisch ist, wenn die Website zwar gefunden wird, aber der nächste Schritt nicht klar ist. Dann bleibt Sichtbarkeit ohne Anfrage.",
        ],
        bullets: [
          "Adresse oder Einsatzgebiet schwer auffindbar",
          "Keine klare Leistungsübersicht",
          "Veraltete Bilder oder Öffnungszeiten",
          "Kontaktweg erst am Seitenende",
        ],
      },
      {
        heading: "Wie Digital Vision lokale Websites aufbaut",
        body: [
          "Digital Vision verbindet lokale Sichtbarkeit mit klarer Nutzerführung. Leistungen, Standortsignale, Vertrauen und Kontaktwege werden so strukturiert, dass Besucher schnell entscheiden können.",
          "So entsteht kein überladener SEO-Text, sondern eine Website, die lokal verständlich ist und echte Anfragen unterstützt.",
        ],
      },
    ],
    faq: [
      {
        question: "Was hilft lokalen Dienstleistern online sichtbar zu werden?",
        answer:
          "Klare Leistungsseiten, vollständige Kontaktinformationen, lokale Orientierung, Bewertungen, schnelle Ladezeiten und eine gut nutzbare mobile Website.",
      },
      {
        question: "Muss jede Stadt eine eigene Seite haben?",
        answer:
          "Nicht immer. Eigene Standortseiten sind nur sinnvoll, wenn sie echte Inhalte und Relevanz haben. Künstliche Ortsseiten wirken schnell schwach.",
      },
      {
        question: "Kann Digital Vision lokale SEO-Grundlagen einbauen?",
        answer:
          "Ja. Standortsignale, Seitenstruktur, Meta-Daten, Inhalte und Kontaktwege können gezielt für lokale Sichtbarkeit geplant werden.",
      },
    ],
  },
  {
    slug: "website-bilder-auswaehlen-und-vorbereiten",
    title: "Website-Bilder auswählen und richtig vorbereiten",
    description:
      "Bilder prägen den ersten Eindruck einer Website. Entscheidend sind passende Motive, saubere Ausschnitte, gute Qualität und schnelle Ladezeiten.",
    excerpt: "Wie Bilder professioneller wirken und die Website nicht langsam machen.",
    category: "Design",
    date: "2026-08-13",
    readingTime: "7 Min. Lesezeit",
    focusKeyword: "Website-Bilder",
    image: "/blog/website-bilder-auswaehlen-und-vorbereiten.png",
    imageAlt: "Laptop mit Bildergalerie, Zuschnittkarten und Optimierungsanzeigen",
    featured: true,
    takeaways: [
      "Bilder sollten zum Angebot passen und Vertrauen schaffen.",
      "Ausschnitt, Format und Komprimierung beeinflussen Wirkung und Ladezeit.",
      "Nicht jedes schöne Bild ist für eine Website geeignet.",
    ],
    sections: [
      {
        heading: "Warum Bilder mehr leisten als Dekoration",
        body: [
          "Bilder entscheiden stark darüber, wie professionell eine Website wirkt. Sie zeigen Atmosphäre, Qualität, Menschen, Räume, Produkte oder Ergebnisse und helfen Besuchern, ein Angebot schneller einzuordnen.",
          "Gute Bilder unterstützen den Inhalt. Schlechte oder beliebige Bilder machen eine Website dagegen austauschbar, selbst wenn das Design hochwertig ist.",
        ],
      },
      {
        heading: "Welche Bilder auf eine Website gehören",
        body: [
          "Am stärksten wirken Bilder, die echten Bezug zum Unternehmen haben. Räume, Arbeitssituationen, Ergebnisse, Produkte oder Details schaffen mehr Vertrauen als generische Stockmotive.",
          "Wenn keine eigenen Bilder vorhanden sind, sollte bewusst entschieden werden, welche Bildsprache zum Angebot passt und welche Motive vermieden werden sollten.",
        ],
        bullets: [
          "Echte Räume, Produkte oder Ergebnisse",
          "Team- oder Arbeitsbilder, wenn sie professionell wirken",
          "Detailbilder für Atmosphäre und Qualität",
          "Referenzbilder passend zur jeweiligen Leistung",
        ],
      },
      {
        heading: "Warum Bildformate früh geplant werden sollten",
        body: [
          "Ein Bild, das im Querformat gut aussieht, funktioniert nicht automatisch als mobiles Hochformat oder kleines Vorschaubild. Deshalb sollten wichtige Bildflächen früh im Layout mitgedacht werden.",
          "Besonders Hero-Bilder brauchen genug Rand, damit Text, Zuschnitt und mobile Darstellung sauber funktionieren. Zu enge Motive führen schnell zu abgeschnittenen Köpfen, Produkten oder wichtigen Details.",
        ],
        bullets: [
          "Hero-Bilder mit genügend Rand wählen",
          "Quadratische Vorschaubilder separat prüfen",
          "Mobile Zuschnitte testen",
          "Wichtige Motive nicht zu nah am Rand platzieren",
        ],
      },
      {
        heading: "Wie Bilder die Ladezeit beeinflussen",
        body: [
          "Große Bilddateien gehören zu den häufigsten Gründen für langsame Websites. Ein hochwertiges Bild muss nicht mehrere Megabyte groß sein, wenn es passend komprimiert und im richtigen Format ausgeliefert wird.",
          "Wichtig ist der Ausgleich zwischen Qualität und Performance. Bilder sollen klar wirken, aber die Seite nicht unnötig ausbremsen.",
        ],
        bullets: [
          "Bildgröße passend zum Einsatzbereich wählen",
          "Dateien komprimieren",
          "Alt-Texte sinnvoll ergänzen",
          "Unnötige Bildvarianten vermeiden",
        ],
      },
      {
        heading: "Wie Digital Vision Bildmaterial vorbereitet",
        body: [
          "Digital Vision plant Bildflächen zusammen mit Struktur und Design. Dadurch ist früh klar, welche Motive gebraucht werden, welche Formate sinnvoll sind und wo eigene Bilder den größten Unterschied machen.",
          "Vor dem Launch werden Zuschnitt, Qualität, Dateigröße und mobile Wirkung geprüft, damit Bilder professionell aussehen und technisch sauber bleiben.",
        ],
      },
    ],
    faq: [
      {
        question: "Sind eigene Bilder besser als Stockfotos?",
        answer:
          "Oft ja, wenn sie professionell wirken. Eigene Bilder schaffen mehr Vertrauen, weil sie echte Räume, Menschen, Produkte oder Ergebnisse zeigen.",
      },
      {
        question: "Warum müssen Bilder komprimiert werden?",
        answer:
          "Damit die Website schneller lädt. Gute Komprimierung reduziert Dateigröße, ohne die sichtbare Qualität unnötig zu schwächen.",
      },
      {
        question: "Kann Digital Vision beim Bildkonzept helfen?",
        answer:
          "Ja. Bildbedarf, Formate, Stilrichtung und technische Vorbereitung können direkt im Website-Konzept mitgeplant werden.",
      },
    ],
  },
  {
    slug: "terminbuchung-auf-websites-sinnvoll-einbauen",
    title: "Terminbuchung auf Websites sinnvoll einbauen",
    description:
      "Online-Terminbuchung kann Anfragen vereinfachen, wenn Leistungen, Verfügbarkeiten, Bestätigung und interne Abläufe sauber geplant sind.",
    excerpt: "Wann eine Buchungsfunktion hilft und welche Fehler vermieden werden sollten.",
    category: "Prozesse",
    date: "2026-08-13",
    readingTime: "8 Min. Lesezeit",
    focusKeyword: "Terminbuchung Website",
    image: "/blog/terminbuchung-auf-websites-sinnvoll-einbauen.png",
    imageAlt: "Laptop mit Kalender, Zeitslots, Buchungsprozess und Bestätigungskarte",
    featured: true,
    takeaways: [
      "Terminbuchung ist sinnvoll, wenn Leistungen und Verfügbarkeiten klar sind.",
      "Der Buchungsprozess muss kurz, verständlich und mobil gut bedienbar sein.",
      "Bestätigung, Absagen und interne Zuordnung sollten mitgeplant werden.",
    ],
    sections: [
      {
        heading: "Wann eine Online-Terminbuchung sinnvoll ist",
        body: [
          "Eine Terminbuchung lohnt sich besonders, wenn Besucher klare Leistungen auswählen und direkt einen passenden Zeitraum buchen können. Das ist häufig bei Studios, Praxen, Beratungen oder lokalen Dienstleistungen der Fall.",
          "Wenn jedes Projekt zuerst individuell geklärt werden muss, ist ein Anfrageformular oft besser. Die richtige Lösung hängt davon ab, wie planbar die Leistung ist.",
        ],
      },
      {
        heading: "Welche Informationen vor der Buchung klar sein müssen",
        body: [
          "Bevor Besucher einen Termin buchen, brauchen sie Orientierung. Welche Leistung wird gebucht? Wie lange dauert sie? Gibt es Voraussetzungen, Preise oder Hinweise? Ohne diese Informationen entstehen Rückfragen oder falsche Buchungen.",
          "Die Buchungsfunktion sollte deshalb nicht isoliert stehen. Sie braucht erklärende Inhalte und klare Auswahlmöglichkeiten.",
        ],
        bullets: [
          "Leistung oder Terminart verständlich benennen",
          "Dauer und mögliche Hinweise anzeigen",
          "Verfügbarkeiten realistisch pflegen",
          "Kontaktmöglichkeit für Rückfragen anbieten",
        ],
      },
      {
        heading: "Wie ein guter Buchungsprozess aufgebaut ist",
        body: [
          "Ein guter Prozess führt Schritt für Schritt: Leistung wählen, Termin auswählen, Kontaktdaten eingeben, bestätigen. Je klarer diese Reihenfolge ist, desto weniger brechen Besucher ab.",
          "Auf dem Smartphone müssen Kalender, Zeitslots und Buttons besonders gut funktionieren. Kleine Felder oder unklare Fehlermeldungen machen die Buchung unnötig schwer.",
        ],
        bullets: [
          "Kurze Schritte statt langer Formularseite",
          "Gut sichtbare freie Zeiten",
          "Klare Bestätigung nach dem Absenden",
          "Automatische Benachrichtigung intern und extern",
        ],
      },
      {
        heading: "Welche Fehler Terminbuchungen unzuverlässig machen",
        body: [
          "Eine Buchungsfunktion kann Arbeit sparen, aber auch neue Probleme schaffen. Wenn Zeiten nicht aktuell sind, Bestätigungen fehlen oder intern niemand den Termin sieht, entsteht mehr Aufwand als vorher.",
          "Deshalb sollte nicht nur die Oberfläche geplant werden, sondern auch der Ablauf danach: Wer bekommt die Buchung? Wie wird abgesagt? Was passiert bei Änderungen?",
        ],
        bullets: [
          "Veraltete Verfügbarkeiten",
          "Keine automatische Bestätigung",
          "Unklare Zuständigkeit intern",
          "Zu viele Pflichtfelder vor der Buchung",
        ],
      },
      {
        heading: "Wie Digital Vision Buchungen einbindet",
        body: [
          "Digital Vision prüft zuerst, ob eine Buchung, Anfrage oder Kombination aus beidem sinnvoll ist. Danach wird der Ablauf so gestaltet, dass Besucher schnell buchen können und das Unternehmen intern den Überblick behält.",
          "Bei Bedarf kann die Terminbuchung mit Formularen, Bestätigungen, Kalendern oder einem Admin-Bereich verbunden werden.",
        ],
      },
    ],
    faq: [
      {
        question: "Ist eine Terminbuchung für jede Website sinnvoll?",
        answer:
          "Nein. Sie lohnt sich vor allem, wenn Leistungen gut planbar sind. Für individuelle Projekte ist oft ein Anfrageformular sinnvoller.",
      },
      {
        question: "Kann eine Buchung mit Bestätigungs-E-Mails verbunden werden?",
        answer:
          "Ja. Besucher und Unternehmen können automatisch Bestätigungen oder Benachrichtigungen erhalten.",
      },
      {
        question: "Kann Digital Vision Buchung und Anfrage kombinieren?",
        answer:
          "Ja. Je nach Angebot kann eine Website direkte Buchungen, qualifizierte Anfragen oder beide Wege anbieten.",
      },
    ],
  },
  {
    slug: "website-kosten-verstehen-wovon-der-preis-abhaengt",
    title: "Website-Kosten verstehen: Wovon der Preis wirklich abhängt",
    description:
      "Website-Kosten hängen nicht nur vom Design ab. Entscheidend sind Umfang, Inhalte, Funktionen, Technik, Betreuung und die Klarheit der Vorbereitung.",
    excerpt: "Welche Faktoren den Preis einer professionellen Website wirklich beeinflussen.",
    category: "Websites",
    date: "2026-08-10",
    readingTime: "8 Min. Lesezeit",
    focusKeyword: "Website Kosten",
    image: "/blog/website-kosten-verstehen-wovon-der-preis-abhaengt.png",
    imageAlt: "Laptop mit Website-Kalkulation, Projektmodulen und Angebotsunterlagen",
    featured: true,
    takeaways: [
      "Der Preis hängt stark von Ziel, Umfang und Vorbereitung ab.",
      "Texte, Bilder, Funktionen und Betreuung beeinflussen den Aufwand deutlich.",
      "Ein klares Konzept verhindert unnötige Korrekturen und Zusatzkosten.",
    ],
    sections: [
      {
        heading: "Warum Website-Kosten nicht pauschal vergleichbar sind",
        body: [
          "Zwei Websites können ähnlich aussehen und trotzdem völlig unterschiedlich aufwendig sein. Entscheidend ist nicht nur die sichtbare Oberfläche, sondern was dahinter geplant, geschrieben, gestaltet, entwickelt und getestet werden muss.",
          "Eine einfache Präsentationsseite hat andere Anforderungen als ein Auftritt mit mehreren Leistungsseiten, Blog, Formularen, Terminlogik oder Admin-Bereich. Deshalb sollte der Preis immer mit dem Ziel und dem tatsächlichen Umfang betrachtet werden.",
        ],
      },
      {
        heading: "Welche Faktoren den Preis beeinflussen",
        body: [
          "Der größte Unterschied entsteht meist durch Struktur, Inhalt und Funktionen. Wenn Texte, Bilder und Seitenaufbau bereits klar sind, kann eine Website schlanker umgesetzt werden. Wenn zuerst Strategie, Inhalte und Nutzerführung entwickelt werden müssen, steigt der Aufwand.",
          "Auch technische Anforderungen spielen eine Rolle. Ein Kontaktformular ist weniger komplex als ein Anfrageprozess mit Datei-Upload, Terminwahl, automatischer Bestätigung und interner Verwaltung.",
        ],
        bullets: [
          "Anzahl und Tiefe der Seiten",
          "Textkonzept, Bildauswahl und Inhaltsaufbereitung",
          "Individuelles Design statt einfacher Vorlage",
          "Formulare, Buchungen, CMS oder Admin-Funktionen",
        ],
      },
      {
        heading: "Warum Vorbereitung Geld sparen kann",
        body: [
          "Viele Kosten entstehen nicht durch die Umsetzung selbst, sondern durch unklare Entscheidungen. Wenn Zielgruppe, Leistungen, Inhalte und Kontaktweg während der Entwicklung ständig wechseln, muss auch Design und Struktur immer wieder angepasst werden.",
          "Eine saubere Vorbereitung reduziert diese Schleifen. Vor dem Design sollte klar sein, welche Seiten gebraucht werden, welche Inhalte fehlen und welche Aktion Besucher ausführen sollen.",
        ],
        bullets: [
          "Leistungen vorab sortieren",
          "Pflichtinhalte und rechtliche Seiten sammeln",
          "Bilder, Referenzen und Vertrauenssignale vorbereiten",
          "Kontakt- und Anfrageprozess früh festlegen",
        ],
      },
      {
        heading: "Was bei günstigen Angeboten oft fehlt",
        body: [
          "Ein niedriger Einstiegspreis wirkt attraktiv, kann aber wichtige Punkte ausklammern. Häufig fehlen klare Texte, mobile Feinarbeit, saubere Ladezeiten, SEO-Grundlagen, Formular-Tests oder Betreuung nach dem Launch.",
          "Dadurch sieht die Website zwar fertig aus, erfüllt aber nicht zuverlässig ihre Aufgabe. Entscheidend ist deshalb nicht nur, was eine Website kostet, sondern was im Leistungsumfang wirklich enthalten ist.",
        ],
        bullets: [
          "Keine klare Seitenstruktur",
          "Zu wenig Abstimmung zu Texten und Bildern",
          "Schwache mobile Darstellung",
          "Keine Prüfung von Formularen, Ladezeit und SEO-Basics",
        ],
      },
      {
        heading: "Wie Digital Vision Website-Kosten einordnet",
        body: [
          "Digital Vision betrachtet Kosten nicht als Paketzahl ohne Kontext. Zuerst wird geklärt, was die Website leisten soll, welche Inhalte gebraucht werden und welche Funktionen wirklich sinnvoll sind.",
          "So entsteht ein realistischer Rahmen, der nicht künstlich aufgebläht ist, aber auch keine wichtigen Bausteine verschweigt. Das Ziel ist eine Website, die verständlich geplant, sauber umgesetzt und später erweiterbar bleibt.",
        ],
      },
    ],
    faq: [
      {
        question: "Warum unterscheiden sich Website-Angebote so stark?",
        answer:
          "Weil Umfang, Vorbereitung, Designanspruch, Inhalte, Funktionen und Betreuung sehr unterschiedlich sein können. Ein Angebot sollte deshalb immer den genauen Leistungsumfang erklären.",
      },
      {
        question: "Kann eine Website später erweitert werden?",
        answer:
          "Ja. Wenn Struktur und Technik sauber geplant sind, können später neue Seiten, Funktionen, Formulare oder ein Admin-Bereich ergänzt werden.",
      },
      {
        question: "Was sollte vor einer Anfrage vorbereitet werden?",
        answer:
          "Hilfreich sind Informationen zu Leistungen, Zielgruppe, bestehenden Inhalten, gewünschten Funktionen, Referenzen und dem Ziel der Website.",
      },
    ],
  },
  {
    slug: "kontaktformular-optimieren-mehr-qualifizierte-anfragen",
    title: "Kontaktformular optimieren: Mehr qualifizierte Anfragen erhalten",
    description:
      "Ein gutes Kontaktformular fragt nicht möglichst viel ab, sondern genau die Informationen, die für eine schnelle und passende Rückmeldung gebraucht werden.",
    excerpt: "Wie Formulare klarer werden und bessere Anfragen ermöglichen.",
    category: "Conversion",
    date: "2026-08-10",
    readingTime: "7 Min. Lesezeit",
    focusKeyword: "Kontaktformular optimieren",
    image: "/blog/kontaktformular-optimieren-mehr-qualifizierte-anfragen.png",
    imageAlt: "Laptop mit Kontaktformular, Anfrage-Schritten und Statusübersicht",
    featured: true,
    takeaways: [
      "Formulare sollten kurz, klar und auf den nächsten Schritt ausgerichtet sein.",
      "Auswahlfelder helfen, Anfragen schneller einzuordnen.",
      "Nach dem Absenden braucht es einen sauberen internen Ablauf.",
    ],
    sections: [
      {
        heading: "Warum ein Formular mehr ist als ein paar Felder",
        body: [
          "Das Kontaktformular ist oft der Moment, in dem aus Interesse eine konkrete Anfrage wird. Wenn dieser Schritt unklar, zu lang oder technisch unsauber ist, gehen potenzielle Kunden verloren.",
          "Ein gutes Formular reduziert Unsicherheit. Besucher verstehen, was gefragt wird, warum es gefragt wird und was nach dem Absenden passiert.",
        ],
      },
      {
        heading: "Welche Felder wirklich gebraucht werden",
        body: [
          "Nicht jede Information muss sofort abgefragt werden. Für eine erste Einschätzung reichen häufig Name, Kontaktmöglichkeit, Anliegen und ein kurzer Kontext. Alles Weitere kann im Gespräch oder in einem zweiten Schritt geklärt werden.",
          "Wenn ein Projekt komplexer ist, helfen Auswahlfelder. Besucher müssen dann nicht frei formulieren, sondern können Thema, Umfang oder gewünschten Zeitraum schneller einordnen.",
        ],
        bullets: [
          "Name und bevorzugter Kontaktweg",
          "Art des Anliegens oder Projekts",
          "Kurze Beschreibung statt langer Pflichttexte",
          "Optionale Angaben für Budget, Zeitraum oder bestehende Website",
        ],
      },
      {
        heading: "Wie Formulare vertrauenswürdiger wirken",
        body: [
          "Menschen füllen Formulare eher aus, wenn der Aufwand überschaubar ist und der nächste Schritt klar bleibt. Kurze Hinweise, verständliche Labels und ein sichtbarer Absenden-Button helfen dabei.",
          "Auch die Umgebung des Formulars zählt. Wenn vorher Nutzen, Ablauf und Erwartungen erklärt wurden, fühlt sich die Anfrage weniger riskant an.",
        ],
        bullets: [
          "Klare Feldnamen ohne Fachbegriffe",
          "Wenige Pflichtfelder",
          "Kurzer Hinweis zur Rückmeldung",
          "Fehlermeldungen, die konkret erklären, was fehlt",
        ],
      },
      {
        heading: "Was nach dem Absenden passieren sollte",
        body: [
          "Ein Formular endet nicht beim Klick auf Absenden. Danach sollte eine Bestätigung erscheinen, die Anfrage sollte zuverlässig ankommen und intern so sortiert werden, dass schnell reagiert werden kann.",
          "Besonders bei mehreren Themen lohnt sich eine klare Einordnung. Dann weiß das Team sofort, ob es um eine Website, ein System, SEO, Betreuung oder eine andere Anfrage geht.",
        ],
        bullets: [
          "Bestätigung für den Besucher",
          "Saubere E-Mail oder Dashboard-Ablage",
          "Themen und Prioritäten sichtbar machen",
          "Status und Zuständigkeit intern klären",
        ],
      },
      {
        heading: "Wie Digital Vision Formulare plant",
        body: [
          "Digital Vision plant Kontaktformulare nicht isoliert, sondern als Teil des Anfrageprozesses. Die Fragen werden so gewählt, dass Besucher nicht überfordert werden und das Unternehmen trotzdem sinnvoll reagieren kann.",
          "Bei Bedarf wird das Formular mit Bestätigungen, Uploads, Terminwünschen oder einem internen Dashboard verbunden. Dadurch wird aus einer Nachricht ein geordneter Ablauf.",
        ],
      },
    ],
    faq: [
      {
        question: "Wie lang sollte ein Kontaktformular sein?",
        answer:
          "So kurz wie möglich und so ausführlich wie nötig. Für den ersten Kontakt reichen meist wenige Pflichtfelder und optionale Details.",
      },
      {
        question: "Sind mehrstufige Formulare sinnvoll?",
        answer:
          "Ja, wenn mehrere Informationen gebraucht werden. Mehrstufige Formulare wirken oft leichter, weil Besucher Schritt für Schritt geführt werden.",
      },
      {
        question: "Kann ein Formular mit einem Dashboard verbunden werden?",
        answer:
          "Ja. Anfragen können automatisch gespeichert, sortiert und mit Status oder Zuständigkeiten versehen werden.",
      },
    ],
  },
  {
    slug: "admin-bereich-planen-inhalte-selbst-verwalten",
    title: "Admin-Bereich planen: Inhalte einfach selbst verwalten",
    description:
      "Ein Admin-Bereich ist sinnvoll, wenn Inhalte, Anfragen oder Abläufe regelmäßig gepflegt werden sollen. Entscheidend ist eine klare und einfache Struktur.",
    excerpt: "Wann ein Admin-Bereich sinnvoll ist und wie er übersichtlich bleibt.",
    category: "Systeme",
    date: "2026-08-10",
    readingTime: "8 Min. Lesezeit",
    focusKeyword: "Admin-Bereich",
    image: "/blog/admin-bereich-planen-inhalte-selbst-verwalten.png",
    imageAlt: "Laptop mit Admin-Dashboard, Inhaltskarten, Rollen und Vorschauansicht",
    featured: true,
    takeaways: [
      "Ein Admin-Bereich lohnt sich bei regelmäßig gepflegten Inhalten oder Prozessen.",
      "Zu viele Optionen machen Systeme schwerer nutzbar.",
      "Rollen, Eingaben und Vorschauen sollten klar geplant werden.",
    ],
    sections: [
      {
        heading: "Wann ein Admin-Bereich sinnvoll ist",
        body: [
          "Nicht jede Website braucht einen Admin-Bereich. Wenn Inhalte selten geändert werden, ist eine schlanke technische Lösung oft ausreichend. Sobald aber Leistungen, Bilder, Blogartikel, Anfragen oder Termine regelmäßig gepflegt werden, kann ein eigener Bereich viel Arbeit sparen.",
          "Der Vorteil liegt nicht nur darin, Inhalte selbst zu ändern. Ein guter Admin-Bereich macht Abläufe nachvollziehbar und reduziert die Abhängigkeit von einzelnen Personen oder manuellen Listen.",
        ],
      },
      {
        heading: "Welche Inhalte verwaltet werden sollten",
        body: [
          "Ein Admin-Bereich sollte nur die Bereiche enthalten, die im Alltag wirklich gebraucht werden. Je mehr Felder und Menüpunkte angelegt werden, desto schwieriger wird die Pflege.",
          "Typische Inhalte sind Leistungen, Referenzen, Bilder, Blogartikel, Teamangaben, Preise, Anfragen oder einfache Statuslisten. Wichtig ist, dass jede Eingabe einen klaren Zweck hat.",
        ],
        bullets: [
          "Leistungen, Bilder und Referenzen",
          "Blogartikel oder News",
          "Kontaktanfragen und Projektstatus",
          "Termine, Verfügbarkeiten oder einfache Prozesse",
        ],
      },
      {
        heading: "Warum Einfachheit wichtiger ist als Funktionsmenge",
        body: [
          "Viele Systeme scheitern nicht daran, dass sie zu wenig können, sondern daran, dass sie im Alltag zu kompliziert sind. Wenn Nutzer zu viele Pflichtfelder ausfüllen müssen oder nicht wissen, welche Aktion sicher ist, wird das System gemieden.",
          "Ein guter Admin-Bereich zeigt nur relevante Optionen, erklärt Zustände klar und macht häufige Aufgaben schnell erreichbar. Erweiterungen können später ergänzt werden, wenn echte Anforderungen entstehen.",
        ],
        bullets: [
          "Klare Navigation statt zu vieler Menüpunkte",
          "Pflichtfelder nur dort, wo sie notwendig sind",
          "Vorschau vor dem Veröffentlichen",
          "Status für Entwurf, Prüfung und Veröffentlichung",
        ],
      },
      {
        heading: "Welche Rollen und Rechte bedacht werden sollten",
        body: [
          "Wenn mehrere Personen mit dem System arbeiten, sollten Rollen früh geplant werden. Nicht jeder muss alles bearbeiten, löschen oder veröffentlichen können.",
          "Klare Rechte schützen Inhalte und machen Verantwortlichkeiten sichtbar. Gerade bei Anfragen, Kundendaten oder sensiblen Abläufen ist das wichtig.",
        ],
        bullets: [
          "Redaktion für Inhalte",
          "Admin-Rechte für Einstellungen",
          "Leserechte für interne Übersichten",
          "Sensible Daten nur für berechtigte Personen",
        ],
      },
      {
        heading: "Wie Digital Vision Admin-Bereiche umsetzt",
        body: [
          "Digital Vision plant Admin-Bereiche ausgehend vom echten Arbeitsalltag. Zuerst wird geklärt, was gepflegt werden soll, wer damit arbeitet und welche Abläufe regelmäßig wiederkehren.",
          "Daraus entsteht ein übersichtliches System, das zur Website passt und nicht mehr Komplexität erzeugt als nötig. Ziel ist ein Admin-Bereich, der genutzt wird, weil er verständlich und hilfreich ist.",
        ],
      },
    ],
    faq: [
      {
        question: "Braucht jede Website einen Admin-Bereich?",
        answer:
          "Nein. Ein Admin-Bereich lohnt sich vor allem, wenn Inhalte oder Anfragen regelmäßig gepflegt und intern verarbeitet werden.",
      },
      {
        question: "Kann ein Admin-Bereich später ergänzt werden?",
        answer:
          "Ja. Wenn die Website technisch sauber geplant ist, kann ein Admin-Bereich später erweitert oder neu angebunden werden.",
      },
      {
        question: "Was ist wichtiger: viele Funktionen oder einfache Bedienung?",
        answer:
          "Einfache Bedienung ist wichtiger. Funktionen helfen nur, wenn sie im Alltag verstanden und regelmäßig genutzt werden.",
      },
    ],
  },
  {
    slug: "landingpage-erstellen-wann-eine-seite-reicht",
    title: "Landingpage erstellen: Wann eine einzelne Seite reicht",
    description:
      "Eine Landingpage kann stärker wirken als eine komplette Website, wenn Ziel, Angebot, Vertrauen und Kontaktweg klar auf eine Aktion ausgerichtet sind.",
    excerpt: "Wann eine Landingpage sinnvoll ist und welche Bausteine nicht fehlen sollten.",
    category: "Landingpages",
    date: "2026-08-06",
    readingTime: "8 Min. Lesezeit",
    focusKeyword: "Landingpage erstellen",
    image: "/blog/landingpage-erstellen-wann-eine-seite-reicht.png",
    imageAlt: "Laptop mit Landingpage-Struktur, Conversion-Pfad und digitalen Planungskarten",
    featured: true,
    takeaways: [
      "Eine Landingpage sollte auf ein klares Ziel ausgerichtet sein.",
      "Angebot, Nutzen, Vertrauen und Anfrageweg müssen schnell verständlich werden.",
      "Zu viele Ablenkungen schwächen die Wirkung einer einzelnen Seite.",
    ],
    sections: [
      {
        heading: "Warum eine Landingpage anders funktioniert als eine Website",
        body: [
          "Eine klassische Website erklärt ein Unternehmen mit mehreren Bereichen, Unterseiten und Kontaktwegen. Eine Landingpage ist enger gedacht: Sie führt Besucher zu einer bestimmten Aktion, zum Beispiel zu einer Anfrage, Buchung, Anmeldung oder Angebotsseite.",
          "Genau deshalb muss sie stärker fokussieren. Jede Sektion sollte eine konkrete Aufgabe haben: Aufmerksamkeit gewinnen, Nutzen erklären, Vertrauen aufbauen, Einwände reduzieren und den nächsten Schritt leicht machen.",
        ],
      },
      {
        heading: "Wann eine einzelne Seite ausreicht",
        body: [
          "Eine Landingpage reicht oft aus, wenn ein Angebot klar begrenzt ist und Besucher keine große Seitentiefe brauchen. Das kann eine bestimmte Dienstleistung, ein saisonales Angebot, eine Kampagne, ein Beratungsformat oder ein lokaler Terminservice sein.",
          "Wichtig ist, dass die Entscheidungssituation überschaubar bleibt. Wenn Kunden zuerst viele Leistungen vergleichen, Teamdetails prüfen oder umfangreiche Inhalte lesen müssen, ist eine vollständige Website meistens sinnvoller.",
        ],
        bullets: [
          "Ein einzelnes Angebot steht im Mittelpunkt",
          "Der nächste Schritt ist klar messbar",
          "Besucher kommen aus einer Kampagne oder Anzeige",
          "Die wichtigsten Fragen passen auf eine strukturierte Seite",
        ],
      },
      {
        heading: "Welche Bausteine eine gute Landingpage braucht",
        body: [
          "Eine starke Landingpage startet mit einer klaren Aussage. Besucher müssen sofort verstehen, worum es geht, für wen das Angebot gedacht ist und warum sie weiter lesen sollten. Danach folgen Nutzen, Belege und ein einfacher Kontaktweg.",
          "Der Aufbau sollte nicht zufällig wirken. Gute Landingpages führen von der ersten Orientierung zur Entscheidung: Problem, Lösung, Vorteile, Vertrauen, Ablauf, FAQ und Anfrage.",
        ],
        bullets: [
          "Klarer Hero-Bereich mit konkretem Nutzen",
          "Kurze Leistungs- oder Angebotsbeschreibung",
          "Vertrauenssignale wie Beispiele, Bewertungen oder Erfahrung",
          "Sichtbarer CTA an mehreren sinnvollen Stellen",
        ],
      },
      {
        heading: "Was Landingpages schwach macht",
        body: [
          "Viele Landingpages verlieren Wirkung, weil sie wie eine gekürzte Startseite aufgebaut werden. Dann stehen zu viele Themen nebeneinander, die Hauptaktion ist unklar oder Besucher müssen lange suchen, bevor sie Kontakt aufnehmen können.",
          "Auch zu viel Design kann stören. Animationen, große Effekte oder unklare Bildwelten helfen wenig, wenn das Angebot nicht präzise erklärt wird. Eine Landingpage sollte hochwertig wirken, aber vor allem verständlich bleiben.",
        ],
        bullets: [
          "Mehrere gleich wichtige Ziele auf einer Seite",
          "Unklare Überschriften ohne konkreten Nutzen",
          "Zu wenig Vertrauen vor dem Kontaktformular",
          "Kontaktbutton erst am Ende der Seite",
        ],
      },
      {
        heading: "Wie Digital Vision Landingpages plant",
        body: [
          "Digital Vision plant Landingpages vom Ziel aus. Zuerst wird geklärt, welche Aktion erreicht werden soll, welche Besucher auf die Seite kommen und welche Fragen vor der Anfrage beantwortet werden müssen.",
          "Danach entsteht eine Seite mit klarer Reihenfolge, passendem Design, schnellen Ladezeiten und einem Kontaktweg, der nicht im Layout verschwindet. So wird die Landingpage nicht nur schön, sondern messbar nutzbar.",
        ],
      },
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen Landingpage und Website?",
        answer:
          "Eine Website bildet ein Unternehmen breiter ab. Eine Landingpage konzentriert sich auf ein bestimmtes Angebot und führt Besucher gezielt zu einer Aktion.",
      },
      {
        question: "Braucht eine Landingpage SEO?",
        answer:
          "Ja, wenn sie organisch gefunden werden soll. Bei Kampagnen oder Anzeigen sind zusätzlich Ladezeit, klare Botschaft und passende Zielgruppenansprache besonders wichtig.",
      },
      {
        question: "Kann Digital Vision eine Landingpage später zur Website erweitern?",
        answer:
          "Ja. Wenn Struktur und Technik sauber geplant sind, kann aus einer Landingpage später eine größere Website mit Unterseiten entstehen.",
      },
    ],
  },
  {
    slug: "ki-funktionen-auf-websites-sinnvoll-einsetzen",
    title: "KI auf Websites: Welche Funktionen wirklich sinnvoll sind",
    description:
      "KI kann Websites hilfreicher machen, wenn sie konkrete Aufgaben löst: bessere Anfragen, schnellere Antworten und klarere interne Abläufe.",
    excerpt: "Wie KI-Funktionen auf Websites praktisch genutzt werden, ohne Besucher zu überfordern.",
    category: "KI & Automatisierung",
    date: "2026-08-05",
    readingTime: "8 Min. Lesezeit",
    focusKeyword: "KI auf Websites",
    image: "/blog/ki-funktionen-auf-websites-sinnvoll-einsetzen.png",
    imageAlt: "Laptop mit Website, KI-Assistent und digitalen Workflow-Karten",
    featured: true,
    takeaways: [
      "KI sollte konkrete Aufgaben lösen, nicht nur modern wirken.",
      "Besucher profitieren von schnellen Antworten und besseren Formularen.",
      "Intern wird KI wertvoll, wenn sie Anfragen sortiert und Prozesse vorbereitet.",
    ],
    sections: [
      {
        heading: "Warum KI nicht als Effekt geplant werden sollte",
        body: [
          "Viele Unternehmen denken bei KI zuerst an Chatbots, automatische Texte oder spektakuläre Funktionen. Das kann interessant sein, bringt aber wenig, wenn die Funktion keinen echten Zweck erfüllt.",
          "Sinnvoll wird KI dort, wo sie Besuchern Orientierung gibt oder dem Team Arbeit abnimmt. Eine gute Website bleibt verständlich, klar aufgebaut und menschlich ansprechbar. KI ergänzt diesen Ablauf, ersetzt ihn aber nicht.",
        ],
      },
      {
        heading: "Welche KI-Funktionen Besuchern wirklich helfen",
        body: [
          "Besucher haben meistens einfache Fragen: Welche Leistung passt zu mir? Was kostet der nächste Schritt? Wie läuft eine Anfrage ab? Eine KI-Funktion kann diese Fragen schneller beantworten, wenn sie sauber begrenzt und mit den richtigen Inhalten verbunden ist.",
          "Besonders hilfreich sind intelligente FAQ-Bereiche, kurze Assistenten für die Vorauswahl oder Formulare, die passende Rückfragen stellen. Wichtig ist, dass Nutzer jederzeit verstehen, was passiert und wie sie direkt Kontakt aufnehmen können.",
        ],
        bullets: [
          "FAQ-Assistent für häufige Kundenfragen",
          "Formulare mit passenden Rückfragen je Anliegen",
          "Empfehlungen für relevante Leistungen oder nächste Schritte",
          "Automatische Zusammenfassung einer Anfrage vor dem Absenden",
        ],
      },
      {
        heading: "Wo KI intern Zeit sparen kann",
        body: [
          "Der größte Nutzen entsteht oft nach dem Absenden einer Anfrage. KI kann eingehende Nachrichten vorsortieren, wichtige Angaben erkennen und dem Team eine kurze Zusammenfassung geben.",
          "So muss nicht jede E-Mail manuell gelesen, kopiert oder eingeordnet werden. Das Team sieht schneller, worum es geht, welche Informationen fehlen und welche Antwort vorbereitet werden sollte.",
        ],
        bullets: [
          "Anfragen nach Thema oder Dringlichkeit markieren",
          "Kontaktinformationen und Leistungswünsche herausfiltern",
          "Antwortentwürfe für wiederkehrende Fragen vorbereiten",
          "Status und nächste Schritte im Dashboard sichtbar machen",
        ],
      },
      {
        heading: "Welche Grenzen klar sein müssen",
        body: [
          "KI sollte nicht so eingebaut werden, dass Besucher ihr blind vertrauen müssen. Preise, rechtliche Aussagen, medizinische Hinweise oder verbindliche Zusagen brauchen weiterhin klare Regeln und menschliche Kontrolle.",
          "Auch Datenschutz und Transparenz sind wichtig. Nutzer sollten wissen, welche Daten sie eingeben, wofür diese genutzt werden und wann ein Mensch die Anfrage übernimmt.",
        ],
        bullets: [
          "Keine verbindlichen Zusagen ohne Prüfung",
          "Keine unnötigen sensiblen Daten abfragen",
          "Klare Übergabe an echte Ansprechpartner ermöglichen",
          "KI-Antworten regelmäßig prüfen und verbessern",
        ],
      },
      {
        heading: "Wie Digital Vision KI pragmatisch einbindet",
        body: [
          "Digital Vision plant KI-Funktionen nicht als Zusatzspielerei, sondern ausgehend vom echten Ablauf: Welche Fragen wiederholen sich? Wo verliert das Team Zeit? Welche Informationen fehlen bei Anfragen regelmäßig?",
          "Daraus entsteht eine schlanke Lösung, die zur Website, zum Kontaktprozess und bei Bedarf zu einem internen Dashboard passt. So wird KI nicht lauter als der Auftritt, sondern macht ihn nützlicher.",
        ],
      },
    ],
    faq: [
      {
        question: "Braucht jede Website einen KI-Chatbot?",
        answer:
          "Nein. Ein KI-Chatbot ist nur sinnvoll, wenn er konkrete Fragen zuverlässig beantworten kann und sauber in den Anfrageprozess eingebunden ist.",
      },
      {
        question: "Kann KI mit Kontaktformularen verbunden werden?",
        answer:
          "Ja. KI kann Anfragen zusammenfassen, vorsortieren oder passende Rückfragen vorbereiten, wenn der Ablauf technisch sauber geplant ist.",
      },
      {
        question: "Ist KI auf Websites auch für kleine Unternehmen sinnvoll?",
        answer:
          "Ja, wenn sie wiederkehrende Fragen beantwortet oder interne Arbeit vereinfacht. Der Umfang sollte klein starten und zum Alltag des Unternehmens passen.",
      },
    ],
  },
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
        heading: "Wie Digital Vision Websites strukturiert",
        body: [
          "Digital Vision plant Websites als klare Wege: Einstieg, Orientierung, Vertrauen, Entscheidung und Kontakt. Dadurch wirkt die Seite nicht nur moderner, sondern wird für Besucher leichter verständlich.",
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
        question: "Kann Digital Vision auch bestehende Websites neu strukturieren?",
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
        question: "Kann Digital Vision Websites für unterschiedliche Branchen bauen?",
        answer:
          "Ja. Digital Vision erstellt individuelle Website-Konzepte für Praxen, Studios, Dienstleister, Beratungen, Shops und weitere Branchen.",
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
          "Digital Vision plant solche Entscheidungen früh, damit die Website nicht unnötig kompliziert wird.",
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
    slug: "website-relaunch-inhalte-richtig-uebernehmen",
    title: "Website-Relaunch: Alte Inhalte richtig übernehmen",
    description:
      "Ein Relaunch sollte nicht nur moderner aussehen. Wichtig ist, bestehende Inhalte sauber zu prüfen, zu sortieren und sinnvoll zu übernehmen.",
    excerpt: "Wie bestehende Inhalte beim Relaunch sauber geprüft und neu aufgebaut werden.",
    category: "Websites",
    date: "2026-08-04",
    readingTime: "8 Min. Lesezeit",
    focusKeyword: "Website-Relaunch",
    image: "/blog/website-relaunch-inhalte-richtig-uebernehmen.jpg",
    imageAlt: "Laptop mit Website-Relaunch, Inhaltskarten und Checkliste",
    takeaways: [
      "Ein Relaunch braucht eine klare Inhaltsprüfung vor dem neuen Design.",
      "Nicht jeder alte Text sollte unverändert übernommen werden.",
      "Weiterleitungen, Struktur und Kontaktwege müssen früh mitgedacht werden.",
    ],
    sections: [
      {
        heading: "Warum ein Relaunch mehr ist als ein neues Design",
        body: [
          "Viele Website-Relaunches starten mit dem Wunsch nach einem moderneren Look. Das ist verständlich, reicht aber nicht aus. Wenn alte Inhalte ungeprüft übernommen werden, sieht die Website zwar neu aus, bleibt aber inhaltlich oft genauso unklar wie vorher.",
          "Ein guter Relaunch nutzt die Chance, Inhalte, Struktur und Nutzerführung neu zu ordnen. So entsteht nicht nur eine schönere Oberfläche, sondern ein Auftritt, der schneller verständlich ist und besser zu heutigen Kundenfragen passt.",
        ],
      },
      {
        heading: "Welche Inhalte zuerst geprüft werden sollten",
        body: [
          "Vor dem Design sollte geklärt werden, welche Inhalte wirklich gebraucht werden. Dazu gehören Leistungen, Referenzen, Kontaktwege, rechtliche Seiten, Bilder, alte Blogartikel und alle Texte, die aktuell auf der Website stehen.",
          "Besonders wichtig ist die Frage, welche Inhalte noch stimmen. Veraltete Leistungen, alte Teamangaben oder unklare Beschreibungen schwächen den Relaunch, auch wenn das Layout hochwertig wirkt.",
        ],
        bullets: [
          "Leistungen und Angebote auf Aktualität prüfen",
          "Alte Texte auf Klarheit und Dopplungen prüfen",
          "Bilder, Referenzen und Vertrauenssignale erneuern",
          "Kontaktwege und Formulare vor dem Launch testen",
        ],
      },
      {
        heading: "Was nicht einfach kopiert werden sollte",
        body: [
          "Nicht jeder alte Text verdient einen Platz auf der neuen Website. Manche Inhalte sind zu lang, zu allgemein oder beantworten nicht mehr die Fragen, die Kunden heute stellen.",
          "Statt alles zu kopieren, sollte jeder Abschnitt eine Aufgabe bekommen. Erklärt er eine Leistung? Baut er Vertrauen auf? Führt er zur Anfrage? Wenn ein Inhalt keine klare Aufgabe hat, sollte er gekürzt, zusammengeführt oder entfernt werden.",
        ],
        bullets: [
          "Veraltete Leistungen nicht übernehmen",
          "Doppelte Aussagen zusammenführen",
          "Unklare Texte neu schreiben",
          "Seiten ohne Nutzen entfernen oder weiterleiten",
        ],
      },
      {
        heading: "Warum Weiterleitungen beim Relaunch wichtig sind",
        body: [
          "Wenn sich URLs ändern, dürfen alte Seiten nicht einfach verschwinden. Besucher, gespeicherte Links und Suchmaschinen können sonst auf Fehlerseiten landen. Das wirkt unprofessionell und kann Sichtbarkeit kosten.",
          "Deshalb sollte vor dem Launch eine einfache Zuordnung entstehen: Welche alte Seite führt auf welche neue Seite? Gerade bei bestehenden Blogartikeln, Leistungsseiten oder Kontaktseiten ist das wichtig.",
        ],
        bullets: [
          "Alte URLs sammeln",
          "Neue Zielseiten festlegen",
          "Wichtige Seiten mit Weiterleitungen absichern",
          "Nach dem Launch Fehlerseiten prüfen",
        ],
      },
      {
        heading: "Wie Digital Vision Relaunches strukturiert",
        body: [
          "Digital Vision behandelt einen Relaunch als Neustart mit vorhandener Substanz. Bestehende Inhalte werden geprüft, sortiert und dort übernommen, wo sie noch sinnvoll sind.",
          "Danach entsteht eine klare Struktur für Startseite, Unterseiten, Kontaktwege und spätere Erweiterungen. So bleibt der Relaunch übersichtlich und führt nicht zu einer Website, die nur optisch neu ist.",
        ],
      },
    ],
    faq: [
      {
        question: "Sollte man bei einem Relaunch alle alten Inhalte übernehmen?",
        answer:
          "Nein. Alte Inhalte sollten zuerst geprüft werden. Nur aktuelle, klare und hilfreiche Inhalte sollten unverändert oder überarbeitet übernommen werden.",
      },
      {
        question: "Was passiert mit alten URLs nach einem Relaunch?",
        answer:
          "Wichtige alte URLs sollten auf passende neue Seiten weitergeleitet werden, damit Besucher und Suchmaschinen nicht auf Fehlerseiten landen.",
      },
      {
        question: "Kann Digital Vision bestehende Websites für einen Relaunch analysieren?",
        answer:
          "Ja. Bestehende Seiten können vorab geprüft, neu strukturiert und in ein klares Relaunch-Konzept überführt werden.",
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
        heading: "Wie Digital Vision SEO pragmatisch einbindet",
        body: [
          "Digital Vision betrachtet SEO als Teil der Website-Planung. Zuerst werden Leistungen, Zielgruppen und Suchintentionen sortiert. Danach entsteht eine Struktur, die Besucher führt und Suchmaschinen klare Signale gibt.",
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
        question: "Kann Digital Vision bestehende Websites für SEO verbessern?",
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
          "Digital Vision kann Inhalte, Technik und Erweiterungen so begleiten, dass die Website langfristig nutzbar bleibt.",
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
