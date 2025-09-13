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
        "rounded-xl relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-neutral-900 dark:to-neutral-800 overflow-hidden h-80 md:h-96 w-full transition-all duration-500 ease-out cursor-pointer shadow-lg hover:shadow-2xl border border-slate-200 dark:border-neutral-700",
        hovered !== null &&
          hovered !== index &&
          "blur-sm scale-[0.96] opacity-60"
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          fill
          src={card.img}
          alt={card.name}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Quote Icon */}
      <div className="absolute -top-2 left-0 z-10">
        <svg
          className="w-8 h-8 text-purple-500 opacity-80"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        {/* Quote */}
        <div className="flex-1 flex items-center">
          <p
            className={cn(
              "text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-200 transition-all duration-500",
              hovered === index
                ? "opacity-100 transform translate-y-0"
                : "opacity-90 transform translate-y-2"
            )}
          >
            "{card.quote}"
          </p>
        </div>

        {/* Author Info */}
        <div
          className={cn(
            "flex items-center gap-4 mt-6 p-4 bg-white/90 dark:bg-black/60 backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-500",
            hovered === index
              ? "opacity-100 transform translate-y-0"
              : "opacity-90 transform translate-y-1"
          )}
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/30">
            <Image
              fill
              src={card.img}
              alt={card.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white">
              {card.name}
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {card.title}
            </p>
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl border-2 transition-all duration-500",
          hovered === index
            ? "border-purple-500/50 shadow-purple-500/25 shadow-2xl"
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 w-full">
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
