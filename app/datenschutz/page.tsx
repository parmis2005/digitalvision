import type { Metadata } from "next";
import Link from "next/link";

const title = "Datenschutzerklärung";
const description = "Datenschutzerklärung von DigitalVision.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/datenschutz",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <div className="legal-page-inner">
        <p className="eyebrow">Rechtliches</p>
        <h1>Datenschutzerklärung</h1>

        <section>
          <h2>1. Verantwortlicher</h2>
          <p>
            Parmis Paschaei
            <br />
            Erfurter Straße 16
            <br />
            41069 Mönchengladbach
            <br />
            Telefon: 017623467326
            <br />
            E-Mail: info@digitalvision.site
          </p>
        </section>

        <section>
          <h2>2. Überblick der Verarbeitung</h2>
          <p>
            Im Folgenden geben wir dir einen Überblick, welche Daten beim Besuch dieser
            Website und bei Nutzung des Kontakt- bzw. Buchungsformulars verarbeitet werden,
            zu welchem Zweck dies geschieht und wie lange die Daten gespeichert bleiben.
            Diese Website richtet sich an Interessenten in Deutschland und wird als
            Kleingewerbe im Sinne des § 19 UStG betrieben.
          </p>
        </section>

        <section>
          <h2>3. Hosting</h2>
          <p>
            Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
            USA, gehostet. Beim Aufruf der Website verarbeitet Vercel automatisch
            technische Daten (sogenannte Server-Logfiles), die dein Browser übermittelt, u.
            a. IP-Adresse, Datum und Uhrzeit der Anfrage, aufgerufene Seite, verwendeter
            Browsertyp, Betriebssystem und die zuvor besuchte Seite (Referrer). Diese Daten
            sind technisch erforderlich, um die Website auszuliefern und ihre Stabilität und
            Sicherheit zu gewährleisten; sie werden nicht mit anderen Datenquellen
            zusammengeführt und nicht zu Analyse- oder Marketingzwecken ausgewertet.
            Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren und
            störungsfreien Betrieb der Website (Art. 6 Abs. 1 lit. f DSGVO). Die
            Server-Logfiles werden nach kurzer Zeit automatisiert gelöscht, spätestens
            jedoch nach 30 Tagen.
          </p>
          <p>
            Da Vercel Inc. ein Unternehmen mit Sitz in den USA ist, kann es dabei zu einer
            Datenübermittlung in ein Drittland (USA) kommen. Vercel verweist hierzu auf
            geeignete Garantien nach Art. 46 DSGVO, insbesondere die von der EU-Kommission
            erlassenen Standardvertragsklauseln (SCC). Mit Vercel besteht ein Vertrag zur
            Auftragsverarbeitung nach Art. 28 DSGVO.
          </p>
        </section>

        <section>
          <h2>4. SSL-/TLS-Verschlüsselung</h2>
          <p>
            Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
            vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte
            Verbindung erkennst du daran, dass die Adresszeile deines Browsers von
            „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in der Browserzeile.
          </p>
        </section>

        <section>
          <h2>5. Kontaktformular und Terminbuchung</h2>
          <p>
            Über das Formular auf dieser Website kannst du eine Projektanfrage stellen und
            direkt einen unverbindlichen Beratungstermin buchen. Dabei werden folgende Daten
            verarbeitet:
          </p>
          <p>
            <strong>Angaben, die du direkt einträgst:</strong> Name, E-Mail-Adresse, dein
            gewähltes Anliegen (SEO, Webseite oder Verwaltungssystem), die von dir
            ausgewählten Leistungen sowie – je nach Anliegen – optionale Zusatzangaben wie
            Projektname, bestehende Webseite bzw. Software, aktueller Status, Zufriedenheit
            mit einer bestehenden Lösung, gewünschte Nutzerzahl, geplante Nutzung (Desktop,
            responsive, App), benötigte Schnittstellen und eine Freitextbeschreibung deines
            Vorhabens.
          </p>
          <p>
            <strong>Angaben aus dem Kalkulator und der Terminwahl:</strong> die von dir
            eingestellten Werte für Umfang, Wettbewerbssituation und gewünschten
            Startzeitpunkt bzw. Betreuungszeitraum, der daraus berechnete Preisrahmen sowie
            das von dir gewählte Datum, die Uhrzeit und die Ansprechperson für das
            Beratungsgespräch.
          </p>
          <p>
            <strong>Weiterleitung per E-Mail:</strong> Alle vorgenannten Angaben werden über
            den E-Mail-Dienst Resend (Resend Inc., 2261 Market Street #5039, San Francisco,
            CA 94114, USA) an unser Postfach übermittelt, damit wir deine Anfrage bzw.
            Terminbuchung bearbeiten können. Mit Resend besteht ein Vertrag zur
            Auftragsverarbeitung nach Art. 28 DSGVO; da Resend Inc. in den USA ansässig ist,
            kann es auch hier zu einer Datenübermittlung in ein Drittland kommen, für die
            Resend geeignete Garantien nach Art. 46 DSGVO (u. a. Standardvertragsklauseln)
            vorsieht.
          </p>
          <p>
            <strong>Speicherung in unserer Datenbank:</strong> Um Terminüberschneidungen zu
            vermeiden und Termine zu koordinieren, speichern wir bei einer Terminbuchung
            zusätzlich in einer Datenbank: das gebuchte Datum, die Uhrzeit, die
            Ansprechperson, deine E-Mail-Adresse, das gewählte Anliegen, die ausgewählten
            Leistungen, den Umfang, die Wettbewerbssituation, den gewünschten Start bzw.
            Betreuungszeitraum sowie den berechneten Preisrahmen. Dein Name sowie etwaige
            Zusatzangaben (z. B. Freitextbeschreibung, bestehende Webseite/Software,
            Nutzerzahl, Schnittstellen) werden ausschließlich per E-Mail übermittelt und
            nicht in der Datenbank gespeichert. Diese Datenbank wird bei Neon, Inc. (USA)
            betrieben, einem Anbieter für verwaltete PostgreSQL-Datenbanken. Mit Neon
            besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO; da Neon, Inc.
            in den USA ansässig ist, kann es auch hier zu einer Datenübermittlung in ein
            Drittland kommen, für die Neon geeignete Garantien nach Art. 46 DSGVO (u. a.
            Standardvertragsklauseln) vorsieht.
          </p>
          <p>
            <strong>Rechtsgrundlage</strong> für die vorgenannten Verarbeitungen ist Art. 6
            Abs. 1 lit. b DSGVO, da die Verarbeitung der Bearbeitung deiner Anfrage bzw. der
            Anbahnung eines Beratungs- bzw. Auftragsverhältnisses dient. Die Checkbox zur
            Bestätigung der Datenschutzerklärung im Buchungsformular dient dazu,
            sicherzustellen, dass du vor dem Absenden von dieser Datenschutzerklärung
            Kenntnis genommen hast; sie begründet keine gesonderte Einwilligung nach Art. 6
            Abs. 1 lit. a DSGVO für eine darüberhinausgehende Verarbeitung.
          </p>
          <p>
            <strong>Speicherdauer:</strong> Die per E-Mail übermittelten Daten verbleiben in
            unserem Postfach, bis deine Anfrage vollständig bearbeitet ist bzw. ein daraus
            entstandenes Auftragsverhältnis abgeschlossen und abgerechnet ist; danach werden
            sie gelöscht, soweit keine handels- oder steuerrechtlichen
            Aufbewahrungspflichten (i. d. R. 6 bzw. 10 Jahre nach §§ 147 AO, 257 HGB für
            abrechnungsrelevante Unterlagen) entgegenstehen. Die in der Datenbank
            gespeicherten Termindaten werden gelöscht, sobald der Termin wahrgenommen bzw.
            die Terminkoordination abgeschlossen ist und die Daten nicht mehr benötigt
            werden.
          </p>
        </section>

        <section>
          <h2>6. Cookies und lokale Speicherung</h2>
          <p>
            Diese Website setzt keine Cookies zu Analyse-, Marketing- oder Tracking-Zwecken
            ein und bindet keine Dienste Dritter (z. B. Webanalyse- oder
            Social-Media-Dienste) ein, die Cookies setzen würden. Es findet keine Erstellung
            von Nutzungsprofilen und kein Tracking über mehrere Websites hinweg statt.
          </p>
        </section>

        <section>
          <h2>7. Keine automatisierte Entscheidungsfindung</h2>
          <p>
            Der auf dieser Website verfügbare Kalkulator dient ausschließlich der
            unverbindlichen, groben Einschätzung eines möglichen Preisrahmens und stellt
            keine automatisierte Entscheidungsfindung oder ein Profiling im Sinne von Art.
            22 DSGVO dar. Es werden keine Entscheidungen getroffen, die dir gegenüber
            rechtliche Wirkung entfalten oder dich in ähnlicher Weise erheblich
            beeinträchtigen.
          </p>
        </section>

        <section>
          <h2>8. Empfänger und Auftragsverarbeiter</h2>
          <p>
            Im Rahmen der oben beschriebenen Verarbeitungen erhalten folgende Empfänger
            Zugriff auf personenbezogene Daten, jeweils im Rahmen einer Auftragsverarbeitung
            nach Art. 28 DSGVO bzw. auf Grundlage geeigneter Garantien für
            Drittlandübermittlungen:
          </p>
          <p>
            Vercel Inc. (Hosting der Website und Verarbeitung von Server-Logfiles), Resend
            Inc. (Versand der Formular- und Buchungsdaten per E-Mail) sowie Neon, Inc.
            (Datenbank zur Speicherung von Termindaten). Eine Weitergabe deiner
            Daten an sonstige Dritte, ein Verkauf deiner Daten oder eine Nutzung zu
            Werbezwecken durch uns findet nicht statt.
          </p>
        </section>

        <section>
          <h2>9. Deine Rechte als betroffene Person</h2>
          <p>
            Dir stehen nach der DSGVO folgende Rechte gegenüber uns als Verantwortlichem zu:
          </p>
          <p>
            <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Du kannst Auskunft darüber
            verlangen, ob und welche personenbezogenen Daten wir von dir verarbeiten.
          </p>
          <p>
            <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Du kannst die
            Berichtigung unrichtiger oder die Vervollständigung unvollständiger dich
            betreffender Daten verlangen.
          </p>
          <p>
            <strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Du kannst die Löschung
            deiner bei uns gespeicherten Daten verlangen, soweit keine gesetzlichen
            Aufbewahrungspflichten oder sonstigen Ausnahmegründe entgegenstehen.
          </p>
          <p>
            <strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Du
            kannst unter bestimmten Voraussetzungen die Einschränkung der Verarbeitung
            deiner Daten verlangen, etwa solange die Richtigkeit bestrittener Daten
            überprüft wird.
          </p>
          <p>
            <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Du kannst
            verlangen, dass wir dir die Daten, die du uns bereitgestellt hast, in einem
            strukturierten, gängigen und maschinenlesbaren Format aushändigen oder – soweit
            technisch machbar – an einen anderen Verantwortlichen übermitteln.
          </p>
          <p>
            <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Soweit wir Daten auf
            Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO)
            verarbeiten, kannst du dieser Verarbeitung aus Gründen, die sich aus deiner
            besonderen Situation ergeben, jederzeit widersprechen.
          </p>
          <p>
            <strong>Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Solltest du
            uns gegenüber eine Einwilligung erteilt haben, kannst du diese jederzeit mit
            Wirkung für die Zukunft widerrufen, ohne dass die Rechtmäßigkeit der bis zum
            Widerruf erfolgten Verarbeitung berührt wird.
          </p>
          <p>
            Zur Ausübung dieser Rechte kannst du dich jederzeit formlos unter den in Ziffer
            1 genannten Kontaktdaten an uns wenden.
          </p>
        </section>

        <section>
          <h2>10. Beschwerderecht bei einer Aufsichtsbehörde</h2>
          <p>
            Unabhängig von anderen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfen
            hast du das Recht, dich bei einer Datenschutzaufsichtsbehörde über die
            Verarbeitung deiner personenbezogenen Daten durch uns zu beschweren (Art. 77
            DSGVO). Die für uns zuständige Aufsichtsbehörde ist:
          </p>
          <p>
            Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen
            (LDI NRW)
            <br />
            Kavalleriestraße 2–4
            <br />
            40213 Düsseldorf
          </p>
        </section>

        <section>
          <h2>11. Datensicherheit</h2>
          <p>
            Wir treffen angemessene technische und organisatorische Maßnahmen, um deine
            Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder
            unberechtigten Zugriff zu schützen. Dazu zählen insbesondere die Verschlüsselung
            der Übertragung mittels SSL/TLS, der Einsatz von Auftragsverarbeitern mit
            vertraglich zugesicherten Sicherheitsmaßnahmen sowie eine Beschränkung des
            Datenzugriffs auf das für die Bearbeitung erforderliche Maß. Unsere
            Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung
            fortlaufend verbessert.
          </p>
        </section>

        <section>
          <h2>12. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung
            unserer Website und Angebote oder aufgrund geänderter gesetzlicher bzw.
            behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu
            ändern. Die jeweils aktuelle Datenschutzerklärung findest du jederzeit auf
            dieser Seite.
          </p>
        </section>

        <Link className="legal-back-link" href="/">
          Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
