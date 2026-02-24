"use client";

import { Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export default function FounderSection() {
  return (
    <section className="py-14 md:py-20 px-4 bg-background-light relative overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] select-none">
        <span className="font-hand text-[40vw] text-terracotta leading-none">ช</span>
      </div>

      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Founder image placeholder */}
        <FadeIn direction="right" className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-terracotta/20 rounded-full transform rotate-6 scale-105" />
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 bg-gradient-to-br from-terracotta/20 to-warm-beige flex items-center justify-center">
              <span className="font-hand text-6xl text-terracotta">ช</span>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white px-4 py-1.5 rounded-xl border border-surface shadow-paper z-20 transform -rotate-3">
              <span className="font-hand text-terracotta text-lg">
                ชุตา (Owner)
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Quote content */}
        <FadeIn delay={0.15} className="flex-1 text-center md:text-left">
          {/* Pull quote mark */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <Sparkles className="size-5 text-gold" />
            <div className="h-px bg-gold/40 flex-1 max-w-16" />
          </div>

          <h3 className="font-hand text-2xl md:text-3xl text-text-main leading-relaxed mb-4">
            จากเยาวราช ปี 2540 ถึงวันนี้
          </h3>

          <blockquote className="relative">
            <span className="absolute -top-4 -left-2 text-5xl text-terracotta/20 font-serif leading-none select-none">&ldquo;</span>
            <p className="font-body text-text-muted leading-relaxed mb-6 italic pl-4 border-l-2 border-terracotta/30">
              แม่ลุกขึ้นแต่เช้ามืด นวดแป้ง นึ่งขนม ด้วยมือตัวเองทุกชิ้น
              ไม่มีสูตรลับ ไม่มีเครื่องจักร — มีแค่ความรักและความตั้งใจ
            </p>
          </blockquote>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="h-px bg-gold/40 w-12" />
            <p className="font-hand text-terracotta text-lg">ขนมเราไหว้ละเฮง!</p>
            <Sparkles className="size-4 text-gold" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
