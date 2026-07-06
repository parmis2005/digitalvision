import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  BarChart2,
  Coins,
  Globe,
  Layers,
  Link2,
  Lock,
  Megaphone,
  PenLine,
  Search,
  ShieldCheck,
  Smartphone,
  Star,
  Target,
  Clock,
  RefreshCw,
  Trophy,
  TrendingUp,
  Zap,
} from "lucide-react";

const C = {
  bg: "#09090f",
  surface: "#0e0e1a",
  border: "rgba(255,255,255,0.07)",
  muted: "rgba(255,255,255,0.38)",
  accent: "#6366f1",
  accent2: "#8b5cf6",
  text: "#e8e8f0",
};

const FACTORS = [
  {
    Icon: Link2,
    title: "Backlinks",
    text: "Links von anderen Webseiten sind Googles stärkstes Vertrauenssignal. Qualität schlägt Quantität.",
  },
  {
    Icon: PenLine,
    title: "Content-Qualität",
    text: "Einzigartiger, tiefgehender Content erfüllt die Suchabsicht vollständig und sauber.",
  },
  {
    Icon: Zap,
    title: "Core Web Vitals",
    text: "Ladezeit, Interaktivität und visuelle Stabilität sind ein wichtiger Teil der Bewertung.",
  },
];

const BASICS = [
  { Icon: TrendingUp, title: "Nachhaltiger Traffic", text: "Wächst langfristig ohne laufende Werbekosten." },
  { Icon: Target, title: "Zielgerichtete Nutzer", text: "Du erreichst Menschen, die aktiv nach dir suchen." },
  { Icon: Trophy, title: "Vertrauen & Autorität", text: "Hohe Rankings stärken Glaubwürdigkeit und Marke." },
  { Icon: Coins, title: "Bester ROI", text: "Langfristig einer der effizientesten Kanäle." },
];

const SECONDARY_FACTORS = [
  { Icon: Smartphone, label: "Mobile-First" },
  { Icon: Lock, label: "HTTPS / Sicherheit" },
  { Icon: Target, label: "Keyword-Relevanz" },
  { Icon: Clock, label: "Verweildauer / UX" },
  { Icon: Layers, label: "Strukturierte Daten" },
  { Icon: RefreshCw, label: "Aktualität des Contents" },
];

const ONPAGE = [
  { n: "01", title: "Title Tag", text: "50–60 Zeichen, Haupt-Keyword an erster Stelle." },
  { n: "02", title: "Meta-Description", text: "120–160 Zeichen, klarer Nutzen, überzeugender CTA." },
  { n: "03", title: "Überschriften", text: "Nur ein H1. Keywords natürlich in H2/H3 einbauen." },
  { n: "04", title: "Interne Links", text: "Link-Autorität verteilen und Nutzer logisch führen." },
  { n: "05", title: "Bilder & Alt-Texte", text: "Sprechende Dateinamen, WebP und beschreibende Alt-Texte." },
];

const OFFPAGE = [
  {
    Icon: Trophy,
    title: "Linkbuilding",
    text: "Natürliche Backlinks durch starken Content, Gastbeiträge und Partnerschaften.",
  },
  {
    Icon: Megaphone,
    title: "Brand Mentions",
    text: "Markenerwähnungen ohne direkten Link werden ebenfalls als Autoritätssignal gesehen.",
  },
  {
    Icon: Star,
    title: "Google Business Profile",
    text: "Für lokale SEO entscheidend. Bewertungen und Beiträge stärken lokale Rankings.",
  },
];

const PRACTICE = [
  {
    Icon: ShieldCheck,
    title: "SEO-Audit & Prioritäten",
    text: "Erst Technik, Inhalte und Struktur prüfen, dann die schnellsten Hebel priorisieren.",
  },
  {
    Icon: Globe,
    title: "Lokale Sichtbarkeit",
    text: "Für regionale Unternehmen sind Karten-Ergebnisse und lokale Suchanfragen wichtig.",
  },
  {
    Icon: Search,
    title: "Google + KI-Suchen",
    text: "Inhalte müssen für Suchmaschinen und KI-Systeme klar strukturiert lesbar bleiben.",
  },
  {
    Icon: BarChart2,
    title: "Tracking & Reporting",
    text: "Rankings, Klicks und Leads sollten regelmäßig gemessen und eingeordnet werden.",
  },
];

