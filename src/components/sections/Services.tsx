"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Compass, Brush, Radio, ClipboardList, LucideProps } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { serviceCategories } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Compass,
  Brush,
  Radio,
  ClipboardList,
};

export default function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <FadeIn key={category.id} delay={index * 0.1}>
                <Link href={`/services/${category.slug}`} className="block">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-lg"
                  >
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/85 to-blue-700/90 group-hover:from-blue-800/85 group-hover:via-blue-700/90 group-hover:to-blue-600/95 transition-all duration-500" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="mb-6">
                        {Icon && (
                          <Icon size={48} className="text-white/90" strokeWidth={1.5} />
                        )}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wider leading-tight">
                        {category.title}
                      </h3>
                      <p className="text-white/60 text-sm mt-3 max-w-[200px]">
                        {category.subtitle}
                      </p>
                      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
                          Explore →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <div className="text-center pt-12">
          <Link
            href="/services"
            className="inline-block text-accent font-semibold uppercase tracking-wider text-sm hover:text-white transition-colors"
          >
            All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
