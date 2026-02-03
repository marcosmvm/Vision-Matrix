"use client";

import { clientLogos } from "@/lib/data";

export default function ClientLogos() {
  // Triple the logos for seamless infinite scroll
  const tripledLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-12 bg-background-secondary overflow-hidden border-y border-white/5">
      <div className="relative w-full">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background-secondary to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex items-center animate-marquee whitespace-nowrap">
          {tripledLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="inline-flex items-center justify-center mx-8 md:mx-14"
            >
              <span className="text-white/50 font-bold text-sm md:text-base tracking-[0.2em] uppercase whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
