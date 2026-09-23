"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/features/products/types/product.types";
import { cn } from "@/lib/utils/cn";

type ProductImagesProps = {
  product: Product;
};

export function ProductImages({ product }: ProductImagesProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (product.images.length === 0) {
    return (
      <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-[#f4f0eb] text-sm text-[#605a54] lg:h-[600px]">
        No product images available
      </div>
    );
  }

  const activeImage = product.images[selectedIndex] ?? product.images[0];
  const hasMultipleImages = product.images.length > 1;

  return (
    <div className="flex w-full flex-col gap-4">
      {/* Main Hero Image */}
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg bg-white shadow-xs sm:aspect-square lg:h-[600px] lg:w-full">
        <Image
          src={activeImage}
          alt={product.name}
          fill
          priority
          className="rounded-lg object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>

      {/* Thumbnails row (Rendered ONLY if product has multiple images, complying with user instructions) */}
      {hasMultipleImages && (
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {product.images.map((img, index) => {
            const isSelected = index === selectedIndex;
            return (
              <button
                key={img + index}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  "relative h-24 w-full overflow-hidden rounded cursor-pointer transition-all sm:h-28",
                  isSelected
                    ? "ring-2 ring-[#c5a880] ring-offset-2"
                    : "opacity-75 hover:opacity-100",
                )}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 15vw, 30vw"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
