"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { useLanguage } from "@/lib/i18n";

const DIVISION_META = [
  { index: "01", id: "pharmacy", key: "pharmacy" as const },
  { index: "02", id: "medical-supply", key: "medicalSupply" as const },
  { index: "03", id: "dme-crt", key: "dmeCrt" as const },
  { index: "04", id: "warehouse", key: "warehouse" as const },
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
          <span className="eyebrow">{t.home.eyebrow}</span>
          <h1>{t.home.title}</h1>
          <p className="lede">{t.home.lede}</p>

          <div className="directory">
            {DIVISION_META.map((d) => (
              <a key={d.id} href={`#${d.id}`} className="directory-row">
                <span className="directory-index">{d.index}</span>
                <span className="directory-name">
                  {t.home.divisions[d.key].name}
                </span>
                <span className="directory-arrow">{t.home.view} &darr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="division" id="pharmacy">
        <div className="inner">
          <div className="division-head">
            <span className="division-index">01</span>
            <h2>{t.home.divisions.pharmacy.name}</h2>
          </div>
          <div className="division-body">
            <span />
            <div className="division-copy">
              <p>{t.home.divisions.pharmacy.copy}</p>
              <dl className="division-facts">
                <div>
                  <dt>{t.common.address}</dt>
                  <dd>2201 W Temple St, Los Angeles, CA 90026</dd>
                </div>
                <div>
                  <dt>{t.common.phone}</dt>
                  <dd>(213) 413-2343</dd>
                </div>
                <div>
                  <dt>{t.common.fax}</dt>
                  <dd>(213) 484-9455</dd>
                </div>
                <div>
                  <dt>{t.home.factLabels.formulaFax}</dt>
                  <dd>(213) 413-1354</dd>
                </div>
              </dl>

              <h3 className="staff-heading">{t.home.staffHeadings.pharmacyStaff}</h3>
              <StaffList
                people={[
                  { name: "Tom", ext: "230" },
                  { name: "Alan", ext: "227" },
                  { name: "Ana", ext: "221" },
                  { name: "Elie", ext: "231" },
                  { name: "Daria", ext: "231" },
                ]}
              />

              <h3 className="staff-heading">{t.home.staffHeadings.formula}</h3>
              <StaffList people={[{ name: "Araceli", ext: "236" }]} />
            </div>
          </div>
        </div>
      </section>

      <section className="division" id="medical-supply">
        <div className="inner">
          <div className="division-head">
            <span className="division-index">02</span>
            <h2>{t.home.divisions.medicalSupply.name}</h2>
          </div>
          <div className="division-body">
            <span />
            <div className="division-copy">
              <p>{t.home.divisions.medicalSupply.copy}</p>
              <dl className="division-facts">
                <div>
                  <dt>{t.common.phone}</dt>
                  <dd>(213) 413-2343</dd>
                </div>
                <div>
                  <dt>{t.common.fax}</dt>
                  <dd>(213) 413-2341</dd>
                </div>
              </dl>

              <h3 className="staff-heading">{t.home.staffHeadings.medicalSupplyStaff}</h3>
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

              <h3 className="staff-heading">{t.home.staffHeadings.billingMedicalSupply}</h3>
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
            <h2>{t.home.divisions.dmeCrt.name}</h2>
          </div>
          <div className="division-body">
            <span />
            <div className="division-copy">
              <p>{t.home.divisions.dmeCrt.copy}</p>
              <dl className="division-facts">
                <div>
                  <dt>{t.common.phone}</dt>
                  <dd>(213) 413-2343</dd>
                </div>
                <div>
                  <dt>{t.common.fax}</dt>
                  <dd>(213) 444-7852</dd>
                </div>
              </dl>

              <h3 className="staff-heading">{t.home.staffHeadings.dmeCrtStaff}</h3>
              <StaffList
                people={[
                  { name: "Nelson", ext: "240" },
                  { name: "David", ext: "235" },
                  { name: "Monica", ext: "271" },
                ]}
              />

              <h3 className="staff-heading">{t.home.staffHeadings.billingDme}</h3>
              <StaffList
                people={[
                  { name: "Mariana", ext: "232", note: "(DME billing)" },
                ]}
              />

              <div className="schedule-box">
                <h3>{t.home.schedule.heading}</h3>
                <p>
                  {CALENDLY_URL
                    ? t.home.schedule.withLink
                    : t.home.schedule.withoutLink}
                </p>
                {CALENDLY_URL ? (
                  <a
                    className="btn"
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.home.schedule.online}
                  </a>
                ) : null}
                <a className="btn secondary" href="tel:+12134132343">
                  {t.home.schedule.call}
                </a>
                <p style={{ marginTop: "0.9rem", fontSize: "0.85rem" }}>
                  {t.home.schedule.referralPrompt}{" "}
                  <a href="/referral">{t.home.schedule.referralLink}</a>
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
            <h2>{t.home.divisions.warehouse.name}</h2>
          </div>
          <div className="division-body">
            <span />
            <div className="division-copy">
              <p>{t.home.divisions.warehouse.copy}</p>
              <dl className="division-facts">
                <div>
                  <dt>{t.common.phone}</dt>
                  <dd>(213) 413-2343</dd>
                </div>
              </dl>

              <h3 className="staff-heading">{t.home.staffHeadings.warehouseStaff}</h3>
              <StaffList
                people={[
                  { name: "Carlos", ext: "252" },
                  { name: "Jorge", ext: "233" },
                  { name: "Josue", ext: "280" },
                  { name: "Mauricio", ext: "247" },
                ]}
              />

              <p className="tbd" style={{ marginTop: "1.25rem" }}>
                {t.home.serviceArea}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="inner">
          <h2>{t.home.dialByDept.heading}</h2>
          <p className="lede">{t.home.dialByDept.lede}</p>

          <div className="main-line">
            <dt>{t.common.phone}</dt>
            <span className="detail">(213) 413-2343</span>
          </div>

          <div className="staff-list" style={{ marginTop: "1.5rem" }}>
            <div className="staff-row">
              <dt className="staff-name">{t.home.dialByDept.pharmacy}</dt>
            </div>
            <div className="staff-row">
              <dt className="staff-name">{t.home.dialByDept.office}</dt>
            </div>
            <div className="staff-row">
              <dt className="staff-name">{t.home.dialByDept.medicalSupply}</dt>
            </div>
            <div className="staff-row">
              <dt className="staff-name">{t.home.dialByDept.warehouse}</dt>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
