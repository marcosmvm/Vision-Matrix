"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { portfolioItems, portfolioCategories } from "@/lib/data";

interface PortfolioProps {
  showFilters?: boolean;
  limit?: number;
  showViewAll?: boolean;
}

export default function Portfolio({
  showFilters = false,
  limit,
  showViewAll = true,
}: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = portfolioItems
    .filter((item) => activeCategory === "all" || item.category === activeCategory)
    .slice(0, limit || portfolioItems.length);

  return (
    <section className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeIn>
            <span className="text-[var(--accent)] text-sm font-semibold tracking-wider uppercase">
              Our Work
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
              Featured Projects
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Explore our portfolio of successful events, from intimate gatherings
              to large-scale productions.
            </p>
          </FadeIn>
        </div>

        {/* Category Filters */}
        {showFilters && (
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {portfolioCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-[var(--accent)] text-black"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer">
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <motion.div
                      initial={false}
                      animate={{ y: 0 }}
                      className="transform group-hover:-translate-y-2 transition-transform duration-300"
                    >
                      <span className="inline-block px-3 py-1 bg-[var(--accent)] text-black text-xs font-semibold rounded-full mb-3 capitalize">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.description}
                      </p>
                      <span className="inline-flex items-center text-[var(--accent)] text-sm font-medium gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Project
                        <ExternalLink size={14} />
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        {showViewAll && (
          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Button href="/portfolio" variant="outline" size="lg">
                View All Projects
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
