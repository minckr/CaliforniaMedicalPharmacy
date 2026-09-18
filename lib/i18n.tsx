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
  refill: {
    heading: string;
    intro: string;
    labels: {
      phone: string;
      refillType: string;
      selectOne: string;
      prescription: string;
      dmeSupply: string;
      notSure: string;
      details: string;
      detailsPlaceholder: string;
    };
    thanks: string;
  };
  resources: {
    heading: string;
    intro: string;
    items: { question: string; answer: string }[];
  };
  footer: {
    blurb: string;
    contact: string;
    links: string;
    home: string;
    about: string;
    contactLink: string;
    refill: string;
    resources: string;
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
          copy: "New prescriptions, refills, transfers from another pharmacy, immunizations, and one-on-one consultations, all handled at this counter. Our pharmacists are available to answer questions about interactions, dosing, and your treatment plan.",
        },
        medicalSupply: {
          name: "Medical Supply",
          copy: "From wound care and diabetic supplies to braces and daily living aids, our medical supply division stocks the everyday essentials patients need, available for walk-in purchase or order.",
        },
        dmeCrt: {
          name: "DME / CRT",
          copy: "Durable Medical Equipment and Complex Rehab Technology: wheelchair fitting, mobility equipment, and other DME. Complex Rehab Technology requires an in-person or virtual evaluation before equipment is fitted; use the link below to schedule one.",
        },
        warehouse: {
          name: "Warehouse & Delivery",
          copy: "Fulfillment and delivery for every CRT and DME order runs through our own warehouse, coordinated directly with patients and referring providers so equipment arrives on schedule.",
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
        "Most people managing ongoing medical equipment and supply needs end up running their own small logistics operation, one company for prescriptions, another for equipment, a third for the paperwork in between. California Medical Pharmacy exists to take that job off your plate. A patient who needs a wheelchair fitted and a prescription filled works with the same team, the same phone number, and the same file, for both.",
        "We're privately owned and run day to day by the people who actually work here, not a corporate office in another state. That has a practical effect: when a delivery runs late or a claim needs a second look, the person who can fix it is usually in the building, not three tiers of customer service away.",
        "Downtown Los Angeles is home to a large Spanish-speaking community, and we built our team around that from the start. That means Spanish-speaking staff in pharmacy, medical supply, DME/CRT, and our warehouse, not a single bilingual line everyone gets routed through.",
        "Medicare, Medi-Cal, and private insurance each have their own rules, especially around prior authorization for equipment. We manage that relationship directly with your insurer and your physician's office, so you're not the one relaying paperwork between two organizations that don't talk to each other.",
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
    refill: {
      heading: "Request a Refill",
      intro: "Need a prescription refilled, or a supply item reordered outside your normal resupply cycle? If you're already enrolled in our automated resupply program, you'll typically get a text or email when it's time, this form is for anything outside that, or for a first-time refill request. Please do not include your diagnosis or full date of birth here; our team will follow up directly for anything further needed.",
      labels: {
        phone: "Phone",
        refillType: "What needs to be refilled?",
        selectOne: "Select one",
        prescription: "Prescription medication",
        dmeSupply: "DME or medical supply item",
        notSure: "Not sure",
        details: "Prescription number or item details (optional)",
        detailsPlaceholder: "e.g. Rx #123456, or \"CPAP filters\"",
      },
      thanks: "Thank you. Your refill request has been sent to our team and someone will follow up shortly.",
    },
    resources: {
      heading: "Patient Resources",
      intro: "Answers to what we're asked most often. Can't find what you need? Call us at (213) 413-2343.",
      items: [
        {
          question: "What should I bring to a CRT evaluation?",
          answer: "Bring a photo ID, your insurance card, and any physician orders or documentation you've already received. If you use a current mobility device, bringing it along helps our team assess fit and function.",
        },
        {
          question: "How does prior authorization work?",
          answer: "For many DME and CRT items, your insurance requires approval before equipment is dispensed. Once your evaluation and physician documentation are complete, our team submits the authorization request and follows up with you once we hear back. Timing varies by insurance carrier.",
        },
        {
          question: "How does the resupply program work?",
          answer: "If you have recurring supply needs, we'll text and/or email you when you're eligible for a resupply, with a secure link to review and confirm your order. Message frequency depends on your specific supply schedule. See our Terms and Conditions for full program details.",
        },
        {
          question: "What insurance do you accept?",
          answer: "We accept Medicare, Medi-Cal, and most private insurance carriers, and manage prior authorization on your behalf so you're not stuck relaying paperwork between your insurer and your physician.",
        },
        {
          question: "How do I request a refill?",
          answer: "Use our Request a Refill form for prescriptions or supply items outside your normal resupply cycle, or call us directly.",
        },
        {
          question: "I'm a provider, how do I refer a patient?",
          answer: "Use our Provider Referral form, or fax/call the relevant department directly.",
        },
      ],
    },
    footer: {
      blurb: "A family owned and operated pharmacy in downtown Los Angeles, covering prescription pharmacy, medical supply, DME/CRT, and our own warehouse and delivery, end to end, under one roof.",
      contact: "Contact",
      links: "Useful Links",
      home: "Home",
      about: "About Us",
      contactLink: "Contact",
      refill: "Request a Refill",
      resources: "Patient Resources",
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
          copy: "Recetas nuevas, resurtidos, transferencias de otra farmacia, vacunas, y consultas individuales, todo se atiende en este mostrador. Nuestros farmacéuticos están disponibles para responder preguntas sobre interacciones, dosis, y su plan de tratamiento.",
        },
        medicalSupply: {
          name: "Suministros Médicos",
          copy: "Desde cuidado de heridas y suministros para diabéticos hasta bastones y ayudas para la vida diaria, nuestra división de suministros médicos tiene lo esencial que los pacientes necesitan, disponible para compra en persona o por pedido.",
        },
        dmeCrt: {
          name: "DME / CRT",
          copy: "Equipo Médico Duradero y Tecnología de Rehabilitación Compleja: ajuste de sillas de ruedas, equipo de movilidad, y otro DME. La Tecnología de Rehabilitación Compleja requiere una evaluación en persona o virtual antes de ajustar el equipo; use el enlace abajo para programar una.",
        },
        warehouse: {
          name: "Almacén y Entrega",
          copy: "El cumplimiento y entrega de cada pedido de CRT y DME pasa por nuestro propio almacén, coordinado directamente con pacientes y proveedores para que el equipo llegue a tiempo.",
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
        "La mayoría de las personas que manejan necesidades médicas y de suministros continuas terminan dirigiendo su propia pequeña operación logística: una empresa para recetas, otra para equipo, una tercera para el papeleo entre medio. California Medical Pharmacy existe para quitarle ese trabajo de encima. Un paciente que necesita que le ajusten una silla de ruedas y le surtan una receta trabaja con el mismo equipo, el mismo número de teléfono, y el mismo expediente, para ambas cosas.",
        "Somos de propiedad privada y las personas que trabajan aquí mismo dirigen las operaciones día a día, no una oficina corporativa en otro estado. Eso tiene un efecto práctico: cuando una entrega se retrasa o un reclamo necesita una segunda revisión, la persona que puede resolverlo normalmente está en el edificio, no a tres niveles de servicio al cliente de distancia.",
        "El centro de Los Ángeles es hogar de una gran comunidad de habla hispana, y construimos nuestro equipo pensando en eso desde el principio. Eso significa personal que habla español en farmacia, suministros médicos, DME/CRT, y nuestro almacén, no una sola línea bilingüe a la que todos son transferidos.",
        "Medicare, Medi-Cal, y los seguros privados tienen cada uno sus propias reglas, especialmente en cuanto a la autorización previa para equipo. Manejamos esa relación directamente con su aseguradora y el consultorio de su médico, para que usted no sea quien tenga que transmitir papeleo entre dos organizaciones que no se comunican entre sí.",
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
    refill: {
      heading: "Solicitar un Reabastecimiento",
      intro: "¿Necesita que le reabastezcan una receta, o reordenar un artículo de suministro fuera de su ciclo normal de reabastecimiento? Si ya está inscrito en nuestro programa automático de reabastecimiento, normalmente recibirá un mensaje de texto o correo electrónico cuando sea el momento; este formulario es para cualquier necesidad fuera de eso, o para una primera solicitud. Por favor no incluya su diagnóstico ni su fecha de nacimiento completa aquí; nuestro equipo se comunicará directamente para obtener lo que se necesite.",
      labels: {
        phone: "Teléfono",
        refillType: "¿Qué necesita reabastecer?",
        selectOne: "Seleccione uno",
        prescription: "Medicamento recetado",
        dmeSupply: "Artículo de DME o suministro médico",
        notSure: "No estoy seguro",
        details: "Número de receta o detalles del artículo (opcional)",
        detailsPlaceholder: "ej. Receta #123456, o \"filtros de CPAP\"",
      },
      thanks: "Gracias. Su solicitud de reabastecimiento ha sido enviada a nuestro equipo y alguien dará seguimiento pronto.",
    },
    resources: {
      heading: "Recursos para Pacientes",
      intro: "Respuestas a lo que más nos preguntan. ¿No encuentra lo que necesita? Llámenos al (213) 413-2343.",
      items: [
        {
          question: "¿Qué debo llevar a una evaluación de CRT?",
          answer: "Traiga una identificación con foto, su tarjeta de seguro, y cualquier orden médica o documentación que ya haya recibido. Si usa un dispositivo de movilidad actualmente, traerlo ayuda a nuestro equipo a evaluar el ajuste y la función.",
        },
        {
          question: "¿Cómo funciona la autorización previa?",
          answer: "Para muchos artículos de DME y CRT, su seguro requiere aprobación antes de entregar el equipo. Una vez que su evaluación y documentación médica estén completas, nuestro equipo envía la solicitud de autorización y le da seguimiento cuando recibamos respuesta. El tiempo varía según la compañía de seguro.",
        },
        {
          question: "¿Cómo funciona el programa de reabastecimiento?",
          answer: "Si tiene necesidades recurrentes de suministros, le enviaremos un mensaje de texto y/o correo electrónico cuando sea elegible para un reabastecimiento, con un enlace seguro para revisar y confirmar su pedido. La frecuencia de los mensajes depende de su calendario específico de suministros. Consulte nuestros Términos y Condiciones para más detalles del programa.",
        },
        {
          question: "¿Qué seguros aceptan?",
          answer: "Aceptamos Medicare, Medi-Cal, y la mayoría de los seguros privados, y manejamos la autorización previa en su nombre para que usted no tenga que transmitir papeleo entre su aseguradora y su médico.",
        },
        {
          question: "¿Cómo solicito un reabastecimiento?",
          answer: "Use nuestro formulario de Solicitar un Reabastecimiento para recetas o artículos de suministro fuera de su ciclo normal, o llámenos directamente.",
        },
        {
          question: "Soy proveedor, ¿cómo refiero a un paciente?",
          answer: "Use nuestro formulario de Referencia de Proveedor, o envíe un fax o llame directamente al departamento correspondiente.",
        },
      ],
    },
    footer: {
      blurb: "Una farmacia familiar en el centro de Los Ángeles, que cubre farmacia de recetas, suministros médicos, DME/CRT, y nuestra propia entrega, todo bajo un mismo techo.",
      contact: "Contacto",
      links: "Enlaces Útiles",
      home: "Inicio",
      about: "Sobre Nosotros",
      contactLink: "Contacto",
      refill: "Solicitar un Reabastecimiento",
      resources: "Recursos para Pacientes",
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
