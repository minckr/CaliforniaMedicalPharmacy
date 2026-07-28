"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
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
    return <p>{t.contact.thanks}</p>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        {t.common.name}
        <input name="name" type="text" required />
      </label>
      <label>
        {t.common.email}
        <input name="email" type="email" required />
      </label>
      <label>
        {t.contact.formLabels.message}
        <textarea name="message" rows={5} required />
      </label>
      <button className="submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? t.common.sending : t.contact.formLabels.send}
      </button>
      {status === "error" && (
        <p style={{ color: "#a4372b" }}>{t.common.errorGeneric}</p>
      )}
    </form>
  );
}
