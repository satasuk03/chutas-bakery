/**
 * ── DIRECTION CONTRACT ────────────────────────────────────────────────
 * THESIS: The first viewport answers one question — "ขายอะไร" — before it
 *   says anything about the shop. The word ซาลาเปา and three real product
 *   photographs are above the fold at both breakpoints. The previous
 *   version led with the mascot and the shop's own name, and a reviewing
 *   customer said she could not tell what was for sale.
 * OWN-WORLD: Cream-white paper with a press tooth; cream plates carrying
 *   the auspicious double rule (2px brass frame, 1px vermillion keyline);
 *   vermillion seals stamped into the paper; brass hairlines. Recognisable
 *   with all copy removed, and it shares no colour with the category
 *   default it replaced.
 * STORY: This is a Chinese auspicious bakery — ซาลาเปา, ฮวกก้วย, ซิ่วท้อ —
 *   handmade and fresh since Yaowarat 2540, and you order by calling.
 * FIRST VIEWPORT: Kicker in vermillion, a brass rule, then the product
 *   names as the H1 in ink on paper at 15.30:1 — display scale, maximum
 *   legibility, and it keeps red free for the actions. The brand tagline
 *   sits on a framed cream plate with 福 stamped on its corner. Two CTAs.
 *   Then three matted photographs, labelled ซาลาเปา / ฮวกก้วย / ซิ่วท้อ.
 *   The mascot stands beside the type at ~300px — a supporting figure, not
 *   the subject — with 香港包子 stamped at her feet.
 * FORM: Brief-pinned world (Yaowarat shopfront / guofeng print). The
 *   headline is type, not a plate: an opaque display plate here would
 *   compete with the photographs for the one thing this viewport must do.
 * NOT HERE: the giant 楚塔 / StandingSign and the pine LatticePanel. Pine
 *   left the palette, and the shop's name is now asserted by the lacquer
 *   navbar directly above this section — repeating it here cost the fold
 *   space the product photographs needed.
 * ─────────────────────────────────────────────────────────────────────
 */

import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { Seal, BaoziSeal } from "@/components/brand/Seal";
import { PhotoMat } from "@/components/brand/PhotoMat";

/**
 * Real product photography — product truth, kept from the previous build.
 * These three are the shop's three named sweets, in the order the poster
 * lists them. They are not a carousel any more: a rotating photo means two
 * of the three products are invisible at any moment, which is the problem
 * this rewrite exists to fix.
 */
const heroProducts = [
  {
    src: "/menu/bao-basket.webp",
    label: "ซาลาเปา",
    glyph: "包子",
    alt: "ซาลาเปาในตะกร้า จาก Chuta's Bakery",
  },
  {
    src: "/menu/fa-gao-bao.webp",
    label: "ฮวกก้วย",
    glyph: "发糕",
    alt: "ฮวกก้วยใหญ่ จาก Chuta's Bakery",
  },
  {
    src: "/menu/peach-bao.webp",
    label: "ซิ่วท้อ",
    glyph: "寿桃",
    alt: "ซิ่วท้อ จาก Chuta's Bakery",
  },
];

