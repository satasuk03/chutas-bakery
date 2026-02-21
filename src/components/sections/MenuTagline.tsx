"use client";

import { Heart } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export default function MenuTagline() {
  return (
    <div className="py-16 flex flex-col items-center justify-center">
      <FadeIn>
        <Heart className="text-terracotta size-8 mb-3 mx-auto" />
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="font-hand text-2xl text-text-muted">
          ทำด้วยรัก ทำด้วยมือ ทำด้วยใจ
        </p>
      </FadeIn>
    </div>
  );
}
