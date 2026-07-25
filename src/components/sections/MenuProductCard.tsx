import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { MenuItem } from "@/types/menu";
import { Seal, productSeal } from "@/components/brand/Seal";

/**
 * A product is a print pasted on a cream board.
 *
 * Two devices from the previous brand are gone deliberately: the washi-tape
 * strip at the top (a scrapbook gesture — this world is a print shop, where
 * things are squared up, not taped on) and the random ±1° rotation. What
 * replaces them is the product's own Chinese seal, stamped over the corner of
 * the photo — 发糕 for ฮวกก้วย, 寿桃 for ซิ่วท้อ, 包子 for ซาลาเปา.
 *
 * The cream mat is the binding rule, not a style choice: food never sits on a
 * saturated ground (PRODUCT.md → Brand Commitments).
 */
const badgeConfig = {
  popular: { label: "ยอดนิยม", className: "bg-vermillion text-cream" },
  new: { label: "ใหม่!", className: "bg-pine text-cream" },
  hot: { label: "ขายดี!", className: "bg-vermillion-deep text-cream" },
  recommended: { label: "แม่แนะนำ", className: "bg-pine-deep text-cream" },
};

export default function MenuProductCard({
  item,
  onDetailClick,
}: {
  item: MenuItem;
  onDetailClick: (item: MenuItem) => void;
}) {
  const badge = item.badge ? badgeConfig[item.badge] : null;
  const seal = productSeal(item.id, item.category);

  const prices = item.variants?.map((v) => v.price);
  const lo = prices ? Math.min(...prices) : undefined;
  const hi = prices ? Math.max(...prices) : undefined;

  return (
    <article className="press-cream group flex h-full flex-col border-2 border-pine p-2.5 shadow-plate transition-shadow duration-300 hover:shadow-plate-lifted">
      <div className="relative">
        <div className="relative aspect-square w-full overflow-hidden border-[1.5px] border-vermillion/70 bg-cream-bright">
          <Image
            src={item.image}
            alt={item.nameTh}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
          {badge && (
            <span
              className={`absolute top-0 left-0 px-2.5 py-1 font-display text-[13px] font-bold ${badge.className}`}
            >
              {badge.label}
            </span>
          )}
        </div>

        {/* the product's own mark, stamped over the corner of the print */}
        <Seal
          glyph={seal.glyph}
          label={seal.label}
          className={
            seal.glyph.length > 1
              ? "absolute -top-3 -right-3 size-12 text-[15px]"
              : "absolute -top-3 -right-3 size-12 text-[21px]"
          }
        />
      </div>

      <div className="flex flex-1 flex-col pt-3.5">
        <h3 className="font-display text-[21px] leading-tight font-bold text-ink">
          {item.nameTh}
        </h3>
        <p className="mt-0.5 font-display text-[15px] font-semibold text-vermillion">
          {item.nameEn}
        </p>
        <p className="mt-2 font-body text-ink">{item.descriptionTh}</p>

        {item.flavors && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.flavors.map((flavor) => (
              <span
                key={flavor}
                className="border border-pine px-2 py-0.5 font-display text-[13px] font-semibold text-pine"
              >
                {flavor}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-end justify-between gap-3 border-t-2 border-pine pt-3.5">
          <span className="font-display text-[26px] leading-none font-bold text-vermillion">
            {prices ? (
              <>
                ฿{lo}
                <span className="font-normal text-ink">–</span>
                {hi}
              </>
            ) : (
              <>
                ฿{item.price}
                <span className="text-[17px] font-semibold text-ink">
                  /{item.unit}
                </span>
              </>
            )}
          </span>
          <button
            onClick={() => onDetailClick(item)}
            className="press-cream inline-flex min-h-11 shrink-0 items-center gap-1.5 border-2 border-pine px-3 py-2 font-display text-[15px] font-bold text-ink shadow-sign transition-[transform,box-shadow] hover:shadow-sign-lifted active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            ดูรายละเอียด
            <ArrowRight className="size-4" aria-hidden />
          </button>
        </div>
      </div>
    </article>
  );
}
