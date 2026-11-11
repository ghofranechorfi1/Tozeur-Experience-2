"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ExternalLink, Compass } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface ContactProps {
  selectedService?: string | null;
}

export function Contact({ selectedService }: ContactProps) {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#FFF9F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          overline={t.contact.overline}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          align="left"
        />

        {selectedService && (
          <div className="mb-8 p-4 rounded-xl bg-[#FEF2DD] border border-[#C99550] flex items-center justify-between animate-in fade-in">
            <p className="text-sm text-[#174C38] font-medium">
              {t.contact.inquiringAbout}{" "}
              <strong className="font-bold text-[#B86F3D]">
                {selectedService}
              </strong>
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
            {/* Phone Card */}
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="group flex items-start gap-5 p-6 rounded-2xl bg-[#FEF2DD] border border-[#EDE1CC] hover:border-[#C99550] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="size-14 rounded-xl bg-[#174C38] text-white flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#103B2D] transition-transform duration-300 shadow-sm">
                <Phone className="size-6 text-[#C99550]" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider font-bold text-[#B86F3D] mb-1">
                  {t.contact.phoneTitle}
                </p>
                <p className="text-xl font-bold text-[#174C38] group-hover:text-[#B86F3D] transition-colors">
                  {siteConfig.phone}
                </p>
                <p className="text-xs text-[#404944] mt-1.5 leading-relaxed">
                  {t.contact.phoneSubtitle}
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-start gap-5 p-6 rounded-2xl bg-[#FEF2DD] border border-[#EDE1CC] hover:border-[#C99550] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="size-14 rounded-xl bg-[#174C38] text-white flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#103B2D] transition-transform duration-300 shadow-sm">
                <Mail className="size-6 text-[#C99550]" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider font-bold text-[#B86F3D] mb-1">
                  {t.contact.emailTitle}
                </p>
                <p className="text-xl font-bold text-[#174C38] group-hover:text-[#B86F3D] transition-colors break-all">
                  {siteConfig.email}
                </p>
                <p className="text-xs text-[#404944] mt-1.5 leading-relaxed">
                  {t.contact.emailSubtitle}
                </p>
              </div>
            </a>

            {/* Address Card */}
            <div className="flex items-start gap-5 p-6 rounded-2xl bg-[#FEF2DD] border border-[#EDE1CC]">
              <div className="size-14 rounded-xl bg-[#174C38] text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="size-6 text-[#C99550]" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider font-bold text-[#B86F3D] mb-1">
                  {t.contact.addressTitle}
                </p>
                <p className="text-base font-bold text-[#174C38]">
                  {t.contact.addressValue}
                </p>
                <p className="text-xs text-[#404944] mt-1.5 leading-relaxed">
                  {t.contact.addressSubtitle}
                </p>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="flex items-start gap-5 p-6 rounded-2xl bg-[#FEF2DD] border border-[#EDE1CC]">
              <div className="size-14 rounded-xl bg-[#174C38] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="size-6 text-[#C99550]" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider font-bold text-[#B86F3D] mb-1">
                  {t.contact.hoursTitle}
                </p>
                <p className="text-base font-bold text-[#174C38]">
                  {t.contact.hoursValue}
                </p>
                <p className="text-xs text-[#404944] mt-1.5 leading-relaxed">
                  {t.contact.hoursSubtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Location Visual & Google Maps Preview */}
          <div className="lg:col-span-6">
            <div className="h-full bg-[#FEF2DD] border border-[#EDE1CC] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B86F3D] block mb-1">
                      {t.contact.destinationTag}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#174C38]">
                      {t.contact.destinationTitle}
                    </h3>
                  </div>
                  <div className="size-12 rounded-full bg-[#174C38]/10 flex items-center justify-center text-[#174C38]">
                    <Compass className="size-6 text-[#C99550]" />
                  </div>
                </div>

                {/* Map Visual Preview Container */}
                {/* Interactive Google Map */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden mb-6 border border-[#EDE1CC] shadow-inner bg-[#EDE1CC]">
                  <iframe
                    src={siteConfig.mapsEmbedUrl}
                    title="Tozeur Experience - Localisation"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <p className="text-sm text-[#404944] leading-relaxed mb-6">
                  {t.contact.destinationDesc}
                </p>
              </div>

              {/* Google Maps CTA */}
              <div className="pt-4 border-t border-[#EDE1CC]">
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#174C38] text-white font-bold text-sm hover:bg-[#103B2D] border border-[#C99550]/40 shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <span>{t.contact.mapsCta}</span>
                  <ExternalLink className="size-4 text-[#C99550] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