const ERRORS = [
  {
    Icon: Search,
    title: "Suchintention ignorieren",
    text: "Ein Keyword bringt wenig, wenn der Inhalt die eigentliche Frage nicht beantwortet.",
  },
  {
    Icon: PenLine,
    title: "Zu wenig Tiefe",
    text: "Oberflächliche Texte ranken selten gut. Wenige starke Seiten schlagen viele schwache.",
  },
  {
    Icon: Globe,
    title: "Lokale Signale vergessen",
    text: "Adresse, Öffnungszeiten, Bewertungen und Google Business Profile sind relevant.",
  },
  {
    Icon: BarChart2,
    title: "Nicht messen",
    text: "Ohne Tracking bleiben Verbesserungen unsichtbar. Rankings und Anfragen gehören geprüft.",
  },
];

const PROCESS = [
  { n: "01", title: "Analyse", text: "Keywords, Wettbewerb und technischen Status prüfen." },
  { n: "02", title: "Technik", text: "Schnelle Ladezeit, Mobile-Optimierung und Crawlbarkeit sichern." },
  { n: "03", title: "Content", text: "Hochwertigen Content erstellen und bestehende Seiten optimieren." },
  { n: "04", title: "Autorität", text: "Backlinks aufbauen und Rankings kontinuierlich überwachen." },
];

const TOOLS = [
  { Icon: Search, name: "Google Search Console", tag: "Kostenlos", text: "Direkte Daten von Google: Rankings, Fehler, Impressionen." },
  { Icon: BarChart2, name: "Ahrefs", tag: "Kostenpflichtig", text: "Backlink-Analyse und Keyword-Recherche auf Profi-Niveau." },
  { Icon: Globe, name: "PageSpeed Insights", tag: "Kostenlos", text: "Core Web Vitals deiner Seite messen und verbessern." },
];

const FAQ = [
  { q: "Wie lange dauert es bis SEO wirkt?", a: "Erste Ergebnisse sind oft nach 3–6 Monaten sichtbar, stärkere Effekte nach 6–12 Monaten." },
  { q: "Was ist der Unterschied zwischen SEO und SEA?", a: "SEO erzeugt organischen Traffic ohne direkte Klickkosten. SEA ist bezahlte Werbung mit Sofortwirkung." },
  { q: "Wie viele Keywords pro Seite?", a: "Eine Seite, ein Haupt-Keyword plus einige semantisch verwandte Begriffe. Fokus auf Themen, nicht nur Wörter." },
  { q: "Sind Backlinks wirklich so wichtig?", a: "Für kompetitive Keywords sehr wichtig. Bei Long-Tail-Suchen kann starker Content auch allein gut ranken." },
  { q: "Was ist wichtiger: Technik, Content oder Links?", a: "Meist ist die Reihenfolge: saubere Technik, starke Inhalte, dann Autorität durch Links und Erwähnungen." },
];

function Tag({ children, color = C.accent }: { children: string; color?: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: `${color}18`,
        border: `1px solid ${color}35`,
        color,
        padding: "5px 14px",
        borderRadius: 100,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.04em",
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: color, display: "inline-block" }} />
      {children}
    </span>
  );
}

function Card({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div
      style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 16,
        padding: "36px 32px",
        transition: "all 0.25s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function IconBox({ Icon, color = C.accent }: { Icon: React.ElementType; color?: string }) {
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 10,
        flexShrink: 0,
        background: `${color}14`,
        border: `1px solid ${color}28`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon size={20} color={color} strokeWidth={1.75} />
    </div>
  );
}

