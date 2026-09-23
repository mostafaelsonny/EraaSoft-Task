"use client";

import type { Product } from "@/features/products/types/product.types";
import { formatWholePrice } from "@/features/products/utils/product.utils";
import { cn } from "@/lib/utils/cn";

type ProductDetailsProps = {
  product: Product;
  selectedVolume: string;
  onSelectVolume: (volume: string) => void;
  giftWrapping: boolean;
  onToggleGiftWrapping: () => void;
};

const DEFAULT_VOLUMES = [
  { size: "30 ml", price: 140 },
  { size: "50 ml", price: 180 },
  { size: "100 ml", price: 220 },
];

export function ProductDetails({
  product,
  selectedVolume,
  onSelectVolume,
  giftWrapping,
  onToggleGiftWrapping,
}: ProductDetailsProps) {
  // Use product options if volume is defined, otherwise standard fragrance volumes
  const volumeOption = product.options.find((opt) => opt.id === "volume");
  const availableVolumes = volumeOption?.values ?? DEFAULT_VOLUMES.map((v) => v.size);

  return (
    <div className="flex w-full flex-col gap-6 sm:gap-8">
      {/* Tags Row */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[#f2ede4] px-3 py-1 text-[11px] font-semibold tracking-wider text-[#1a1a1a] uppercase">
          Scent Family: {product.scentFamily}
        </span>
        <span className="rounded-full bg-[#f4f0eb] px-3 py-1 text-[11px] font-semibold tracking-wider text-[#605a54] uppercase">
          Occasion: {product.occasion}
        </span>
      </div>

      {/* Product Name */}
      <h1 className="font-[family-name:var(--font-instrument-serif)] text-[38px] leading-[1.1] text-[#1a1a1a] sm:text-[48px]">
        {product.name}
      </h1>

      {/* Price & Availability Status */}
      <div className="flex items-center justify-between border-b border-[#ebe6de] pb-6">
        <p className="text-[24px] font-semibold text-[#1a1a1a]">
          {formatWholePrice(product.price)}
        </p>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-[#10b981]" />
          <span className="text-[13px] font-semibold text-[#10b981]">
            {product.inStock !== false ? "Available in Atelier" : "Out of Stock"}
          </span>
        </div>
      </div>

      {/* Volume Selector */}
      <div className="flex flex-col gap-3">
        <label className="text-[12px] font-bold tracking-wider text-[#1a1a1a] uppercase">
          Select Volume
        </label>
        <div className="grid grid-cols-3 gap-3">
          {availableVolumes.map((size) => {
            const isSelected = selectedVolume === size;
            return (
              <button
                key={size}
                type="button"
                onClick={() => onSelectVolume(size)}
                className={cn(
                  "flex flex-col items-center justify-center rounded p-3 transition-all cursor-pointer",
                  isSelected
                    ? "border-2 border-[#1a1a1a] bg-white shadow-xs font-bold"
                    : "border border-[#ebe6de] bg-transparent hover:border-[#1a1a1a]/40 font-medium",
                )}
              >
                <span className="text-[14px] text-[#1a1a1a]">{size}</span>
                <span className="mt-0.5 text-[11px] text-[#605a54]">
                  {size === "30 ml" ? "$140" : size === "50 ml" ? "$180" : formatWholePrice(product.price)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gift Wrapping Card */}
      <div className="flex items-center justify-between rounded-md bg-[#f4f0eb] p-4 sm:p-5">
        <div className="flex flex-col gap-1 pr-4">
          <p className="text-[13px] font-semibold text-[#1a1a1a]">
            Complimentary Signature Gift Wrapping
          </p>
          <p className="text-[12px] text-[#605a54]">
            Encased in linen paper box with custom wax seal stamp.
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={giftWrapping}
          onClick={onToggleGiftWrapping}
          className={cn(
            "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-hidden",
            giftWrapping ? "bg-[#c5a880]" : "bg-[#ebe6de]",
          )}
        >
          <span
            className={cn(
              "pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out",
              giftWrapping ? "translate-x-6" : "translate-x-0.5",
            )}
          />
        </button>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-[#ebe6de]" />

      {/* Scent Anatomy Section */}
      <div className="flex flex-col gap-4">
        <h2 className="font-[family-name:var(--font-instrument-serif)] text-[28px] text-[#1a1a1a] sm:text-[32px]">
          Scent Anatomy
        </h2>
        <p className="text-[14px] leading-[1.6] text-[#605a54]">
          {product.description}
        </p>

        {/* Notes Pyramid */}
        {(product.topNotes || product.heartNotes || product.baseNotes || product.notes) && (
          <div className="mt-2 flex flex-col divide-y divide-[#ebe6de]">
            {product.topNotes && (
              <div className="flex flex-col justify-between py-2.5 sm:flex-row sm:items-center">
                <span className="text-[12px] font-bold tracking-wider text-[#1a1a1a] uppercase">
                  Top Notes
                </span>
                <span className="text-[13px] text-[#605a54]">{product.topNotes}</span>
              </div>
            )}
            {product.heartNotes && (
              <div className="flex flex-col justify-between py-2.5 sm:flex-row sm:items-center">
                <span className="text-[12px] font-bold tracking-wider text-[#1a1a1a] uppercase">
                  Heart Notes
                </span>
                <span className="text-[13px] text-[#605a54]">{product.heartNotes}</span>
              </div>
            )}
            {product.baseNotes && (
              <div className="flex flex-col justify-between py-2.5 sm:flex-row sm:items-center">
                <span className="text-[12px] font-bold tracking-wider text-[#1a1a1a] uppercase">
                  Base Notes
                </span>
                <span className="text-[13px] text-[#605a54]">{product.baseNotes}</span>
              </div>
            )}
            {!product.topNotes && product.notes && (
              <div className="flex flex-col justify-between py-2.5 sm:flex-row sm:items-center">
                <span className="text-[12px] font-bold tracking-wider text-[#1a1a1a] uppercase">
                  Fragrance Accord
                </span>
                <span className="text-[13px] text-[#605a54]">{product.notes}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
