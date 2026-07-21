"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "es";

interface Dictionary {
  nav: {
    pharmacy: string;
    medicalSupply: string;
    dmeCrt: string;
    warehouse: string;
    about: string;
    contact: string;
    referral: string;
    getStarted: string;
  };
  common: {
    address: string;
    phone: string;
    fax: string;
    email: string;
    submit: string;
    sending: string;
    errorGeneric: string;
    name: string;
  };
  home: {
    eyebrow: string;
    title: string;
    lede: string;
    view: string;
    divisions: {
      pharmacy: { name: string; copy: string };
      medicalSupply: { name: string; copy: string };
      dmeCrt: { name: string; copy: string };
      warehouse: { name: string; copy: string };
    };
    factLabels: {
      formulaFax: string;
    };
    staffHeadings: {
      pharmacyStaff: string;
      formula: string;
      medicalSupplyStaff: string;
      billingMedicalSupply: string;
      billingDme: string;
      dmeCrtStaff: string;
      warehouseStaff: string;
    };
    serviceArea: string;
    schedule: {
      heading: string;
      withLink: string;
      withoutLink: string;
      online: string;
      call: string;
      referralPrompt: string;
      referralLink: string;
    };
    dialByDept: {
      heading: string;
      lede: string;
      pharmacy: string;
      office: string;
      medicalSupply: string;
      warehouse: string;
    };
    trustStrip: {
      familyOwned: { title: string; copy: string };
      bilingual: { title: string; copy: string };
      insurance: { title: string; copy: string };
      oneTeam: { title: string; copy: string };
    };
    photoLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lede: string;
    body: string[];
    whatWeCover: string;
    categories: string[];
    accreditationHeading: string;
    accreditationCopy: string;
    accreditationLabels: {
      body: string;
      number: string;
      license: string;
      npi: string;
    };
    accreditationBodyNote: string;
    tbd: string;
    closing: string;
    teamPhotoLabel: string;
  };
  contact: {
    heading: string;
    intro: string;
    formLabels: {
      message: string;
      send: string;
    };
    thanks: string;
  };
  referral: {
    heading: string;
    intro: string;
    labels: {
      providerName: string;
      practiceName: string;
      providerPhone: string;
      providerEmail: string;
      patientName: string;
      patientPhone: string;
      serviceNeeded: string;
      selectOne: string;
      notes: string;
      submitReferral: string;
    };
    thanks: string;
  };
  getStarted: {
    heading: string;
    intro: string;
    labels: {
      phone: string;
      insuranceCarrier: string;
      memberId: string;
      serviceNeeded: string;
      selectOne: string;
    };
    thanks: string;
  };
  footer: {
    blurb: string;
    contact: string;
    links: string;
    home: string;
    about: string;
    contactLink: string;
    rights: string;
    terms: string;
    privacy: string;
    hipaa: string;
  };
  langToggle: string;
}

