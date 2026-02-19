"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 px-4 bg-terracotta text-white relative overflow-hidden">
      {/* Dot pattern overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <Mail className="size-12 mx-auto mb-4 animate-bounce" />

        <h2 className="font-hand text-3xl md:text-4xl mb-4">ไม่พลาดข่าวสารจากเตา</h2>

        <p className="font-body text-white/90 mb-8">
          รับข่าวสารเมนูพิเศษและโปรโมชั่นก่อนใคร ส่งตรงถึงอีเมลคุณ
        </p>

        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            type="email"
            placeholder="อีเมลของคุณ"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-3 rounded-full text-text-main border-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-0 shadow-lg placeholder:text-text-muted/70 font-body bg-white"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-sage hover:bg-[#7A9187] text-white font-bold font-hand rounded-full shadow-lg transition-colors duration-200 whitespace-nowrap"
          >
            ติดตาม
          </button>
        </form>
      </div>
    </section>
  );
}
