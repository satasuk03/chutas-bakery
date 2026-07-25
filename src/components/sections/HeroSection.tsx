"use client";

/**
 * ── DIRECTION CONTRACT ────────────────────────────────────────────────
 * THESIS: The first viewport is a printed poster, not a hero section. It
 *   refuses the category default this replaced — centered script headline,
 *   rounded photo card, blurred terracotta blob.
 * OWN-WORLD: Halftoned jade-teal ground; cream enamel plates with pine
 *   frames and hard 3px offsets; vermillion seals stamped into the paper;
 *   Chinese sign type; tram lattice. Recognizable with all copy removed.
 * STORY: This is a Chinese auspicious bakery with a real person behind it;
 *   the sweets are handmade and fresh; you order by calling.
 * FIRST VIEWPORT: Mascot bleeds off the bottom-right, oversized vermillion
 *   楚塔 behind her, lattice further back. Left: a teal-deep press plate
 *   carrying the display headline, a cream sign plate with the product line
 *   and the value tagline, then the phone CTA. 福 stamped top-left,
 *   香港包子 bottom-right. A real photo of the bao is pasted on a cream mat
 *   across the mascot's skirt.
 * FORM: Brief-pinned world (1930s Shanghai / guofeng poster) — no concept
 *   roll. Staging: "poster plate, landscape", confirmed by the user.
 * ─────────────────────────────────────────────────────────────────────
 */

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { Seal, BaoziSeal } from "@/components/brand/Seal";
import { LatticePanel } from "@/components/brand/Lattice";
import { StandingSign } from "@/components/brand/SignPlate";

