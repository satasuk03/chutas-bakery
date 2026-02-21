import { ArrowRight, Flame, Sparkles, Star, ThumbsUp } from "lucide-react";
import type { MenuItem } from "@/types/menu";

const badgeConfig = {
  popular: {
    label: "ยอดนิยม",
    className: "bg-terracotta text-white",
    icon: Star,
  },
  new: {
    label: "ใหม่!",
    className: "bg-sage text-white",
    icon: Sparkles,
  },
  hot: {
    label: "HOT!",
    className: "bg-burgundy text-white",
    icon: Flame,
  },
  recommended: {
    label: "แม่แนะนำ",
    className: "bg-gold text-white",
    icon: ThumbsUp,
  },
};

const tapeColors = [
  "bg-terracotta/20",
  "bg-sage/30",
  "bg-gold/25",
  "bg-terracotta/15",
  "bg-sage/20",
];

function getTapeColor(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return tapeColors[Math.abs(hash) % tapeColors.length];
}

export default function MenuProductCard({ item }: { item: MenuItem }) {
  const badge = item.badge ? badgeConfig[item.badge] : null;
  const BadgeIcon = badge?.icon;
  const tapeColor = getTapeColor(item.id);

  const rotateClass =
    item.rotation === 1
      ? "rotate-1"
      : item.rotation === -1
        ? "-rotate-1"
        : item.rotation === 2
          ? "rotate-2"
          : item.rotation === -2
            ? "-rotate-2"
            : "";

  return (
    <article
      className={`group relative bg-white p-3 pb-6 border border-surface shadow-paper transform ${rotateClass} hover:rotate-0 hover:scale-105 hover:shadow-paper-hover transition-all duration-300 rounded-sm`}
    >
      {/* Tape decoration */}
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 ${tapeColor} rotate-2 z-20 mask-torn-paper`}
      />

      {/* Image */}
      <div className="relative aspect-square overflow-hidden mb-3 border border-surface rounded-sm bg-warm-beige">
        <img
          alt={item.nameTh}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={item.image}
        />

        {/* Badge */}
        {badge && BadgeIcon && (
          <div
            className={`absolute top-2 left-2 ${badge.className} text-xs font-bold px-2 py-1 rounded-full shadow-sm z-10 flex items-center gap-1`}
          >
            <BadgeIcon className="size-3" />
            <span className="font-body">{badge.label}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="text-center px-1">
        <h3 className="font-hand text-2xl text-text-main leading-tight mb-0.5">
          {item.nameTh}
        </h3>
        <p className="font-body text-sm text-terracotta mb-2">{item.nameEn}</p>
        <p className="font-body text-sm text-text-muted italic mb-3">
          &ldquo;{item.descriptionTh}&rdquo;
        </p>

        {/* Flavors */}
        {item.flavors && (
          <div className="flex flex-wrap justify-center gap-1.5 mb-3">
            {item.flavors.map((flavor) => (
              <span
                key={flavor}
                className="font-body text-xs bg-warm-beige text-text-main px-2 py-0.5 rounded-full border border-surface"
              >
                {flavor}
              </span>
            ))}
          </div>
        )}

        {/* Pricing */}
        <div className="flex items-center justify-between border-t border-dashed border-surface pt-3">
          <span className="font-hand text-2xl font-bold text-text-main">
            {item.variants ? (
              <>
                ฿{Math.min(...item.variants.map((v) => v.price))}
                <span className="text-base font-normal text-text-muted">
                  -
                </span>
                {Math.max(...item.variants.map((v) => v.price))}
              </>
            ) : (
              <>
                ฿{item.price}
                <span className="text-base font-normal text-text-muted">
                  /{item.unit}
                </span>
              </>
            )}
          </span>
          <button className="flex items-center gap-1 bg-white border-2 border-surface text-text-main px-3 py-1 text-sm font-bold font-body rounded-full shadow-paper hover:shadow-paper-hover active:translate-x-[2px] active:translate-y-[2px] transition-all">
            <span>ดูรายละเอียด</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
