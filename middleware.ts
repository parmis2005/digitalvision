import { NextResponse, type NextRequest } from "next/server";

const previewPrefixes = [
  "/arztpraxis-preview",
  "/autohaus-falkenstein-preview",
  "/autohaus-preview",
  "/beauty-haus-preview",
  "/coffeeshop-preview",
  "/friseur-preview",
  "/fusspflege-preview",
  "/happynails-preview",
  "/krankenhaus-preview",
  "/luxushotel-preview",
  "/nagelstudio-sinja-preview",
  "/reinigungsfirma-preview",
  "/restaurant-preview",
  "/salzgrotte-preview",
  "/velora-fashion-preview/site",
  "/versicherung-preview",
  "/vulkaneifeltherme-preview",
  "/wellness-preview",
];

const previewAssetPattern =
  /\.(?:avif|css|gif|html?|ico|jpe?g|js|json|map|mp4|otf|png|svg|ttf|webm|webp|woff2?)$/i;

function isPreviewPath(pathname: string) {
  return previewPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function getPreviewHtmlPath(pathname: string) {
  const previewPrefix = previewPrefixes.find(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );

  if (!previewPrefix) {
    return null;
  }

  let normalizedPathname = pathname;
  const doubledPreviewPrefix = `${previewPrefix}${previewPrefix}`;

  if (
    normalizedPathname === doubledPreviewPrefix ||
    normalizedPathname.startsWith(`${doubledPreviewPrefix}/`)
  ) {
    normalizedPathname = normalizedPathname.slice(previewPrefix.length);
  }

  if (normalizedPathname === previewPrefix || normalizedPathname === `${previewPrefix}/`) {
    return `${previewPrefix}/index.html`;
  }

  if (
    previewPrefix === "/velora-fashion-preview/site" &&
    /^\/velora-fashion-preview\/site\/produkte\/[^/]+$/.test(normalizedPathname)
  ) {
    return "/velora-fashion-preview/site/produkte.html";
  }

  return `${normalizedPathname.replace(/\/$/, "")}.html`;
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (!isPreviewPath(pathname)) {
    return NextResponse.next();
  }

  if (pathname.endsWith("/index.html") || pathname.includes("/_next/static/")) {
    return NextResponse.next();
  }

  if (previewAssetPattern.test(pathname)) {
    return NextResponse.next();
  }

  if (searchParams.has("_rsc") || pathname.includes("/__next")) {
    return new NextResponse(null, { status: 204 });
  }

  const htmlPath = getPreviewHtmlPath(pathname);

  if (htmlPath) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = htmlPath;
    return NextResponse.rewrite(rewriteUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/image|_next/static|api|apple-icon.png|favicon.ico|icon.png).*)",
  ],
};
