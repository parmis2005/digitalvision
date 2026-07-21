import {
  ArrowRight,
  Check,
  LayoutDashboard,
  MonitorSmartphone,
  Search,
} from "lucide-react";
import { AmbientScene } from "./ambient-scene";
import { ContactForm } from "./contact-form";
import { DigitalVisionLogo } from "./digitalvision-logo";
import { ProductShowcase } from "./product-showcase";

const services = [
  {
    icon: Search,
    title: "SEO & Google-Ranking",
    text: "Technische SEO, schnelle Ladezeiten, klare Seitenstruktur und Inhalte, die bei Google besser gefunden werden.",
    infoHref: "#kontakt",
  },
  {
    icon: MonitorSmartphone,
    title: "Webseiten-Erstellung",
    text: "Moderne Homepages, Landingpages und Unternehmensseiten mit starkem Design, klarer Struktur und professioneller Umsetzung.",
    infoHref: "#kontakt",
  },
  {
    icon: LayoutDashboard,
    title: "Verwaltungssysteme",
    text: "Individuelle Admin-Bereiche, Dashboards und Systeme, mit denen du Inhalte, Anfragen und Prozesse verwalten kannst.",
    infoHref: "#kontakt",
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

const packages = [
  {
    name: "Website",
    price: "ab 1300€",
    detail: "Für professionelle Webseiten mit modernem Design und klarer Struktur.",
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
    <main>
      <AmbientScene />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="DigitalVision Startseite">
          <DigitalVisionLogo size="sm" showTagline={false} />
        </a>
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#prozess">Prozess</a>
          <a href="#preise">Pakete</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="header-cta" href="#kontakt">
          Projekt starten
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <div className="hero-panel">
            <div className="hero-branding">
              <DigitalVisionLogo size="lg" showMark={false} showTagline={false} />
            </div>
            <div className="hero-statement">
              <p className="eyebrow">Webdesign · SEO · Systeme</p>
              <h1>
                <span className="hero-line">Webseiten, die gefunden werden.</span>
                <span className="hero-line hero-line-muted">Systeme, die verkaufen.</span>
              </h1>
              <p className="hero-text">
                Klare digitale Auftritte, die Vertrauen schaffen und Anfragen auslösen.
              </p>
            </div>
            <div className="hero-actions">
              <a className="primary-button" href="#kontakt">
                Kostenlose Anfrage
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="secondary-button" href="#prozess">
                Unsere Vision
              </a>
            </div>
            <p className="hero-note">Kostenlose Ersteinschätzung. Klarer Fahrplan. Keine Verpflichtung.</p>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-stage">
            <div className="hero-grid-glow" />
            <div className="hero-core" />
            <div className="hero-ring hero-ring-one" />
            <div className="hero-ring hero-ring-two" />
            <div className="hero-ring hero-ring-three" />
            <div className="hero-arc hero-arc-one" />
            <div className="hero-arc hero-arc-two" />
            <div className="hero-arc hero-arc-three" />
            <span className="hero-particle hero-particle-one" />
            <span className="hero-particle hero-particle-two" />
            <span className="hero-particle hero-particle-three" />
            <span className="hero-particle hero-particle-four" />
          </div>
        </div>
      </section>

      <ProductShowcase />

      <section id="leistungen" className="section services-section">
        <div className="section-heading section-heading-centered">
          <p className="eyebrow">Was du bekommst</p>
          <h2>Alles, was dein digitaler Auftritt wirklich braucht.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <service.icon size={27} aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a className="service-info-button" href={service.infoHref}>
                Info
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="vision" className="vision-section">
        <div className="vision-visual" aria-hidden="true">
          <div className="vision-stage">
            <div className="vision-core" />
            <div className="vision-ring vision-ring-one" />
            <div className="vision-ring vision-ring-two" />
            <div className="vision-ring vision-ring-three" />
            <div className="vision-pulse" />
            <span className="vision-particle vision-particle-one" />
            <span className="vision-particle vision-particle-two" />
            <span className="vision-particle vision-particle-three" />
          </div>
        </div>
        <div className="vision-copy">
          <p className="eyebrow">Warum DigitalVision</p>
          <h2>Wir bauen digitale Systeme, die Technik, Wirkung und Klarheit verbinden.</h2>
          <p>
            Gute digitale Systeme sehen nicht nur modern aus. Sie führen,
            erklären, ordnen und schaffen Vertrauen in jedem Kontakt mit deinem
            Unternehmen.
          </p>
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
          {features.map((feature) => (
            <div className="feature-item" key={feature}>
              <Check size={18} aria-hidden="true" />
              <span>{feature}</span>
            </div>
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
            <article className="process-step" key={step}>
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
            </article>
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
              className={item.featured ? "package-card featured" : "package-card"}
              key={item.name}
            >
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p>{item.detail}</p>
              <a href="#kontakt">
                Anfragen
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="kontakt" className="contact-section">
        <div>
          <p className="eyebrow">Projekt anfragen</p>
          <h2>Bereit für mehr Sichtbarkeit und bessere Systeme?</h2>
          <p>
            Schreib uns kurz, ob du SEO, eine neue Website oder ein
            Verwaltungssystem brauchst. Wir melden uns mit einer klaren
            Einschätzung zu Umfang, Zeitplan und nächstem Schritt.
          </p>
        </div>
        <ContactForm />
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-branding">
            <DigitalVisionLogo size="md" showTagline={false} />
            <span>SEO, Webseiten-Erstellung und Verwaltungssysteme</span>
          </div>
          <a className="footer-back-to-top" href="#top">
            <Search size={16} aria-hidden="true" />
            Nach oben
          </a>
        </div>
        <nav className="footer-legal-nav" aria-label="Rechtliche Hinweise">
          <a href="/">Impressum</a>
          <a href="/">Datenschutz</a>
          <a href="/">Rechtliches</a>
          <a href="/">Cookie-Einstellungen</a>
          <a href="/">Sicherheitsangaben</a>
          <a href="/">Sitemap</a>
        </nav>
      </footer>
    </main>
  );
}
