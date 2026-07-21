"use client";

import { useState } from "react";

export default function GetStartedForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const field = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement)?.value;

    const data = {
      name: field("name"),
      phone: field("phone"),
      email: field("email"),
      insuranceCarrier: field("insuranceCarrier"),
      memberId: field("memberId"),
      serviceNeeded: field("serviceNeeded"),
    };

    try {
      const res = await fetch("/api/get-started", {
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
        Thank you. Our team will review your information and reach out to
        confirm coverage.
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Full name
        <input name="name" type="text" required />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" required />
      </label>
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Insurance carrier
        <input
          name="insuranceCarrier"
          type="text"
          placeholder="e.g. Medicare, Medi-Cal, Blue Shield"
          required
        />
      </label>
      <label>
        Member ID (optional)
        <input name="memberId" type="text" />
      </label>
      <label>
        What do you need?
        <select name="serviceNeeded" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option value="pharmacy">Pharmacy / prescriptions</option>
          <option value="medical-supply">Medical Supply</option>
          <option value="dme">DME</option>
          <option value="crt">Complex Rehab Technology (CRT)</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </label>
      <button className="submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
      {status === "error" && (
        <p style={{ color: "#a4372b" }}>
          Something went wrong. Please try again or call (213) 413-2343.
        </p>
      )}
    </form>
  );
}
