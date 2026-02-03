export type ServiceCategory = "strategy" | "creative" | "production" | "logistics";

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface ServiceCategoryGroup {
  id: ServiceCategory;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  icon: string;
  image: string;
  services: ServiceItem[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  eventType: string;
  location: string;
  challenge: string;
  scope: string[];
  outcome: string;
  quote?: { text: string; author: string; title: string };
  image: string;
  stats: Record<string, string>;
  category: string;
  featured: boolean;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  fullBio: string;
  image: string;
  featured: boolean;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  company: string;
  image?: string;
}

export interface NavLink {
  name: string;
  href: string;
  isButton?: boolean;
  children?: NavLink[];
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
  description: string;
}

export interface ClientLogo {
  name: string;
  id: string;
}

export interface Value {
  title: string;
  description: string;
}
