/**
 * Sign plates — the structural element of the world.
 *
 * The poster's shopfront is enamel plates screwed to a teal wall: cream field,
 * pine frame, vermillion lettering, hung from a rail on two hooks. Section
 * headings are plates. Product names are plates. This is what replaces the
 * rounded card the previous brand used for everything.
 */
import { cn } from "@/lib/utils";

/** A plate hanging from a rail — used for headings that want the shopfront read. */
export function HangingSign({
  children,
  className,
  sway = false,
  tone = "cream",
}: {
  children: React.ReactNode;
  className?: string;
  /** A sign on hooks moves. Off by default; on for a hero moment. */
  sway?: boolean;
  tone?: "cream" | "pine";
}) {
  return (
    <div className={cn("inline-flex flex-col items-center", className)}>
      {/* rail */}
      <span aria-hidden className="h-[3px] w-[62%] bg-pine-deep" />
      {/* hooks */}
      <span aria-hidden className="flex w-[48%] justify-between">
        <span className="h-3 w-[3px] bg-pine-deep" />
        <span className="h-3 w-[3px] bg-pine-deep" />
      </span>
      <div className={cn(sway && "animate-sway")}>
        <div
          className={cn(
            "border-2 border-pine-deep px-5 py-3 shadow-plate",
            tone === "cream"
              ? "press-cream text-vermillion"
              : "press-pine text-cream",
          )}
        >
          {/* the inner keyline every enamel sign has */}
          <div
            className={cn(
              "border px-3 py-1.5",
              tone === "cream" ? "border-vermillion/60" : "border-cream/50",
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * The 楚塔包子铺 standing sign — vertical Chinese on a cream plate, exactly as
 * it appears at the left of the delivered poster.
 */
export function StandingSign({
  className,
  glyphs = "楚塔包子铺",
  label = "ร้านซาลาเปาชุตา",
}: {
  className?: string;
  glyphs?: string;
  label?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("inline-flex flex-col items-center", className)}
    >
      <span aria-hidden className="h-2 w-[3px] bg-pine-deep" />
      <div className="border-2 border-pine-deep press-cream px-2 py-3 shadow-plate">
        <span
          aria-hidden
          className="sign-vertical block font-seal text-[1.6em] leading-none text-vermillion"
          style={{ fontWeight: 700 }}
        >
          {glyphs}
        </span>
      </div>
      {/* the post it stands on */}
      <span aria-hidden className="h-4 w-[5px] bg-pine-deep" />
      <span aria-hidden className="h-[3px] w-8 bg-pine-deep" />
    </div>
  );
}

/** A flat plate. The workhorse container: menu cards, callouts, quotes. */
export function Plate({
  children,
  className,
  tone = "cream",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "cream" | "pine" | "teal-deep";
  as?: React.ElementType;
}) {
  const tones = {
    cream: "press-cream text-ink border-pine",
    pine: "press-pine text-cream border-pine-deep",
    "teal-deep": "press-teal-deep text-cream border-pine-deep",
  } as const;

  return (
    <Tag className={cn("border-2 shadow-plate", tones[tone], className)}>
      {children}
    </Tag>
  );
}
