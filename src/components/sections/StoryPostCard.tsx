import { ArrowRight, Calendar, Pin } from "lucide-react";
import type { Post } from "@/types/post";

const tapeColors = [
  "bg-terracotta/20",
  "bg-sage/30",
  "bg-gold/25",
  "bg-terracotta/15",
  "bg-sage/20",
];

const rotations = ["rotate-1", "-rotate-1", "rotate-2", "-rotate-1", "rotate-1"];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function StoryPostCard({
  post,
  index,
}: {
  post: Post;
  index: number;
}) {
  const hash = hashString(post.slug);
  const tapeColor = tapeColors[hash % tapeColors.length];
  const rotation = rotations[index % rotations.length];

  return (
    <article
      className={`group relative bg-white p-3 pb-6 border border-surface shadow-paper transform ${rotation} hover:rotate-0 hover:scale-105 hover:shadow-paper-hover transition-all duration-300 rounded-sm`}
    >
      {/* Tape decoration */}
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 ${tapeColor} rotate-2 z-20`}
      />

      {/* Pinned badge */}
      {post.frontmatter.pinned && (
        <div className="absolute top-2 right-2 z-20 bg-gold text-white p-1.5 rounded-full shadow-paper">
          <Pin className="size-3.5 fill-current" />
        </div>
      )}

      {/* Cover image */}
      <a
        href={`/story/${post.slug}`}
        className="block relative aspect-[16/10] overflow-hidden mb-4 border border-surface rounded-sm bg-warm-beige"
      >
        <img
          src={post.frontmatter.coverImage}
          alt={post.frontmatter.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </a>

      {/* Content */}
      <div className="px-1">
        {/* Date */}
        <div className="flex items-center gap-1.5 mb-2 text-text-muted">
          <Calendar className="size-3.5" />
          <span className="font-body text-xs">
            {formatDate(post.frontmatter.date)}
          </span>
        </div>

        {/* Title */}
        <a href={`/story/${post.slug}`}>
          <h2 className="font-hand text-2xl text-text-main leading-tight mb-2 group-hover:text-terracotta transition-colors">
            {post.frontmatter.title}
          </h2>
        </a>

        {/* Excerpt */}
        <p className="font-body text-sm text-text-muted leading-relaxed mb-3 line-clamp-3">
          {post.frontmatter.excerpt}
        </p>

        {/* Tags */}
        {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-xs bg-warm-beige text-text-main px-2 py-0.5 rounded-full border border-surface"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read more */}
        <div className="border-t border-dashed border-surface pt-3">
          <a
            href={`/story/${post.slug}`}
            className="inline-flex items-center gap-1 bg-white border-2 border-surface text-text-main px-3 py-1 text-sm font-bold font-body rounded-full shadow-paper hover:shadow-paper-hover active:translate-x-[2px] active:translate-y-[2px] transition-all"
          >
            <span>อ่านต่อ</span>
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
