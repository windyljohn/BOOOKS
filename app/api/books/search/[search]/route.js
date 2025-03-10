import Books from "@/app/(models)/Book";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const waitedParams = await params;
  const { search } = waitedParams;
  try {
    const books = await Books.find({
      title: { $regex: new RegExp(`${search}`, "i") },
    });
    return NextResponse.json({ books }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
