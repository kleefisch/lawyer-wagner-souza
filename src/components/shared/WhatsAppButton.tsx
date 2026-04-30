"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";
import Image from "next/image";
import { WHATSAPP_LINK } from "../../lib/constants";
import { trackWhatsAppClick } from "../../lib/analytics";

export function WhatsAppButton() {
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
      setShowWhatsAppPopup(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* WhatsApp Flutuante */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("floating_widget")}
        className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 bg-[#25D366] text-white p-2 sm:p-3 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all hover:scale-110 z-[70] group"
        aria-label="Falar no WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="h-7 w-7 sm:h-10 sm:w-10" />

        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-subtle"></span>

        {/* Tooltip */}
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#0F172A] text-white px-4 py-2 rounded-sm text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity shadow-xl">
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
            className="fixed bottom-16 right-3 sm:bottom-28 sm:right-6 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl z-[70] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-white p-4 flex items-center gap-3 relative border-b border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex items-center justify-center overflow-hidden relative">
                <Image
                  src="/wagner-about.png"
                  alt="Dr. Wagner Souza"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <div
                  className="text-sm text-[#0F172A]"
                  style={{ fontWeight: 600 }}
                >
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
                  Olá! Aqui é o{" "}
                  <span style={{ fontWeight: 600 }}>Dr. Wagner Souza</span>. Se
                  precisar de apoio jurídico, estou disponível para ajudar você
                  agora.
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-gray-500">
                  <span>{currentTime}</span>
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                    <path
                      d="M5.5 7L1.5 3L0 4.5L5.5 10L15.5 0L14 -1.5L5.5 7Z"
                      fill="#25D366"
                    />
                    <path
                      d="M11.5 7L7.5 3L6 4.5L11.5 10L21.5 0L20 -1.5L11.5 7Z"
                      fill="#25D366"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="p-4 bg-white">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg hover:bg-[#20BA5A] transition-all"
                onClick={() => {
                  trackWhatsAppClick("floating_popup");
                  setShowWhatsAppPopup(false);
                }}
              >
                <FaWhatsapp className="h-5 w-5" />
                <span style={{ fontWeight: 600 }}>Conversar</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
