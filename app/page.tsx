import {
  ArrowRight,
  Check,
  ChevronUp,
  Compass,
  LayoutDashboard,
  Minus,
  MonitorSmartphone,
  Plus,
  Search,
  Smartphone,
  Star,
  Timer,
  Zap,
} from "lucide-react";
import { AmbientScene } from "./ambient-scene";
import { ContactForm } from "./contact-form";
import { DigitalVisionLogo } from "./digitalvision-logo";
import { ProductShowcase } from "./product-showcase";
import { Reveal } from "./reveal";
import { ServiceCard } from "./service-card";
import { SiteHeader } from "./site-header";

const services = [
  {
    icon: Search,
    title: "SEO & Google-Ranking",
    text: "Technische SEO, schnelle Ladezeiten, klare Seitenstruktur und Inhalte, die bei Google besser gefunden werden.",
    infoHref: "/seo-info",
  },
  {
    icon: MonitorSmartphone,
    title: "Webseiten-Erstellung",
    text: "Moderne Homepages, Landingpages und Unternehmensseiten mit starkem Design, klarer Struktur und professioneller Umsetzung.",
    infoHref: "/webseite-info",
  },
  {
    icon: LayoutDashboard,
    title: "Verwaltungssysteme",
    text: "Individuelle Admin-Bereiche, Dashboards und Systeme, mit denen du Inhalte, Anfragen und Prozesse verwalten kannst.",
    infoHref: "/verwaltungssystem-info",
  },
];

const features = [
  "SEO-Struktur für Google-Ranking und lokale Sichtbarkeit",
  "Webseiten mit responsivem Design für alle Geräte",
  "Verwaltungssysteme für Inhalte, Kundenanfragen und Abläufe",
  "Performance, Sicherheit und Launch-Begleitung inklusive",
];

const process = [
  "Ziele klären",
  "Struktur planen",
  "Website & System bauen",
  "Google-Start optimieren",
];

const visionPoints = [
  "Klarer Aufbau statt digitalem Chaos",
  "Technik, die elegant wirkt und sauber funktioniert",
  "Sichtbarkeit, Vertrauen und Struktur aus einem System",
];

const problems = [
  {
    icon: Timer,
    stat: "50 ms",
    title: "Erster Eindruck",
    text: "So schnell entscheiden Besucher unbewusst, ob eine Website vertrauenswürdig wirkt oder nicht.",
  },
  {
    icon: Zap,
    stat: "3 Sek.",
    title: "Ladezeit",
    text: "Länger warten die wenigsten. Danach ist die Seite für viele Besucher schon wieder verlassen.",
  },
  {
    icon: Smartphone,
    stat: "60 %+",
    title: "Mobile Zugriffe",
    text: "Der Großteil des Traffics kommt vom Smartphone. Ohne Optimierung gehen Anfragen einfach verloren.",
  },
  {
    icon: Compass,
    stat: "Unklar",
    title: "Struktur & Wege",
    text: "Erkennen Besucher den nächsten Schritt nicht sofort, springen sie ab, statt eine Anfrage zu stellen.",
  },
];

const comparisonRows = [
  {
    label: "Ansprechpartner",
    other: "Wechselnde Kontakte, lange Antwortzeiten",
    us: "Ein fester Ansprechpartner für dein Projekt",
  },
  {
    label: "Kosten",
    other: "Unklare Angebote, versteckte Zusatzkosten",
    us: "Transparente Pakete ab dem ersten Gespräch",
  },
  {
    label: "Leistungen",
    other: "Nur Design oder nur SEO getrennt gedacht",
    us: "Design, SEO und Verwaltung aus einer Hand",
  },
  {
    label: "Einstieg",
    other: "Unverbindliche Angebote dauern",
    us: "Kostenlose Ersteinschätzung ohne Verpflichtung",
  },
  {
    label: "Nach dem Launch",
    other: "Website wird sich selbst überlassen",
    us: "Laufende Pflege & Support inklusive",
  },
];

