import type { Locale } from "../lib/i18n/config";
import { getBlogPosts } from "./blog-data";

export const BLOG_POSTS_PER_PAGE = 5;

export function getBlogPageCount(locale: Locale = "de") {
  return Math.max(1, Math.ceil(getBlogPosts(locale).length / BLOG_POSTS_PER_PAGE));
}

export function getBlogPageNumbers(locale: Locale = "de") {
  return Array.from({ length: getBlogPageCount(locale) }, (_, index) => index + 1);
}

/** Site-relative path (without locale prefix) of a blog listing page. */
export function getBlogPagePath(page: number) {
  return page <= 1 ? "/blog" : `/blog/seite/${page}`;
}

export function getBlogPagePosts(page: number, locale: Locale = "de") {
  const startIndex = (page - 1) * BLOG_POSTS_PER_PAGE;
  return getBlogPosts(locale).slice(startIndex, startIndex + BLOG_POSTS_PER_PAGE);
}

export function isValidBlogPage(page: number, locale: Locale = "de") {
  return Number.isInteger(page) && page >= 1 && page <= getBlogPageCount(locale);
}
