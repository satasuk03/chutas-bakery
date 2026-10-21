import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { SITE_URL, SITE_NAME, SITE_NAME_EN, BAKERY_NAME, BAKERY_ALTERNATE_NAMES } from "@/lib/seo";
import { mdxComponents } from "@/components/mdx-components";

// Posts credit the shop under either its Thai or English name.
const ORG_AUTHORS = new Set([SITE_NAME, SITE_NAME_EN, BAKERY_NAME, ...BAKERY_ALTERNATE_NAMES]);

const postUrl = (slug: string) => `${SITE_URL}/story/${slug}`;

// Facebook/LINE scrapers handle JPEG better than WebP, so prefer a .jpg sibling
// of the cover when one ships in public/; otherwise use the cover as given.
// No width/height: covers vary, and a wrong size is worse than none.
const coverJpg = (src: string) => {
  const jpg = src.replace(/\.webp$/, ".jpg");
  return fs.existsSync(path.join(process.cwd(), "public", jpg)) ? jpg : src;
};

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

  const { title, excerpt, date } = post.frontmatter;
  const url = postUrl(slug);
  const cover = coverJpg(post.frontmatter.coverImage);
  const image = { url: cover, alt: title };

  return {
    title,
    description: excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "th_TH",
      siteName: SITE_NAME,
      url,
      title,
      description: excerpt,
      publishedTime: date,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: excerpt,
      images: [cover],
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

  const { title, excerpt, date, author } = post.frontmatter;
  const url = postUrl(slug);
  const bakery = {
    "@type": "Bakery",
    "@id": `${SITE_URL}/#bakery`,
    name: BAKERY_NAME,
    url: SITE_URL,
  };
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        headline: title,
        description: excerpt,
        datePublished: date,
        image: `${SITE_URL}${coverJpg(post.frontmatter.coverImage)}`,
        inLanguage: "th",
        author: author && !ORG_AUTHORS.has(author)
          ? { "@type": "Person", name: author }
          : bakery,
        publisher: bakery,
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "หน้าแรก", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "เรื่องราวของเรา",
            item: `${SITE_URL}/story`,
          },
          { "@type": "ListItem", position: 3, name: title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
