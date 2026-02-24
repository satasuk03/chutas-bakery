"use client";

import { Wheat, Heart, Leaf, Clock } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const values = [
  {
    icon: Heart,
    title: "ทำด้วยมือทุกชิ้น",
    desc: "ทุกชิ้นผ่านมือแม่ ไม่ใช้เครื่องจักร ด้วยความรักและความตั้งใจที่ส่งผ่านรสชาติ",
  },
  {
    icon: Clock,
    title: "สดใหม่ทุกวัน",
    desc: "ทำใหม่ทุกเช้าตั้งแต่ตีสี่ วัตถุดิบสดคุณภาพดี ไม่ค้างคืน ไม่แช่แข็ง",
  },
  {
    icon: Leaf,
    title: "ไม่ใส่สารกันเสีย",
    desc: "เพราะเราเชื่อว่าขนมดีต้องมาจากธรรมชาติ สะอาด ปลอดภัย อร่อยได้แบบโฮมเมด",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-14 md:py-20 px-4 bg-warm-beige relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -right-20 top-20 text-terracotta/5 rotate-12 pointer-events-none select-none">
        <Wheat className="size-[300px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn>
          <Wheat className="text-sage size-14 mx-auto mb-4" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-hand text-3xl md:text-4xl text-text-main mb-6">
            เราเชื่อว่าของดีต้องตั้งใจทำ ❤️
          </h2>
        </FadeIn>

        {/* Decorative divider */}
        <div className="w-24 h-1 bg-terracotta/30 mx-auto mb-8 rounded-full" />

        <FadeIn delay={0.2}>
          <p className="font-body text-xl text-text-main/80 leading-relaxed max-w-2xl mx-auto">
            ทำด้วยมือ สดใหม่ทุกวัน ไม่ใส่สารกันเสีย เพราะขนมทุกชิ้นควรมีความหมาย
            และส่งต่อความโชคดี
          </p>
        </FadeIn>

        {/* Value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-12">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <FadeIn key={v.title} delay={0.3 + i * 0.1}>
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-paper border border-surface hover:shadow-paper-hover hover:-translate-y-1 transition-all duration-300 flex sm:flex-col items-start sm:items-center gap-4 sm:gap-0 text-left sm:text-center">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-terracotta/10 flex items-center justify-center sm:mx-auto sm:mb-4">
                    <Icon className="size-5 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-hand text-lg md:text-xl text-text-main mb-0.5 sm:mb-2">{v.title}</h3>
                    <p className="font-body text-sm text-text-muted leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
