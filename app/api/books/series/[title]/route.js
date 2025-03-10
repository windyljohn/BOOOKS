import Books from "@/app/(models)/Book";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const waitedParams = await params;
  const { title } = waitedParams;

  try {
    const series = await Books.find({ series: title });
    return NextResponse.json({ series }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
