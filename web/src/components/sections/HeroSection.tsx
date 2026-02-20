import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-12 md:py-20">
      {/* Doodle background pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero-doodle"
            x="0"
            y="0"
            width="400"
            height="400"
            patternUnits="userSpaceOnUse"
          >
            {/* Big bun */}
            <circle
              cx="70"
              cy="85"
              r="28"
              fill="none"
              stroke="#C67B5C"
              strokeWidth="1.8"
              strokeOpacity="0.13"
            />
            <path
              d="M48,80 Q70,56 92,80"
              fill="none"
              stroke="#C67B5C"
              strokeWidth="1.8"
              strokeOpacity="0.13"
            />
            <circle
              cx="62"
              cy="92"
              r="4"
              fill="none"
              stroke="#C67B5C"
              strokeWidth="1.2"
              strokeOpacity="0.11"
            />
            <circle
              cx="79"
              cy="89"
              r="3"
              fill="none"
              stroke="#C67B5C"
              strokeWidth="1.2"
              strokeOpacity="0.11"
            />

            {/* 4-point star */}
            <path
              d="M260,18 L264,36 L282,40 L264,44 L260,62 L256,44 L238,40 L256,36 Z"
              fill="#C67B5C"
              fillOpacity="0.09"
            />

            {/* 8-point sparkle */}
            <g
              transform="translate(162,142)"
              stroke="#7A8C6E"
              strokeOpacity="0.13"
              strokeWidth="1.5"
            >
              <line x1="0" y1="-18" x2="0" y2="18" />
              <line x1="-18" y1="0" x2="18" y2="0" />
              <line x1="-12" y1="-12" x2="12" y2="12" />
              <line x1="12" y1="-12" x2="-12" y2="12" />
            </g>

            {/* Big flower */}
            <g transform="translate(348,200)">
              <ellipse
                cx="0"
                cy="-16"
                rx="6"
                ry="12"
                fill="#C67B5C"
                fillOpacity="0.10"
              />
              <ellipse
                cx="0"
                cy="-16"
                rx="6"
                ry="12"
                fill="#C67B5C"
                fillOpacity="0.10"
                transform="rotate(60)"
              />
              <ellipse
                cx="0"
                cy="-16"
                rx="6"
                ry="12"
                fill="#C67B5C"
                fillOpacity="0.10"
                transform="rotate(120)"
              />
              <ellipse
                cx="0"
                cy="-16"
                rx="6"
                ry="12"
                fill="#C67B5C"
                fillOpacity="0.10"
                transform="rotate(180)"
              />
              <ellipse
                cx="0"
                cy="-16"
                rx="6"
                ry="12"
                fill="#C67B5C"
                fillOpacity="0.10"
                transform="rotate(240)"
              />
              <ellipse
                cx="0"
                cy="-16"
                rx="6"
                ry="12"
                fill="#C67B5C"
                fillOpacity="0.10"
                transform="rotate(300)"
              />
              <circle cx="0" cy="0" r="8" fill="#7A8C6E" fillOpacity="0.14" />
            </g>

            {/* Wheat stalk */}
            <g
              transform="translate(102,262)"
              stroke="#7A8C6E"
              strokeOpacity="0.12"
              strokeWidth="1.8"
              fill="none"
            >
              <path d="M0,55 L0,-15" />
              <path d="M0,35 Q-16,25 -18,10" />
              <path d="M0,35 Q16,25 18,10" />
              <path d="M0,18 Q-13,8 -14,-6" />
              <path d="M0,18 Q13,8 14,-6" />
              <path d="M0,5 Q-8,-4 -6,-16" />
              <path d="M0,5 Q8,-4 6,-16" />
            </g>

            {/* Swirl */}
            <path
              d="M210,192 Q226,168 248,179 Q266,190 258,208 Q250,226 230,220 Q213,215 211,200 Q209,185 224,178"
              fill="none"
              stroke="#C67B5C"
              strokeWidth="1.8"
              strokeOpacity="0.11"
            />

            {/* Heart */}
            <path
              d="M170,368 C158,348 135,344 137,328 C139,314 155,312 165,320 C170,324 170,326 170,326 C170,326 170,324 175,320 C185,312 201,314 203,328 C205,344 182,348 170,368Z"
              fill="#C67B5C"
              fillOpacity="0.09"
            />

            {/* Big sparkle bottom-right */}
            <g
              transform="translate(326,332)"
              stroke="#C67B5C"
              strokeOpacity="0.13"
              strokeWidth="1.8"
            >
              <line x1="0" y1="-22" x2="0" y2="22" />
              <line x1="-22" y1="0" x2="22" y2="0" />
              <line x1="-14" y1="-14" x2="14" y2="14" />
              <line x1="14" y1="-14" x2="-14" y2="14" />
            </g>

            {/* Small 5-petal flower */}
            <g transform="translate(242,292)">
              <circle cx="0" cy="-10" r="5" fill="#7A8C6E" fillOpacity="0.10" />
              <circle
                cx="9.5"
                cy="-3"
                r="5"
                fill="#7A8C6E"
                fillOpacity="0.10"
              />
              <circle cx="5.9" cy="8" r="5" fill="#7A8C6E" fillOpacity="0.10" />
              <circle
                cx="-5.9"
                cy="8"
                r="5"
                fill="#7A8C6E"
                fillOpacity="0.10"
              />
              <circle
                cx="-9.5"
                cy="-3"
                r="5"
                fill="#7A8C6E"
                fillOpacity="0.10"
              />
              <circle cx="0" cy="0" r="5" fill="#C67B5C" fillOpacity="0.12" />
            </g>

            {/* Dot clusters */}
            <circle cx="322" cy="98" r="4" fill="#7A8C6E" fillOpacity="0.13" />
            <circle cx="340" cy="114" r="3" fill="#7A8C6E" fillOpacity="0.10" />
            <circle
              cx="310"
              cy="118"
              r="2.5"
              fill="#7A8C6E"
              fillOpacity="0.09"
            />

            <circle
              cx="40"
              cy="200"
              r="3.5"
              fill="#C67B5C"
              fillOpacity="0.11"
            />
            <circle
              cx="56"
              cy="214"
              r="2.5"
              fill="#C67B5C"
              fillOpacity="0.09"
            />

            {/* Plus marks */}
            <g stroke="#7A8C6E" strokeOpacity="0.12" strokeWidth="1.5">
              <line x1="190" y1="40" x2="190" y2="60" />
              <line x1="180" y1="50" x2="200" y2="50" />
            </g>
            <g stroke="#C67B5C" strokeOpacity="0.11" strokeWidth="1.5">
              <line x1="382" y1="260" x2="382" y2="278" />
              <line x1="373" y1="269" x2="391" y2="269" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-doodle)" />
      </svg>
      <div className="mx-auto max-w-4xl flex flex-col gap-8 md:flex-row md:items-center">
        {/* Text Content */}
        <div className="flex flex-1 flex-col gap-8 text-center md:text-left">
          <div className="flex flex-col gap-4">
            {/* Welcome badge */}
            <div className="inline-flex w-fit mx-auto md:mx-0 items-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/5 px-4 py-1 font-hand text-sm text-terracotta">
              ทำด้วยใจ ส่งต่อความโชคดี
            </div>

            {/* Main headline */}
            <h1 className="font-hand text-4xl md:text-6xl lg:text-5xl font-bold leading-tight tracking-tight text-text-main">
              ซาลาเปา ฮวกก้วย
              <br />
              ซิ่วท้อ ขนมมงคล
            </h1>

            {/* Subheadline */}
            <p className="font-body text-lg text-text-muted leading-relaxed max-w-md mx-auto md:mx-0">
              ร้านเล็กๆ ที่ทำขนมด้วยความรัก
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <p className="flex items-center gap-1 text-sm font-body font-medium text-text-muted">
              <Clock className="size-4" />
              เปิดทุกวัน 6:30 - 18:00
            </p>
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-terracotta px-8 text-base font-hand font-bold text-white transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-terracotta/20 active:translate-y-0 w-full sm:w-auto"
            >
              <span>ดูเมนู</span>
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>

        {/* Polaroid Image */}
        <div className="relative flex-1 flex justify-center">
          <div className="relative -rotate-2 bg-white p-3 pb-12 shadow-paper rounded-sm w-full max-w-[420px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
              <Image
                src="/peach-hero-crop.webp"
                alt="Peach buns stacked on a wooden board"
                fill
                priority
                className="object-cover grayscale-[20%] sepia-[10%]"
              />
              {/* Texture overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cream/20 to-transparent mix-blend-overlay" />
            </div>
            <p className="mt-4 text-center font-hand text-base italic">
              ของไหว้ครบหรือยัง?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
