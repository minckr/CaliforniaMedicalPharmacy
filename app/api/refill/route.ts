import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { name, phone, email, refillType, details } = await request.json();

  if (!name || !phone || !refillType) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.REFILL_TO_EMAIL || process.env.CONTACT_TO_EMAIL;

  if (!to) {
    return NextResponse.json(
      { error: "REFILL_TO_EMAIL is not configured" },
      { status: 500 }
    );
  }

  try {
    await resend.emails.send({
      from: "California Medical Pharmacy <onboarding@resend.dev>",
      to,
      reply_to: email || undefined,
      subject: `Refill request: ${name} (${refillType})`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "n/a"}`,
        `Refill type: ${refillType}`,
        `Details: ${details || "n/a"}`,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
