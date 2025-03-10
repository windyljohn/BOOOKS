import Books from "@/app/(models)/Book";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const waitedParams = await params;
  const { title } = waitedParams;

  try {
    const list = await Books.find({ tags: title });
    return NextResponse.json({ list }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
