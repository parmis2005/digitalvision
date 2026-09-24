import Link from "next/link";
import "./globals.css";

export default function GlobalNotFound() {
  return (
    <html lang="de">
      <body>
        <main className="legal-page">
          <div className="legal-page-inner">
            <p className="eyebrow">404</p>
            <h1>Diese Seite gibt es nicht.</h1>
            <p>Die Adresse ist falsch oder die Seite wurde verschoben.</p>
            <p lang="en">This page does not exist. The address is wrong or the page has been moved.</p>
            <Link className="legal-back-link" href="/">
              Zurück zur Startseite · Back to the homepage
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
