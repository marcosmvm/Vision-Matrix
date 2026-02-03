import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { insightArticles } from "@/lib/data";

export const metadata = {
  title: "Insights | Vision Matrix",
  description:
    "Expert perspectives on event production, hybrid events, and maximizing ROI from corporate conferences.",
};

export default function InsightsPage() {
  const featured = insightArticles.find((a) => a.featured);
  const rest = insightArticles.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-[var(--accent)] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              Insights
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Expert Perspectives
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
              Practical guidance on event production strategy, technology, and
              maximizing ROI from your events.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="pb-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn delay={0.3}>
              <Link
                href={`/insights/${featured.slug}`}
                className="block group"
              >
                <div className="grid md:grid-cols-2 gap-8 bg-[var(--background-secondary)] rounded-lg overflow-hidden border border-white/5">
                  <div className="relative aspect-[4/3] md:aspect-auto">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold uppercase tracking-wider rounded mb-4 w-fit">
                      Featured
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[var(--accent)] transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-[var(--foreground-muted)] leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-white/40 text-sm">
                      <span>{featured.author}</span>
                      <span>&middot;</span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {featured.readTime}
                      </span>
                      <span>&middot;</span>
                      <span>{featured.category}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article) => (
              <StaggerItem key={article.id}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="block group h-full"
                >
                  <div className="bg-[var(--background-secondary)] rounded-lg overflow-hidden border border-white/5 h-full flex flex-col">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-[var(--accent)] text-xs font-semibold uppercase tracking-wider mb-3">
                        {article.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[var(--accent)] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-4 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-white/40 text-xs">
                        <span>{article.author}</span>
                        <span>&middot;</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have a Project in Mind?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[var(--foreground-muted)] text-lg mb-8">
              Put these insights into action. Let&apos;s discuss how we can
              help deliver your next event.
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
