# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Chuta's Bakery (fromchuta.com) — a Thai bakery website for a family business specializing in traditional Chinese auspicious baked goods and homemade pastries. The site is primarily in Thai.

## Commands

- `npm run dev` — Start dev server on localhost:3000
- `npm run build` — Production build (static export to `out/`)
- `npm run lint` — Run ESLint
- No test framework is configured

## Tech Stack

- **Next.js 16** with App Router, static export (`output: "export"`)
- **React 19**, **TypeScript 5**
- **Tailwind CSS 4** (via `@tailwindcss/postcss`)
- **shadcn/ui** (New York style, Radix UI primitives, Lucide icons)
- **Deployment:** Cloudflare Workers serving static files from `out/`

## Architecture

Single-page marketing site using Next.js App Router:

- `src/app/` — App Router pages, layout, global CSS, SEO (sitemap, robots)
- `src/components/sections/` — Page sections rendered in order on the home page (Hero, Values, Calendar, Founder, Newsletter)
- `src/components/layout/` — Header (sticky nav with mobile Sheet menu), Footer, JsonLd (schema.org Bakery)
- `src/components/ui/` — shadcn/ui primitives (button, card, sheet, navigation-menu, input)
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `brands/` — Brand guidelines (`BRAND.md`), origin story (`STORY.md`), and visual requirements (`requirements/REQUIREMENT.md`)

## Design System

**Read `DESIGN.md` before touching UI.** It is the authority; this is the summary.
Rebranded 2026-07-25 to the owner-supplied identity; **colour direction revised (rev 2) to
"ชาด–ทองรมควัน" (Vermillion + Smoked Brass)** after the owner's review. Teal and pine are gone.

- **Palette.** Cream-white `paper` `#faf5ea` is the **dominant ground (~56%)**; `cream`
  `#f2e7d2` is plates and photo mats; `cream-bright` `#fdf9f1` is a photo mat's inner field.
  `vermillion` `#b8281a` (~20%) is every action, price and seal, with `vermillion-deep`
  `#8d1e13` for hover. `lacquer` `#a81a10` is **the navbar ground and nothing else**
  (`lacquer-deep` `#6f140d` is its bottom border). `brass` `#a8843c` (~14%) is **ornament
  only**; `brass-text` `#7a5f26` is brass when it must be a word. `ink` `#241d16` is text on
  light grounds; `umber` `#2e2419` is the dark band (footer, values board) and the hard shadow
  offset.
- **The rule the whole palette is arranged around: `brass` NEVER carries text, on any ground.**
  It is 3.20:1 on paper and 3.32:1 on cream-bright — high enough that a rendered contrast audit
  applying WCAG's large-text allowance will *pass* brass display type that is still unreadable
  for the 43–58 audience. Brass is hairlines, frames, keylines, rules, rails and `--border`.
  A brass-coloured *word* on a light ground is `brass-text`. **The gate is a grep, not the
  audit:** `grep -rnE "text-brass([^-]|$)" src/` must be empty.
- **On `lacquer` and `umber`, text is `paper` or `cream` only** — never ink, vermillion, brass
  or brass-text. **On `paper`/`cream`/`cream-bright`, text is `ink`, `vermillion`,
  `vermillion-deep` or `brass-text`.**
- **A CTA on lacquer or umber inverts:** paper plate, vermillion text, brass border. A
  vermillion button on the red bar is red-on-red.
- **Food always sits on `cream`** with a `cream-bright` field (`PhotoMat`); red and dark grounds
  never touch a bao.
- **The brass ornament device** — 2px `brass` frame + 1px `vermillion` keyline inset 4px — is
  what delivers มงคล. Use the `.frame-brass` utility, or `<Frame>` from `brand/SignPlate.tsx`
  on anything focusable (`:focus-visible` owns the outline and would eat the keyline).
- **The home hero must name the products.** H1 is `ซาลาเปา` / `ฮวกก้วย · ซิ่วท้อ` and three real
  product photos sit above the fold at both breakpoints. The mascot is a supporting figure
  (~300px desktop), not the subject. This is the owner review rev 2 answers.
