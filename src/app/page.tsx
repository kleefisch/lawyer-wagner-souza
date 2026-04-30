import dynamic from "next/dynamic";
import { NavBar } from "../components/sections/NavBar";
import { HeroSection } from "../components/sections/HeroSection";
import { AreasSection } from "../components/sections/AreasSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { AboutSection } from "../components/sections/AboutSection";
import { DiferenciaisSection } from "../components/sections/DiferenciaisSection";
import { FaqSection } from "../components/sections/FaqSection";
import { ContactSection } from "../components/sections/ContactSection";
import { ClientModalsWrapper } from "../components/shared/ClientModalsWrapper";
import { FloatingWidgets } from "../components/shared/FloatingWidgets";

// Seções abaixo do fold: JS chunk separado, carregado depois do first paint
const TestimonialsSection = dynamic(() =>
  import("../components/sections/TestimonialsSection").then((m) => ({ default: m.TestimonialsSection }))
);

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
      <FloatingWidgets />
    </div>
  );
}
