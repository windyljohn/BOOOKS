import { NextResponse } from "next/server";
import { Resend } from "resend";
import NewsletterEmail from "@/emails/NewsletterEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { email } = body.email;
  try {
    await resend.emails.send({
      from: `BOOOKS <${process.env.SENDER_EMAIL}>`,
      to: email,
      subject: "Welcome to BOOOKS",
      react: <NewsletterEmail />,
    });

    return NextResponse.json({ message: "Subscriber Added" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
