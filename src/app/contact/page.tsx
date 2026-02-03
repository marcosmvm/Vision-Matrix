import type { Metadata } from "next";
import ContactPageContent from "@/components/sections/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | Vision Matrix",
  description:
    "Start your next event project with Vision Matrix. Tell us about your vision and we'll craft a tailored approach for your conference, summit, gala, or corporate event.",
  openGraph: {
    title: "Contact Us | Vision Matrix",
    description:
      "Start your next event project with Vision Matrix. Tell us about your vision and we'll craft a tailored approach.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/contact`,
    siteName: "Vision Matrix",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Us | Vision Matrix",
    description:
      "Start your next event project with Vision Matrix.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/contact`,
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
