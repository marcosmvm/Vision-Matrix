"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-24 bg-[var(--background-secondary)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <span className="text-[var(--accent)] text-sm font-semibold tracking-wider uppercase">
            Ready to Start?
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Let&apos;s Create Something{" "}
            <span className="text-gradient">Extraordinary</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto mb-10">
            Whether you&apos;re planning a corporate conference, product launch, or
            private celebration, our team is ready to bring your vision to life.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button href="/portfolio" variant="secondary" size="lg">
              Explore Our Work
            </Button>
          </div>
        </FadeIn>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-[var(--accent)]/20"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute -right-20 top-1/3 w-64 h-64 rounded-full border border-[var(--accent)]/10"
        />
      </div>
    </section>
  );
}
