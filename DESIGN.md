---
name: Chuta's Bakery
description: A 1930s Shanghai print shop — jade-teal grounds, cream enamel sign plates, vermillion seals, and a guofeng mascot who hands you a peach.
colors:
  teal: "#5d9d8e"
  teal-deep: "#46766a"
  pine: "#1b7257"
  pine-deep: "#123f33"
  cream: "#f4e2c7"
  cream-bright: "#fbf1de"
  vermillion: "#c41f14"
  vermillion-deep: "#a81a10"
  ink: "#0d2a22"
typography:
  display-xl:
    fontFamily: "Prompt, sans-serif"
    fontSize: "clamp(3.5rem, 14vw, 6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  display:
    fontFamily: "Prompt, sans-serif"
    fontSize: "clamp(2.9rem, 11vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  page-title:
    fontFamily: "Prompt, sans-serif"
    fontSize: "clamp(1.85rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: "Prompt, sans-serif"
    fontSize: "clamp(1.5rem, 3.4vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  subhead:
    fontFamily: "Prompt, sans-serif"
    fontSize: "clamp(1.4rem, 3.2vw, 1.85rem)"
    fontWeight: 700
    lineHeight: 1.2
  numeral:
    fontFamily: "Prompt, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 700
    lineHeight: 1
  price:
    fontFamily: "Prompt, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1
  title:
    fontFamily: "Prompt, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.25
  body-lg:
    fontFamily: "Prompt, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Sarabun, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Prompt, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.2
  meta:
    fontFamily: "Prompt, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.2
  seal:
    fontFamily: "Noto Sans SC Seal, serif"
    fontWeight: 700
    lineHeight: 1
rounded:
  none: "0px"
  plate: "2px"
  sign: "4px"
  seal: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "clamp(56px, 9vw, 112px)"
components:
  button-primary:
    backgroundColor: "{colors.vermillion}"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.vermillion-deep}"
    textColor: "{colors.cream}"
  button-secondary:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "14px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.cream-bright}"
    textColor: "{colors.ink}"
  sign-plate:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.vermillion}"
    rounded: "{rounded.sign}"
    padding: "16px 20px"
  seal-fu:
    backgroundColor: "{colors.vermillion}"
    textColor: "{colors.cream}"
    typography: "{typography.seal}"
    rounded: "{rounded.seal}"
    size: "56px"
  seal-baozi:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.vermillion}"
    typography: "{typography.seal}"
    rounded: "{rounded.seal}"
    size: "48px"
  photo-mat:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "12px"
  card-menu:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "12px 12px 20px"
---

# Design System: Chuta's Bakery

## Overview

**North star: The Shanghai Print Shop.** Every surface behaves like a sheet that came off a
1930s lithography press in a Chinese bakery quarter — jade-teal ink laid down as a flat
ground, cream enamel sign plates screwed onto it, vermillion seals stamped last.

The identity is fixed by assets the owner delivered on 2026-07-25: an EN logo lockup, a Thai
poster, and a cutout guofeng mascot in a red cheongsam holding a longevity peach. Those
files are the quality bar. This system exists so screens the assets don't cover still look
like they came off the same press.

Mood: auspicious, printed, confident, slightly theatrical — never dainty, never "artisanal
bakery." The anti-reference is the site this replaced: rounded cards on warm beige, blurred
terracotta blobs, thin-line lucide icons, and a script font. Softness was the old brand's
whole idea, so nothing here is soft.

Two commitments outrank taste:

1. **The four spec colors are binding** and may never be eyedropped from the delivered
   images — those render halftone and read off-spec (the poster's ground samples `#559381`,
   not `#5d9d8e`).
2. **Primary customers are women aged 43–58.** Print-shop drama never costs legibility.
   Body copy is ≥17px at ≥4.5:1, and hierarchy comes from size and weight, never opacity.

## Colors

Four colors are the owner's spec and normative. Five are derived, and each exists only
because a spec color could not legally carry text.

