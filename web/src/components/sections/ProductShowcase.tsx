import { Cookie, Coffee, Wheat } from "lucide-react";

const products = [
  {
    title: "ขนมปังอบใหม่",
    gradient: "from-[#F5EFE6] via-[#E8C99A] to-[#D4AF37]/60",
    icon: Wheat,
    href: "#",
  },
  {
    title: "ขนมหวาน",
    gradient: "from-[#F9EDE8] via-[#E8B4A8] to-[#C86B5D]/60",
    icon: Cookie,
    href: "#",
  },
  {
    title: "ของติดครัว",
    gradient: "from-[#EBF0EE] via-[#AECFC5] to-[#8DA399]/60",
    icon: Coffee,
    href: "#",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 px-4 max-w-[1280px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-hand text-3xl md:text-4xl text-text-main mb-2">
          เลือกอร่อยกับเมนูโปรด
        </h2>
        <p className="font-body text-text-muted">ปรุงสดใหม่ทุกวันเพื่อคุณ</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => {
          const Icon = product.icon;
          return (
            <a
              key={product.title}
              href={product.href}
              className="group block relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-paper hover:shadow-paper-hover transition-all duration-300 border-2 border-surface bg-white"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} group-hover:scale-105 transition-transform duration-700`}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />

              {/* Card label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl border border-surface shadow-sm transform group-hover:-translate-y-2 transition-transform duration-300">
                  <Icon className="text-terracotta size-10 mx-auto mb-2" />
                  <h3 className="font-hand text-2xl text-text-main">{product.title}</h3>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
