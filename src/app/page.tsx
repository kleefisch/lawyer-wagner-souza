import { DiferenciaisSection } from "../components/sections/DiferenciaisSection";
import { HeroSection } from "../components/sections/HeroSection";
import { NavBar } from "../components/sections/NavBar";
import { AreasSection } from "../components/sections/AreasSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { FaqSection } from "../components/sections/FaqSection";
import { ContactSection } from "../components/sections/ContactSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ClientModalsWrapper } from "../components/shared/ClientModalsWrapper";
import { WhatsAppButton } from "../components/shared/WhatsAppButton";
import { ScrollToTopButton } from "../components/shared/ScrollToTopButton";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <AreasSection />
      <ProcessSection />
      <AboutSection />
      <DiferenciaisSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />

      <ClientModalsWrapper />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}
