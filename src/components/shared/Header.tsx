"use client";

import Link from "next/link";
import { useState } from "react";
import { CartNavLink } from "@/features/cart";
import { productPaths } from "@/features/products";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#ebe6de] bg-[#faf8f5]/95 backdrop-blur-xs">
      {/* Announcement Bar */}
      <div className="bg-[#1a1a1a] px-4 py-2.5 text-center text-[11px] font-semibold tracking-wider text-white uppercase">
        Complimentary signature gift wrapping on all orders above $150
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex h-20 w-full items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Left Nav Links (Desktop) */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href={productPaths.list}
            className="text-[13px] font-semibold uppercase tracking-wider text-[#1a1a1a] transition-colors hover:text-[#c5a880]"
          >
            Home
          </Link>
          <Link
            href={productPaths.list}
            className="text-[13px] font-medium uppercase tracking-wider text-[#605a54] transition-colors hover:text-[#1a1a1a]"
          >
            Shop
          </Link>
          <span className="cursor-pointer text-[13px] font-medium uppercase tracking-wider text-[#605a54] transition-colors hover:text-[#1a1a1a]">
            Categories
          </span>
          <span className="cursor-pointer text-[13px] font-medium uppercase tracking-wider text-[#605a54] transition-colors hover:text-[#1a1a1a]">
            The Atelier
          </span>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((curr) => !curr)}
          className="p-2 text-[#1a1a1a] lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Center Brand Title */}
        <Link
          href={productPaths.list}
          className="font-[family-name:var(--font-instrument-serif)] text-[28px] tracking-[0.2em] text-[#1a1a1a] sm:text-[36px]"
        >
          O D O R A T U S
        </Link>

        {/* Right Utilities */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search Pill (Visual / Decorative per spec) */}
          <div className="hidden items-center gap-2 rounded-full border border-[#ebe6de] bg-white px-3.5 py-1.5 md:flex">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#605a54"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              readOnly
              placeholder="Search fragrances..."
              className="w-28 bg-transparent text-[12px] text-[#1a1a1a] outline-none placeholder:text-[#605a54] lg:w-36"
            />
          </div>

          {/* User Icon */}
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-full text-[#1a1a1a] transition-colors hover:text-[#c5a880]"
            aria-label="User Account"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          {/* Cart Trigger */}
          <CartNavLink />
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[#ebe6de] bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium uppercase tracking-wider text-[#1a1a1a]">
            <Link
              href={productPaths.list}
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#c5a880]"
            >
              Home
            </Link>
            <Link
              href={productPaths.list}
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#c5a880]"
            >
              Shop
            </Link>
            <span className="py-1 text-[#605a54]">Categories</span>
            <span className="py-1 text-[#605a54]">The Atelier</span>
          </nav>
        </div>
      )}
    </header>
  );
}
