---
name: Chuta's Bakery
description: A Yaowarat shopfront in vermillion and smoked brass — cream-white paper grounds, a deep-lacquer-red navbar, brass-framed enamel plates, and vermillion seals.
colors:
  paper: "#faf5ea"
  cream: "#f2e7d2"
  cream-bright: "#fdf9f1"
  vermillion: "#b8281a"
  vermillion-deep: "#8d1e13"
  lacquer: "#a81a10"
  lacquer-deep: "#6f140d"
  brass: "#a8843c"
  brass-text: "#7a5f26"
  ink: "#241d16"
  umber: "#2e2419"
typography:
  display-xl:
    fontFamily: "Prompt, sans-serif"
    fontSize: "clamp(3.5rem, 14vw, 6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  display:
    fontFamily: "Prompt, sans-serif"
    fontSize: "clamp(2.6rem, 8.6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 0.98
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
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.vermillion-deep}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    borderColor: "{colors.brass}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "14px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.cream-bright}"
    textColor: "{colors.ink}"
  navbar:
    backgroundColor: "{colors.lacquer}"
    textColor: "{colors.paper}"
    borderBottomColor: "{colors.lacquer-deep}"
    hairlineColor: "{colors.brass}"
    typography: "{typography.label}"
  button-cta-on-lacquer:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.vermillion}"
    borderColor: "{colors.brass}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "8px 16px"
  sign-plate:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.vermillion}"
    borderColor: "{colors.brass}"
    keylineColor: "{colors.vermillion}"
    rounded: "{rounded.sign}"
    padding: "16px 20px"
  seal-fu:
    backgroundColor: "{colors.vermillion}"
    textColor: "{colors.paper}"
    borderColor: "{colors.paper}"
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
    innerBackgroundColor: "{colors.cream-bright}"
    textColor: "{colors.ink}"
    borderColor: "{colors.brass}"
    keylineColor: "{colors.vermillion}"
    rounded: "{rounded.plate}"
    padding: "12px"
  card-menu:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    borderColor: "{colors.brass}"
    rounded: "{rounded.plate}"
    padding: "12px 12px 20px"
  band-dark:
    backgroundColor: "{colors.umber}"
    textColor: "{colors.paper}"
    borderColor: "{colors.brass}"
---

# Design System: Chuta's Bakery

## Overview

**North star: a Yaowarat shopfront, in ชาด–ทองรมควัน — vermillion and smoked brass.** Every
surface behaves like a sheet off a lithography press in a Chinese bakery quarter: cream-white
paper as the ground, enamel plates framed in brass and keylined in red screwed onto it,
vermillion seals stamped last, and a deep-lacquer-red sign bar across the top.

The identity is fixed by assets the owner delivered on 2026-07-25: an EN logo lockup, a Thai
poster, and a cutout guofeng mascot in a red cheongsam holding a longevity peach. Those files
are the quality bar. This system exists so screens the assets don't cover still look like they
came off the same press.

Mood: auspicious, printed, confident, slightly theatrical — never dainty, never "artisanal
bakery." Softness was the previous brand's whole idea, so nothing here is soft.

**This is revision 2 of the 2026-07-25 rebrand.** Revision 1 made jade-teal the dominant
ground, and the owner's review returned three findings that this revision answers:

1. *"เข้ามาไม่รู้ว่าขายอะไร"* — the first viewport showed the mascot and the shop's name and
   never said the word ซาลาเปา. The home hero now leads with the **product names as the H1**
   and **three real product photographs above the fold** at both breakpoints.
2. *"เว็บเขียวแล้ง"* — teal at ~55% of the page read arid. **Teal and pine are out of the
   palette entirely.** Cream-white paper is the ground; red and brass carry the warmth.
3. *"โชว์ความมงคลกว่านี้ ลด mascot ลง"* — brass is the ornament that delivers มงคล, applied as
   a double rule on every plate, and there is a dedicated **ขนมมงคลของเรา** section that says
   what each sweet actually means. The mascot is ~40% of her old size: a supporting figure.

