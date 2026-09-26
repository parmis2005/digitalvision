import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "./lib/i18n/config";

const previewPrefixes = [
  "/arztpraxis-preview",
  "/autohaus-falkenstein-preview",
  "/autohaus-preview",
  "/beauty-haus-preview",
  "/coffeeshop-preview",
  "/friseur-preview",
  "/fusspflege-preview",
  "/gs-automotive-preview",
  "/happynails-preview",
  "/krankenhaus-preview",
  "/lashes-more-preview",
  "/luxushotel-preview",
  "/nagelstudio-sinja-preview",
  "/reinigungsfirma-preview",
  "/restaurant-preview",
  "/salzgrotte-preview",
  "/simpleskin-preview",
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

  if (previewPrefix === "/gs-automotive-preview") {
    return `${previewPrefix}/index.html`;
  }

  return `${normalizedPathname.replace(/\/$/, "")}.html`;
}

const localeSkipPattern = /^\/(?:api|_next)(?:\/|$)/;

function hasFileExtension(pathname: string) {
  const lastSegment = pathname.split("/").pop() ?? "";
  return /\.[a-z0-9]+$/i.test(lastSegment);
}

function withLocaleHeader(request: NextRequest, locale: Locale, rewriteTo?: URL) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  const init = { request: { headers: requestHeaders } };

  return rewriteTo ? NextResponse.rewrite(rewriteTo, init) : NextResponse.next(init);
}

function handleLocale(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (localeSkipPattern.test(pathname) || hasFileExtension(pathname)) {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const firstSegment = segments[1] ?? "";

  if (isLocale(firstSegment)) {
    const rest = `/${segments.slice(2).join("/")}`;

    if (firstSegment === defaultLocale) {
      // Locale-scoped metadata routes (e.g. /de/opengraph-image) must stay reachable.
      if (/^\/(?:opengraph-image|twitter-image)(?:\/|$)/.test(rest)) {
        return withLocaleHeader(request, firstSegment);
      }

      // The default locale lives at the root: /de/blog -> /blog
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = rest === "/" ? "/" : rest.replace(/\/$/, "");
      return NextResponse.redirect(redirectUrl, 308);
    }

    return withLocaleHeader(request, firstSegment);
  }

  // Unprefixed paths are the default locale: /blog -> /de/blog (internal rewrite)
  const rewriteUrl = request.nextUrl.clone();
  const normalizedPathname = pathname === "/" ? "" : pathname.replace(/\/$/, "");
  rewriteUrl.pathname = `/${defaultLocale}${normalizedPathname}`;

  return withLocaleHeader(request, defaultLocale, rewriteUrl);
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (!isPreviewPath(pathname)) {
    return handleLocale(request);
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
