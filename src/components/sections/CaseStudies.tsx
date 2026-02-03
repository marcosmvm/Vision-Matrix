"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { caseStudies } from "@/lib/data";

export default function CaseStudies() {
  const featured = caseStudies.filter((cs) => cs.featured).slice(0, 3);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-[var(--accent)] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Our Impact
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              FEATURED WORK
            </h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featured.map((study, index) => (
            <FadeIn key={study.id} delay={index * 0.15}>
              <Link href={`/case-studies/${study.slug}`} className="block group">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative rounded-lg overflow-hidden"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-[var(--accent)] text-black text-xs font-bold uppercase tracking-wider rounded mb-3">
                      {study.eventType}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {study.title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {study.client} &middot; {study.location}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-white font-semibold uppercase tracking-wider text-sm hover:text-[var(--accent)] transition-colors"
            >
              View all case studies
              <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
