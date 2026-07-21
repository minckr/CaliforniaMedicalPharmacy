import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import GetStartedForm from "./get-started-form";

export default function GetStartedPage() {
  return (
    <div className="contact-page">
      <SiteHeader />
      <main>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>
          Get Started
        </h1>
        <p className="lede" style={{ color: "var(--ink-soft)" }}>
          New to California Medical Pharmacy? Tell us a bit about what you
          need and your insurance, and our team will reach out to confirm
          coverage and next steps. Please do not include your full Social
          Security number or full date of birth here; we'll collect any
          sensitive details securely by phone.
        </p>
        <GetStartedForm />
      </main>
      <SiteFooter />
    </div>
  );
}
