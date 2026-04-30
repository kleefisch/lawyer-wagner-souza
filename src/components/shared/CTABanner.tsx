"use client";

import { CheckCircle, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";

import { WHATSAPP_LINK, PHONE_NUMBER, PHONE_LINK } from "../../lib/constants";
import { trackWhatsAppClick } from "../../lib/analytics";

interface CTABannerProps {
  title: string;
  subtitle: string;
  features: string[];
  sectionName: string;
}

export function CTABanner({
  title,
  subtitle,
  features,
  sectionName,
}: CTABannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mt-16"
    >
      <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 lg:p-10 border border-[#B89B72]/30">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #B89B72 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>

        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89B72] to-[#8B7355]"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center lg:text-left">
            <h3
              className="text-xl lg:text-2xl tracking-tight mb-2 text-[#F8F6F0]"
              style={{ fontWeight: 600 }}
            >
              {title}
            </h3>
            <p className="text-[#CBD5E1] text-sm mb-4 lg:mb-0">{subtitle}</p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-[#CBD5E1]"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 text-[#B89B72]"
                    strokeWidth={3}
                  />
                  <span className="text-xs">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(`${sectionName}_cta_banner`)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B89B72] to-[#8B7355] text-white hover:shadow-xl hover:-translate-y-0.5 transition-all whitespace-nowrap text-sm"
            >
              <FaWhatsapp className="h-5 w-5" />
              <span style={{ fontWeight: 600 }}>Falar no WhatsApp</span>
            </a>

            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-[#B89B72]/30 text-[#F8F6F0] hover:bg-white/20 transition-all backdrop-blur-sm whitespace-nowrap text-sm"
            >
              <Phone className="h-4 w-4" />
              <span style={{ fontWeight: 600 }}>{PHONE_NUMBER}</span>
            </a>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 bg-[#B89B72]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#B89B72]/5 rounded-full blur-3xl"></div>
      </div>
    </motion.div>
  );
}
