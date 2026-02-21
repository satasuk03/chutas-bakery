import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MenuHeroSection from "@/components/sections/MenuHeroSection";
import MenuSection from "@/components/sections/MenuSection";
import MenuTagline from "@/components/sections/MenuTagline";

export const metadata: Metadata = {
  title: "เมนูขนม",
  description:
    "เมนูขนมโฮมเมดจาก Chuta's Bakery — ซาลาเปา ฮวกก้วย ฮวกเปา ซิ่วท้อ ขนมไหว้พระจันทร์ และชุดจัดไหว้ ทำสดด้วยมือทุกวัน",
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main>
        <MenuHeroSection />
        <MenuSection />
        <MenuTagline />
      </main>
      <Footer />
    </>
  );
}
