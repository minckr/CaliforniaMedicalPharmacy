"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function GetStartedForm() {
  const { t } = useLanguage();
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
    return <p>{t.getStarted.thanks}</p>;
  }

  const l = t.getStarted.labels;

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        {t.common.name}
        <input name="name" type="text" required />
      </label>
      <label>
        {l.phone}
        <input name="phone" type="tel" required />
      </label>
      <label>
        {t.common.email}
        <input name="email" type="email" />
      </label>
      <label>
        {l.insuranceCarrier}
        <input
          name="insuranceCarrier"
          type="text"
          placeholder="e.g. Medicare, Medi-Cal, Blue Shield"
          required
        />
      </label>
      <label>
        {l.memberId}
        <input name="memberId" type="text" />
      </label>
      <label>
        {l.serviceNeeded}
        <select name="serviceNeeded" defaultValue="">
          <option value="" disabled>
            {l.selectOne}
          </option>
          <option value="pharmacy">Pharmacy / prescriptions</option>
          <option value="medical-supply">Medical Supply</option>
          <option value="dme">DME</option>
          <option value="crt">Complex Rehab Technology (CRT)</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </label>
      <button className="submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? t.common.sending : t.common.submit}
      </button>
      {status === "error" && (
        <p style={{ color: "#a4372b" }}>{t.common.errorGeneric}</p>
      )}
    </form>
  );
}
