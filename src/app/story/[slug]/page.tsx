import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { mdxComponents } from "@/components/mdx-components";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      images: post.frontmatter.coverImage
        ? [{ url: post.frontmatter.coverImage }]
        : undefined,
    },
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function StoryPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="press-paper">
        {/* Cover print, matted on cream and hung on the paper wall rather than
            bled full-width — a photo in this world always sits on a mat. */}
        <section className="px-4 pt-8 md:px-6 md:pt-12">
          <div className="press-cream mx-auto max-w-3xl border-2 border-brass p-2.5 shadow-plate">
            <div className="relative aspect-[16/9] w-full overflow-hidden border-[1.5px] border-vermillion bg-cream-bright">
              <Image
                src={post.frontmatter.coverImage}
                alt={post.frontmatter.title}
                fill
                priority
                sizes="(min-width: 768px) 768px, 94vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article plate */}
        <section className="relative z-10 px-4 pt-6 pb-[clamp(56px,9vw,112px)] md:px-6">
          <article className="press-cream mx-auto max-w-3xl border-2 border-brass p-6 shadow-plate md:p-10">
            <header className="mb-9 border-b-2 border-brass pb-6">
              <h1 className="font-display text-[clamp(1.85rem,5vw,3rem)] leading-tight font-bold text-ink">
                {post.frontmatter.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="font-display text-[15px] font-semibold text-brass-text">
                  {formatDate(post.frontmatter.date)}
                </span>
                {post.frontmatter.author && (
                  <span className="font-display text-[15px] font-semibold text-brass-text">
                    เขียนโดย {post.frontmatter.author}
                  </span>
                )}
              </div>

              {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {post.frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-brass px-2 py-0.5 font-display text-[13px] font-semibold text-brass-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div>
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            <div className="mt-12 border-t-2 border-brass pt-6">
              <Link
                href="/story"
                className="press-paper inline-flex min-h-11 items-center gap-2 border-2 border-brass px-4 py-2.5 font-display text-[15px] font-bold text-ink shadow-sign transition-[transform,box-shadow] hover:shadow-sign-lifted active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                <ArrowLeft className="size-4" aria-hidden />
                กลับไปเรื่องราวทั้งหมด
              </Link>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
