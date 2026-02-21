import { Heart } from "lucide-react";

export default function MenuTagline() {
  return (
    <div className="py-16 flex flex-col items-center justify-center">
      <Heart className="text-terracotta size-8 mb-3" />
      <p className="font-hand text-2xl text-text-muted">
        ทำด้วยรัก ทำด้วยมือ ทำด้วยใจ
      </p>
    </div>
  );
}
