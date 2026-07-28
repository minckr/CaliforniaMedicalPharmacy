"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function ReferralForm() {
  const { t } = useLanguage();
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
    return <p>{t.referral.thanks}</p>;
  }

  const l = t.referral.labels;

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        {l.providerName}
        <input name="providerName" type="text" required />
      </label>
      <label>
        {l.practiceName}
        <input name="practiceName" type="text" />
      </label>
      <label>
        {l.providerPhone}
        <input name="providerPhone" type="tel" required />
      </label>
      <label>
        {l.providerEmail}
        <input name="providerEmail" type="email" required />
      </label>
      <label>
        {l.patientName}
        <input name="patientName" type="text" required />
      </label>
      <label>
        {l.patientPhone}
        <input name="patientPhone" type="tel" />
      </label>
      <label>
        {l.serviceNeeded}
        <select name="serviceNeeded" defaultValue="">
          <option value="" disabled>
            {l.selectOne}
          </option>
          <option value="dme">DME</option>
          <option value="crt">Complex Rehab Technology (CRT)</option>
          <option value="medical-supply">Medical Supply</option>
          <option value="pharmacy">Pharmacy</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        {l.notes}
        <textarea name="notes" rows={4} />
      </label>
      <button className="submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? t.common.sending : l.submitReferral}
      </button>
      {status === "error" && (
        <p style={{ color: "#a4372b" }}>{t.common.errorGeneric}</p>
      )}
    </form>
  );
}
