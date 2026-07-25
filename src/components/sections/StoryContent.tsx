"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Post } from "@/types/post";
import StoryPostCard from "./StoryPostCard";

export default function StoryContent({
  posts,
  allTags,
}: {
  posts: Post[];
  allTags: string[];
}) {
  const prefersReduced = useReducedMotion();
  const [activeTag, setActiveTag] = useState("all");

  const filteredPosts =
    activeTag === "all"
      ? posts
      : posts.filter((p) => p.frontmatter.tags?.includes(activeTag));

  const tags = [
    { id: "all", label: "ทั้งหมด" },
    ...allTags.map((t) => ({ id: t, label: t })),
  ];

  return (
    <section className="press-cream px-4 py-[clamp(48px,7vw,80px)] md:px-6">
      <div className="mx-auto max-w-[1200px]">
        {allTags.length > 0 && (
          <div className="mb-10 flex flex-wrap justify-center gap-2.5">
            {tags.map((tag) => {
              const active = activeTag === tag.id;
              return (
                <button
                  key={tag.id}
                  onClick={() => setActiveTag(tag.id)}
                  aria-pressed={active}
                  className={`relative inline-flex min-h-11 items-center border-2 px-4 py-2 font-display text-[15px] font-bold transition-colors ${
                    active
                      ? "border-pine-deep bg-vermillion text-cream"
                      : "press-cream border-pine text-ink shadow-sign hover:shadow-sign-lifted"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="active-tag-plate"
                      className="absolute inset-0 bg-vermillion shadow-sign"
                      transition={{
                        type: "spring",
                        bounce: 0.12,
                        duration: 0.45,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tag.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {filteredPosts.length > 0 ? (
          /* Only one story is published today. A three-column grid holding a
             single card reads as a broken page, so the track count follows the
             content instead of the breakpoint. */
          <div
            className={
              filteredPosts.length === 1
                ? "mx-auto grid max-w-sm grid-cols-1 gap-6"
                : filteredPosts.length === 2
                  ? "mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2"
                  : "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
            }
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  layout={!prefersReduced}
                  initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReduced ? undefined : { opacity: 0, y: 14 }}
                  transition={{
                    duration: 0.34,
                    ease: [0.16, 1, 0.3, 1],
                    layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  }}
                >
                  <StoryPostCard post={post} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="press-pine mx-auto max-w-md border-2 border-pine-deep px-6 py-12 text-center shadow-plate">
            <p className="font-display text-[21px] font-bold text-cream">
              ยังไม่มีเรื่องราวในหมวดนี้
            </p>
            <button
              onClick={() => setActiveTag("all")}
              className="mt-5 inline-flex min-h-11 items-center border-2 border-cream/80 bg-vermillion px-5 py-2.5 font-display text-[15px] font-bold text-cream shadow-sign active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              ดูเรื่องราวทั้งหมด
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
