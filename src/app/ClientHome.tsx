"use client";

import { useState, useEffect } from "react";
import { DiferenciaisSection } from "../components/sections/DiferenciaisSection";

import { Footer } from "../components/shared/Footer";
import { CookieBanner } from "../components/shared/CookieBanner";
import { LegalModals } from "../components/shared/LegalModals";
import { WhatsAppButton } from "../components/shared/WhatsAppButton";
import { ScrollToTopButton } from "../components/shared/ScrollToTopButton";
import { HeroSection } from "../components/sections/HeroSection";
import { NavBar } from "../components/sections/NavBar";
import { AreasSection } from "../components/sections/AreasSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { FaqSection } from "../components/sections/FaqSection";
import { ContactSection } from "../components/sections/ContactSection";
import { AboutSection } from "../components/sections/AboutSection";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [testimonialPage, setTestimonialPage] = useState(0);
  const [activeModal, setActiveModal] = useState<
    "privacy" | "terms" | "cookies" | null
  >(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setTestimonialPage(0); // Reset page when switching between mobile/desktop
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const itemsPerPage = isMobile ? 1 : 3;
    const totalPages = Math.ceil(9 / itemsPerPage); // 9 depoimentos totais
    const interval = setInterval(() => {
      setTestimonialPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }, 20000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-white">
      <NavBar scrolled={scrolled} />

      <HeroSection />

      <AreasSection />

      {/* Processo */}
      <ProcessSection />
      <AboutSection />

      <DiferenciaisSection />

      {/* Depoimentos */}
      <TestimonialsSection
        isMobile={isMobile}
        testimonialPage={testimonialPage}
        setTestimonialPage={setTestimonialPage}
      />

      <FaqSection />
      <ContactSection />

      <Footer setActiveModal={setActiveModal} />
      <CookieBanner setActiveModal={setActiveModal} />
      <LegalModals activeModal={activeModal} setActiveModal={setActiveModal} />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}
