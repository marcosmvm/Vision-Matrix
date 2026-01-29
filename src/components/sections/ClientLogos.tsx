"use client";

import { clientLogos } from "@/lib/data";

export default function ClientLogos() {
  // Triple the logos for seamless infinite scroll
  const tripledLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="relative w-full">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex items-center animate-marquee whitespace-nowrap">
          {tripledLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="inline-flex items-center justify-center mx-6 md:mx-10"
            >
              <span className="text-gray-500 font-bold text-xs md:text-sm tracking-wider uppercase">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
