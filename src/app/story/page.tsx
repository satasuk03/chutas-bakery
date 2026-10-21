import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StoryHero from "@/components/sections/StoryHero";
import StoryContent from "@/components/sections/StoryContent";
import { pageMetadata } from "@/lib/seo";
import { getAllPosts, getAllTags } from "@/lib/posts";

export const metadata: Metadata = pageMetadata({
  path: "/story",
  title: "เรื่องราวของเรา ซาลาเปาทำมือจากเยาวราช",
  description:
    "เรื่องของคุณชุตา แม่ที่ปั้นซาลาเปา ซิ่วท้อ ฮวกก้วยด้วยมือ ตั้งแต่แผงเล็กๆ ในเยาวราชปี 2540 จนถึงวันนี้ พร้อมบทความวันไหว้และของไหว้ตามเทศกาล",
});

export default function StoryPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  return (
    <>
      <Header />
      <main>
        <StoryHero />
        <StoryContent posts={posts} allTags={allTags} />
      </main>
      <Footer />
    </>
  );
}
