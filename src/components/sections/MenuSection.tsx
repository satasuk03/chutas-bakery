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

  const openDetail = useCallback(
    (item: MenuItem) => {
      setSelectedItem(item);
      window.location.hash = item.id;
    },
    [],
  );

  const closeDetail = useCallback(() => {
    setSelectedItem(null);
    history.replaceState(null, "", pathname);
  }, [pathname]);

  return (
    <section className="py-12 px-4">
      <div className="max-w-[1280px] mx-auto">
        {/* Category filter buttons */}
        <div className="sticky top-[65px] z-30 py-3 mb-10 -mx-4 px-4 bg-background-light/90 backdrop-blur-sm">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative font-body font-semibold px-5 py-2 rounded-full text-sm transition-colors ${
                  activeCategory === cat.id
                    ? "text-white"
                    : "bg-white text-text-main border border-surface shadow-paper hover:shadow-paper-hover hover:border-terracotta/30"
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.span
                    layoutId="active-category-pill"
                    className="absolute inset-0 bg-terracotta rounded-full shadow-paper"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
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
                  <MenuProductCard
                    item={item}
                    onDetailClick={openDetail}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-hand text-2xl text-text-muted">
              ยังไม่มีสินค้าในหมวดนี้
            </p>
            <p className="font-body text-sm text-text-muted mt-2">
              กำลังเตรียมเมนูใหม่ รอติดตามนะคะ
            </p>
          </div>
        )}
      </div>

      <MenuProductDetail
        item={selectedItem}
        onClose={closeDetail}
      />
    </section>
  );
}
