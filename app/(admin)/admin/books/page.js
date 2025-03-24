import classes from "./page.module.css";
import BookItem from "./_components/bookItem";

import Pagination from "./_components/pagination";

export const metadata = {
  title: "All Books | Admin BOOOKS",
  description: "Created by win",
};

async function getBooks() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "api/books");
    return res.json();
  } catch (error) {
    return console.log("Failed to get books", error);
  }
}

export default async function AdminBooks({ params, searchParams }) {
  const parameter = await params;
  const searchParameter = await searchParams;

  const { books } = await getBooks();

  books.sort((a, b) => {
    const idA = a._id;
    const idB = b._id;

    if (idA < idB) {
      return 1;
    }

    if (idA > idB) {
      return -1;
    }
  });

  // pagination
  const page = searchParameter["page"] ?? "1";
  const perPage = 25;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const entries = books.slice(start, end);

  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <div className={classes["header-container"]}>
          <p className={classes.header}>All Books</p>
        </div>
        <div className={classes["books-wrapper"]}>
          <div className={classes["book-items"]}>
            {entries.map((book) => {
              return <BookItem key={book.title} {...book} />;
            })}
          </div>
        </div>
        <Pagination length={books.length} perPage={perPage} />
      </div>
    </section>
  );
}
