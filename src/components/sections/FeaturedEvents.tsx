"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { featuredEvents } from "@/lib/data";

export default function FeaturedEvents() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-[var(--accent)] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Featured Events
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              BRINGING YOUR VISION TO LIGHT
            </h2>
          </FadeIn>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredEvents.map((event, index) => (
            <FadeIn key={event.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative aspect-[16/10] rounded-lg overflow-hidden cursor-pointer"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-[var(--accent)] text-black text-xs font-bold uppercase tracking-wider rounded mb-3">
                    {event.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {event.title}
                  </h3>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* See All Link */}
        <FadeIn delay={0.3}>
          <div className="text-center">
            <Link
              href="/event-gallery"
              className="inline-flex items-center gap-2 text-white font-semibold uppercase tracking-wider text-sm hover:text-[var(--accent)] transition-colors"
            >
              See all events
              <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
