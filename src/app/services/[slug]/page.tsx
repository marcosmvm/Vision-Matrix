import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import { serviceCategories } from "@/lib/data";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = serviceCategories.find((c) => c.slug === slug);

  if (!category) {
    return { title: "Service Not Found" };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  return {
    title: `${category.title} | Vision Matrix Services`,
    description: category.description,
    alternates: {
      canonical: `${siteUrl}/services/${slug}`,
    },
    openGraph: {
      title: `${category.title} | Vision Matrix`,
      description: category.description,
      url: `${siteUrl}/services/${slug}`,
      siteName: "Vision Matrix",
      images: [{ url: category.image, width: 800, height: 600, alt: category.title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.title} | Vision Matrix`,
      description: category.description,
      images: [category.image],
    },
  };
}

export default async function ServiceCategoryPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const category = serviceCategories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const otherCategories = serviceCategories.filter((c) => c.slug !== slug);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[var(--foreground-muted)] hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              All Services
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <span className="text-[var(--accent)] text-sm font-semibold tracking-wider uppercase">
                  {category.subtitle}
                </span>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
                  {category.title}
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-[var(--foreground-muted)] text-lg leading-relaxed mb-8">
                  {category.description}
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Your Project
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </FadeIn>
            </div>
            <FadeIn delay={0.3} direction="left">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services in this Category */}
      <section className="py-24 bg-[var(--background-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-12">
              What&apos;s Included
            </h2>
          </FadeIn>
          <div className="space-y-8">
            {category.services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1}>
                <div className="p-8 bg-black/30 rounded-xl border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[var(--foreground-muted)] text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-white"
                      >
                        <CheckCircle size={18} className="text-[var(--accent)] flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-12">
              Explore Other Services
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {otherCategories.map((other, index) => (
              <FadeIn key={other.id} delay={index * 0.1}>
                <Link href={`/services/${other.slug}`}>
                  <div className="group p-6 bg-[var(--background-secondary)] rounded-xl border border-white/5 hover:border-[var(--accent)]/30 transition-all">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[var(--accent)] transition-colors">
                      {other.title}
                    </h3>
                    <p className="text-[var(--accent)] text-xs font-medium mb-3">
                      {other.subtitle}
                    </p>
                    <p className="text-[var(--foreground-muted)] text-sm line-clamp-3">
                      {other.description}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
