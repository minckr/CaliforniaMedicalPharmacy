import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { name, phone, email, insuranceCarrier, memberId, serviceNeeded } =
    await request.json();

  if (!name || !phone || !insuranceCarrier) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.GET_STARTED_TO_EMAIL || process.env.CONTACT_TO_EMAIL;

  if (!to) {
    return NextResponse.json(
      { error: "GET_STARTED_TO_EMAIL is not configured" },
      { status: 500 }
    );
  }

  try {
    await resend.emails.send({
      from: "California Medical Pharmacy <onboarding@resend.dev>",
      to,
      reply_to: email || undefined,
      subject: `New patient inquiry: ${name} (${serviceNeeded || "unspecified"})`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "n/a"}`,
        `Insurance carrier: ${insuranceCarrier}`,
        `Member ID: ${memberId || "n/a"}`,
        `Service needed: ${serviceNeeded || "n/a"}`,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
