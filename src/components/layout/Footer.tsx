import Link from "next/link";
import { BrandMark } from "@/components/brand/Wordmark";
import { BaoziSeal } from "@/components/brand/Seal";
import { LatticeRule } from "@/components/brand/Lattice";
import { SHOP_ADDRESS, MAPS_URL } from "@/lib/seo";

/**
 * The foot of the page is the deepest ink on the sheet: an umber ground with
 * paper type at 13.97:1. A dark band here is what stops the page draining out
 * into cream-white, and it keeps the red budget for the navbar and the CTAs.
 *
 * Above it: the brass lattice (the poster's tram ironwork — it was pine, and
 * pine left the palette) plus a brass hairline, the same shopfront-edge detail
 * the navbar carries at the top of the page.
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
    <footer className="press-umber text-paper">
      <span aria-hidden className="block h-[2px] w-full bg-brass" />
      <LatticeRule height={22} />

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
              className="press-paper mt-4 inline-flex min-h-11 items-center gap-2 border-2 border-brass px-4 py-2 font-display text-[15px] font-bold text-vermillion shadow-sign transition-[transform,box-shadow,color] hover:text-vermillion-deep active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              โทรสั่ง {PHONE}
            </a>

            <address className="mt-5 max-w-xs font-body not-italic text-cream">
              {SHOP_ADDRESS}
            </address>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center font-body text-cream underline underline-offset-4 hover:text-paper"
            >
              ดูแผนที่ Google Maps
            </a>

            <div className="mt-3 flex gap-3">
              <a
                href="https://www.facebook.com/chutasbakery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-11 items-center justify-center border-2 border-brass font-display text-[13px] font-bold text-paper transition-colors hover:border-paper hover:bg-vermillion"
              >
                FB
              </a>
              <a
                href="https://www.instagram.com/chutasbakery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-11 items-center justify-center border-2 border-brass font-display text-[13px] font-bold text-paper transition-colors hover:border-paper hover:bg-vermillion"
              >
                IG
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-[17px] font-bold text-paper">
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
            <h4 className="mb-4 font-display text-[17px] font-bold text-paper">
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
            <h4 className="mb-4 font-display text-[17px] font-bold text-paper">
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
            <p className="mt-2 font-display text-[13px] font-semibold text-paper">
              ซาลาเปาฮ่องกง
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t-2 border-brass pt-6 md:flex-row">
          <p className="font-body text-cream">© 2026 Chuta&apos;s Bakery</p>
          <p
            aria-hidden
            /* On umber, text is paper or cream — never brass-text (2.53) and
               never brass (4.36 but it is not a text colour at all). */
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
