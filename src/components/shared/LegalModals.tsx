"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, Scale, FileText, Shield } from "lucide-react";

interface LegalModalsProps {
  activeModal: "privacy" | "terms" | "cookies" | null;
  setActiveModal: (modal: "privacy" | "terms" | "cookies" | null) => void;
}

export function LegalModals({ activeModal, setActiveModal }: LegalModalsProps) {
  return (
    <AnimatePresence>
      {activeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-sm z-[80] flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="relative bg-white border-2 border-[#B89B72] shadow-2xl max-w-3xl w-full max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89B72] via-[#D4AF78] to-[#B89B72]"></div>

            {/* Header */}
            <div className="p-6 md:p-8 border-b border-gray-100 flex items-start justify-between bg-[#F8F6F0]/50 sticky top-0 z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-[#B89B72]/20 flex items-center justify-center">
                  {activeModal === "privacy" && (
                    <Shield className="h-6 w-6 text-[#B89B72]" strokeWidth={1.5} />
                  )}
                  {activeModal === "terms" && (
                    <Scale className="h-6 w-6 text-[#B89B72]" strokeWidth={1.5} />
                  )}
                  {activeModal === "cookies" && (
                    <FileText className="h-6 w-6 text-[#B89B72]" strokeWidth={1.5} />
                  )}
                </div>
                <div>
                  <h3
                    className="text-2xl text-[#0F172A]"
                    style={{ fontWeight: 600 }}
                  >
                    {activeModal === "privacy" && "Política de Privacidade"}
                    {activeModal === "terms" && "Termos de Uso"}
                    {activeModal === "cookies" && "Política de Cookies"}
                  </h3>
                  <p className="text-sm text-[#64748B] mt-1">
                    Última atualização: 15 de Abril de 2026
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-2 hover:bg-[#B89B72]/10 transition-colors rounded-sm group"
                aria-label="Fechar"
              >
                <X className="h-6 w-6 text-[#94A3B8] group-hover:text-[#B89B72] transition-colors" strokeWidth={1.5} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
              <div className="prose prose-slate max-w-none prose-headings:text-[#0F172A] prose-headings:font-semibold prose-p:text-[#475569] prose-p:leading-relaxed prose-a:text-[#B89B72] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#0F172A]">
                {activeModal === "privacy" && (
                  <div className="space-y-6">
                    <p className="lead text-lg text-[#0F172A] font-medium">
                      Compromisso com a sua Privacidade
                    </p>
                    <p>
                      Na Wagner Souza Advocacia, a proteção e confidencialidade dos dados dos nossos clientes são
                      prioridades absolutas. Esta declaração descreve como coletamos, usamos, processamos e protegemos as
                      suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei
                      nº 13.709/2018).
                    </p>
                    
                    <h4 className="text-lg text-[#0F172A] mt-8 mb-3 font-semibold border-l-2 border-[#B89B72] pl-3">
                      1. Coleta de Informações
                    </h4>
                    <p>
                      Coletamos informações essenciais para a prestação dos nossos serviços jurídicos. Isso pode incluir:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-[#475569]">
                      <li><strong className="text-[#0F172A]">Dados de identificação:</strong> Nome completo, CPF, RG, data de nascimento, estado civil.</li>
                      <li><strong className="text-[#0F172A]">Dados de contato:</strong> Endereço de e-mail, número de telefone fixo ou celular, endereço residencial e comercial.</li>
                      <li><strong className="text-[#0F172A]">Informações sensíveis:</strong> Dados relacionados a processos em andamento, informações financeiras, histórico previdenciário e criminal estritamente necessários para a atuação jurídica.</li>
                      <li><strong className="text-[#0F172A]">Dados de navegação:</strong> Informações coletadas automaticamente durante a visita ao nosso site, como endereços IP e comportamento de navegação.</li>
                    </ul>

                    <h4 className="text-lg text-[#0F172A] mt-8 mb-3 font-semibold border-l-2 border-[#B89B72] pl-3">
                      2. Uso das Informações
                    </h4>
                    <p>Os dados coletados são utilizados para:</p>
                    <ul className="list-disc pl-5 space-y-2 text-[#475569]">
                      <li>Viabilizar a análise, acompanhamento e condução de processos judiciais e consultorias preventivas.</li>
                      <li>Estabelecer comunicação efetiva referente ao andamento dos serviços contratados.</li>
                      <li>Cumprir com obrigações legais, regulatórias (especialmente as determinadas pela OAB) e decisões judiciais.</li>
                      <li>Aperfeiçoar nossos canais de atendimento e compreender como os usuários interagem com nosso ambiente digital.</li>
                    </ul>
                    
                    <div className="bg-[#F8F6F0] p-4 border border-[#B89B72]/20 mt-6 rounded-sm">
                      <p className="text-sm font-medium text-[#B89B72] mb-1">Dúvidas?</p>
                      <p className="text-sm">Para questões sobre seus dados ou exercício dos seus direitos (acesso, correção, portabilidade ou exclusão), contate nosso DPO através do e-mail <a href="mailto:privacidade@wagneradv.com.br" className="font-medium text-[#B89B72]">privacidade@wagneradv.com.br</a>.</p>
                    </div>
                  </div>
                )}

                {activeModal === "terms" && (
                  <div className="space-y-6">
                    <p className="lead text-lg text-[#0F172A] font-medium">
                      Termos e Condições de Uso do Site
                    </p>
                    <p>
                      Bem-vindo ao site da Wagner Souza Advocacia. Ao acessar e utilizar este
                      ambiente digital, você adere aos presentes termos e condições. Recomendamos a
                      leitura atenta das diretrizes abaixo antes de prosseguir com a navegação ou o envio de informações.
                    </p>

                    <h4 className="text-lg text-[#0F172A] mt-8 mb-3 font-semibold border-l-2 border-[#B89B72] pl-3">
                      1. Natureza do Conteúdo
                    </h4>
                    <p>
                      O conteúdo divulgado neste site, incluindo artigos, notícias, decisões judiciais comentadas, 
                      e-books e informativos tem finalidade exclusivamente <strong>informativa e institucional</strong>.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-[#475569]">
                      <li>Nenhum material disponibilizado substitui o aconselhamento legal personalizado.</li>
                      <li>A leitura ou envio de consultas via formulário não caracteriza o estabelecimento de uma relação advogado-cliente formal.</li>
                      <li>A atuação representativa demanda firmamento contratual específico.</li>
                    </ul>

                    <h4 className="text-lg text-[#0F172A] mt-8 mb-3 font-semibold border-l-2 border-[#B89B72] pl-3">
                      2. Propriedade Intelectual
                    </h4>
                    <p>
                      Todo o material presente nesta plataforma — textos, layout corporativo, logotipo, identidade gráfica, imagens, código-fonte e compilações — é de propriedade da Wagner Souza Advocacia ou está licenciado para seu uso regular.
                    </p>
                    <p>
                      A reprodução, cópia, distribuição ou modificação não autorizada constitui infração aos Direitos Autorais (Lei 9.610/98), sujeitando o infrator às sanções legais.
                    </p>
                  </div>
                )}

                {activeModal === "cookies" && (
                  <div className="space-y-6">
                    <p className="lead text-lg text-[#0F172A] font-medium">
                      Política e Gerenciamento de Cookies
                    </p>
                    <p>
                      Esta declaração complementa nossa Política de Privacidade para explicar o que
                      são cookies, como a Wagner Souza Advocacia os utiliza em seu portal, os tipos envolvidos e como você pode controlá-los.
                    </p>
                    
                    <h4 className="text-lg text-[#0F172A] mt-8 mb-3 font-semibold border-l-2 border-[#B89B72] pl-3">
                      1. O que são Cookies?
                    </h4>
                    <p>
                      Cookies são pequenos fragmentos de texto gerados por um site e armazenados pelo seu navegador no computador, tablet, ou smartphone. Eles guardam histórico de navegação e preferências, para que você não precise reconfigurar o acesso a cada nova visita, além de viabilizarem o carregamento e eficiência da página.
                    </p>

                    <h4 className="text-lg text-[#0F172A] mt-8 mb-3 font-semibold border-l-2 border-[#B89B72] pl-3">
                      2. Categorias de Cookies que Utilizamos
                    </h4>
                    <p>Nosso ambiente emprega as seguintes variações:</p>
                    <ul className="list-disc pl-5 space-y-2 text-[#475569]">
                      <li>
                        <strong className="text-[#0F172A]">Essenciais / Estritamente Necessários:</strong> Fundamentais para que o site desempenhe suas funções básicas operacionais e de segurança. O site não sobrevive ao desligamento destes, portanto, são dispensados de consentimento prévio.
                      </li>
                      <li>
                        <strong className="text-[#0F172A]">Análise e Performance:</strong> Operados por sistemas terceiros confiáveis (como Google Analytics). Aferem de forma anônima a movimentação de usuários (páginas mais vistas, tempo de permanência, origem do tráfego).
                      </li>
                      <li>
                        <strong className="text-[#0F172A]">Marketing e Terceiros:</strong> Plataformas de publicidade ou de integração externa podem embutir cookies para traçar o seu perfil de interesses ou engajar plugins (como os balões de WhatsApp embarcados).
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 md:p-8 border-t border-gray-100 bg-[#F8F6F0]/30 sticky bottom-0">
              <button
                onClick={() => setActiveModal(null)}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#B89B72] to-[#8B7355] text-white hover:shadow-xl transition-all"
              >
                <span style={{ fontWeight: 600 }}>Fechar</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
