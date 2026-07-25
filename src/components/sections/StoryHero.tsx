import { FadeIn } from "@/components/ui/fade-in";
import { HangingSign } from "@/components/brand/SignPlate";
import { Seal } from "@/components/brand/Seal";

export default function StoryHero() {
  return (
    <section className="press-cream relative overflow-hidden px-4 py-[clamp(48px,7vw,88px)] md:px-6">
      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
        <FadeIn>
          <HangingSign sway>
            <h1 className="font-display text-[clamp(1.85rem,5vw,3rem)] leading-none font-bold text-vermillion">
              เรื่องราวของเรา
            </h1>
          </HangingSign>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="press-paper frame-brass mt-10 inline-block max-w-[46ch] px-6 py-4 font-body text-ink shadow-plate">
            เรื่องเล่า ความตั้งใจ และเบื้องหลังขนมทุกชิ้นจากครัวของเรา
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <Seal
            glyph="福"
            label="ฮก — โชคลาภ"
            className="mt-8 size-14 text-[26px]"
          />
        </FadeIn>
      </div>
    </section>
  );
}
