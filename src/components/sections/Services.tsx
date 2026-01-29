"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Speaker, Palette, Video, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { services } from "@/lib/data";

const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  Calendar,
  Speaker,
  Palette,
  Video,
};

export default function Services() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-[var(--accent)] text-sm font-semibold tracking-wider uppercase">
              What We Do
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
              Our Services
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Comprehensive event production services tailored to bring your vision
              to life with precision and creativity.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.15}>
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <StaggerItem key={service.id}>
                <Link href={`/services/${service.id}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group relative h-full p-8 bg-[var(--background-secondary)] rounded-xl border border-white/5 hover:border-[var(--accent)]/30 transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--accent)]/20 transition-colors">
                        {Icon && (
                          <Icon
                            size={28}
                            className="text-[var(--accent)]"
                          />
                        )}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[var(--accent)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[var(--foreground-muted)] mb-6 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li
                            key={index}
                            className="text-sm text-[var(--foreground-muted)] flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Link */}
                      <span className="inline-flex items-center text-[var(--accent)] text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                        Learn More
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