const faqItems = [
  {
    question: "Wie läuft die Zusammenarbeit ab?",
    answer:
      "Nach der kostenlosen Ersteinschätzung klären wir Ziele und Struktur, planen SEO-Basis und Systemlogik, entwickeln Website und Verwaltungssystem und optimieren zum Schluss die Google-Grundlagen. Du bekommst zu jedem Schritt eine klare Rückmeldung.",
  },
  {
    question: "Was kostet eine Website bei euch?",
    answer:
      "Unsere Website-Pakete starten ab 300 € monatlich, SEO Growth ab 200 € monatlich. Verwaltungssysteme sind individuell und werden nach Aufwand kalkuliert. Details findest du in der Pakete-Übersicht oben.",
  },
  {
    question: "Wie lange dauert ein Projekt?",
    answer:
      "Das hängt vom Umfang ab – eine einfache Website braucht weniger Zeit als ein Verwaltungssystem mit vielen Funktionen. Nach dem Erstgespräch bekommst du einen klaren Zeitplan für dein Projekt.",
  },
  {
    question: "Ist das Erstgespräch wirklich kostenlos?",
    answer:
      "Ja. Die Ersteinschätzung ist kostenlos und unverbindlich. Du bekommst einen klaren Fahrplan, ohne dass du dich zu etwas verpflichtest.",
  },
  {
    question: "Was muss ich selbst bereitstellen?",
    answer:
      "Am liebsten Texte, Bilder und Markenmaterial, falls vorhanden. Fehlt etwas, unterstützen wir dich bei Struktur und Inhalten, damit das Projekt trotzdem zügig vorangeht.",
  },
  {
    question: "Bekomme ich auch Unterstützung nach dem Launch?",
    answer:
      "Ja, laufende Pflege und Support sind in unseren Website-Paketen inklusive – deine Seite bleibt technisch aktuell und sicher.",
  },
];

const clientReactions = [
  {
    label: "Website",
    text: "Die neue Website wirkt endlich professionell. Genau so hatte ich mir den Auftritt vorgestellt.",
    meta: "nach dem Launch",
  },
  {
    label: "SEO",
    text: "Die Struktur ist viel klarer geworden. Besucher finden jetzt schneller die richtigen Leistungen.",
    meta: "nach der Optimierung",
  },
  {
    label: "System",
    text: "Das Dashboard spart uns im Alltag richtig Zeit. Wir haben Anfragen und Aufgaben endlich im Blick.",
    meta: "nach der Übergabe",
  },
  {
    label: "Design",
    text: "Sieht nicht nur gut aus, sondern funktioniert auch sauber auf dem Handy. Das macht direkt einen besseren Eindruck.",
    meta: "mobile Ansicht",
  },
  {
    label: "Ablauf",
    text: "Die Kommunikation war klar und unkompliziert. Änderungen wurden schnell umgesetzt.",
    meta: "Projektfeedback",
  },
  {
    label: "Anfragen",
    text: "Das Formular ist verständlich und führt genau durch die richtigen Fragen. So kommen bessere Anfragen rein.",
    meta: "Kontaktbereich",
  },
  {
    label: "Pflege",
    text: "Inhalte selbst ändern zu können, macht die Website im Alltag deutlich leichter.",
    meta: "Admin-Bereich",
  },
  {
    label: "Beratung",
    text: "Schon nach dem ersten Gespräch war klar, was sinnvoll ist und welcher Schritt als nächstes kommt.",
    meta: "Projektstart",
  },
  {
    label: "Launch",
    text: "Alles war sauber vorbereitet: Texte, Technik, Google-Grundlagen und die Übergabe.",
    meta: "Projektabschluss",
  },
];

type PackageItem = {
  name: string;
  price: string;
  detail?: string;
  detailLines?: Array<{
    text: string;
    emphasis?: boolean;
  }>;
  featured?: boolean;
  note?: string;
};

