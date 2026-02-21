import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="font-hand text-6xl md:text-8xl text-terracotta mb-4">
          404
        </h1>
        <p className="font-body text-lg md:text-xl text-text-main/70 mb-8 max-w-md">
          ไม่พบหน้าที่คุณต้องการ แต่ขนมอร่อยๆ ยังรอคุณอยู่ที่หน้าแรก
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white border-2 border-surface shadow-paper hover:shadow-paper-hover active:translate-x-[2px] active:translate-y-[2px] transition-all rounded-xl px-6 py-3 font-hand font-bold text-lg text-text-main"
        >
          กลับหน้าแรก
        </Link>
      </main>
      <Footer />
    </>
  );
}
