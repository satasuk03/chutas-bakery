import type { MDXComponents } from "mdx/types";
import Image from "next/image";

/**
 * Article typography. This is the site's only Read surface, so comprehension
 * outranks expression: ink on cream at 13.58:1, a 68ch measure, and more
 * space above a heading than below it. Prompt sets headings, Sarabun prose.
 *
 * The `hr` is the one place ornament is allowed — a vermillion rule with the
 * brand's cross mark, standing in for the printer's fleuron.
 */
export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-12 mb-5 font-display text-[clamp(1.5rem,3.4vw,2.25rem)] leading-tight font-bold text-ink first:mt-0"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-11 mb-4 font-display text-[clamp(1.4rem,3.2vw,1.85rem)] leading-tight font-bold text-ink first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-9 mb-3 font-display text-[21px] leading-snug font-bold text-brass-text"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-5 max-w-[68ch] font-body text-ink" {...props} />
  ),
  a: (props) => (
    <a
      className="font-semibold text-vermillion underline decoration-2 decoration-vermillion/60 underline-offset-2 transition-colors hover:decoration-vermillion"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-7 border-l-[3px] border-vermillion pl-5 font-display text-[19px] leading-relaxed font-semibold text-ink"
      {...props}
    />
  ),
  hr: () => (
    <div className="my-11 flex items-center justify-center gap-3" role="presentation">
      <span aria-hidden className="h-[2px] w-14 bg-vermillion" />
      <span aria-hidden className="font-display text-[15px] font-bold text-vermillion">
        ✚
      </span>
      <span aria-hidden className="h-[2px] w-14 bg-vermillion" />
    </div>
  ),
  ul: (props) => (
    <ul
      className="mb-5 max-w-[68ch] list-disc space-y-1.5 pl-6 font-body text-ink marker:text-vermillion"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mb-5 max-w-[68ch] list-decimal space-y-1.5 pl-6 font-body text-ink marker:font-bold marker:text-vermillion"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-bold text-ink" {...props} />,
  em: (props) => <em className="font-semibold text-brass-text not-italic" {...props} />,
  img: (props) => (
    <span className="press-cream my-7 block border-2 border-brass p-2 shadow-plate">
      <Image
        src={props.src || ""}
        alt={props.alt || ""}
        width={800}
        height={450}
        className="w-full border-[1.5px] border-vermillion"
      />
    </span>
  ),
};
