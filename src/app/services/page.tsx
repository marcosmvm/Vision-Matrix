import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Compass, Brush, Radio, ClipboardList, ArrowRight, LucideProps } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import CTA from "@/components/sections/CTA";
import { serviceCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "End-to-end event production services — from strategy and planning through creative design, technical production, and on-site logistics.",
};

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Compass,
  Brush,
  Radio,
  ClipboardList,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-[var(--accent)] text-sm font-semibold tracking-wider uppercase">
              Our Services
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              End-to-End Event{" "}
              <span className="text-gradient">Production</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
              From strategy through execution, we offer comprehensive event
              production services designed to deliver measurable outcomes and
              unforgettable experiences.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-[var(--background-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {serviceCategories.map((category, index) => {
              const Icon = iconMap[category.icon];
              const isEven = index % 2 === 0;

              return (
                <FadeIn key={category.id} delay={index * 0.1}>
                  <div
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
                  >
                    <div className={!isEven ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                          {Icon && <Icon size={28} className="text-[var(--accent)]" />}
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-white">
                            {category.title}
                          </h2>
                          <p className="text-[var(--accent)] text-sm font-medium">
                            {category.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-[var(--foreground-muted)] text-lg leading-relaxed mb-8">
                        {category.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {category.services.map((service) => (
                          <div
                            key={service.id}
                            className="p-4 bg-black/30 rounded-lg border border-white/5"
                          >
                            <h3 className="text-white font-semibold mb-1">
                              {service.title}
                            </h3>
                            <p className="text-[var(--foreground-muted)] text-sm">
                              {service.shortDescription}
                            </p>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`/services/${category.slug}`}
                        className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:gap-4 transition-all"
                      >
                        Explore {category.title}
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                    <div
                      className={`relative aspect-[4/3] rounded-xl overflow-hidden ${
                        !isEven ? "lg:order-1" : ""
                      }`}
                    >
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-secondary)]/80 to-transparent" />
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
