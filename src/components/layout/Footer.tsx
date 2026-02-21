import { Croissant } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background-dark text-surface pt-16 pb-8 px-4 border-t border-text-main/10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand column */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4 text-terracotta">
            <Croissant className="size-7" />
            <span className="font-hand text-2xl text-surface">
              Chuta&apos;s Bakery
            </span>
          </div>
          <p className="font-body text-sm text-surface/60 leading-relaxed mb-6">
            ร้านเล็กๆ ที่ทำขนมด้วยความรัก ซาลาเปา ฮวกก้วย ซิ่วท้อ
            <br />
            สั่งขนมโทร{" "}
            <a href="tel:0645492982" className="underline hover:text-white transition-colors">
              064-549-2982
            </a>
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/chutasbakery"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-terracotta transition-colors text-surface"
            >
              <span className="font-bold text-xs">FB</span>
            </a>
            <a
              href="https://www.instagram.com/chutasbakery"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-terracotta transition-colors text-surface"
            >
              <span className="font-bold text-xs">IG</span>
            </a>
          </div>
        </div>

        {/* Recommended menu */}
        <div>
          <h4 className="font-hand text-xl text-terracotta mb-6">เมนูแนะนำ</h4>
          <ul className="space-y-3 font-body text-sm text-surface/80">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                ซาลาเปา
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                ฮวกก้วย/ฮวกเปา
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                ซิ่วท้อ
              </a>
            </li>
          </ul>
        </div>

        {/* About links */}
        <div>
          <h4 className="font-hand text-xl text-terracotta mb-6">
            เกี่ยวกับเรา
          </h4>
          <ul className="space-y-3 font-body text-sm text-surface/80">
            <li>
              <a href="/story" className="hover:text-white transition-colors">
                เรื่องราวของเรา
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                คำถามที่พบบ่อย
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                การจัดส่งสินค้า
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                ติดต่อเรา
              </a>
            </li>
          </ul>
        </div>

        {/* Operating hours */}
        <div>
          <h4 className="font-hand text-xl text-terracotta mb-6">เวลาทำการ</h4>
          <ul className="space-y-3 font-body text-sm text-surface/80">
            <li className="flex justify-between gap-4">
              <span>จันทร์ - ศุกร์:</span>
              <span>6:30 - 18:00</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>เสาร์ - อาทิตย์:</span>
              <span>6:30 - 18:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1280px] mx-auto border-t border-surface/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-surface/40">
          © 2026 Chuta&apos;s Bakery.
        </p>
      </div>
    </footer>
  );
}
