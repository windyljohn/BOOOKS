import BooksItem from "../_components/bookItem";

async function getBook(bookId) {
  try {
    const res = await fetch(`http://localhost:3000/api/books/${bookId}`);
    return res.json();
  } catch (error) {
    console.error("Failed to get book", error);
  }
}

export async function generateMetadata({ params }) {
  const bookDetailsParams = await params;
  const { book } = await getBook(bookDetailsParams.bookId);
  return {
    title: `${book.title} | BOOOKS`,
    description: book.description,
  };
}

export default async function BookDetails({ params }) {
  const bookDetailsParams = await params;
  const { book } = await getBook(bookDetailsParams.bookId);
  return <BooksItem book={book} />;
}
