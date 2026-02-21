export interface PostFrontmatter {
  title: string;
  slug: string;
  date: string;
  coverImage: string;
  excerpt: string;
  author?: string;
  tags?: string[];
  pinned?: boolean;
  archive?: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}
