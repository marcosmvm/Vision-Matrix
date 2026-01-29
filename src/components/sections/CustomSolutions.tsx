"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import { siteConfig } from "@/lib/data";

export default function CustomSolutions() {
  return (
    <section className="py-24 blue-gradient-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <span className="text-white/80 text-sm font-semibold tracking-[0.3em] uppercase mb-6 block">
            Custom Solutions
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            WHERE CREATIVITY MEETS
            <br />
            FLAWLESS EXECUTION
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="section-divider mb-8" />
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            {siteConfig.description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
