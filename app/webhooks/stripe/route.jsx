import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import PurchaseReceiptEmail from "@/emails/PurchaseReceiptEmail";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const event = await stripe.webhooks.constructEvent(
      await req.body(),
      req.headers.get("stripe-signature"),
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type === "charge.succeeded") {
      const charge = event.data.object;
      const product = JSON.parse(charge.metadata.items);
      const email = charge.billing_details.email;
      const shipping = JSON.parse(charge.metadata.shipping);
      const amount = charge.amount;
      const orderNumber = charge.created;
      const name = charge.billing_details.name.split(" ")[0];
      const billingAddress = charge.billing_details.address;
      const address = `${billingAddress.line1}, ${billingAddress.line2}, ${billingAddress.city} ${billingAddress.postal_code}`;

      await resend.emails.send({
        from: `BOOOKS <${process.env.SENDER_EMAIL}>`,
        to: email,
        subject: "We've just received your order",
        react: (
          <PurchaseReceiptEmail
            shipping={shipping}
            orderNumber={orderNumber}
            amount={amount}
            name={name}
            address={address}
            items={product}
          />
        ),
      });
    }
    return NextResponse.json({ success: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 502 });
  }
}
