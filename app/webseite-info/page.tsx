import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart2,
  Check,
  Clock,
  Coins,
  Globe,
  Layers,
  Link2,
  Lock,
  Megaphone,
  PenLine,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";
import { SiteHeader } from "../site-header";
import styles from "./webseite-info.module.css";

const title = "Webseiten-Erstellung";
const description =
  "Infoseite zu Webseiten-Erstellung mit Konzept, Design, Struktur, Launch und Betreuung.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/webseite-info",
  },
  openGraph: {
    title,
    description,
    url: "/webseite-info",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

function cx(...names: string[]) {
  return names.map((name) => styles[name]).join(" ");
}

const FACTORS = [
  {
    Icon: PenLine,
    title: "Klares Design",
    text: "Gutes Webdesign sieht nicht nur modern aus. Es ordnet Informationen, schafft Vertrauen und führt Besucher ohne Umwege zur passenden Aktion.",
  },
  {
    Icon: Layers,
    title: "Saubere Struktur",
    text: "Eine Website braucht logische Seiten, klare Navigation und Inhalte, die schnell verstanden werden. So finden Nutzer schneller, wonach sie suchen.",
  },
  {
    Icon: Zap,
    title: "Technische Qualität",
    text: "Ladezeit, mobile Darstellung, Sicherheit, Wartbarkeit und saubere Umsetzung entscheiden darüber, ob eine Website im Alltag wirklich funktioniert.",
  },
];

const BASICS = [
  { Icon: Globe, title: "Immer erreichbar", text: "Eine Website ist dein digitaler Standort und beantwortet wichtige Fragen rund um die Uhr." },
  { Icon: ShieldCheck, title: "Mehr Vertrauen", text: "Professionelles Design, klare Inhalte und echte Nachweise machen dein Angebot glaubwürdiger." },
  { Icon: Target, title: "Mehr Anfragen", text: "Gute Seiten führen Besucher gezielt zu Kontakt, Buchung, Kauf oder Beratung." },
  { Icon: Coins, title: "Langfristiger Wert", text: "Eine gute Website kann über Jahre informieren, verkaufen und weitere Kanäle stützen." },
];

const OFFER = [
  {
    Icon: ShieldCheck,
    title: "Konzept & Beratung",
    text: "Wir klären Zielgruppe, Angebot, Inhalte und Prioritäten. So entsteht keine beliebige Website, sondern ein digitaler Auftritt mit klarer Aufgabe.",
  },
  {
    Icon: Layers,
    title: "Webdesign & Struktur",
    text: "Wir entwickeln Seitenaufbau, Navigation und visuelle Führung so, dass Besucher schnell verstehen, warum sie bei dir richtig sind.",
  },
  {
    Icon: PenLine,
    title: "Inhalte & Botschaft",
    text: "Wir formulieren Texte, Abschnitte und Handlungsaufrufe so, dass dein Angebot klar, professionell und anfrageorientiert erklärt wird.",
  },
  {
    Icon: BarChart2,
    title: "Launch & Betreuung",
    text: "Wir bringen die Website online, prüfen Technik und begleiten Weiterentwicklung, damit sie aktuell, schnell und nutzbar bleibt.",
  },
];

const SECONDARY_FACTORS = [
  { Icon: Smartphone, label: "Responsive Design" },
  { Icon: Lock, label: "Datenschutz & Sicherheit" },
  { Icon: Clock, label: "Schnelle Ladezeit" },
  { Icon: Target, label: "Klare Ziele" },
  { Icon: Link2, label: "Sinnvolle Verlinkung" },
  { Icon: RefreshCw, label: "Regelmäßige Pflege" },
];

const ONPAGE = [
  { n: "01", title: "Ziel & Zielgruppe", text: "Vor dem Design muss klar sein, wen die Website erreichen soll und welche Handlung am Ende wichtig ist." },
  { n: "02", title: "Seitenstruktur", text: "Startseite, Leistungsseiten, Über uns, Referenzen, Kontakt und rechtliche Seiten brauchen eine nachvollziehbare Ordnung." },
  { n: "03", title: "Inhalte & Botschaft", text: "Texte, Bilder und Abschnitte müssen erklären, welchen Nutzen dein Angebot hat und warum Besucher dir vertrauen können." },
  { n: "04", title: "Kontaktwege", text: "Formulare, Telefonnummern, Buttons und Buchungswege sollten sichtbar, einfach und auf allen Geräten bedienbar sein." },
  { n: "05", title: "Vertrauen & Rechtliches", text: "Impressum, Datenschutz, Bewertungen, Referenzen, Zertifikate und echte Einblicke reduzieren Unsicherheit." },
];

const OFFPAGE = [
  { Icon: Megaphone, title: "Marketing-Anbindung", text: "Eine Website wirkt stärker, wenn Social Media, Anzeigen, E-Mail, Printmaterialien und Online-Suche auf klare Seiten führen." },
  { Icon: Star, title: "Bewertungen & Nachweise", text: "Referenzen, Kundenstimmen und echte Projektergebnisse helfen Besuchern, dein Angebot schneller einzuordnen." },
  { Icon: RefreshCw, title: "Pflege nach dem Launch", text: "Aktuelle Inhalte, Sicherheitsupdates, neue Angebote und regelmäßige Prüfung halten die Website langfristig wertvoll." },
];

const PRACTICE = [
  { Icon: Globe, title: "Firmenwebseite", text: "Ein professioneller Unternehmensauftritt erklärt Leistungen, Team, Standort, Kontakt und Vertrauen auf einen Blick." },
  { Icon: Target, title: "Landingpage", text: "Eine Landingpage konzentriert sich auf ein Angebot, eine Zielgruppe und eine klare Anfrage oder Buchung." },
  { Icon: Trophy, title: "Portfolio & Referenzen", text: "Projekte, Ergebnisse und Arbeitsweise werden sichtbar, damit Besucher deine Qualität schneller beurteilen können." },
  { Icon: TrendingUp, title: "Redesign", text: "Ein Redesign verbessert Struktur, Technik, Darstellung und Wirkung, ohne bereits aufgebaute Inhalte zu verlieren." },
];

const ERRORS = [
  { Icon: Search, title: "Ziel unklar lassen", text: "Wenn nicht klar ist, was Besucher tun sollen, wirkt die Website schnell wie eine digitale Broschüre ohne Richtung." },
  { Icon: PenLine, title: "Texte nur füllen", text: "Zu allgemeine Inhalte erklären weder den Nutzen noch den Unterschied zu anderen Anbietern." },
  { Icon: Smartphone, title: "Mobile Nutzung vergessen", text: "Viele Besucher kommen vom Smartphone. Wenn Buttons, Texte oder Formulare dort schlecht funktionieren, gehen Anfragen verloren." },
  { Icon: Clock, title: "Pflege unterschätzen", text: "Veraltete Inhalte, langsame Seiten oder technische Fehler lassen eine Website schnell unprofessionell wirken." },
];

const PROCESS = [
  { n: "01", title: "Verstehen", text: "Wir klären Angebot, Zielgruppe, Wettbewerb, Inhalte und gewünschte Anfragen, bevor Gestaltung beginnt." },
  { n: "02", title: "Konzept", text: "Wir planen Seitenstruktur, Nutzerführung, Inhalte, visuelle Richtung und technische Anforderungen." },
  { n: "03", title: "Umsetzung", text: "Wir gestalten und entwickeln die Website responsiv, schnell, sauber und passend zum jeweiligen Angebot." },
  { n: "04", title: "Launch & Pflege", text: "Wir testen, veröffentlichen, messen und entwickeln die Website weiter, wenn neue Inhalte oder Ziele entstehen." },
];

const TOOLS = [
  {
    Icon: Layers,
    name: "CMS",
    tag: "Pflege",
    text: "Ein Content-Management-System macht Inhalte wie Texte, Bilder, Leistungen oder Referenzen leichter bearbeitbar.",
    detail: "Ein CMS ist sinnvoll, wenn Inhalte regelmäßig angepasst werden sollen. Bei sehr stabilen Seiten kann eine schlankere technische Lösung besser sein.",
  },
  {
    Icon: BarChart2,
    name: "Analytics",
    tag: "Messung",
    text: "Messdaten zeigen, welche Seiten besucht werden, wo Nutzer abspringen und welche Kontaktwege funktionieren.",
    detail: "Datenschutzkonform eingerichtet helfen Analytics-Daten dabei, Inhalte, Buttons und Seitenstruktur gezielt zu verbessern.",
  },
  {
    Icon: Zap,
    name: "Performance Check",
    tag: "Qualität",
    text: "Tests für Ladezeit, mobile Nutzbarkeit und technische Stabilität zeigen, ob die Website sauber ausgeliefert wird.",
    detail: "Performance-Prüfungen helfen, große Bilder, blockierende Scripte, Layoutprobleme und andere technische Bremsen zu finden.",
  },
];

const FAQ = [
  { q: "Warum braucht ein Unternehmen eine professionelle Website?", a: "Weil viele Kunden online zuerst prüfen, ob ein Anbieter seriös, erreichbar und passend ist. Eine gute Website beantwortet diese Fragen, bevor ein Kontakt entsteht." },
  { q: "Was ist der Unterschied zwischen Homepage und Website?", a: "Die Homepage ist meist die Startseite. Die Website ist der gesamte Webauftritt mit allen Unterseiten, Inhalten, Kontaktwegen und Funktionen." },
  { q: "Wie lange dauert eine neue Website?", a: "Eine kleine Website kann in wenigen Wochen entstehen. Umfangreichere Projekte dauern länger, weil Konzept, Texte, Design, Entwicklung, Feedback und Launch sauber abgestimmt werden müssen." },
  { q: "Was kostet eine Website?", a: "Die Kosten hängen von Umfang, Designanspruch, Textbedarf, Funktionen, CMS, Mehrsprachigkeit und Betreuung ab. Entscheidend ist, welche Aufgabe die Website erfüllen soll." },
  { q: "Brauche ich ein CMS?", a: "Ein CMS lohnt sich, wenn Inhalte regelmäßig gepflegt werden. Wenn Seiten selten geändert werden, kann eine schlanke statische Umsetzung schneller und wartungsarmer sein." },
  { q: "Warum ist Responsive Design so wichtig?", a: "Weil Besucher auf Smartphone, Tablet und Desktop dieselben Informationen finden und Kontakt aufnehmen können müssen. Mobile Probleme kosten Vertrauen und Anfragen." },
  { q: "Was passiert nach dem Launch?", a: "Nach dem Launch sollten Technik, Inhalte, Kontaktwege und Messdaten regelmäßig geprüft werden. So bleibt die Website aktuell und kann mit dem Unternehmen wachsen." },
  { q: "Kann eine Website später erweitert werden?", a: "Ja. Wenn Struktur und Technik sauber geplant sind, lassen sich neue Leistungen, Landingpages, Sprachen, Formulare oder Integrationen später gezielt ergänzen." },
];

function Eyebrow({ children }: { children: string }) {
  return <p className={styles.eyebrow}>{children}</p>;
}

function SectionHeading({
  eyebrow,
  title,
  text,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? cx("section-heading", "compact") : styles["section-heading"]}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default function WebseiteInfoPage() {
  return (
    <main className="webseite-info-page">
      <SiteHeader />
      <div className={styles.page}>
      <div className={styles.content}>
      <div className={styles["ambient-grid"]} aria-hidden="true" />

      <section id="top" className={styles.hero}>
        <div className={styles["hero-copy"]}>
          <div className={styles["hero-statement"]}>
            <Link
              className="digital-vision-info-back-link"
              href="/#leistungen"
              aria-label="Zurück zu Digital Vision"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </Link>
            <h1>
              <span>Webseiten klar verstehen.</span>
            </h1>
            <p>
              Ein professioneller Webauftritt zeigt sofort, wer du bist, was du anbietest
              und warum Besucher den nächsten Schritt mit dir gehen sollten.
            </p>
          </div>

          <div className={styles["hero-proof-grid"]} aria-label="Website Nutzen">
            {(
              [
                [ShieldCheck, "Vertrauen", "Seriöser erster Eindruck"],
                [Smartphone, "Mobil", "Sauber auf jedem Gerät"],
                [Target, "Anfragen", "Klare Wege zum Kontakt"],
              ] as const
            ).map(([Icon, title, text]) => (
              <div className={styles["hero-proof"]} key={title}>
                <Icon size={18} />
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className={styles["hero-actions"]}>
            <a className={styles["primary-button"]} href="#angebot">
              Angebot ansehen
              <ArrowRight size={18} />
            </a>
            <a className={`${styles["secondary-button"]} digital-vision-light-cta`} href="#kontakt">Projekt anfragen</a>
          </div>

          <p className={styles["hero-note"]}>Konzept. Design. Umsetzung. Betreuung.</p>
        </div>

        <div className={styles["hero-visual"]} aria-hidden="true">
          <div className={styles["design-stage"]}>
            <div className={styles["browser-preview"]}>
              <div className={styles["browser-bar"]}>
                <div>
                  <span />
                  <span />
                  <span />
                </div>
                <strong>atelier-webseite.de</strong>
              </div>

              <div className={styles["site-preview"]}>
                <div className={styles["preview-hero"]}>
                  <span className={styles["preview-label"]}>Neue Website</span>
                  <div className={styles["preview-headline"]}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={styles["preview-copy"]}>
                    <span />
                    <span />
                  </div>
                  <div className={styles["preview-actions"]}>
                    <span />
                    <span />
                  </div>
                </div>

                <div className={styles["preview-content-grid"]}>
                  <div className={cx("preview-tile", "wide")}>
                    <Layers size={20} />
                    <span>Leistungen</span>
                  </div>
                  <div className={styles["preview-tile"]}>
                    <Star size={20} />
                    <span>Referenzen</span>
                  </div>
                  <div className={styles["preview-tile"]}>
                    <PenLine size={20} />
                    <span>Inhalte</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["phone-preview"]}>
              <div className={styles["phone-speaker"]} />
              <div className={styles["phone-screen"]}>
                <span className={styles["phone-pill"]} />
                <div className={styles["phone-lines"]}>
                  <span />
                  <span />
                </div>
                <div className={styles["phone-photo"]} />
                <div className={styles["phone-buttons"]}>
                  <span />
                  <span />
                </div>
              </div>
            </div>

            <div className={styles["style-board"]}>
              <span>Designsystem</span>
              <div className={styles.swatches}>
                <i />
                <i />
                <i />
              </div>
              <div className={styles["type-lines"]}>
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className={styles["launch-card"]}>
              <Globe size={18} />
              <div>
                <strong>Launchbereit</strong>
                <span>Design, Inhalte und Technik abgestimmt</span>
              </div>
            </div>

            <div className={styles["content-map"]}>
              {[
                ["Start", "Leistungen"],
                ["Referenzen", "Kontakt"],
                ["Team", "FAQ"],
              ].map(([left, right]) => (
                <div className={styles["map-row"]} key={left}>
                  <span>{left}</span>
                  <i />
                  <span>{right}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles["metric-strip"]} aria-label="Webseiten Kennzahlen">
        {[
          ["24/7 erreichbar", "Eine Website beantwortet wichtige Fragen auch außerhalb der Öffnungszeiten"],
          ["Mobile zuerst", "Besucher erwarten eine saubere Nutzung auf Smartphone, Tablet und Desktop"],
          ["Zentrale Basis", "Alle digitalen Kanäle können auf einen professionellen Webauftritt verweisen"],
          ["Messbare Anfragen", "Kontaktwege, Klicks und Inhalte lassen sich auswerten und verbessern"],
        ].map(([value, label]) => (
          <div className={styles.metric} key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="angebot" className={cx("section", "dark-band", "left-heading-section", "offer-section")}>
        <SectionHeading
          eyebrow="Unser Angebot"
          title="Wir erstellen Webseiten, die informieren, Vertrauen aufbauen und Anfragen erleichtern."
          text="Wir bieten Webseiten an, weil ein professioneller Webauftritt für viele Kunden der erste echte Kontakt mit einem Unternehmen ist. Die Seite soll nicht nur gut aussehen, sondern erklären, überzeugen und im Alltag funktionieren."
        />
        <div className={cx("service-grid", "four")}>
          {OFFER.map(({ Icon, title, text }) => (
            <article className={cx("service-card", "compact-card")} key={title}>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="grundlagen" className={cx("section", "split-section")}>
        <div className={styles["split-copy"]}>
          <Eyebrow>Was ist eine gute Website?</Eyebrow>
          <h2>Ein digitaler Ort, der dein Angebot verständlich macht.</h2>
          <p>
            Eine Website verbindet Information, Vertrauen, Technik und klare Wege zur Kontaktaufnahme.
            Sie hilft Besuchern, dein Angebot einzuordnen und ohne Hürden den nächsten Schritt zu gehen.
          </p>
        </div>
        <div className={styles["feature-list"]}>
          {BASICS.map(({ Icon, title, text }) => (
            <article className={styles["feature-item"]} key={title}>
              <Icon size={20} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="bausteine" className={cx("section", "left-heading-section")}>
        <SectionHeading
          eyebrow="Wichtige Bausteine"
          title="Die Faktoren hinter einem starken Webauftritt."
          text="Eine Website funktioniert dann gut, wenn Gestaltung, Inhalt und Technik zusammenpassen. Wir ordnen diese Bereiche so, dass Besucher schnell verstehen, was du anbietest und warum sie Kontakt aufnehmen sollten."
        />
        <div className={styles["service-grid"]}>
          {FACTORS.map(({ Icon, title, text }) => (
            <article className={styles["service-card"]} key={title}>
              <Icon size={27} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className={styles["signal-list"]}>
          {SECONDARY_FACTORS.map(({ Icon, label }) => (
            <div className={styles["signal-item"]} key={label}>
              <Icon size={17} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="optimierung" className={cx("section", "split-section", "optimization-section", "left-heading-section")}>
        <div className={cx("split-copy", "sticky-copy")}>
          <Eyebrow>Aufbau einer Website</Eyebrow>
          <h2>Was auf einer Website klar geregelt sein sollte.</h2>
          <p>
            Gute Webseiten entstehen aus konkreten Entscheidungen: Welche Inhalte sind wichtig?
            Welche Reihenfolge führt Besucher weiter? Welche Kontaktwege sollen sichtbar sein?
            Diese Grundlagen machen den Unterschied zwischen schöner Fläche und nutzbarem Webauftritt.
          </p>
        </div>
        <div className={styles["timeline-list"]}>
          {ONPAGE.map((item) => (
            <article className={styles["timeline-item"]} key={item.n}>
              <span>{item.n}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={cx("section", "dark-band", "left-heading-section")}>
        <SectionHeading
          eyebrow="Nach dem Launch"
          title="Eine Website wird stärker, wenn sie gepflegt und eingebunden wird."
          text="Der Launch ist nicht das Ende. Eine gute Website wird mit echten Nachweisen, neuen Inhalten, Marketing-Kanälen und technischer Pflege weiter verbessert."
        />
        <div className={styles["service-grid"]}>
          {OFFPAGE.map(({ Icon, title, text }) => (
            <article className={styles["service-card"]} key={title}>
              <Icon size={27} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={cx("section", "left-heading-section", "practice-heading-section")}>
        <SectionHeading
          eyebrow="Webseiten in der Praxis"
          title={"Der richtige Webauftritt hängt vom Ziel ab."}
          text="Nicht jedes Projekt braucht denselben Umfang. Entscheidend ist, ob die Website informieren, verkaufen, Vertrauen aufbauen, Bewerbungen gewinnen oder ein einzelnes Angebot fokussieren soll."
        />
        <div className={cx("service-grid", "four")}>
          {PRACTICE.map(({ Icon, title, text }) => (
            <article className={cx("service-card", "compact-card")} key={title}>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={cx("section", "dark-band", "left-heading-section", "error-heading-section")}>
        <SectionHeading
          eyebrow="Häufige Fehler"
          title={"Was Webseiten unnötig schwach macht."}
          text="Viele Probleme entstehen, weil Design, Inhalt und Ziel nicht sauber verbunden werden. Deshalb startet unsere Arbeit mit Struktur und klaren Prioritäten."
        />
        <div className={cx("service-grid", "four")}>
          {ERRORS.map(({ Icon, title, text }) => (
            <article className={cx("service-card", "compact-card")} key={title}>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="prozess" className={cx("section", "process-section")}>
        <SectionHeading eyebrow="Prozess" title="Unser Ablauf bis zur fertigen Website." compact />
        <div className={styles["process-grid"]}>
          {PROCESS.map((step) => (
            <article className={styles["process-step"]} key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tools" className={cx("section", "packages-section")}>
        <SectionHeading eyebrow="Tools" title="Werkzeuge, die Pflege und Verbesserung einfacher machen." compact />
        <div className={styles["package-grid"]}>
          {TOOLS.map(({ Icon, name, tag, text, detail }) => (
            <article className={styles["package-card"]} key={name}>
              <Icon size={25} />
              <h3>{name}</h3>
              <p className={styles.price}>{tag}</p>
              <p>{text}</p>
              <details className={styles["tool-details"]}>
                <summary>
                  Details
                  <Plus size={15} />
                </summary>
                <div className={styles["tool-detail-popup"]}>
                  <p>{detail}</p>
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className={cx("section", "faq-section")}>
        <SectionHeading eyebrow="FAQ" title="Antworten auf wichtige Fragen zu Webseiten." compact />
        <div className={styles["faq-list"]}>
          {FAQ.map((item) => (
            <details className={styles["faq-item"]} key={item.q}>
              <summary>
                <span>{item.q}</span>
                <span className={styles["faq-plus"]}><Plus size={15} /></span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="kontakt" className={styles["contact-section"]}>
        <div>
          <Eyebrow>Projekt anfragen</Eyebrow>
          <h2>Bereit für eine Website, die dein Angebot klar erklärt?</h2>
          <p>
            Wenn du eine Website brauchst, die professionell wirkt, strukturiert informiert und Anfragen erleichtert,
            starten wir mit Ziel, Aufbau und den wichtigsten Inhalten.
          </p>
        </div>
        <div className={styles["contact-card"]}>
          {["Website-Konzept", "Webdesign", "Launch & Betreuung"].map((item) => (
            <div className={styles["contact-choice"]} key={item}>
              <Check size={17} />
              <span>{item}</span>
            </div>
          ))}
          <a className={styles["primary-button"]} href="#grundlagen">
            Zum Anfang
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
      </div>
      </div>
    </main>
  );
}