Two commitments outrank taste:

1. **Brass never carries text.** See the table below — it is the measurement this palette is
   arranged around, and it is the one a rendered contrast audit cannot catch for you.
2. **Primary customers are women aged 43–58.** Print-shop drama never costs legibility. Body
   copy is ≥17px at ≥4.5:1, and hierarchy comes from size and weight, never opacity.

## Colors

Cream-white paper is the dominant ground at ~56% of the page. Vermillion is ~20% and owns
every action. Matte brass is ~14% and is ornament only. Warm cream is ~10%: plates and mats.

| Token | Hex | Role |
|---|---|---|
| `paper` | `#faf5ea` | **The dominant page ground (~56%).** Section bands, the body, plate interiors that must read as bright. |
| `cream` | `#f2e7d2` | Secondary surface: plates, cards, photo mats. One step down from paper so a plate reads as an object on it. |
| `cream-bright` | `#fdf9f1` | Inner field of a photo mat only — lifts pale bao off the mat. |
| `vermillion` | `#b8281a` | Brand red: actions, prices, seals, the meaning line. An accent, never a ground for prose. |
| `vermillion-deep` | `#8d1e13` | Hover / pressed states of vermillion. |
| `lacquer` | `#a81a10` | **The navbar/header ground, and nothing else.** |
| `lacquer-deep` | `#6f140d` | The bar's bottom border. |
| `brass` | `#a8843c` | **ORNAMENT ONLY.** Hairlines, frames, keylines, rules, rails, lattice, borders. |
| `brass-text` | `#7a5f26` | Brass when it must be a *word*: dates, tags, field labels, small metadata on a light ground. |
| `ink` | `#241d16` | Body and heading text on every light ground. |
| `umber` | `#2e2419` | The dark band ground: footer, values board. Also the hard offset in every shadow. |

### The contrast table this system is built around

Measured against the rendered page, not assumed. `!!` fails at every size.

```
                  paper    cream   cream-bright  lacquer   umber
ink               15.30    13.58      15.84       2.23!!   1.10!!
vermillion         5.75     5.11       5.96       1.19!!   2.43!!
vermillion-deep    8.30     7.36       8.59       1.21!!   1.68!!
brass              3.20!!   2.84!!     3.32!!     2.14!!   4.36!!   <- NEVER TEXT
brass-text         5.53     4.91       5.73       1.24!!   2.53!!
paper                 —     1.13!!     1.04!!     6.85    13.97
cream              1.13!!      —       1.17!!     6.08    12.39
```

### The four ground rules

1. **`paper` / `cream` / `cream-bright` ground → text is `ink`, `vermillion`,
   `vermillion-deep`, or `brass-text`.** These are the reading surfaces.
2. **`lacquer` ground → text is `paper` or `cream` only.** Never ink (2.23), never vermillion
   (1.19), never brass (2.14). Lacquer is the header and nothing else: as a section ground it
   would blow the red budget and put a vermillion CTA on a red field.
3. **`umber` ground → text is `paper` or `cream` only.** Never `brass-text` either — it is
   2.53 here.
4. **Vermillion is a seal and a button, not a ground for prose.** It carries 1–4 characters or
   one button label, and it never sits behind or beneath food.

### Why `brass` is never text — the load-bearing measurement

Brass is `3.20:1` on paper and `3.32:1` on cream-bright. Those numbers are the trap: a rendered
contrast audit that applies WCAG's large-text allowance (`≥24px`, or `≥18.66px` at weight 700)
will **pass** brass display type on a light ground. It is still unreadable for a 50-year-old
customer, which is the whole audience. So the rule is absolute rather than conditional:

