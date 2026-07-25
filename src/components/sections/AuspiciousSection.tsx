import menuData from "@/data/menu-items.json";
import type { MenuData } from "@/types/menu";
import { FadeIn } from "@/components/ui/fade-in";
import { HangingSign } from "@/components/brand/SignPlate";
import { Seal, SEAL_GLYPHS } from "@/components/brand/Seal";
import { PhotoMat } from "@/components/brand/PhotoMat";

/**
 * "ขนมมงคลของเรา" — what each sweet *means*.
 *
 * This is the section that answers "โชว์ความมงคลกว่านี้". The rest of the
 * site says the sweets are auspicious; this one says what the auspice is,
 * which is the actual content a customer buying ของไหว้ is looking for.
 *
 * Every line below is sourced from that item's own `longDescription` in
 * `src/data/menu-items.json` — nothing here is invented. Where the data
 * records no auspicious meaning (ซาลาเปาไส้หวาน), the field is relabelled to
 * describe what the data does say rather than filled with a meaning the shop
 * has never claimed. Substituting a value tagline into a meaning slot is the
 * exact swap DESIGN.md and PRODUCT.md call out as not interchangeable.
 *
 * Ground is paper so the cream mats read as objects on it; food sits on cream
 * with a cream-bright field, which is binding (PRODUCT.md → Brand
 * Commitments).
 */
const { items } = menuData as MenuData;

type Meaning = {
  id: string;
  /** Product seal — the Chinese name of what the sweet actually is. */
  glyph: string;
  sealLabel: string;
  /**
   * Explicit, because `salapao-sweet` and `siutao` share `peach-bao.webp` in
   * the data and two identical photographs in one row of three would read as
   * a bug. The ซาลาเปา card uses the basket shot the hero gives it.
   */
  image: string;
  field: string;
  value: string;
  note: string;
  occasion?: string;
};

const MEANINGS: Meaning[] = [
  {
    id: "huakpao",
    glyph: SEAL_GLYPHS.faGao,
    sealLabel: "ฮวกก้วย",
    image: "/menu/fa-gao-bao.webp",
    field: "ความหมายมงคล",
    value: "ความเจริญรุ่งเรืองและโชคดี",
    note: "นึ่งจนฟูแตกบาน — ยิ่งแตกบานสวย ยิ่งเป็นสิริมงคล",
    occasion: "ไหว้เจ้า · ไหว้บรรพบุรุษ · ตรุษจีน · สารทจีน",
  },
  {
    id: "siutao",
    glyph: SEAL_GLYPHS.siuTao,
    sealLabel: "ซิ่วท้อ",
    image: "/menu/peach-bao.webp",
    field: "ความหมายมงคล",
    value: "ความอายุยืน และความโชคดี",
    note: "ขนมมงคลรูปลูกท้อ",
    occasion: "ไหว้เจ้า · ไหว้บรรพบุรุษ · งานวันเกิด",
  },
  {
    id: "salapao-sweet",
    glyph: SEAL_GLYPHS.baozi,
    sealLabel: "ซาลาเปา",
    image: "/menu/bao-basket.webp",
    field: "ทำอย่างไร",
    value: "เนื้อแป้งนุ่มฟู ไส้หลากหลายให้เลือก",
    note: "ทำสดใหม่ทุกวัน ไม่ใส่สารกันบูด",
  },
];

export default function AuspiciousSection() {
  const cards = MEANINGS.map((m) => ({
    ...m,
    item: items.find((i) => i.id === m.id),
  })).filter((c) => c.item);

  return (
    <section className="press-paper px-4 py-[clamp(56px,9vw,112px)] md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center">
          <FadeIn>
            <HangingSign>
              <h2 className="font-display text-[clamp(1.5rem,3.4vw,2.25rem)] leading-tight font-bold text-vermillion">
                ขนมมงคลของเรา
              </h2>
            </HangingSign>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="mx-auto mt-10 max-w-[52ch] font-body text-ink">
              ขนมไหว้แต่ละอย่างมีความหมายของตัวเอง
              เลือกให้ตรงกับสิ่งที่อยากขอ แล้วไหว้เสร็จก็กินได้ ไม่ต้องทิ้ง
            </p>
          </FadeIn>
        </div>

        <ul className="mt-12 grid gap-6 md:mt-14 md:grid-cols-3 lg:gap-7">
          {cards.map((c, i) => (
            <li key={c.id} className="h-full">
              <FadeIn delay={0.12 + i * 0.07} className="h-full">
                <div className="relative h-full">
                  <PhotoMat
                    src={c.image}
                    alt={c.item!.nameTh}
                    aspect="aspect-[4/3]"
                    className="h-full"
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 32vw, 90vw"
                  >
                    <div className="pt-1">
                      <h3 className="font-display text-[21px] leading-tight font-bold text-ink">
                        {c.item!.nameTh}
                      </h3>
                      <p className="mt-0.5 font-display text-[15px] font-semibold text-brass-text">
                        {c.item!.nameEn}
                      </p>

                      {/* The meaning, given the weight it deserves: a brass
                          rule, a small label, then the meaning itself set
                          large in vermillion. brass-text carries the label
                          because brass itself may never be a word. */}
                      <span
                        aria-hidden
                        className="mt-4 block h-[2px] w-14 bg-brass"
                      />
                      <p className="mt-3 font-display text-[13px] font-bold tracking-wide text-brass-text">
                        {c.field}
                      </p>
                      <p className="mt-1 font-display text-[19px] leading-snug font-bold text-vermillion">
                        {c.value}
                      </p>
                      <p className="mt-2 font-body text-ink">{c.note}</p>

                      {c.occasion && (
                        <p className="mt-3 border-t border-brass pt-3 font-display text-[15px] font-semibold text-ink">
                          {c.occasion}
                        </p>
                      )}
                    </div>
                  </PhotoMat>

                  {/* the product's own mark, stamped over the corner */}
                  <Seal
                    glyph={c.glyph}
                    label={c.sealLabel}
                    className="absolute -top-3 -right-3 size-14 text-[17px]"
                  />
                </div>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
