import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StoryHero from "@/components/sections/StoryHero";
import StoryContent from "@/components/sections/StoryContent";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import { getAllPosts, getAllTags } from "@/lib/posts";

export const metadata: Metadata = pageMetadata({
  path: "/story",
  title: "เรื่องราวของเรา จากเยาวราช 2540 ถึงบางแค",
  description:
    "เรื่องของคุณชุตา แม่ที่ปั้นซาลาเปา ซิ่วท้อ ฮวกก้วยด้วยมือ ตั้งแต่แผงเล็กๆ ในเยาวราชปี 2540 จนถึงหน้าร้านวันนี้ที่บางแค พร้อมบทความวันไหว้และของไหว้ตามเทศกาล",
});

export default function StoryPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "หน้าแรก", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "เรื่องราวของเรา", item: `${SITE_URL}/story` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Header />
      <main>
        <StoryHero />
        <StoryContent posts={posts} allTags={allTags} />
      </main>
      <Footer />
    </>
  );
}
