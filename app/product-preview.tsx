import type { ProductItem } from "./products-data";

type ProductPreviewProps = {
  product: ProductItem;
  size?: "card" | "page";
};

export function ProductPreview({ product, size = "card" }: ProductPreviewProps) {
  const isBeauty = product.slug === "beauty-haus";
  const isAuto = product.slug === "autohaus-nordglanz";
  const isCoffee = product.slug === "bean-bark";

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
              <div className="beauty-card-photo" />
              <div className="beauty-card-photo-accent">
                <span className="beauty-flower beauty-flower-one" />
                <span className="beauty-flower beauty-flower-two" />
                <span className="beauty-flower-center" />
              </div>
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
            <div className="auto-card-copy">
              <h3>Autohaus Nordglanz</h3>
              <span>Fahrzeugsuche · Bestand · Finanzierung</span>
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
              <div className="coffee-card-panel coffee-card-panel-main">
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
