import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { StandingSign } from "@/components/brand/SignPlate";
import { LatticeRule } from "@/components/brand/Lattice";

/**
 * คุณชุตา's line, set as the largest reading type on the site.
 *
 * No photograph of the owner exists in the asset set and PRODUCT.md forbids
 * inventing one, so the mascot appears here as what she is — the brand's
 * illustrated character, labelled as such — and the quote carries the section.
 * Ink on paper is 15.30:1, which is why the pull quote can run this large
 * without a plate behind it.
 */
export default function FounderSection() {
  return (
    <section className="press-paper relative overflow-hidden">
      <LatticeRule height={20} />

      <div className="mx-auto max-w-[1100px] px-4 py-[clamp(56px,9vw,112px)] md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-[260px_1fr] md:gap-14">
          {/* The mascot, framed as a seal. */}
          <FadeIn direction="right" className="mx-auto w-[210px] md:mx-0 md:w-[260px]">
            <div className="relative">
              <div className="relative aspect-square w-full overflow-hidden rounded-full border-[6px] border-vermillion bg-cream-bright shadow-plate">
                <Image
                  src="/brand/mascot-head.webp"
                  alt="ภาพวาดมาสคอตของชุตาเบเกอรี่ หญิงสาวในกี่เพ้าแดงถือลูกท้อ"
                  fill
                  sizes="260px"
                  className="object-cover object-top"
                />
              </div>
              <StandingSign className="absolute -right-3 -bottom-8 text-[15px] md:-right-10 md:text-[17px]" />
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="font-display text-[15px] font-bold tracking-wide text-vermillion">
              จากเยาวราช ปี 2540 ถึงวันนี้
            </p>

            <blockquote className="mt-4">
              <p className="font-display text-[clamp(1.5rem,3.4vw,2.25rem)] leading-[1.35] font-semibold text-ink">
                <span aria-hidden className="text-vermillion">
                  “
                </span>
                แม่ลุกขึ้นแต่เช้ามืด นวดแป้ง นึ่งขนม ด้วยมือตัวเองทุกชิ้น
                ไม่มีสูตรลับ ไม่มีเครื่องจักร — มีแค่ความรักและความตั้งใจ
                <span aria-hidden className="text-vermillion">
                  ”
                </span>
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <span aria-hidden className="h-[2px] w-10 bg-vermillion" />
                <cite className="font-display text-[17px] font-bold text-ink not-italic">
                  คุณชุตา — เจ้าของร้าน
                </cite>
              </footer>
            </blockquote>

            <p className="press-umber mt-8 inline-block border-2 border-brass px-5 py-3 font-display text-[19px] font-bold text-paper shadow-plate">
              ขนมเราไหว้ละเฮง!
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