- Brass is hairlines, frames, keylines, rules, rails, dividers, the lattice, and `--border`.
- When a brass-coloured *word* is needed on a light ground, it is `brass-text` (5.53 on paper).
- On `umber` or `lacquer`, text is `paper` or `cream` — brass-text does not rescue it there.
- `Lattice` paints `var(--color-brass)` into its SVG fills directly rather than inheriting a
  `text-brass` class, so an ornament never borrows the text channel to exist.

The gate is a grep, not the audit: `text-brass` (without `-text`) must have zero hits in `src/`.

**Food photography (binding, reconfirmed 2026-07-25 rev 2):** food always sits on `cream` with
a `cream-bright` inner field. **Red and dark grounds never touch a food photo.** With vermillion
now a fifth of the page this matters more than it did, not less — see `PhotoMat`.

No text anywhere uses opacity to become secondary. Secondary text is smaller or lighter in
weight, in a colour that passes on its own.

## Typography

Three families, each with one job.

- **Prompt** — all display, headline, title, label, and navigation. Owner-specified for Thai
  headlines. Weights 600/700; 800 only above 4rem.
- **Sarabun** — body copy only. A workhorse Thai face that stays legible at 17px for a 43–58
  year-old reader.
- **Noto Sans SC Seal** — Chinese characters on seals and sign plates only. Self-hosted as a
  **15-glyph subset** of Noto Sans SC (`楚塔包子铺香港福寿桃发糕月饼喜`), 3.7 KB per weight,
  declared under its own family name so it can never be reached for Thai or Latin.

**The Latin wordmark is an image, not type.** The lockup's "CHUTA'S BAKERY" is a heavy condensed
sans the owner has not named. Setting it in a substitute (Anton, Archivo Black, Oswald) puts a
near-miss next to the real lockup and reads as a brand error. Use `/brand/lockup.webp` — and
note that file has a **teal ground baked in**, so it must never be dropped onto a paper ground;
if it is used at all it goes inside a framed plate. The header uses the Thai `BrandMark`.

The ramp is twelve steps and no more; every literal size in the codebase is one of them. Fluid
steps (`display-xl` → `subhead`) are for headings; fixed steps (`numeral` → `meta`) are for UI
and prose. Body measure caps at 68ch. Thai needs air, so body line-height is 1.75 and display
never goes below 0.95.

The home H1 is the one display element with no plate behind it: `ink` on `paper` is 15.30:1, so
it can run at display scale with nothing under it, and that keeps red free for the actions.

## Layout

- Content column `max-width: 1200px`; reading column (story, product detail) `68ch`.
- Section rhythm `clamp(56px, 9vw, 112px)`, with more space above a heading than below it.
- **Grounds alternate as full-bleed bands.** Home: paper → umber → paper → cream → paper →
  umber. Menu: cream → paper → cream → umber. A band is edge-to-edge; there is no floating
  rounded container on a neutral page. The two umber bands are what stop a cream-white page
  draining out, and they keep the red budget for the navbar and the CTAs.
- **The header is measured, not derived: 60px at phone width, 68px from md up** (lacquer bar +
  2px `lacquer-deep` border + 2px brass hairline). `MenuSection`'s sticky filter bar offsets
  `top-[60px] md:top-[68px]` against those numbers. Re-measure the rendered output and update
  both whenever the bar's construction changes, or the active filter plate clips behind it.
- Home hero: type and the three photographs come before the figure in DOM order at every
  width, so a first-time visitor learns what the shop sells before meeting its mascot. The
  mascot sits in an explicit `300px` grid track (not `auto` — an `auto` track sized from a
  next/image is circular) and is bottom-aligned so she can never push the photos below the fold.
- Breakpoints follow Tailwind defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280).

## Elevation & Depth

Printed matter, not glass. Depth comes from **hard offset plus soft ambient**, never a
zero-offset glow. The hard offset is `umber` — the darkest ink on the sheet.

- `plate` — `3px 3px 0 #2e2419, 0 6px 18px rgba(46,36,25,.18)`. An enamel plate screwed to the
  paper wall. The hard offset is the plate's thickness.