export default function SeoInfoPage() {
  return (
    <main style={{ background: C.bg, minHeight: "100vh" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(9,9,15,0.8)",
          backdropFilter: "blur(18px)",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            padding: "0 32px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 9,
                background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Search size={15} color="#fff" strokeWidth={2.5} />
            </div>
            <span style={{ fontWeight: 700, fontSize: 15, color: C.text }}>
              SEO<span style={{ color: C.accent }}>Guide</span>
            </span>
          </Link>

          <Link
            href="/"
            style={{
              background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`,
              color: "#fff",
              padding: "9px 22px",
              borderRadius: 9,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Zurück
          </Link>
        </div>
      </header>

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: 64,
        }}
      >
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 500, background: "radial-gradient(ellipse, rgba(99,102,241,0.13) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "65%", left: "20%", width: 350, height: 350, background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(99,102,241,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.04) 1px,transparent 1px)", backgroundSize: "72px 72px", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <div style={{ marginBottom: 32 }}>
            <Tag>Google Ranking Guide 2025</Tag>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: C.text,
              marginBottom: 24,
            }}
          >
            Mehr Sichtbarkeit.
            <br />
            <span
              style={{
                background: `linear-gradient(135deg, ${C.accent}, ${C.accent2}, #06b6d4)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mehr Kunden.
            </span>
          </h1>

          <p style={{ fontSize: 18, color: C.muted, maxWidth: 520, margin: "0 auto 44px", lineHeight: 1.7 }}>
            Der komplette SEO-Leitfaden kompakt erklärt. Lerne, wie Google Rankings funktionieren und was du konkret tun kannst.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#grundlagen"
              style={{
                background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`,
                color: "#fff",
                padding: "14px 32px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: `0 8px 32px rgba(99,102,241,0.35)`,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Grundlagen verstehen <ArrowRight size={16} />
            </a>
            <a
              href="#prozess"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${C.border}`,
                color: C.text,
                padding: "14px 32px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Prozess ansehen
            </a>
          </div>
        </div>
      </section>

      <section style={{ borderTop: `1px solid ${C.border}`, background: "#0b0b14" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "80px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 40, textAlign: "center" }}>
            {[
              { v: "5+ Bio.", l: "Suchanfragen pro Jahr bei Google" },
              { v: "Seite 1", l: "erhält den Großteil der Klicks" },
              { v: "Organisch", l: "bleibt ein zentraler Traffic-Kanal" },
              { v: "Google", l: "ist oft der erste Einstieg in die Suche" },
            ].map((s, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: "clamp(2rem,4vw,2.8rem)",
                    fontWeight: 800,
                    background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: 10,
                  }}
                >
                  {s.v}
                </div>
                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.5, maxWidth: 160, margin: "0 auto" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="grundlagen" style={{ borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "120px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div style={{ marginBottom: 24 }}>
                <Tag>Was ist SEO?</Tag>
              </div>
              <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.text, marginBottom: 24 }}>
                Organisch gefunden werden - ohne Werbekosten.
              </h2>
              <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.75, marginBottom: 20 }}>
                SEO sorgt dafür, dass deine Webseite bei relevanten Suchanfragen besser sichtbar wird - dauerhaft und ohne Klickkosten.
              </p>
              <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.75 }}>
                Gute SEO verbindet technische Basis, klare Inhalte und nachvollziehbare Prioritäten. So entsteht Sichtbarkeit, die zu Anfragen führt.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {BASICS.map(({ Icon, title, text }, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: "20px 24px",
                    background: C.surface,
                    borderRadius: 12,
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <IconBox Icon={Icon} />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: C.text, marginBottom: 4 }}>{title}</div>
                    <div style={{ fontSize: 14, color: C.muted }}>{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faktoren" style={{ borderTop: `1px solid ${C.border}`, background: "#0b0b14" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "120px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ marginBottom: 20 }}>
              <Tag>Die wichtigsten Signale</Tag>
            </div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.text, marginBottom: 16 }}>
              Top Ranking-Faktoren
            </h2>
            <p style={{ fontSize: 17, color: C.muted, maxWidth: 480, margin: "0 auto" }}>
              Google nutzt viele Signale. Diese drei Bereiche sind besonders wichtig.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 48 }}>
            {FACTORS.map(({ Icon, title, text }, i) => (
              <Card key={i}>
                <IconBox Icon={Icon} />
                <h3 style={{ fontSize: 19, fontWeight: 700, color: C.text, margin: "20px 0 12px" }}>{title}</h3>
                <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7 }}>{text}</p>
              </Card>
            ))}
          </div>

          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {SECONDARY_FACTORS.map(({ Icon, label }, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "16px 20px",
                  background: C.surface,
                  borderRadius: 10,
                  border: `1px solid ${C.border}`,
                }}
              >
                <Icon size={16} color={C.muted} strokeWidth={1.75} />
                <span style={{ fontSize: 14, color: C.muted, fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="optimierung" style={{ borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "120px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 96 }}>
              <div style={{ marginBottom: 24 }}>
                <Tag color="#8b5cf6">On-Page SEO</Tag>
              </div>
              <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.text, marginBottom: 20 }}>
                Was du direkt steuern kannst.
              </h2>
              <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.75 }}>
                On-Page SEO umfasst alle Optimierungen auf deiner eigenen Webseite - von der Struktur über Texte bis zu technischen Meta-Daten.
              </p>
            </div>

            <div>
              {ONPAGE.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 24, padding: "32px 0", borderBottom: `1px solid ${C.border}` }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.accent, opacity: 0.5, flexShrink: 0, paddingTop: 3, fontVariantNumeric: "tabular-nums" }}>{item.n}</span>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 600, color: C.text, marginBottom: 8 }}>{item.title}</div>
                    <div style={{ fontSize: 15, color: C.muted, lineHeight: 1.65 }}>{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: `1px solid ${C.border}`, background: "#0b0b14" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "120px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ marginBottom: 20 }}>
              <Tag color="#06b6d4">Off-Page SEO</Tag>
            </div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.text, marginBottom: 16 }}>
              Autorität, die Google überzeugt.
            </h2>
            <p style={{ fontSize: 17, color: C.muted, maxWidth: 480, margin: "0 auto" }}>
              Backlinks sind digitale Empfehlungen. Relevante, vertrauenswürdige Links können sehr viel Gewicht haben.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {OFFPAGE.map(({ Icon, title, text }, i) => (
              <Card key={i}>
                <IconBox Icon={Icon} color="#06b6d4" />
                <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text, margin: "20px 0 10px" }}>{title}</h3>
                <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7 }}>{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "120px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ marginBottom: 20 }}>
              <Tag color="#22c55e">SEO in der Praxis</Tag>
            </div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.text, marginBottom: 16 }}>
              Was professionelle SEO zusätzlich braucht.
            </h2>
            <p style={{ fontSize: 17, color: C.muted, maxWidth: 560, margin: "0 auto" }}>
              Gute SEO setzt nicht nur auf Grundlagen, sondern auf Analyse, lokale Sichtbarkeit, KI-Fähigkeit und messbare Ergebnisse.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {PRACTICE.map(({ Icon, title, text }, i) => (
              <Card key={i}>
                <IconBox Icon={Icon} color="#22c55e" />
                <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text, margin: "20px 0 10px" }}>{title}</h3>
                <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7 }}>{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: `1px solid ${C.border}`, background: "#0b0b14" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "120px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ marginBottom: 20 }}>
              <Tag color="#f97316">Häufige Fehler</Tag>
            </div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.text, marginBottom: 16 }}>
              Was gute SEO unnötig schwächt.
            </h2>
            <p style={{ fontSize: 17, color: C.muted, maxWidth: 560, margin: "0 auto" }}>
              Diese Fehler sind häufig und kosten Rankings, Zeit und Sichtbarkeit.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {ERRORS.map(({ Icon, title, text }, i) => (
              <Card key={i}>
                <IconBox Icon={Icon} color="#f97316" />
                <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text, margin: "20px 0 10px" }}>{title}</h3>
                <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7 }}>{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prozess" style={{ borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "120px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ marginBottom: 20 }}>
              <Tag color="#ef4444">Prozess</Tag>
            </div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.text, marginBottom: 16 }}>
              So entsteht SEO Schritt für Schritt.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {PROCESS.map((item) => (
              <Card key={item.n}>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.accent, opacity: 0.65, marginBottom: 16 }}>{item.n}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7 }}>{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: `1px solid ${C.border}`, background: "#0b0b14" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "120px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ marginBottom: 20 }}>
              <Tag color="#22d3ee">Tools</Tag>
            </div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.text, marginBottom: 16 }}>
              Werkzeuge für saubere SEO-Arbeit.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {TOOLS.map(({ Icon, name, tag, text }) => (
              <Card key={name}>
                <IconBox Icon={Icon} color="#22d3ee" />
                <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text, margin: 0 }}>{name}</h3>
                  <span style={{ fontSize: 12, padding: "4px 10px", borderRadius: 999, background: "rgba(255,255,255,0.06)", color: C.muted }}>{tag}</span>
                </div>
                <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7, marginTop: 10 }}>{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "120px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 58 }}>
            <div style={{ marginBottom: 20 }}>
              <Tag color="#a855f7">FAQ</Tag>
            </div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.text, marginBottom: 16 }}>
              Häufige Fragen.
            </h2>
          </div>

          <div style={{ borderTop: `1px solid ${C.border}` }}>
            {FAQ.map((item) => (
              <details key={item.q} style={{ borderBottom: `1px solid ${C.border}`, padding: "22px 0" }}>
                <summary style={{ cursor: "pointer", listStyle: "none", fontSize: 17, fontWeight: 600, color: C.text }}>
                  {item.q}
                </summary>
                <p style={{ marginTop: 14, color: C.muted, fontSize: 15, lineHeight: 1.75 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ borderTop: `1px solid ${C.border}`, padding: "30px 32px 40px", color: C.muted, textAlign: "center" }}>
        DigitalVision x SEO Guide
      </footer>

      <style>{`
        @media (max-width: 900px) {
          #grundlagen > div > div,
          #optimierung > div > div {
            grid-template-columns: 1fr !important;
          }
          #optimierung > div > div > div:first-child {
            position: static !important;
          }
          #faktoren > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          main > header > div {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          section > div {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
      `}</style>
    </main>
  );
}