- **Header height is measured, not derived: 60px phone / 68px md+.** `MenuSection`'s sticky
  filter bar offsets `top-[60px] md:top-[68px]`. Re-measure the built output if the bar changes.
- **Fonts:** `--font-display` (Prompt, all headings/labels), `--font-body` (Sarabun, prose),
  `--font-seal` (Noto Sans SC Seal — a self-hosted 15-glyph subset in `public/fonts/`, for
  Chinese seals only). Mali is gone.
- **The Latin wordmark is an image** (`/brand/lockup.webp`). Its typeface is unidentified — do
  not set "CHUTA'S BAKERY" in a substitute font. That file also has a **teal ground baked in**,
  so it must never sit on a paper ground; put it inside a framed plate or leave it out. The
  header uses the Thai `BrandMark`.
- **Shape:** rectangles (2–4px) and circles, nothing between. The Tailwind radius scale is
  redefined so a stray `rounded-2xl` still renders square.
- **Brand primitives** live in `src/components/brand/`: `Seal`, `BaoziSeal`, `Frame`,
  `HangingSign`, `StandingSign`, `Plate`, `LatticeRule`, `LatticePanel`, `PhotoMat`,
  `BrandMark`, `Lockup`. Use these instead of lucide icons for anything decorative; lucide is
  for functional glyphs only (chevron, close, menu, phone, arrow).
- **Texture:** every ground uses `press-paper` / `press-cream` / `press-lacquer` /
  `press-umber`, never a bare `bg-*`. `press-paper` and `press-cream` are reading surfaces and
  carry tooth only; the two saturated grounds keep the halftone dot grid, which is what makes
  flat CSS and the printed mascot read as one material.
- **Path alias:** `@/*` maps to `src/*`

Verify UI changes with `node ~/.claude/skills/impeccable/scripts/detect.mjs --json <files>`.

## Brand Context

`PRODUCT.md` holds product truth; `DESIGN.md` holds visual rules. The vault at
`~/Desktop/Obsidian/projects/chutasbakery/` is upstream of both — `2026-07-25-brand-redesign.md`
is the delivered identity, **revised on review to the "ชาด–ทองรมควัน" colour direction (see
DESIGN.md → Overview for the three findings that drove it)**. `BRAND.md` §13 still describes the
original cream-led identity; it governs print and social and was deliberately not rewritten.
Note the revision lands closer to §13 than the teal-led first pass did.

- Brand essence: "ส่งต่อความโชคดี ด้วยรสมือแม่" (Delivering luck with mom's touch)
- Primary customers are women aged 43–58 — body copy ≥17px at ≥4.5:1, and **never** fade text
  with opacity to make it secondary. Use size and weight.
- Chinese naming (new in this rebrand): 楚塔 (shop name), 楚塔包子铺, 香港包子, 福, plus the
  product seals 发糕 (ฮวกก้วย), 寿桃 (ซิ่วท้อ), 包子 (ซาลาเปา), 喜. Simplified characters, as
  delivered. Chinese is decorative in a Thai page: `aria-hidden` with a Thai label nearby.
- **Auspicious meanings come from the data, never from us.** `menu-items.json`
  `longDescription` records a meaning for ฮวกก้วย (ความเจริญรุ่งเรืองและโชคดี — ยิ่งแตกบานยิ่งเป็น
  สิริมงคล) and ซิ่วท้อ (อายุยืน) only. `AuspiciousSection` renders those and relabels the field
  for items with no recorded meaning. Do not invent one, and do not fill a "ความหมายมงคล" slot
  with a value tagline — those are not interchangeable.
- Keep the value tagline ("ขนมมงคลสดใหม่ ทำมือ ไม่ใส่สารกันบูด") and the poster's product
  list ("ซาลาเปา ซิ่วท้อ ขนมตามเทศกาล") in their own roles — they are not interchangeable.
- Do not invent reviews, sales figures, order counts, awards, or photos of คุณชุตา.
