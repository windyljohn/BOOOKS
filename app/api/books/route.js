import Books from "@/app/(models)/Book";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const books = await Books.find();
    return NextResponse.json({ books }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function POST(req) {
  const body = await req.json();
  const { bookData } = body;
  try {
    await Books.create(bookData);
    return NextResponse.json(body.bookData, { status: 201 });
  } catch {
    return NextResponse.json(body.bookData, { status: 500 });
  }
}
