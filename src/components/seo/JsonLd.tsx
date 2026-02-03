interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vm-events.com";

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "EventPlanningService",
        name: "Vision Matrix",
        url: siteUrl,
        description:
          "Strategic event production for brands that demand excellence. Nearly two decades partnering with Fortune 500 companies, leading foundations, and global brands.",
        telephone: "(310) 555-0192",
        email: "info@vm-events.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Los Angeles",
          addressRegion: "CA",
          addressCountry: "US",
        },
        sameAs: [
          "https://instagram.com/visionmatrix",
          "https://linkedin.com/company/visionmatrix",
          "https://facebook.com/visionmatrix",
        ],
        foundingDate: "2005",
        numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10 },
        areaServed: { "@type": "Country", name: "United States" },
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vm-events.com";

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
        })),
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  image,
  publishDate,
  url,
}: {
  title: string;
  description: string;
  image: string;
  publishDate: string;
  url: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vm-events.com";

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        image,
        datePublished: publishDate,
        url: url.startsWith("http") ? url : `${siteUrl}${url}`,
        author: {
          "@type": "Organization",
          name: "Vision Matrix",
        },
        publisher: {
          "@type": "Organization",
          name: "Vision Matrix",
          url: siteUrl,
        },
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vm-events.com";

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: url.startsWith("http") ? url : `${siteUrl}${url}`,
        provider: {
          "@type": "Organization",
          name: "Vision Matrix",
          url: siteUrl,
        },
      }}
    />
  );
}
