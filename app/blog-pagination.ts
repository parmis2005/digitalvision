import { blogPosts } from "./blog-data";

export const BLOG_POSTS_PER_PAGE = 5;

export function getBlogPageCount() {
  return Math.max(1, Math.ceil(blogPosts.length / BLOG_POSTS_PER_PAGE));
}

export function getBlogPageNumbers() {
  return Array.from({ length: getBlogPageCount() }, (_, index) => index + 1);
}

export function getBlogPagePath(page: number) {
  return page <= 1 ? "/blog" : `/blog/seite/${page}`;
}

export function getBlogPagePosts(page: number) {
  const startIndex = (page - 1) * BLOG_POSTS_PER_PAGE;
  return blogPosts.slice(startIndex, startIndex + BLOG_POSTS_PER_PAGE);
}

export function isValidBlogPage(page: number) {
  return Number.isInteger(page) && page >= 1 && page <= getBlogPageCount();
}
