"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { useLanguage } from "@/lib/i18n";
import ContactForm from "./contact-form";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="contact-page">
      <SiteHeader />
      <main>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>
          {t.contact.heading}
        </h1>
        <p className="lede" style={{ color: "var(--ink-soft)" }}>
          {t.contact.intro}
        </p>
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
}
