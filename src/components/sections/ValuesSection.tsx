import { FadeIn } from "@/components/ui/fade-in";
import { HangingSign } from "@/components/brand/SignPlate";

/**
 * Three principles as one sign board, not three cards.
 *
 * A grid of identical icon-heading-text cards was the previous build's page
 * structure and is the single most templated arrangement available. Here the
 * three values are columns of one continuous board divided by brass rules —
 * one object screwed to the wall, the way a shop lists what it stands for.
 *
 * Ground is cream, not umber. This started as the page's dark band, and the
 * owner's review (2026-07-25) rejected it: the full-width dark field read as
 * heavy. Depth now comes from a value step instead of a colour change — the
 * section sits on cream and the board is lifted to paper, so the board still
 * reads as one object screwed to the wall, carried by its brass frame and hard
 * offset rather than by a dark ground. Ink on paper is 15.30:1.
 */
const values = [
  {
    seal: "มือ",
    title: "ทำด้วยมือทุกชิ้น",
    desc: "ทุกชิ้นผ่านมือแม่ ไม่ใช้เครื่องจักร ด้วยความรักและความตั้งใจที่ส่งผ่านรสชาติ",
  },
  {
    seal: "สด",
    title: "สดใหม่ทุกวัน",
    desc: "ทำใหม่ทุกเช้าตั้งแต่ตีสี่ วัตถุดิบสดคุณภาพดี ไม่ค้างคืน ไม่แช่แข็ง",
  },
  {
    seal: "ปลอด",
    title: "ไม่ใส่สารกันเสีย",
    desc: "เพราะเราเชื่อว่าขนมดีต้องมาจากธรรมชาติ สะอาด ปลอดภัย อร่อยได้แบบโฮมเมด",
  },
];

export default function ValuesSection() {
  return (
    <section className="press-cream px-4 py-[clamp(56px,9vw,112px)] md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center">
          <FadeIn>
            <HangingSign>
              <h2 className="font-display text-[clamp(1.5rem,3.4vw,2.25rem)] leading-tight font-bold text-vermillion">
                เราเชื่อว่าของดีต้องตั้งใจทำ
              </h2>
            </HangingSign>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="mx-auto mt-10 max-w-[54ch] font-body text-ink">
              ทำด้วยมือ สดใหม่ทุกวัน ไม่ใส่สารกันเสีย
              เพราะขนมทุกชิ้นควรมีความหมาย และส่งต่อความโชคดี
            </p>
          </FadeIn>
        </div>

        {/* One board, three columns. */}
        <FadeIn delay={0.16}>
          <div className="press-paper mt-12 grid grid-cols-1 border-2 border-brass shadow-plate md:mt-14 md:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={
                  i === 0
                    ? "px-6 py-7 md:px-7"
                    : "border-t-2 border-brass px-6 py-7 md:border-t-0 md:border-l-2 md:px-7"
                }
              >
                <span
                  aria-hidden
                  className="mb-4 inline-flex size-14 items-center justify-center rounded-full border-2 border-brass bg-vermillion font-display text-[15px] leading-none font-bold text-paper shadow-seal"
                >
                  {v.seal}
                </span>
                <h3 className="font-display text-[19px] leading-snug font-bold text-ink md:text-[21px]">
                  {v.title}
                </h3>
                <p className="mt-2 font-body text-ink">{v.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
