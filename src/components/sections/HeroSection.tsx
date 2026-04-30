"use client";

import { ChevronRight, CheckCircle, Clock, Scale, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

import { WHATSAPP_LINK, OAB_NUMBER } from "../../lib/constants";
import { trackWhatsAppClick } from "../../lib/analytics";

export function HeroSection() {
  return (
    <section className="bg-[#0F172A] pt-24 sm:pt-28 lg:pt-40 pb-20 lg:pb-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 border border-[#B89B72]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-[#B89B72]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#B89B72] rotate-45"></div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1E293B]/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="anim-fade-up">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-6 px-3 py-1 sm:px-4 sm:py-2 border border-[#B89B72]/30 bg-[#B89B72]/5 backdrop-blur-sm text-[#B89B72] text-[10px] sm:text-xs tracking-wide">
              <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-[#B89B72]" />
              ADVOCACIA ESPECIALIZADA
            </div>
            <h1
              className="text-4xl lg:text-6xl tracking-tight mb-3 sm:mb-6 text-[#F8F6F0]"
              style={{ fontWeight: 600, lineHeight: "1.1" }}
            >
              Defesa Jurídica de Alto Padrão
            </h1>
            <p
              className="text-[#B89B72] mb-6 whitespace-nowrap"
              style={{ fontWeight: 500, fontSize: "clamp(17px, 4.8vw, 2rem)" }}
            >
              Direito Criminal & Previdenciário
            </p>
            <p className="text-[13px] sm:text-[15px] lg:text-[17px] text-[#CBD5E1] leading-relaxed mb-8 tracking-tight max-w-xl">
              Atuação estratégica com sigilo absoluto e expertise técnica.
              Defendemos seus direitos com excelência em todo o território
              nacional, buscando o melhor resultado possível para cada caso.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-between sm:justify-start lg:justify-start gap-y-3 sm:gap-x-6 mb-4 sm:mb-8 sm:pb-8 sm:border-b sm:border-[#F8F6F0]/10">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#94A3B8]">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#B89B72] shrink-0" />
                +500 Processos Atuados
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#94A3B8]">
                <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#B89B72] shrink-0" />
                Plantão 24h
              </div>
              <div className="w-full sm:w-auto flex justify-center sm:justify-start items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#94A3B8]">
                <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-[#B89B72] text-[#B89B72] shrink-0" />
                98% Clientes Satisfeitos
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("hero_section")}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#B89B72] to-[#8B7355] text-white px-8 py-4 text-sm tracking-tight transition-all shadow-lg shadow-[#B89B72]/20 hover:shadow-xl hover:shadow-[#B89B72]/30 hover:-translate-y-0.5"
              >
                <FaWhatsapp className="h-6 w-6" />
                Iniciar Atendimento
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#areas"
                className="inline-flex items-center justify-center gap-2 bg-[#F8F6F0]/5 border border-[#F8F6F0]/20 text-[#F8F6F0] px-8 py-4 text-sm tracking-tight hover:bg-[#F8F6F0]/10 hover:border-[#F8F6F0]/40 transition-all backdrop-blur-sm"
              >
                Ver Especialidades
              </a>
            </div>
          </div>

          <div className="relative anim-fade-in anim-delay-200">
            <div className="aspect-[4/5] rounded-sm relative overflow-hidden shadow-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
              <Image
                src="/wagner-hero-1.png"
                alt="Dr. Wagner Souza - Advogado Criminal e Previdenciário com atuação em todo o Brasil"
                fill
                priority
                quality={75}
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>

              <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-[#B89B72]"></div>
              <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-[#B89B72]"></div>

              <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-[#0F172A]/90 backdrop-blur-lg border border-[#B89B72]/30 p-2 lg:p-4 w-fit">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-[#B89B72]/20 flex items-center justify-center">
                    <Scale className="h-4 w-4 lg:h-6 lg:w-6 text-[#B89B72]" />
                  </div>
                  <div>
                    <div
                      className="text-xs lg:text-sm text-[#F8F6F0]"
                      style={{ fontWeight: 600 }}
                    >
                      Dr. Wagner Souza
                    </div>
                    <div className="text-[10px] lg:text-xs text-[#94A3B8]">
                      {OAB_NUMBER}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#B89B72]/20 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-[#B89B72]/20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
