import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <SiteHeader />
      <main>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>
          Contact us
        </h1>
        <p className="lede" style={{ color: "var(--ink-soft)" }}>
          Call us at (213) 413-2343, visit us at 2201 W Temple St, Los
          Angeles, CA 90026, or send a message below. This form does not
          store any medical information; it sends an email to the pharmacy.
        </p>
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
}
