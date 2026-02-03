import { Metadata } from "next";
import Portfolio from "@/components/sections/Portfolio";
import FadeIn from "@/components/animations/FadeIn";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of successful events - conferences, galas, corporate events, and more.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-[var(--accent)] text-sm font-semibold tracking-wider uppercase">
              Our Work
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Featured{" "}
              <span className="text-gradient">Projects</span>
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

      {/* Portfolio with Filters */}
      <Portfolio showFilters={true} showViewAll={false} />

      {/* CTA */}
      <CTA />
    </>
  );
}