/** Real product photography. Kept from the previous build — it is product truth. */
const heroImages = [
  { src: "/menu/bao-basket.webp", alt: "ซาลาเปาในตะกร้า จาก Chuta's Bakery" },
  { src: "/menu/peach-bao.webp", alt: "ซิ่วท้อ จาก Chuta's Bakery" },
  { src: "/menu/fa-gao-bao.webp", alt: "ฮวกก้วยใหญ่ จาก Chuta's Bakery" },
  { src: "/menu/fa-gao-small-bao.webp", alt: "ฮวกก้วยเล็ก จาก Chuta's Bakery" },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4200);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="press-teal relative overflow-hidden">
      {/* Ink density at the foot of the sheet — the one gradient allowed.
          z-0, not above the content: the grid below is `relative` with no
          z-index, so it opens no stacking context and a z-30 overlay here
          painted a ~21% pine wash over the plates and the proof row,
          quietly pulling ink-on-teal from 4.87 down to about 4.15. This
          belongs in the ground, which is where it now sits. */}
      <div
        aria-hidden
        className="ink-foot pointer-events-none absolute inset-0 z-0"
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-8 px-4 pt-10 pb-0 md:min-h-[86vh] md:grid-cols-[1.05fr_1fr] md:gap-6 md:px-6 md:pt-12">
        {/* ── Left: the press plate.
            Text before figure at every width: a first-time visitor has to
            know what this shop is before they meet its mascot. ── */}
        <div className="animate-plate relative z-20 md:pb-16">
          {/* Cream on teal-deep is 4.08:1 — legal for display scale only,
              which is exactly what this is. Never reuse for body copy. */}
          <div className="press-teal-deep inline-block border-2 border-pine-deep px-5 py-4 shadow-plate md:px-8 md:py-7">
            <h1 className="reg-offset font-display text-[clamp(2.9rem,11vw,5.25rem)] leading-[0.95] font-bold tracking-[-0.025em] text-cream">
              ชุตา
              <br />
              เบเกอรี่
            </h1>
          </div>

          {/* The poster's product line + the brand's value tagline. These are
              different things and BRAND.md §12 keeps them separate. */}
          {/* 福 is stamped onto the corner of the plate, the way a seal is
              actually applied — not floated beside it as an icon. */}
          <div className="relative mt-5 inline-block">
            <div className="press-cream border-2 border-pine px-5 py-4 pl-9 shadow-plate md:pl-11">
              <p className="font-display text-[17px] leading-snug font-bold text-vermillion md:text-[19px]">
                ซาลาเปา · ซิ่วท้อ · ขนมตามเทศกาล
              </p>
              <p className="mt-1.5 max-w-[34ch] font-body text-ink">
                ขนมมงคลสดใหม่ ทำมือ ไม่ใส่สารกันบูด
              </p>
            </div>
            <Seal
              glyph="福"
              label="ฮก — โชคลาภ"
              stamp
              className="absolute -top-4 -left-5 size-12 text-[21px] md:-top-5 md:-left-6 md:size-14 md:text-[26px]"
            />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:0645492982"
              className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-cream/80 bg-vermillion px-6 py-3 font-display text-[17px] font-bold text-cream shadow-plate transition-[transform,box-shadow,background-color] hover:bg-vermillion-deep hover:shadow-plate-lifted active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              <Phone className="size-5" aria-hidden />
              โทรสั่ง 064-549-2982
            </a>
            <a
              href="/menu"
              className="press-cream inline-flex min-h-12 items-center justify-center gap-2 border-2 border-pine px-6 py-3 font-display text-[17px] font-bold text-ink shadow-plate transition-[transform,box-shadow] hover:shadow-plate-lifted active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              ดูรายการขนม
              <ArrowRight className="size-5" aria-hidden />
            </a>
          </div>

          {/* Proof, in ink on teal — 4.87:1 */}
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {["ทำมือทุกชิ้น", "สดใหม่ทุกวัน", "ไม่ใส่สารกันบูด"].map((t) => (
              <li
                key={t}
                className="font-display text-[15px] font-semibold text-ink"
              >
                <span aria-hidden className="mr-1.5 text-vermillion">
                  ✚
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: the figure ── */}
        <div className="relative min-h-[420px] self-end md:min-h-[86vh]">
          {/* tram scaffold, furthest back */}
          <LatticePanel className="absolute top-0 right-2 h-[62%] w-auto opacity-45 md:right-4 md:h-[68%]" />

          {/* 楚塔 as a sign hung on the scaffold, not as a giant glyph behind
              the figure.

              The delivered lockup does set 楚塔 huge in red behind the mascot,
              and that works because the lockup is square — the glyphs clear her
              silhouette on both sides. In a landscape viewport the same figure
              is the full height of the column and covers all but an edge of
              them, which reads as a stray red mark rather than the shop's name.
              So the hero takes the device from the *poster* instead, where 楚塔
              hangs on a cream plate against the green ironwork. */}
          <StandingSign
            glyphs="楚塔"
            label="ชุตา"
            className="animate-sway absolute top-0 right-1 z-20 text-[15px] md:right-6 md:text-[19px]"
          />

          {/* the mascot, bleeding off the bottom edge as the sketch had her */}
          <Image
            src="/brand/mascot.webp"
            alt="มาสคอตชุตาเบเกอรี่ หญิงสาวในกี่เพ้าแดงถือลูกท้อซิ่วท้อ"
            width={1000}
            height={1826}
            priority
            sizes="(min-width: 768px) 44vw, 80vw"
            className="relative z-10 mx-auto block h-auto w-[76%] max-w-[400px] translate-y-[2px] md:absolute md:right-[-2%] md:bottom-0 md:mx-0 md:w-[88%] md:max-w-none"
          />

          {/* a real photo of the sweets, pasted on a cream mat.
              Food never touches teal — this is the rule the mat exists for. */}
          <div className="press-cream absolute bottom-3 left-0 z-20 w-[42%] max-w-[190px] border-2 border-pine p-1.5 shadow-plate md:bottom-16 md:left-0 md:w-[38%] md:max-w-[220px] md:p-2">
            <div className="relative aspect-square w-full overflow-hidden border-[1.5px] border-vermillion/70 bg-cream-bright">
              {heroImages.map((img, i) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={i === 0}
                  sizes="220px"
                  className={`object-cover transition-opacity duration-700 ${
                    i === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between px-0.5 pt-2">
              <span className="font-display text-[13px] font-bold text-ink">
                ทำสดทุกเช้า
              </span>
              <span className="flex gap-1">
                {heroImages.map((img, i) => (
                  <button
                    key={img.src}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`ดูภาพขนมที่ ${i + 1}`}
                    aria-current={i === currentIndex}
                    className={
                      i === currentIndex
                        ? "size-2 bg-vermillion"
                        : "size-2 border border-pine bg-transparent"
                    }
                  />
                ))}
              </span>
            </div>
          </div>

          {/* 香港包子 — the shop's other sign, stamped bottom-right */}
          <BaoziSeal
            stamp
            className="absolute right-1 bottom-4 z-20 w-[76px] text-[13px] md:right-2 md:bottom-8 md:w-[104px] md:text-[17px]"
          />
        </div>
      </div>
    </section>
  );
}
