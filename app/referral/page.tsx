import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ReferralForm from "./referral-form";

export default function ReferralPage() {
  return (
    <div className="contact-page">
      <SiteHeader />
      <main>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>
          Provider Referral
        </h1>
        <p className="lede" style={{ color: "var(--ink-soft)" }}>
          For physicians, therapists, and other providers referring a
          patient for DME, CRT, medical supply, or pharmacy services. Fill
          out what you can below and our team will follow up. Please do not
          include full dates of birth, diagnoses, or other sensitive health
          details in this form; our team will contact you directly to
          collect anything further needed.
        </p>
        <ReferralForm />
      </main>
      <SiteFooter />
    </div>
  );
}
