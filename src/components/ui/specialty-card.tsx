"use client";
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Check, LucideIcon, Eye, X } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

interface SpecialtyCardProps {
  icon: LucideIcon
  title: string
  description: string
  items: string[]
  whatsappNumber: string
  area: string
  gradient: string
  delay?: number
}

export function SpecialtyCard({
  icon: Icon,
  title,
  description,
  items,
  whatsappNumber,
  area,
  gradient,
  delay = 0
}: SpecialtyCardProps) {
  const [showServices, setShowServices] = useState(false)

  const handleWhatsApp = () => {
    const areaText = area === "Previdenciário" ? "Área Previdenciária" : `Área ${area}`
    const message = `Olá Dr. Wagner, preciso de uma consulta jurídica sobre ${title} (${areaText}). Podemos conversar sobre o meu caso?`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="group relative h-full"
      >
        <div className="relative bg-white/95 backdrop-blur-sm border border-[#B89B72]/20 hover:shadow-xl hover:border-[#B89B72] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
          {/* Premium top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89B72] via-[#D4AF78] to-[#B89B72]"></div>

          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #B89B72 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}></div>
          </div>

          {/* Content */}
          <div className="relative p-8 flex-1 flex flex-col">
            {/* Icon and Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-[#B89B72]/20 via-[#B89B72]/10 to-transparent border border-[#B89B72]/30 flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-lg flex-shrink-0">
                <Icon className="h-7 w-7 text-[#B89B72]" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl tracking-tight text-[#0F172A] group-hover:text-[#B89B72] transition-colors" style={{ fontWeight: 600, lineHeight: '1.3' }}>
                  {title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-[14px] text-[#475569] leading-relaxed tracking-tight mb-6 flex-grow">
              {description}
            </p>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#B89B72]/30 to-transparent mb-6"></div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowServices(true)}
                className="flex-1 flex items-center justify-center gap-2 border border-[#B89B72] text-[#B89B72] px-4 py-3 text-sm tracking-tight hover:bg-[#B89B72] hover:text-white transition-all"
              >
                <Eye className="h-3.5 w-3.5" strokeWidth={2} />
                <span className="hidden sm:inline" style={{ fontWeight: 500 }}>Ver Serviços</span>
                <span className="sm:hidden" style={{ fontWeight: 500 }}>Serviços</span>
              </button>
              <button
                onClick={handleWhatsApp}
                className="px-4 py-3 bg-gradient-to-r from-[#25D366] to-[#20BA5A] text-white hover:shadow-xl hover:scale-105 transition-all"
                aria-label="WhatsApp"
                title="Falar no WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Corner accent lines */}
          <div className="absolute bottom-0 left-0 w-16 h-px bg-[#B89B72] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div className="absolute bottom-0 left-0 w-px h-16 bg-[#B89B72] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
          <div className="absolute bottom-0 right-0 w-16 h-px bg-[#B89B72] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
          <div className="absolute bottom-0 right-0 w-px h-16 bg-[#B89B72] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
        </div>
      </motion.div>

      {/* Modal/Overlay for Services */}
      <AnimatePresence>
        {showServices && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowServices(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative bg-gradient-to-br from-white via-[#F8F6F0] to-white border-2 border-[#B89B72] shadow-2xl max-w-lg w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89B72] via-[#D4AF78] to-[#B89B72]"></div>

              {/* Content */}
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-[#B89B72]/20 to-[#B89B72]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-[#B89B72]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl text-[#0F172A]" style={{ fontWeight: 600 }}>
                        {title}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowServices(false)}
                    className="p-2 hover:bg-[#B89B72]/10 transition-colors rounded-sm flex-shrink-0"
                    aria-label="Fechar"
                  >
                    <X className="h-5 w-5 text-[#B89B72]" strokeWidth={2} />
                  </button>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#B89B72]/50 via-[#B89B72]/30 to-transparent mb-6"></div>

                {/* Services List */}
                <div className="max-h-[50vh] overflow-y-auto pr-2">
                  <h4 className="text-sm text-[#B89B72] tracking-wider uppercase mb-4" style={{ fontWeight: 600 }}>
                    Serviços Especializados
                  </h4>
                  <ul className="space-y-3">
                    {items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="w-5 h-5 rounded-sm bg-gradient-to-br from-[#B89B72]/20 to-[#B89B72]/10 border border-[#B89B72]/30 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:bg-[#B89B72] transition-all duration-200">
                          <Check className="w-3 h-3 text-[#B89B72] group-hover/item:text-white transition-colors" strokeWidth={3} />
                        </div>
                        <span className="text-[14px] text-[#475569] leading-relaxed tracking-tight group-hover/item:text-[#0F172A] transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#B89B72]/50 to-transparent mb-6"></div>
                  <button
                    onClick={handleWhatsApp}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#B89B72] to-[#8B7355] text-white px-6 py-4 text-sm tracking-tight hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                    <span style={{ fontWeight: 600 }}>Consultar Advogado no WhatsApp</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
