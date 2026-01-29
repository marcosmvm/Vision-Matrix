import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Speaker, Palette, Video, ArrowRight, CheckCircle } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import CTA from "@/components/sections/CTA";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive event production services - planning, audio-visual, branding, and videography.",
};

const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  Calendar,
  Speaker,
  Palette,
  Video,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-[var(--accent)] text-sm font-semibold tracking-wider uppercase">
              Our Services
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Comprehensive Event{" "}
              <span className="text-gradient">Solutions</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
              From concept to execution, we offer end-to-end event production
              services tailored to bring your vision to life with precision and
              creativity.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-[var(--background-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 0;

              return (
                <FadeIn key={service.id} delay={index * 0.1}>
                  <div
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                      !isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={!isEven ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                          {Icon && <Icon size={28} className="text-[var(--accent)]" />}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-[var(--foreground-muted)] text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-white"
                          >
                            <CheckCircle size={18} className="text-[var(--accent)]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${service.id}`}
                        className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:gap-4 transition-all"
                      >
                        Learn More
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                    <div
                      className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-black ${
                        !isEven ? "lg:order-1" : ""
                      }`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        {Icon && (
                          <Icon
                            size={120}
                            className="text-[var(--accent)]/10"
                          />
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent" />
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}
