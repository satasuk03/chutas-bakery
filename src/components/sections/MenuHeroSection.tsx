"use client";

import { CakeSlice } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export default function MenuHeroSection() {
  return (
    <section className="py-16 px-4 relative overflow-hidden bg-warm-beige">
      {/* Background blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn>
          <CakeSlice className="text-sage size-14 mx-auto mb-4" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="font-hand text-4xl md:text-5xl text-text-main mb-6">
            เมนูของเรา
          </h1>
        </FadeIn>

        {/* Decorative divider */}
        <div className="w-24 h-1 bg-terracotta/30 mx-auto mb-8 rounded-full" />

        <FadeIn delay={0.2}>
          <p className="font-body text-xl text-text-main/80 leading-relaxed max-w-2xl mx-auto">
            เพราะเราอยากส่งต่อความอร่อยแบบโฮมเมดถึงมือคุณ
          </p>
          <p className="font-body text-sm text-text-main/80 leading-relaxed max-w-2xl mx-auto">
            มีบริการจัดส่งคิดตามระยะทาง หรือสามารถมารับเองได้ที่ร้านค่า
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