- `plate-lifted` — `5px 5px 0 #2e2419, 0 12px 28px rgba(46,36,25,.24)`. Hover.
- `sign` / `sign-lifted` — the same construction at 2px/4px, for buttons and smaller plates.
- `seal` — inset, so a stamped seal sits *into* the paper rather than above it.
- **Registration offset** (`.reg-offset`) is the world's native device: display type may carry
  a vermillion copy of itself offset ~4px, exactly as a misregistered two-colour press plate
  would. It is not a drop shadow and never applies to body text.
- **Texture** is `press-paper` / `press-cream` / `press-lacquer` / `press-umber`, applied as
  `background-image` **on the element itself, never a pseudo-element** — a `::after` overlay
  opens a stacking context that fights absolutely-positioned children (the mascot, the seals).
  `press-paper` and `press-cream` are reading surfaces and get **tooth only, no dot grid**: a
  halftone screen under 17px Thai body copy is noise. `press-lacquer` and `press-umber` keep
  the dot grid — it is what stops a saturated field looking like flat CSS next to the printed
  mascot. Umber's dots are a light brass dust laid on rather than a dark dot pressed in,
  because a multiplied dark dot vanishes on a ground that dark.

No `backdrop-filter`, no glass, no gradient mesh, and no gradients at all — the `ink-foot`
gradient of revision 1 existed to weight the foot of a full-bleed teal band and has been
deleted along with teal.

**Focus ring.** Two-tone, and it has to be: the grounds span light and dark, so no single
colour clears 3:1 against all of them. Vermillion is 1.19 on lacquer and 1.00 on a vermillion
button; brass is 3.20 on paper and 2.14 on lacquer. Ink and paper are 15.30 against each other
and at least one always clears, so the default is `outline: 3px ink` + an 8px paper glow, with
`.press-lacquer` and `.press-umber` descendant overrides swapping to a paper outline. The
outline is the load-bearing half because an outline is never clipped by `overflow: hidden`.
Do not put `.frame-brass` on a focusable element — `:focus-visible` owns the outline property
and would replace the keyline while focused; use the `Frame` component there instead.

## Shapes

The world is **rectangles and circles, nothing between.**

- Plates, signs, cards, buttons, inputs: `2px`, or `4px` for a large hanging sign.
- Seals: perfect circles.
- `rounded-xl`, `rounded-2xl`, `rounded-3xl`, and `rounded-full` on a rectangle are banned —
  they are the previous brand's signature and the strongest tell of a recoloured template. The
  Tailwind radius scale is itself redefined so a stray `rounded-2xl` still renders square.
- **The brass ornament device — the double rule.** A 2px `brass` outer frame with a 1px
  `vermillion` keyline inset ~4px, which is how an auspicious enamel plate is actually built.
  This is the single gesture that carries มงคล, and brass carries no text doing it. Two
  implementations, both in `src/components/brand/SignPlate.tsx`:
  - `.frame-brass` (globals.css) — border plus an inward `outline-offset: -6px`. One class,
    no DOM change, no padding change. For the many inline plate call sites. Not for focusables.
  - `<Frame>` — the same rule built from real DOM (`p-1` + an inset bordered child). For new
    call sites and anything focusable.
  On a `PhotoMat` the mat's own padding is the gap, so the brass frame plus the photo's
  vermillion keyline *are* the double rule and the photo needs no third line.
- Recurring forms drawn in the world's own grammar, never as icons: the **hanging sign** (plate
  + two hooks + top rail), the **round seal**, the **2×2 seal block**, the **brass lattice**.

## Components

**Header** — `press-lacquer` ground, 2px `lacquer-deep` bottom border, and a **2px brass
hairline directly under the bar**: that hairline is the detail that reads as an old Yaowarat
shopfront sign, because a painted board is finished with a metal edge. Wordmark and nav links
in `paper` (6.85:1); active nav item is a `paper` 2px underline plus bold, inactive is medium —
no opacity. The 楚塔 seal keeps its vermillion ground and gains a solid `paper` keyline, without
which it is 1.19:1 against the bar and dissolves.

