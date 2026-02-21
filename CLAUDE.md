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

Custom theme tokens defined in `src/app/globals.css`:

- **Brand colors:** burgundy `#800020`, cream `#FFFDD0`, gold `#D4AF37`, terracotta `#C86B5D`
- **Fonts:** `--font-hand` (Mali, decorative), `--font-body` (Quicksand), `--font-display` (Sarabun, Thai)
- **Path alias:** `@/*` maps to `src/*`

## Brand Context

Brand docs in `brands/` are the source of truth for tone, colors, and messaging. Key principles:
- Brand essence: "ส่งต่อความโชคดี ด้วยรสมือแม่" (Delivering luck with mom's touch)
- Warm, handcrafted aesthetic — no preservatives, homemade quality
- Two product lines: "The Auspicious Series" (traditional) and "Mom's Signature Bakery" (western)
