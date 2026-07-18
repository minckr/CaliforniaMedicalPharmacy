export default function HomePage() {
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
        <h1>Your neighborhood pharmacy.</h1>
        <p className="lede">
          Prescriptions filled and refilled, honest advice, and a team that
          knows your name. Stop by or reach out below.
        </p>

        <h2 id="services">Services</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Prescription filling</h3>
            <p>New prescriptions and refills, in person or by request.</p>
          </div>
          <div className="card">
            <h3>Immunizations</h3>
            <p>Flu shots and common vaccinations, no appointment needed.</p>
          </div>
          <div className="card">
            <h3>Medication consultations</h3>
            <p>One-on-one time with a pharmacist to review your medications.</p>
          </div>
          <div className="card">
            <h3>Over-the-counter</h3>
            <p>Everyday health essentials, stocked and ready.</p>
          </div>
        </div>

        <h2 id="hours">Hours &amp; location</h2>
        <table className="hours-table">
          <tbody>
            <tr>
              <td>Monday to Friday</td>
              <td>9:00 AM to 7:00 PM</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>9:00 AM to 5:00 PM</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
        <p className="lede">
          Address and phone number go here once confirmed. Placeholder for
          Day 0.
        </p>
      </main>

      <footer className="site-footer">
        California Medical Pharmacy. All rights reserved.
      </footer>
    </>
  );
}
