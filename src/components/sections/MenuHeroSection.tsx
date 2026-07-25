import { FadeIn } from "@/components/ui/fade-in";
import { HangingSign } from "@/components/brand/SignPlate";
import { BaoziSeal } from "@/components/brand/Seal";

export default function MenuHeroSection() {
  return (
    <section className="press-teal relative overflow-hidden px-4 py-[clamp(48px,7vw,88px)] md:px-6">
      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
        <FadeIn>
          <HangingSign sway>
            <h1 className="font-display text-[clamp(1.85rem,5vw,3rem)] leading-none font-bold text-vermillion">
              เมนูของเรา
            </h1>
          </HangingSign>
        </FadeIn>

        <FadeIn delay={0.08}>
          {/* The poster's product line belongs here — it is a product list. */}
          <p className="mt-10 font-display text-[19px] font-bold text-ink md:text-[21px]">
            ซาลาเปา · ซิ่วท้อ · ขนมตามเทศกาล
          </p>
          <p className="press-cream mt-5 inline-block border-2 border-pine px-5 py-3 font-body text-ink shadow-plate">
            มีบริการจัดส่งคิดตามระยะทาง หรือมารับเองได้ที่ร้านค่ะ
          </p>
        </FadeIn>

        <FadeIn delay={0.16}>
          <BaoziSeal className="mt-9 w-[100px] text-[17px]" stamp />
        </FadeIn>
      </div>
    </section>
  );
}
