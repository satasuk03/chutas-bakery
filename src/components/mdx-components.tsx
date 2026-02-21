import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="font-hand text-3xl md:text-4xl text-text-main mb-6 mt-10 first:mt-0"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-hand text-2xl md:text-3xl text-text-main mb-4 mt-8"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-hand text-xl md:text-2xl text-text-main mb-3 mt-6"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="font-body text-base text-text-main/90 leading-relaxed mb-4"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-terracotta underline decoration-terracotta/30 underline-offset-2 hover:decoration-terracotta transition-colors"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-terracotta/40 pl-5 my-6 italic text-text-muted font-body"
      {...props}
    />
  ),
  hr: () => (
    <div className="flex items-center justify-center gap-3 my-10">
      <div className="w-12 h-px bg-terracotta/30" />
      <div className="w-2 h-2 rounded-full bg-terracotta/40" />
      <div className="w-12 h-px bg-terracotta/30" />
    </div>
  ),
  ul: (props) => (
    <ul
      className="font-body text-text-main/90 list-disc pl-6 mb-4 space-y-1"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="font-body text-text-main/90 list-decimal pl-6 mb-4 space-y-1"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-bold text-text-main" {...props} />
  ),
  em: (props) => <em className="text-terracotta/80" {...props} />,
  img: (props) => (
    <span className="block my-6">
      <Image
        src={props.src || ""}
        alt={props.alt || ""}
        width={800}
        height={450}
        className="w-full rounded-sm border border-surface shadow-paper"
      />
    </span>
  ),
};
