"use client";

import React, { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

interface LanguageOption {
  code: Locale;
  label: string;
  nativeLabel: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "English", flag: "🇬🇧" },
  { code: "fr", label: "French", nativeLabel: "Français", flag: "🇫🇷" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية", flag: "🇹🇳" },
  { code: "de", label: "German", nativeLabel: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italian", nativeLabel: "Italiano", flag: "🇮🇹" },
];

interface LanguageSelectorProps {
  scrolled?: boolean;
  isMobileDrawer?: boolean;
}

export function LanguageSelector({
  scrolled = false,
  isMobileDrawer = false,
}: LanguageSelectorProps) {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (isMobileDrawer) {
    return (
      <div className="py-2 border-t border-[#F4E8D3]/80">
        <p className="text-xs uppercase font-bold text-[#B86F3D] mb-2 px-1 flex items-center gap-1.5">
          <Globe className="size-3.5" />
          <span>Language / Langue / اللغة</span>
        </p>
        <div className="grid grid-cols-2 gap-2">
          {languages.map((lang) => {
            const isSelected = lang.code === locale;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLocale(lang.code)}
                className={cn(
                  "flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                  isSelected
                    ? "bg-[#174C38] text-white shadow-sm"
                    : "bg-[#FEF2DD] text-[#382719] hover:bg-[#F4E8D3]"
                )}
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-sm">{lang.flag}</span>
                  <span>{lang.nativeLabel}</span>
                </span>
                {isSelected && <Check className="size-3 text-[#C99550]" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Select language"
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer border select-none",
          scrolled
            ? "bg-[#FEF2DD] text-[#174C38] border-[#EDE1CC] hover:border-[#C99550] shadow-sm"
            : "bg-white/10 text-[#FFF9F0] border-white/20 hover:bg-white/20 backdrop-blur-md"
        )}
      >
        <span className="text-sm">{currentLang.flag}</span>
        <span className="uppercase tracking-wider">{currentLang.code}</span>
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-48 rounded-xl bg-[#FFF9F0] border border-[#EDE1CC] shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 origin-top-right text-left"
        >
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#B86F3D] border-b border-[#EDE1CC]/70 flex items-center gap-1.5">
            <Globe className="size-3" />
            <span>Select Language</span>
          </div>

          {languages.map((lang) => {
            const isSelected = lang.code === locale;
            return (
              <button
                key={lang.code}
                role="menuitem"
                type="button"
                onClick={() => {
                  setLocale(lang.code);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium transition-colors text-left cursor-pointer",
                  isSelected
                    ? "bg-[#174C38] text-white font-bold"
                    : "text-[#382719] hover:bg-[#FEF2DD] hover:text-[#174C38]"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base leading-none">{lang.flag}</span>
                  <div className="flex flex-col">
                    <span className="font-semibold">{lang.nativeLabel}</span>
                    <span
                      className={cn(
                        "text-[10px]",
                        isSelected ? "text-[#F4E8D3]/80" : "text-[#404944]/70"
                      )}
                    >
                      {lang.label}
                    </span>
                  </div>
                </div>

                {isSelected && (
                  <Check className="size-3.5 text-[#C99550] shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
