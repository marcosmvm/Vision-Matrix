"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { teamMembers } from "@/lib/data";

export default function TeamHighlights() {
  const featured = teamMembers.filter((m) => m.featured);

  return (
    <section className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <FadeIn>
            <span className="text-[var(--accent)] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Our Leadership
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              THE TEAM BEHIND THE VISION
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {featured.map((member) => (
            <StaggerItem key={member.id}>
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-white/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-[var(--accent)] text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-[var(--foreground-muted)] text-xs leading-relaxed">
                  {member.credentials}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Link
              href="/about"
              className="text-white/70 text-sm font-medium uppercase tracking-wider hover:text-white transition-colors"
            >
              Meet the Full Team →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