const dictionary: Record<Lang, Dictionary> = {
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
    common: {
      address: "Address",
      phone: "Phone",
      fax: "Fax",
      email: "Email",
      submit: "Submit",
      sending: "Sending...",
      errorGeneric: "Something went wrong. Please try again or call (213) 413-2343.",
      name: "Name",
    },
    home: {
      eyebrow: "Downtown Los Angeles",
      title: "One pharmacy, four ways we help.",
      lede: "Use the directory below to jump straight to what you need. Each division has its own contact details, staff, and, where it applies, a way to schedule directly.",
      view: "view",
      divisions: {
        pharmacy: {
          name: "Pharmacy",
          copy: "Our pharmacy fills new prescriptions and refills, handles transfers from other pharmacies, and offers immunizations and one-on-one medication consultations. Our pharmacists are available to answer questions about interactions, dosing, and your treatment plan.",
        },
        medicalSupply: {
          name: "Medical Supply",
          copy: "Our medical supply division stocks everyday health and mobility essentials, from wound care and diabetic supplies to braces and daily living aids, for walk-in purchase or order.",
        },
        dmeCrt: {
          name: "DME / CRT",
          copy: "Our Durable Medical Equipment and Complex Rehab Technology division fits and supplies wheelchairs, mobility equipment, and other DME. Complex Rehab Technology needs an in-person or virtual evaluation before equipment is fitted; use the link below to schedule one.",
        },
        warehouse: {
          name: "Warehouse & Delivery",
          copy: "Our warehouse handles fulfillment and delivery for CRT and DME orders, coordinating with patients and referring providers to get equipment where it needs to go on schedule.",
        },
      },
      factLabels: {
        formulaFax: "Formula Dept. Fax",
      },
      staffHeadings: {
        pharmacyStaff: "Pharmacy staff",
        formula: "Formula",
        medicalSupplyStaff: "Medical Supply staff",
        billingMedicalSupply: "Billing",
        billingDme: "Billing",
        dmeCrtStaff: "DME / CRT staff",
        warehouseStaff: "Warehouse staff",
      },
      serviceArea: "Delivery service area: to be confirmed.",
      schedule: {
        heading: "Schedule a CRT/DME evaluation",
        withLink: "Pick a time that works for you and it will land directly on our team's calendar.",
        withoutLink: "Online scheduling is being connected. In the meantime, call us to book an evaluation.",
        online: "Schedule online",
        call: "Call (213) 413-2343",
        referralPrompt: "Referring provider?",
        referralLink: "Submit a referral",
      },
      dialByDept: {
        heading: "Dial by department",
        lede: "Call (213) 413-2343, then dial the extension for the department you need.",
        pharmacy: "Pharmacy — ext. 1",
        office: "Office — ext. 2",
        medicalSupply: "Medical Supply — ext. 3",
        warehouse: "Warehouse — ext. 4",
      },
      trustStrip: {
        familyOwned: {
          title: "Family owned",
          copy: "Decisions get made by people who answer the phone, not a call center out of state.",
        },
        bilingual: {
          title: "Se habla español",
          copy: "Spanish-speaking staff across all four divisions, not just the front desk.",
        },
        insurance: {
          title: "Medicare & Medi-Cal",
          copy: "We handle insurance and prior authorization directly with you and your provider.",
        },
        oneTeam: {
          title: "One team, four services",
          copy: "The same team fills your prescription and coordinates your equipment delivery.",
        },
      },
      photoLabel: "Photo of our downtown LA location, coming soon",
    },
    about: {
      eyebrow: "About Us",
      title: "A family pharmacy, built for the long run.",
      lede: "We started as a single counter pharmacy and grew into four connected divisions without losing the part that matters most: knowing our patients by name. That's still how we operate today.",
      body: [
        "Being family owned means decisions here get made by people who actually answer the phone, not a call center in another state. When something falls through the cracks, there's someone in the building who can fix it that day.",
        "Downtown Los Angeles is a diverse community, and a large share of the patients we serve speak Spanish as a first language. We built our team, not just our website, around that: Spanish-speaking staff sit in every one of our four divisions, not just one front desk.",
        "We handle Medicare, Medi-Cal, and private insurance directly, including prior authorization, so patients and referring providers aren't stuck navigating that alone.",
        "None of this works as four separate businesses. It works because the same team that fills your prescription can also coordinate your equipment delivery, without you having to explain your situation twice.",
      ],
      whatWeCover: "What we cover",
      categories: [
        "Formula",
        "Incontinence supplies",
        "Urology supplies",
        "Tracheostomy supplies",
        "Ostomy supplies",
        "Wound supplies",
        "Feeding supplies",
        "DME / CRT: wheelchairs, beds, car seats, walkers, strollers, gait trainers, and more",
      ],
      accreditationHeading: "Accreditation & Licensing",
      accreditationCopy: "California Medical Pharmacy holds the accreditation and licensing required to bill Medicare, Medi-Cal, and private insurance for pharmacy and DME/CRT services.",
      accreditationLabels: {
        body: "Accrediting body",
        number: "Accreditation #",
        license: "Pharmacy license #",
        npi: "NPI",
      },
      accreditationBodyNote: "(ACHC, NABP, or CHAP, confirm which)",
      tbd: "To be added",
      closing: "Have a question about whether we cover something, or want to get started? Start here, or if you're a referring provider, submit a referral. You can also reach out directly, or see our DME/CRT section to schedule an evaluation.",
      teamPhotoLabel: "Photo of our team, coming soon",
    },
    contact: {
      heading: "Contact Us",
      intro: "What you need decides the fastest way to reach us. Quick question? Send a message below. Starting service or checking insurance? Use Get Started. Referring a patient? Use the Provider Referral form. Or just call: (213) 413-2343.",
      formLabels: {
        message: "Message",
        send: "Send message",
      },
      thanks: "Thanks. Your message is on its way to the pharmacy.",
    },
    referral: {
      heading: "Provider Referral",
      intro: "For physicians, therapists, and other providers referring a patient for DME, CRT, medical supply, or pharmacy services. Fill out what you can below and our team will follow up. Please do not include full dates of birth, diagnoses, or other sensitive health details in this form; our team will contact you directly to collect anything further needed.",
      labels: {
        providerName: "Provider name",
        practiceName: "Practice / facility name",
        providerPhone: "Provider phone",
        providerEmail: "Provider email",
        patientName: "Patient name",
        patientPhone: "Patient phone",
        serviceNeeded: "Service needed",
        selectOne: "Select one",
        notes: "Notes (please do not include diagnosis or DOB)",
        submitReferral: "Submit referral",
      },
      thanks: "Thank you. This referral has been sent to our team and someone will follow up shortly.",
    },
    getStarted: {
      heading: "Get Started",
      intro: "New to California Medical Pharmacy? Tell us a bit about what you need and your insurance, and our team will reach out to confirm coverage and next steps. Please do not include your full Social Security number or full date of birth here; we'll collect any sensitive details securely by phone.",
      labels: {
        phone: "Phone",
        insuranceCarrier: "Insurance carrier",
        memberId: "Member ID (optional)",
        serviceNeeded: "What do you need?",
        selectOne: "Select one",
      },
      thanks: "Thank you. Our team will review your information and reach out to confirm coverage.",
    },
    footer: {
      blurb: "A family owned and operated pharmacy in downtown Los Angeles, covering prescription pharmacy, medical supply, DME/CRT, and our own warehouse and delivery, end to end, under one roof.",
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
    common: {
      address: "Dirección",
      phone: "Teléfono",
      fax: "Fax",
      email: "Correo",
      submit: "Enviar",
      sending: "Enviando...",
      errorGeneric: "Algo salió mal. Intente de nuevo o llame al (213) 413-2343.",
      name: "Nombre",
    },
    home: {
      eyebrow: "Centro de Los Ángeles",
      title: "Una farmacia, cuatro formas de ayudar.",
      lede: "Use el directorio a continuación para ir directamente a lo que necesita. Cada división tiene su propia información de contacto, personal y, cuando aplica, una forma de programar directamente.",
      view: "ver",
      divisions: {
        pharmacy: {
          name: "Farmacia",
          copy: "Nuestra farmacia surte recetas nuevas y resurtidos, gestiona transferencias de otras farmacias, y ofrece vacunas y consultas individuales sobre medicamentos. Nuestros farmacéuticos están disponibles para responder preguntas sobre interacciones, dosis, y su plan de tratamiento.",
        },
        medicalSupply: {
          name: "Suministros Médicos",
          copy: "Nuestra división de suministros médicos tiene lo esencial para la salud y movilidad diaria, desde cuidado de heridas y suministros para diabéticos hasta bastones y ayudas para la vida diaria, para compra en persona o por pedido.",
        },
        dmeCrt: {
          name: "DME / CRT",
          copy: "Nuestra división de Equipo Médico Duradero y Tecnología de Rehabilitación Compleja ajusta y suministra sillas de ruedas, equipo de movilidad, y otro DME. La Tecnología de Rehabilitación Compleja requiere una evaluación en persona o virtual antes de ajustar el equipo; use el enlace abajo para programar una.",
        },
        warehouse: {
          name: "Almacén y Entrega",
          copy: "Nuestro almacén se encarga del cumplimiento y entrega de pedidos de CRT y DME, coordinando con pacientes y proveedores para que el equipo llegue a tiempo.",
        },
      },
      factLabels: {
        formulaFax: "Fax de Fórmula",
      },
      staffHeadings: {
        pharmacyStaff: "Personal de Farmacia",
        formula: "Fórmula",
        medicalSupplyStaff: "Personal de Suministros Médicos",
        billingMedicalSupply: "Facturación",
        billingDme: "Facturación",
        dmeCrtStaff: "Personal de DME / CRT",
        warehouseStaff: "Personal de Almacén",
      },
      serviceArea: "Área de servicio de entrega: por confirmar.",
      schedule: {
        heading: "Programar una evaluación de CRT/DME",
        withLink: "Elija un horario que le convenga y quedará agendado directamente en el calendario de nuestro equipo.",
        withoutLink: "La programación en línea se está conectando. Mientras tanto, llámenos para programar una evaluación.",
        online: "Programar en línea",
        call: "Llame al (213) 413-2343",
        referralPrompt: "¿Es usted un proveedor que refiere?",
        referralLink: "Enviar una referencia",
      },
      dialByDept: {
        heading: "Marque por departamento",
        lede: "Llame al (213) 413-2343, luego marque la extensión del departamento que necesita.",
        pharmacy: "Farmacia — ext. 1",
        office: "Oficina — ext. 2",
        medicalSupply: "Suministros Médicos — ext. 3",
        warehouse: "Almacén — ext. 4",
      },
      trustStrip: {
        familyOwned: {
          title: "Empresa familiar",
          copy: "Las decisiones las toman personas que contestan el teléfono, no un centro de llamadas fuera del estado.",
        },
        bilingual: {
          title: "Se habla español",
          copy: "Personal que habla español en las cuatro divisiones, no solo en la recepción.",
        },
        insurance: {
          title: "Medicare y Medi-Cal",
          copy: "Gestionamos el seguro y la autorización previa directamente con usted y su proveedor.",
        },
        oneTeam: {
          title: "Un equipo, cuatro servicios",
          copy: "El mismo equipo surte su receta y coordina la entrega de su equipo.",
        },
      },
      photoLabel: "Foto de nuestra ubicación en el centro de LA, próximamente",
    },
    about: {
      eyebrow: "Sobre Nosotros",
      title: "Una farmacia familiar, construida para durar.",
      lede: "Empezamos como una sola farmacia de mostrador y crecimos hasta cuatro divisiones conectadas sin perder lo más importante: conocer a nuestros pacientes por nombre. Así seguimos operando hoy.",
      body: [
        "Ser una empresa familiar significa que las decisiones las toman personas que realmente contestan el teléfono, no un centro de llamadas en otro estado. Cuando algo se complica, hay alguien en el edificio que puede resolverlo ese mismo día.",
        "El centro de Los Ángeles es una comunidad diversa, y una gran parte de los pacientes que atendemos habla español como primer idioma. Construimos nuestro equipo, no solo nuestro sitio web, pensando en eso: hay personal que habla español en cada una de nuestras cuatro divisiones, no solo en la recepción.",
        "Gestionamos Medicare, Medi-Cal, y seguros privados directamente, incluyendo autorizaciones previas, para que los pacientes y los proveedores que refieren no tengan que hacerlo solos.",
        "Nada de esto funcionaría como cuatro negocios separados. Funciona porque el mismo equipo que surte su receta también puede coordinar la entrega de su equipo, sin que tenga que explicar su situación dos veces.",
      ],
      whatWeCover: "Lo que cubrimos",
      categories: [
        "Fórmula",
        "Suministros para incontinencia",
        "Suministros de urología",
        "Suministros de traqueostomía",
        "Suministros de ostomía",
        "Suministros para heridas",
        "Suministros de alimentación",
        "DME / CRT: sillas de ruedas, camas, asientos para auto, andadores, carriolas, entrenadores de marcha, y más",
      ],
      accreditationHeading: "Acreditación y Licencias",
      accreditationCopy: "California Medical Pharmacy cuenta con la acreditación y las licencias necesarias para facturar a Medicare, Medi-Cal, y seguros privados por servicios de farmacia y DME/CRT.",
      accreditationLabels: {
        body: "Entidad acreditadora",
        number: "Número de acreditación",
        license: "Número de licencia de farmacia",
        npi: "NPI",
      },
      accreditationBodyNote: "(ACHC, NABP, o CHAP, confirmar cuál)",
      tbd: "Por agregar",
      closing: "¿Tiene alguna pregunta sobre si cubrimos algo, o quiere comenzar? Empiece aquí, o si es un proveedor que refiere, envíe una referencia. También puede contactarnos directamente, o ver nuestra sección de DME/CRT para programar una evaluación.",
      teamPhotoLabel: "Foto de nuestro equipo, próximamente",
    },
    contact: {
      heading: "Contáctenos",
      intro: "Lo que necesita determina la forma más rápida de contactarnos. ¿Una pregunta rápida? Envíe un mensaje abajo. ¿Va a comenzar el servicio o verificar su seguro? Use Comenzar. ¿Va a referir a un paciente? Use el formulario de Referencia de Proveedor. O simplemente llame: (213) 413-2343.",
      formLabels: {
        message: "Mensaje",
        send: "Enviar mensaje",
      },
      thanks: "Gracias. Su mensaje está en camino a la farmacia.",
    },
    referral: {
      heading: "Referencia de Proveedor",
      intro: "Para médicos, terapeutas, y otros proveedores que refieren a un paciente para servicios de DME, CRT, suministros médicos, o farmacia. Complete lo que pueda a continuación y nuestro equipo dará seguimiento. Por favor no incluya fechas de nacimiento completas, diagnósticos, u otros detalles médicos sensibles en este formulario; nuestro equipo se comunicará directamente para obtener lo que se necesite.",
      labels: {
        providerName: "Nombre del proveedor",
        practiceName: "Nombre de la práctica / instalación",
        providerPhone: "Teléfono del proveedor",
        providerEmail: "Correo del proveedor",
        patientName: "Nombre del paciente",
        patientPhone: "Teléfono del paciente",
        serviceNeeded: "Servicio necesario",
        selectOne: "Seleccione uno",
        notes: "Notas (no incluya diagnóstico ni fecha de nacimiento)",
        submitReferral: "Enviar referencia",
      },
      thanks: "Gracias. Esta referencia ha sido enviada a nuestro equipo y alguien dará seguimiento pronto.",
    },
    getStarted: {
      heading: "Comenzar",
      intro: "¿Es nuevo en California Medical Pharmacy? Cuéntenos un poco sobre lo que necesita y su seguro, y nuestro equipo se comunicará para confirmar la cobertura y los próximos pasos. Por favor no incluya su número de Seguro Social completo ni su fecha de nacimiento completa aquí; recopilaremos cualquier detalle sensible de forma segura por teléfono.",
      labels: {
        phone: "Teléfono",
        insuranceCarrier: "Compañía de seguro",
        memberId: "Número de miembro (opcional)",
        serviceNeeded: "¿Qué necesita?",
        selectOne: "Seleccione uno",
      },
      thanks: "Gracias. Nuestro equipo revisará su información y se comunicará para confirmar la cobertura.",
    },
    footer: {
      blurb: "Una farmacia familiar en el centro de Los Ángeles, que cubre farmacia de recetas, suministros médicos, DME/CRT, y nuestra propia entrega, todo bajo un mismo techo.",
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
};

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
