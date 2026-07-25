"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Seal } from "@/components/brand/Seal";

/**
 * Not rendered on the home page today (see page.tsx) — restyled into the new
 * world so it is ready if it ships, rather than left as a terracotta relic.
 *
 * There is no mailing-list backend, so the form does not pretend to succeed:
 * submitting shows the shop's real channels instead of a fake confirmation.
 */
export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="press-umber px-4 py-[clamp(56px,9vw,112px)] text-paper md:px-6">
      <div className="mx-auto max-w-[640px]">
        <div className="relative">
          <div className="press-cream frame-brass px-6 py-8 shadow-plate md:px-10">
            <h2 className="font-display text-[clamp(1.5rem,3.4vw,2.25rem)] leading-tight font-bold text-ink">
              ไม่พลาดข่าวขนมตามเทศกาล
            </h2>
            <p className="mt-2 max-w-[46ch] font-body text-ink">
              ทิ้งอีเมลไว้ เราจะแจ้งเมื่อเปิดรับออเดอร์ขนมไหว้รอบถัดไป
            </p>

            {submitted ? (
              <div className="mt-6 border-2 border-vermillion px-5 py-4">
                <p className="font-display text-[17px] font-bold text-vermillion">
                  ขอบคุณค่ะ
                </p>
                <p className="mt-1 font-body text-ink">
                  ตอนนี้เรารับออเดอร์ทางโทรศัพท์และเฟซบุ๊กเป็นหลัก — โทร{" "}
                  <a
                    href="tel:0645492982"
                    className="font-semibold text-vermillion underline decoration-2 underline-offset-2"
                  >
                    064-549-2982
                  </a>{" "}
                  ได้เลยค่ะ
                </p>
              </div>
            ) : (
              <form
                className="mt-6 flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  อีเมลของคุณ
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="อีเมลของคุณ"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 flex-1 rounded-none border-2 border-brass bg-cream-bright font-body text-ink placeholder:text-brass-text"
                />
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center border-2 border-brass bg-vermillion px-6 font-display text-[17px] font-bold whitespace-nowrap text-paper shadow-sign transition-[transform,box-shadow,background-color] hover:bg-vermillion-deep active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  ติดตาม
                </button>
              </form>
            )}
          </div>
          <Seal
            glyph="喜"
            label="ความยินดี"
            className="absolute -top-5 -right-5 size-14 text-[26px]"
          />
        </div>
      </div>
    </section>
  );
}
