"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { useLanguage } from "@/lib/i18n";

export default function ResourcesPage() {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <SiteHeader />

      <section className="hero">
        <div className="inner">
          <h1>{t.resources.heading}</h1>
          <p className="lede">{t.resources.intro}</p>
        </div>
      </section>

      <section className="division" style={{ borderBottom: "none" }}>
        <div className="inner">
          <div className="division-body">
            <span />
            <div className="division-copy" style={{ maxWidth: "48em" }}>
              {t.resources.items.map((item) => (
                <div key={item.question} style={{ marginBottom: "1.75rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.15rem",
                      margin: "0 0 0.5rem",
                      color: "var(--ink)",
                    }}
                  >
                    {item.question}
                  </h3>
                  <p style={{ margin: 0 }}>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
