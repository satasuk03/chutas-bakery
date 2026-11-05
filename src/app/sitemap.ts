import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL, SITE_LAST_MODIFIED } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const lastEdit = (p: (typeof posts)[number]) => p.frontmatter.modified ?? p.frontmatter.date;
  const latestPost = posts
    .map(lastEdit)
    .sort()
    .at(-1);

  return [
    {
      url: SITE_URL,
      lastModified: SITE_LAST_MODIFIED,
    },
    {
      url: `${SITE_URL}/menu`,
      lastModified: SITE_LAST_MODIFIED,
    },
    {
      url: `${SITE_URL}/story`,
      lastModified: latestPost ?? SITE_LAST_MODIFIED,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/story/${post.slug}`,
      lastModified: lastEdit(post),
    })),
  ];
}
