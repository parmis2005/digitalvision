import { Noto_Serif } from "next/font/google";

export const blogSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-blog-serif",
});
