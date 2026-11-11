"use client";

import React, { useState } from "react";
import { EventItem } from "@/data/events";
import { EventCard } from "@/components/ui/EventCard";
import { EventModal } from "@/components/ui/EventModal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Events() {
  const { t } = useLanguage();
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  return (
    <section
      id="events"
      className="py-24 lg:py-32 bg-[#174C38] text-[#FFF9F0] relative overflow-hidden"
    >
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#103B2D] rounded-full blur-3xl pointer-events-none -z-0 opacity-60" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          overline={t.events.overline}
          title={t.events.title}
          subtitle={t.events.subtitle}
          align="center"
          theme="dark"
        />

        {/* 3 Distinct Event Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.events.items.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              seeMoreText={t.events.seeMoreInfos}
              dateLabel={t.events.dateLabel}
              locationLabel={t.events.locationLabel}
              onOpenDetails={(evt) => setActiveModalEvent(evt)}
            />
          ))}
        </div>
      </div>

      {/* Event Details Popup Modal */}
      <EventModal
        event={activeModalEvent}
        isOpen={Boolean(activeModalEvent)}
        onClose={() => setActiveModalEvent(null)}
      />
    </section>
  );
}
