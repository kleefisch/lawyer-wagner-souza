"use client";

import { useState } from "react";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";
import { LegalModals } from "./LegalModals";

export function ClientModalsWrapper() {
  const [activeModal, setActiveModal] = useState<
    "privacy" | "terms" | "cookies" | null
  >(null);

  return (
    <>
      <Footer setActiveModal={setActiveModal} />
      <CookieBanner setActiveModal={setActiveModal} />
      <LegalModals activeModal={activeModal} setActiveModal={setActiveModal} />
    </>
  );
}
