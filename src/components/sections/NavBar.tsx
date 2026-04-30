"use client";

import { useState, useEffect } from "react";
import { Scale, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { MobileMenu } from "../../components/ui/mobile-menu";
import { WHATSAPP_LINK, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, PHONE_LINK, PHONE_NUMBER } from "../../lib/constants";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0F172A]/95 md:backdrop-blur-lg shadow-lg" : "bg-[#0F172A]"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-[#B89B72]/20 flex items-center justify-center group-hover:bg-[#B89B72]/30 transition-colors">
              <Scale className="h-6 w-6 text-[#B89B72]" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-1">
              <span
                className="text-base tracking-tight text-[#F8F6F0] leading-tight"
                style={{ fontWeight: 600 }}
              >
                DR. WAGNER SOUZA
              </span>
              <div className="flex items-center gap-2 w-full">
                <div className="h-px flex-1 bg-[#B89B72]/50"></div>
                <span
                  className="text-[9px] text-[#B89B72] uppercase whitespace-nowrap"
                  style={{ fontWeight: 400, letterSpacing: "0.3em" }}
                >
                  ADVOCACIA
                </span>
                <div className="h-px flex-1 bg-[#B89B72]/50"></div>
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#areas"
              className="text-[#F8F6F0] text-sm tracking-tight hover:text-[#B89B72] transition-colors"
            >
              Áreas de Atuação
            </a>
            <a
              href="#sobre"
              className="text-[#F8F6F0] text-sm tracking-tight hover:text-[#B89B72] transition-colors"
            >
              Sobre
            </a>
            <a
              href="#depoimentos"
              className="text-[#F8F6F0] text-sm tracking-tight hover:text-[#B89B72] transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#diferenciais"
              className="text-[#F8F6F0] text-sm tracking-tight hover:text-[#B89B72] transition-colors"
            >
              Diferenciais
            </a>
            <a
              href="#contato"
              className="text-[#F8F6F0] text-sm tracking-tight hover:text-[#B89B72] transition-colors"
            >
              Contato
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end">
              <span
                className="text-xs text-[#B89B72] tracking-tight"
                style={{ fontWeight: 500 }}
              >
                Ligue Agora
              </span>
              <a
                href={PHONE_LINK}
                className="text-sm text-[#F8F6F0] tracking-tight hover:text-[#B89B72] transition-colors flex items-center gap-1.5"
                style={{ fontWeight: 600 }}
              >
                <Phone className="h-3.5 w-3.5" />
                {PHONE_NUMBER}
              </a>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-transparent border border-[#F8F6F0] text-[#F8F6F0] px-6 py-2.5 text-sm tracking-tight hover:bg-[#B89B72] hover:text-white hover:border-[#B89B72] transition-all"
            >
              <FaWhatsapp className="h-5 w-5" />
              Falar com Advogado
            </a>
            <MobileMenu
              whatsappNumber={WHATSAPP_NUMBER}
              whatsappMessage={WHATSAPP_MESSAGE}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
