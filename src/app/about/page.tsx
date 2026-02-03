import { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import { teamMembers, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Vision Matrix Productions - nearly two decades of experience in strategic event production for the world's leading brands.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <span className="text-[var(--accent)] text-sm font-semibold tracking-wider uppercase">
                  About Us
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                  The Team Behind{" "}
                  <span className="text-gradient">the Vision</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-[var(--foreground-muted)] text-lg leading-relaxed mb-6">
                  For nearly two decades, Vision Matrix Productions has been at the
                  forefront of event production, combining large-scale creativity,
                  meticulous project management, and advanced equipment to deliver
                  customized solutions for clients worldwide.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-[var(--foreground-muted)] text-lg leading-relaxed">
                  Based in Los Angeles, we serve Fortune 500 companies, non-profit
                  organizations, and private clients across the globe, bringing
                  their visions to life through innovative event experiences.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2} direction="left">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800"
                  alt="Vision Matrix team at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Our Values */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-[var(--accent)] text-sm font-semibold tracking-wider uppercase">
                Our Values
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
                What Drives Us
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-8 bg-[var(--background-secondary)] rounded-xl border border-white/5 h-full hover:border-[var(--accent)]/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-6">
                    <div className="w-3 h-3 rounded-full bg-[var(--accent)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[var(--background-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-[var(--accent)] text-sm font-semibold tracking-wider uppercase">
                Our Leadership
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
                Meet the Experts
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
                Our leadership team brings decades of combined experience and a
                shared commitment to delivering exceptional events.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <StaggerItem key={member.id}>
                <div className="group text-center">
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-[var(--accent)] text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
                    {member.fullBio}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}
