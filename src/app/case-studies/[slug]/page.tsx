import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Quote } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { caseStudies } from "@/lib/data";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.title} | Vision Matrix`,
    description: study.challenge,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) notFound();

  const relatedStudies = caseStudies
    .filter((cs) => cs.id !== study.id)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Case Studies
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <span className="inline-block px-3 py-1 bg-[var(--accent)] text-black text-xs font-bold uppercase tracking-wider rounded mb-4">
              {study.eventType}
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {study.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-white/60 text-lg">
              {study.client} &middot; {study.location}
            </p>
          </FadeIn>

          {/* Stats Strip */}
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10">
              {Object.entries(study.stats).map(([key, value]) => (
                <div key={key}>
                  <span className="text-[var(--accent)] text-2xl md:text-3xl font-bold">
                    {value}
                  </span>
                  <span className="block text-white/50 text-sm uppercase tracking-wider mt-1 capitalize">
                    {key}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Challenge / Scope / Outcome */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <StaggerContainer className="grid md:grid-cols-3 gap-12">
            <StaggerItem>
              <div>
                <span className="text-[var(--accent)] text-sm font-semibold tracking-[0.3em] uppercase block mb-4">
                  The Challenge
                </span>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  {study.challenge}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div>
                <span className="text-[var(--accent)] text-sm font-semibold tracking-[0.3em] uppercase block mb-4">
                  Our Scope
                </span>
                <ul className="space-y-3">
                  {study.scope.map((item, i) => (
                    <li
                      key={i}
                      className="text-[var(--foreground-muted)] text-sm leading-relaxed flex gap-2"
                    >
                      <span className="text-[var(--accent)] mt-1">&#x2022;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div>
                <span className="text-[var(--accent)] text-sm font-semibold tracking-[0.3em] uppercase block mb-4">
                  The Outcome
                </span>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  {study.outcome}
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Client Quote */}
      {study.quote && (
        <section className="py-20 bg-[var(--background-secondary)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <Quote
                size={40}
                className="text-[var(--accent)]/30 mx-auto mb-6"
              />
              <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
                &ldquo;{study.quote.text}&rdquo;
              </blockquote>
              <div>
                <p className="text-white font-semibold">
                  {study.quote.author}
                </p>
                <p className="text-[var(--foreground-muted)] text-sm">
                  {study.quote.title}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
                More Case Studies
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedStudies.map((related, index) => (
                <FadeIn key={related.id} delay={index * 0.15}>
                  <Link
                    href={`/case-studies/${related.slug}`}
                    className="block group"
                  >
                    <div className="relative rounded-lg overflow-hidden">
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="inline-block px-3 py-1 bg-[var(--accent)] text-black text-xs font-bold uppercase tracking-wider rounded mb-3">
                          {related.eventType}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {related.title}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {related.client} &middot; {related.location}
                        </p>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[var(--foreground-muted)] text-lg mb-8">
              Let&apos;s discuss how we can deliver this caliber of results
              for your next event.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-black font-semibold uppercase tracking-wider text-sm hover:bg-[var(--accent-secondary)] transition-colors rounded-lg"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
