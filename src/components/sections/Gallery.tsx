"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export function Gallery() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return t.gallery.items;
    return t.gallery.items.filter(
      (item) =>
        item.filterCategory === activeCategory ||
        item.filterCategories?.includes(activeCategory)
    );
  }, [activeCategory, t.gallery.items]);

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return t.gallery.items.length;
    return t.gallery.items.filter(
      (item) =>
        item.filterCategory === categoryId ||
        item.filterCategories?.includes(categoryId)
    ).length;
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#FFF9F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          overline={t.gallery.overline}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
          align="center"
        />

        {/* Simple & Clean Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {t.gallery.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = getCategoryCount(cat.id);

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setLightboxIndex(null);
                }}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none",
                  isActive
                    ? "bg-[#174C38] text-white border border-[#174C38] shadow-sm"
                    : "bg-transparent text-[#404944] border border-[#D5C2A5] hover:border-[#174C38] hover:text-[#174C38] hover:bg-black/5"
                )}
              >
                <span>{cat.label}</span>
                <span
                  className={cn(
                    "text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full",
                    isActive
                      ? "bg-[#C99550] text-[#103B2D]"
                      : "bg-[#EADBC8] text-[#382719]"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const spanClass =
              activeCategory === "all"
                ? item.aspectSpan || "md:col-span-1"
                : "md:col-span-1";

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIndex(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Open photo: ${item.title}`}
                className={cn(
                  "relative group overflow-hidden rounded-2xl h-80 sm:h-96 shadow-md cursor-pointer border border-[#EDE1CC] focus:outline-none focus:ring-2 focus:ring-[#C99550] transition-all duration-300",
                  spanClass
                )}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C99550]">
                      {item.category}
                    </span>
                    <div className="size-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="size-4 text-white" />
                    </div>
                  </div>

                  <p className="font-serif text-xl sm:text-2xl font-bold leading-snug">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#F4E8D3]/80 line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-[#404944]">
            <p className="text-base font-medium">{t.gallery.noItems}</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
