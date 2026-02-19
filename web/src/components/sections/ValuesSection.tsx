import { Wheat } from "lucide-react";

export default function ValuesSection() {
  return (
    <section className="py-20 px-4 bg-warm-beige relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -right-20 top-20 text-terracotta/5 rotate-12 pointer-events-none select-none">
        <Wheat className="size-[300px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Wheat className="text-sage size-14 mx-auto mb-4" />

        <h2 className="font-hand text-3xl md:text-4xl text-text-main mb-6">
          เราเชื่อว่าของดีต้องตั้งใจทำ
        </h2>

        {/* Decorative divider */}
        <div className="w-24 h-1 bg-terracotta/30 mx-auto mb-8 rounded-full" />

        <p className="font-body text-lg text-text-main/80 leading-relaxed max-w-2xl mx-auto">
          ที่ Chuta&apos;s Bakery ขนมทุกชิ้นทำด้วยมือ ด้วยใจ สดใหม่ทุกวัน
          ไม่ใส่สารกันเสีย เพราะ &ldquo;ของไหว้เจ้า&rdquo; และ
          &ldquo;ของฝาก&rdquo; ที่ดีต้องมาจากคนทำจริงๆ ไม่ใช่สายการผลิต
          เราเชื่อมประเพณีจีนที่สืบทอดมายาวนานเข้ากับความละเมียดของขนมร่วมสมัย
          เพราะขนมทุกชิ้นควรมีความหมาย และส่งต่อความโชคดี
        </p>
      </div>
    </section>
  );
}
