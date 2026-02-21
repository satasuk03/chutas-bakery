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

  return (
    <section className="py-16 px-4 bg-background-light">
      <div className="max-w-[1280px] mx-auto">
        {/* Tag filter bar */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[{ id: "all", label: "ทั้งหมด" }, ...allTags.map((t) => ({ id: t, label: t }))].map(
              (tag) => (
                <button
                  key={tag.id}
                  onClick={() => setActiveTag(tag.id)}
                  className={`relative font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors ${
                    activeTag === tag.id
                      ? "text-white"
                      : "bg-white text-text-main border border-surface shadow-paper hover:shadow-paper-hover hover:border-terracotta/30"
                  }`}
                >
                  {activeTag === tag.id && (
                    <motion.span
                      layoutId="active-tag-pill"
                      className="absolute inset-0 bg-terracotta rounded-full shadow-paper"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{tag.label}</span>
                </button>
              )
            )}
          </div>
        )}

        {/* Post grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  layout={!prefersReduced}
                  initial={prefersReduced ? false : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={prefersReduced ? undefined : { opacity: 0, scale: 0.9 }}
                  transition={{
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                    layout: { duration: 0.4, ease: "easeOut" },
                  }}
                >
                  <StoryPostCard post={post} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-hand text-2xl text-text-muted">
              ยังไม่มีเรื่องราวในหมวดนี้
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
