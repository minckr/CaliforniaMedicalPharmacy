import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function HipaaNoticePage() {
  return (
    <div className="legal">
      <SiteHeader />
      <main>
        <div className="draft-notice">
          This page is a draft based on the standard HHS model Notice of
          Privacy Practices structure. It has not been reviewed by an
          attorney or compliance officer, and it is not a substitute for
          your pharmacy's actual, currently-in-force HIPAA Notice of Privacy
          Practices, which should already exist and be posted in your
          physical location. Do not treat this as final, and do not remove
          this notice, until it has been reviewed and confirmed accurate for
          your practice.
        </div>

        <h1>Notice of Privacy Practices</h1>
        <p>
          <strong>California Medical Pharmacy</strong>
          <br />
          Effective date: [DATE]
        </p>

        <p>
          <strong>
            THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE
            USED AND DISCLOSED, AND HOW YOU CAN GET ACCESS TO THIS
            INFORMATION. PLEASE REVIEW IT CAREFULLY.
          </strong>
        </p>

        <h2>Our commitment to your privacy</h2>
        <p>
          California Medical Pharmacy is required by law to maintain the
          privacy of your protected health information (PHI), to provide
          you with this notice describing our legal duties and privacy
          practices with respect to your PHI, and to notify you following a
          breach of unsecured PHI.
        </p>

        <h2>How we may use and disclose your health information</h2>
        <p>
          <strong>Treatment.</strong> We may use and disclose your PHI to
          provide, coordinate, or manage your pharmacy, medical supply, and
          DME/CRT services, including resupply outreach and coordination
          with your referring providers.
        </p>
        <p>
          <strong>Payment.</strong> We may use and disclose your PHI to bill
          and collect payment from you, Medicare, Medi-Cal, or your private
          insurance carrier, including for prior authorization and claims
          processing.
        </p>
        <p>
          <strong>Health care operations.</strong> We may use and disclose
          your PHI for activities such as quality assessment, staff
          training, and business management.
        </p>
        <p>
          <strong>As required by law.</strong> We will disclose your PHI
          when required to do so by federal, state, or local law.
        </p>

        <h2>Your rights regarding your health information</h2>
        <ul>
          <li>The right to inspect and obtain a copy of your PHI.</li>
          <li>The right to request that we amend your PHI.</li>
          <li>
            The right to request an accounting of certain disclosures of
            your PHI.
          </li>
          <li>
            The right to request restrictions on certain uses and
            disclosures of your PHI.
          </li>
          <li>
            The right to request confidential communications by alternative
            means or at alternative locations.
          </li>
          <li>The right to a paper copy of this notice upon request.</li>
        </ul>

        <h2>Complaints</h2>
        <p>
          If you believe your privacy rights have been violated, you may
          file a complaint with California Medical Pharmacy using the
          contact information below, or with the U.S. Department of Health
          and Human Services Office for Civil Rights. We will not retaliate
          against you for filing a complaint.
        </p>

        <h2>Changes to this notice</h2>
        <p>
          We reserve the right to change this notice and to make the
          revised notice effective for PHI we already have as well as any
          information we receive in the future.
        </p>

        <h2>Contact us</h2>
        <p className="tbd">
          Privacy officer name and direct contact to be added. In the
          meantime, call (213) 413-2343.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
