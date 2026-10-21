import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/seo";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "ชุตา",
    lang: "th",
    start_url: "/",
    display: "browser",
    background_color: "#faf5ea",
    theme_color: "#a81a10",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
