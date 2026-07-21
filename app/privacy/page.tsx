import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function PrivacyPage() {
  return (
    <div className="legal">
      <SiteHeader />
      <main>
        <div className="draft-notice">
          This page is a draft prepared for SMS/TCR carrier compliance. It
          has not been reviewed by an attorney and does not replace your
          HIPAA Notice of Privacy Practices. Do not treat this as final
          until it has been reviewed.
        </div>

        <h1>Privacy Policy</h1>
        <p>
          <strong>California Medical Pharmacy</strong>
          <br />
          Last updated: [DATE]
        </p>

        <h2>1. Information we collect</h2>
        <p>
          We may collect the following information when you interact with
          our website, visit our pharmacy, or participate in our SMS or
          email resupply program: contact information (name, phone number,
          email address, mailing address); prescription and equipment order
          information necessary to provide resupply notifications; and
          communication preferences and opt-in/opt-out status for SMS and
          email programs.
        </p>

        <h2>2. How we use your information</h2>
        <p>
          To send resupply notifications and related account communications
          by SMS and/or email; to respond to inquiries submitted through our
          website contact form; to schedule DME/CRT evaluations you request;
          and to operate and improve our pharmacy, medical supply, and
          DME/CRT services.
        </p>

        <h2>3. SMS program data</h2>
        <p>
          Text messaging originator opt-in data and consent will not be
          shared with any third parties or affiliates for marketing
          purposes. Information collected through the SMS resupply program
          is used solely to operate that program and to communicate with you
          about your resupply.
        </p>

        <h2>4. How we share information</h2>
        <p>
          We do not sell your personal information. We share information
          only with service providers who help us operate the resupply and
          scheduling programs, solely to provide that functionality; when
          required by law; or with your explicit consent.
        </p>

        <h2>5. Protected health information</h2>
        <p>
          Any information that constitutes Protected Health Information
          (PHI) under HIPAA is handled according to our HIPAA Notice of
          Privacy Practices, available at the pharmacy or upon request,
          which governs in the event of any conflict with this policy.
        </p>

        <h2>6. Your choices</h2>
        <p>
          Reply <strong>STOP</strong> to any SMS message to opt out at any
          time. Reply <strong>HELP</strong> for assistance. Contact us using
          the information below to update your communication preferences or
          request that we delete information we hold about you, subject to
          our recordkeeping obligations as a pharmacy.
        </p>

        <h2>7. Contact us</h2>
        <p className="tbd">
          Department contact information to be added once confirmed. In the
          meantime, call (213) 413-2343.
        </p>

        <h2>8. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The
          &ldquo;Last updated&rdquo; date at the top reflects the most
          recent revision.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
