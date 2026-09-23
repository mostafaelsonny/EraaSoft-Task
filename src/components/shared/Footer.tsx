import Link from "next/link";
import { productPaths } from "@/features/products";

export function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 lg:px-20 lg:py-20">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link
              href={productPaths.list}
              className="font-[family-name:var(--font-instrument-serif)] text-[36px] tracking-[0.2em] text-white sm:text-[40px]"
            >
              O D O R A T U S
            </Link>
            <p className="max-w-md text-[14px] leading-[1.7] text-[#f2ede4]/80">
              An independent olfactory house cultivating slow-luxury liquid narratives.
              Every bottle is hand-poured in small batches using sustainably sourced botanicals.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: Collections */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[12px] font-bold tracking-widest text-[#c5a880] uppercase">
              Collections
            </h3>
            <ul className="flex flex-col gap-3 text-[13px] text-white/70">
              <li><Link href={productPaths.list} className="hover:text-white">La Maison</Link></li>
              <li><Link href={productPaths.list} className="hover:text-white">Private Reserve</Link></li>
              <li><span className="cursor-pointer hover:text-white">Scented Candles</span></li>
              <li><span className="cursor-pointer hover:text-white">Discovery Sets</span></li>
            </ul>
          </div>

          {/* Column 2: Customer Care */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[12px] font-bold tracking-widest text-[#c5a880] uppercase">
              Customer Care
            </h3>
            <ul className="flex flex-col gap-3 text-[13px] text-white/70">
              <li><span className="cursor-pointer hover:text-white">Olfactory Consultation</span></li>
              <li><span className="cursor-pointer hover:text-white">Shipping & Returns</span></li>
              <li><span className="cursor-pointer hover:text-white">Atelier Appointments</span></li>
              <li><span className="cursor-pointer hover:text-white">Care Guide</span></li>
            </ul>
          </div>

          {/* Column 3: About Us */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[12px] font-bold tracking-widest text-[#c5a880] uppercase">
              About Us
            </h3>
            <ul className="flex flex-col gap-3 text-[13px] text-white/70">
              <li><span className="cursor-pointer hover:text-white">Our Philosophy</span></li>
              <li><span className="cursor-pointer hover:text-white">Sourcing Standards</span></li>
              <li><span className="cursor-pointer hover:text-white">Sustainability</span></li>
              <li><span className="cursor-pointer hover:text-white">Journal</span></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-white/15" />

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-[12px] text-white/50 sm:flex-row">
          <p>© 2026 Odoratus. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-white/40 uppercase">Secured checkout via</span>
            <span className="rounded border border-white/15 px-2 py-0.5 text-[9px] font-semibold text-white/60 uppercase">
              visa
            </span>
            <span className="rounded border border-white/15 px-2 py-0.5 text-[9px] font-semibold text-white/60 uppercase">
              mastercard
            </span>
            <span className="rounded border border-white/15 px-2 py-0.5 text-[9px] font-semibold text-white/60 uppercase">
              amex
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