| Token | Hex | Role |
|---|---|---|
| `teal` | `#5d9d8e` | The ground. The color the brand *is*. Large fields, hero, section grounds. |
| `teal-deep` | `#46766a` | Derived. Teal darkened so cream display type on it clears 3:1. Panels and headers. |
| `pine` | `#1b7257` | Spec. Sign frames, lattice, and the one dark ground that carries cream body text. |
| `pine-deep` | `#123f33` | Derived. Footer ground and hard offset shadows. |
| `cream` | `#f4e2c7` | Spec. Sign plates, display type, and **every surface a food photo sits on**. |
| `cream-bright` | `#fbf1de` | Derived. Inner field of a photo mat only — lifts pale bao off the mat. |
| `vermillion` | `#c41f14` | Spec. Seals, Chinese characters, primary action. An accent, never a ground for prose. |
| `vermillion-deep` | `#a81a10` | Derived. Hover and pressed states of vermillion. |
| `ink` | `#0d2a22` | Derived. Pine-black. The only text color used on a teal ground. |

### The contrast table this system is built around

Measured, not assumed. This is why the palette is arranged the way it is.

| Foreground | Ground | Ratio | Verdict |
|---|---|---|---|
| cream | teal | **2.48** | ✗ fails body **and** large — the poster gets away with it at 200px, screens do not |
| ink | teal | 4.87 | ✓ body |
| cream | teal-deep | 4.08 | ✓ large only |
| cream | pine | 4.61 | ✓ body |
| cream | vermillion | 4.66 | ✓ body |
| ink | cream | 11.0 | ✓ body |
| vermillion | cream | 4.66 | ✓ body |
| pine | cream | 4.61 | ✓ body |
| vermillion | teal | 1.88 | ✗ decorative only, never text |

### The four ground rules

1. **Teal ground → `ink` text.** Cream on teal is banned for anything a visitor must read.
2. **Cream ground → `ink` body, `vermillion` or `pine` for emphasis.** The reading surface.
3. **Pine ground → `cream` text.** The dark ground: footer, header bar, sign plates reversed.
4. **Vermillion is a seal, not a ground.** It carries 1–4 characters or one button label.
   Never a paragraph, and never behind or beneath food.

**Food photography (resolved 2026-07-25):** food always sits on cream. Teal never touches
a bao. This preserves BRAND.md §13's rule that a saturated ground swallows pastry color, and
it lets the existing light-background photos work without a reshoot. Teal is the world
*around* the photo; the cream mat is the world the food lives in.

No text anywhere uses opacity to become secondary. Secondary text is smaller or lighter in
weight, in a color that passes on its own.

### The one documented deviation

The oversized `楚塔` behind the hero mascot is vermillion on teal — **1.88:1**. It is kept
deliberately, because it is the composition of the lockup the owner delivered, and it is
bounded by three conditions: it is `aria-hidden`, it is set at 245px as ornament, and every
piece of information it could carry is available as real passing text elsewhere on the page
(the header mark, the `ชุตา เบเกอรี่` headline, the footer). **This exemption does not
generalize.** Vermillion on teal is otherwise banned for text of any size — a rendered
contrast audit over all five routes at both breakpoints reports this element and nothing
else, and that is the state to keep it in.

## Typography

Three families, each with one job.

- **Prompt** — all display, headline, title, label, and navigation. Owner-specified for Thai
  headlines. Weights 600/700; 800 only above 4rem.
- **Sarabun** — body copy only. Inherited from the previous build and kept: it is a workhorse
  Thai face that stays legible at 17px for a 43–58 year-old reader.
- **Noto Sans SC Seal** — Chinese characters on seals and sign plates only. Self-hosted as a
  **15-glyph subset** of Noto Sans SC (`楚塔包子铺香港福寿桃发糕月饼喜`), 3.7 KB per weight,
  declared under its own family name so it can never be reached for Thai or Latin. A full
  CJK face would add megabytes to a static export for the sake of eight characters.

