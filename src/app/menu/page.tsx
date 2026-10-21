import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MenuHeroSection from "@/components/sections/MenuHeroSection";
import MenuSection from "@/components/sections/MenuSection";
import MenuTagline from "@/components/sections/MenuTagline";
import MenuJsonLd from "@/components/layout/MenuJsonLd";
import { pageMetadata, menuDescription } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/menu",
  title: "เมนูและราคา ซาลาเปา ฮวกก้วย ซิ่วท้อ",
  description: menuDescription(),
});

export default function MenuPage() {
  return (
    <>
      <MenuJsonLd />
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
