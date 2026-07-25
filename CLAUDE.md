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
Rebranded 2026-07-25 to the owner-supplied identity ("The Shanghai Print Shop").

- **Brand colors (binding, owner-specified):** teal `#5d9d8e` (ground), cream `#f4e2c7`
  (plates + reading surface), vermillion `#c41f14` (seals, primary action), pine `#1b7257`
  (sign frames, dark ground). Derived: `teal-deep`, `pine-deep`, `cream-bright`,
  `vermillion-deep`, `ink` `#0d2a22`.
  - **Never eyedrop these from `public/brand/*`** — the art is halftoned and samples off-spec.
- **The rule the whole palette is arranged around:** cream on teal is **2.48:1** and fails at
  every size. Text on teal is `ink`. Cream text lives on pine or vermillion.
- **Food always sits on cream** (`PhotoMat`); teal and vermillion never touch a bao.
- **Fonts:** `--font-display` (Prompt, all headings/labels), `--font-body` (Sarabun, prose),
  `--font-seal` (Noto Sans SC Seal — a self-hosted 15-glyph subset in `public/fonts/`, for
  Chinese seals only). Mali is gone.
- **The Latin wordmark is an image** (`/brand/lockup.webp`). Its typeface is unidentified —
  do not set "CHUTA'S BAKERY" in a substitute font.
- **Shape:** rectangles (2–4px) and circles, nothing between. The Tailwind radius scale is
  redefined so a stray `rounded-2xl` still renders square.
- **Brand primitives** live in `src/components/brand/`: `Seal`, `BaoziSeal`, `HangingSign`,
  `StandingSign`, `Plate`, `LatticeRule`, `LatticePanel`, `PhotoMat`, `BrandMark`, `Lockup`.
  Use these instead of lucide icons for anything decorative; lucide is for functional glyphs
  only (chevron, close, menu, phone, arrow).
- **Texture:** every ground uses `press-teal` / `press-cream` / `press-pine` /
  `press-teal-deep`, never a bare `bg-*`. The halftone is what makes the flat CSS and the
  printed mascot read as one material.
- **Path alias:** `@/*` maps to `src/*`

Verify UI changes with `node ~/.claude/skills/impeccable/scripts/detect.mjs --json <files>`.

## Brand Context

`PRODUCT.md` holds product truth; `DESIGN.md` holds visual rules. The vault at
`~/Desktop/Obsidian/projects/chutasbakery/` is upstream of both — `2026-07-25-brand-redesign.md`
is the current visual direction, and `BRAND.md` §13 still describes the *previous* cream-led
identity (it governs print and social, and was deliberately not rewritten).

- Brand essence: "ส่งต่อความโชคดี ด้วยรสมือแม่" (Delivering luck with mom's touch)
- Primary customers are women aged 43–58 — body copy ≥17px at ≥4.5:1, and **never** fade text
  with opacity to make it secondary. Use size and weight.
- Chinese naming (new in this rebrand): 楚塔 (shop name), 楚塔包子铺, 香港包子, 福. Simplified
  characters, as delivered. Chinese is decorative in a Thai page: `aria-hidden` with a Thai
  label nearby.
- Keep the value tagline ("ขนมมงคลสดใหม่ ทำมือ ไม่ใส่สารกันบูด") and the poster's product
  list ("ซาลาเปา ซิ่วท้อ ขนมตามเทศกาล") in their own roles — they are not interchangeable.
- Do not invent reviews, sales figures, order counts, awards, or photos of คุณชุตา.