**The Latin wordmark is an image, not type.** The lockup's "CHUTA'S BAKERY" is a heavy
condensed sans the owner has not named. Setting it in a substitute (Anton, Archivo Black,
Oswald) puts a near-miss next to the real lockup and reads as a brand error. Use
`/brand/lockup.webp`. This is why no Latin display face is in the stack.

The ramp is twelve steps and no more; every literal size in the codebase is one of them.
Fluid steps (`display-xl` → `subhead`) are for headings; fixed steps (`numeral` → `meta`)
are for UI and prose. `numeral` exists for the calendar date, `price` for baht figures —
both are display-weight numbers that would otherwise invent a step each time they appeared.

Body measure caps at 68ch. Thai needs air, so body line-height is 1.75 and display never
goes below 0.95. Nothing sits between `body` (17px) and `label` (15px): if a size feels
like it wants to, the element is either prose or a control, and that answers it.

## Layout

- Content column `max-width: 1200px`; reading column (story, product detail) `68ch`.
- Section rhythm `clamp(56px, 9vw, 112px)`, with more space above a heading than below it.
- **Grounds alternate as full-bleed bands**, teal → cream → teal. A band is edge-to-edge;
  the poster world has no floating rounded container on a neutral page.
- Mobile: the mascot is the one element permitted to bleed off the viewport edge. Sign
  plates stack; the 2×2 seal never breaks into a column.
- Breakpoints follow Tailwind defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280).

## Elevation & Depth

Printed matter, not glass. Depth comes from **hard offset plus soft ambient**, never a
zero-offset glow.

- `plate` — `3px 3px 0 var(--pine-deep), 0 6px 18px rgba(13,42,34,.18)`. A cream sign plate
  screwed to a teal wall. The hard offset is the plate's thickness.
- `plate-lifted` — `5px 5px 0 var(--pine-deep), 0 12px 28px rgba(13,42,34,.24)`. Hover.
- `seal-press` — inset, so a stamped seal sits *into* the paper rather than above it.
- **Registration offset** is the world's native device and is used deliberately: display
  type may carry a vermillion copy of itself offset 3–4px, exactly as a misregistered
  two-color press plate would. It is not a drop shadow and never applies to body text.
- Halftone grain overlays every teal ground at 4–7% so flat CSS fields and the printed,
  textured mascot read as one material. Without it the cutout looks like a sticker.

No `backdrop-filter`, no glass, no gradient mesh. One gradient is allowed: a subtle
vertical darkening at the foot of a full-bleed teal band, standing in for ink density.

## Shapes

The world is **rectangles and circles, nothing between.**

- Plates, signs, cards, buttons, inputs: `2px`, or `4px` for a large hanging sign. Effectively square.
- Seals: perfect circles.
- `rounded-xl`, `rounded-2xl`, `rounded-3xl`, and `rounded-full` on a rectangle are all
  banned — they are the previous brand's signature, and the single strongest tell of a
  recolored Tailwind template.
- Borders are `2px` and pine, or `1.5px` and vermillion on a cream plate. Hairlines
  disappear against halftone.
