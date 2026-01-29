"use client";

import { clientLogos } from "@/lib/data";

export default function ClientLogos() {
  // Double the logos for seamless infinite scroll
  const doubledLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex animate-marquee">
          {doubledLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 px-8 md:px-12 flex items-center justify-center"
            >
              <span className="text-gray-400 font-semibold text-sm md:text-base whitespace-nowrap tracking-wide uppercase">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
