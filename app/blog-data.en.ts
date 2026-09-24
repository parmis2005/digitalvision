import type { BlogPost } from "./blog-data";
import { blogPostsEnPart1 } from "./blog-data.en.part1";
import { blogPostsEnPart2 } from "./blog-data.en.part2";
import { blogPostsEnPart3 } from "./blog-data.en.part3";
import { blogPostsEnPart4 } from "./blog-data.en.part4";

export const blogPostsEn: BlogPost[] = [
  ...blogPostsEnPart1,
  ...blogPostsEnPart2,
  ...blogPostsEnPart3,
  ...blogPostsEnPart4,
];
