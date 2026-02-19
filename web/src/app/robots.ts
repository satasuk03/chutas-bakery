import type { MetadataRoute } from "next";

const SITE_URL = "https://chutasbakery.com"; // TODO: replace with real domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
