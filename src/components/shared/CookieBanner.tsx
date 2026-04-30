"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, X } from "lucide-react";

interface CookieBannerProps {
  setActiveModal: (modal: "privacy" | "terms" | "cookies" | null) => void;
}

export function CookieBanner({ setActiveModal }: CookieBannerProps) {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showCookiePreferences, setShowCookiePreferences] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: true,
  });
  const updateConsent = (prefs: { analytics: boolean, marketing: boolean }) => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag('consent', 'update', {
        'ad_storage': prefs.marketing ? 'granted' : 'denied',
        'ad_user_data': prefs.marketing ? 'granted' : 'denied',
        'ad_personalization': prefs.marketing ? 'granted' : 'denied',
        'analytics_storage': prefs.analytics ? 'granted' : 'denied'
      });
    }
  };

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowCookieBanner(true);
    } else {
      const parsed = JSON.parse(consent);
      setCookiePreferences(parsed);
      updateConsent(parsed);
    }
  }, []);

  const handleAcceptAll = () => {
    const prefs = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("cookie_consent", JSON.stringify(prefs));
    setCookiePreferences(prefs);
    updateConsent(prefs);
    setShowCookieBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie_consent", JSON.stringify(cookiePreferences));
    updateConsent(cookiePreferences);
    setShowCookiePreferences(false);
    setShowCookieBanner(false);
  };

  return (
    <>
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
                  <p
                    className="text-sm text-[#F8F6F0] mb-1"
                    style={{ fontWeight: 600 }}
                  >
                    Cookies e Privacidade
                  </p>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Utilizamos cookies para melhorar sua experiência. Ao
                    continuar navegando, você concorda com nossa{" "}
                    <button
                      onClick={() => setActiveModal("cookies")}
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
                  className="flex-1 md:flex-none px-4 py-2 border border-[#F8F6F0]/20 text-[#F8F6F0] text-sm hover:bg-[#F8F6F0]/10 transition-all cursor-pointer"
                >
                  Editar Preferências
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 md:flex-none px-6 py-2 bg-gradient-to-r from-[#B89B72] to-[#8B7355] text-white text-sm hover:shadow-xl transition-all cursor-pointer"
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
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B89B72] via-[#D4AF78] to-[#B89B72]"></div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className="text-2xl text-[#0F172A]"
                    style={{ fontWeight: 600 }}
                  >
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

                <div className="h-px bg-gradient-to-r from-[#B89B72]/50 via-[#B89B72]/30 to-transparent mb-6"></div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="p-4 border border-[#B89B72]/20 bg-[#F8F6F0]/50">
                    <div className="flex items-center justify-between mb-2">
                      <h4
                        className="text-sm text-[#0F172A]"
                        style={{ fontWeight: 600 }}
                      >
                        Cookies Necessários
                      </h4>
                      <div className="px-3 py-1 bg-[#B89B72]/20 text-[#B89B72] text-xs">
                        Sempre Ativo
                      </div>
                    </div>
                    <p className="text-xs text-[#475569]">
                      Essenciais para o funcionamento básico do site. Não podem
                      ser desativados.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="p-4 border border-[#B89B72]/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4
                        className="text-sm text-[#0F172A]"
                        style={{ fontWeight: 600 }}
                      >
                        Cookies de Análise
                      </h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={cookiePreferences.analytics}
                          onChange={(e) =>
                            setCookiePreferences({
                              ...cookiePreferences,
                              analytics: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B89B72]"></div>
                      </label>
                    </div>
                    <p className="text-xs text-[#475569]">
                      Ajudam a entender como os visitantes interagem com o site
                      através de estatísticas anônimas.
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="p-4 border border-[#B89B72]/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4
                        className="text-sm text-[#0F172A]"
                        style={{ fontWeight: 600 }}
                      >
                        Cookies de Marketing
                      </h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={cookiePreferences.marketing}
                          onChange={(e) =>
                            setCookiePreferences({
                              ...cookiePreferences,
                              marketing: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B89B72]"></div>
                      </label>
                    </div>
                    <p className="text-xs text-[#475569]">
                      Utilizados para exibir anúncios relevantes e campanhas de
                      marketing personalizadas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-[#B89B72] to-[#8B7355] text-white hover:shadow-xl transition-all cursor-pointer"
                  >
                    <span style={{ fontWeight: 600 }}>Salvar Preferências</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
