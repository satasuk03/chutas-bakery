/**
 * The wordmark.
 *
 * The delivered lockup sets "CHUTA'S BAKERY" in a heavy condensed sans the
 * owner has not named, and the mascot overlaps the second line — so it cannot
 * be cropped into a horizontal mark, and it must not be re-set in a substitute
 * face (Anton/Archivo Black/Oswald all land near-but-wrong next to the real
 * art, which reads as a brand error rather than a style).
 *
 * So there are two marks:
 *   <Lockup />    the delivered image, used wherever the brand is asserted
 *   <BrandMark /> a derived horizontal mark for the header, Thai-first —
 *                 correct for a site whose lang is th and whose customers
 *                 read Thai.
 */
import Image from "next/image";
import { cn } from "@/lib/utils";

/** Header / footer mark: 楚塔 seal + Thai wordmark. No Latin, by design. */
export function BrandMark({
  className,
  tone = "cream",
}: {
  className?: string;
  tone?: "cream" | "ink";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className="inline-flex size-9 items-center justify-center border-[1.5px] border-cream/70 bg-vermillion font-seal text-[15px] leading-none tracking-[-0.08em] text-cream shadow-sign"
        style={{ fontWeight: 700 }}
      >
        楚塔
      </span>
      <span
        className={cn(
          "font-display text-[19px] leading-none font-bold tracking-[-0.01em] md:text-[21px]",
          tone === "cream" ? "text-cream" : "text-ink",
        )}
      >
        ชุตา เบเกอรี่
      </span>
    </span>
  );
}

/** The delivered lockup, as an image. Square composition — give it room. */
export function Lockup({
  className,
  priority = false,
  sizes = "(min-width: 768px) 420px, 280px",
}: {
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src="/brand/lockup.webp"
      alt="Chuta's Bakery — 楚塔"
      width={640}
      height={643}
      priority={priority}
      sizes={sizes}
      className={cn("h-auto w-full", className)}
    />
  );
}
