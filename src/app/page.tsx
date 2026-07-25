import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ValuesSection from "@/components/sections/ValuesSection";
import CalendarSection from "@/components/sections/Calendar";
import FounderSection from "@/components/sections/FounderSection";

/**
 * Grounds alternate as full-bleed bands — teal, cream, teal, cream, pine —
 * so the page reads as a run of printed sheets rather than cards floating on
 * a neutral page. See DESIGN.md → Layout.
 *
 * NewsletterSection is built and on-brand but not mounted: there is no mailing
 * list backend yet. Add it here when there is one.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ValuesSection />
        <CalendarSection />
        <FounderSection />
      </main>
      <Footer />
    </>
  );
}
