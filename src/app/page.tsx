import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import CustomSolutions from "@/components/sections/CustomSolutions";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import FeaturedEvents from "@/components/sections/FeaturedEvents";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <CustomSolutions />
      <WhoWeAre />
      <Services />
      <Testimonials />
      <FeaturedEvents />
      <ContactForm />
    </>
  );
}
