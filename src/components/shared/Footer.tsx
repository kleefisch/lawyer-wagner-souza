"use client";

import { Scale, Phone, MapPin, Mail, Clover, CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { WHATSAPP_LINK, PHONE_LINK, PHONE_NUMBER, EMAIL, ADDRESS, OAB_NUMBER } from "../../lib/constants";

interface FooterProps {
  setActiveModal: (modal: "privacy" | "terms" | "cookies" | null) => void;
}

export function Footer({ setActiveModal }: FooterProps) {
  return (
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
                <span
                  className="text-base tracking-tight text-[#F8F6F0] leading-tight"
                  style={{ fontWeight: 600 }}
                >
                  DR. WAGNER SOUZA
                </span>
                <div className="flex items-center gap-2 w-full">
                  <div className="h-px flex-1 bg-[#B89B72]/50"></div>
                  <span
                    className="text-[9px] text-[#B89B72] uppercase whitespace-nowrap"
                    style={{ fontWeight: 400, letterSpacing: "0.3em" }}
                  >
                    ADVOCACIA
                  </span>
                  <div className="h-px flex-1 bg-[#B89B72]/50"></div>
                </div>
              </div>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed tracking-tight mb-6">
              Excelência jurídica em Direito Criminal e Previdenciário com
              atuação em todo o Brasil.
            </p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp"
                className="w-10 h-10 rounded-full border border-[#F8F6F0]/20 flex items-center justify-center hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all"
              >
                <FaWhatsapp className="w-5 h-5 text-[#F8F6F0]" aria-hidden="true" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-[#F8F6F0]/20 flex items-center justify-center hover:border-[#B89B72] hover:bg-[#B89B72]/10 transition-all"
              >
                <Facebook className="w-4 h-4 text-[#F8F6F0]" aria-hidden="true" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full border border-[#F8F6F0]/20 flex items-center justify-center hover:border-[#B89B72] hover:bg-[#B89B72]/10 transition-all"
              >
                <Twitter className="w-4 h-4 text-[#F8F6F0]" aria-hidden="true" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-[#F8F6F0]/20 flex items-center justify-center hover:border-[#B89B72] hover:bg-[#B89B72]/10 transition-all"
              >
                <Instagram className="w-4 h-4 text-[#F8F6F0]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3
              className="text-sm tracking-tight mb-6 text-[#F8F6F0]"
              style={{ fontWeight: 600 }}
            >
              Links Rápidos
            </h3>
            <div className="space-y-3 text-sm text-[#94A3B8]">
              <a
                href="#areas"
                className="block hover:text-[#B89B72] transition-colors"
              >
                Áreas de Atuação
              </a>
              <a
                href="#sobre"
                className="block hover:text-[#B89B72] transition-colors"
              >
                Sobre
              </a>
              <a
                href="#depoimentos"
                className="block hover:text-[#B89B72] transition-colors"
              >
                Depoimentos
              </a>
              <a
                href="#diferenciais"
                className="block hover:text-[#B89B72] transition-colors"
              >
                Diferenciais
              </a>
              <a
                href="#contato"
                className="block hover:text-[#B89B72] transition-colors"
              >
                Contato
              </a>
            </div>
          </div>

          {/* Áreas de Atuação */}
          <div>
            <h3
              className="text-sm tracking-tight mb-6 text-[#F8F6F0]"
              style={{ fontWeight: 600 }}
            >
              Áreas de Atuação
            </h3>
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
            <h3
              className="text-sm tracking-tight mb-6 text-[#F8F6F0]"
              style={{ fontWeight: 600 }}
            >
              Fale Conosco
            </h3>
            <div className="space-y-4 text-sm text-[#94A3B8]">
              <a
                href={PHONE_LINK}
                className="flex items-center gap-3 hover:text-[#B89B72] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#F8F6F0]/5 flex items-center justify-center group-hover:bg-[#B89B72]/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span>{PHONE_NUMBER}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 hover:text-[#B89B72] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#F8F6F0]/5 flex items-center justify-center group-hover:bg-[#B89B72]/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="truncate">{EMAIL}</span>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F8F6F0]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-xs leading-relaxed">
                  {ADDRESS}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(248,246,240,0.1)] pt-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-[#94A3B8] tracking-tight">
                © 2026 Wagner Souza | Advocacia | {OAB_NUMBER}. Todos os
                direitos reservados.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <button
                  onClick={() => setActiveModal("privacy")}
                  className="text-sm text-[#94A3B8] hover:text-[#B89B72] transition-colors"
                >
                  Política de Privacidade
                </button>
                <button
                  onClick={() => setActiveModal("terms")}
                  className="text-sm text-[#94A3B8] hover:text-[#B89B72] transition-colors"
                >
                  Termos de Uso
                </button>
                <button
                  onClick={() => setActiveModal("cookies")}
                  className="text-sm text-[#94A3B8] hover:text-[#B89B72] transition-colors"
                >
                  Política de Cookies
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <a
                href="https://kleelabs.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[#94A3B8] tracking-tight group transition-colors"
              >
                <span>Desenvolvido por</span>
                <span className="flex items-center gap-1 transition-colors">
                  <Clover className="w-4 h-4 text-[#94A3B8] group-hover:text-[#25D366] transition-colors" />
                  <span
                    className="group-hover:text-[#25D366] transition-colors"
                    style={{ fontWeight: 400 }}
                  >
                    <span className="group-hover:font-semibold">Klee</span>
                    <span className="group-hover:text-white">Labs</span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
