"use client";

import { useState } from "react";

export default function ReferralForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const field = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement)
        ?.value;

    const data = {
      providerName: field("providerName"),
      practiceName: field("practiceName"),
      providerPhone: field("providerPhone"),
      providerEmail: field("providerEmail"),
      patientName: field("patientName"),
      patientPhone: field("patientPhone"),
      serviceNeeded: field("serviceNeeded"),
      notes: field("notes"),
    };

    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p>
        Thank you. This referral has been sent to our team and someone will
        follow up shortly.
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Provider name
        <input name="providerName" type="text" required />
      </label>
      <label>
        Practice / facility name
        <input name="practiceName" type="text" />
      </label>
      <label>
        Provider phone
        <input name="providerPhone" type="tel" required />
      </label>
      <label>
        Provider email
        <input name="providerEmail" type="email" required />
      </label>
      <label>
        Patient name
        <input name="patientName" type="text" required />
      </label>
      <label>
        Patient phone
        <input name="patientPhone" type="tel" />
      </label>
      <label>
        Service needed
        <select name="serviceNeeded" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option value="dme">DME</option>
          <option value="crt">Complex Rehab Technology (CRT)</option>
          <option value="medical-supply">Medical Supply</option>
          <option value="pharmacy">Pharmacy</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Notes (please do not include diagnosis or DOB)
        <textarea name="notes" rows={4} />
      </label>
      <button className="submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Submit referral"}
      </button>
      {status === "error" && (
        <p style={{ color: "#a4372b" }}>
          Something went wrong. Please try again or call (213) 413-2343.
        </p>
      )}
    </form>
  );
}
