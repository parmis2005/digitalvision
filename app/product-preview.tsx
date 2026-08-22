import type { ProductItem } from "./products-data";

type ProductPreviewProps = {
  product: ProductItem;
  size?: "card" | "page";
};

export function ProductPreview({ product, size = "card" }: ProductPreviewProps) {
  const isBeauty = product.slug === "beauty-haus";
  const isAuto = product.slug === "autohaus-nordglanz";
  const isPremiumAuto = product.slug === "autohaus-falkenstein";
  const isCoffee = product.slug === "bean-bark";
  const isRestaurant = product.slug === "maison-lumiere";
  const isHotel = product.slug === "aurum-grand-hotel";
  const isFashion = product.slug === "velora-fashion";
  const isWellness = product.slug === "serenity-studio";
  const isMedical = product.slug === "arztpraxis-weber";
  const isThermal = product.slug === "vulkaneifeltherme";
  const isHospital = product.slug === "st-elisabeth-klinikum";
  const isHair = product.slug === "haarwerk-studio";
  const isSalt = product.slug === "salzgrotte-aura";
  const isFootcare = product.slug === "fussoase-eppendorf";
  const isSinjaNails = product.slug === "nagelstudio-sinja";
  const isCleaning = product.slug === "cleanpro-reinigung";
  const isInsurance = product.slug === "alphaschutz-versicherung";
  const isNails = product.slug === "luna-nails";

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

  if (isNails) {
    if (size === "card") {
      return (
        <div className="nails-preview-card-view">
          <div className="nails-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="nails-card-cta">Termin anfragen</span>
          </div>
          <div className="nails-card-shell">
            <div className="nails-card-branding">
              <p>Luna Nails</p>
              <span>Maniküre · Pediküre · Nailart</span>
            </div>
            <div className="nails-card-stage">
              <div className="nails-card-overlay">
                <span className="nails-card-kicker">Beauty Moments</span>
                <strong>Gepflegte Nägel mit ruhiger Studio-Atmosphäre.</strong>
              </div>
              <div className="nails-card-accent" />
            </div>
            <div className="nails-card-copy">
              <h3>Luna Nails</h3>
              <span>Leistungen · Galerie · Bewertungen · Kontakt</span>
            </div>
          </div>
        </div>
      );
    }
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

  if (isPremiumAuto) {
    if (size === "card") {
      return (
        <div className="premium-auto-preview-card-view">
          <div className="premium-auto-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="premium-auto-card-cta">Probefahrt</span>
          </div>
          <div className="premium-auto-card-shell">
            <div className="premium-auto-card-branding">
              <p>Autohaus Falkenstein</p>
              <span>Premium Neu- & Gebrauchtwagen</span>
            </div>
            <div className="premium-auto-card-stage">
              <div className="premium-auto-card-overlay">
                <span className="premium-auto-card-kicker">Porsche 911 Turbo S</span>
                <strong>PS trifft Perfektion.</strong>
              </div>
              <div className="premium-auto-card-spec">
                <span>650 PS</span>
                <small>2,7 s · 330 km/h</small>
              </div>
            </div>
            <div className="premium-auto-card-copy">
              <h3>Autohaus Falkenstein</h3>
              <span>Fahrzeuge · Service · Finanzierung · Kontakt</span>
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

  if (isRestaurant) {
    if (size === "card") {
      return (
        <div className="restaurant-preview-card-view">
          <div className="restaurant-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="restaurant-card-cta">Tisch reservieren</span>
          </div>
          <div className="restaurant-card-shell">
            <div className="restaurant-card-branding">
              <p>Maison Lumière</p>
              <span>Fine Dining · Düsseldorf</span>
            </div>
            <div className="restaurant-card-stage">
              <div className="restaurant-card-overlay">
                <span className="restaurant-card-kicker">Saisonale Küche</span>
                <strong>Elegantes Dinner mit französischer Handschrift.</strong>
              </div>
              <div className="restaurant-card-accent" />
            </div>
            <div className="restaurant-card-copy">
              <h3>Maison Lumière</h3>
              <span>Speisekarte · Galerie · Reservierung · Standort</span>
            </div>
          </div>
        </div>
      );
    }
  }

  if (isHotel) {
    if (size === "card") {
      return (
        <div className="hotel-preview-card-view">
          <div className="hotel-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="hotel-card-cta">Reservieren</span>
          </div>
          <div className="hotel-card-shell">
            <div className="hotel-card-branding">
              <p>AURUM Grand Hotel</p>
              <span>München · Suiten · Spa</span>
            </div>
            <div className="hotel-card-stage">
              <div className="hotel-card-overlay">
                <span className="hotel-card-kicker">5 Sterne Aufenthalt</span>
                <strong>Zeitlose Eleganz im Herzen Münchens.</strong>
              </div>
              <div className="hotel-card-accent">
                <span>98</span>
                <small>Zimmer & Suiten</small>
              </div>
            </div>
            <div className="hotel-card-copy">
              <h3>AURUM Grand Hotel</h3>
              <span>Suiten · Restaurant · Spa · Reservierung</span>
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

  if (isThermal) {
    if (size === "card") {
      return (
        <div className="thermal-preview-card-view">
          <div className="thermal-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="thermal-card-cta">Tickets buchen</span>
          </div>
          <div className="thermal-card-shell">
            <div className="thermal-card-branding">
              <p>Vulkaneifel Therme</p>
              <span>Thermalbad · Sauna · Wellness</span>
            </div>
            <div className="thermal-card-stage">
              <div className="thermal-card-overlay">
                <span className="thermal-card-kicker">Mineralquelle</span>
                <strong>Kraft aus der Tiefe der Erde.</strong>
              </div>
              <div className="thermal-card-accent">
                <span>32°C</span>
                <small>Thermalwasser</small>
              </div>
            </div>
            <div className="thermal-card-copy">
              <h3>Vulkaneifel Therme</h3>
              <span>Thermalbad · Sauna · Wellness · Tickets</span>
            </div>
          </div>
        </div>
      );
    }
  }

  if (isHospital) {
    if (size === "card") {
      return (
        <div className="hospital-preview-card-view">
          <div className="hospital-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="hospital-card-cta">Termin vereinbaren</span>
          </div>
          <div className="hospital-card-shell">
            <div className="hospital-card-branding">
              <p>St. Elisabeth</p>
              <span>Klinikum · Notaufnahme · Fachbereiche</span>
            </div>
            <div className="hospital-card-stage">
              <div className="hospital-card-overlay">
                <span className="hospital-card-kicker">Notaufnahme 24/7</span>
                <strong>Ihre Gesundheit in besten Händen.</strong>
              </div>
              <div className="hospital-card-accent">
                <span>12</span>
                <small>Fachabteilungen</small>
              </div>
            </div>
            <div className="hospital-card-copy">
              <h3>St. Elisabeth Klinikum</h3>
              <span>Fachbereiche · Ärzte & Team · Notfall · Kontakt</span>
            </div>
          </div>
        </div>
      );
    }
  }

  if (isHair) {
    if (size === "card") {
      return (
        <div className="hair-preview-card-view">
          <div className="hair-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="hair-card-cta">Termin buchen</span>
          </div>
          <div className="hair-card-shell">
            <div className="hair-card-branding">
              <p>Haarwerk Studio</p>
              <span>Haare · Handwerk · Haltung</span>
            </div>
            <div className="hair-card-stage">
              <div className="hair-card-overlay">
                <span className="hair-card-kicker">Friseur Berlin</span>
                <strong>Haare verstehen. Stil erleben.</strong>
              </div>
              <div className="hair-card-accent" />
            </div>
            <div className="hair-card-copy">
              <h3>Haarwerk Studio</h3>
              <span>Schnitt · Coloration · Galerie · Termine</span>
            </div>
          </div>
        </div>
      );
    }
  }

  if (isSalt) {
    if (size === "card") {
      return (
        <div className="salt-preview-card-view">
          <div className="salt-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="salt-card-cta">Termin buchen</span>
          </div>
          <div className="salt-card-shell">
            <div className="salt-card-branding">
              <p>Salzgrotte Aura</p>
              <span>Salzluft · Halotherapie · Ruhe</span>
            </div>
            <div className="salt-card-stage">
              <div className="salt-card-overlay">
                <span className="salt-card-kicker">Himalaya-Salz</span>
                <strong>Kraft aus der Tiefe des Salzes.</strong>
              </div>
              <div className="salt-card-accent" />
            </div>
            <div className="salt-card-copy">
              <h3>Salzgrotte Aura</h3>
              <span>Grotte · Anwendungen · Preise · Termine</span>
            </div>
          </div>
        </div>
      );
    }
  }

  if (isFootcare) {
    if (size === "card") {
      return (
        <div className="footcare-preview-card-view">
          <div className="footcare-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="footcare-card-cta">Termin buchen</span>
          </div>
          <div className="footcare-card-shell">
            <div className="footcare-card-branding">
              <p>Fußoase Eppendorf</p>
              <span>Fußpflege · Podologie · Hamburg</span>
            </div>
            <div className="footcare-card-stage">
              <div className="footcare-card-overlay">
                <span className="footcare-card-kicker">Sanfte Pflege</span>
                <strong>Wohlgefühl beginnt bei Ihren Füßen.</strong>
              </div>
              <div className="footcare-card-accent" />
            </div>
            <div className="footcare-card-copy">
              <h3>Fußoase Eppendorf</h3>
              <span>Behandlungen · Preise · Galerie · Termine</span>
            </div>
          </div>
        </div>
      );
    }
  }

  if (isSinjaNails) {
    if (size === "card") {
      return (
        <div className="sinja-nails-preview-card-view">
          <div className="sinja-nails-card-top">
            <div className="preview-bar">
              <span />
              <span />
              <span />
            </div>
            <span className="sinja-nails-card-cta">Termin buchen</span>
          </div>
          <div className="sinja-nails-card-shell">
            <div className="sinja-nails-card-branding">
              <p>Nagelstudio by Mira</p>
              <span>Modellage · Nailart · Maniküre</span>
            </div>
            <div className="sinja-nails-card-stage">
              <div className="sinja-nails-card-overlay">
                <span className="sinja-nails-card-kicker">Nagelmodellage</span>
                <strong>Stil, Modellage und kreative Nailart.</strong>
              </div>
              <div className="sinja-nails-card-accent" />
            </div>
            <div className="sinja-nails-card-copy">
              <h3>Nagelstudio by Mira</h3>
              <span>Leistungen · Preise · Galerie · Kontakt</span>
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
