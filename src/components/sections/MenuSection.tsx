"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import menuData from "@/data/menu-items.json";
import type { MenuData, MenuItem } from "@/types/menu";
import MenuProductCard from "./MenuProductCard";
import MenuProductDetail from "./MenuProductDetail";

const { categories, items } = menuData as MenuData;

export default function MenuSection() {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  // Deep linking: open item from hash on mount
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const found = items.find((i) => i.id === hash);
      if (found) setSelectedItem(found);
    }
  }, []);

  const openDetail = useCallback((item: MenuItem) => {
    setSelectedItem(item);
    window.location.hash = item.id;
  }, []);

  const closeDetail = useCallback(() => {
    setSelectedItem(null);
    history.replaceState(null, "", pathname);
  }, [pathname]);

  return (
    <section className="press-cream px-4 py-12 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Category filter — sign plates on a rail, not pills. The active
            plate is vermillion so the current filter is obvious at a glance
            for a reader who is not hunting for subtle state.

            The offsets are the measured header height, not a guess: 59px at
            phone width, 67px from md up where the phone CTA (min-h-11 plus
            py-2.5 plus a 3px border) makes the bar taller. A single 59px
            clipped the active plate's top edge behind the header on desktop. */}
        <div className="press-cream sticky top-[59px] z-30 -mx-4 mb-10 border-b-2 border-pine px-4 py-3 md:-mx-6 md:top-[67px] md:px-6">
          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={active}
                  className={`relative inline-flex min-h-11 items-center border-2 px-4 py-2 font-display text-[15px] font-bold transition-colors ${
                    active
                      ? "border-pine-deep bg-vermillion text-cream"
                      : "press-cream border-pine text-ink shadow-sign hover:shadow-sign-lifted"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="active-category-plate"
                      className="absolute inset-0 bg-vermillion shadow-sign"
                      transition={{ type: "spring", bounce: 0.12, duration: 0.45 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
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
                  <MenuProductCard item={item} onDetailClick={openDetail} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="press-pine mx-auto max-w-md border-2 border-pine-deep px-6 py-12 text-center shadow-plate">
            <p className="font-display text-[21px] font-bold text-cream">
              ยังไม่มีขนมในหมวดนี้
            </p>
            <p className="mt-2 font-body text-cream">
              กำลังเตรียมเมนูใหม่ รอติดตามนะคะ — หรือโทรถามได้เลยค่ะ
            </p>
            <a
              href="tel:0645492982"
              className="mt-5 inline-flex min-h-11 items-center border-2 border-cream/80 bg-vermillion px-5 py-2.5 font-display text-[15px] font-bold text-cream shadow-sign active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              โทรสั่ง 064-549-2982
            </a>
          </div>
        )}
      </div>

      <MenuProductDetail item={selectedItem} onClose={closeDetail} />
    </section>
  );
}
