import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import CustomSolutions from "@/components/sections/CustomSolutions";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import TeamHighlights from "@/components/sections/TeamHighlights";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <CustomSolutions />
      <Stats />
      <Services />
      <CaseStudies />
      <TeamHighlights />
      <Testimonials />
      <CTA />
      <ContactForm />
    </>
  );
}
