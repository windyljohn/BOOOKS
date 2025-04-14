import Books from "@/app/(models)/Book";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const top100 = await Books.find({ tags: "top 100" });
    return NextResponse.json({ top100 }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
