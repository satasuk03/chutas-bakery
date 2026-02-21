import Image from "next/image";
import { ArrowRight, CheckCircle, Heart, Truck, Flower2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex items-center pUy-24 md:py-16 overflow-hidden px-4">
      {/* Background blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="mx-auto max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="order-2 md:order-1 flex flex-col gap-6 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex w-fit mx-auto md:mx-0 items-center gap-2 rounded-full border border-terracotta/25 bg-terracotta/8 px-4 py-1.5 font-hand text-sm text-terracotta">
            ✨ ไหว้แล้วเฮง!
          </div>

          {/* Main headline */}
          <h1 className="font-hand font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-text-main">
            เบเกอรี่<span className="text-terracotta">ชุตา</span>
          </h1>

          {/* Quote */}
          <p className="font-hand text-xl md:text-2xl text-terracotta font-medium italic">
            &ldquo;ซาลาเปา ซิ่วท้อ ฮวกก้วย&rdquo;
          </p>

          {/* Description */}
          <p className="font-body text-base md:text-lg text-text-muted leading-relaxed max-w-md mx-auto md:mx-0">
            พบกับขนมมงคลโฮมเมด ที่เราตั้งใจคัดสรรวัตถุดิบชั้นดี ทำสดใหม่ทุกวัน
            เพื่อช่วงเวลาพิเศษของคุณและคนที่คุณรัก
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-3.5 font-hand font-bold text-lg text-white shadow-lg hover:bg-terracotta/90 hover:shadow-terracotta/30 hover:-translate-y-0.5 transition-all"
            >
              <span>ดูรายการขนม</span>
              <ArrowRight className="size-5" />
            </a>
            <a
              href="https://m.me/chutasbakery"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-surface bg-white px-8 py-3.5 font-hand font-bold text-lg text-text-main hover:bg-warm-beige hover:-translate-y-0.5 transition-all shadow-sm"
            >
              ติดต่อสอบถาม
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 pt-4 text-sm font-body text-text-muted">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="size-4 text-terracotta" />
              <span>วัตถุดิบพรีเมียม</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Heart className="size-4 text-terracotta" />
              <span>ทำด้วยใจ</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="size-4 text-terracotta" />
              <span>ส่งทั่วไทย</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 relative flex justify-center px-6 md:px-0">
          <div className="relative w-full max-w-md aspect-4/5 md:aspect-square">
            {/* Pulsing background */}
            <div className="absolute inset-0 bg-terracotta/15 rounded-full scale-90 animate-pulse" />

            {/* Photo */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-8 border-white rotate-3 hover:rotate-0 transition-transform duration-700 z-10">
              <Image
                src="/peach-hero-crop.webp"
                alt="ขนมมงคลโฮมเมดจาก Chuta's Bakery"
                fill
                priority
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-cream/20 to-transparent mix-blend-overlay" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-4 md:-left-10 z-20 animate-[float_6s_ease-in-out_infinite]">
              <div className="bg-terracotta text-white p-5 rounded-full w-24 h-24 flex flex-col items-center justify-center text-center shadow-xl border-4 border-dashed border-white/30">
                <span className="font-hand font-bold text-xl leading-none">
                  100%
                </span>
                <span className="font-body text-[10px] mt-0.5 leading-tight">
                  Homemade
                </span>
              </div>
            </div>

            {/* Decorative flower icon */}
            <div className="absolute -top-4 right-8 z-20">
              <Flower2 className="size-12 text-terracotta drop-shadow-lg rotate-12 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
