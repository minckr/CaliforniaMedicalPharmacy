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

        <div className="map-embed">
          <iframe
            title="California Medical Pharmacy location"
            src="https://www.google.com/maps?q=2201+W+Temple+St,+Los+Angeles,+CA+90026&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
