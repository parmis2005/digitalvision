import type { MetadataRoute } from "next";
import { localeAlternates, localePath, locales } from "../lib/i18n/config";
import { getBlogPosts } from "./blog-data";
import { getBlogPageCount, getBlogPagePath } from "./blog-pagination";
import { products } from "./products-data";

const baseUrl = "https://www.digitalvision.site";

type RouteEntry = {
  path: string;
  lastModified: Date;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

function absolute(path: string) {
  return `${baseUrl}${path}`;
}

function expandLocales(entry: RouteEntry): MetadataRoute.Sitemap {
  const alternates = localeAlternates(entry.path);
  const languages = Object.fromEntries(
    Object.entries(alternates).map(([lang, path]) => [lang, absolute(path)]),
  );

  return locales.map((locale) => ({
    url: absolute(localePath(locale, entry.path)),
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: locale === "de" ? entry.priority : Math.max(0.1, entry.priority - 0.1),
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: RouteEntry[] = [
    { path: "/", lastModified: now, changeFrequency: "weekly", priority: 1 },
    { path: "/seo-info", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { path: "/webseite-info", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    {
      path: "/verwaltungssystem-info",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { path: "/blog", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { path: "/impressum", lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { path: "/datenschutz", lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const productRoutes: RouteEntry[] = products.map((product) => ({
    path: `/produkte/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogRoutes: RouteEntry[] = getBlogPosts("de").map((post) => ({
    path: `/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const paginatedBlogRoutes: RouteEntry[] = Array.from(
    { length: Math.max(0, getBlogPageCount("de") - 1) },
    (_, index) => index + 2,
  ).map((page) => ({
    path: getBlogPagePath(page),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.65,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes, ...paginatedBlogRoutes].flatMap(
    expandLocales,
  );
}
