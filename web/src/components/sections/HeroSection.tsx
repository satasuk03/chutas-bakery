import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Warm bakery gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#F5EFE6] via-[#E8D5C4] to-[#C86B5D]/60" />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #800020 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D4AF37 0%, transparent 50%)",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
        {/* Welcome badge */}
        <div className="inline-block mb-4 px-4 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-surface shadow-sm transform -rotate-2">
          <span className="font-hand text-terracotta text-lg">
            ยินดีต้อนรับสู่ครัวเล็กๆ ของเรา
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-hand text-5xl md:text-7xl text-text-main drop-shadow-sm mb-6 leading-tight">
          อบด้วยใจ{" "}
          <br className="md:hidden" />
          ในครัวบ้านเรา
        </h1>

        {/* Subheadline */}
        <p className="font-body text-xl md:text-2xl text-text-main/80 drop-shadow-sm mb-10 max-w-2xl mx-auto font-medium">
          ขนมปังโฮมเมด กลิ่นหอมกรุ่นจากเตาทุกเช้า
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-terracotta hover:bg-[#B55B4D] text-white px-8 py-4 rounded-full font-hand text-xl shadow-paper hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <span>ดูตู้กับข้าววันนี้</span>
          <ArrowRight className="size-5" />
        </a>
      </div>
    </section>
  );
}
