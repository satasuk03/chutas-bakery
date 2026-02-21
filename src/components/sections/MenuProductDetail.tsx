"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import type { MenuItem } from "@/types/menu";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

export default function MenuProductDetail({
  item,
  onClose,
}: {
  item: MenuItem | null;
  onClose: () => void;
}) {
  const [imageIndex, setImageIndex] = useState(0);

  // Reset image index when item changes
  useEffect(() => {
    setImageIndex(0);
  }, [item?.id]);

  if (!item) return null;

  // Combine main image with additional images
  const allImages = [item.image, ...(item.images ?? [])];
  const hasMultipleImages = allImages.length > 1;

  const prevImage = () =>
    setImageIndex((i) => (i === 0 ? allImages.length - 1 : i - 1));
  const nextImage = () =>
    setImageIndex((i) => (i === allImages.length - 1 ? 0 : i + 1));

  return (
    <Sheet open={!!item} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full sm:w-[50vw] sm:max-w-[600px] p-0 gap-0 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-surface shrink-0">
          <SheetTitle className="font-hand text-xl text-text-main">
            {item.nameTh}
          </SheetTitle>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-warm-beige transition-colors"
          >
            <svg
              className="size-5 text-text-muted"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          {/* Image gallery */}
          <div className="relative aspect-square bg-warm-beige group">
            <img
              src={allImages[imageIndex]}
              alt={item.nameTh}
              className="w-full h-full object-cover"
            />

            {hasMultipleImages && (
              <>
                {/* Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-paper opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="size-5 text-text-main" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-paper opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="size-5 text-text-main" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
                  {allImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImageIndex(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        i === imageIndex
                          ? "bg-terracotta ring-2 ring-white"
                          : "bg-white/60 hover:bg-white/90"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Product info */}
          <div className="p-5 space-y-4">
            <div>
              <h3 className="font-hand text-3xl text-text-main leading-tight">
                {item.nameTh}
              </h3>
              <p className="font-body text-sm text-terracotta mt-0.5">
                {item.nameEn}
              </p>
            </div>

            <p className="font-body text-sm text-text-muted italic">
              &ldquo;{item.descriptionTh}&rdquo;
            </p>

            {item.longDescription && (
              <p className="font-body text-sm text-text-main leading-relaxed">
                {item.longDescription}
              </p>
            )}

            {/* Flavors */}
            {item.flavors && item.flavors.length > 0 && (
              <div>
                <p className="font-body text-xs text-text-muted mb-2">
                  รสชาติ
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.flavors.map((flavor) => (
                    <span
                      key={flavor}
                      className="font-body text-xs bg-warm-beige text-text-main px-3 py-1 rounded-full border border-surface"
                    >
                      {flavor}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing */}
            <div>
              <p className="font-body text-xs text-text-muted mb-2">ราคา</p>
              {item.variants ? (
                <div className="border border-surface rounded-sm overflow-hidden">
                  {item.variants.map((variant, i) => (
                    <div
                      key={variant.label}
                      className={`flex items-center justify-between px-4 py-2.5 font-body text-sm ${
                        i % 2 === 0 ? "bg-warm-beige/50" : "bg-white"
                      }`}
                    >
                      <span className="text-text-main">{variant.label}</span>
                      <span className="font-bold text-text-main">
                        ฿{variant.price}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-hand text-3xl text-text-main">
                  ฿{item.price}
                  <span className="text-base font-body text-text-muted ml-1">
                    /{item.unit}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Sticky footer */}
        <div className="shrink-0 border-t border-surface bg-white px-5 py-4">
          <div className="flex items-center justify-between">
            <span className="font-hand text-xl text-text-main">สั่งสินค้า</span>
            <div className="flex items-center gap-3">
              <a
                href="https://m.me/chutasbakery"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-terracotta text-white hover:bg-burgundy shadow-paper flex items-center justify-center transition-colors"
                aria-label="สั่งผ่าน Facebook Messenger"
              >
                <FacebookIcon className="size-6" />
              </a>
              <a
                href="tel:+66645492982"
                className="w-12 h-12 rounded-full bg-terracotta text-white hover:bg-burgundy shadow-paper flex items-center justify-center transition-colors"
                aria-label="โทรสั่งสินค้า"
              >
                <Phone className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
