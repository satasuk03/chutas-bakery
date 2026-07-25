/**
 * Brass lattice — the tram ironwork of the delivered poster, abstracted into
 * a divider and a backdrop. It was pine ironwork; pine left the palette in
 * the 2026-07-25 colour revision, so it is drawn in brass, which is exactly
 * what this palette reserves for ornament and rules. Brass carries no text
 * here, so its 3.20:1 on paper is not a contrast question.
 *
 * Both marks paint brass directly rather than inheriting `currentColor` from
 * a `text-brass` class: brass is never a text colour in this system, and an
 * ornament should not have to borrow the text channel to exist.
 *
 * This is why the site needs no decorative icons or blurred blobs.
 */
import { cn } from "@/lib/utils";

/** A horizontal braced band. Divides two grounds the way a girder divides a street. */
export function LatticeRule({
  className,
  height = 26,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <svg
      aria-hidden
      className={cn("block w-full", className)}
      height={height}
      viewBox={`0 0 120 ${height}`}
      preserveAspectRatio="none"
      role="presentation"
    >
      <defs>
        <pattern
          id="chuta-lattice"
          width="20"
          height={height}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M0 2 L20 ${height - 2} M20 2 L0 ${height - 2}`}
            stroke="var(--color-brass)"
            strokeWidth="2"
            fill="none"
          />
        </pattern>
      </defs>
      <rect x="0" y="0" width="120" height="2.5" fill="var(--color-brass)" />
      <rect
        x="0"
        y={height - 2.5}
        width="120"
        height="2.5"
        fill="var(--color-brass)"
      />
      <rect
        x="0"
        y="0"
        width="120"
        height={height}
        fill="url(#chuta-lattice)"
        opacity="0.55"
      />
    </svg>
  );
}

/**
 * The scaffold behind a figure — a tall lattice panel. Decorative, and kept
 * at low contrast so the figure stays the subject. Not used on the home hero
 * any more: that composition now leads with product photography and has no
 * room for a backdrop.
 */
export function LatticePanel({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cn(className)}
      viewBox="0 0 160 400"
      fill="none"
      role="presentation"
    >
      {/* uprights */}
      <rect x="14" y="0" width="5" height="400" fill="var(--color-brass)" />
      <rect x="141" y="0" width="5" height="400" fill="var(--color-brass)" />
      {/* cross bracing */}
      {Array.from({ length: 8 }).map((_, i) => {
        const y = i * 50;
        return (
          <g key={i} stroke="var(--color-brass)" strokeWidth="3.5">
            <path d={`M19 ${y} L141 ${y + 50}`} />
            <path d={`M141 ${y} L19 ${y + 50}`} />
            <path d={`M19 ${y} L141 ${y}`} strokeWidth="2.5" />
          </g>
        );
      })}
    </svg>
  );
}
