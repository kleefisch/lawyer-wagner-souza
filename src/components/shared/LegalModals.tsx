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
                    Última atualização: 30 de Abril de 2026
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
                      Política de Privacidade e Proteção de Dados
                    </p>
                    <p>
                      A <strong>Wagner Souza Advocacia</strong> preza pelo sigilo, confidencialidade e proteção absoluta dos dados de nossos clientes. Esta Política de Privacidade foi elaborada em estrita observância à Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018), bem como aos preceitos do Código de Ética e Disciplina da Ordem dos Advogados do Brasil (OAB).
                    </p>

                    <h4 className="text-lg text-[#0F172A] mt-8 mb-3 font-semibold border-l-2 border-[#B89B72] pl-3">
                      1. Princípios e Sigilo Profissional
                    </h4>
                    <p>
                      A relação advogado-cliente é baseada na mais absoluta confiança. Todo e qualquer dado compartilhado conosco é protegido não apenas pelas normas da LGPD, mas também pelo rigoroso sigilo profissional garantido pela legislação advocatícia brasileira, não sendo divulgado a terceiros exceto sob autorização expressa ou exigência legal estrita.
                    </p>

                    <h4 className="text-lg text-[#0F172A] mt-8 mb-3 font-semibold border-l-2 border-[#B89B72] pl-3">
                      2. Coleta e Finalidade do Tratamento de Dados
                    </h4>
                    <p>
                      Coletamos e tratamos dados pessoais exclusivamente para finalidades legítimas, específicas e informadas, destacando-se:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-[#475569]">
                      <li><strong className="text-[#0F172A]">Dados de Qualificação e Contato:</strong> Nome, CPF, RG, endereço, e-mail e telefone, para formalização de procurações, contratos de honorários e manutenção de comunicação.</li>
                      <li><strong className="text-[#0F172A]">Dados Sensíveis e Processuais:</strong> Informações financeiras, histórico médico, previdenciário e criminal, essenciais para a análise de viabilidade, propositura de demandas judiciais e defesas administrativas.</li>
                      <li><strong className="text-[#0F172A]">Dados de Navegação:</strong> Informações anonimizadas de interação com nosso site (via cookies), visando melhorar a experiência do usuário e mensurar estatísticas de acesso.</li>
                    </ul>

                    <h4 className="text-lg text-[#0F172A] mt-8 mb-3 font-semibold border-l-2 border-[#B89B72] pl-3">
                      3. Direitos do Titular (Art. 18 da LGPD)
                    </h4>
                    <p>
                      Você possui controle sobre seus dados. Garantimos o exercício dos direitos de: confirmação da existência de tratamento, acesso, correção de dados incompletos ou desatualizados, anonimização, bloqueio ou eliminação de dados desnecessários, e a revogação do consentimento, resguardados os prazos prescricionais de armazenamento legal e a inviolabilidade inerente à atuação jurídica.
                    </p>

                    <div className="bg-[#F8F6F0] p-4 border border-[#B89B72]/20 mt-6 rounded-sm">
                      <p className="text-sm font-medium text-[#B89B72] mb-1">Contato do Encarregado de Dados (DPO)</p>
                      <p className="text-sm">Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato diretamente através do e-mail oficial: <a href="mailto:wapsouza@gmail.com" className="font-medium text-[#B89B72]">wapsouza@gmail.com</a>.</p>
                    </div>
                  </div>
                )}

                {activeModal === "terms" && (
                  <div className="space-y-6">
                    <p className="lead text-lg text-[#0F172A] font-medium">
                      Termos e Condições de Uso
                    </p>
                    <p>
                      O acesso e a navegação neste site, operado pela <strong>Wagner Souza Advocacia</strong>, implicam na aceitação e compreensão dos Termos de Uso aqui descritos.
                    </p>

                    <h4 className="text-lg text-[#0F172A] mt-8 mb-3 font-semibold border-l-2 border-[#B89B72] pl-3">
                      1. Natureza Informativa e Publicidade OAB
                    </h4>
                    <p>
                      Este ambiente digital tem propósito estritamente institucional e informativo, obedecendo às diretrizes do Provimento nº 205/2021 e do Código de Ética e Disciplina da OAB, que regulamentam o marketing jurídico. Nenhum conteúdo publicado, artigo ou explicação constitui aconselhamento legal, parecer jurídico vinculativo ou captação de clientela mercantilista.
                    </p>

                    <h4 className="text-lg text-[#0F172A] mt-8 mb-3 font-semibold border-l-2 border-[#B89B72] pl-3">
                      2. Ausência de Vínculo Advocatício Inicial
                    </h4>
                    <p>
                      O mero contato via formulários, e-mail ou WhatsApp corporativo, bem como a leitura de materiais do site, não estabelece uma relação formal advogado-cliente. A contratação dos serviços jurídicos está condicionada à análise preliminar do caso, aceitação mútua e assinatura de contrato específico de honorários e procuração.
                    </p>

                    <h4 className="text-lg text-[#0F172A] mt-8 mb-3 font-semibold border-l-2 border-[#B89B72] pl-3">
                      3. Propriedade Intelectual e Direitos Autorais
                    </h4>
                    <p>
                      Todos os elementos visuais, textos, artigos e arquitetura do site são protegidos pela Lei de Direitos Autorais (Lei nº 9.610/1998). É terminantemente proibida a cópia, reprodução, distribuição ou uso comercial do conteúdo sem a devida citação de fonte e autorização prévia.
                    </p>

                    <h4 className="text-lg text-[#0F172A] mt-8 mb-3 font-semibold border-l-2 border-[#B89B72] pl-3">
                      4. Contato
                    </h4>
                    <p>
                      Para dirimir quaisquer dúvidas sobre estes termos ou para agendamento de consultas formais, contate nossa equipe pelo e-mail <strong><a href="mailto:wapsouza@gmail.com" className="text-[#B89B72]">wapsouza@gmail.com</a></strong> ou pelos canais de atendimento indicados no site.
                    </p>
                  </div>
                )}

                {activeModal === "cookies" && (
                  <div className="space-y-6">
                    <p className="lead text-lg text-[#0F172A] font-medium">
                      Política e Gerenciamento de Cookies
                    </p>
                    <p>
                      A fim de proporcionar uma navegação fluida, segura e personalizada, utilizamos cookies tecnológicos em nosso site. Esta política, integrada à nossa Política de Privacidade, segue os padrões exigidos pela LGPD (Lei nº 13.709/2018) e opera em conformidade com o <em>Google Consent Mode v2</em>.
                    </p>

                    <h4 className="text-lg text-[#0F172A] mt-8 mb-3 font-semibold border-l-2 border-[#B89B72] pl-3">
                      1. O que são Cookies?
                    </h4>
                    <p>
                      São pequenos arquivos de texto armazenados localmente no seu dispositivo. Eles não acessam seus arquivos pessoais, servindo apenas para guardar preferências do usuário, otimizar carregamentos e aferir o desempenho da nossa plataforma institucional.
                    </p>

                    <h4 className="text-lg text-[#0F172A] mt-8 mb-3 font-semibold border-l-2 border-[#B89B72] pl-3">
                      2. Modalidades de Cookies e Gestão de Consentimento
                    </h4>
                    <p>Classificamos nossos cookies nas seguintes frentes, sob as quais você possui total controle através do nosso painel de privacidade:</p>
                    <ul className="list-disc pl-5 space-y-2 text-[#475569]">
                      <li>
                        <strong className="text-[#0F172A]">Cookies Estritamente Necessários:</strong> Garantem as funções sistêmicas de segurança e estabilidade. Por serem fundamentais para a existência do site, não podem ser desativados.
                      </li>
                      <li>
                        <strong className="text-[#0F172A]">Cookies de Analytics (Desempenho):</strong> Auxiliam a contagem de visitas e origem do tráfego (ex: Google Analytics). Funcionam de forma anonimizada e dependem de sua aprovação prévia.
                      </li>
                      <li>
                        <strong className="text-[#0F172A]">Cookies de Marketing:</strong> Empregados para oferecer campanhas publicitárias (Google Ads) mais adequadas aos seus interesses. Nós não comercializamos esses dados, e eles só são ativados caso você consinta ativamente (Opt-in).
                      </li>
                    </ul>

                    <h4 className="text-lg text-[#0F172A] mt-8 mb-3 font-semibold border-l-2 border-[#B89B72] pl-3">
                      3. Alterações e Contato
                    </h4>
                    <p>
                      Você pode revogar ou ajustar seus consentimentos a qualquer momento pelo botão de configuração de cookies do site ou entrando em contato pelo e-mail <strong><a href="mailto:wapsouza@gmail.com" className="text-[#B89B72]">wapsouza@gmail.com</a></strong>.
                    </p>
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
