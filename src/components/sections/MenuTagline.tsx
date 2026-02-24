"use client";

import { Heart, Phone } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export default function MenuTagline() {
  return (
    <section className="py-14 md:py-20 px-4 bg-warm-beige relative overflow-hidden">
      {/* Soft decorative background */}
      <div className="pointer-events-none absolute top-0 left-0 w-[400px] h-[400px] bg-terracotta/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-xl mx-auto text-center relative z-10">
        <FadeIn>
          <Heart className="text-terracotta size-10 mb-4 mx-auto" fill="currentColor" fillOpacity={0.15} />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-hand text-3xl md:text-4xl text-text-main mb-3">
            ทำด้วยรัก ทำด้วยมือ ทำด้วยใจ
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-body text-text-muted mb-8 leading-relaxed">
            อยากสั่งขนมมงคลสำหรับโอกาสพิเศษ? โทรหาเราได้เลยค่ะ
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a
            href="tel:0645492982"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-terracotta px-8 py-3.5 font-hand font-bold text-lg text-white shadow-lg hover:bg-terracotta/90 hover:shadow-terracotta/30 hover:-translate-y-0.5 transition-all"
          >
            <Phone className="size-5" />
            <span>โทรสั่งขนม 064-549-2982</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
