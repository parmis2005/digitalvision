import type { ProductItem } from "./products-data";

type ProductPreviewProps = {
  product: ProductItem;
  size?: "card" | "page";
};

export function ProductPreview({ product, size = "card" }: ProductPreviewProps) {
  const isBeauty = product.slug === "beauty-haus";
  const isAuto = product.slug === "autohaus-nordglanz";
  const isCoffee = product.slug === "bean-bark";
  const isFashion = product.slug === "velora-fashion";
  const isWellness = product.slug === "serenity-studio";
  const isMedical = product.slug === "arztpraxis-weber";
  const isCleaning = product.slug === "cleanpro-reinigung";
  const isInsurance = product.slug === "alphaschutz-versicherung";

  if (isBeauty) {
    if (size === "card") {
      return (
        <div className="beauty-preview-card-view">
          <div className="beauty-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="beauty-card-menu">Behandlungen</span>
          </div>
          <div className="beauty-card-shell">
            <div className="beauty-card-branding">
              <p>Das Beauty Haus</p>
              <span>Düsseldorf · Oberkassel</span>
            </div>
            <div className="beauty-card-stage">
              <div className="beauty-card-overlay">
                <span className="beauty-card-kicker">Anti-Aging</span>
                <strong>Elegante Behandlungen für Glow, Pflege und Vertrauen.</strong>
              </div>
              <div className="beauty-card-photo-accent" />
            </div>
            <div className="beauty-card-copy">
              <h3>Kosmetik Studio</h3>
              <span>Skin Care · Behandlungen · Premium Look</span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={`beauty-preview beauty-preview-${size}`}>
        <div className="beauty-preview-top">
          <div className="preview-bar">
            <span />
            <span />
            <span />
          </div>
          <span className="beauty-preview-nav">Behandlungen</span>
        </div>
        <div className="beauty-preview-body">
          <div className="beauty-preview-copy">
            <p>Willkommen bei Das Beauty Haus</p>
            <h3>Das volle Potenzial Ihrer Haut</h3>
            <div className="beauty-preview-actions">
              <span>Termin buchen</span>
              <span>Behandlungen</span>
            </div>
          </div>
          <div className="beauty-preview-media">
            <div className="beauty-preview-image" />
            <div className="beauty-preview-card">
              <strong>Skin Care</strong>
              <span>Glow Behandlungen</span>
            </div>
          </div>
        </div>
        <div className="beauty-preview-bottom">
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  if (isAuto) {
    if (size === "card") {
      return (
        <div className="auto-preview-card-view">
          <div className="auto-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="auto-card-cta">Fahrzeugsuche</span>
          </div>
          <div className="auto-card-shell">
            <div className="auto-card-branding">
              <p>Nordglanz Automobile</p>
              <span>Jahreswagen · Gebrauchtwagen</span>
            </div>
            <div className="auto-card-stage">
              <div className="auto-card-overlay" />
              <div className="auto-card-search">
                <span>BMW</span>
                <span>SUV</span>
                <span>35.000 €</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  if (isCoffee) {
    if (size === "card") {
      return (
        <div className="coffee-preview-card-view">
          <div className="coffee-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="coffee-card-cta">Reservieren</span>
          </div>
          <div className="coffee-card-shell">
            <div className="coffee-card-branding">
              <p>Bean & Bark</p>
              <span>coffee, bagels, community</span>
            </div>
            <div className="coffee-card-stage">
              <div className="coffee-card-wifi">
                <span className="coffee-card-wifi-icon">◔</span>
                <span>Free Wi-Fi</span>
              </div>
              <div className="coffee-card-copy-overlay">
                <span className="coffee-card-tag">Heute empfohlen</span>
                <strong>Cherry Cloud Latte</strong>
                <small>Espresso, Kirschsirup, Hafermilch und Cold Foam</small>
                <div className="coffee-card-price-row">
                  <span>4,90 €</span>
                  <span>inklusive Hafermilch</span>
                </div>
              </div>
            </div>
            <div className="coffee-card-copy">
              <h3>Bean & Bark</h3>
              <span>Specialty Coffee · Interior · Menü</span>
            </div>
          </div>
        </div>
      );
    }
  }

  if (isFashion) {
    if (size === "card") {
      return (
        <div className="fashion-preview-card-view">
          <div className="fashion-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="fashion-card-cta">Lookbook</span>
          </div>
          <div className="fashion-card-shell">
            <div className="fashion-card-branding">
              <p>VELORA Fashion</p>
              <span>Damenmode & Styling</span>
            </div>
            <div className="fashion-card-stage">
              <div className="fashion-card-overlay">
                <span className="fashion-card-kicker">Editoriale Auswahl</span>
                <strong>Leichte Looks für Alltag, Office und besondere Anlässe.</strong>
              </div>
              <div className="fashion-card-accent" />
            </div>
          </div>
        </div>
      );
    }
  }

  if (isWellness) {
    if (size === "card") {
      return (
        <div className="wellness-preview-card-view">
          <div className="wellness-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="wellness-card-cta">Termin buchen</span>
          </div>
          <div className="wellness-card-shell">
            <div className="wellness-card-branding">
              <p>Serenity Studio</p>
              <span>Wellness, Spa & Recovery</span>
            </div>
            <div className="wellness-card-stage">
              <div className="wellness-card-overlay">
                <span className="wellness-card-kicker">Calm body. Healthy mind.</span>
                <strong>Private Spa, Recovery und ruhige Studioatmosphäre.</strong>
              </div>
              <div className="wellness-card-accent" />
            </div>
            <div className="wellness-card-copy">
              <h3>Serenity Studio</h3>
              <span>Spa · Recovery · Massage · Private Sessions</span>
            </div>
          </div>
        </div>
      );
    }
  }

  if (isMedical) {
    if (size === "card") {
      return (
        <div className="medical-preview-card-view">
          <div className="medical-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="medical-card-cta">Termin anfragen</span>
          </div>
          <div className="medical-card-shell">
            <div className="medical-card-branding">
              <p>Arztpraxis Weber</p>
              <span>Hausarztmedizin & Vorsorge</span>
            </div>
            <div className="medical-card-stage">
              <div className="medical-card-overlay">
                <span className="medical-card-kicker">Moderne Medizin. Nah am Menschen.</span>
                <strong>Hausarztpraxis mit klarer Betreuung und direktem Kontakt.</strong>
              </div>
              <div className="medical-card-accent" />
            </div>
            <div className="medical-card-copy">
              <h3>Arztpraxis Weber</h3>
              <span>Praxis · Leistungen · Team · Kontakt</span>
            </div>
          </div>
        </div>
      );
    }
  }

  if (isCleaning) {
    if (size === "card") {
      return (
        <div className="cleaning-preview-card-view">
          <div className="cleaning-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="cleaning-card-cta">Angebot anfordern</span>
          </div>
          <div className="cleaning-card-shell">
            <div className="cleaning-card-branding">
              <p>CleanPro</p>
              <span>Gebäudereinigung GmbH</span>
            </div>
            <div className="cleaning-card-stage">
              <div className="cleaning-card-overlay">
                <span className="cleaning-card-kicker">Sauberkeit mit System</span>
                <strong>Professionelle Gebäudereinigung für Büros und Objekte.</strong>
              </div>
              <div className="cleaning-card-accent" />
            </div>
            <div className="cleaning-card-copy">
              <h3>CleanPro Reinigung</h3>
              <span>Leistungen · Standorte · Angebote · Kontakt</span>
            </div>
          </div>
        </div>
      );
    }
  }

  if (isInsurance) {
    if (size === "card") {
      return (
        <div className="insurance-preview-card-view">
          <div className="insurance-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="insurance-card-cta">Beratung anfragen</span>
          </div>
          <div className="insurance-card-shell">
            <div className="insurance-card-branding">
              <p>AlphaSchutz</p>
              <span>Versicherung & Beratung</span>
            </div>
            <div className="insurance-card-stage">
              <div className="insurance-card-overlay">
                <span className="insurance-card-kicker">Unabhängig. Persönlich. Sicher.</span>
                <strong>Versicherungsschutz mit klarer Beratung und Vertrauen.</strong>
              </div>
              <div className="insurance-card-accent" />
            </div>
            <div className="insurance-card-copy">
              <h3>AlphaSchutz Versicherung</h3>
              <span>Leistungen · Prozess · Bewertungen · Kontakt</span>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <>
      <div className="preview-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-content">
        <div className="preview-copy">
          <p>{product.type}</p>
          <h3>{product.title}</h3>
        </div>
        <div className="preview-art" />
      </div>
      <div className="preview-footer">
        <span />
        <span />
        <span />
      </div>
    </>
  );
}
