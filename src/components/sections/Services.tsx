"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { LayoutGrid, Radio, Brush, Clapperboard, LucideProps } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { services } from "@/lib/data";

const iconMap: { [key: string]: React.ComponentType<LucideProps> } = {
  Calendar: LayoutGrid,
  Speaker: Radio,
  Palette: Brush,
  Video: Clapperboard,
};

export default function Services() {
  return (
    <section className="bg-[#0a0a0f]">
      {/* Services Grid - Full Width */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <FadeIn key={service.id} delay={index * 0.1}>
              <Link href={`/services/${service.id}`} className="block">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
                >
                  {/* Background Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Blue Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/85 to-blue-700/90 group-hover:from-blue-800/85 group-hover:via-blue-700/90 group-hover:to-blue-600/95 transition-all duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    {/* Icon */}
                    <div className="mb-6">
                      {Icon && (
                        <Icon
                          size={48}
                          className="text-white/90"
                          strokeWidth={1.5}
                        />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wider leading-tight">
                      {service.shortTitle}
                    </h3>

                    {/* Hover indicator */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
                        View Details →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          );
        })}
      </div>

      {/* All Services Link */}
      <div className="text-center py-8 bg-[#0f1119]">
        <Link
          href="/services"
          className="inline-block text-[var(--accent)] font-semibold uppercase tracking-wider text-sm hover:text-white transition-colors"
        >
          All Services →
        </Link>
      </div>
    </section>
  );
}
