import { Award, FileText, Gavel, Handshake, Shield } from "lucide-react";
import { CTABanner } from "../../components/shared/CTABanner";

const steps = [
  {
    step: "01",
    title: "Primeira Consulta",
    desc: "Conversa inicial sigilosa para entender seu caso e avaliar as melhores estratégias jurídicas.",
    icon: Handshake,
    color: "from-[#B89B72] to-[#8B7355]",
    delay: "anim-delay-100",
  },
  {
    step: "02",
    title: "Análise Técnica",
    desc: "Estudo aprofundado da documentação e desenvolvimento de estratégia personalizada.",
    icon: FileText,
    color: "from-[#8B7355] to-[#B89B72]",
    delay: "anim-delay-200",
  },
  {
    step: "03",
    title: "Atuação Estratégica",
    desc: "Execução do planejamento jurídico com acompanhamento constante e comunicação transparente.",
    icon: Gavel,
    color: "from-[#B89B72] to-[#8B7355]",
    delay: "anim-delay-300",
  },
  {
    step: "04",
    title: "Resultado",
    desc: "Conclusão exitosa do caso com análise de desdobramentos futuros e orientações preventivas.",
    icon: Award,
    color: "from-[#8B7355] to-[#B89B72]",
    delay: "anim-delay-500",
  },
];

export function ProcessSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#EFECE6] via-white to-[#F8F6F0]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#B89B72]/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#B89B72]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-20 text-center mx-auto anim-fade-up">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-[#B89B72]/20 shadow-sm">
            <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
            <span className="text-[#B89B72] text-xs tracking-[0.2em] uppercase" style={{ fontWeight: 600 }}>Metodologia</span>
            <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
          </div>
          <h2 className="text-4xl lg:text-6xl tracking-tight mb-6 bg-gradient-to-br from-[#0F172A] to-[#1E293B] bg-clip-text text-transparent" style={{ fontWeight: 600, lineHeight: "1.1" }}>
            Como Trabalhamos
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B89B72]"></div>
            <Shield className="h-5 w-5 text-[#B89B72]" strokeWidth={1.5} aria-hidden="true" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B89B72]"></div>
          </div>
          <p className="text-lg text-[#475569] leading-relaxed tracking-tight max-w-2xl mx-auto">
            Um processo estruturado que combina expertise técnica, estratégia personalizada e acompanhamento transparente
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-4 lg:gap-8 auto-rows-fr relative">
          {steps.map((item, idx) => (
            <div key={idx} className={`relative group h-full anim-fade-up ${item.delay}`}>
              <div className="relative bg-white/90 backdrop-blur-sm border border-[#B89B72]/20 p-4 py-5 lg:p-8 hover:border-[#B89B72] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}></div>

                <div className="absolute -top-4 lg:-top-5 left-1/2 -translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#B89B72] to-[#8B7355] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-base lg:text-lg tabular-nums" style={{ fontWeight: 700 }}>{item.step}</span>
                </div>

                <div className="mt-5 lg:mt-12 mb-2 lg:mb-6 mx-auto w-12 h-12 lg:w-16 lg:h-16 rounded-sm bg-gradient-to-br from-[#B89B72]/10 to-[#B89B72]/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <item.icon className="h-6 w-6 lg:h-8 lg:w-8 text-[#B89B72]" strokeWidth={1.5} aria-hidden="true" />
                </div>

                <h3 className="text-lg lg:text-xl tracking-tight mb-1.5 lg:mb-3 text-[#0F172A] text-center group-hover:text-[#B89B72] transition-colors" style={{ fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p className="text-[13px] lg:text-[15px] text-[#475569] leading-snug lg:leading-relaxed tracking-tight text-center flex-grow">
                  {item.desc}
                </p>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#B89B72]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>

        <CTABanner
          title="Pronto Para Iniciar Seu Atendimento?"
          subtitle="Entre em contato agora e receba orientação jurídica especializada."
          features={["Atendimento sigiloso", "Plantão 24 horas", "Sem compromisso"]}
          sectionName="process"
        />
      </div>
    </section>
  );
}
