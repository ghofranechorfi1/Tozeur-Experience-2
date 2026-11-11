"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  X,
  Calendar,
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  Sparkles,
  Info,
} from "lucide-react";
import { EventItem } from "@/data/events";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface EventModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
  onBook?: (eventTitle: string) => void;
}

export function EventModal({
  event,
  isOpen,
  onClose,
}: EventModalProps) {
  const { t } = useLanguage();

  // Handle ESC key and scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !event) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#103B2D] text-[#FFF9F0] rounded-3xl border border-[#C99550]/40 shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 size-10 rounded-full bg-black/60 hover:bg-[#C99550] hover:text-[#103B2D] text-white flex items-center justify-center transition-all duration-200 cursor-pointer border border-white/20 shadow-lg"
        >
          <X className="size-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {/* Header Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black/40">
            <Image
              src={event.image}
              alt={event.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#103B2D] via-[#103B2D]/40 to-transparent" />

            {/* Tag Badge */}
            <div className="absolute top-4 left-4">
              <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#174C38]/90 text-[#F4E8D3] border border-[#C99550]/50 backdrop-blur-md shadow-md">
                {event.tag}
              </span>
            </div>

            {/* Title Overlay in bottom of banner */}
            <div className="absolute bottom-4 left-6 right-6">
              <h2
                id="event-modal-title"
                className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFF9F0] leading-tight drop-shadow-md"
              >
                {event.title}
              </h2>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Metadata Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#174C38]/60 border border-[#C99550]/20">
                <Calendar className="size-4 text-[#C99550] shrink-0" />
                <div className="text-xs">
                  <span className="text-[#F4E8D3]/70 block font-light">
                    {t.events.dateLabel}
                  </span>
                  <strong className="text-white font-medium">{event.datePlaceholder}</strong>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#174C38]/60 border border-[#C99550]/20">
                <MapPin className="size-4 text-[#C99550] shrink-0" />
                <div className="text-xs">
                  <span className="text-[#F4E8D3]/70 block font-light">
                    {t.events.locationLabel}
                  </span>
                  <strong className="text-white font-medium">{event.location}</strong>
                </div>
              </div>

              {event.duration && (
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#174C38]/60 border border-[#C99550]/20">
                  <Clock className="size-4 text-[#C99550] shrink-0" />
                  <div className="text-xs">
                    <span className="text-[#F4E8D3]/70 block font-light">
                      {t.events.durationLabel}
                    </span>
                    <strong className="text-white font-medium">{event.duration}</strong>
                  </div>
                </div>
              )}

              {event.groupSize && (
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#174C38]/60 border border-[#C99550]/20">
                  <Users className="size-4 text-[#C99550] shrink-0" />
                  <div className="text-xs">
                    <span className="text-[#F4E8D3]/70 block font-light">
                      {t.events.capacityLabel}
                    </span>
                    <strong className="text-white font-medium">{event.groupSize}</strong>
                  </div>
                </div>
              )}
            </div>

            {/* Full Description */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C99550] mb-2 flex items-center gap-2">
                <Sparkles className="size-3.5" />
                <span>{t.events.aboutTitle}</span>
              </h3>
              <p className="text-sm sm:text-base text-[#F4E8D3]/90 leading-relaxed font-light">
                {event.description}
              </p>
            </div>

            {/* Highlights */}
            {event.highlights && event.highlights.length > 0 && (
              <div className="pt-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C99550] mb-3">
                  {t.events.highlightsTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {event.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#174C38]/40 border border-white/10"
                    >
                      <CheckCircle2 className="size-4 text-[#C99550] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#F4E8D3] font-normal leading-snug">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What's Included */}
            {event.included && event.included.length > 0 && (
              <div className="pt-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C99550] mb-3">
                  {t.events.includedTitle}
                </h3>
                <ul className="space-y-2 bg-[#0B2A20]/60 p-4 rounded-xl border border-white/10">
                  {event.included.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm text-[#F4E8D3]/90"
                    >
                      <span className="size-1.5 rounded-full bg-[#C99550] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Practical Advice Note */}
            {event.practicalInfo && (
              <div className="p-4 rounded-xl bg-[#FEF2DD]/10 border border-[#C99550]/40 flex items-start gap-3">
                <Info className="size-5 text-[#C99550] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#F4E8D3]/90 leading-relaxed">
                  <strong className="text-[#E0B47A] font-semibold">
                    {t.events.practicalNoteTitle}{" "}
                  </strong>
                  {event.practicalInfo}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 bg-[#0B2A20]/95 border-t border-[#C99550]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#F4E8D3]/70 text-center sm:text-left">
            {t.events.conciergeNotice}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#FFF9F0] hover:bg-[#C99550] text-[#174C38] hover:text-[#103B2D] text-xs sm:text-sm font-bold transition-all duration-200 shadow-md cursor-pointer"
          >
            {t.events.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
