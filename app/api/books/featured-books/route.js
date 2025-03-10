import Books from "@/app/(models)/Book";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const featuredBooks = await Books.find({ tags: "top 100" }).limit(12);
    return NextResponse.json({ featuredBooks }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
