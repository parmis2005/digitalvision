import { notFound } from "next/navigation";

// Every unknown path inside a locale ends up here and renders app/[locale]/not-found.tsx.
export default function CatchAllPage() {
  notFound();
}
