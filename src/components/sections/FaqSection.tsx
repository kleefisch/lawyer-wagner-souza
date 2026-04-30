"use client";

import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../app/components/accordion";
import { WHATSAPP_LINK } from "../../lib/constants";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="bg-[#0F172A] py-20 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B89B72]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B89B72]/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 bg-[#B89B72]/10 border border-[#B89B72]/30 backdrop-blur-sm">
            <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
            <span
              className="text-[#B89B72] text-xs tracking-[0.2em] uppercase"
              style={{ fontWeight: 600 }}
            >
              Perguntas Frequentes
            </span>
            <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
          </div>

          <h2
            className="text-4xl lg:text-6xl tracking-tight mb-6 text-[#F8F6F0]"
            style={{ fontWeight: 600, lineHeight: "1.1" }}
          >
            Dúvidas Comuns
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B89B72]"></div>
            <div className="w-2 h-2 rounded-full bg-[#B89B72]"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B89B72]"></div>
          </div>

          <p className="text-[17px] text-[#CBD5E1] leading-relaxed tracking-tight max-w-2xl mx-auto">
            Respostas claras e objetivas sobre nossos serviços jurídicos e
            processo de atendimento
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-[#B89B72]/20 p-10 lg:p-12"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                id: "item-1",
                question: "Como funciona a primeira consulta?",
                answer:
                  "A primeira consulta é sigilosa e pode ser realizada presencialmente em nosso escritório em Goiânia ou de forma online. Durante o atendimento, analisamos detalhadamente seu caso, esclarecemos todas as suas dúvidas e apresentamos uma estratégia jurídica personalizada. Não há qualquer compromisso inicial e você receberá uma avaliação honesta sobre as perspectivas do seu caso.",
              },
              {
                id: "item-2",
                question: "Atendem casos em outros estados além de Goiás?",
                answer:
                  "Sim, absolutamente. Embora nossa sede seja em Goiânia-GO, possuímos estrutura completa e expertise para atuar em todo o território nacional. Atuamos regularmente tanto em Direito Criminal quanto Previdenciário em diversos estados, com acompanhamento processual em todas as instâncias judiciais do país.",
              },
              {
                id: "item-3",
                question: "Qual o prazo médio para resolução de casos?",
                answer:
                  "O prazo varia conforme a complexidade do caso e a instância judicial envolvida. Casos previdenciários na esfera administrativa podem levar de 3 a 12 meses, enquanto processos judiciais variam de acordo com a fase processual e tribunal. Em Direito Criminal, os prazos dependem da natureza do processo. Mantemos nossos clientes sempre informados com estimativas realistas baseadas em nossa experiência.",
              },
              {
                id: "item-4",
                question: "Como é garantido o sigilo das informações?",
                answer:
                  "Sigilo absoluto é um pilar fundamental da nossa atuação. Todas as comunicações são protegidas pelo sigilo profissional da advocacia, previsto em lei e regulamentado pela OAB. Utilizamos sistemas seguros de comunicação criptografada e armazenamento de documentos em plataformas com certificação de segurança. Seus dados e informações jamais serão compartilhados sem sua autorização expressa.",
              },
              {
                id: "item-5",
                question: "Quais são as formas de pagamento disponíveis?",
                answer:
                  "Oferecemos diversas formas de pagamento e planos personalizados de acordo com a complexidade e natureza do caso. Trabalhamos com honorários fixos, variáveis ou misto, dependendo da modalidade. Na primeira consulta, apresentamos um orçamento transparente e detalhado, com opções de parcelamento quando aplicável. Nossa prioridade é oferecer uma solução financeira viável para que você tenha acesso à defesa jurídica de qualidade que merece.",
              },
            ].map((faq, idx) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-[#B89B72]/10 last:border-0"
              >
                <AccordionTrigger className="text-[#F8F6F0] hover:text-[#B89B72] text-left py-6">
                  <span className="flex items-start gap-4 pr-4">
                    <div className="w-8 h-8 rounded-sm bg-[#B89B72]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span
                        className="text-[#B89B72] text-sm"
                        style={{ fontWeight: 600 }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-base">{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[#CBD5E1] pl-12 pr-4 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-12"
        >
          <div className="relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 lg:p-10 border border-[#B89B72]/30">
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
                  Não Encontrou a Resposta Que Procurava?
                </h3>
                <p className="text-[#CBD5E1] text-sm mb-4 lg:mb-0">
                  Tire suas dúvidas diretamente com nosso advogado
                  especializado.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
                  {[
                    "Atendimento sigiloso",
                    "Plantão 24 horas",
                    "Resposta imediata",
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
