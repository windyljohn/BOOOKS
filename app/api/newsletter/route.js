import Newsletters from "@/app/(models)/Newsletter";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const newsletterData = body.email;
    await Newsletters.create(newsletterData);
    return NextResponse.json({ message: "Subscriber Added" }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
