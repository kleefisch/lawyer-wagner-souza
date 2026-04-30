"use client";

import { useEffect, useState } from "react";

import {
  Award,
  Clock,
  Gavel,
  Scale,
  Shield,
  Star,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

import { OAB_NUMBER } from "../../lib/constants";

export function AboutSection() {
  const [stats, setStats] = useState({ years: 0, cases: 0, satisfaction: 0 });

  useEffect(() => {
    const statsElement = document.getElementById("stats-section");
    if (!statsElement) return;

    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();

      const duration = 1500;
      const targets = { years: 5, cases: 500, satisfaction: 98 };
      const startTime = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        setStats({
          years: Math.round(ease * targets.years),
          cases: Math.round(ease * targets.cases),
          satisfaction: Math.round(ease * targets.satisfaction),
        });
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    });

    observer.observe(statsElement);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      className="bg-[#0F172A] py-20 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#0F172A]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="lg:hidden flex justify-center mb-8">
          <div className="inline-flex items-center px-4 py-1.5 bg-[#B89B72]/10 border border-[#B89B72]/30 text-[#B89B72] text-xs tracking-wide">
            SOBRE O DR. WAGNER
          </div>
        </div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-center">
          <div className="relative mx-auto lg:mx-0 anim-slide-left">
            <div className="w-full max-w-[400px] h-[650px] rounded-sm relative overflow-hidden shadow-2xl">
              <Image
                src="/wagner-about.png"
                alt="Dr. Wagner Souza - Advogado em Goiânia com atuação nacional"
                fill
                quality={75}
                className="object-cover object-top scale-x-[-1]"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent"></div>

              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#B89B72]"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#B89B72]"></div>
            </div>

            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-[#2563EB]/20 to-[#B89B72]/20 backdrop-blur-3xl rounded-full -z-10"></div>
          </div>

          <div className="anim-slide-right anim-delay-200">
            <div className="hidden lg:inline-flex items-center mb-4 px-4 py-1.5 bg-[#B89B72]/10 border border-[#B89B72]/30 text-[#B89B72] text-xs tracking-wide ml-auto w-fit">
              SOBRE O DR. WAGNER
            </div>
            <h2
              className="text-3xl lg:text-5xl tracking-tight mb-6 text-[#F8F6F0]"
              style={{ fontWeight: 600, lineHeight: "1.15" }}
            >
              Referência em{" "}
              <span className="text-[#B89B72]">Direito Criminal</span> e{" "}
              <span className="text-[#B89B72]">Previdenciário</span>
            </h2>
            <div className="space-y-4 text-[17px] text-[#CBD5E1] leading-relaxed tracking-tight">
              <p>
                Dr. Wagner Souza construiu sua carreira com base na excelência
                técnica, ética profissional e compromisso inabalável com a
                defesa dos direitos de seus clientes. Reconhecido como
                referência em Direito Criminal e Previdenciário, oferece atuação
                estratégica e personalizada.
              </p>
              <p>
                Com foco em resultados concretos, cada caso recebe análise
                técnica aprofundada, planejamento jurídico sob medida e
                acompanhamento integral em todas as instâncias, sempre pautado
                pelo sigilo absoluto e comprometimento com a justiça.
              </p>
              <p>
                A advocacia premium se traduz em atendimento diferenciado,
                disponibilidade 24 horas e capacidade técnica para atender
                demandas em todo o território nacional, com sede em Goiânia -
                GO.
              </p>
            </div>

            <div
              id="stats-section"
              className="mt-10 grid grid-cols-3 gap-4 lg:gap-6"
            >
              <div className="border border-[#B89B72]/30 bg-[#1E293B]/50 backdrop-blur-sm p-6 hover:border-[#B89B72] transition-all flex flex-col items-center justify-center">
                <Clock className="h-8 w-8 text-[#B89B72] mb-3" />
                <div
                  className="text-2xl lg:text-3xl text-[#F8F6F0] tabular-nums mb-2 whitespace-nowrap"
                  style={{ fontWeight: 600 }}
                >
                  +{stats.years} Anos
                </div>
                <div className="text-xs text-[#94A3B8] tracking-tight uppercase">
                  Experiência
                </div>
              </div>
              <div className="border border-[#B89B72]/30 bg-[#1E293B]/50 backdrop-blur-sm p-6 hover:border-[#B89B72] transition-all flex flex-col items-center justify-center">
                <Gavel className="h-8 w-8 text-[#B89B72] mb-3" />
                <div
                  className="text-3xl text-[#F8F6F0] tabular-nums mb-2 whitespace-nowrap"
                  style={{ fontWeight: 600 }}
                >
                  {stats.cases}+
                </div>
                <div className="text-xs text-[#94A3B8] tracking-tight uppercase">
                  Casos
                </div>
              </div>
              <div className="border border-[#B89B72]/30 bg-[#1E293B]/50 backdrop-blur-sm p-6 hover:border-[#B89B72] transition-all flex flex-col items-center justify-center">
                <Star className="h-8 w-8 text-[#B89B72] fill-[#B89B72] mb-3" />
                <div
                  className="text-3xl text-[#F8F6F0] tabular-nums mb-2 whitespace-nowrap"
                  style={{ fontWeight: 600 }}
                >
                  {stats.satisfaction}%
                </div>
                <div className="text-xs text-[#94A3B8] tracking-tight uppercase">
                  Satisfação
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                <Award className="h-4 w-4 text-[#B89B72]" />
                Advogado Referência
              </div>
              <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                <TrendingUp className="h-4 w-4 text-[#B89B72]" />
                Alto Índice de Êxito
              </div>
              <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                <Shield className="h-4 w-4 text-[#B89B72]" />
                Ética e Sigilo Absoluto
              </div>
              <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                <Scale className="h-4 w-4 text-[#B89B72]" />
                {OAB_NUMBER}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
