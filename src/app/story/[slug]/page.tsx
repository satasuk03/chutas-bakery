import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Calendar, User } from "lucide-react";
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
      <main>
        {/* Cover image hero */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img
            src={post.frontmatter.coverImage}
            alt={post.frontmatter.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/70 to-transparent" />
        </section>

        {/* Article card */}
        <section className="px-4 -mt-20 relative z-10 pb-16">
          <article className="max-w-3xl mx-auto bg-white border border-surface shadow-paper rounded-sm p-6 md:p-10">
            {/* Title & meta */}
            <header className="mb-8 border-b border-dashed border-surface pb-6">
              <h1 className="font-hand text-3xl md:text-4xl text-text-main mb-4 leading-tight">
                {post.frontmatter.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-text-muted">
                <div className="flex items-center gap-1.5">
                  <Calendar className="size-4" />
                  <span className="font-body text-sm">
                    {formatDate(post.frontmatter.date)}
                  </span>
                </div>

                {post.frontmatter.author && (
                  <div className="flex items-center gap-1.5">
                    <User className="size-4" />
                    <span className="font-body text-sm">
                      {post.frontmatter.author}
                    </span>
                  </div>
                )}
              </div>

              {/* Tags */}
              {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
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
            </header>

            {/* MDX content */}
            <div className="prose-chuta">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            {/* Back link */}
            <div className="mt-12 pt-6 border-t border-dashed border-surface">
              <a
                href="/story"
                className="inline-flex items-center gap-2 bg-white border-2 border-surface text-text-main px-4 py-2 text-sm font-bold font-body rounded-full shadow-paper hover:shadow-paper-hover active:translate-x-[2px] active:translate-y-[2px] transition-all"
              >
                <ArrowLeft className="size-4" />
                <span>กลับไปเรื่องราวทั้งหมด</span>
              </a>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
