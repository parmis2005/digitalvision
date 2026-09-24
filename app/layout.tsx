// The locale layout in app/[locale]/layout.tsx renders <html> and <body>.
// This root layout only exists so that app/not-found.tsx can handle
// requests that never reach a locale segment.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
