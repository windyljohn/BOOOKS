import BookForm from "../_component/bookForm";

export const metadata = {
  title: "Edit Book | Admin BOOOKS",
  description: "Created by wind",
};

async function getBook(bookId) {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_SERVER_URL + `api/books/${bookId}`
    );
    return res.json();
  } catch (error) {
    console.error("Failed to get book", error);
  }
}

export default async function EditDelete({ params }) {
  const bookDetailsParams = await params;
  const { book } = await getBook(bookDetailsParams.id);
  return <BookForm {...book} />;
}
