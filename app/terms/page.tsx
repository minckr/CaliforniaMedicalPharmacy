import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function TermsPage() {
  return (
    <div className="legal">
      <SiteHeader />
      <main>
        <div className="draft-notice">
          This page is a draft prepared for SMS/TCR carrier compliance. It
          has not yet been reviewed by an attorney. Do not treat this as
          final until it has been reviewed.
        </div>

        <h1>Terms and Conditions</h1>
        <p>
          <strong>California Medical Pharmacy</strong>
          <br />
          Last updated: [DATE]
        </p>

        <h2>1. Who this applies to</h2>
        <p>
          These Terms and Conditions govern your use of the California
          Medical Pharmacy website and your participation in our SMS (text
          message) and email outreach programs, including our automated
          resupply notification program.
        </p>

        <h2>2. SMS Resupply Program</h2>
        <p>
          California Medical Pharmacy offers an SMS and email-based resupply
          outreach program for eligible patients with recurring durable
          medical equipment (DME) or supply needs.
        </p>
        <p>
          <strong>What the program does:</strong> when you become eligible
          for a resupply, we may send you a text message and/or email with a
          secure link where you can review your order, confirm items, and
          respond to any questions related to your resupply.
        </p>
        <p>
          <strong>Message frequency</strong> varies based on your resupply
          schedule and eligibility.
        </p>
        <p>
          <strong>Message and data rates may apply.</strong> Standard
          messaging rates from your wireless carrier apply to any texts we
          send or you send in reply.
        </p>
        <p>
          <strong>Consent:</strong> by providing your mobile number to
          California Medical Pharmacy, or by opting in through a form, phone
          call, or in-person visit, you consent to receive automated text
          messages related to your prescriptions, equipment resupply, and
          related account notifications. Consent to receive texts is not a
          condition of purchasing any goods or services.
        </p>
        <p>
          <strong>Opt-out:</strong> reply <strong>STOP</strong> to any
          message at any time to opt out. You will receive one final message
          confirming your opt-out.
        </p>
        <p>
          <strong>Help:</strong> reply <strong>HELP</strong> to any message
          for assistance, or contact us using the information below.
        </p>

        <h2>3. Use of the website</h2>
        <p>
          The California Medical Pharmacy website is provided for
          informational purposes and to facilitate communication between the
          pharmacy and its patients. Content on this site does not
          constitute medical advice. Always consult your pharmacist or
          physician regarding your medications and treatment.
        </p>

        <h2>4. Privacy</h2>
        <p>
          Our collection and use of your personal information, including
          information collected through the SMS resupply program, is
          described in our <a href="/privacy">Privacy Policy</a>. No mobile
          opt-in information is shared with third parties or affiliates for
          marketing purposes.
        </p>

        <h2>5. Contact us</h2>
        <p className="tbd">
          Department contact information to be added once confirmed. In the
          meantime, call (213) 413-2343.
        </p>

        <h2>6. Changes to these terms</h2>
        <p>
          We may update these Terms and Conditions from time to time. The
          &ldquo;Last updated&rdquo; date at the top of this page reflects
          the most recent revision.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
