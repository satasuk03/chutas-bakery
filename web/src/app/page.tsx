import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ValuesSection from "@/components/sections/ValuesSection";
import CalendarSection from "@/components/sections/Calendar";
import FounderSection from "@/components/sections/FounderSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ValuesSection />
        <CalendarSection />
        <FounderSection />
        {/* <NewsletterSection /> */}
      </main>
      <Footer />
    </>
  );
}
