import classes from "./page.module.css";
import BookItem from "@/components/sections/bookItem";

import Pagination from "./_components/pagination";

export const metadata = {
  title: "All Books | BOOOKS",
  description: "Created by win",
};

async function getBooks() {
  try {
    const res = await fetch("http://localhost:3000/api/books");
    return res.json();
  } catch (error) {
    return console.log("Failed to get books", error);
  }
}

export default async function BooksPage({ params, searchParams }) {
  const parameter = await params;
  const searchParameter = await searchParams;

  const { books } = await getBooks();

  // pagination
  const page = searchParameter["page"] ?? "1";
  const perPage = 24;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const entries = books.slice(start, end);

  return (
    <div>
      <p className={classes.header}>All Books</p>
      <div className={classes["books-wrapper"]}>
        <div className={classes["book-items"]}>
          {entries.map((book) => {
            return <BookItem key={book.title} {...book} />;
          })}
        </div>
        <Pagination length={books.length} perPage={perPage} />
      </div>
    </div>
  );
}
