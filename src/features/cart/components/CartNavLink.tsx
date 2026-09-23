"use client";

import Link from "next/link";
import { useCart } from "@/features/cart/hooks/useCart";
import { cartPaths } from "@/features/cart/paths";

export function CartNavLink() {
  const { quantity } = useCart();

  return (
    <Link
      href={cartPaths.cart}
      className="group relative flex items-center gap-2 text-[#1a1a1a] transition-colors hover:text-[#c5a880]"
      aria-label={`Shopping cart, ${quantity} items`}
    >
      <div className="relative flex items-center justify-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-hover:scale-105"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        {quantity > 0 && (
          <span className="absolute -right-2.5 -top-2 flex min-w-[18px] items-center justify-center rounded-full bg-[#c5a880] px-1 text-[10px] font-bold text-white shadow-xs">
            {quantity}
          </span>
        )}
      </div>
      <span className="hidden text-[13px] font-medium tracking-wide uppercase sm:inline-block">
        Cart
      </span>
    </Link>
  );
}
