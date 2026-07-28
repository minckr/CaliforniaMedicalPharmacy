"use client";

import { useLanguage } from "@/lib/i18n";

const PARTNERS = [
  { name: "VGM", tag: "VGM Partner" },
  { name: "Medsender" },
  { name: "Darby" },
  { name: "Niko Health" },
  { name: "Waystar" },
  { name: "Availity" },
  { name: "Nymbl" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="inner">
        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-heading">California Medical Pharmacy</span>
            <p className="footer-blurb">{t.footer.blurb}</p>
          </div>

          <div className="footer-col">
            <span className="footer-heading">{t.footer.contact}</span>
            <ul className="footer-list">
              <li>2201 W Temple St, Los Angeles, CA 90026</li>
              <li>
                <a href="tel:+12134132343">(213) 413-2343</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-heading">{t.footer.links}</span>
            <ul className="footer-list">
              <li>
                <a href="/">{t.footer.home}</a>
              </li>
              <li>
                <a href="/about">{t.footer.about}</a>
              </li>
              <li>
                <a href="/contact">{t.footer.contactLink}</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="partner-row"
          aria-label="Technology and industry partners"
        >
          {PARTNERS.map((p) => (
            <span key={p.name} className="partner-tag">
              {p.name}
              {p.tag && <em> {p.tag}</em>}
            </span>
          ))}
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {year} California Medical Pharmacy. {t.footer.rights}
          </span>
          <span className="footer-links">
            <a href="/terms">{t.footer.terms}</a>
            <a href="/privacy">{t.footer.privacy}</a>
            <a href="/hipaa-notice">{t.footer.hipaa}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