const packages: PackageItem[] = [
  {
    name: "Website",
    price: "ab 300 € monatlich",
    detailLines: [
      { text: "Anzahlung auf wunsch möglich" },
      { text: "Website, Hosting, Pflege & Support inklusive." },
      { text: "Nach vollständiger Zahlung nur noch laufende Betreuung ab 100€.", emphasis: true },
    ],
  },
  {
    name: "SEO Growth",
    price: "ab 200€ monatlich",
    detail: "Für Webseiten mit Google-Ranking-Fokus, SEO-Struktur und Conversion-Flächen.",
    featured: true,
  },
  {
    name: "Verwaltungssystem",
    price: "auf Anfrage",
    detail: "Für Verwaltungssysteme, Dashboards und individuelle digitale Prozesse.",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <AmbientScene density="home" />
      <SiteHeader />

      <section id="top" className="hero">
        <div className="hero-copy">
          <div className="hero-panel">
            <div className="hero-console">
              <div className="hero-console-top">
                <span className="hero-console-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div className="hero-console-main">
                <div className="hero-console-content">
                  <div className="hero-branding">
                    <DigitalVisionLogo size="lg" showMark={false} showTagline={false} />
                  </div>
                  <div className="hero-statement">
                    <p className="eyebrow">
                      <span className="hero-eyebrow-word">Webdesign</span>
                      <span className="hero-eyebrow-separator" aria-hidden="true">
                        ·
                      </span>
                      <span className="hero-eyebrow-word">SEO</span>
                      <span className="hero-eyebrow-separator" aria-hidden="true">
                        ·
                      </span>
                      <span className="hero-eyebrow-word">Systeme</span>
                    </p>
                    <h1>
                      <span className="hero-line">Klarer auftreten.</span>
                      <span className="hero-line hero-line-muted">Besser gefunden werden.</span>
                    </h1>
                    <p className="hero-text">
                      <span className="hero-text-line">Websites mit Struktur.</span>
                      <br />
                      <span className="hero-text-line">Sichtbar und einfach verwaltbar.</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="hero-console-footer">
                <div className="hero-actions">
                  <a className="primary-button" href="#kontakt">
                    Kostenlose Anfrage
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>
                  <a className="secondary-button" href="#prozess">
                    Ablauf ansehen
                  </a>
                </div>
              </div>
            </div>
            <p className="hero-note">
              Kostenlose Ersteinschätzung. Klarer Fahrplan.
              <span className="hero-note-break"> Keine Verpflichtung.</span>
            </p>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-stage">
            <video
              className="hero-visual-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/videos/pinload-2-hero-poster.jpg"
            >
              <source
                src="/videos/PinLoad%202.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <a className="scroll-cue" href="#leistungen" aria-label="Nach unten scrollen">
          <span className="scroll-cue-text">Scrollen</span>
          <span className="scroll-cue-line" aria-hidden="true" />
        </a>
      </section>

      <a className="floating-back-to-top" href="#top" aria-label="Zurück nach oben">
        <ChevronUp size={18} aria-hidden="true" />
      </a>

      <section className="section problem-section">
        <div className="section-heading section-heading-centered">
          <p className="eyebrow">Herausforderung</p>
          <h2>Der erste Eindruck entscheidet online in Sekunden.</h2>
        </div>
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <Reveal as="article" className="problem-card" delay={index * 90} key={problem.title}>
              <problem.icon size={22} aria-hidden="true" />
              <p className="problem-stat">{problem.stat}</p>
              <h3>{problem.title}</h3>
              <p>{problem.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <ProductShowcase />

      <section id="leistungen" className="section services-section">
        <div className="section-heading section-heading-centered">
          <p className="eyebrow">Was du bekommst</p>
          <h2>Alles, was dein digitaler Auftritt wirklich braucht.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={<service.icon size={27} aria-hidden="true" />}
              title={service.title}
              text={service.text}
              infoHref={service.infoHref}
              delay={index * 90}
            />
          ))}
        </div>
      </section>

      <section id="vision" className="vision-section">
        <div className="vision-visual" aria-hidden="true">
          <div className="vision-stage">
            <div className="vision-galaxy">
              <span className="vision-nebula" />
              <span className="vision-stream vision-stream-one" />
              <span className="vision-stream vision-stream-two" />
              <span className="vision-stream vision-stream-three" />
              <span className="vision-stream vision-stream-four" />
              <span className="vision-light-trail vision-light-trail-one" />
              <span className="vision-light-trail vision-light-trail-two" />
              <span className="vision-comet vision-comet-one" />
              <span className="vision-comet vision-comet-two" />
              <span className="vision-star vision-star-one" />
              <span className="vision-star vision-star-two" />
              <span className="vision-star vision-star-three" />
              <span className="vision-star vision-star-four" />
              <span className="vision-star vision-star-five" />
              <span className="vision-star vision-star-six" />
              <span className="vision-star vision-star-seven" />
              <span className="vision-star vision-star-eight" />
            </div>
          </div>
        </div>
        <div className="vision-copy">
          <p className="eyebrow">Warum Digital Vision</p>
          <h2>
            Wir bauen digitale Systeme, die Technik,{" "}
            <br className="vision-heading-break" />
            Wirkung und Klarheit verbinden.
          </h2>
          <div className="vision-points">
            {visionPoints.map((point) => (
              <div className="vision-point" key={point}>
                <Check size={18} aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="split-section">
        <div className="split-copy">
          <p className="eyebrow">Von Idee bis Launch</p>
          <h2>
            Sichtbar bei Google.
            <br />
            Stark im Design.
            <br />
            Einfach zu verwalten.
          </h2>
          <p>
            Wir verbinden SEO, Webdesign und digitale Verwaltung zu einem
            Auftritt, der professionell aussieht, gefunden wird und im Alltag
            praktisch funktioniert.
          </p>
        </div>
        <div className="feature-list">
          {features.map((feature, index) => (
            <Reveal as="div" className="feature-item" delay={index * 70} key={feature}>
              <Check size={18} aria-hidden="true" />
              <span>{feature}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="prozess" className="section process-section">
        <div className="section-heading compact">
          <p className="eyebrow">Prozess</p>
          <h2>Vier Schritte bis zu deinem digitalen System.</h2>
        </div>
        <div className="process-grid">
          {process.map((step, index) => (
            <Reveal as="article" className="process-step" delay={index * 90} key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
              <p>
                {index === 0 &&
                  "Wir klären Angebot, Zielgruppe und was die Website leisten soll."}
                {index === 1 &&
                  "Seitenstruktur, SEO-Basis und Systemlogik werden sauber geplant."}
                {index === 2 &&
                  "Webseite, Verwaltungssystem und Funktionen werden responsiv entwickelt."}
                {index === 3 &&
                  "Performance, Google-Grundlagen und Übergabe machen alles startklar."}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="section-flow-line" aria-hidden="true">
        <span className="section-flow-line-main" />
        <span className="section-flow-knot">
          <span className="section-flow-knot-inner">
            <span />
            <span />
            <span />
          </span>
        </span>
        <span className="section-flow-line-main" />
      </div>

      <section className="section comparison-section">
        <div className="section-heading section-heading-centered">
          <p className="eyebrow">Der Unterschied</p>
          <h2>Zwei Wege. Ein klarer Fahrplan.</h2>
        </div>
        <div className="comparison-table" role="table" aria-label="Vergleich typischer Anbieter mit Digital Vision">
          <div className="comparison-row comparison-row-head" role="row">
            <span role="columnheader" aria-hidden="true" />
            <span role="columnheader">Typischer Anbieter</span>
            <span role="columnheader" className="comparison-col-us">Digital Vision</span>
          </div>
          {comparisonRows.map((row) => (
            <div className="comparison-row" role="row" key={row.label}>
              <span className="comparison-label" role="rowheader">
                {row.label}
              </span>
              <span className="comparison-other" role="cell">
                <Minus size={15} aria-hidden="true" />
                {row.other}
              </span>
              <span className="comparison-us" role="cell">
                <Check size={15} aria-hidden="true" />
                {row.us}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="preise" className="section packages-section">
        <div className="section-heading">
          <p className="eyebrow">Pakete</p>
          <h2>Wähle den passenden Startpunkt.</h2>
        </div>
        <div className="package-grid">
          {packages.map((item) => (
            <article
              className={[
                "package-card",
                "featured",
              ]
                .filter(Boolean)
                .join(" ")}
              key={item.name}
            >
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              {item.detailLines ? (
                <div className="package-detail-list">
                  {item.detailLines.map((line) => (
                    <p
                      className={line.emphasis ? "package-detail-note" : undefined}
                      key={line.text}
                    >
                      {line.text}
                    </p>
                  ))}
                </div>
              ) : (
                <p>{item.detail}</p>
              )}
              {item.note && <p className="package-note">{item.note}</p>}
              <a href="#kontakt">
                Anfragen
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <div className="section-divider" aria-hidden="true">
        <span className="section-divider-line" />
        <span className="section-divider-beacon">
          <span className="section-divider-ring" />
          <span className="section-divider-ring section-divider-ring-delay" />
          <span className="section-divider-core" />
        </span>
        <span className="section-divider-line" />
      </div>

      <section id="faq" className="section faq-section">
        <div className="section-heading section-heading-centered">
          <p className="eyebrow">FAQ</p>
          <h2>Fragen? Antworten.</h2>
        </div>
        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span>{item.question}</span>
                <Plus className="faq-icon-plus" size={18} aria-hidden="true" />
                <Minus className="faq-icon-minus" size={18} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="kontakt" className="contact-section">
        <div>
          <p className="eyebrow">Projekt anfragen</p>
          <h2>Bereit für mehr Sichtbarkeit und bessere Systeme?</h2>
          <p>
            Schreib uns kurz, was du brauchst. Wir melden uns mit einer klaren
            Einschätzung und dem nächsten Schritt.
          </p>
        </div>
        <div className="contact-form-frame">
          <div className="contact-frame-glow" aria-hidden="true" />
          <div className="contact-frame-core-glow" aria-hidden="true" />
          <span className="ambient-particle contact-frame-dot contact-frame-dot-1" aria-hidden="true" />
          <span className="ambient-particle contact-frame-dot contact-frame-dot-2" aria-hidden="true" />
          <span className="ambient-particle contact-frame-dot contact-frame-dot-3" aria-hidden="true" />
          <span className="ambient-particle contact-frame-dot contact-frame-dot-4" aria-hidden="true" />
          <span className="ambient-particle contact-frame-dot contact-frame-dot-5" aria-hidden="true" />
          <span className="ambient-particle contact-frame-dot contact-frame-dot-6" aria-hidden="true" />
          <ContactForm />
        </div>
      </section>

      <section className="mailbox-reactions-section" aria-labelledby="mailbox-reactions-title">
        <div className="mailbox-reactions-particles" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              className={`ambient-particle mailbox-reactions-particle mailbox-reactions-particle-${index + 1}`}
              key={index}
            />
          ))}
        </div>
        <div className="mailbox-reactions-copy">
          <p className="eyebrow mailbox-reactions-eyebrow">
            <span>Kundenfeedback</span>
            <span className="mailbox-reactions-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={15} strokeWidth={2.4} fill="currentColor" />
              ))}
            </span>
          </p>
          <h2 id="mailbox-reactions-title">
            Reaktionen, direkt aus dem Projekt.
          </h2>
        </div>
        <div className="mailbox-reactions-stage" aria-label="Projektreaktionen">
          {clientReactions.map((reaction) => (
            <article className="mailbox-reaction-card" key={`${reaction.label}-${reaction.meta}`}>
              <span className="mailbox-reaction-label">{reaction.label}</span>
              <p>{reaction.text}</p>
              <span className="mailbox-reaction-meta">{reaction.meta}</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-branding">
          <DigitalVisionLogo size="sm" showTagline={false} />
        </div>
        <nav className="footer-legal-nav" aria-label="Rechtliche Hinweise">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a className="footer-back-to-top" href="#top">
            Nach oben
          </a>
        </nav>
      </footer>
    </main>
  );
}
