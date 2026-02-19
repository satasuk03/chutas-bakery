export default function FounderSection() {
  return (
    <section className="py-20 px-4 bg-white border-y border-surface">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Founder image placeholder */}
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
          <div className="absolute inset-0 bg-sage/20 rounded-full transform rotate-6 scale-105" />
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-surface shadow-paper relative z-10 bg-gradient-to-br from-terracotta/20 to-warm-beige flex items-center justify-center">
            <span className="font-hand text-6xl text-terracotta">ช</span>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white px-4 py-1 rounded-lg border border-surface shadow-sm z-20 transform -rotate-3">
            <span className="font-hand text-terracotta text-lg">ชูตา (Owner)</span>
          </div>
        </div>

        {/* Quote content */}
        <div className="flex-1 text-center md:text-left">
          <span className="text-6xl text-sage/40 font-serif leading-none">&ldquo;</span>

          {/* Placeholder until mom's story is ready */}
          <h3 className="font-hand text-2xl md:text-3xl text-text-main leading-relaxed -mt-6 mb-4">
            เรื่องราวของแม่จะมาเร็วๆ นี้...
          </h3>
          <p className="font-body text-text-muted leading-relaxed mb-6 italic">
            กำลังรวบรวมเรื่องราวความทรงจำอันอบอุ่น จากครัวเล็กๆ ที่เต็มไปด้วยความรักและไอความหอมของขนมปัง
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="h-px bg-text-muted/30 w-12" />
            <p className="font-body text-text-muted italic">อบด้วยใจทุกวัน</p>
          </div>
        </div>
      </div>
    </section>
  );
}
