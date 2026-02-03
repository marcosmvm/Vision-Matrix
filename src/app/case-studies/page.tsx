"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { caseStudies, caseStudyCategories } from "@/lib/data";

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-[var(--accent)] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Our Work
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Case Studies
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
              Explore how we&apos;ve helped leading organizations deliver
              events that drive measurable outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter */}
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {caseStudyCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all ${
                    activeCategory === cat.id
                      ? "bg-[var(--accent)] text-black"
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((study, index) => (
              <FadeIn key={study.id} delay={index * 0.1}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="block group"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative rounded-lg overflow-hidden bg-[var(--background-secondary)] border border-white/5"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-[var(--accent)] text-black text-xs font-bold uppercase tracking-wider rounded">
                        {study.eventType}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-3">
                        {study.client} &middot; {study.location}
                      </p>
                      <p className="text-[var(--foreground-muted)] text-sm line-clamp-2">
                        {study.challenge}
                      </p>

                      {/* Stats */}
                      <div className="flex gap-4 mt-4 pt-4 border-t border-white/5">
                        {Object.entries(study.stats)
                          .slice(0, 3)
                          .map(([key, value]) => (
                            <div key={key}>
                              <span className="text-[var(--accent)] text-sm font-bold">
                                {value}
                              </span>
                              <span className="text-white/40 text-xs ml-1 capitalize">
                                {key}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[var(--foreground-muted)] text-lg">
                No case studies found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your{" "}
              <span className="text-gradient">Success Story?</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[var(--foreground-muted)] text-lg mb-8">
              Let&apos;s discuss how we can deliver the same caliber of
              results for your next event.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-black font-semibold uppercase tracking-wider text-sm hover:bg-[var(--accent-secondary)] transition-colors rounded-lg"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
