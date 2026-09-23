"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/features/cart";
import { productPaths } from "@/features/products/paths";
import type { Product } from "@/features/products/types/product.types";
import { formatWholePrice } from "@/features/products/utils/product.utils";

type ProductRelatedProps = {
  currentProductId: string;
  allProducts: Product[];
};

export function ProductRelated({
  currentProductId,
  allProducts,
}: ProductRelatedProps) {
  const { addItem } = useCart();

  // Filter out current product and pick up to 4 companions
  const companions = allProducts
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  if (companions.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#f4f0eb] px-4 py-16 sm:px-6 md:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-[36px] text-[#1a1a1a] sm:text-[48px]">
            Olfactory Companions
          </h2>
          <p className="mt-2 text-[12px] font-medium tracking-widest text-[#605a54] uppercase sm:text-[14px]">
            Fragrances of synonymous sophistication
          </p>
        </div>

        {/* Companions Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companions.map((companion) => {
            const image = companion.images[0];
            return (
              <article
                key={companion.id}
                className="flex flex-col justify-between rounded-lg bg-white p-4 shadow-xs transition-shadow hover:shadow-md"
              >
                <div>
                  <Link
                    href={productPaths.detail(companion.id)}
                    className="relative block h-[260px] w-full overflow-hidden rounded cursor-pointer sm:h-[280px]"
                  >
                    {image ? (
                      <Image
                        src={image}
                        alt={companion.name}
                        fill
                        className="rounded object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                      />
                    ) : (
                      <div className="flex size-full items-center justify-center rounded bg-[#faf8f5] text-sm text-[#605a54]">
                        No image
                      </div>
                    )}
                  </Link>

                  <div className="mt-4 flex items-start justify-between gap-2">
                    <Link
                      href={productPaths.detail(companion.id)}
                      className="flex min-w-0 flex-col"
                    >
                      <h3 className="truncate font-[family-name:var(--font-instrument-serif)] text-[22px] text-[#1a1a1a] hover:text-[#c5a880]">
                        {companion.name}
                      </h3>
                      <p className="truncate text-[11px] font-normal uppercase text-[#c5a880]">
                        {companion.notes}
                      </p>
                    </Link>
                    <p className="shrink-0 text-[15px] font-semibold text-[#1a1a1a]">
                      {formatWholePrice(companion.price)}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    addItem({
                      productId: companion.id,
                      name: companion.name,
                      price: companion.price,
                      image,
                      selectedOptions: { volume: "100 ml" },
                    })
                  }
                  className="mt-4 flex w-full cursor-pointer items-center justify-center rounded border border-[#ebe6de] py-3 text-[11px] font-semibold tracking-wider text-[#1a1a1a] uppercase transition-colors hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
                >
                  Add to Cart +
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
