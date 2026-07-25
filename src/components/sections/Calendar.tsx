"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import calendarData from "@/data/calendar-events.json";
import { HangingSign } from "@/components/brand/SignPlate";
import { Seal } from "@/components/brand/Seal";

/**
 * The festival calendar as a rail of hanging tags.
 *
 * A Chinese shop hangs its dates from a rail; it does not put them in
 * gradient-filled rounded rectangles. Each date is a cream enamel tag on two
 * hooks. Scroll, snap, arrow, and dot behavior are unchanged from the previous
 * build — this is a visual replacement, not a behavior change.
 *
 * Past dates are NOT dimmed with opacity: the primary customer is 43–58 and
 * faded text is the first thing to fail for that reader. A past tag switches
 * its date from vermillion to `brass-text` and carries a "ผ่านมาแล้ว" stamp
 * instead. brass-text, not brass: brass is 3.20:1 on paper and would slip
 * past a large-text check while still being unreadable, which is exactly the
 * failure this palette forbids. brass-text on paper is 5.53:1.
 */
const thaiDays = [
  "อาทิตย์",
  "จันทร์",
  "อังคาร",
  "พุธ",
  "พฤหัสบดี",
  "ศุกร์",
  "เสาร์",
];

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

/** Major festivals get 福; recurring merit days get their own mark. */
const sealFor: Record<string, string> = {
  wheat: "福",
  cookie: "喜",
  coffee: "包子",
};

const events = calendarData.events.map((e) => ({
  ...e,
  seal: sealFor[e.icon] ?? "福",
  date: new Date(e.date),
}));

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
  const stripRef = useRef<HTMLDivElement | null>(null);

  const scrollToCard = (idx: number, behavior: ScrollBehavior = "smooth") => {
    const strip = stripRef.current;
    const card = cardRefs.current[idx];
    if (!strip || !card) return;
    const stripCenter = strip.offsetWidth / 2;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    strip.scrollTo({ left: cardCenter - stripCenter, behavior });
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
    <section className="press-cream relative overflow-hidden py-[clamp(56px,9vw,112px)]">
      <div className="mx-auto mb-4 flex max-w-[1200px] flex-col items-center px-4 text-center md:px-6">
        <HangingSign>
          <h2 className="font-display text-[clamp(1.5rem,3.4vw,2.25rem)] leading-tight font-bold text-vermillion">
            ปฏิทินวันไหว้
          </h2>
        </HangingSign>
        <p className="mt-6 font-body font-medium text-ink">
          ไหว้ตามเทศกาล — สั่งล่วงหน้าเพื่อให้ได้ของสด
        </p>
      </div>

      <div className="relative">
        {/* the rail the tags hang from */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-[62px] right-0 left-0 h-[3px] bg-brass"
        />

        <div
          ref={stripRef}
          className="flex gap-5 overflow-x-auto py-10 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ paddingInline: "calc(50vw - 7rem)", scrollbarWidth: "none" }}
        >
          {events.map((event, i) => {
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
                className="flex-none snap-center"
              >
                <a
                  href={event.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (!isActive) goTo(i);
                  }}
                  aria-current={isActive ? "true" : undefined}
                  className="group flex w-56 flex-col items-center focus-visible:outline-none"
                >
                  {/* hooks */}
                  <span
                    aria-hidden
                    className="flex w-14 justify-between transition-transform duration-500"
                  >
                    <span className="h-5 w-[3px] bg-brass" />
                    <span className="h-5 w-[3px] bg-brass" />
                  </span>

                  {/* the tag */}
                  <div
                    className={`press-paper relative w-full px-5 pt-6 pb-7 transition-all duration-500 ${
                      isActive
                        ? "scale-[1.04] border-[3px] border-vermillion shadow-plate-lifted"
                        : "frame-brass scale-[0.96] shadow-plate group-hover:scale-100"
                    }`}
                  >
                    {isActive && (
                      <Seal
                        glyph={event.seal}
                        className={`absolute -top-4 -right-4 ${
                          event.seal.length > 1
                            ? "size-11 text-[15px]"
                            : "size-11 text-[21px]"
                        }`}
                      />
                    )}

                    <p
                      className={`text-center font-display text-[3.5rem] leading-none font-bold ${
                        isPast ? "text-brass-text" : "text-vermillion"
                      }`}
                    >
                      {d.getDate()}
                    </p>
                    <p className="mt-1.5 text-center font-display text-[15px] font-semibold text-ink">
                      {thaiMonths[d.getMonth()]}
                    </p>
                    <p className="text-center font-body text-ink">
                      วัน{thaiDays[d.getDay()]}
                    </p>

                    <span
                      aria-hidden
                      className="mx-auto my-3 block h-[2px] w-10 bg-vermillion"
                    />

                    <h3 className="text-center font-display text-[17px] leading-snug font-bold text-ink">
                      {event.title}
                    </h3>

                    <p
                      className={`mt-3 text-center font-display text-[13px] font-bold ${
                        isPast ? "text-brass-text" : "text-vermillion"
                      }`}
                    >
                      {isPast ? "ผ่านมาแล้ว" : isToday ? "วันนี้!" : "ถัดไป"}
                    </p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => goTo(activeIdx - 1)}
          disabled={activeIdx === 0}
          aria-label="ย้อนกลับ"
          className="press-paper absolute top-1/2 left-3 z-10 grid size-12 -translate-y-1/2 place-items-center border-2 border-brass shadow-plate transition-shadow hover:shadow-plate-lifted disabled:cursor-not-allowed disabled:border-brass-text md:left-6"
        >
          <ChevronLeft className="size-6 text-ink" aria-hidden />
        </button>
        <button
          onClick={() => goTo(activeIdx + 1)}
          disabled={activeIdx === events.length - 1}
          aria-label="ถัดไป"
          className="press-paper absolute top-1/2 right-3 z-10 grid size-12 -translate-y-1/2 place-items-center border-2 border-brass shadow-plate transition-shadow hover:shadow-plate-lifted disabled:cursor-not-allowed disabled:border-brass-text md:right-6"
        >
          <ChevronRight className="size-6 text-ink" aria-hidden />
        </button>
      </div>

      {/* 27 dots is 27 things to aim at. A counter and a progress rule read
          faster, and the arrows already do the stepping. */}
      {/* On a paper plate rather than loose on the cream band — the counter
          is information, and a plate is how this world presents information. */}
      <div className="mx-auto mt-2 w-fit px-4">
        <div className="press-paper frame-brass flex flex-col items-center gap-2 px-5 py-3 shadow-plate">
          <p className="font-display text-[15px] font-bold text-ink">
            <span className="text-vermillion">{activeIdx + 1}</span> /{" "}
            {events.length} วันไหว้ในปีนี้
          </p>
          <div
            className="h-2 w-[180px] border-2 border-brass"
            role="presentation"
          >
            <div
              className="h-full bg-vermillion transition-[width] duration-500"
              style={{
                width: `${((activeIdx + 1) / events.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
