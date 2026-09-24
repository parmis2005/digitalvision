import {
  ArrowRight,
  Check,
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
import { getDictionary, localePath, resolveLocale } from "../../lib/i18n";
import { AmbientScene } from "../ambient-scene";
import { ContactForm, ContactInfoPanel } from "../contact-form";
import { DigitalVisionLogo } from "../digitalvision-logo";
import { HeroBackgroundVideo } from "../hero-background-video";
import { ProductShowcase } from "../product-showcase";
import { getProducts } from "../products-data";
import { Reveal } from "../reveal";
import { ServiceCard } from "../service-card";
import { SiteHeader } from "../site-header";

const serviceIcons = [Search, MonitorSmartphone, LayoutDashboard];
const problemIcons = [Timer, Zap, Smartphone, Compass];

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const t = getDictionary(locale);
  const home = t.home;

  return (
    <main className="home-page">
      <AmbientScene density="home" />
      <SiteHeader locale={locale} />

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
                    <DigitalVisionLogo size="md" showMark={false} showTagline={false} />
                  </div>
                  <div className="hero-statement">
                    <p className="eyebrow">
                      {home.hero.eyebrow.map((word, index) => (
                        <span key={word}>
                          {index > 0 ? (
                            <span className="hero-eyebrow-separator" aria-hidden="true">
                              ·
                            </span>
                          ) : null}
                          <span className="hero-eyebrow-word">{word}</span>
                        </span>
                      ))}
                    </p>
                    <h1>
                      <span className="hero-line">{home.hero.titleLine1}</span>
                      <span className="hero-line hero-line-muted">{home.hero.titleLine2}</span>
                    </h1>
                    <p className="hero-text">
                      <span className="hero-text-line">{home.hero.textLine1}</span>
                      <br />
                      <span className="hero-text-line">{home.hero.textLine2}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="hero-console-footer">
                <div className="hero-actions">
                  <a className="primary-button" href="#kontakt">
                    {home.hero.primaryCta}
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>
                  <a className="secondary-button" href="#prozess">
                    {home.hero.secondaryCta}
                  </a>
                </div>
              </div>
            </div>
            <p className="hero-note">
              {home.hero.note}
              <span className="hero-note-break"> {home.hero.noteBreak}</span>
            </p>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-stage">
            <HeroBackgroundVideo />
          </div>
        </div>
        <a className="scroll-cue" href="#leistungen" aria-label={home.hero.scrollAria}>
          <span className="scroll-cue-text">{home.hero.scroll}</span>
          <span className="scroll-cue-line" aria-hidden="true" />
        </a>
      </section>

      <section className="section problem-section">
        <div className="section-heading section-heading-centered">
          <p className="eyebrow">{home.problems.eyebrow}</p>
          <h2>{home.problems.title}</h2>
        </div>
        <div className="problem-grid">
          {home.problems.items.map((problem, index) => {
            const Icon = problemIcons[index] ?? Compass;
            return (
              <Reveal as="article" className="problem-card" delay={index * 90} key={problem.title}>
                <Icon size={22} aria-hidden="true" />
                <p className="problem-stat">{problem.stat}</p>
                <h3>{problem.title}</h3>
                <p>{problem.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <ProductShowcase locale={locale} products={getProducts(locale)} copy={home.showcase} />

      <section id="leistungen" className="section services-section">
        <div className="section-heading section-heading-centered">
          <p className="eyebrow">{home.services.eyebrow}</p>
          <h2>{home.services.title}</h2>
        </div>
        <div className="service-grid">
          {home.services.items.map((service, index) => {
            const Icon = serviceIcons[index] ?? Search;
            return (
              <ServiceCard
                key={service.title}
                icon={<Icon size={27} aria-hidden="true" />}
                title={service.title}
                text={service.text}
                infoHref={localePath(locale, service.infoHref)}
                infoLabel={t.common.info}
                delay={index * 90}
              />
            );
          })}
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
          <p className="eyebrow">{home.vision.eyebrow}</p>
          <h2>
            {home.vision.titleLine1}{" "}
            <br className="vision-heading-break" />
            {home.vision.titleLine2}
          </h2>
          <div className="vision-points">
            {home.vision.points.map((point) => (
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
          <p className="eyebrow">{home.split.eyebrow}</p>
          <h2>
            {home.split.titleLines.map((line, index) => (
              <span key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </h2>
          <p>{home.split.text}</p>
        </div>
        <div className="feature-list">
          {home.split.features.map((feature, index) => (
            <Reveal as="div" className="feature-item" delay={index * 70} key={feature}>
              <Check size={18} aria-hidden="true" />
              <span>{feature}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="prozess" className="section process-section">
        <div className="section-heading compact">
          <p className="eyebrow">{home.process.eyebrow}</p>
          <h2>{home.process.title}</h2>
        </div>
        <div className="process-grid">
          {home.process.steps.map((step, index) => (
            <Reveal as="article" className="process-step" delay={index * 90} key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
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
          <p className="eyebrow">{home.comparison.eyebrow}</p>
          <h2>{home.comparison.title}</h2>
        </div>
        <div className="comparison-table" role="table" aria-label={home.comparison.tableAria}>
          <div className="comparison-row comparison-row-head" role="row">
            <span role="columnheader" aria-hidden="true" />
            <span role="columnheader">{home.comparison.otherHeader}</span>
            <span role="columnheader" className="comparison-col-us">
              {home.comparison.usHeader}
            </span>
          </div>
          {home.comparison.rows.map((row) => (
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
          <p className="eyebrow">{home.packages.eyebrow}</p>
          <h2>{home.packages.title}</h2>
        </div>
        <div className="package-grid">
          {home.packages.items.map((item) => (
            <article className="package-card featured" key={item.name}>
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
              <a href="#kontakt">
                {home.packages.request}
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
          <p className="eyebrow">{home.faq.eyebrow}</p>
          <h2>{home.faq.title}</h2>
        </div>
        <div className="faq-list">
          {home.faq.items.map((item) => (
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
        <div className="contact-heading">
          <p className="eyebrow">{home.contact.eyebrow}</p>
          <h2>{home.contact.title}</h2>
          {home.contact.text ? <p>{home.contact.text}</p> : null}
        </div>
        <div className="contact-body">
          <ContactInfoPanel locale={locale} />
          <div className="contact-form-frame">
            <ContactForm
              locale={locale}
              copy={t.contactForm}
              privacyHref={localePath(locale, "/datenschutz")}
            />
          </div>
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
            <span>{home.reactions.eyebrow}</span>
            <span className="mailbox-reactions-stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={15} strokeWidth={2.4} fill="currentColor" />
              ))}
            </span>
          </p>
          <h2 id="mailbox-reactions-title">{home.reactions.title}</h2>
        </div>
        <div className="mailbox-reactions-stage" aria-label={home.reactions.stageAria}>
          {home.reactions.items.map((reaction) => (
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
          <DigitalVisionLogo size="sm" showTagline={false} tagline={t.common.logoTagline} />
        </div>
        <nav className="footer-legal-nav" aria-label={t.common.legalNavAria}>
          <a href={localePath(locale, "/impressum")}>{t.common.impressum}</a>
          <a href={localePath(locale, "/datenschutz")}>{t.common.datenschutz}</a>
          <a className="footer-back-to-top" href="#top">
            {t.common.backToTop}
          </a>
        </nav>
      </footer>
    </main>
  );
}
