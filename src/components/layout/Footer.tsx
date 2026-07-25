import Link from "next/link";
import { BrandMark } from "@/components/brand/Wordmark";
import { BaoziSeal } from "@/components/brand/Seal";
import { LatticeRule } from "@/components/brand/Lattice";

/**
 * The foot of the page is the deepest ink on the sheet: pine-deep ground,
 * cream type. The lattice rule above it is the poster's tram ironwork, which
 * is how this world ends a page — with a girder, not a hairline.
 */
const PHONE = "064-549-2982";

const menuLinks = [
  { label: "ฮวกเปา / ฮวกก้วย", href: "/menu#huaykuay" },
  { label: "ซิ่วท้อ / ซาลาเปา", href: "/menu#siutao" },
  { label: "เมนูพิเศษ", href: "/menu#special" },
];

const aboutLinks = [
  { label: "เรื่องราวของเรา", href: "/story" },
  { label: "ดูเมนูทั้งหมด", href: "/menu" },
];

export default function Footer() {
  return (
    <footer className="press-pine text-cream">
      <LatticeRule height={22} className="text-pine-deep" />

      <div className="mx-auto max-w-[1200px] px-4 pt-14 pb-8 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-8">
          {/* Brand column */}
          <div>
            <BrandMark />
            <p className="mt-4 max-w-xs font-body text-cream">
              ร้านเล็ก ๆ ที่ทำขนมด้วยความรัก ซาลาเปา ฮวกก้วย ซิ่วท้อ
              และขนมตามเทศกาล
            </p>
            <a
              href="tel:0645492982"
              className="mt-4 inline-flex min-h-11 items-center gap-2 border-2 border-cream/80 bg-vermillion px-4 py-2 font-display text-[15px] font-semibold text-cream shadow-sign transition-[transform,box-shadow,background-color] hover:bg-vermillion-deep active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              โทรสั่ง {PHONE}
            </a>

            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/chutasbakery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-11 items-center justify-center border-2 border-cream/50 font-display text-[13px] font-bold text-cream transition-colors hover:border-cream hover:bg-vermillion"
              >
                FB
              </a>
              <a
                href="https://www.instagram.com/chutasbakery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-11 items-center justify-center border-2 border-cream/50 font-display text-[13px] font-bold text-cream transition-colors hover:border-cream hover:bg-vermillion"
              >
                IG
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-[17px] font-bold text-cream">
              เมนูแนะนำ
            </h4>
            <ul className="space-y-1 font-body">
              {menuLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex min-h-11 items-center text-cream underline-offset-4 hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-[17px] font-bold text-cream">
              เกี่ยวกับเรา
            </h4>
            <ul className="space-y-1 font-body">
              {aboutLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex min-h-11 items-center text-cream underline-offset-4 hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-[17px] font-bold text-cream">
              เวลาทำการ
            </h4>
            <ul className="space-y-2 font-body">
              <li className="flex justify-between gap-4">
                <span>จันทร์ – ศุกร์</span>
                <span className="font-display font-semibold">6:30 – 18:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>เสาร์ – อาทิตย์</span>
                <span className="font-display font-semibold">6:30 – 18:00</span>
              </li>
            </ul>
            <BaoziSeal className="mt-6 w-[92px] text-[15px]" />
            <p className="mt-2 font-display text-[13px] font-semibold text-cream">
              ซาลาเปาฮ่องกง
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t-2 border-cream/25 pt-6 md:flex-row">
          <p className="font-body text-cream">© 2026 Chuta&apos;s Bakery</p>
          <p
            aria-hidden
            className="font-seal text-[15px] tracking-[0.3em] text-cream"
            style={{ fontWeight: 700 }}
          >
            楚塔包子铺
          </p>
        </div>
      </div>
    </footer>
  );
}
