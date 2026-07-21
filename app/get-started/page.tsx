"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { useLanguage } from "@/lib/i18n";
import GetStartedForm from "./get-started-form";

export default function GetStartedPage() {
  const { t } = useLanguage();

  return (
    <div className="contact-page">
      <SiteHeader />
      <main>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>
          {t.getStarted.heading}
        </h1>
        <p className="lede" style={{ color: "var(--ink-soft)" }}>
          {t.getStarted.intro}
        </p>
        <GetStartedForm />
      </main>
      <SiteFooter />
    </div>
  );
}
