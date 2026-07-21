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
  return (
    <footer className="site-footer">
      <div className="inner">
        <div className="partner-row" aria-label="Technology and industry partners">
          {PARTNERS.map((p) => (
            <span key={p.name} className="partner-tag">
              {p.name}
              {p.tag && <em> {p.tag}</em>}
            </span>
          ))}
        </div>

        <div className="footer-bottom">
          <span>California Medical Pharmacy. All rights reserved.</span>
          <span className="footer-links">
            <a href="/terms">Terms &amp; Conditions</a>
            <a href="/privacy">Privacy Policy</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
