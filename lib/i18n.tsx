"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "es";

const dictionary = {
  en: {
    nav: {
      pharmacy: "Pharmacy",
      medicalSupply: "Medical Supply",
      dmeCrt: "DME / CRT",
      warehouse: "Warehouse",
      about: "About Us",
      contact: "Contact",
      referral: "Provider Referral",
      getStarted: "Get Started",
    },
    hero: {
      eyebrow: "Los Angeles, CA",
      title: "Four sides of care, one pharmacy.",
      lede: "California Medical Pharmacy operates as a single practice across four divisions: prescription pharmacy, medical supply, DME/CRT, and our own warehouse and delivery operation. Find your division below.",
    },
    schedule: {
      heading: "Schedule a CRT/DME evaluation",
      withLink:
        "Pick a time that works for you and it will land directly on our team's calendar.",
      withoutLink:
        "Online scheduling is being connected. In the meantime, call us to book an evaluation.",
      online: "Schedule online",
      call: "Call (213) 413-2343",
    },
    footer: {
      blurb:
        "A family owned and operated pharmacy in downtown Los Angeles, covering prescription pharmacy, medical supply, DME/CRT, and our own warehouse and delivery, end to end, under one roof.",
      contact: "Contact",
      links: "Useful Links",
      home: "Home",
      about: "About Us",
      contactLink: "Contact",
      rights: "All rights reserved.",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      hipaa: "HIPAA Notice",
    },
    langToggle: "Español",
  },
  es: {
    nav: {
      pharmacy: "Farmacia",
      medicalSupply: "Suministros Médicos",
      dmeCrt: "DME / CRT",
      warehouse: "Almacén",
      about: "Sobre Nosotros",
      contact: "Contacto",
      referral: "Referencia de Proveedor",
      getStarted: "Comenzar",
    },
    hero: {
      eyebrow: "Los Ángeles, CA",
      title: "Cuatro áreas de cuidado, una sola farmacia.",
      lede: "California Medical Pharmacy opera como una sola práctica en cuatro divisiones: farmacia de recetas, suministros médicos, DME/CRT, y nuestra propia operación de almacén y entrega. Encuentre su división abajo.",
    },
    schedule: {
      heading: "Programar una evaluación de CRT/DME",
      withLink:
        "Elija un horario que le convenga y quedará agendado directamente en el calendario de nuestro equipo.",
      withoutLink:
        "La programación en línea se está conectando. Mientras tanto, llámenos para programar una evaluación.",
      online: "Programar en línea",
      call: "Llame al (213) 413-2343",
    },
    footer: {
      blurb:
        "Una farmacia familiar en el centro de Los Ángeles, que cubre farmacia de recetas, suministros médicos, DME/CRT, y nuestra propia entrega, todo bajo un mismo techo.",
      contact: "Contacto",
      links: "Enlaces Útiles",
      home: "Inicio",
      about: "Sobre Nosotros",
      contactLink: "Contacto",
      rights: "Todos los derechos reservados.",
      terms: "Términos y Condiciones",
      privacy: "Política de Privacidad",
      hipaa: "Aviso de HIPAA",
    },
    langToggle: "English",
  },
} as const;

type Dictionary = typeof dictionary.en;

const LanguageContext = createContext<{
  lang: Lang;
  toggle: () => void;
  t: Dictionary;
}>({
  lang: "en",
  toggle: () => {},
  t: dictionary.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("cmp-lang");
    if (stored === "es" || stored === "en") setLang(stored);
  }, []);

  function toggle() {
    const next = lang === "en" ? "es" : "en";
    setLang(next);
    window.localStorage.setItem("cmp-lang", next);
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: dictionary[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
