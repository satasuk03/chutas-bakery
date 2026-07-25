/**
 * Seals — the brand's icon vocabulary.
 *
 * The 2026-07-25 identity ships four Chinese marks, and their color logic is
 * part of the spec: 福 is reversed (vermillion ground, paper glyph) while the
 * 香港包子 block is positive (cream ground, vermillion ring and glyph). These
 * replace the lucide icons the previous brand used — a thin-line Croissant
 * cannot sit on a 1930s enamel sign.
 *
 * The reversed seal's ring is `paper`, not brass and not bare: on the lacquer
 * navbar a vermillion seal is 1.19:1 against the ground and would vanish
 * without it. Paper on lacquer is 6.85:1, so the ring reads on every ground
 * the seal is used on. Its glyph is paper on vermillion — 5.75:1.
 *
 * Chinese in a Thai page is decorative: seals are aria-hidden unless given an
 * explicit `label`, and callers put the Thai reading in adjacent text.
 */
import { cn } from "@/lib/utils";

type SealTone = "reverse" | "positive";

/** Thai-facing meaning for each glyph the brand uses. */
export const SEAL_GLYPHS = {
  fu: "福",
  chuta: "楚塔",
  baozi: "包子",
  faGao: "发糕",
  siuTao: "寿桃",
  mooncake: "月饼",
  joy: "喜",
} as const;

export function Seal({
  glyph,
  tone = "reverse",
  label,
  className,
  stamp = false,
}: {
  glyph: string;
  tone?: SealTone;
  /** Thai label. Provided → announced as an image; omitted → decorative. */
  label?: string;
  className?: string;
  /** Play the stamp-down once on mount. */
  stamp?: boolean;
}) {
  const a11y = label
    ? ({ role: "img", "aria-label": label } as const)
    : ({ "aria-hidden": true } as const);

  return (
    <span
      {...a11y}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-seal leading-none select-none",
        // A stamped seal sits INTO the paper, not above it.
        "shadow-seal",
        tone === "reverse"
          ? "border-[0.09em] border-paper bg-vermillion text-paper"
          : "border-[0.09em] border-vermillion bg-cream text-vermillion",
        glyph.length > 1 ? "tracking-[-0.06em]" : "",
        stamp && "animate-stamp",
        className,
      )}
      style={{ fontWeight: 700 }}
    >
      <span className="translate-y-[0.02em]">{glyph}</span>
    </span>
  );
}

/**
 * The 香港包子 block — four positive seals in a 2×2, read left→right by row.
 * Never breaks into a single column: it is one mark, not four icons.
 */
export function BaoziSeal({
  className,
  sealClassName,
  stamp = false,
}: {
  className?: string;
  sealClassName?: string;
  stamp?: boolean;
}) {
  const glyphs = ["香", "港", "包", "子"];

  return (
    <span
      role="img"
      aria-label="ซาลาเปาฮ่องกง"
      className={cn("grid shrink-0 grid-cols-2 gap-[0.06em]", className)}
    >
      {glyphs.map((g, i) => (
        <span
          key={g}
          aria-hidden
          className={cn(
            "inline-flex aspect-square items-center justify-center rounded-full border-[0.085em] border-vermillion bg-cream font-seal leading-none text-vermillion shadow-seal select-none",
            stamp && "animate-stamp",
            sealClassName,
          )}
          style={{
            fontWeight: 700,
            animationDelay: stamp ? `${120 + i * 70}ms` : undefined,
          }}
        >
          <span className="translate-y-[0.02em]">{g}</span>
        </span>
      ))}
    </span>
  );
}

/**
 * Product seals. Each item gets the Chinese name of what it actually is,
 * stamped where the old build put a generic food icon.
 *
 * Keyed on item id, not category. The categories in menu-items.json group by
 * how customers shop, not by what the sweet is: `salapao-sweet` (ซาลาเปาไส้หวาน)
 * sits in the `siutao` category, so matching on category stamped a plain sweet
 * bun with 寿桃, "longevity peach". In a rebrand that makes Chinese naming
 * load-bearing, that is a claim about the product, not a decoration.
 */
const SEAL_BY_ID: Record<string, { glyph: string; label: string }> = {
  huakpao: { glyph: SEAL_GLYPHS.faGao, label: "ฮวกก้วย" },
  "huakpao-sm": { glyph: SEAL_GLYPHS.faGao, label: "ฮวกก้วย" },
  siutao: { glyph: SEAL_GLYPHS.siuTao, label: "ซิ่วท้อ" },
  "salapao-sweet": { glyph: SEAL_GLYPHS.baozi, label: "ซาลาเปา" },
  "salapao-moosap": { glyph: SEAL_GLYPHS.baozi, label: "ซาลาเปา" },
  "salapao-moodaeng": { glyph: SEAL_GLYPHS.baozi, label: "ซาลาเปา" },
  "salapao-cream": { glyph: SEAL_GLYPHS.baozi, label: "ซาลาเปา" },
  saoping: { glyph: SEAL_GLYPHS.joy, label: "เซาปิ่ง" },
};

export function productSeal(
  id: string,
  category?: string,
): { glyph: string; label: string } {
  const exact = SEAL_BY_ID[id];
  if (exact) return exact;

  // Fallback for items added later: read the id, then the category.
  const hay = `${id} ${category ?? ""}`;
  if (/huak|fa-?gao/i.test(hay))
    return { glyph: SEAL_GLYPHS.faGao, label: "ฮวกก้วย" };
  if (/moon/i.test(hay))
    return { glyph: SEAL_GLYPHS.mooncake, label: "ขนมไหว้พระจันทร์" };
  if (/siutao|peach/i.test(id))
    return { glyph: SEAL_GLYPHS.siuTao, label: "ซิ่วท้อ" };
  return { glyph: SEAL_GLYPHS.baozi, label: "ซาลาเปา" };
}
