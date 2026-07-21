"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { useLanguage } from "@/lib/i18n";

const DIVISIONS = [
  { index: "01", id: "pharmacy", name: "Pharmacy" },
  { index: "02", id: "medical-supply", name: "Medical Supply" },
  { index: "03", id: "dme-crt", name: "DME / CRT" },
  { index: "04", id: "warehouse", name: "Warehouse & Delivery" },
];

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || null;

function StaffList({
  people,
}: {
  people: { name: string; ext: string; note?: string }[];
}) {
  return (
    <dl className="staff-list">
      {people.map((p) => (
        <div className="staff-row" key={p.name + p.ext}>
          <dt className="staff-name">
            {p.name}
            {p.note ? <span className="staff-note"> {p.note}</span> : null}
          </dt>
          <dd className="staff-ext">ext. {p.ext}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <SiteHeader />

      <section className="hero">
        <div className="inner">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.title}</h1>
          <p className="lede">{t.hero.lede}</p>

          <div className="directory">
            {DIVISIONS.map((d) => (
              <a key={d.id} href={`#${d.id}`} className="directory-row">
                <span className="directory-index">{d.index}</span>
                <span className="directory-name">{d.name}</span>
                <span className="directory-arrow">view &darr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="division" id="pharmacy">
        <div className="inner">
          <div className="division-head">
            <span className="division-index">01</span>
            <h2>Pharmacy</h2>
          </div>
          <div className="division-body">
            <span />
            <div className="division-copy">
              <p>
                Our pharmacy fills new prescriptions and refills, handles
                transfers from other pharmacies, and offers immunizations and
                one-on-one medication consultations. Our pharmacists are
                available to answer questions about interactions, dosing, and
                your treatment plan.
              </p>
              <dl className="division-facts">
                <div>
                  <dt>Address</dt>
                  <dd>2201 W Temple St, Los Angeles, CA 90026</dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>(213) 413-2343</dd>
                </div>
                <div>
                  <dt>Fax</dt>
                  <dd>(213) 484-9455</dd>
                </div>
                <div>
                  <dt>Formula Dept. Fax</dt>
                  <dd>(213) 413-1354</dd>
                </div>
              </dl>

              <h3 className="staff-heading">Pharmacy staff</h3>
              <StaffList
                people={[
                  { name: "Tom", ext: "230" },
                  { name: "Alan", ext: "227" },
                  { name: "Ana", ext: "221" },
                  { name: "Elie", ext: "231" },
                  { name: "Daria", ext: "231" },
                ]}
              />

              <h3 className="staff-heading">Formula</h3>
              <StaffList people={[{ name: "Araceli", ext: "236" }]} />
            </div>
          </div>
        </div>
      </section>

      <section className="division" id="medical-supply">
        <div className="inner">
          <div className="division-head">
            <span className="division-index">02</span>
            <h2>Medical Supply</h2>
          </div>
          <div className="division-body">
            <span />
            <div className="division-copy">
              <p>
                Our medical supply division stocks everyday health and
                mobility essentials, from wound care and diabetic supplies to
                braces and daily living aids, for walk-in purchase or order.
              </p>
              <dl className="division-facts">
                <div>
                  <dt>Phone</dt>
                  <dd>(213) 413-2343</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd className="tbd">To be added</dd>
                </div>
                <div>
                  <dt>Fax</dt>
                  <dd>(213) 413-2341</dd>
                </div>
              </dl>

              <h3 className="staff-heading">Medical Supply staff</h3>
              <StaffList
                people={[
                  { name: "Kristal", ext: "237" },
                  { name: "Josue", ext: "280" },
                  { name: "April", ext: "238" },
                  { name: "Evelyn", ext: "251" },
                  { name: "Julie", ext: "272" },
                  { name: "Valerie", ext: "248" },
                  { name: "Gabbie", ext: "239" },
                  { name: "Liza", ext: "249" },
                  { name: "Rebecca", ext: "234" },
                ]}
              />

              <h3 className="staff-heading">Billing</h3>
              <StaffList
                people={[
                  {
                    name: "Martha",
                    ext: "274",
                    note: "(Medical Supply billing)",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="division" id="dme-crt">
        <div className="inner">
          <div className="division-head">
            <span className="division-index">03</span>
            <h2>DME / CRT</h2>
          </div>
          <div className="division-body">
            <span />
            <div className="division-copy">
              <p>
                Our Durable Medical Equipment and Complex Rehab Technology
                division fits and supplies wheelchairs, mobility equipment,
                and other DME. Complex Rehab Technology needs an in-person or
                virtual evaluation before equipment is fitted; use the link
                below to schedule one.
              </p>
              <dl className="division-facts">
                <div>
                  <dt>Phone</dt>
                  <dd>(213) 413-2343</dd>
                </div>
                <div>
                  <dt>Fax</dt>
                  <dd className="tbd">To be added</dd>
                </div>
              </dl>

              <h3 className="staff-heading">DME / CRT staff</h3>
              <StaffList
                people={[
                  { name: "Nelson", ext: "240" },
                  { name: "David", ext: "235" },
                  { name: "Monica", ext: "271" },
                ]}
              />

              <h3 className="staff-heading">Billing</h3>
              <StaffList
                people={[
                  { name: "Mariana", ext: "232", note: "(DME billing)" },
                ]}
              />

              <div className="schedule-box">
                <h3>{t.schedule.heading}</h3>
                <p>
                  {CALENDLY_URL
                    ? t.schedule.withLink
                    : t.schedule.withoutLink}
                </p>
                {CALENDLY_URL ? (
                  <a
                    className="btn"
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.schedule.online}
                  </a>
                ) : null}
                <a className="btn secondary" href="tel:+12134132343">
                  {t.schedule.call}
                </a>
                <p style={{ marginTop: "0.9rem", fontSize: "0.85rem" }}>
                  Referring provider?{" "}
                  <a href="/referral">Submit a referral</a> instead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="division" id="warehouse">
        <div className="inner">
          <div className="division-head">
            <span className="division-index">04</span>
            <h2>Warehouse &amp; Delivery</h2>
          </div>
          <div className="division-body">
            <span />
            <div className="division-copy">
              <p>
                Our warehouse handles fulfillment and delivery for CRT and
                DME orders, coordinating with patients and referring
                providers to get equipment where it needs to go on schedule.
              </p>
              <dl className="division-facts">
                <div>
                  <dt>Phone</dt>
                  <dd>(213) 413-2343</dd>
                </div>
                <div>
                  <dt>Fax</dt>
                  <dd className="tbd">To be added</dd>
                </div>
              </dl>

              <h3 className="staff-heading">Warehouse staff</h3>
              <StaffList
                people={[
                  { name: "Carlos", ext: "252" },
                  { name: "Jorge", ext: "233" },
                  { name: "Josue", ext: "280" },
                  { name: "Mauricio", ext: "247" },
                ]}
              />

              <p className="tbd" style={{ marginTop: "1.25rem" }}>
                Delivery service area: to be confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="inner">
          <h2>Main line &amp; additional contacts</h2>
          <p className="lede">
            Call the main line and ask for a department, or dial an
            extension directly if you know it.
          </p>

          <div className="main-line">
            <dt>Main line</dt>
            <span className="detail">(213) 413-2343</span>
          </div>

          <p className="zones-note">
            Dial-by-department codes on file: Pharmacy 1, Office 2, Medical
            Supply 3, Warehouse 4. Let me know if these are meant to be used
            differently (e.g. in a phone menu) and I will adjust how they are
            presented.
          </p>

          <div className="team-grid" style={{ marginTop: "1.75rem" }}>
            <div className="team-card">
              <div className="name">Amanda &amp; David</div>
              <div className="role tbd">Department not yet specified</div>
              <span className="detail tbd">Phone / ext. TBD</span>
              <span className="detail">Fax (213) 444-7852</span>
              <span className="detail tbd">Email TBD</span>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
