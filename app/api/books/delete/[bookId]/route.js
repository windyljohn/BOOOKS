import Books from "@/app/(models)/Book";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const waitedParams = await params;
  const { bookId } = waitedParams;
  try {
    await Books.deleteOne({ _id: bookId });
    return NextResponse.json({ message: "Delete success" }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "There's an error" }, { status: 500 });
  }
}
