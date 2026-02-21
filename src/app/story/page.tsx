import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StoryHero from "@/components/sections/StoryHero";
import StoryContent from "@/components/sections/StoryContent";
import { getAllPosts, getAllTags } from "@/lib/posts";

export const metadata: Metadata = {
  title: "เรื่องราวของเรา",
  description:
    "เรื่องเล่า ความตั้งใจ และเบื้องหลังขนมทุกชิ้นจากครัวของ Chuta's Bakery",
};

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
