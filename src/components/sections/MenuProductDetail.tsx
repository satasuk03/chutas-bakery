"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Phone, X } from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { photoAlt } from "@/data/photo-alts";
import type { MenuItem } from "@/types/menu";
import { Seal, productSeal } from "@/components/brand/Seal";

/**
 * Product detail. A sheet, not a modal — the reader is comparing against the
 * grid behind it, so it slides in beside the list rather than replacing it.
 *
 * The price table is the point of this panel: variant rows banded in cream so
 * a 43–58 year-old reader can scan sizes and prices without hunting.
 */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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

  /**
   * The sheet animates out, so its content has to survive `item` going null
   * for the length of the exit transition. The previous build did this by
   * writing to a ref during render, which is what `react-hooks/refs` flags 28
   * times on this file. Holding the last item in state does the same job
   * without reading a ref mid-render.
   */
  const [lastItem, setLastItem] = useState<MenuItem | null>(null);
  if (item && item !== lastItem) setLastItem(item); // derive-from-props, no effect
  const displayItem = item ?? lastItem;

  const onSelect = useCallback(() => {
    if (!carouselApi) return;
    setImageIndex(carouselApi.selectedScrollSnap());
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;
    onSelect();
    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi, onSelect]);

  useEffect(() => {
    if (carouselApi) carouselApi.scrollTo(0, true);
  }, [item?.id, carouselApi]);

  if (!displayItem) return null;

  const allImages = [displayItem.image, ...(displayItem.images ?? [])];
  const hasMultipleImages = allImages.length > 1;
  const seal = productSeal(displayItem.id, displayItem.category);

  return (
    <Sheet open={!!item} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="press-cream flex w-full flex-col gap-0 border-l-2 border-brass p-0 sm:w-[52vw] sm:max-w-[620px]"
      >
        <div className="press-umber flex shrink-0 items-center justify-between gap-3 border-b-2 border-brass px-5 py-3.5">
          <SheetTitle className="font-display text-[19px] font-bold text-paper">
            {displayItem.nameTh}
          </SheetTitle>
          <button
            onClick={onClose}
            aria-label="ปิด"
            className="inline-flex size-11 shrink-0 items-center justify-center border-2 border-brass text-paper transition-colors hover:bg-vermillion"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Photo on a cream mat — food never touches a saturated ground. */}
          <div className="px-4 pt-4">
            <div className="relative">
              <Carousel
                opts={{ loop: true }}
                setApi={setCarouselApi}
                className="group relative border-2 border-brass bg-cream-bright p-2 shadow-plate"
              >
                <CarouselContent className="ml-0">
                  {allImages.map((src, i) => (
                    <CarouselItem key={i} className="pl-0">
                      <div className="relative aspect-square overflow-hidden border-[1.5px] border-vermillion">
                        <Image
                          src={src}
                          alt={photoAlt(src, `${displayItem.nameTh} ${i + 1}`)}
                          fill
                          sizes="(min-width: 640px) 580px, 92vw"
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {hasMultipleImages && (
                  <>
                    <CarouselPrevious className="press-paper left-4 size-11 border-2 border-brass shadow-sign" />
                    <CarouselNext className="press-paper right-4 size-11 border-2 border-brass shadow-sign" />
                    <div className="absolute inset-x-0 bottom-5 flex justify-center gap-1.5">
                      {allImages.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => carouselApi?.scrollTo(i)}
                          aria-label={`ดูภาพที่ ${i + 1}`}
                          className={
                            i === imageIndex
                              ? "h-2.5 w-6 border border-paper bg-vermillion"
                              : "size-2.5 border border-brass bg-paper"
                          }
                        />
                      ))}
                    </div>
                  </>
                )}
              </Carousel>
              <Seal
                glyph={seal.glyph}
                label={seal.label}
                className={
                  seal.glyph.length > 1
                    ? "absolute -top-3 -right-3 z-10 size-14 text-[17px]"
                    : "absolute -top-3 -right-3 z-10 size-14 text-[26px]"
                }
              />
            </div>
          </div>

          <div className="space-y-5 px-5 py-6">
            <div>
              <h3 className="font-display text-[clamp(1.5rem,3.4vw,2.25rem)] leading-tight font-bold text-ink">
                {displayItem.nameTh}
              </h3>
              <p className="mt-0.5 font-display text-[15px] font-semibold text-vermillion">
                {displayItem.nameEn}
              </p>
            </div>

            <p className="border-l-2 border-vermillion pl-4 font-display text-[19px] leading-snug font-semibold text-ink">
              {displayItem.descriptionTh}
            </p>

            {displayItem.longDescription && (
              <div className="max-w-[62ch] space-y-3">
                {displayItem.longDescription
                  .split("\n")
                  .filter(Boolean)
                  .map((para, i) => (
                    <p key={i} className="font-body text-ink">
                      {para}
                    </p>
                  ))}
              </div>
            )}

            {displayItem.flavors && displayItem.flavors.length > 0 && (
              <div>
                <h4 className="mb-2 font-display text-[15px] font-bold text-brass-text">
                  รสชาติ
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {displayItem.flavors.map((flavor) => (
                    <span
                      key={flavor}
                      className="border-2 border-brass px-3 py-1 font-display text-[15px] font-semibold text-brass-text"
                    >
                      {flavor}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="mb-2 font-display text-[15px] font-bold text-brass-text">
                ราคา
              </h4>
              {displayItem.variants ? (
                <div className="border-2 border-brass shadow-sign">
                  {displayItem.variants.map((variant, i) => (
                    <div
                      key={variant.label}
                      className={`flex items-center justify-between gap-4 px-4 py-3 ${
                        i > 0 ? "border-t border-brass" : ""
                      } ${i % 2 === 1 ? "bg-cream-bright" : ""}`}
                    >
                      <span className="font-body text-ink">{variant.label}</span>
                      <span className="font-display text-[19px] font-bold text-vermillion">
                        ฿{variant.price}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-display text-[26px] leading-none font-bold text-vermillion">
                  ฿{displayItem.price}
                  <span className="ml-1 text-[17px] font-semibold text-ink">
                    /{displayItem.unit}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="press-umber shrink-0 border-t-2 border-brass px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <span className="font-display text-[17px] font-bold text-paper">
              สั่งขนมชิ้นนี้
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://m.me/chutasbakery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-12 items-center justify-center border-2 border-brass bg-vermillion text-paper shadow-sign transition-colors hover:bg-vermillion-deep"
                aria-label="สั่งผ่าน Facebook Messenger"
              >
                <FacebookIcon className="size-6" />
              </a>
              <a
                href="tel:+66645492982"
                className="inline-flex min-h-12 items-center gap-2 border-2 border-brass bg-vermillion px-4 text-paper shadow-sign transition-colors hover:bg-vermillion-deep"
                aria-label="โทรสั่งสินค้า"
              >
                <Phone className="size-5" aria-hidden />
                <span className="font-display text-[15px] font-bold">โทรสั่ง</span>
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
