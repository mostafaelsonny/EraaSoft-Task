"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { useCart } from "@/features/cart";
import { ProductBreadcrumbs } from "@/features/products/components/ProductBreadcrumbs";
import { ProductDetails } from "@/features/products/components/ProductDetails";
import { ProductImages } from "@/features/products/components/ProductImages";
import { ProductRelated } from "@/features/products/components/ProductRelated";
import { useProduct } from "@/features/products/hooks/useProduct";
import { useProducts } from "@/features/products/hooks/useProducts";
import type { Product } from "@/features/products/types/product.types";
import { formatWholePrice } from "@/features/products/utils/product.utils";

export type ProductDetailsActionsContext = {
  product: Product;
  selectedOptions: Record<string, string>;
  quantity: number;
};

type ProductDetailsPageProps = {
  productId: string;
  actions?: (context: ProductDetailsActionsContext) => ReactNode;
};

export function ProductDetailsPage({
  productId,
  actions,
}: ProductDetailsPageProps) {
  const productQuery = useProduct(productId);
  const productsQuery = useProducts({});
  const { addItem } = useCart();

  const product = productQuery.data;

  // Local state for interactive choices
  const [selectedVolume, setSelectedVolume] = useState("100 ml");
  const [giftWrapping, setGiftWrapping] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (productQuery.isLoading) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-[#605a54]">
        <div className="size-8 animate-spin rounded-full border-2 border-[#1a1a1a] border-t-transparent" />
        <p className="mt-4 font-[family-name:var(--font-instrument-serif)] text-[22px] tracking-wide text-[#1a1a1a]">
          Preparing fragrance details...
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="font-[family-name:var(--font-instrument-serif)] text-[36px] text-[#1a1a1a]">
          Fragrance Not Found
        </h1>
        <p className="mt-2 text-sm text-[#605a54]">
          The formulation you are seeking is either discontinued or unavailable.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-flex items-center justify-center rounded bg-[#1a1a1a] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#333]"
        >
          Return to All Fragrances
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    const selectedOptions: Record<string, string> = {
      Volume: selectedVolume,
      ...(giftWrapping ? { "Gift Wrapping": "Complimentary Signature" } : {}),
    };

    for (let i = 0; i < quantity; i++) {
      addItem({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        selectedOptions,
      });
    }

    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const selectedOptionsRecord: Record<string, string> = {
    Volume: selectedVolume,
    ...(giftWrapping ? { "Gift Wrapping": "Complimentary Signature" } : {}),
  };

  return (
    <div className="w-full bg-[#faf8f5]">
      {/* Breadcrumbs with current fragrance name */}
      <ProductBreadcrumbs productName={product.name} />

      {/* Main Detail Section (Gallery + Specifications) */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:px-10 lg:px-20 lg:pb-28">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left Column: Image Gallery */}
          <div className="w-full">
            <ProductImages product={product} />
          </div>

          {/* Right Column: Specifications & Actions */}
          <div className="flex w-full flex-col gap-6">
            <ProductDetails
              product={product}
              selectedVolume={selectedVolume}
              onSelectVolume={setSelectedVolume}
              giftWrapping={giftWrapping}
              onToggleGiftWrapping={() => setGiftWrapping((prev) => !prev)}
            />

            {/* Actions: Quantity Selector + Add to Cart */}
            {actions ? (
              actions({
                product,
                selectedOptions: selectedOptionsRecord,
                quantity,
              })
            ) : (
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                {/* Quantity Control */}
                <div className="flex h-[52px] items-center justify-between rounded border border-[#ebe6de] bg-white px-4 sm:w-36">
                  <button
                    type="button"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-1 text-lg text-[#605a54] transition-colors hover:text-[#1a1a1a] disabled:opacity-30 cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="text-sm font-semibold text-[#1a1a1a]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-1 text-lg text-[#605a54] transition-colors hover:text-[#1a1a1a] cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Primary Add to Cart Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex h-[52px] flex-1 cursor-pointer items-center justify-center rounded bg-[#1a1a1a] px-6 text-[13px] font-bold tracking-widest text-white uppercase transition-colors hover:bg-[#333] shadow-xs"
                >
                  {justAdded
                    ? "Added to Cart ✓"
                    : `Add to Cart / ${formatWholePrice(product.price * quantity)}`}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Olfactory Companions (Related Products Section) */}
      <ProductRelated
        currentProductId={product.id}
        allProducts={productsQuery.data?.items ?? []}
      />
    </div>
  );
}
