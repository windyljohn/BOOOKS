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
