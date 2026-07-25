/**
 * Pine lattice — the tram ironwork behind the mascot in the delivered poster,
 * abstracted into a divider and a backdrop. This is the world's ornament, and
 * it is why the site needs no decorative icons or blurred blobs.
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
      className={cn("block w-full text-pine-deep", className)}
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
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </pattern>
      </defs>
      <rect x="0" y="0" width="120" height="2.5" fill="currentColor" />
      <rect
        x="0"
        y={height - 2.5}
        width="120"
        height="2.5"
        fill="currentColor"
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
 * The scaffold behind the mascot — a tall lattice panel. Decorative, sits at
 * low contrast against the teal ground so the figure stays the subject.
 */
export function LatticePanel({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cn("text-pine", className)}
      viewBox="0 0 160 400"
      fill="none"
      role="presentation"
    >
      {/* uprights */}
      <rect x="14" y="0" width="5" height="400" fill="currentColor" />
      <rect x="141" y="0" width="5" height="400" fill="currentColor" />
      {/* cross bracing */}
      {Array.from({ length: 8 }).map((_, i) => {
        const y = i * 50;
        return (
          <g key={i} stroke="currentColor" strokeWidth="3.5">
            <path d={`M19 ${y} L141 ${y + 50}`} />
            <path d={`M141 ${y} L19 ${y + 50}`} />
            <path d={`M19 ${y} L141 ${y}`} strokeWidth="2.5" />
          </g>
        );
      })}
    </svg>
  );
}