**The phone CTA inverts on the bar.** A vermillion plate on lacquer is red-on-red, so the CTA
is a **`paper` plate with `vermillion` text and a `brass` border**. It becomes the brightest
object on the bar, which is the correct hierarchy for the one action the shop takes orders
through. 44px minimum target. The footer CTA uses the same inverted treatment on umber.

**Mobile sheet** — `press-umber`, not lacquer: a full-height red panel is far too much red for
a palette that budgets it at a fifth of the page. Cream/paper text, same inverted CTA.

**Button, primary** — vermillion plate, `paper` label (5.75), brass border, 2px radius, hard
umber offset. On press the plate translates into its own shadow. Minimum target 44px.

**Button, secondary** — cream or paper plate, `ink` label, 2px brass border, same offset.

**Home hero** — `press-paper`. Kicker in vermillion, a brass hairline, then the H1 naming the
**products** (`ซาลาเปา` / `ฮวกก้วย · ซิ่วท้อ`) in ink at display scale. The brand tagline sits on
a `.frame-brass` cream plate with 福 stamped on its corner. Two CTAs. Then three matted
photographs labelled ซาลาเปา / ฮวกก้วย / ซิ่วท้อ, all above the fold. The mascot is ~300px on
desktop, ~165px on phone, with 香港包子 stamped at her feet. The giant 楚塔 / `StandingSign` and
the `LatticePanel` are gone from this composition: the shop's name is asserted by the lacquer
navbar directly above it, and repeating it cost the fold space the photographs needed.

**ขนมมงคลของเรา** — the section that answers "โชว์ความมงคล". Three `PhotoMat` cards on paper,
each with its product seal (`发糕` / `寿桃` / `包子`), the sweet's name, a brass rule, and the
**auspicious meaning** set large in vermillion. Every line is sourced from that item's own
`longDescription` in `menu-items.json`. Where the data records no meaning (ซาลาเปาไส้หวาน) the
field is **relabelled to describe what the data does say** rather than filled with a meaning
the shop has never claimed — substituting a value tagline into a meaning slot is exactly the
swap this document forbids below.

**Values board** — `press-umber`, the page's first dark band. A cream `HangingSign` heading in
vermillion, `paper` body copy at 13.97:1, one continuous board divided by brass rules.

**Menu card** — a cream mat with a brass frame. Photo inset on `cream-bright` with a vermillion
keyline, Thai name in Prompt 700, price in Prompt 700 vermillion, and a product seal
(寿桃 / 发糕 / 包子) stamped in the corner. Badge grounds all take `paper` labels: vermillion
5.75, vermillion-deep 8.30, umber 13.97, and `brass-text` 5.53 — that last one is the only
place brass appears at label scale, and it appears as the *ground*, never as the word.

**Menu filter bar** — sticky, offset against the measured header height. The active plate
carries its own `bg-vermillion` class rather than relying on the framer-motion sibling overlay,
so its `paper` label can never be left sitting on a transparent background mid-animation.

**Sign plate** — cream ground, brass frame, vermillion keyline, vermillion Chinese characters
set vertically for the 楚塔包子铺 form, hooks on the top rail. Section headings, not decoration.

**Seal** — `福` reversed (vermillion ground, `paper` glyph and ring); `香港包子` positive (cream
ground, vermillion ring and glyph, 2×2). Both carry `aria-hidden` plus a Thai label in adjacent
text, because a screen reader announcing Chinese in a Thai page is noise.

**Calendar card** — the festival strip. `press-paper` tags with the brass double rule on a
cream band, hung from a brass rail, date in Prompt 700 at display scale. Past dates switch from
vermillion to `brass-text` (5.53) and gain a "ผ่านมาแล้ว" stamp — they are never dimmed with
opacity. `event.gradient` in `calendar-events.json` was replaced with a `tone` key in
revision 1, because leaving palette values in a data file survives a component-only pass.

