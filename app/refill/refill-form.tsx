"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function RefillForm() {
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
      refillType: field("refillType"),
      details: field("details"),
    };

    try {
      const res = await fetch("/api/refill", {
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
    return <p>{t.refill.thanks}</p>;
  }

  const l = t.refill.labels;

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
        {l.refillType}
        <select name="refillType" defaultValue="" required>
          <option value="" disabled>
            {l.selectOne}
          </option>
          <option value="prescription">{l.prescription}</option>
          <option value="dme-supply">{l.dmeSupply}</option>
          <option value="not-sure">{l.notSure}</option>
        </select>
      </label>
      <label>
        {l.details}
        <input name="details" type="text" placeholder={l.detailsPlaceholder} />
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
