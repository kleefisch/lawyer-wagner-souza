"use client";

import {
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

import { useState, useEffect } from "react";

import { CTABanner } from "../../components/shared/CTABanner";

export function TestimonialsSection() {
  const [testimonialPage, setTestimonialPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setTestimonialPage(0);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const itemsPerPage = isMobile ? 1 : 3;
    const totalPages = Math.ceil(9 / itemsPerPage);
    const interval = setInterval(() => {
      setTestimonialPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }, 20000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const testimonials = [
    {
      name: "Maria Silva",
      case: "Aposentadoria Especial",
      location: "Goiânia, GO",
      text: "Profissionalismo impecável. Conseguiram minha aposentadoria especial após anos de negativas do INSS. O acompanhamento foi constante e o resultado superou todas as expectativas.",
      rating: 5,
    },
    {
      name: "João Santos",
      case: "Defesa Criminal",
      location: "São Paulo, SP",
      text: "Em um momento extremamente difícil, encontrei não apenas expertise jurídica, mas também suporte humano. A defesa foi estratégica, transparente e o resultado foi absolutamente favorável.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      case: "Revisão de Benefício",
      location: "Brasília, DF",
      text: "A revisão do meu benefício aumentou significativamente meu valor mensal. Equipe dedicada, transparente e que realmente se importa com o cliente do início ao fim do processo.",
      rating: 5,
    },
    {
      name: "Roberto Pereira",
      case: "Habeas Corpus",
      location: "Rio de Janeiro, RJ",
      text: "A atuação foi rápida e eficaz. Conseguiram o habeas corpus com argumentação técnica sólida e domínio total do processo. Recomendo sem ressalvas para casos criminais complexos.",
      rating: 5,
    },
    {
      name: "Luciana Mendes",
      case: "Pensão por Morte",
      location: "Goiânia, GO",
      text: "Excelente atendimento do início ao fim. Toda a documentação foi orientada com clareza e a pensão foi concedida rapidamente. Profissionais realmente comprometidos com o cliente.",
      rating: 5,
    },
    {
      name: "Carlos Eduardo",
      case: "Recurso Criminal",
      location: "Brasília, DF",
      text: "O recurso foi um sucesso! A análise técnica foi minuciosa e a sustentação oral impecável. Resultado além do esperado em um caso que parecia perdido.",
      rating: 5,
    },
    {
      name: "Patrícia Alves",
      case: "Auxílio-Doença",
      location: "São Paulo, SP",
      text: "Após três negativas do INSS, finalmente consegui meu auxílio-doença. A equipe foi paciente, atenciosa e muito profissional. Gratidão eterna!",
      rating: 5,
    },
    {
      name: "Fernando Lima",
      case: "Trânsito em Julgado",
      location: "Goiânia, GO",
      text: "Defesa criminal impecável que resultou em absolvição. O Dr. Wagner demonstrou conhecimento profundo da lei e habilidade excepcional na argumentação.",
      rating: 5,
    },
    {
      name: "Juliana Rodrigues",
      case: "Aposentadoria por Invalidez",
      location: "Anápolis, GO",
      text: "Processo conduzido com muita transparência e profissionalismo. Todas as dúvidas foram esclarecidas e o resultado foi exatamente o que esperávamos.",
      rating: 5,
    },
  ];

  const itemsPerPage = isMobile ? 1 : 3;
  const currentTestimonials = testimonials.slice(
    testimonialPage * itemsPerPage,
    testimonialPage * itemsPerPage + itemsPerPage,
  );
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  return (
    <section
      id="depoimentos"
      aria-label="Depoimentos de clientes"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8F6F0] to-[#EFECE6]"></div>
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B89B72' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#B89B72]/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#B89B72]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-20 text-center mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-[#B89B72]/20 shadow-sm">
            <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
            <span
              className="text-[#B89B72] text-xs tracking-[0.2em] uppercase"
              style={{ fontWeight: 600 }}
            >
              Testemunhos
            </span>
            <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
          </div>

          <h2
            className="text-4xl lg:text-6xl tracking-tight mb-6 bg-gradient-to-br from-[#0F172A] to-[#1E293B] bg-clip-text text-transparent"
            style={{ fontWeight: 600, lineHeight: "1.1" }}
          >
            Histórias de Sucesso
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B89B72]"></div>
            <Star
              className="h-5 w-5 text-[#B89B72] fill-[#B89B72]"
              strokeWidth={1.5}
            />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B89B72]"></div>
          </div>

          <p className="text-lg text-[#475569] leading-relaxed tracking-tight max-w-2xl mx-auto">
            A confiança de nossos clientes é o reflexo do nosso compromisso com
            a excelência jurídica
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            aria-live="polite"
            aria-atomic="true"
            aria-label={`Página ${testimonialPage + 1} de ${totalPages} de depoimentos`}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isMobile ? "cursor-grab active:cursor-grabbing" : ""}`}
            drag={isMobile ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) {
                setTestimonialPage(
                  testimonialPage === totalPages - 1 ? 0 : testimonialPage + 1,
                );
              } else if (swipe > 10000) {
                setTestimonialPage(
                  testimonialPage === 0 ? totalPages - 1 : testimonialPage - 1,
                );
              }
            }}
          >
            {currentTestimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group"
              >
                <div className="relative bg-white/90 backdrop-blur-sm border border-[#B89B72]/20 p-8 hover:border-[#B89B72] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89B72] to-[#8B7355]"></div>

                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#B89B72] text-[#B89B72]"
                        strokeWidth={0}
                      />
                    ))}
                  </div>

                  <p className="text-[15px] text-[#475569] leading-relaxed tracking-tight mb-8 text-center flex-grow">
                    {item.text}
                  </p>

                  <div className="h-px bg-gradient-to-r from-transparent via-[#B89B72]/30 to-transparent mb-6"></div>

                  <div className="text-center">
                    <div
                      className="text-[17px] text-[#0F172A] tracking-tight mb-1"
                      style={{ fontWeight: 600 }}
                    >
                      {item.name}
                    </div>
                    <div
                      className="text-[13px] text-[#B89B72] tracking-tight mb-1"
                      style={{ fontWeight: 500 }}
                    >
                      {item.case}
                    </div>
                    <div className="text-[12px] text-[#64748B] tracking-tight">
                      {item.location}
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-[#B89B72]"></div>
                    <div className="absolute bottom-0 right-0 h-full w-px bg-[#B89B72]"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={() =>
                setTestimonialPage(
                  testimonialPage === 0 ? totalPages - 1 : testimonialPage - 1,
                )
              }
              className="w-12 h-12 rounded-full bg-white border border-[#B89B72]/30 flex items-center justify-center hover:bg-[#B89B72] hover:text-white transition-all"
              aria-label="Depoimentos anteriores"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex items-center" role="tablist" aria-label="Páginas de depoimentos">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  onClick={() => setTestimonialPage(i)}
                  className={`flex items-center justify-center h-6 rounded-full transition-all ${i === testimonialPage ? "w-10" : "w-6"}`}
                  aria-label={`Ir para página ${i + 1} de ${totalPages}`}
                  aria-selected={i === testimonialPage}
                >
                  <span className={`block rounded-full transition-all ${i === testimonialPage ? "h-2 w-8 bg-[#B89B72]" : "w-2 h-2 bg-[#B89B72]/30"}`} />
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setTestimonialPage(
                  testimonialPage === totalPages - 1 ? 0 : testimonialPage + 1,
                )
              }
              className="w-12 h-12 rounded-full bg-white border border-[#B89B72]/30 flex items-center justify-center hover:bg-[#B89B72] hover:text-white transition-all"
              aria-label="Próximos depoimentos"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <CTABanner
          title="Faça Parte da Nossa História de Sucesso"
          subtitle="Junte-se aos nossos clientes satisfeitos e tenha o melhor atendimento jurídico."
          features={["98% de satisfação", "Plantão 24 horas", "Atendimento premium"]}
          sectionName="testimonials"
        />
      </div>
    </section>
  );
}
