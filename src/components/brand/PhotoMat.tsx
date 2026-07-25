/**
 * PhotoMat — the one correct way to show food in this world.
 *
 * BRAND.md §13 forbids photographing or placing food on a saturated ground
 * because it swallows pastry color, and the redesign made teal the primary
 * ground. Resolved 2026-07-25: food always sits on cream, and teal is the
 * world *around* the photo. The mat also means the existing photos — all shot
 * on light and wood backgrounds — work as delivered, with no reshoot.
 *
 * Structurally it is a print pasted onto a board: cream board, vermillion
 * keyline, photo inset on the brighter cream so pale bao lift off it.
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
        "press-cream border-2 border-pine p-2.5 shadow-plate",
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden border-[1.5px] border-vermillion/70 bg-cream-bright",
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
