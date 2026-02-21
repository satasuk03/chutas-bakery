import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/posts";

export const dynamic = "force-static";

const SITE_URL = "https://fromchuta.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const postSlugs = getAllPostSlugs();

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/story`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...postSlugs.map((slug) => ({
      url: `${SITE_URL}/story/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