- Recurring forms drawn in the world's own grammar, never as icons: the **hanging sign**
  (plate + two hooks + top rail), the **round seal**, the **2×2 seal block**, the **pine
  lattice** (the poster's tram ironwork, as an SVG divider).

## Components

**Header** — pine ground, cream type. The square lockup cannot be a 40px header mark, so
the header uses a derived horizontal lockup: a vermillion 楚塔 seal plus "ชุตา เบเกอรี่" set
in Prompt. Thai-first, because the site is Thai-first. Active nav item gets a cream
underline 2px, not a color change alone.

**Button, primary** — vermillion plate, cream label, 2px radius, hard pine offset. On press
the plate translates 2px into its own shadow. Minimum target 44px.

**Button, secondary** — cream plate, ink label, 2px pine border, same offset behavior.

**Menu card** — a cream mat. Photo inset at `cream-bright` with a 1.5px vermillion keyline,
Thai name in Prompt 600, price in Prompt 700, and a product seal (寿桃 / 发糕 / 月饼) stamped
in the corner where the old build put a lucide icon. No nested cards.

**Sign plate** — cream ground, vermillion Chinese characters set vertically for the
楚塔包子铺 form, pine frame, hooks on the top rail. Used for section headings, not decoration.

**Where the giant 楚塔 does and does not work.** The delivered lockup sets 楚塔 huge in
vermillion behind the mascot, and that composition depends on being square: the glyphs clear
her silhouette on both sides. In a landscape viewport the same figure is the full height of
its column and covers all but an edge of them, which reads as a stray red mark rather than
the shop's name — and putting an opaque headline plate over them instead chops them into
fragments. So landscape surfaces take the device from the **poster**, where 楚塔 hangs on a
cream plate against the green ironwork. Use `Lockup` when a surface can give the mark a
square; use `StandingSign` when it cannot.

**Seal** — `福` reversed (vermillion ground, cream glyph); `香港包子` positive (cream ground,
vermillion ring and glyph, 2×2). Both carry `aria-hidden` plus a Thai label in adjacent
text, because a screen reader announcing Chinese in a Thai page is noise.

**Calendar card** — the festival strip. Cream plate, date in Prompt 700 at display scale,
pine lattice behind. `event.gradient` in `calendar-events.json` held old-palette Tailwind
classes and was replaced with a `tone` key (`gold` / `peach` / `sage` → `vermillion` /
`pine` / `teal`), because leaving palette values in a data file survives a component-only pass.

**Motion — one authored moment: the press.** Plates arrive with their vermillion
registration layer a beat late (~90ms), and seals stamp down (scale 1.12 → 1, 180ms
ease-out) once, on first reveal. Everything else is a state change. No section-entrance
animation repeated down the page, and all of it collapses under
`prefers-reduced-motion: reduce`.

## Do's and Don'ts

- **Do** put every food photo on a cream mat. **Don't** let teal or vermillion touch a bao.
- **Do** use `ink` for text on teal. **Don't** use cream on teal for anything readable — it is 2.48:1.
- **Do** use the delivered lockup image for the Latin wordmark. **Don't** set "CHUTA'S BAKERY" in a substitute font.
- **Do** build icons as the brand's own marks — seals, sign plates, lattice. **Don't** reach for lucide: `Croissant`, `Wheat`, `Leaf`, `Sparkles`, `Flower2`, `Cookie`, and `Coffee` were the old brand's voice. Functional UI glyphs (chevrons, close, menu, phone) may stay.
- **Do** keep corners at 2–4px. **Don't** use `rounded-2xl`, pill-shaped rectangles, or blurred color blobs.
- **Do** grain every teal ground. **Don't** drop the textured mascot onto flat teal — the seam shows.
- **Do** separate hierarchy by size and weight. **Don't** fade text with opacity; the primary customer is over 43.
- **Do** keep the four spec hexes exact. **Don't** eyedrop from the poster or mascot files.
- **Do** use simplified characters as delivered. **Don't** silently switch to traditional — that is an open question the owner has not answered.
- **Do** keep the value tagline ("ขนมมงคลสดใหม่ ทำมือ ไม่ใส่สารกันบูด") where a value claim belongs and the poster's product list ("ซาลาเปา ซิ่วท้อ ขนมตามเทศกาล") where a product list belongs. **Don't** swap them.

## Open questions

- The Latin wordmark's typeface is unidentified. Until it is named and licensed, the lockup stays an image.
- Simplified (`铺`) vs traditional (`舖`) for a Yaowarat/Teochew audience — the delivered assets use simplified.
- `brands/BRAND.md` §13 still describes the previous cream-led identity. This redesign was confirmed for the **website**; §13 governs print and social and was deliberately left alone.
