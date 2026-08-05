import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function InfoBackLink() {
  return (
    <Link className="info-back-link" href="/" aria-label="Zurück zu Digital Vision">
      <ArrowLeft aria-hidden="true" />
      <span>Zurück zu Digital Vision</span>
    </Link>
  );
}
