import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post, PostFrontmatter } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "src/data/posts");

function readAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));

  return files.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const frontmatter = data as PostFrontmatter;

    return {
      slug: frontmatter.slug,
      frontmatter,
      content,
    };
  });
}

export function getAllPosts(): Post[] {
  return readAllPosts()
    .filter((p) => !p.frontmatter.archive)
    .sort((a, b) => {
      const aPinned = a.frontmatter.pinned ? 1 : 0;
      const bPinned = b.frontmatter.pinned ? 1 : 0;
      if (bPinned !== aPinned) return bPinned - aPinned;
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      );
    });
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  for (const post of posts) {
    for (const tag of post.frontmatter.tags ?? []) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet);
}

export function getPostBySlug(slug: string): Post | undefined {
  return readAllPosts().find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
