import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <>
      <header className="site-header">
        <div className="inner">
          <span className="brand">California Medical Pharmacy</span>
          <nav>
            <a href="/#services">Services</a>
            <a href="/#hours">Hours</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <h1>Contact us</h1>
        <p className="lede">
          Have a question, or need a refill? Send us a message and we will
          get back to you. This form does not store any medical
          information; it sends an email to the pharmacy.
        </p>
        <ContactForm />
      </main>

      <footer className="site-footer">
        California Medical Pharmacy. All rights reserved.
      </footer>
    </>
  );
}
