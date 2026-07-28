"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { useLanguage } from "@/lib/i18n";
import ReferralForm from "./referral-form";

export default function ReferralPage() {
  const { t } = useLanguage();

  return (
    <div className="contact-page">
      <SiteHeader />
      <main>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>
          {t.referral.heading}
        </h1>
        <p className="lede" style={{ color: "var(--ink-soft)" }}>
          {t.referral.intro}
        </p>
        <ReferralForm />
      </main>
      <SiteFooter />
    </div>
  );
}
