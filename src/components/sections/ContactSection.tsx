"use client";

import {
  Handshake,
  Mail,
  MessageCircle,
  Phone,
  Scale,
  CheckCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { WHATSAPP_LINK, PHONE_NUMBER, PHONE_LINK, EMAIL, ADDRESS } from "../../lib/constants";
import { trackWhatsAppClick } from "../../lib/analytics";

export function ContactSection() {
  return (
    <section id="contato" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#EFECE6] via-[#F8F6F0] to-white"></div>
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #B89B72 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mb-16 text-center mx-auto anim-fade-up">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-[#B89B72]/20 shadow-sm">
            <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
            <span
              className="text-[#B89B72] text-xs tracking-[0.2em] uppercase"
              style={{ fontWeight: 600 }}
            >
              Entre em Contato
            </span>
            <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
          </div>

          <h2
            className="text-4xl lg:text-6xl tracking-tight mb-6 bg-gradient-to-br from-[#0F172A] to-[#1E293B] bg-clip-text text-transparent"
            style={{ fontWeight: 600, lineHeight: "1.1" }}
          >
            Fale Conosco
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B89B72]"></div>
            <MessageCircle
              className="h-5 w-5 text-[#B89B72]"
              strokeWidth={1.5}
            />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B89B72]"></div>
          </div>

          <p className="text-lg text-[#475569] leading-relaxed tracking-tight max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato e descubra como
            podemos ajudar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 anim-slide-left">
            {[
              {
                icon: Phone,
                title: "Telefone",
                content: PHONE_NUMBER,
                subtitle: "Plantão 24 horas por dia",
                link: PHONE_LINK,
              },
              {
                icon: FaWhatsapp,
                title: "WhatsApp",
                content: PHONE_NUMBER,
                subtitle: "Plantão 24 horas por dia",
                link: WHATSAPP_LINK,
              },
              {
                icon: Mail,
                title: "E-mail",
                content: EMAIL,
                subtitle: "Resposta em até 24 horas",
                link: `mailto:${EMAIL}`,
              },
              {
                icon: Scale,
                title: "Endereço",
                content: ADDRESS,
                subtitle: "Atendimento presencial e online em todo Brasil",
                link: null,
              },
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="relative bg-white/90 backdrop-blur-sm border border-[#B89B72]/20 p-6 hover:border-[#B89B72] hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-[#B89B72] to-transparent"></div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-[#B89B72]/20 to-[#8B7355]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon
                        className="h-7 w-7 text-[#B89B72]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex-1">
                      <div
                        className="text-sm text-[#B89B72] mb-1 uppercase tracking-wide"
                        style={{ fontWeight: 600 }}
                      >
                        {item.title}
                      </div>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={
                            item.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-lg text-[#0F172A] mb-1 block hover:text-[#B89B72] transition-colors"
                          style={{ fontWeight: 600 }}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <div
                          className="text-lg text-[#0F172A] mb-1"
                          style={{ fontWeight: 600 }}
                        >
                          {item.content}
                        </div>
                      )}
                      <div className="text-sm text-[#64748B]">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative anim-slide-right">
            <div className="sticky top-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-10 lg:p-12 border border-[#B89B72]/30">
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

              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#B89B72]/20 flex items-center justify-center">
                  <Handshake
                    className="h-8 w-8 text-[#B89B72]"
                    strokeWidth={1.5}
                  />
                </div>

                <h3
                  className="text-2xl lg:text-3xl tracking-tight mb-4 text-[#F8F6F0] text-center"
                  style={{ fontWeight: 600 }}
                >
                  Agende Sua Consulta
                </h3>

                <p className="text-[#CBD5E1] text-center mb-8 leading-relaxed">
                  Entre em contato agora e receba orientação jurídica
                  especializada. Primeira consulta com avaliação completa do seu
                  caso.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Atendimento sigiloso garantido",
                    "Plantão 24 horas",
                    "Avaliação técnica do caso",
                    "Sem compromisso inicial",
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-[#CBD5E1]"
                    >
                      <div className="w-5 h-5 rounded-sm bg-[#B89B72]/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle
                          className="w-3 h-3 text-[#B89B72]"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("contact_section")}
                  className="block w-full text-center px-8 py-4 bg-gradient-to-r from-[#B89B72] to-[#8B7355] text-white hover:shadow-2xl hover:-translate-y-0.5 transition-all mb-4"
                >
                  <div className="flex items-center justify-center gap-2">
                    <FaWhatsapp className="h-5 w-5" />
                    <span style={{ fontWeight: 600 }}>Falar no WhatsApp</span>
                  </div>
                </a>

                <a
                  href={PHONE_LINK}
                  className="block w-full text-center px-8 py-4 bg-white/10 border border-[#B89B72]/30 text-[#F8F6F0] hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span style={{ fontWeight: 600 }}>Ligar Agora</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
