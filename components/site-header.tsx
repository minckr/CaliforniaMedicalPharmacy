"use client";

import Logo from "./logo";
import { useLanguage } from "@/lib/i18n";

export default function SiteHeader() {
  const { t, toggle, lang } = useLanguage();

  return (
    <header className="site-header">
      <div className="inner">
        <Logo />
        <nav>
          <a href="/#pharmacy">{t.nav.pharmacy}</a>
          <a href="/#medical-supply">{t.nav.medicalSupply}</a>
          <a href="/#dme-crt">{t.nav.dmeCrt}</a>
          <a href="/#warehouse">{t.nav.warehouse}</a>
          <a href="/about">{t.nav.about}</a>
          <a href="/referral">{t.nav.referral}</a>
          <a href="/get-started">{t.nav.getStarted}</a>
          <a href="/contact">{t.nav.contact}</a>
          <button
            type="button"
            className="lang-toggle"
            onClick={toggle}
            aria-label="Switch language"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </nav>
      </div>
    </header>
  );
}
