"use client";

import React, { useState, useMemo } from "react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices = useMemo(() => {
    if (activeCategory === "all") return t.services.items;
    return t.services.items.filter(
      (service) =>
        service.category === activeCategory ||
        service.categories?.includes(activeCategory)
    );
  }, [activeCategory, t.services.items]);

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return t.services.items.length;
    return t.services.items.filter(
      (s) => s.category === categoryId || s.categories?.includes(categoryId)
    ).length;
  };

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-[#FEF2DD] border-y border-[#EDE1CC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          overline={t.services.overline}
          title={t.services.title}
          subtitle={t.services.subtitle}
          align="center"
        />

        {/* Simple & Clean Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {t.services.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = getCategoryCount(cat.id);

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
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

        {/* Curated Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="transition-all duration-300">
              <ServiceCard
                service={service}
                onSelectService={onSelectService}
                discoverMoreText={t.services.discoverMore}
              />
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 text-[#404944]">
            <p className="text-base font-medium">{t.services.noItems}</p>
          </div>
        )}
      </div>
    </section>
  );
}
