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
  /\.(?:avif|css|gif|ico|jpe?g|js|json|map|mp4|otf|png|svg|ttf|webm|webp|woff2?)$/i;

function isPreviewPath(pathname: string) {
  return previewPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
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

  return new NextResponse(null, { status: 204 });
}

export const config = {
  matcher: [
    "/((?!_next/image|_next/static|api|apple-icon.png|favicon.ico|icon.png).*)",
  ],
};
