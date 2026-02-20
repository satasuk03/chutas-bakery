"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Croissant, Menu, Phone, ShoppingBasket } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background-light/95 backdrop-blur-sm border-b border-surface px-4 py-3 shadow-sm transition-all duration-300">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Croissant className="text-terracotta size-7" />
          <span className="font-hand text-2xl md:text-3xl text-text-main leading-none mt-1">
            Chuta&apos;s Bakery
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="font-body font-bold text-terracotta underline decoration-2 decoration-sage/50 underline-offset-4 text-base tracking-wide"
            href="#"
          >
            หน้าแรก
          </a>
          <a
            className="font-body font-semibold text-text-main hover:text-terracotta transition-colors text-base tracking-wide"
            href="#"
          >
            เมนู
          </a>
          <a
            className="font-body font-semibold text-text-main hover:text-terracotta transition-colors text-base tracking-wide"
            href="#"
          >
            เรื่องราวของเรา
          </a>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <button
            className="hidden md:flex items-center gap-2 bg-white border-2 border-surface shadow-paper hover:shadow-paper-hover active:translate-x-[2px] active:translate-y-[2px] transition-all rounded-xl px-4 py-2"
            onClick={() => (window.location.href = "tel:0645492982")}
          >
            <Phone className="text-terracotta size-5" />
            <span className="font-bold text-sm text-text-main">โทรสั่งเลย</span>
          </button>

          {/* Mobile hamburger */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 text-text-main hover:text-terracotta transition-colors">
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background-light w-72">
              <div className="flex flex-col gap-6 mt-10 px-4">
                <div className="flex items-center gap-2 mb-4">
                  <Croissant className="text-terracotta size-6" />
                  <span className="font-hand text-2xl text-text-main">
                    Chuta&apos;s Bakery
                  </span>
                </div>
                <nav className="flex flex-col gap-5">
                  <a className="font-hand text-2xl text-terracotta" href="#">
                    หน้าแรก
                  </a>
                  <a
                    className="font-hand text-2xl text-text-main hover:text-terracotta transition-colors"
                    href="#"
                  >
                    เมนู
                  </a>
                  <a
                    className="font-hand text-2xl text-text-main hover:text-terracotta transition-colors"
                    href="#"
                  >
                    เรื่องราวของเรา
                  </a>
                </nav>
                <div className="pt-4 border-t border-surface">
                  <button className="flex items-center gap-2 bg-white border-2 border-surface shadow-paper rounded-xl px-4 py-2 w-full justify-center">
                    <ShoppingBasket className="text-terracotta size-5" />
                    <span className="font-bold text-sm text-text-main">
                      ตะกร้า (0)
                    </span>
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
