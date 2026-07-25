/**
 * Sign plates — the structural element of the world.
 *
 * A plate is an enamel sign screwed to the paper wall: cream field, brass
 * frame, a vermillion keyline inset inside it, vermillion lettering, hung
 * from a rail on two hooks. Section headings are plates. Product names are
 * plates. This is what replaces the rounded card.
 *
 * The double rule — 2px brass outside, 1px vermillion 4px in — is the
 * device that carries "มงคล" in this palette, and it is the reason brass
 * never has to become text to be present. See `Frame` below and the
 * `.frame-brass` utility in globals.css.
 */
import { cn } from "@/lib/utils";

/**
 * The brass ornament device as a component, for surfaces that want the
 * double rule as their own element rather than as a class on a plate they
 * already have. 2px brass outer frame, 4px gap, 1px vermillion keyline.
 *
 * `Frame` builds the keyline out of real DOM (an inset child) instead of
 * the `.frame-brass` inward outline, so it survives on focusable elements
 * — :focus-visible owns the outline property and would otherwise replace
 * the keyline for as long as the element is focused.
 */
export function Frame({
  children,
  className,
  innerClassName,
  keyline = "vermillion",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  /** Ground, shadow and layout classes. Padding belongs on `innerClassName`. */
  className?: string;
  /** Content padding — the keyline sits outside this. */
  innerClassName?: string;
  /**
   * The inner rule. Vermillion on a light ground (5.11 on cream); brass on a
   * dark one, where vermillion would be 2.43 against umber and read as mud.
   * Either way it is a rule, not a word, so neither is a contrast question.
   */
  keyline?: "vermillion" | "brass";
  as?: React.ElementType;
}) {
  return (
    <Tag className={cn("border-2 border-brass p-1", className)}>
      <div
        className={cn(
          "h-full border",
          keyline === "vermillion" ? "border-vermillion" : "border-brass",
          innerClassName,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}

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
  tone?: "cream" | "umber";
}) {
  return (
    <div className={cn("inline-flex flex-col items-center", className)}>
      {/* rail */}
      <span aria-hidden className="h-[3px] w-[62%] bg-brass" />
      {/* hooks */}
      <span aria-hidden className="flex w-[48%] justify-between">
        <span className="h-3 w-[3px] bg-brass" />
        <span className="h-3 w-[3px] bg-brass" />
      </span>
      <div className={cn(sway && "animate-sway")}>
        {/* The plate is the double rule itself — brass frame, 4px gap, then
            the keyline every enamel sign has. Built with `Frame` rather than
            `.frame-brass` so the two implementations of the device never
            drift apart. */}
        <Frame
          className={cn(
            "shadow-plate",
            tone === "cream"
              ? "press-cream text-vermillion"
              : "press-umber text-paper",
          )}
          innerClassName="px-6 py-3"
          keyline={tone === "cream" ? "vermillion" : "brass"}
        >
          {children}
        </Frame>
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
      <span aria-hidden className="h-2 w-[3px] bg-brass" />
      <div className="frame-brass press-cream px-2.5 py-3.5 shadow-plate">
        <span
          aria-hidden
          className="sign-vertical block font-seal text-[1.6em] leading-none text-vermillion"
          style={{ fontWeight: 700 }}
        >
          {glyphs}
        </span>
      </div>
      {/* the post it stands on */}
      <span aria-hidden className="h-4 w-[5px] bg-brass" />
      <span aria-hidden className="h-[3px] w-8 bg-brass" />
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
  tone?: "cream" | "paper" | "umber";
  as?: React.ElementType;
}) {
  const tones = {
    cream: "press-cream text-ink",
    paper: "press-paper text-ink",
    umber: "press-umber text-paper",
  } as const;

  return (
    <Tag
      className={cn(
        "border-2 border-brass shadow-plate",
        tones[tone],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
