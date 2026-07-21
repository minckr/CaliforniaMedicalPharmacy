import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const PRODUCT_CATEGORIES = [
  "Formula",
  "Incontinence supplies",
  "Urology supplies",
  "Tracheostomy supplies",
  "Ostomy supplies",
  "Wound supplies",
  "Feeding supplies",
  "DME / CRT: wheelchairs, beds, car seats, walkers, strollers, gait trainers, and more",
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <SiteHeader />

      <section className="hero">
        <div className="inner">
          <span className="eyebrow">About Us</span>
          <h1>A family pharmacy, built for the long run.</h1>
          <p className="lede">
            California Medical Pharmacy is a family owned and operated
            business in downtown Los Angeles, built around four divisions
            working together: Pharmacy, Medical Supply, DME/CRT, and our own
            Warehouse and Delivery operation.
          </p>
        </div>
      </section>

      <section className="division">
        <div className="inner">
          <div className="division-body">
            <span />
            <div className="division-copy">
              <p>
                We&rsquo;re built to be a full, end to end service. Instead
                of sending patients elsewhere for pieces of their care, we
                fill prescriptions, supply equipment, run our own resupply
                program, and deliver, all from one team that already knows
                your file.
              </p>
              <p>
                Our resupply program reaches out automatically when a
                patient becomes eligible for their next round of supplies,
                so refills don&rsquo;t depend on remembering to call. For
                DME and Complex Rehab Technology, our team coordinates
                clinical evaluations directly, working with each
                patient&rsquo;s provider to get the right equipment
                approved and fitted.
              </p>
              <p>
                We work with Medicare, Medi-Cal, and private insurance
                payors, and our team handles the insurance and prior
                authorization process directly with patients and referring
                providers.
              </p>
              <p>
                Downtown Los Angeles is a diverse community, and a large
                share of the patients we serve speak Spanish as a first
                language. Our team includes Spanish-speaking staff across
                departments, so patients can get their questions answered
                in the language they&rsquo;re most comfortable with.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="division">
        <div className="inner">
          <div className="division-head">
            <span />
            <h2>What we cover</h2>
          </div>
          <div className="division-body">
            <span />
            <div className="division-copy">
              <ul className="about-list">
                {PRODUCT_CATEGORIES.map((item) => (
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
            <h2>Accreditation &amp; Licensing</h2>
          </div>
          <div className="division-body">
            <span />
            <div className="division-copy">
              <p>
                California Medical Pharmacy holds the accreditation and
                licensing required to bill Medicare, Medi-Cal, and private
                insurance for pharmacy and DME/CRT services.
              </p>
              <dl className="division-facts">
                <div>
                  <dt>Accrediting body</dt>
                  <dd className="tbd">
                    To be added (ACHC, NABP, or CHAP, confirm which)
                  </dd>
                </div>
                <div>
                  <dt>Accreditation #</dt>
                  <dd className="tbd">To be added</dd>
                </div>
                <div>
                  <dt>Pharmacy license #</dt>
                  <dd className="tbd">To be added</dd>
                </div>
                <div>
                  <dt>NPI</dt>
                  <dd className="tbd">To be added</dd>
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
                Have a question about whether we cover something, or want to
                get started? <a href="/get-started">Start here</a>, or if
                you're a referring provider, <a href="/referral">submit a
                referral</a>. You can also <a href="/contact">reach out</a>{" "}
                directly, or see our{" "}
                <a href="/#dme-crt">DME/CRT section</a> to schedule an
                evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
