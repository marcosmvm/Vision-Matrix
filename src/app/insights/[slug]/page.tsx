import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { insightArticles } from "@/lib/data";

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = insightArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  return {
    title: `${article.title} | Vision Matrix Insights`,
    description: article.excerpt,
    alternates: {
      canonical: `${siteUrl}/insights/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${siteUrl}/insights/${slug}`,
      siteName: "Vision Matrix",
      images: [{ url: article.image, width: 800, height: 600, alt: article.title }],
      type: "article",
      publishedTime: article.publishDate,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = insightArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const relatedArticles = insightArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  return (
    <>
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        image={article.image}
        publishDate={article.publishDate}
        url={`/insights/${article.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Insights", url: "/insights" },
          { name: article.title, url: `/insights/${article.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <FadeIn>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Insights
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <span className="inline-block px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold uppercase tracking-wider rounded mb-4">
              {article.category}
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <span className="flex items-center gap-1">
                <User size={14} />
                {article.author}
              </span>
              <span>&middot;</span>
              <span>{article.publishDate}</span>
              <span>&middot;</span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {article.readTime}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="prose prose-invert prose-lg max-w-none">
              {article.content.map((block, i) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-2xl font-bold text-white mt-10 mb-4"
                    >
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-[var(--foreground-muted)] leading-relaxed mb-6"
                  >
                    {block}
                  </p>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-[var(--background-secondary)]">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
                Continue Reading
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedArticles.map((related, index) => (
                <FadeIn key={related.id} delay={index * 0.15}>
                  <Link
                    href={`/insights/${related.slug}`}
                    className="block group"
                  >
                    <div className="bg-background rounded-lg overflow-hidden border border-white/5">
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-[var(--accent)] text-xs font-semibold uppercase tracking-wider mb-2 block">
                          {related.category}
                        </span>
                        <h3 className="text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors mb-2">
                          {related.title}
                        </h3>
                        <p className="text-[var(--foreground-muted)] text-sm line-clamp-2">
                          {related.excerpt}
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
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Put These Insights Into Action?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[var(--foreground-muted)] text-lg mb-8">
              Partner with a team that delivers strategic event production at
              scale.
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
