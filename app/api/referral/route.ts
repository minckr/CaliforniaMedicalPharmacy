import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const {
    providerName,
    practiceName,
    providerPhone,
    providerEmail,
    patientName,
    patientPhone,
    serviceNeeded,
    notes,
  } = await request.json();

  if (!providerName || !providerPhone || !providerEmail || !patientName) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.REFERRAL_TO_EMAIL || process.env.CONTACT_TO_EMAIL;

  if (!to) {
    return NextResponse.json(
      { error: "REFERRAL_TO_EMAIL is not configured" },
      { status: 500 }
    );
  }

  try {
    await resend.emails.send({
      from: "California Medical Pharmacy <onboarding@resend.dev>",
      to,
      reply_to: providerEmail,
      subject: `Provider referral: ${patientName} (${serviceNeeded || "unspecified"})`,
      text: [
        `Provider: ${providerName}`,
        `Practice: ${practiceName || "n/a"}`,
        `Provider phone: ${providerPhone}`,
        `Provider email: ${providerEmail}`,
        `Patient: ${patientName}`,
        `Patient phone: ${patientPhone || "n/a"}`,
        `Service needed: ${serviceNeeded || "n/a"}`,
        `Notes: ${notes || "n/a"}`,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
