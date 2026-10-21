import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ValuesSection from "@/components/sections/ValuesSection";
import AuspiciousSection from "@/components/sections/AuspiciousSection";
import CalendarSection from "@/components/sections/Calendar";
import FounderSection from "@/components/sections/FounderSection";
import { SITE_URL } from "@/lib/seo";

// Title, description and Open Graph come from the layout; only the canonical is per-route.
export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

/**
 * Grounds alternate as full-bleed bands — paper, umber, paper, cream, paper,
 * umber — so the page reads as a run of printed sheets rather than cards
 * floating on a neutral page. Paper is the dominant ground by design (~56%);
 * the two umber bands are what give the run its rhythm and keep the red
 * budget for the lacquer navbar and the actions. See DESIGN.md → Layout.
 *
 * AuspiciousSection sits between the values board and the calendar: the board
 * says how the sweets are made, the meanings say what they are for, and the
 * calendar then says when to order them. That is the order a customer buying
 * ของไหว้ actually asks the questions in.
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
        <AuspiciousSection />
        <CalendarSection />
        <FounderSection />
      </main>
      <Footer />
    </>
  );
}