export default function HeroSection() {
  return (
    <section className="press-paper relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-4 pt-8 pb-[clamp(44px,7vw,76px)] md:px-6 md:pt-11">
        {/* An explicit 300px track, not `auto`: an `auto` track sized from a
            fill-less next/image is circular, and the fold budget for this
            section was worked out against a fixed figure width. */}
        <div className="grid gap-8 md:grid-cols-[1fr_300px] md:items-end md:gap-10">
          {/* ── The type, then the proof. Both before the figure at every
                width: a first-time visitor has to know what this shop sells
                before she meets its mascot. ── */}
          <div className="animate-plate">
            <p className="font-display text-[15px] font-bold tracking-wide text-vermillion md:text-[17px]">
              ร้านขนมจีนมงคล · เยาวราช 2540
            </p>

            {/* the brass hairline above the name — the ornament that carries
                มงคล in this palette, and it carries no text doing it */}
            <span
              aria-hidden
              className="mt-4 block h-[2px] w-[110px] bg-brass md:w-[140px]"
            />

            {/* The products, not the shop. Ink on paper is 15.30:1, which is
                why this can run at display scale with no plate behind it. */}
            <h1 className="mt-4 font-display text-[clamp(2.6rem,8.6vw,4.5rem)] leading-[0.98] font-bold tracking-[-0.025em] text-ink">
              ซาลาเปา
              <span className="mt-1 block text-[0.68em] leading-[1.05]">
                ฮวกก้วย · ซิ่วท้อ
              </span>
            </h1>

            {/* The brand's value tagline, verbatim — it is a commitment, not
                copy to be reworded. 福 is stamped onto the corner of the
                plate the way a seal is actually applied. */}
            <div className="relative mt-6 inline-block">
              <div className="frame-brass press-cream px-5 py-4 pl-9 shadow-plate md:pl-11">
                <p className="max-w-[34ch] font-display text-[19px] leading-snug font-semibold text-ink md:text-[21px]">
                  ขนมมงคลสดใหม่ ทำมือ ไม่ใส่สารกันบูด
                </p>
              </div>
              <Seal
                glyph="福"
                label="ฮก — โชคลาภ"
                stamp
                /* -left-3 at phone width, not -left-5: the plate's own left
                   edge is only 16px from the viewport, so a 20px overhang
                   clipped the seal against the screen edge. */
                className="absolute -top-4 -left-3 size-12 text-[21px] md:-top-5 md:-left-6 md:size-14 md:text-[26px]"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:0645492982"
                className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-brass bg-vermillion px-6 py-3 font-display text-[17px] font-bold text-paper shadow-plate transition-[transform,box-shadow,background-color] hover:bg-vermillion-deep hover:shadow-plate-lifted active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                <Phone className="size-5" aria-hidden />
                โทรสั่ง 064-549-2982
              </a>
              <a
                href="/menu"
                className="press-cream inline-flex min-h-12 items-center justify-center gap-2 border-2 border-brass px-6 py-3 font-display text-[17px] font-bold text-ink shadow-plate transition-[transform,box-shadow] hover:shadow-plate-lifted active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                ดูขนมทั้งหมด
                <ArrowRight className="size-5" aria-hidden />
              </a>
            </div>

            {/* ── The proof: three real photographs, in the first viewport.
                  Each sits on a cream mat with a brass frame and a
                  vermillion keyline — red and dark grounds never touch a
                  food photo (PRODUCT.md → Brand Commitments). ── */}
            <ul className="mt-8 grid grid-cols-3 gap-2.5 md:mt-9 md:gap-5">
              {heroProducts.map((p, i) => (
                <li key={p.src}>
                  <PhotoMat
                    src={p.src}
                    alt={p.alt}
                    priority={i < 2}
                    className="h-full p-1.5 md:p-2.5"
                    sizes="(min-width: 768px) 280px, 33vw"
                  >
                    <span className="flex items-baseline justify-between gap-1.5">
                      <span className="font-display text-[15px] leading-none font-bold text-ink md:text-[17px]">
                        {p.label}
                      </span>
                      <span
                        aria-hidden
                        className="font-seal text-[13px] leading-none text-vermillion md:text-[15px]"
                        style={{ fontWeight: 700 }}
                      >
                        {p.glyph}
                      </span>
                    </span>
                  </PhotoMat>
                </li>
              ))}
            </ul>
          </div>

          {/* ── The figure. Roughly 40% of the height she had: she is now a
                supporting character standing beside the type, and she is
                bottom-aligned so she can never push the photographs below
                the fold. ── */}
          <div className="relative mx-auto w-[46%] max-w-[190px] md:mx-0 md:w-full md:max-w-[300px]">
            <Image
              src="/brand/mascot.webp"
              alt="มาสคอตชุตาเบเกอรี่ หญิงสาวในกี่เพ้าแดงถือลูกท้อซิ่วท้อ"
              width={1000}
              height={1826}
              sizes="(min-width: 768px) 300px, 190px"
              className="block h-auto w-full scale-x-[-1]"
            />

            {/* 香港包子 — the shop's other sign, stamped at her feet */}
            <BaoziSeal
              stamp
              className="absolute right-0 -bottom-1 w-[72px] text-[13px] md:-right-3 md:bottom-3 md:w-[92px] md:text-[15px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
