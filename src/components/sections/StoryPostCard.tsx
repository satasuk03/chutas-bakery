import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/types/post";
import { Seal } from "@/components/brand/Seal";

/**
 * A story is a print pasted on a cream board — same construction as a product
 * card, so the two grids read as one system. The scrapbook tape and random
 * rotation are gone; a pinned post is marked with a 喜 seal instead of a
 * lucide pin.
 */
function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function StoryPostCard({ post }: { post: Post; index?: number }) {
  const href = `/story/${post.slug}`;

  return (
    <article className="press-cream group flex h-full flex-col border-2 border-pine p-2.5 shadow-plate transition-shadow duration-300 hover:shadow-plate-lifted">
      <div className="relative">
        <Link
          href={href}
          className="relative block aspect-[16/10] overflow-hidden border-[1.5px] border-vermillion/70 bg-cream-bright"
        >
          <Image
            src={post.frontmatter.coverImage}
            alt={post.frontmatter.title}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
        </Link>
        {post.frontmatter.pinned && (
          <Seal
            glyph="喜"
            label="เรื่องแนะนำ"
            className="absolute -top-3 -right-3 size-11 text-[21px]"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col pt-3.5">
        <p className="font-display text-[15px] font-semibold text-pine">
          {formatDate(post.frontmatter.date)}
        </p>

        <Link href={href} className="mt-1">
          <h2 className="font-display text-[21px] leading-tight font-bold text-ink underline-offset-4 group-hover:underline">
            {post.frontmatter.title}
          </h2>
        </Link>

        <p className="mt-2 line-clamp-3 font-body text-ink">
          {post.frontmatter.excerpt}
        </p>

        {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="border border-pine px-2 py-0.5 font-display text-[13px] font-semibold text-pine"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto border-t-2 border-pine pt-3.5">
          <Link
            href={href}
            className="press-cream inline-flex min-h-11 items-center gap-1.5 border-2 border-pine px-3.5 py-2 font-display text-[15px] font-bold text-ink shadow-sign transition-[transform,box-shadow] hover:shadow-sign-lifted active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            อ่านต่อ
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
