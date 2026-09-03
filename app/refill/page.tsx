"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { useLanguage } from "@/lib/i18n";
import RefillForm from "./refill-form";

export default function RefillPage() {
  const { t } = useLanguage();

  return (
    <div className="contact-page">
      <SiteHeader />
      <main>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>
          {t.refill.heading}
        </h1>
        <p className="lede" style={{ color: "var(--ink-soft)" }}>
          {t.refill.intro}
        </p>
        <RefillForm />
      </main>
      <SiteFooter />
    </div>
  );
}
