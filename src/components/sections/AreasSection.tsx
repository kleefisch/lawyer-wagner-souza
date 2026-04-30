"use client";

import {
  Activity,
  Award,
  Baby,
  Briefcase,
  Building,
  Clock,
  DollarSign,
  Gavel,
  Heart,
  Home,
  Pill,
  Scale,
  Skull,
  Star,
  Timer,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs";
import { SpecialtyCard } from "../../components/ui/specialty-card";
import { WHATSAPP_NUMBER } from "../../lib/constants";
import { CTABanner } from "../../components/shared/CTABanner";

export function AreasSection() {
  return (
    <section id="areas" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F0] via-[#EFECE6] to-[#F8F6F0]"></div>

      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(30deg, #B89B72 12%, transparent 12.5%, transparent 87%, #B89B72 87.5%, #B89B72),
              linear-gradient(150deg, #B89B72 12%, transparent 12.5%, transparent 87%, #B89B72 87.5%, #B89B72),
              linear-gradient(30deg, #B89B72 12%, transparent 12.5%, transparent 87%, #B89B72 87.5%, #B89B72),
              linear-gradient(150deg, #B89B72 12%, transparent 12.5%, transparent 87%, #B89B72 87.5%, #B89B72)
            `,
            backgroundSize: "80px 140px",
            backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
          }}
        ></div>
      </div>

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
            <span
              className="text-[#B89B72] text-xs tracking-[0.2em] uppercase"
              style={{ fontWeight: 600 }}
            >
              Especialidades Jurídicas
            </span>
            <div className="w-1 h-4 bg-gradient-to-b from-[#B89B72] to-[#8B7355]"></div>
          </div>

          <h2
            className="text-4xl lg:text-6xl tracking-tight mb-6 bg-gradient-to-br from-[#0F172A] to-[#1E293B] bg-clip-text text-transparent"
            style={{ fontWeight: 600, lineHeight: "1.1" }}
          >
            Áreas de Atuação
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B89B72]"></div>
            <Scale className="h-5 w-5 text-[#B89B72]" strokeWidth={1.5} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B89B72]"></div>
          </div>

          <p className="text-lg text-[#475569] leading-relaxed tracking-tight max-w-2xl mx-auto">
            Expertise em Direito Criminal e Previdenciário com atuação
            estratégica, sigilo absoluto e resultados comprovados em todo o
            território nacional.
          </p>
        </motion.div>

        <Tabs defaultValue="criminal" className="w-full">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <TabsList>
              <TabsTrigger value="criminal">Direito Criminal</TabsTrigger>
              <TabsTrigger value="previdenciario">
                Direito Previdenciário
              </TabsTrigger>
            </TabsList>
            <p className="text-sm text-[#64748B] text-center sm:text-right">
              Clique em "Ver Serviços" para conhecer os detalhes de cada
              especialidade
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
                  "Sequestro e Cárcere Privado",
                ]}
                whatsappNumber={WHATSAPP_NUMBER}
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
                  "Extorsão",
                ]}
                whatsappNumber={WHATSAPP_NUMBER}
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
                  "Defesa em Crimes Conexos",
                ]}
                whatsappNumber={WHATSAPP_NUMBER}
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
                  "Acompanhamento Processual Completo",
                ]}
                whatsappNumber={WHATSAPP_NUMBER}
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
                  "Assistência em Inquéritos Policiais",
                ]}
                whatsappNumber={WHATSAPP_NUMBER}
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
                  "Experiência Comprovada no Plenário",
                ]}
                whatsappNumber={WHATSAPP_NUMBER}
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
                  "Acompanhamento Familiar",
                ]}
                whatsappNumber={WHATSAPP_NUMBER}
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
                  "Plantão 24 horas",
                ]}
                whatsappNumber={WHATSAPP_NUMBER}
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
                  "Aposentadoria por Invalidez",
                ]}
                whatsappNumber={WHATSAPP_NUMBER}
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
                  "Acompanhamento em Perícias Médicas",
                ]}
                whatsappNumber={WHATSAPP_NUMBER}
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
                  "Recálculo de Renda Mensal Inicial",
                ]}
                whatsappNumber={WHATSAPP_NUMBER}
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
                  "Manutenção e Restabelecimento",
                ]}
                whatsappNumber={WHATSAPP_NUMBER}
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
                  "Recursos Administrativos e Judiciais",
                ]}
                whatsappNumber={WHATSAPP_NUMBER}
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
                  "Simulação de Benefícios",
                ]}
                whatsappNumber={WHATSAPP_NUMBER}
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
                  "Direitos de Trabalhadores Rurais",
                ]}
                whatsappNumber={WHATSAPP_NUMBER}
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
                  "Defesa de Direitos Previdenciários",
                ]}
                whatsappNumber={WHATSAPP_NUMBER}
                area="Previdenciário"
                gradient="from-[#B89B72]/10 to-[#2563EB]/5"
                delay={0.7}
              />
            </div>
          </TabsContent>
        </Tabs>

        <CTABanner
          title="Não Encontrou Sua Necessidade?"
          subtitle="Nossa equipe está pronta para atender casos complexos e personalizados."
          features={["Atendimento sigiloso", "Plantão 24 horas", "Sem compromisso"]}
          sectionName="areas"
        />
      </div>
    </section>
  );
}
