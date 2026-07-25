/**
 * PhotoMat — the one correct way to show food in this world.
 *
 * BRAND.md §13 forbids photographing or placing food on a saturated ground
 * because it swallows pastry colour. Reconfirmed in the 2026-07-25 colour
 * revision: food always sits on `cream` with a `cream-bright` inner field,
 * and red and dark grounds never touch a food photo. Vermillion is now a
 * fifth of the page, which makes this rule more load-bearing, not less. The
 * mat also means the existing photos — all shot on light and wood
 * backgrounds — work as delivered, with no reshoot.
 *
 * Structurally it is the auspicious enamel-plate build: 2px brass outer
 * frame, cream board, then the print itself keylined in vermillion on the
 * brighter cream so pale bao lift off the mat. That brass-outside /
 * vermillion-inside pair is the same double rule as `frame-brass`, with the
 * mat's own padding as the gap — so the photo needs no third line.
 */
import Image from "next/image";
import { cn } from "@/lib/utils";

export function PhotoMat({
  src,
  alt,
  className,
  imageClassName,
  aspect = "aspect-[4/3]",
  priority = false,
  sizes = "(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw",
  children,
  fit = "cover",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  /** Caption content, set on the mat below the photo. */
  children?: React.ReactNode;
  fit?: "cover" | "contain";
}) {
  return (
    <figure
      className={cn(
        "press-cream border-2 border-brass p-2.5 shadow-plate",
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden border-[1.5px] border-vermillion bg-cream-bright",
          aspect,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            fit === "cover" ? "object-cover" : "object-contain",
            imageClassName,
          )}
        />
      </div>
      {children ? (
        <figcaption className="pt-3">{children}</figcaption>
      ) : null}
    </figure>
  );
}
