import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const amount = (body.amount > 30 ? body.amount : body.amount + 10) * 100;
    const items = body.items;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      metadata: {
        items: JSON.stringify(items),
        shipping: JSON.stringify(amount > 3000 ? false : true),
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json(
      { clientSecret: paymentIntent.client_secret },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ message: "Error" }, { status: 502 });
  }
}