**Motion — one authored moment: the press.** Plates arrive; seals stamp down (scale 1.12 → 1,
180ms) once, on first reveal. Everything else is a state change. No section-entrance animation
repeated down the page, and all of it collapses under `prefers-reduced-motion: reduce`. The
home hero's rotating product carousel is gone: a rotating photo means two of the three products
are invisible at any moment, which is the problem this revision exists to fix.

## Do's and Don'ts

- **Do** keep every food photo on a cream mat with a `cream-bright` field. **Don't** let
  vermillion, lacquer or umber touch a bao.
- **Do** use `brass` for hairlines, frames, keylines and rules. **Don't** ever set a word in
  `brass` — it is 3.20 on paper and would slip past a large-text check while still failing the
  reader. Use `brass-text` on light grounds, `paper`/`cream` on dark ones.
- **Do** keep `lacquer` to the header. **Don't** use it as a section ground.
- **Do** invert the CTA to a paper plate when it sits on lacquer or umber. **Don't** put a
  vermillion button on a red bar.
- **Do** name the products in the first viewport. **Don't** let the first viewport be the
  mascot and the shop's name — that is the review this revision answers.
- **Do** grain every ground with `press-*`. **Don't** drop the textured mascot onto a flat
  field, and **don't** put a dot grid under body copy.
- **Do** use the delivered lockup image for the Latin wordmark, inside a framed plate.
  **Don't** set "CHUTA'S BAKERY" in a substitute font, and don't put `lockup.webp` on a paper
  ground — it has a teal ground baked in.
- **Do** build icons as the brand's own marks — seals, sign plates, lattice. **Don't** reach
  for lucide: `Croissant`, `Wheat`, `Leaf`, `Sparkles`, `Flower2`, `Cookie`, and `Coffee` were
  the old brand's voice. Functional glyphs (chevrons, close, menu, phone, arrow) may stay.
- **Do** keep corners at 2–4px. **Don't** use `rounded-2xl`, pill-shaped rectangles, or blurred
  colour blobs.
- **Do** separate hierarchy by size and weight. **Don't** fade text with opacity; the primary
  customer is over 43.
- **Do** use simplified characters as delivered. **Don't** silently switch to traditional —
  that is an open question the owner has not answered.
- **Do** keep the value tagline ("ขนมมงคลสดใหม่ ทำมือ ไม่ใส่สารกันบูด") where a value claim
  belongs and the poster's product list ("ซาลาเปา ซิ่วท้อ ขนมตามเทศกาล") where a product list
  belongs. **Don't** swap them, and don't put either one in a "ความหมายมงคล" slot.

## Open questions

- The Latin wordmark's typeface is unidentified. Until it is named and licensed, the lockup
  stays an image — and `lockup.webp` still has revision 1's teal ground baked into the file, so
  a re-export on a paper ground is wanted.
- Simplified (`铺`) vs traditional (`舖`) for a Yaowarat/Teochew audience — the delivered assets
  use simplified.
- `brands/BRAND.md` §13 still describes the original cream-led identity. This colour direction
  was confirmed for the **website**; §13 governs print and social and was deliberately left
  alone. Note that revision 2 lands closer to §13's cream-and-red than revision 1 did, so the
  two may now be reconcilable — worth asking.
- `menu-items.json` records an auspicious meaning for ฮวกก้วย and ซิ่วท้อ only. ซาลาเปา,
  เซาปิ่ง and the savoury bao have none, so the มงคล section can only carry three cards
  honestly. If the owner supplies meanings, the section grows.
- `siutao` and `salapao-sweet` share `peach-bao.webp` in the data. The มงคล section pins its
  own images to avoid showing the same photograph twice; a distinct ซาลาเปาไส้หวาน shot would
  let it read from the data directly.
