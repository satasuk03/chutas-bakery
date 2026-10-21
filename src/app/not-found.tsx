import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Seal } from "@/components/brand/Seal";

export const metadata: Metadata = {
  title: "ไม่พบหน้าที่ต้องการ",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="press-paper relative flex min-h-[68vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center">
        <span
          aria-hidden
          className="pointer-events-none absolute right-[-6%] bottom-0 z-0 w-[46%] max-w-[340px] opacity-90 md:right-[2%]"
        >
          <Image
            src="/brand/mascot.webp"
            alt=""
            width={1000}
            height={1826}
            sizes="340px"
            className="h-auto w-full"
          />
        </span>

        <div className="relative z-10 flex flex-col items-center">
          <div className="press-umber inline-block border-2 border-brass px-7 py-5 shadow-plate">
            <p className="reg-offset font-display text-[clamp(3.5rem,14vw,6rem)] leading-none font-bold text-paper">
              404
            </p>
          </div>

          <div className="relative mt-7">
            <div className="press-cream frame-brass px-6 py-5 pl-10 shadow-plate">
              <p className="max-w-[34ch] font-body text-ink">
                ไม่พบหน้าที่คุณต้องการ — แต่ขนมยังรออยู่ที่หน้าแรกค่ะ
              </p>
            </div>
            <Seal
              glyph="福"
              label="ฮก — โชคลาภ"
              className="absolute -top-4 -left-5 size-12 text-[21px]"
            />
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center border-2 border-brass bg-vermillion px-6 py-3 font-display text-[17px] font-bold text-paper shadow-plate transition-[transform,box-shadow,background-color] hover:bg-vermillion-deep hover:shadow-plate-lifted active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              กลับหน้าแรก
            </Link>
            <Link
              href="/menu"
              className="press-cream inline-flex min-h-12 items-center justify-center border-2 border-brass px-6 py-3 font-display text-[17px] font-bold text-ink shadow-plate transition-[transform,box-shadow] hover:shadow-plate-lifted active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              ดูขนมทั้งหมด
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
