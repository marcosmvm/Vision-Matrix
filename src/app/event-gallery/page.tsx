"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import { portfolioItems, portfolioCategories } from "@/lib/data";

export default function EventGalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-[var(--accent)] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Event Gallery
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              BRINGING YOUR VISION TO LIGHT
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
              Explore our portfolio of successful events, from intimate gatherings
              to large-scale productions that have captivated audiences worldwide.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-[#0f1119]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filters */}
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {portfolioCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-[var(--accent)] text-black"
                      : "bg-transparent border border-white/20 text-white/70 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Events Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="group cursor-pointer">
                    {/* Image */}
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover Content */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-6 py-3 bg-[var(--accent)] text-black font-semibold uppercase tracking-wider text-sm">
                          View Details
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <span className="text-[var(--accent)] text-xs font-semibold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1 mb-2 group-hover:text-[var(--accent)] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[var(--foreground-muted)] text-sm line-clamp-2">
                        {item.description}
                      </p>
                      {item.location && (
                        <p className="text-[var(--foreground-muted)] text-xs mt-2">
                          {item.location}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
