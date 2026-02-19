import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-auto md:aspect-video flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <Image
        src="/peach-hero.webp"
        alt="Peach buns stacked on a wooden board"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-black/30" />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-warm-beige via-transparent to-transparent z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
        {/* Welcome badge */}
        <div className="inline-block mb-4 px-4 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-surface shadow-sm transform -rotate-2">
          <span className="font-hand text-terracotta text-lg">
            ยินดีต้อนรับสู่ครัวเล็กๆ ของเรา
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-hand text-5xl md:text-7xl text-white drop-shadow-md mb-6 leading-tight">
          ทำด้วยใจ <br className="md:hidden" />
          ส่งต่อความมงคล
        </h1>

        {/* Subheadline */}
        <p className="font-body text-xl md:text-2xl text-white/90 drop-shadow-md mb-10 max-w-2xl mx-auto font-medium">
          ขนมโฮมเมด เสริมความมงคล
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-terracotta hover:bg-[#B55B4D] text-white px-8 py-4 rounded-full font-hand text-xl shadow-paper hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <span>ดูเมนูวันนี้</span>
          <ArrowRight className="size-5" />
        </a>
      </div>
    </section>
  );
}
