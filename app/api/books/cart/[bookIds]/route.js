import Books from "@/app/(models)/Book";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const waitedParams = await params;
  const { bookIds } = waitedParams;
  try {
    const cartItems = await Books.find({
      _id: {
        $in: ["67a0c3b5ec03afb0782fbe3b", "67a0c3b5ec03afb0782fbe3b"],
      },
    });
    return NextResponse.json({ cartItems }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
