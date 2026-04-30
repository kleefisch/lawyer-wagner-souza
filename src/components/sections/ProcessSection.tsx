"use client";

import {
  Award,
  CheckCircle,
  FileText,
  Gavel,
  Handshake,
  Phone,
  Shield,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";

import { WHATSAPP_LINK } from "../../lib/constants";

export function ProcessSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#EFECE6] via-white to-[#F8F6F0]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#B89B72]/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#B89B72]/5 to-transparent"></div>

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
              Metodologia
            </span>
            <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
          </div>

          <h2
            className="text-4xl lg:text-6xl tracking-tight mb-6 bg-gradient-to-br from-[#0F172A] to-[#1E293B] bg-clip-text text-transparent"
            style={{ fontWeight: 600, lineHeight: "1.1" }}
          >
            Como Trabalhamos
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B89B72]"></div>
            <Shield className="h-5 w-5 text-[#B89B72]" strokeWidth={1.5} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B89B72]"></div>
          </div>

          <p className="text-lg text-[#475569] leading-relaxed tracking-tight max-w-2xl mx-auto">
            Um processo estruturado que combina expertise técnica, estratégia
            personalizada e acompanhamento transparente
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-4 lg:gap-8 auto-rows-fr relative">
          {[
            {
              step: "01",
              title: "Primeira Consulta",
              desc: "Conversa inicial sigilosa para entender seu caso e avaliar as melhores estratégias jurídicas.",
              icon: Handshake,
              color: "from-[#B89B72] to-[#8B7355]",
            },
            {
              step: "02",
              title: "Análise Técnica",
              desc: "Estudo aprofundado da documentação e desenvolvimento de estratégia personalizada.",
              icon: FileText,
              color: "from-[#8B7355] to-[#B89B72]",
            },
            {
              step: "03",
              title: "Atuação Estratégica",
              desc: "Execução do planejamento jurídico com acompanhamento constante e comunicação transparente.",
              icon: Gavel,
              color: "from-[#B89B72] to-[#8B7355]",
            },
            {
              step: "04",
              title: "Resultado",
              desc: "Conclusão exitosa do caso com análise de desdobramentos futuros e orientações preventivas.",
              icon: Award,
              color: "from-[#8B7355] to-[#B89B72]",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group h-full"
            >
              <div className="relative bg-white/90 backdrop-blur-sm border border-[#B89B72]/20 p-4 py-5 lg:p-8 hover:border-[#B89B72] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}
                ></div>

                <div className="absolute -top-4 lg:-top-5 left-1/2 -translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#B89B72] to-[#8B7355] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span
                    className="text-white text-base lg:text-lg tabular-nums"
                    style={{ fontWeight: 700 }}
                  >
                    {item.step}
                  </span>
                </div>

                <div className="mt-5 lg:mt-12 mb-2 lg:mb-6 mx-auto w-12 h-12 lg:w-16 lg:h-16 rounded-sm bg-gradient-to-br from-[#B89B72]/10 to-[#B89B72]/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <item.icon
                    className="h-6 w-6 lg:h-8 lg:w-8 text-[#B89B72]"
                    strokeWidth={1.5}
                  />
                </div>

                <h3
                  className="text-lg lg:text-xl tracking-tight mb-1.5 lg:mb-3 text-[#0F172A] text-center group-hover:text-[#B89B72] transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p className="text-[13px] lg:text-[15px] text-[#475569] leading-snug lg:leading-relaxed tracking-tight text-center flex-grow">
                  {item.desc}
                </p>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#B89B72]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-16"
        >
          <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 lg:p-10 border border-[#B89B72]/30">
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #B89B72 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }}
              ></div>
            </div>

            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89B72] to-[#8B7355]"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center lg:text-left">
                <h3
                  className="text-xl lg:text-2xl tracking-tight mb-2 text-[#F8F6F0]"
                  style={{ fontWeight: 600 }}
                >
                  Pronto Para Iniciar Seu Atendimento?
                </h3>
                <p className="text-[#CBD5E1] text-sm mb-4 lg:mb-0">
                  Entre em contato agora e receba orientação jurídica
                  especializada.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
                  {[
                    "Atendimento sigiloso",
                    "Plantão 24 horas",
                    "Sem compromisso",
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-[#CBD5E1]"
                    >
                      <CheckCircle
                        className="w-3.5 h-3.5 text-[#B89B72]"
                        strokeWidth={3}
                      />
                      <span className="text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B89B72] to-[#8B7355] text-white hover:shadow-xl hover:-translate-y-0.5 transition-all whitespace-nowrap text-sm"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  <span style={{ fontWeight: 600 }}>Falar no WhatsApp</span>
                </a>

                <a
                  href="tel:+5562996421788"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-[#B89B72]/30 text-[#F8F6F0] hover:bg-white/20 transition-all backdrop-blur-sm whitespace-nowrap text-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span style={{ fontWeight: 600 }}>(62) 99642-1788</span>
                </a>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B89B72]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#B89B72]/5 rounded-full blur-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
