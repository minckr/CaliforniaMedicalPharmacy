"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { useLanguage } from "@/lib/i18n";
import { PhotoPlaceholder } from "@/components/icons";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <SiteHeader />

      <section className="hero">
        <div className="inner">
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h1>{t.about.title}</h1>
          <p className="lede">{t.about.lede}</p>
        </div>
      </section>

      <section className="division">
        <div className="inner">
          <blockquote className="pull-quote">{t.about.body[0]}</blockquote>
          <div className="division-body about-body-grid">
            <div className="division-copy">
              {t.about.body.slice(1).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <PhotoPlaceholder label={t.about.teamPhotoLabel} height={280} />
          </div>
        </div>
      </section>

      <section className="division">
        <div className="inner">
          <div className="division-head">
            <span />
            <h2>{t.about.whatWeCover}</h2>
          </div>
          <div className="division-body">
            <span />
            <div className="division-copy">
              <ul className="about-list">
                {t.about.categories.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="division">
        <div className="inner">
          <div className="division-head">
            <span />
            <h2>{t.about.accreditationHeading}</h2>
          </div>
          <div className="division-body">
            <span />
            <div className="division-copy">
              <p>{t.about.accreditationCopy}</p>
              <dl className="division-facts">
                <div>
                  <dt>{t.about.accreditationLabels.body}</dt>
                  <dd className="tbd">
                    {t.about.tbd} {t.about.accreditationBodyNote}
                  </dd>
                </div>
                <div>
                  <dt>{t.about.accreditationLabels.number}</dt>
                  <dd className="tbd">{t.about.tbd}</dd>
                </div>
                <div>
                  <dt>{t.about.accreditationLabels.license}</dt>
                  <dd className="tbd">{t.about.tbd}</dd>
                </div>
                <div>
                  <dt>{t.about.accreditationLabels.npi}</dt>
                  <dd className="tbd">{t.about.tbd}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="division" style={{ borderBottom: "none" }}>
        <div className="inner">
          <div className="division-body">
            <span />
            <div className="division-copy">
              <p>
                {t.about.closing}{" "}
                <a href="/get-started">{t.nav.getStarted}</a> ·{" "}
                <a href="/referral">{t.nav.referral}</a> ·{" "}
                <a href="/contact">{t.nav.contact}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
