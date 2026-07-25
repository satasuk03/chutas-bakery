import { Phone } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { Seal } from "@/components/brand/Seal";

export default function MenuTagline() {
  return (
    <section className="press-cream relative overflow-hidden px-4 py-[clamp(56px,9vw,112px)] md:px-6">
      <div className="mx-auto max-w-[640px]">
        <FadeIn>
          <div className="relative">
            <div className="press-paper frame-brass px-6 py-8 text-center shadow-plate md:px-10 md:py-10">
              <p className="font-display text-[clamp(1.5rem,3.4vw,2.25rem)] leading-tight font-bold text-ink">
                ทำด้วยรัก ทำด้วยมือ ทำด้วยใจ
              </p>
              <p className="mx-auto mt-3 max-w-[42ch] font-body text-ink">
                อยากสั่งขนมมงคลสำหรับโอกาสพิเศษ? โทรหาเราได้เลยค่ะ
              </p>
              <a
                href="tel:0645492982"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-2.5 border-2 border-brass bg-vermillion px-7 py-3 font-display text-[17px] font-bold text-paper shadow-plate transition-[transform,box-shadow,background-color] hover:bg-vermillion-deep hover:shadow-plate-lifted active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                <Phone className="size-5" aria-hidden />
                โทรสั่งขนม 064-549-2982
              </a>
            </div>
            <Seal
              glyph="喜"
              label="ความยินดี"
              className="absolute -top-5 -left-5 size-14 text-[26px] md:-top-6 md:-left-6 md:size-16 md:text-[26px]"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
