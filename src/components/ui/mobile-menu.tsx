"use client";
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { motion, AnimatePresence } from "motion/react"
import { PHONE_NUMBER, PHONE_LINK, EMAIL } from "../../lib/constants"

interface MobileMenuProps {
  whatsappNumber: string
  whatsappMessage: string
}

export function MobileMenu({ whatsappNumber, whatsappMessage }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "#areas", label: "Áreas de Atuação" },
    { href: "#sobre", label: "Sobre" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative w-10 h-10 flex items-center justify-center border border-[#B89B72]/30 hover:border-[#B89B72] hover:bg-[#B89B72]/10 transition-all"
        aria-label="Menu"
      >
        {isOpen ? <X className="h-5 w-5 text-[#B89B72]" /> : <Menu className="h-5 w-5 text-[#B89B72]" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#0F172A]/95 backdrop-blur-md z-40 md:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#1E293B] border-l border-[#B89B72]/20 z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-[#B89B72]/30 hover:border-[#B89B72] hover:bg-[#B89B72]/10 transition-all"
                >
                  <X className="h-5 w-5 text-[#B89B72]" />
                </button>

                {/* Menu items */}
                <nav className="mt-16 space-y-2">
                  {menuItems.map((item, idx) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="block px-4 py-3 text-[#F8F6F0] border border-transparent hover:border-[#B89B72]/30 hover:bg-[#B89B72]/5 hover:text-[#B89B72] transition-all"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 space-y-3"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#B89B72] to-[#8B7355] text-white px-6 py-4 text-center tracking-tight hover:shadow-xl transition-all"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                    <span style={{ fontWeight: 600 }}>Falar no WhatsApp</span>
                  </a>

                  <a
                    href={PHONE_LINK}
                    className="flex items-center justify-center gap-2 w-full border border-[#B89B72]/30 text-[#F8F6F0] px-6 py-4 text-center tracking-tight hover:bg-[#F8F6F0]/10 hover:border-[#B89B72] transition-all"
                  >
                    <Phone className="h-5 w-5 text-[#B89B72]" />
                    <span style={{ fontWeight: 600 }}>Ligue Agora</span>
                  </a>
                </motion.div>

                {/* Contact info */}
                <div className="mt-8 pt-8 border-t border-[#F8F6F0]/10 space-y-3 text-sm text-[#94A3B8]">
                  <p>{PHONE_NUMBER}</p>
                  <p>{EMAIL}</p>
                  <p className="text-xs">Goiânia - GO • Atuação Nacional</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
