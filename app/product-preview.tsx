import type { ProductItem } from "./products-data";

type ProductPreviewProps = {
  product: ProductItem;
  size?: "card" | "page";
};

export function ProductPreview({ product, size = "card" }: ProductPreviewProps) {
  const isBeauty = product.slug === "beauty-haus";

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
