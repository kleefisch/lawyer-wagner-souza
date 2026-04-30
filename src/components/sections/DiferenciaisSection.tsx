import {
  Shield,
  Award,
  Users,
  CheckCircle,
  TrendingUp,
  Zap,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Sigilo Absoluto",
    description:
      "Confidencialidade total em todas as comunicações e documentos. Protegemos sua privacidade com protocolos rigorosos de segurança da informação.",
    badge: "Protocolo Certificado",
    gradient: "from-[#B89B72] to-[#8B7355]",
    delay: "anim-delay-100",
  },
  {
    icon: Award,
    title: "Estratégia Jurídica",
    description:
      "Planejamento personalizado com análise profunda de cada caso. Desenvolvemos táticas jurídicas específicas para maximizar suas chances de êxito.",
    badge: "Foco em Resultados",
    gradient: "from-[#B89B72] to-[#8B7355]",
    delay: "anim-delay-200",
  },
  {
    icon: Users,
    title: "Atendimento Premium",
    description:
      "Suporte próximo e humanizado em momentos delicados. Comunicação transparente e acompanhamento constante em todas as etapas do processo.",
    badge: "Disponibilidade 24/7",
    gradient: "from-[#B89B72] to-[#8B7355]",
    delay: "anim-delay-300",
  },
];

const stats = [
  { value: "95%", label: "Taxa de Êxito",       icon: TrendingUp },
  { value: "24h", label: "Resposta Rápida",      icon: Zap },
  { value: "5+",  label: "Anos de Experiência",  icon: Award },
  { value: "24/7",label: "Suporte Disponível",   icon: Clock },
];

export function DiferenciaisSection() {
  return (
    <section id="diferenciais" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F0] via-[#EFECE6] to-[#F8F6F0]"></div>
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg,#B89B72 0,#B89B72 1px,transparent 0,transparent 50%),repeating-linear-gradient(-45deg,#B89B72 0,#B89B72 1px,transparent 0,transparent 50%)`,
          backgroundSize: "20px 20px",
        }}></div>
      </div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#B89B72]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#B89B72]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-20 text-center mx-auto anim-fade-up">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-[#B89B72]/20 shadow-sm">
            <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
            <span className="text-[#B89B72] text-xs tracking-[0.2em] uppercase" style={{ fontWeight: 600 }}>Diferenciais</span>
            <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
          </div>
          <h2 className="text-4xl lg:text-6xl tracking-tight mb-6 bg-gradient-to-br from-[#0F172A] to-[#1E293B] bg-clip-text text-transparent" style={{ fontWeight: 600, lineHeight: "1.1" }}>
            Por Que Nos Escolher
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B89B72]"></div>
            <Award className="h-5 w-5 text-[#B89B72]" strokeWidth={1.5} aria-hidden="true" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B89B72]"></div>
          </div>
          <p className="text-lg text-[#475569] leading-relaxed tracking-tight max-w-2xl mx-auto">
            Nosso compromisso com a excelência jurídica se reflete em cada detalhe do nosso trabalho
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-8 auto-rows-fr">
          {features.map((feature, idx) => (
            <div key={idx} className={`relative group h-full anim-fade-up ${feature.delay}`}>
              <div className="relative bg-white/90 backdrop-blur-sm border border-[#B89B72]/20 p-5 lg:p-10 hover:border-[#B89B72] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}`}></div>

                <div className="flex lg:flex-col items-center lg:items-start gap-3 lg:gap-0 mb-4 lg:mb-0">
                  <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-sm bg-gradient-to-br from-[#B89B72]/20 to-[#8B7355]/10 flex items-center justify-center lg:mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                    <feature.icon className="h-7 w-7 lg:h-10 lg:w-10 text-[#B89B72]" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl lg:text-2xl tracking-tight text-[#0F172A] lg:mb-4 lg:min-h-[2.5rem]" style={{ fontWeight: 600 }}>
                    {feature.title}
                  </h3>
                </div>

                <p className="text-[13px] lg:text-[15px] text-[#475569] leading-snug lg:leading-relaxed tracking-tight mb-4 lg:mb-6 flex-grow">
                  {feature.description}
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-[#B89B72]/10 border border-[#B89B72]/20 w-fit">
                  <CheckCircle className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-[#B89B72]" aria-hidden="true" />
                  <span className="text-[10px] lg:text-xs text-[#B89B72]" style={{ fontWeight: 600 }}>{feature.badge}</span>
                </div>

                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 right-0 w-full h-px bg-[#B89B72]"></div>
                  <div className="absolute bottom-0 right-0 h-full w-px bg-[#B89B72]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-12 relative overflow-hidden anim-fade-up anim-delay-500">
          <div className="relative bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] p-10 lg:p-12 border border-[#B89B72]/30">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #B89B72 1px, transparent 1px)`, backgroundSize: "32px 32px" }}></div>
            </div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B89B72] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B89B72] to-transparent"></div>

            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#B89B72]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-[#B89B72]" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div className="text-4xl lg:text-5xl text-[#F8F6F0] mb-2 tabular-nums" style={{ fontWeight: 700 }}>{stat.value}</div>
                  <div className="text-sm text-[#CBD5E1] uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
