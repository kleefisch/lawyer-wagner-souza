import { useState, useEffect } from "react"
import { Scale, Shield, Users, Award, Phone, Mail, ChevronRight, CheckCircle, FileText, Gavel, Heart, Clock, Star, TrendingUp, ArrowUp, Skull, Briefcase, Pill, Building, Home, AlertTriangle, Zap, Baby, Wallet, UserCheck, Activity, Timer, DollarSign, ChevronLeft, X, Clover, MapPin, Facebook, Twitter, Instagram, MessageCircle, Handshake } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/tabs"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./components/accordion"
import { MobileMenu } from "./components/mobile-menu"
import { SpecialtyCard } from "./components/specialty-card"
import { motion, AnimatePresence } from "motion/react"
import wagnerHeroImage from "../imports/wagner-hero-1.png"
import wagnerAboutImage from "../imports/wagner-about.png"

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [stats, setStats] = useState({ years: 0, cases: 0, satisfaction: 0 })
  const [testimonialPage, setTestimonialPage] = useState(0)
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'cookies' | null>(null)
  const [showCookieBanner, setShowCookieBanner] = useState(true)
  const [showCookiePreferences, setShowCookiePreferences] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: true
  })
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      setCurrentTime(`${hours}:${minutes}`)
      setShowWhatsAppPopup(true)
    }, 15000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      setTestimonialPage(0) // Reset page when switching between mobile/desktop
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const itemsPerPage = isMobile ? 1 : 3
    const totalPages = Math.ceil(9 / itemsPerPage) // 9 depoimentos totais
    const interval = setInterval(() => {
      setTestimonialPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
    }, 20000)
    return () => clearInterval(interval)
  }, [isMobile])

  useEffect(() => {
    const animateStats = () => {
      let yearsCount = 0
      let casesCount = 0
      let satisfactionCount = 0

      const interval = setInterval(() => {
        if (yearsCount < 5) yearsCount++
        if (casesCount < 500) casesCount += 25
        if (satisfactionCount < 98) satisfactionCount += 2

        setStats({ years: yearsCount, cases: casesCount, satisfaction: satisfactionCount })

        if (yearsCount >= 5 && casesCount >= 500 && satisfactionCount >= 98) {
          clearInterval(interval)
        }
      }, 30)
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats()
        observer.disconnect()
      }
    })

    const statsElement = document.getElementById('stats-section')
    if (statsElement) observer.observe(statsElement)

    return () => observer.disconnect()
  }, [])

  const whatsappNumber = "5562996421788"
  const whatsappMessage = "Olá Dr. Wagner, preciso de uma consulta jurídica. Podemos conversar sobre o meu caso?"

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0F172A]/95 backdrop-blur-lg shadow-lg' : 'bg-[#0F172A]'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-sm bg-[#B89B72]/20 flex items-center justify-center group-hover:bg-[#B89B72]/30 transition-colors">
                <Scale className="h-6 w-6 text-[#B89B72]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-base tracking-tight text-[#F8F6F0] leading-tight" style={{ fontWeight: 600 }}>DR. WAGNER SOUZA</span>
                <div className="flex items-center gap-2 w-full">
                  <div className="h-px flex-1 bg-[#B89B72]/50"></div>
                  <span className="text-[9px] text-[#B89B72] uppercase whitespace-nowrap" style={{ fontWeight: 400, letterSpacing: '0.3em' }}>ADVOCACIA</span>
                  <div className="h-px flex-1 bg-[#B89B72]/50"></div>
                </div>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#areas" className="text-[#F8F6F0] text-sm tracking-tight hover:text-[#B89B72] transition-colors">Áreas de Atuação</a>
              <a href="#sobre" className="text-[#F8F6F0] text-sm tracking-tight hover:text-[#B89B72] transition-colors">Sobre</a>
              <a href="#depoimentos" className="text-[#F8F6F0] text-sm tracking-tight hover:text-[#B89B72] transition-colors">Depoimentos</a>
              <a href="#diferenciais" className="text-[#F8F6F0] text-sm tracking-tight hover:text-[#B89B72] transition-colors">Diferenciais</a>
              <a href="#contato" className="text-[#F8F6F0] text-sm tracking-tight hover:text-[#B89B72] transition-colors">Contato</a>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex flex-col items-end">
                <span className="text-xs text-[#B89B72] tracking-tight" style={{ fontWeight: 500 }}>Ligue Agora</span>
                <a href="tel:+5562996421788" className="text-sm text-[#F8F6F0] tracking-tight hover:text-[#B89B72] transition-colors flex items-center gap-1.5" style={{ fontWeight: 600 }}>
                  <Phone className="h-3.5 w-3.5" />
                  (62) 99642-1788
                </a>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-transparent border border-[#F8F6F0] text-[#F8F6F0] px-6 py-2.5 text-sm tracking-tight hover:bg-[#B89B72] hover:text-white hover:border-[#B89B72] transition-all"
              >
                <FaWhatsapp className="h-5 w-5" />
                Falar com Advogado
              </a>
              <MobileMenu whatsappNumber={whatsappNumber} whatsappMessage={whatsappMessage} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0F172A] pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#B89B72]/30 bg-[#B89B72]/5 backdrop-blur-sm text-[#B89B72] text-xs tracking-wide">
                <Star className="h-3 w-3 fill-[#B89B72]" />
                ADVOCACIA ESPECIALIZADA
              </div>
              <h1 className="text-4xl lg:text-6xl tracking-tight mb-6 text-[#F8F6F0]" style={{ fontWeight: 600, lineHeight: '1.1' }}>
                Defesa Jurídica de Alto Padrão
              </h1>
              <p className="text-xl lg:text-2xl text-[#B89B72] mb-6" style={{ fontWeight: 500 }}>
                Direito Criminal & Previdenciário
              </p>
              <p className="text-[15px] lg:text-[17px] text-[#CBD5E1] leading-relaxed mb-8 tracking-tight max-w-xl">
                Atuação estratégica com sigilo absoluto e expertise técnica. Defendemos seus direitos com excelência em todo o território nacional, buscando o melhor resultado possível para cada caso.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8 pb-8 border-b border-[#F8F6F0]/10">
                <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                  <CheckCircle className="h-4 w-4 text-[#B89B72]" />
                  +500 Processos Atuados
                </div>
                <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                  <Clock className="h-4 w-4 text-[#B89B72]" />
                  Plantão 24h
                </div>
                <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
                  <Star className="h-4 w-4 fill-[#B89B72] text-[#B89B72]" />
                  98% Clientes Satisfeitos
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
              <p className="text-sm text-[#94A3B8] tracking-tight mt-4 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#B89B72]" />
                Atendimento sigiloso em todo o Brasil
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-sm relative overflow-hidden shadow-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
                {/* Image with overlay */}
                <img
                  src={wagnerHeroImage}
                  alt="Advogado Profissional"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>

                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-[#B89B72]"></div>
                <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-[#B89B72]"></div>

                {/* Floating Badge */}
                <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-[#0F172A]/90 backdrop-blur-lg border border-[#B89B72]/30 p-2 lg:p-4 w-fit">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-[#B89B72]/20 flex items-center justify-center">
                      <Scale className="h-4 w-4 lg:h-6 lg:w-6 text-[#B89B72]" />
                    </div>
                    <div>
                      <div className="text-xs lg:text-sm text-[#F8F6F0]" style={{ fontWeight: 600 }}>Dr. Wagner Souza</div>
                      <div className="text-[10px] lg:text-xs text-[#94A3B8]">OAB/GO 59.075</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background geometric decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#B89B72]/20 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-[#B89B72]/20 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="relative py-20 lg:py-32 overflow-hidden">
        {/* Luxurious gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F0] via-[#EFECE6] to-[#F8F6F0]"></div>

        {/* Elegant pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(30deg, #B89B72 12%, transparent 12.5%, transparent 87%, #B89B72 87.5%, #B89B72),
              linear-gradient(150deg, #B89B72 12%, transparent 12.5%, transparent 87%, #B89B72 87.5%, #B89B72),
              linear-gradient(30deg, #B89B72 12%, transparent 12.5%, transparent 87%, #B89B72 87.5%, #B89B72),
              linear-gradient(150deg, #B89B72 12%, transparent 12.5%, transparent 87%, #B89B72 87.5%, #B89B72)
            `,
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
          }}></div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#B89B72]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B89B72]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-16 text-center mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-[#B89B72]/20 shadow-sm">
              <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
              <span className="text-[#B89B72] text-xs tracking-[0.2em] uppercase" style={{ fontWeight: 600 }}>
                Especialidades Jurídicas
              </span>
              <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
            </div>

            <h2 className="text-4xl lg:text-6xl tracking-tight mb-6 bg-gradient-to-br from-[#0F172A] to-[#1E293B] bg-clip-text text-transparent" style={{ fontWeight: 600, lineHeight: '1.1' }}>
              Áreas de Atuação
            </h2>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B89B72]"></div>
              <Scale className="h-5 w-5 text-[#B89B72]" strokeWidth={1.5} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B89B72]"></div>
            </div>

            <p className="text-lg text-[#475569] leading-relaxed tracking-tight max-w-2xl mx-auto">
              Expertise em Direito Criminal e Previdenciário com atuação estratégica, sigilo absoluto e resultados comprovados em todo o território nacional.
            </p>
          </motion.div>

          <Tabs defaultValue="criminal" className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <TabsList>
                <TabsTrigger value="criminal">
                  Direito Criminal
                </TabsTrigger>
                <TabsTrigger value="previdenciario">
                  Direito Previdenciário
                </TabsTrigger>
              </TabsList>
              <p className="text-sm text-[#64748B] text-center sm:text-right">
                Clique em "Ver Serviços" para conhecer os detalhes de cada especialidade
              </p>
            </div>

            <TabsContent value="criminal">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
                <SpecialtyCard
                  icon={Skull}
                  title="Crimes Contra a Pessoa"
                  description="Defesa em crimes que atentam contra a integridade física e psicológica, como homicídio, lesão corporal e sequestro."
                  items={[
                    "Homicídio e Tentativa",
                    "Lesão Corporal",
                    "Ameaça e Constrangimento Ilegal",
                    "Sequestro e Cárcere Privado"
                  ]}
                  whatsappNumber={whatsappNumber}
                  area="Criminal"
                  gradient="from-[#2563EB]/10 to-[#B89B72]/5"
                  delay={0}
                />

                <SpecialtyCard
                  icon={Briefcase}
                  title="Crimes Contra o Patrimônio"
                  description="Atuação em casos de furto, roubo, estelionato, extorsão e outros crimes que envolvem bens materiais e financeiros."
                  items={[
                    "Furto e Roubo",
                    "Estelionato e Fraudes",
                    "Apropriação Indébita",
                    "Extorsão"
                  ]}
                  whatsappNumber={whatsappNumber}
                  area="Criminal"
                  gradient="from-[#B89B72]/10 to-[#2563EB]/5"
                  delay={0.1}
                />

                <SpecialtyCard
                  icon={Pill}
                  title="Lei de Drogas"
                  description="Defesa em processos relacionados à Lei de Drogas, incluindo tráfico, posse e associação para o tráfico."
                  items={[
                    "Tráfico de Drogas",
                    "Posse Para Consumo Pessoal",
                    "Associação Para o Tráfico",
                    "Defesa em Crimes Conexos"
                  ]}
                  whatsappNumber={whatsappNumber}
                  area="Criminal"
                  gradient="from-[#2563EB]/10 to-[#B89B72]/5"
                  delay={0.2}
                />

                <SpecialtyCard
                  icon={Gavel}
                  title="Audiências e Julgamentos"
                  description="Representação técnica em audiências, julgamentos, recursos e acompanhamento processual completo."
                  items={[
                    "Representação em Audiências",
                    "Defesa Técnica em Julgamentos",
                    "Recursos e Apelações",
                    "Acompanhamento Processual Completo"
                  ]}
                  whatsappNumber={whatsappNumber}
                  area="Criminal"
                  gradient="from-[#B89B72]/10 to-[#2563EB]/5"
                  delay={0.3}
                />

                <SpecialtyCard
                  icon={Building}
                  title="Acompanhamento em Delegacias"
                  description="Assistência jurídica desde o início da investigação, garantindo proteção de direitos e orientação em depoimentos."
                  items={[
                    "Presença em Depoimentos",
                    "Orientação Durante Interrogatórios",
                    "Proteção de Direitos na Investigação",
                    "Assistência em Inquéritos Policiais"
                  ]}
                  whatsappNumber={whatsappNumber}
                  area="Criminal"
                  gradient="from-[#2563EB]/10 to-[#B89B72]/5"
                  delay={0.4}
                />

                <SpecialtyCard
                  icon={Users}
                  title="Tribunal do Júri"
                  description="Defesa em crimes dolosos contra a vida, com experiência comprovada em plenário e sustentação oral."
                  items={[
                    "Defesa em Crimes Dolosos Contra a Vida",
                    "Preparação de Estratégia de Defesa",
                    "Sustentação Oral Especializada",
                    "Experiência Comprovada no Plenário"
                  ]}
                  whatsappNumber={whatsappNumber}
                  area="Criminal"
                  gradient="from-[#B89B72]/10 to-[#2563EB]/5"
                  delay={0.5}
                />

                <SpecialtyCard
                  icon={Home}
                  title="Violência Doméstica"
                  description="Atuação em casos de violência doméstica, medidas protetivas e acompanhamento familiar especializado."
                  items={[
                    "Lei Maria da Penha",
                    "Medidas Protetivas",
                    "Defesa Técnica Especializada",
                    "Acompanhamento Familiar"
                  ]}
                  whatsappNumber={whatsappNumber}
                  area="Criminal"
                  gradient="from-[#2563EB]/10 to-[#B89B72]/5"
                  delay={0.6}
                />

                <SpecialtyCard
                  icon={Zap}
                  title="Atendimento de Urgência"
                  description="Atendimento rápido e eficaz em situações de prisão em flagrante, habeas corpus e plantão 24 horas."
                  items={[
                    "Prisão em Flagrante",
                    "Habeas Corpus",
                    "Liberdade Provisória",
                    "Plantão 24 horas"
                  ]}
                  whatsappNumber={whatsappNumber}
                  area="Criminal"
                  gradient="from-[#B89B72]/10 to-[#2563EB]/5"
                  delay={0.7}
                />
              </div>
            </TabsContent>

            <TabsContent value="previdenciario">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
                <SpecialtyCard
                  icon={Clock}
                  title="Aposentadorias"
                  description="Planejamento e concessão de aposentadorias por tempo de contribuição, idade, especial e invalidez."
                  items={[
                    "Aposentadoria por Tempo de Contribuição",
                    "Aposentadoria por Idade",
                    "Aposentadoria Especial",
                    "Aposentadoria por Invalidez"
                  ]}
                  whatsappNumber={whatsappNumber}
                  area="Previdenciário"
                  gradient="from-[#2563EB]/10 to-[#B89B72]/5"
                  delay={0}
                />

                <SpecialtyCard
                  icon={Activity}
                  title="Benefícios por Incapacidade"
                  description="Auxílio-doença, auxílio-acidente e aposentadoria por invalidez com perícia médica estratégica."
                  items={[
                    "Auxílio-Doença",
                    "Auxílio-Acidente",
                    "Aposentadoria por Invalidez",
                    "Acompanhamento em Perícias Médicas"
                  ]}
                  whatsappNumber={whatsappNumber}
                  area="Previdenciário"
                  gradient="from-[#B89B72]/10 to-[#2563EB]/5"
                  delay={0.1}
                />

                <SpecialtyCard
                  icon={TrendingUp}
                  title="Revisão de Benefícios"
                  description="Revisão de benefícios previdenciários para aumento de valores e reconhecimento de direitos."
                  items={[
                    "Revisão da Vida Toda",
                    "Revisão de Teto",
                    "Revisão de Atividade Especial",
                    "Recálculo de Renda Mensal Inicial"
                  ]}
                  whatsappNumber={whatsappNumber}
                  area="Previdenciário"
                  gradient="from-[#2563EB]/10 to-[#B89B72]/5"
                  delay={0.2}
                />

                <SpecialtyCard
                  icon={Heart}
                  title="Pensão por Morte"
                  description="Concessão e manutenção de pensão por morte para dependentes com análise completa de direitos."
                  items={[
                    "Pensão por Morte Urbana",
                    "Pensão por Morte Rural",
                    "Análise de Dependentes",
                    "Manutenção e Restabelecimento"
                  ]}
                  whatsappNumber={whatsappNumber}
                  area="Previdenciário"
                  gradient="from-[#B89B72]/10 to-[#2563EB]/5"
                  delay={0.3}
                />

                <SpecialtyCard
                  icon={Baby}
                  title="Benefícios Assistenciais"
                  description="BPC/LOAS para idosos e pessoas com deficiência, garantindo proteção social e dignidade."
                  items={[
                    "BPC para Idosos",
                    "BPC para Pessoas com Deficiência",
                    "Análise de Requisitos",
                    "Recursos Administrativos e Judiciais"
                  ]}
                  whatsappNumber={whatsappNumber}
                  area="Previdenciário"
                  gradient="from-[#2563EB]/10 to-[#B89B72]/5"
                  delay={0.4}
                />

                <SpecialtyCard
                  icon={Timer}
                  title="Planejamento Previdenciário"
                  description="Estratégia personalizada para maximizar seus benefícios e antecipar a aposentadoria com segurança."
                  items={[
                    "Análise de Tempo de Contribuição",
                    "Cálculo de Melhor Momento",
                    "Orientação sobre Contribuições",
                    "Simulação de Benefícios"
                  ]}
                  whatsappNumber={whatsappNumber}
                  area="Previdenciário"
                  gradient="from-[#B89B72]/10 to-[#2563EB]/5"
                  delay={0.5}
                />

                <SpecialtyCard
                  icon={UserCheck}
                  title="Aposentadoria Rural"
                  description="Concessão de benefícios rurais com comprovação de atividade e análise documental especializada."
                  items={[
                    "Aposentadoria por Idade Rural",
                    "Comprovação de Atividade Rural",
                    "Análise Documental Especializada",
                    "Direitos de Trabalhadores Rurais"
                  ]}
                  whatsappNumber={whatsappNumber}
                  area="Previdenciário"
                  gradient="from-[#2563EB]/10 to-[#B89B72]/5"
                  delay={0.6}
                />

                <SpecialtyCard
                  icon={DollarSign}
                  title="Restabelecimento e Recursos"
                  description="Restabelecimento de benefícios cessados e recursos contra decisões desfavoráveis do INSS."
                  items={[
                    "Restabelecimento de Benefícios",
                    "Recursos ao INSS",
                    "Ações Judiciais",
                    "Defesa de Direitos Previdenciários"
                  ]}
                  whatsappNumber={whatsappNumber}
                  area="Previdenciário"
                  gradient="from-[#B89B72]/10 to-[#2563EB]/5"
                  delay={0.7}
                />
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA Card - Não Encontrou Sua Necessidade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-16"
          >
              <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 lg:p-10 border border-[#B89B72]/30">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #B89B72 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                  }}></div>
                </div>

                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89B72] to-[#8B7355]"></div>

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-xl lg:text-2xl tracking-tight mb-2 text-[#F8F6F0]" style={{ fontWeight: 600 }}>
                      Não Encontrou Sua Necessidade?
                    </h3>
                    <p className="text-[#CBD5E1] text-sm mb-4 lg:mb-0">
                      Nossa equipe está pronta para atender casos complexos e personalizados.
                    </p>

                    {/* Features inline */}
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
                      {[
                        "Atendimento sigiloso",
                        "Plantão 24 horas",
                        "Sem compromisso"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[#CBD5E1]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#B89B72]" strokeWidth={3} />
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B89B72] to-[#8B7355] text-white hover:shadow-xl hover:-translate-y-0.5 transition-all whitespace-nowrap text-sm"
                    >
                      <FaWhatsapp className="h-5 w-5" />
                      <span style={{ fontWeight: 600 }}>Consulta Personalizada</span>
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

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B89B72]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#B89B72]/5 rounded-full blur-3xl"></div>
              </div>
          </motion.div>
        </div>
      </section>

      {/* Processo */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Elegant layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFECE6] via-white to-[#F8F6F0]"></div>

        {/* Subtle bronze accent */}
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
              <span className="text-[#B89B72] text-xs tracking-[0.2em] uppercase" style={{ fontWeight: 600 }}>
                Metodologia
              </span>
              <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
            </div>

            <h2 className="text-4xl lg:text-6xl tracking-tight mb-6 bg-gradient-to-br from-[#0F172A] to-[#1E293B] bg-clip-text text-transparent" style={{ fontWeight: 600, lineHeight: '1.1' }}>
              Como Trabalhamos
            </h2>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B89B72]"></div>
              <Shield className="h-5 w-5 text-[#B89B72]" strokeWidth={1.5} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B89B72]"></div>
            </div>

            <p className="text-lg text-[#475569] leading-relaxed tracking-tight max-w-2xl mx-auto">
              Um processo estruturado que combina expertise técnica, estratégia personalizada e acompanhamento transparente
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-4 lg:gap-8 auto-rows-fr relative">

            {[
              {
                step: "01",
                title: "Primeira Consulta",
                desc: "Conversa inicial sigilosa para entender seu caso e avaliar as melhores estratégias jurídicas.",
                icon: MessageCircle,
                color: "from-[#B89B72] to-[#8B7355]"
              },
              {
                step: "02",
                title: "Análise Técnica",
                desc: "Estudo aprofundado da documentação e desenvolvimento de estratégia personalizada.",
                icon: FileText,
                color: "from-[#8B7355] to-[#B89B72]"
              },
              {
                step: "03",
                title: "Atuação Estratégica",
                desc: "Execução do planejamento jurídico com acompanhamento constante e comunicação transparente.",
                icon: Gavel,
                color: "from-[#B89B72] to-[#8B7355]"
              },
              {
                step: "04",
                title: "Resultado",
                desc: "Conclusão exitosa do caso com análise de desdobramentos futuros e orientações preventivas.",
                icon: Award,
                color: "from-[#8B7355] to-[#B89B72]"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group h-full"
              >
                {/* Card */}
                <div className="relative bg-white/90 backdrop-blur-sm border border-[#B89B72]/20 p-4 py-5 lg:p-8 hover:border-[#B89B72] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  {/* Top bronze accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}></div>

                  {/* Step badge */}
                  <div className="absolute -top-4 lg:-top-5 left-1/2 -translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#B89B72] to-[#8B7355] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-base lg:text-lg tabular-nums" style={{ fontWeight: 700 }}>{item.step}</span>
                  </div>

                  {/* Icon container */}
                  <div className="mt-5 lg:mt-12 mb-2 lg:mb-6 mx-auto w-12 h-12 lg:w-16 lg:h-16 rounded-sm bg-gradient-to-br from-[#B89B72]/10 to-[#B89B72]/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <item.icon className="h-6 w-6 lg:h-8 lg:w-8 text-[#B89B72]" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg lg:text-xl tracking-tight mb-1.5 lg:mb-3 text-[#0F172A] text-center group-hover:text-[#B89B72] transition-colors" style={{ fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="text-[13px] lg:text-[15px] text-[#475569] leading-snug lg:leading-relaxed tracking-tight text-center flex-grow">
                    {item.desc}
                  </p>

                  {/* Bottom decorative element */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#B89B72]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-16"
          >
            <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 lg:p-10 border border-[#B89B72]/30">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #B89B72 1px, transparent 1px)`,
                  backgroundSize: '32px 32px'
                }}></div>
              </div>

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89B72] to-[#8B7355]"></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl lg:text-2xl tracking-tight mb-2 text-[#F8F6F0]" style={{ fontWeight: 600 }}>
                    Pronto Para Iniciar Seu Atendimento?
                  </h3>
                  <p className="text-[#CBD5E1] text-sm mb-4 lg:mb-0">
                    Entre em contato agora e receba orientação jurídica especializada.
                  </p>

                  {/* Features inline */}
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
                    {[
                      "Atendimento sigiloso",
                      "Plantão 24 horas",
                      "Sem compromisso"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[#CBD5E1]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#B89B72]" strokeWidth={3} />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
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

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B89B72]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#B89B72]/5 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-[#0F172A] py-20 lg:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#0F172A]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Badge - Mobile Only */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-1.5 bg-[#B89B72]/10 border border-[#B89B72]/30 text-[#B89B72] text-xs tracking-wide">
              SOBRE O DR. WAGNER
            </div>
          </div>

          <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto lg:mx-0"
            >
              <div className="w-full max-w-[400px] h-[650px] rounded-sm relative overflow-hidden shadow-2xl">
                <img
                  src={wagnerAboutImage}
                  alt="Dr. Wagner Souza"
                  className="w-full h-full object-cover object-top scale-x-[-1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent"></div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#B89B72]"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#B89B72]"></div>
              </div>

              {/* Floating element */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-[#2563EB]/20 to-[#B89B72]/20 backdrop-blur-3xl rounded-full -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="hidden lg:inline-flex items-center mb-4 px-4 py-1.5 bg-[#B89B72]/10 border border-[#B89B72]/30 text-[#B89B72] text-xs tracking-wide ml-auto w-fit">
                SOBRE O DR. WAGNER
              </div>
              <h2 className="text-3xl lg:text-5xl tracking-tight mb-6 text-[#F8F6F0]" style={{ fontWeight: 600, lineHeight: '1.15' }}>
                Referência em <span className="text-[#B89B72]">Direito Criminal</span> e <span className="text-[#B89B72]">Previdenciário</span>
              </h2>
              <div className="space-y-4 text-[17px] text-[#CBD5E1] leading-relaxed tracking-tight">
                <p>
                  Dr. Wagner Souza construiu sua carreira com base na excelência técnica, ética profissional e compromisso inabalável com a defesa dos direitos de seus clientes. Reconhecido como referência em Direito Criminal e Previdenciário, oferece atuação estratégica e personalizada.
                </p>
                <p>
                  Com foco em resultados concretos, cada caso recebe análise técnica aprofundada, planejamento jurídico sob medida e acompanhamento integral em todas as instâncias, sempre pautado pelo sigilo absoluto e comprometimento com a justiça.
                </p>
                <p>
                  A advocacia premium se traduz em atendimento diferenciado, disponibilidade 24 horas e capacidade técnica para atender demandas em todo o território nacional, com sede em Goiânia - GO.
                </p>
              </div>

              {/* Animated Stats */}
              <div id="stats-section" className="mt-10 grid grid-cols-3 gap-4 lg:gap-6">
                <div className="border border-[#B89B72]/30 bg-[#1E293B]/50 backdrop-blur-sm p-6 hover:border-[#B89B72] transition-all flex flex-col items-center justify-center">
                  <Clock className="h-8 w-8 text-[#B89B72] mb-3" />
                  <div className="text-2xl lg:text-3xl text-[#F8F6F0] tabular-nums mb-2 whitespace-nowrap" style={{ fontWeight: 600 }}>
                    +{stats.years} Anos
                  </div>
                  <div className="text-xs text-[#94A3B8] tracking-tight uppercase">Experiência</div>
                </div>
                <div className="border border-[#B89B72]/30 bg-[#1E293B]/50 backdrop-blur-sm p-6 hover:border-[#B89B72] transition-all flex flex-col items-center justify-center">
                  <Gavel className="h-8 w-8 text-[#B89B72] mb-3" />
                  <div className="text-3xl text-[#F8F6F0] tabular-nums mb-2 whitespace-nowrap" style={{ fontWeight: 600 }}>
                    {stats.cases}+
                  </div>
                  <div className="text-xs text-[#94A3B8] tracking-tight uppercase">Casos</div>
                </div>
                <div className="border border-[#B89B72]/30 bg-[#1E293B]/50 backdrop-blur-sm p-6 hover:border-[#B89B72] transition-all flex flex-col items-center justify-center">
                  <Star className="h-8 w-8 text-[#B89B72] fill-[#B89B72] mb-3" />
                  <div className="text-3xl text-[#F8F6F0] tabular-nums mb-2 whitespace-nowrap" style={{ fontWeight: 600 }}>
                    {stats.satisfaction}%
                  </div>
                  <div className="text-xs text-[#94A3B8] tracking-tight uppercase">Satisfação</div>
                </div>
              </div>

              {/* Awards badges */}
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
                  OAB/GO 54.321
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="relative py-20 lg:py-32 overflow-hidden">
        {/* Premium background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F0] via-[#EFECE6] to-[#F8F6F0]"></div>

        {/* Elegant geometric pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, #B89B72 0, #B89B72 1px, transparent 0, transparent 50%),
              repeating-linear-gradient(-45deg, #B89B72 0, #B89B72 1px, transparent 0, transparent 50%)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0'
          }}></div>
        </div>

        {/* Radial accents */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#B89B72]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#B89B72]/5 rounded-full blur-3xl"></div>

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
              <span className="text-[#B89B72] text-xs tracking-[0.2em] uppercase" style={{ fontWeight: 600 }}>
                Diferenciais
              </span>
              <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
            </div>

            <h2 className="text-4xl lg:text-6xl tracking-tight mb-6 bg-gradient-to-br from-[#0F172A] to-[#1E293B] bg-clip-text text-transparent" style={{ fontWeight: 600, lineHeight: '1.1' }}>
              Por Que Nos Escolher
            </h2>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B89B72]"></div>
              <Award className="h-5 w-5 text-[#B89B72]" strokeWidth={1.5} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B89B72]"></div>
            </div>

            <p className="text-lg text-[#475569] leading-relaxed tracking-tight max-w-2xl mx-auto">
              Nosso compromisso com a excelência jurídica se reflete em cada detalhe do nosso trabalho
            </p>
          </motion.div>

          {/* Premium Grid Layout */}
          <div className="grid md:grid-cols-3 gap-4 lg:gap-8 auto-rows-fr">
            {[
              {
                icon: Shield,
                title: "Sigilo Absoluto",
                description: "Confidencialidade total em todas as comunicações e documentos. Protegemos sua privacidade com protocolos rigorosos de segurança da informação.",
                badge: "Protocolo Certificado",
                gradient: "from-[#B89B72] to-[#8B7355]",
                delay: 0
              },
              {
                icon: Award,
                title: "Estratégia Jurídica",
                description: "Planejamento personalizado com análise profunda de cada caso. Desenvolvemos táticas jurídicas específicas para maximizar suas chances de êxito.",
                badge: "Foco em Resultados",
                gradient: "from-[#8B7355] to-[#B89B72]",
                delay: 0.15
              },
              {
                icon: Users,
                title: "Atendimento Premium",
                description: "Suporte próximo e humanizado em momentos delicados. Comunicação transparente e acompanhamento constante em todas as etapas do processo.",
                badge: "Disponibilidade 24/7",
                gradient: "from-[#B89B72] to-[#8B7355]",
                delay: 0.3
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                className="relative group h-full"
              >
                <div className="relative bg-white/90 backdrop-blur-sm border border-[#B89B72]/20 p-5 lg:p-10 hover:border-[#B89B72] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  {/* Top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}`}></div>

                  {/* Icon and Title - side by side on mobile, stacked on desktop */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-3 lg:gap-0 mb-4 lg:mb-0">
                    <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-sm bg-gradient-to-br from-[#B89B72]/20 to-[#8B7355]/10 flex items-center justify-center lg:mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                      <feature.icon className="h-7 w-7 lg:h-10 lg:w-10 text-[#B89B72]" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl lg:text-2xl tracking-tight text-[#0F172A] lg:mb-4 lg:min-h-[2.5rem]" style={{ fontWeight: 600 }}>
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description - grows to fill space */}
                  <p className="text-[13px] lg:text-[15px] text-[#475569] leading-snug lg:leading-relaxed tracking-tight mb-4 lg:mb-6 flex-grow">
                    {feature.description}
                  </p>

                  {/* Badge - always at bottom */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-[#B89B72]/10 border border-[#B89B72]/20 w-fit">
                    <CheckCircle className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-[#B89B72]" />
                    <span className="text-[10px] lg:text-xs text-[#B89B72]" style={{ fontWeight: 600 }}>{feature.badge}</span>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-[#B89B72]"></div>
                    <div className="absolute bottom-0 right-0 h-full w-px bg-[#B89B72]"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 relative overflow-hidden"
          >
            <div className="relative bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] p-10 lg:p-12 border border-[#B89B72]/30">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #B89B72 1px, transparent 1px)`,
                  backgroundSize: '32px 32px'
                }}></div>
              </div>

              {/* Top and bottom bronze lines */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B89B72] to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B89B72] to-transparent"></div>

              <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {[
                  { value: "95%", label: "Taxa de Êxito", icon: TrendingUp },
                  { value: "24h", label: "Resposta Rápida", icon: Zap },
                  { value: "15+", label: "Anos de Experiência", icon: Award },
                  { value: "24/7", label: "Suporte Disponível", icon: Clock }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#B89B72]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-6 w-6 text-[#B89B72]" strokeWidth={1.5} />
                    </div>
                    <div className="text-4xl lg:text-5xl text-[#F8F6F0] mb-2 tabular-nums" style={{ fontWeight: 700 }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#CBD5E1] uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="relative py-20 lg:py-32 overflow-hidden">
        {/* Premium background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8F6F0] to-[#EFECE6]"></div>

        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B89B72' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Gradient accents */}
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
              <span className="text-[#B89B72] text-xs tracking-[0.2em] uppercase" style={{ fontWeight: 600 }}>
                Testemunhos
              </span>
              <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
            </div>

            <h2 className="text-4xl lg:text-6xl tracking-tight mb-6 bg-gradient-to-br from-[#0F172A] to-[#1E293B] bg-clip-text text-transparent" style={{ fontWeight: 600, lineHeight: '1.1' }}>
              Histórias de Sucesso
            </h2>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B89B72]"></div>
              <Star className="h-5 w-5 text-[#B89B72] fill-[#B89B72]" strokeWidth={1.5} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B89B72]"></div>
            </div>

            <p className="text-lg text-[#475569] leading-relaxed tracking-tight max-w-2xl mx-auto">
              A confiança de nossos clientes é o reflexo do nosso compromisso com a excelência jurídica
            </p>
          </motion.div>

          {(() => {
            const testimonials = [
              { name: "Maria Silva", case: "Aposentadoria Especial", location: "Goiânia, GO", text: "Profissionalismo impecável. Conseguiram minha aposentadoria especial após anos de negativas do INSS. O acompanhamento foi constante e o resultado superou todas as expectativas.", rating: 5 },
              { name: "João Santos", case: "Defesa Criminal", location: "São Paulo, SP", text: "Em um momento extremamente difícil, encontrei não apenas expertise jurídica, mas também suporte humano. A defesa foi estratégica, transparente e o resultado foi absolutamente favorável.", rating: 5 },
              { name: "Ana Costa", case: "Revisão de Benefício", location: "Brasília, DF", text: "A revisão do meu benefício aumentou significativamente meu valor mensal. Equipe dedicada, transparente e que realmente se importa com o cliente do início ao fim do processo.", rating: 5 },
              { name: "Roberto Pereira", case: "Habeas Corpus", location: "Rio de Janeiro, RJ", text: "A atuação foi rápida e eficaz. Conseguiram o habeas corpus com argumentação técnica sólida e domínio total do processo. Recomendo sem ressalvas para casos criminais complexos.", rating: 5 },
              { name: "Luciana Mendes", case: "Pensão por Morte", location: "Goiânia, GO", text: "Excelente atendimento do início ao fim. Toda a documentação foi orientada com clareza e a pensão foi concedida rapidamente. Profissionais realmente comprometidos com o cliente.", rating: 5 },
              { name: "Carlos Eduardo", case: "Recurso Criminal", location: "Brasília, DF", text: "O recurso foi um sucesso! A análise técnica foi minuciosa e a sustentação oral impecável. Resultado além do esperado em um caso que parecia perdido.", rating: 5 },
              { name: "Patrícia Alves", case: "Auxílio-Doença", location: "São Paulo, SP", text: "Após três negativas do INSS, finalmente consegui meu auxílio-doença. A equipe foi paciente, atenciosa e muito profissional. Gratidão eterna!", rating: 5 },
              { name: "Fernando Lima", case: "Trânsito em Julgado", location: "Goiânia, GO", text: "Defesa criminal impecável que resultou em absolvição. O Dr. Wagner demonstrou conhecimento profundo da lei e habilidade excepcional na argumentação.", rating: 5 },
              { name: "Juliana Rodrigues", case: "Aposentadoria por Invalidez", location: "Anápolis, GO", text: "Processo conduzido com muita transparência e profissionalismo. Todas as dúvidas foram esclarecidas e o resultado foi exatamente o que esperávamos.", rating: 5 }
            ]

            const itemsPerPage = isMobile ? 1 : 3
            const currentTestimonials = testimonials.slice(testimonialPage * itemsPerPage, (testimonialPage * itemsPerPage) + itemsPerPage)
            const totalPages = Math.ceil(testimonials.length / itemsPerPage)

            return (
              <>
                <div className="relative overflow-hidden">
                  <motion.div
                    className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isMobile ? 'cursor-grab active:cursor-grabbing' : ''}`}
                    drag={isMobile ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) * velocity.x
                      if (swipe < -10000) {
                        setTestimonialPage(testimonialPage === totalPages - 1 ? 0 : testimonialPage + 1)
                      } else if (swipe > 10000) {
                        setTestimonialPage(testimonialPage === 0 ? totalPages - 1 : testimonialPage - 1)
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
                {/* Card */}
                <div className="relative bg-white/90 backdrop-blur-sm border border-[#B89B72]/20 p-8 hover:border-[#B89B72] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89B72] to-[#8B7355]"></div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#B89B72] text-[#B89B72]" strokeWidth={0} />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-[15px] text-[#475569] leading-relaxed tracking-tight mb-8 text-center flex-grow">
                    {item.text}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#B89B72]/30 to-transparent mb-6"></div>

                  {/* Client info */}
                  <div className="text-center">
                    <div className="text-[17px] text-[#0F172A] tracking-tight mb-1" style={{ fontWeight: 600 }}>
                      {item.name}
                    </div>
                    <div className="text-[13px] text-[#B89B72] tracking-tight mb-1" style={{ fontWeight: 500 }}>
                      {item.case}
                    </div>
                    <div className="text-[12px] text-[#64748B] tracking-tight">
                      {item.location}
                    </div>
                  </div>

                  {/* Bottom corner accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-[#B89B72]"></div>
                    <div className="absolute bottom-0 right-0 h-full w-px bg-[#B89B72]"></div>
                  </div>
                </div>
              </motion.div>
                    ))}
                  </motion.div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center justify-center gap-4 mt-12">
                    <button
                      onClick={() => setTestimonialPage(testimonialPage === 0 ? totalPages - 1 : testimonialPage - 1)}
                      className="w-12 h-12 rounded-full bg-white border border-[#B89B72]/30 flex items-center justify-center hover:bg-[#B89B72] hover:text-white transition-all"
                      aria-label="Anterior"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {[...Array(totalPages)].map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setTestimonialPage(i)}
                          className={`w-2 h-2 rounded-full transition-all ${i === testimonialPage ? 'bg-[#B89B72] w-8' : 'bg-[#B89B72]/30'}`}
                          aria-label={`Página ${i + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => setTestimonialPage(testimonialPage === totalPages - 1 ? 0 : testimonialPage + 1)}
                      className="w-12 h-12 rounded-full bg-white border border-[#B89B72]/30 flex items-center justify-center hover:bg-[#B89B72] hover:text-white transition-all"
                      aria-label="Próximo"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </>
            )
          })()}

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-16"
          >
            <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 lg:p-10 border border-[#B89B72]/30">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #B89B72 1px, transparent 1px)`,
                  backgroundSize: '32px 32px'
                }}></div>
              </div>

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89B72] to-[#8B7355]"></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl lg:text-2xl tracking-tight mb-2 text-[#F8F6F0]" style={{ fontWeight: 600 }}>
                    Faça Parte da Nossa História de Sucesso
                  </h3>
                  <p className="text-[#CBD5E1] text-sm mb-4 lg:mb-0">
                    Junte-se aos nossos clientes satisfeitos e tenha o melhor atendimento jurídico.
                  </p>

                  {/* Features inline */}
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
                    {[
                      "98% de satisfação",
                      "Plantão 24 horas",
                      "Atendimento premium"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[#CBD5E1]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#B89B72]" strokeWidth={3} />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
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

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B89B72]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#B89B72]/5 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#0F172A] py-20 lg:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]"></div>

        {/* Subtle bronze accents */}
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
              <span className="text-[#B89B72] text-xs tracking-[0.2em] uppercase" style={{ fontWeight: 600 }}>
                Perguntas Frequentes
              </span>
              <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
            </div>

            <h2 className="text-4xl lg:text-6xl tracking-tight mb-6 text-[#F8F6F0]" style={{ fontWeight: 600, lineHeight: '1.1' }}>
              Dúvidas Comuns
            </h2>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B89B72]"></div>
              <div className="w-2 h-2 rounded-full bg-[#B89B72]"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B89B72]"></div>
            </div>

            <p className="text-[17px] text-[#CBD5E1] leading-relaxed tracking-tight max-w-2xl mx-auto">
              Respostas claras e objetivas sobre nossos serviços jurídicos e processo de atendimento
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
                  answer: "A primeira consulta é sigilosa e pode ser realizada presencialmente em nosso escritório em Goiânia ou de forma online. Durante o atendimento, analisamos detalhadamente seu caso, esclarecemos todas as suas dúvidas e apresentamos uma estratégia jurídica personalizada. Não há qualquer compromisso inicial e você receberá uma avaliação honesta sobre as perspectivas do seu caso."
                },
                {
                  id: "item-2",
                  question: "Atendem casos em outros estados além de Goiás?",
                  answer: "Sim, absolutamente. Embora nossa sede seja em Goiânia-GO, possuímos estrutura completa e expertise para atuar em todo o território nacional. Atuamos regularmente tanto em Direito Criminal quanto Previdenciário em diversos estados, com acompanhamento processual em todas as instâncias judiciais do país."
                },
                {
                  id: "item-3",
                  question: "Qual o prazo médio para resolução de casos?",
                  answer: "O prazo varia conforme a complexidade do caso e a instância judicial envolvida. Casos previdenciários na esfera administrativa podem levar de 3 a 12 meses, enquanto processos judiciais variam de acordo com a fase processual e tribunal. Em Direito Criminal, os prazos dependem da natureza do processo. Mantemos nossos clientes sempre informados com estimativas realistas baseadas em nossa experiência."
                },
                {
                  id: "item-4",
                  question: "Como é garantido o sigilo das informações?",
                  answer: "Sigilo absoluto é um pilar fundamental da nossa atuação. Todas as comunicações são protegidas pelo sigilo profissional da advocacia, previsto em lei e regulamentado pela OAB. Utilizamos sistemas seguros de comunicação criptografada e armazenamento de documentos em plataformas com certificação de segurança. Seus dados e informações jamais serão compartilhados sem sua autorização expressa."
                },
                {
                  id: "item-5",
                  question: "Quais são as formas de pagamento disponíveis?",
                  answer: "Oferecemos diversas formas de pagamento e planos personalizados de acordo com a complexidade e natureza do caso. Trabalhamos com honorários fixos, variáveis ou misto, dependendo da modalidade. Na primeira consulta, apresentamos um orçamento transparente e detalhado, com opções de parcelamento quando aplicável. Nossa prioridade é oferecer uma solução financeira viável para que você tenha acesso à defesa jurídica de qualidade que merece."
                }
              ].map((faq, idx) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-b border-[#B89B72]/10 last:border-0">
                  <AccordionTrigger className="text-[#F8F6F0] hover:text-[#B89B72] text-left py-6">
                    <span className="flex items-start gap-4 pr-4">
                      <div className="w-8 h-8 rounded-sm bg-[#B89B72]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#B89B72] text-sm" style={{ fontWeight: 600 }}>
                          {String(idx + 1).padStart(2, '0')}
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

          {/* Contact CTA */}
          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-12"
          >
            <div className="relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 lg:p-10 border border-[#B89B72]/30">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #B89B72 1px, transparent 1px)`,
                  backgroundSize: '32px 32px'
                }}></div>
              </div>

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89B72] to-[#8B7355]"></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl lg:text-2xl tracking-tight mb-2 text-[#F8F6F0]" style={{ fontWeight: 600 }}>
                    Não Encontrou a Resposta Que Procurava?
                  </h3>
                  <p className="text-[#CBD5E1] text-sm mb-4 lg:mb-0">
                    Tire suas dúvidas diretamente com nosso advogado especializado.
                  </p>

                  {/* Features inline */}
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
                    {[
                      "Atendimento sigiloso",
                      "Plantão 24 horas",
                      "Resposta imediata"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[#CBD5E1]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#B89B72]" strokeWidth={3} />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
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

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B89B72]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#B89B72]/5 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="relative py-20 lg:py-32 overflow-hidden">
        {/* Premium background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFECE6] via-[#F8F6F0] to-white"></div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #B89B72 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-16 text-center mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-[#B89B72]/20 shadow-sm">
              <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
              <span className="text-[#B89B72] text-xs tracking-[0.2em] uppercase" style={{ fontWeight: 600 }}>
                Entre em Contato
              </span>
              <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
            </div>

            <h2 className="text-4xl lg:text-6xl tracking-tight mb-6 bg-gradient-to-br from-[#0F172A] to-[#1E293B] bg-clip-text text-transparent" style={{ fontWeight: 600, lineHeight: '1.1' }}>
              Fale Conosco
            </h2>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B89B72]"></div>
              <MessageCircle className="h-5 w-5 text-[#B89B72]" strokeWidth={1.5} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B89B72]"></div>
            </div>

            <p className="text-lg text-[#475569] leading-relaxed tracking-tight max-w-2xl mx-auto">
              Estamos prontos para atender você. Entre em contato e descubra como podemos ajudar
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {[
                {
                  icon: Phone,
                  title: "Telefone",
                  content: "(62) 99642-1788",
                  subtitle: "Plantão 24 horas por dia",
                  link: "tel:+5562996421788"
                },
                {
                  icon: FaWhatsapp,
                  title: "WhatsApp",
                  content: "(62) 99642-1788",
                  subtitle: "Plantão 24 horas por dia",
                  link: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
                },
                {
                  icon: Mail,
                  title: "E-mail",
                  content: "wapsouza@gmail.com",
                  subtitle: "Resposta em até 24 horas",
                  link: "mailto:wapsouza@gmail.com"
                },
                {
                  icon: Scale,
                  title: "Endereço",
                  content: "Av Eng. Atílio Correia lima, Qd 108 Lt 11, Cidade Jardim, Goiânia - GO, 74425-030",
                  subtitle: "Atendimento presencial e online em todo Brasil",
                  link: null
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-white/90 backdrop-blur-sm border border-[#B89B72]/20 p-6 hover:border-[#B89B72] hover:shadow-xl transition-all duration-300">
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-[#B89B72] to-transparent"></div>

                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-[#B89B72]/20 to-[#8B7355]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-7 w-7 text-[#B89B72]" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-[#B89B72] mb-1 uppercase tracking-wide" style={{ fontWeight: 600 }}>
                          {item.title}
                        </div>
                        {item.link ? (
                          <a
                            href={item.link}
                            target={item.link.startsWith('http') ? '_blank' : undefined}
                            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-lg text-[#0F172A] mb-1 block hover:text-[#B89B72] transition-colors"
                            style={{ fontWeight: 600 }}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <div className="text-lg text-[#0F172A] mb-1" style={{ fontWeight: 600 }}>
                            {item.content}
                          </div>
                        )}
                        <div className="text-sm text-[#64748B]">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="sticky top-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-10 lg:p-12 border border-[#B89B72]/30">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #B89B72 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                  }}></div>
                </div>

                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89B72] to-[#8B7355]"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#B89B72]/20 flex items-center justify-center">
                    <Handshake className="h-8 w-8 text-[#B89B72]" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl lg:text-3xl tracking-tight mb-4 text-[#F8F6F0] text-center" style={{ fontWeight: 600 }}>
                    Agende Sua Consulta
                  </h3>

                  <p className="text-[#CBD5E1] text-center mb-8 leading-relaxed">
                    Entre em contato agora e receba orientação jurídica especializada. Primeira consulta com avaliação completa do seu caso.
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {[
                      "Atendimento sigiloso garantido",
                      "Plantão 24 horas",
                      "Avaliação técnica do caso",
                      "Sem compromisso inicial"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-[#CBD5E1]">
                        <div className="w-5 h-5 rounded-sm bg-[#B89B72]/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-[#B89B72]" strokeWidth={3} />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-8 py-4 bg-gradient-to-r from-[#B89B72] to-[#8B7355] text-white hover:shadow-2xl hover:-translate-y-0.5 transition-all mb-4"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <FaWhatsapp className="h-5 w-5" />
                      <span style={{ fontWeight: 600 }}>Falar no WhatsApp</span>
                    </div>
                  </a>

                  <a
                    href="tel:+5562996421788"
                    className="block w-full text-center px-8 py-4 bg-white/10 border border-[#B89B72]/30 text-[#F8F6F0] hover:bg-white/20 transition-all backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      <span style={{ fontWeight: 600 }}>Ligar Agora</span>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] py-16 border-t border-[rgba(248,246,240,0.1)] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-96 h-96 border border-[#B89B72]"></div>
          <div className="absolute top-0 right-0 w-64 h-64 border border-[#B89B72] rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm bg-[#B89B72]/20 flex items-center justify-center">
                  <Scale className="h-6 w-6 text-[#B89B72]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-base tracking-tight text-[#F8F6F0] leading-tight" style={{ fontWeight: 600 }}>DR. WAGNER SOUZA</span>
                  <div className="flex items-center gap-2 w-full">
                    <div className="h-px flex-1 bg-[#B89B72]/50"></div>
                    <span className="text-[9px] text-[#B89B72] uppercase whitespace-nowrap" style={{ fontWeight: 400, letterSpacing: '0.3em' }}>ADVOCACIA</span>
                    <div className="h-px flex-1 bg-[#B89B72]/50"></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#94A3B8] leading-relaxed tracking-tight mb-6">
                Excelência jurídica em Direito Criminal e Previdenciário com atuação em todo o Brasil.
              </p>
              <div className="flex gap-3">
                <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#F8F6F0]/20 flex items-center justify-center hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all">
                  <FaWhatsapp className="w-5 h-5 text-[#F8F6F0]" />
                </a>
                <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#F8F6F0]/20 flex items-center justify-center hover:border-[#B89B72] hover:bg-[#B89B72]/10 transition-all">
                  <Facebook className="w-4 h-4 text-[#F8F6F0]" />
                </a>
                <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#F8F6F0]/20 flex items-center justify-center hover:border-[#B89B72] hover:bg-[#B89B72]/10 transition-all">
                  <Twitter className="w-4 h-4 text-[#F8F6F0]" />
                </a>
                <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#F8F6F0]/20 flex items-center justify-center hover:border-[#B89B72] hover:bg-[#B89B72]/10 transition-all">
                  <Instagram className="w-4 h-4 text-[#F8F6F0]" />
                </a>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="text-sm tracking-tight mb-6 text-[#F8F6F0]" style={{ fontWeight: 600 }}>Links Rápidos</h3>
              <div className="space-y-3 text-sm text-[#94A3B8]">
                <a href="#areas" className="block hover:text-[#B89B72] transition-colors">Áreas de Atuação</a>
                <a href="#sobre" className="block hover:text-[#B89B72] transition-colors">Sobre</a>
                <a href="#depoimentos" className="block hover:text-[#B89B72] transition-colors">Depoimentos</a>
                <a href="#diferenciais" className="block hover:text-[#B89B72] transition-colors">Diferenciais</a>
                <a href="#contato" className="block hover:text-[#B89B72] transition-colors">Contato</a>
              </div>
            </div>

            {/* Áreas de Atuação */}
            <div>
              <h3 className="text-sm tracking-tight mb-6 text-[#F8F6F0]" style={{ fontWeight: 600 }}>Áreas de Atuação</h3>
              <div className="space-y-3 text-sm text-[#94A3B8]">
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-[#B89B72]" />
                  Direito Criminal
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-[#B89B72]" />
                  Direito Previdenciário
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-[#B89B72]" />
                  Habeas Corpus
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-[#B89B72]" />
                  Aposentadorias
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-[#B89B72]" />
                  Recursos e Revisões
                </p>
              </div>
            </div>

            {/* Fale Conosco */}
            <div>
              <h3 className="text-sm tracking-tight mb-6 text-[#F8F6F0]" style={{ fontWeight: 600 }}>Fale Conosco</h3>
              <div className="space-y-4 text-sm text-[#94A3B8]">
                <a href="tel:+5562996421788" className="flex items-center gap-3 hover:text-[#B89B72] transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-[#F8F6F0]/5 flex items-center justify-center group-hover:bg-[#B89B72]/20 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>(62) 99642-1788</span>
                </a>
                <a href="mailto:wapsouza@gmail.com" className="flex items-center gap-3 hover:text-[#B89B72] transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-[#F8F6F0]/5 flex items-center justify-center group-hover:bg-[#B89B72]/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="truncate">wapsouza@gmail.com</span>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F8F6F0]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-xs leading-relaxed">Av Eng. Atílio Correia lima, Qd 108 Lt 11, Cidade Jardim, Goiânia - GO, 74425-030</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[rgba(248,246,240,0.1)] pt-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-[#64748B] tracking-tight">
                  © 2026 Wagner Souza | Advocacia | OAB/GO 54.321. Todos os direitos reservados.
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  <button onClick={() => setActiveModal('privacy')} className="text-sm text-[#64748B] hover:text-[#B89B72] transition-colors">Política de Privacidade</button>
                  <button onClick={() => setActiveModal('terms')} className="text-sm text-[#64748B] hover:text-[#B89B72] transition-colors">Termos de Uso</button>
                  <button onClick={() => setActiveModal('cookies')} className="text-sm text-[#64748B] hover:text-[#B89B72] transition-colors">Política de Cookies</button>
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  href="https://kleelabs.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-[#64748B] tracking-tight group transition-colors"
                >
                  <span>Desenvolvido por</span>
                  <span className="flex items-center gap-1 transition-colors">
                    <Clover className="w-4 h-4 text-[#64748B] group-hover:text-[#25D366] transition-colors" />
                    <span className="group-hover:text-[#25D366] transition-colors" style={{ fontWeight: 400 }}>
                      <span className="group-hover:font-semibold">Klee</span><span className="group-hover:text-white">Labs</span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all hover:scale-110 z-[70] group"
        aria-label="Falar no WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="h-10 w-10" />

        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></span>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#0F172A] text-white px-4 py-2 rounded-sm text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
          Falar com o Dr. Wagner agora
        </span>
      </motion.a>

      {/* WhatsApp Popup */}
      <AnimatePresence>
        {showWhatsAppPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-6 w-80 bg-white rounded-2xl shadow-2xl z-[70] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-white p-4 flex items-center gap-3 relative border-b border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex items-center justify-center overflow-hidden">
                <img
                  src={wagnerAboutImage}
                  alt="Dr. Wagner Souza"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <div className="text-sm text-[#0F172A]" style={{ fontWeight: 600 }}>
                  Dr. Wagner Souza
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-[#25D366] rounded-full"></div>
                  <span className="text-xs text-[#25D366]">Online</span>
                </div>
              </div>
              <button
                onClick={() => setShowWhatsAppPopup(false)}
                className="absolute top-3 right-3 w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                aria-label="Fechar"
              >
                <X className="h-4 w-4 text-gray-600" />
              </button>
            </div>

            {/* Message */}
            <div className="p-4 bg-[#E5DDD5]">
              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm relative">
                <p className="text-sm text-[#0F172A] leading-relaxed mb-1">
                  Olá! Aqui é o <span style={{ fontWeight: 600 }}>Dr. Wagner Souza</span>. Se precisar de apoio jurídico, estou disponível para ajudar você agora.
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-gray-500">
                  <span>{currentTime}</span>
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                    <path d="M5.5 7L1.5 3L0 4.5L5.5 10L15.5 0L14 -1.5L5.5 7Z" fill="#25D366"/>
                    <path d="M11.5 7L7.5 3L6 4.5L11.5 10L21.5 0L20 -1.5L11.5 7Z" fill="#25D366"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="p-4 bg-white">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg hover:bg-[#20BA5A] transition-all"
                onClick={() => setShowWhatsAppPopup(false)}
              >
                <FaWhatsapp className="h-5 w-5" />
                <span style={{ fontWeight: 600 }}>Conversar</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 bg-[#0F172A] text-[#F8F6F0] p-3 rounded-full shadow-xl hover:bg-[#1E293B] transition-all z-50 border border-[#B89B72]/30"
          aria-label="Voltar ao topo"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}

      {/* Modais de Política/Termos */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B] p-6 border-b border-[#B89B72]/30 z-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl text-[#F8F6F0]" style={{ fontWeight: 600 }}>
                    {activeModal === 'privacy' && 'Política de Privacidade'}
                    {activeModal === 'terms' && 'Termos de Uso'}
                    {activeModal === 'cookies' && 'Política de Cookies'}
                  </h2>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="p-2 hover:bg-[#F8F6F0]/10 transition-colors rounded-sm"
                    aria-label="Fechar"
                  >
                    <X className="h-6 w-6 text-[#F8F6F0]" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pb-12 overflow-y-auto max-h-[calc(90vh-100px)]">
                {activeModal === 'privacy' && (
                  <div className="prose prose-sm max-w-none">
                    <p className="text-[#64748B] mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>1. Introdução</h3>
                    <p className="text-[#475569] mb-6">
                      A Wagner Souza | Advocacia está comprometida em proteger a privacidade e os dados pessoais de seus clientes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                    </p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>2. Informações que Coletamos</h3>
                    <p className="text-[#475569] mb-4">Coletamos as seguintes categorias de informações:</p>
                    <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
                      <li>Dados de identificação (nome, CPF, RG, profissão)</li>
                      <li>Dados de contato (e-mail, telefone, endereço)</li>
                      <li>Dados necessários para a prestação de serviços jurídicos</li>
                      <li>Informações sobre processos e casos jurídicos</li>
                    </ul>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>3. Como Usamos Suas Informações</h3>
                    <p className="text-[#475569] mb-4">Utilizamos seus dados pessoais para:</p>
                    <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
                      <li>Prestação de serviços advocatícios</li>
                      <li>Comunicação sobre processos e andamentos</li>
                      <li>Cumprimento de obrigações legais e regulatórias</li>
                      <li>Defesa de direitos em processos judiciais e administrativos</li>
                    </ul>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>4. Compartilhamento de Dados</h3>
                    <p className="text-[#475569] mb-6">
                      Seus dados podem ser compartilhados apenas com tribunais, órgãos públicos, peritos e outros profissionais quando estritamente necessário para a prestação dos serviços jurídicos contratados, sempre respeitando o sigilo profissional.
                    </p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>5. Segurança dos Dados</h3>
                    <p className="text-[#475569] mb-6">
                      Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, perda, destruição ou alteração. Mantemos protocolos rigorosos de segurança da informação.
                    </p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>6. Seus Direitos</h3>
                    <p className="text-[#475569] mb-4">Você tem direito a:</p>
                    <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
                      <li>Confirmar a existência de tratamento de dados</li>
                      <li>Acessar seus dados pessoais</li>
                      <li>Corrigir dados incompletos ou desatualizados</li>
                      <li>Solicitar a eliminação de dados desnecessários</li>
                      <li>Revogar consentimento, quando aplicável</li>
                    </ul>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>7. Contato</h3>
                    <p className="text-[#475569] mb-6">
                      Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato através do e-mail wapsouza@gmail.com ou telefone (62) 99642-1788.
                    </p>
                  </div>
                )}

                {activeModal === 'terms' && (
                  <div className="prose prose-sm max-w-none">
                    <p className="text-[#64748B] mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>1. Aceitação dos Termos</h3>
                    <p className="text-[#475569] mb-6">
                      Ao contratar os serviços da Wagner Souza | Advocacia, você concorda com estes Termos de Uso. Se não concordar com qualquer parte destes termos, não utilize nossos serviços.
                    </p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>2. Serviços Prestados</h3>
                    <p className="text-[#475569] mb-6">
                      Prestamos serviços de advocacia especializada em Direito Criminal e Previdenciário, incluindo consultoria, defesa judicial, recursos, elaboração de pareceres e demais atos necessários à proteção dos direitos de nossos clientes.
                    </p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>3. Responsabilidades do Cliente</h3>
                    <p className="text-[#475569] mb-4">O cliente compromete-se a:</p>
                    <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
                      <li>Fornecer informações verdadeiras e completas</li>
                      <li>Apresentar documentação necessária em tempo hábil</li>
                      <li>Efetuar o pagamento dos honorários conforme acordado</li>
                      <li>Manter comunicação ativa sobre o andamento do caso</li>
                      <li>Respeitar as orientações jurídicas fornecidas</li>
                    </ul>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>4. Honorários e Pagamentos</h3>
                    <p className="text-[#475569] mb-6">
                      Os honorários advocatícios serão definidos em contrato específico, podendo ser fixos, por hora ou mediante êxito, conforme a natureza do serviço. O não pagamento dos honorários pode resultar na suspensão ou rescisão do contrato de prestação de serviços.
                    </p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>5. Sigilo Profissional</h3>
                    <p className="text-[#475569] mb-6">
                      Todos os advogados estão obrigados ao sigilo profissional conforme o Estatuto da Advocacia e Código de Ética da OAB. Todas as informações compartilhadas são protegidas por confidencialidade absoluta.
                    </p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>6. Limitação de Responsabilidade</h3>
                    <p className="text-[#475569] mb-6">
                      O escritório não garante resultados específicos em processos judiciais, uma vez que as decisões dependem do Poder Judiciário. Nossa responsabilidade limita-se à correta aplicação da técnica jurídica e ao cumprimento das obrigações éticas da profissão.
                    </p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>7. Rescisão</h3>
                    <p className="text-[#475569] mb-6">
                      O cliente pode rescindir o contrato a qualquer momento, devendo pagar os honorários proporcionais aos serviços já prestados. O escritório pode rescindir o contrato mediante justa causa, nos termos do Código de Ética da OAB.
                    </p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>8. Lei Aplicável</h3>
                    <p className="text-[#475569] mb-6">
                      Estes termos são regidos pelas leis brasileiras, em especial pelo Estatuto da Advocacia (Lei nº 8.906/94) e pelo Código de Ética e Disciplina da OAB.
                    </p>
                  </div>
                )}

                {activeModal === 'cookies' && (
                  <div className="prose prose-sm max-w-none">
                    <p className="text-[#64748B] mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>1. O que são Cookies</h3>
                    <p className="text-[#475569] mb-6">
                      Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita nosso site. Eles nos ajudam a melhorar sua experiência de navegação e entender como você interage com nosso conteúdo.
                    </p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>2. Tipos de Cookies Utilizados</h3>

                    <h4 className="text-lg text-[#0F172A] mb-3" style={{ fontWeight: 600 }}>Cookies Essenciais</h4>
                    <p className="text-[#475569] mb-4">
                      Necessários para o funcionamento básico do site. Sem eles, alguns recursos não funcionarão corretamente.
                    </p>

                    <h4 className="text-lg text-[#0F172A] mb-3" style={{ fontWeight: 600 }}>Cookies de Desempenho</h4>
                    <p className="text-[#475569] mb-4">
                      Coletam informações sobre como os visitantes usam nosso site, permitindo melhorias na navegação e conteúdo.
                    </p>

                    <h4 className="text-lg text-[#0F172A] mb-3" style={{ fontWeight: 600 }}>Cookies de Funcionalidade</h4>
                    <p className="text-[#475569] mb-6">
                      Permitem que o site lembre suas escolhas e forneça recursos aprimorados e personalizados.
                    </p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>3. Finalidade dos Cookies</h3>
                    <p className="text-[#475569] mb-4">Utilizamos cookies para:</p>
                    <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
                      <li>Garantir o funcionamento adequado do site</li>
                      <li>Lembrar suas preferências de navegação</li>
                      <li>Analisar o tráfego e uso do site</li>
                      <li>Melhorar a experiência do usuário</li>
                      <li>Personalizar conteúdo relevante</li>
                    </ul>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>4. Cookies de Terceiros</h3>
                    <p className="text-[#475569] mb-6">
                      Podemos utilizar serviços de terceiros que também estabelecem cookies, como ferramentas de análise (Google Analytics) e plataformas de comunicação (WhatsApp). Esses terceiros possuem suas próprias políticas de privacidade.
                    </p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>5. Gestão de Cookies</h3>
                    <p className="text-[#475569] mb-6">
                      Você pode configurar seu navegador para recusar cookies ou alertá-lo quando cookies estiverem sendo enviados. No entanto, algumas partes do site podem não funcionar adequadamente sem cookies.
                    </p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>6. Como Desabilitar Cookies</h3>
                    <p className="text-[#475569] mb-4">Para desabilitar cookies, acesse as configurações do seu navegador:</p>
                    <ul className="list-disc pl-6 text-[#475569] mb-6 space-y-2">
                      <li>Chrome: Configurações &gt; Privacidade e segurança &gt; Cookies</li>
                      <li>Firefox: Opções &gt; Privacidade e Segurança</li>
                      <li>Safari: Preferências &gt; Privacidade</li>
                      <li>Edge: Configurações &gt; Cookies e permissões do site</li>
                    </ul>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>7. Atualizações desta Política</h3>
                    <p className="text-[#475569] mb-6">
                      Esta Política de Cookies pode ser atualizada periodicamente. Recomendamos que você a revise regularmente para se manter informado sobre como protegemos suas informações.
                    </p>

                    <h3 className="text-xl text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>8. Contato</h3>
                    <p className="text-[#475569] mb-6">
                      Para dúvidas sobre cookies ou esta política, entre em contato através do e-mail wapsouza@gmail.com ou telefone (62) 99642-1788.
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-[#F8F6F0] p-4 border-t border-[#B89B72]/20">
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#B89B72] to-[#8B7355] text-white hover:shadow-xl transition-all"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-[#0F172A] border-t border-[#B89B72]/30 shadow-2xl z-[60] p-4 md:p-6"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-sm bg-[#B89B72]/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-[#B89B72]" />
                </div>
                <div>
                  <p className="text-sm text-[#F8F6F0] mb-1" style={{ fontWeight: 600 }}>
                    Cookies e Privacidade
                  </p>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{' '}
                    <button
                      onClick={() => setActiveModal('cookies')}
                      className="text-[#B89B72] hover:underline"
                    >
                      Política de Cookies
                    </button>
                    .
                  </p>
                </div>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button
                  onClick={() => setShowCookiePreferences(true)}
                  className="flex-1 md:flex-none px-4 py-2 border border-[#F8F6F0]/20 text-[#F8F6F0] text-sm hover:bg-[#F8F6F0]/10 transition-all"
                >
                  Editar Preferências
                </button>
                <button
                  onClick={() => setShowCookieBanner(false)}
                  className="flex-1 md:flex-none px-6 py-2 bg-gradient-to-r from-[#B89B72] to-[#8B7355] text-white text-sm hover:shadow-xl transition-all"
                >
                  Aceitar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Preferences Modal */}
      <AnimatePresence>
        {showCookiePreferences && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-sm z-[80] flex items-center justify-center p-4"
            onClick={() => setShowCookiePreferences(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative bg-white border-2 border-[#B89B72] shadow-2xl max-w-lg w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89B72] via-[#D4AF78] to-[#B89B72]"></div>

              {/* Content */}
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl text-[#0F172A]" style={{ fontWeight: 600 }}>
                    Preferências de Cookies
                  </h3>
                  <button
                    onClick={() => setShowCookiePreferences(false)}
                    className="p-2 hover:bg-[#B89B72]/10 transition-colors rounded-sm"
                    aria-label="Fechar"
                  >
                    <X className="h-5 w-5 text-[#B89B72]" strokeWidth={2} />
                  </button>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#B89B72]/50 via-[#B89B72]/30 to-transparent mb-6"></div>

                {/* Preferences */}
                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="p-4 border border-[#B89B72]/20 bg-[#F8F6F0]/50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm text-[#0F172A]" style={{ fontWeight: 600 }}>
                        Cookies Necessários
                      </h4>
                      <div className="px-3 py-1 bg-[#B89B72]/20 text-[#B89B72] text-xs">
                        Sempre Ativo
                      </div>
                    </div>
                    <p className="text-xs text-[#475569]">
                      Essenciais para o funcionamento básico do site. Não podem ser desativados.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="p-4 border border-[#B89B72]/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm text-[#0F172A]" style={{ fontWeight: 600 }}>
                        Cookies de Análise
                      </h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={cookiePreferences.analytics}
                          onChange={(e) => setCookiePreferences({
                            ...cookiePreferences,
                            analytics: e.target.checked
                          })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B89B72]"></div>
                      </label>
                    </div>
                    <p className="text-xs text-[#475569]">
                      Ajudam a entender como os visitantes interagem com o site através de estatísticas anônimas.
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="p-4 border border-[#B89B72]/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm text-[#0F172A]" style={{ fontWeight: 600 }}>
                        Cookies de Marketing
                      </h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={cookiePreferences.marketing}
                          onChange={(e) => setCookiePreferences({
                            ...cookiePreferences,
                            marketing: e.target.checked
                          })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B89B72]"></div>
                      </label>
                    </div>
                    <p className="text-xs text-[#475569]">
                      Utilizados para exibir anúncios relevantes e campanhas de marketing personalizadas.
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setShowCookiePreferences(false)
                      setShowCookieBanner(false)
                    }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-[#B89B72] to-[#8B7355] text-white hover:shadow-xl transition-all"
                  >
                    <span style={{ fontWeight: 600 }}>Salvar Preferências</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}