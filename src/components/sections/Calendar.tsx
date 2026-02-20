"use client";

import { useRef, useEffect, useState } from "react";
import { Cookie, Coffee, Wheat, ChevronLeft, ChevronRight } from "lucide-react";

const thaiMonths = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
];

const events: {
  title: string;
  gradient: string;
  icon: React.ElementType;
  href: string;
  date: Date;
}[] = [
  {
    title: "วันตรุษจีน",
    gradient: "from-[#F5EFE6] via-[#E8C99A] to-[#D4AF37]/60",
    icon: Wheat,
    href: "#",
    date: new Date(2026, 1, 17),
  },
  {
    title: "วันไหว้ทีกงแซ",
    gradient: "from-[#F5EFE6] via-[#E8C99A] to-[#D4AF37]/60",
    icon: Wheat,
    href: "#",
    date: new Date(2026, 1, 25),
  },
  {
    title: "วันจับโหงว",
    gradient: "from-[#F9EDE8] via-[#E8B4A8] to-[#C86B5D]/60",
    icon: Cookie,
    href: "#",
    date: new Date(2026, 2, 3),
  },
  {
    title: "วันชิวอิก",
    gradient: "from-[#EBF0EE] via-[#AECFC5] to-[#8DA399]/60",
    icon: Coffee,
    href: "#",
    date: new Date(2026, 2, 19),
  },
  {
    title: "วันจับโหงว",
    gradient: "from-[#EBF0EE] via-[#AECFC5] to-[#8DA399]/60",
    icon: Coffee,
    href: "#",
    date: new Date(2026, 3, 2),
  },
  {
    title: "วันเช็งเม้ง",
    gradient: "from-[#F5EFE6] via-[#E8C99A] to-[#D4AF37]/60",
    icon: Wheat,
    href: "#",
    date: new Date(2026, 3, 5),
  },
  {
    title: "วันประสูติพระโพธิสัตว์กวนอิม",
    gradient: "from-[#F9EDE8] via-[#E8B4A8] to-[#C86B5D]/60",
    icon: Cookie,
    href: "#",
    date: new Date(2026, 3, 6),
  },
  {
    title: "วันชิวอิก",
    gradient: "from-[#EBF0EE] via-[#AECFC5] to-[#8DA399]/60",
    icon: Coffee,
    href: "#",
    date: new Date(2026, 3, 17),
  },
];

export default function CalendarSection() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const firstUpcomingIdx = events.findIndex((e) => {
    const d = new Date(e.date);
    d.setHours(0, 0, 0, 0);
    return d >= today;
  });
  const defaultIdx =
    firstUpcomingIdx === -1 ? events.length - 1 : firstUpcomingIdx;

  const [activeIdx, setActiveIdx] = useState(defaultIdx);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToCard = (idx: number, behavior: ScrollBehavior = "smooth") => {
    cardRefs.current[idx]?.scrollIntoView({
      behavior,
      block: "nearest",
      inline: "center",
    });
  };

  useEffect(() => {
    scrollToCard(defaultIdx, "instant");
  }, [defaultIdx]);

  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(events.length - 1, idx));
    setActiveIdx(clamped);
    scrollToCard(clamped);
  };

  return (
    <section className="py-20">
      <div className="px-4 max-w-[1280px] mx-auto text-center mb-12">
        <h2 className="font-hand text-3xl md:text-4xl text-text-main mb-2">
          🏮 ปฏิทินวันไหว้ 🏮
        </h2>
        <p className="font-body text-text-muted">ไหว้ตามเทศกาล</p>
      </div>

      <div className="relative">
        {/* Carousel strip */}
        <div
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory py-10 [&::-webkit-scrollbar]:hidden"
          style={{
            paddingInline: "calc(50vw - 7rem)",
            scrollbarWidth: "none",
          }}
        >
          {events.map((event, i) => {
            const Icon = event.icon;
            const d = new Date(event.date);
            d.setHours(0, 0, 0, 0);
            const isPast = d < today;
            const isToday = d.getTime() === today.getTime();
            const isActive = i === activeIdx;

            return (
              <div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="snap-center flex-none"
              >
                <a
                  href={event.href}
                  onClick={(e) => {
                    if (!isActive) {
                      e.preventDefault();
                      goTo(i);
                    }
                  }}
                  className={`block relative w-56 h-72 rounded-[2rem] overflow-hidden border-2 transition-all duration-500 ${
                    isActive
                      ? "border-gold shadow-paper-hover scale-105"
                      : isPast
                        ? "border-surface shadow-paper scale-95 grayscale opacity-60 hover:opacity-80 hover:grayscale-0 cursor-pointer"
                        : "border-surface shadow-paper scale-95 opacity-65 hover:opacity-85 cursor-pointer"
                  }`}
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${event.gradient} transition-transform duration-700 ${isActive ? "scale-105" : ""}`}
                  />
                  <div className="absolute inset-0 bg-black/5" />

                  {/* Status badge — active card */}
                  {isActive && (
                    <div className="absolute top-4 left-0 right-0 flex justify-center z-10">
                      <span className="bg-white/90 text-gold text-xs font-body px-3 py-1 rounded-full border border-gold/40 shadow-sm">
                        {isPast ? "ผ่านมาแล้ว" : isToday ? "วันนี้!" : "ถัดไป"}
                      </span>
                    </div>
                  )}

                  {/* Past ribbon — non-active past cards */}
                  {isPast && !isActive && (
                    <div className="absolute top-3 left-0 right-0 flex justify-center z-10">
                      <span className="bg-black/20 text-white/80 text-[10px] font-body px-2.5 py-0.5 rounded-full">
                        ผ่านมาแล้ว
                      </span>
                    </div>
                  )}

                  {/* Card content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-5">
                    <div className="bg-white/90 backdrop-blur-md px-5 py-4 rounded-xl border border-surface shadow-sm w-full">
                      <p className="font-display font-bold text-5xl text-text-main leading-none">
                        {d.getDate()}
                      </p>
                      <p className="font-body text-xs text-text-muted mt-1 mb-3">
                        {thaiMonths[d.getMonth()]}
                      </p>
                      <div className="w-8 h-px bg-surface mx-auto mb-3" />
                      <Icon className="text-terracotta size-7 mx-auto mb-2" />
                      <h3 className="font-hand text-base text-text-main leading-snug">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Prev arrow */}
        <button
          onClick={() => goTo(activeIdx - 1)}
          disabled={activeIdx === 0}
          aria-label="ย้อนกลับ"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-surface shadow-paper rounded-full p-2.5 hover:shadow-paper-hover transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="size-5 text-text-main" />
        </button>

        {/* Next arrow */}
        <button
          onClick={() => goTo(activeIdx + 1)}
          disabled={activeIdx === events.length - 1}
          aria-label="ถัดไป"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-surface shadow-paper rounded-full p-2.5 hover:shadow-paper-hover transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
        >
          <ChevronRight className="size-5 text-text-main" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center items-center gap-2 mt-3">
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`ไปที่วันที่ ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === activeIdx
                ? "w-6 h-2 bg-gold"
                : "w-2 h-2 bg-surface hover:bg-text-muted"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
