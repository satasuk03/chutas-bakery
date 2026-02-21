"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
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
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [imageIndex, setImageIndex] = useState(0);
  const lastItemRef = useRef<MenuItem | null>(null);
  if (item) lastItemRef.current = item;
  const displayItem = item ?? lastItemRef.current;

  // Track the selected slide index
  const onSelect = useCallback(() => {
    if (!carouselApi) return;
    setImageIndex(carouselApi.selectedScrollSnap());
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;
    onSelect();
    carouselApi.on("select", onSelect);
    return () => { carouselApi.off("select", onSelect); };
  }, [carouselApi, onSelect]);

  // Reset to first slide when item changes
  useEffect(() => {
    if (carouselApi) carouselApi.scrollTo(0, true);
  }, [item?.id, carouselApi]);

  if (!displayItem) return null;

  // Combine main image with additional images
  const allImages = [displayItem.image, ...(displayItem.images ?? [])];
  const hasMultipleImages = allImages.length > 1;

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
            {displayItem.nameTh}
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
          {/* Image carousel */}
          <Carousel
            opts={{ loop: true }}
            setApi={setCarouselApi}
            className="relative bg-warm-beige group"
          >
            <CarouselContent className="ml-0">
              {allImages.map((src, i) => (
                <CarouselItem key={i} className="pl-0">
                  <div className="aspect-square">
                    <img
                      src={src}
                      alt={`${displayItem.nameTh} ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {hasMultipleImages && (
              <>
                <CarouselPrevious className="left-3 size-9 bg-white/80 hover:bg-white border-0 shadow-paper opacity-0 group-hover:opacity-100 transition-opacity" />
                <CarouselNext className="right-3 size-9 bg-white/80 hover:bg-white border-0 shadow-paper opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Dots */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
                  {allImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => carouselApi?.scrollTo(i)}
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
          </Carousel>

          {/* Product info */}
          <div className="p-5 space-y-4">
            <div>
              <h3 className="font-hand text-3xl text-text-main leading-tight">
                {displayItem.nameTh}
              </h3>
              <p className="font-body text-sm text-terracotta mt-0.5">
                {displayItem.nameEn}
              </p>
            </div>

            <p className="font-body text-sm text-text-muted italic">
              &ldquo;{displayItem.descriptionTh}&rdquo;
            </p>

            {displayItem.longDescription && (
              <p className="font-body text-sm text-text-main leading-relaxed">
                {displayItem.longDescription}
              </p>
            )}

            {/* Flavors */}
            {displayItem.flavors && displayItem.flavors.length > 0 && (
              <div>
                <p className="font-body text-xs text-text-muted mb-2">
                  รสชาติ
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {displayItem.flavors.map((flavor) => (
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
              {displayItem.variants ? (
                <div className="border border-surface rounded-sm overflow-hidden">
                  {displayItem.variants.map((variant, i) => (
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
                  ฿{displayItem.price}
                  <span className="text-base font-body text-text-muted ml-1">
                    /{displayItem.unit}
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
