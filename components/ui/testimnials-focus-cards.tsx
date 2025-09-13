"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Testimonial } from "@/data";
import Image from "next/image";

export const TestimonialsCard = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Testimonial;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        // Improved mobile height and responsive sizing
        "rounded-xl relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-neutral-900 dark:to-neutral-800 overflow-hidden min-h-[500px] sm:min-h-[450px] md:h-96 w-full transition-all duration-500 ease-out cursor-pointer shadow-lg hover:shadow-2xl border border-slate-200 dark:border-neutral-700",
        // Better mobile hover effects - reduce blur/scale on mobile
        hovered !== null &&
          hovered !== index &&
          "md:blur-sm md:scale-[0.96] md:opacity-60 opacity-90"
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          fill
          src={card.img}
          alt={card.name}
          className="w-full h-full object-cover opacity-15 sm:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      </div>

      {/* Quote Icon - Better mobile positioning */}
      <div className="absolute top-2 sm:top-0 left-2 sm:left-0 z-10">
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 opacity-80"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </div>

      {/* Content - Better mobile spacing and sizing */}
      <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-between z-10">
        {/* Quote - Improved mobile typography */}
        <div className="flex-1 flex items-center pt-8 sm:pt-6 md:pt-0">
          <p
            className={cn(
              // Better mobile text sizing and line height
              "text-sm sm:text-base md:text-base leading-relaxed sm:leading-relaxed text-slate-700 dark:text-slate-200 transition-all duration-500 font-medium",
              hovered === index
                ? "opacity-100 transform translate-y-0"
                : "opacity-95 transform translate-y-1"
            )}
          >
            &quot;{card.quote}&quot;
          </p>
        </div>

        {/* Author Info - Better mobile layout */}
        <div
          className={cn(
            "flex items-center gap-3 sm:gap-4 mt-4 sm:mt-6 p-3 sm:p-4 bg-white/95 dark:bg-black/70 backdrop-blur-sm rounded-lg border border-white/30 transition-all duration-500",
            hovered === index
              ? "opacity-100 transform translate-y-0"
              : "opacity-95 transform translate-y-0"
          )}
        >
          {/* Avatar - Responsive sizing */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-purple-500/30 flex-shrink-0">
            <Image
              width={48}
              height={48}
              src={card.img}
              alt={card.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Author details - Better mobile typography */}
          <div className="min-w-0 flex-1">
            <h4 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white truncate">
              {card.name}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-tight">
              {card.title}
            </p>
          </div>
        </div>
      </div>

      {/* Hover Effect Border - Responsive */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl border-2 transition-all duration-500",
          hovered === index
            ? "border-purple-500/50 shadow-purple-500/25 shadow-lg sm:shadow-2xl"
            : "border-transparent"
        )}
      />
    </div>
  )
);

TestimonialsCard.displayName = "TestimonialsCard";

interface Card extends Testimonial {}

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 w-full">
      {cards.map((card, index) => (
        <TestimonialsCard
          key={`${card.name}-${index}`}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
