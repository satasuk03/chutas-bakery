# Chuta's Bakery — fromchutas.com

Landing page for **Chuta's Bakery** (ชูตาเบเกอรี่), a homemade-bread bakery. Built with Next.js 16, TypeScript, Tailwind CSS v4, and shadcn/ui.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (Radix UI primitives) |
| Icons | lucide-react |
| Fonts | Mali · Quicksand · Sarabun (via `next/font/google`) |

---

## Project Structure

```
chutas-bakery/
├── requirements/               # Brand & design reference docs
│   ├── REQUIREMENT.md          # Brand strategy, color palette, typography
│   ├── example-landing.html    # Design reference (HTML prototype)
│   ├── example-menu.html
│   └── example-story.html
└── web/                        # Next.js application
    └── src/
        ├── app/
        │   ├── layout.tsx      # Root layout — fonts, metadata, lang="th"
        │   ├── page.tsx        # Page composition
        │   ├── globals.css     # Brand tokens, Tailwind theme
        │   ├── sitemap.ts      # Auto-generates /sitemap.xml
        │   └── robots.ts       # Auto-generates /robots.txt
        └── components/
            ├── layout/
            │   ├── Header.tsx  # Sticky nav + mobile Sheet drawer
            │   ├── Footer.tsx  # 4-column dark footer
            │   └── JsonLd.tsx  # LocalBusiness structured data (SEO)
            └── sections/
                ├── HeroSection.tsx
                ├── ValuesSection.tsx
                ├── ProductShowcase.tsx
                ├── FounderSection.tsx    # Placeholder — add mom's story here
                └── NewsletterSection.tsx
```

---

## Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `burgundy` | `#800020` | Primary brand |
| `terracotta` | `#C86B5D` | Accents, CTAs, hover states |
| `cream` | `#FFFDD0` | Warm backgrounds |
| `gold` | `#D4AF37` | Highlights |
| `sage` | `#8DA399` | Secondary accents |
| `warm-beige` | `#F5EFE6` | Section backgrounds |
| `background-light` | `#F9F6F0` | Page background |
| `background-dark` | `#221210` | Footer background |
| `text-main` | `#4A4238` | Body text |
| `text-muted` | `#8C867D` | Secondary text |

All tokens are available as Tailwind utilities: `bg-terracotta`, `text-sage`, `border-surface`, etc.

---

## Getting Started

```bash
cd web
npm install
npm run dev
# → http://localhost:3000
```

Other commands:

```bash
npm run build   # production build
npm run start   # serve production build locally
npm run lint    # ESLint
```

---

## SEO Setup

The following are already wired up:

- **Metadata** — title template, description, Open Graph (Facebook / LINE preview), Twitter card, canonical URL
- **`/sitemap.xml`** — auto-generated via `app/sitemap.ts`
- **`/robots.txt`** — auto-generated via `app/robots.ts`
- **JSON-LD** — `Bakery` + `LocalBusiness` schema for Google Knowledge Panel and Maps

### Things still needed

1. **`public/og-image.jpg`** — 1200 × 630 px product photo used for social sharing previews
2. **`JsonLd.tsx`** — fill in the real address, phone number, GPS coordinates, and social media URLs
3. **Google Search Console** — after deploying, submit `https://fromchutas.com/sitemap.xml`
4. **Google Business Profile** — register at [business.google.com](https://business.google.com) for Google Maps visibility

---

## Content TODOs

- **Founder / Mom's Story** (`FounderSection.tsx`) — replace the placeholder with the real story and a photo
- **Product photos** — swap the gradient placeholders in `ProductShowcase.tsx` with `next/image` using real product shots
- **Social links** — update Facebook / Instagram URLs in `Footer.tsx` and `JsonLd.tsx`
- **Phone & address** — fill in `JsonLd.tsx`

---

## Deployment

The app is a standard Next.js static-compatible build. Deploy to any Node.js host (Vercel, Railway, Render) or export as static HTML.

```bash
# Vercel (recommended — zero config)
npx vercel

# Or build and deploy the .next/ folder to your host
npm run build
```
