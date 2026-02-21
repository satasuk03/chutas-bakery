"use client";

import { useState } from "react";
import menuData from "@/data/menu-items.json";
import type { MenuData, MenuItem } from "@/types/menu";
import MenuProductCard from "./MenuProductCard";
import MenuProductDetail from "./MenuProductDetail";

const { categories, items } = menuData as MenuData;

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

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
                className={`font-body font-semibold px-5 py-2 rounded-full text-sm transition-all ${
                  activeCategory === cat.id
                    ? "bg-terracotta text-white shadow-paper"
                    : "bg-white text-text-main border border-surface shadow-paper hover:shadow-paper-hover hover:border-terracotta/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <MenuProductCard
                key={item.id}
                item={item}
                onDetailClick={setSelectedItem}
              />
            ))}
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
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
