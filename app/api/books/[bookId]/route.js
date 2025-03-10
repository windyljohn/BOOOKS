import Books from "@/app/(models)/Book";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const waitedParams = await params;
  const { bookId } = waitedParams;
  try {
    const book = await Books.findOne({ _id: bookId });
    return NextResponse.json({ book }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
