import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Speaker, Palette, Video, CheckCircle, ArrowLeft } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import { services } from "@/lib/data";

const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  Calendar,
  Speaker,
  Palette,
  Video,
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon];
  const otherServices = services.filter((s) => s.id !== slug);

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
              Back to Services
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                    {Icon && <Icon size={32} className="text-[var(--accent)]" />}
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {service.title}
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-[var(--foreground-muted)] text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Button href="/contact" variant="primary" size="lg">
                  Request a Quote
                </Button>
              </FadeIn>
            </div>
            <FadeIn delay={0.3} direction="left">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
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

      {/* Features */}
      <section className="py-24 bg-[var(--background-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-12">
              What&apos;s Included
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <FadeIn key={feature} delay={index * 0.1}>
                <div className="p-6 bg-black rounded-xl border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <CheckCircle size={20} className="text-[var(--accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {feature}
                      </h3>
                      <p className="text-[var(--foreground-muted)] text-sm">
                        Professional {feature.toLowerCase()} services tailored to
                        your specific event requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-12">
              Explore Other Services
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((otherService, index) => {
              const OtherIcon = iconMap[otherService.icon];
              return (
                <FadeIn key={otherService.id} delay={index * 0.1}>
                  <Link href={`/services/${otherService.id}`}>
                    <div className="group p-6 bg-[var(--background-secondary)] rounded-xl border border-white/5 hover:border-[var(--accent)]/30 transition-all">
                      <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--accent)]/20 transition-colors">
                        {OtherIcon && (
                          <OtherIcon size={24} className="text-[var(--accent)]" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                        {otherService.title}
                      </h3>
                      <p className="text-[var(--foreground-muted)] text-sm">
                        {otherService.shortDescription}
                      </p>
                    </div>
                  </Link>
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
