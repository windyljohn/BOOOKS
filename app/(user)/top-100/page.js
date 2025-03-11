import classes from "./page.module.css";
import BookItem from "@/components/sections/bookItem";
import Pagination from "./_components/pagination";

export const metadata = {
  title: "Top 100 Books | BOOOKS",
  description: "Created by win",
};

async function getBooks() {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_SERVER_URL + "api/books/top100"
    );
    return res.json();
  } catch (error) {
    return console.log("Failed to get books", error);
  }
}

export default async function Top100Page({ params, searchParams }) {
  const parameter = await params;
  const searchParameter = await searchParams;

  const { top100 } = await getBooks();

  // pagination;
  const page = searchParameter["page"] ?? "1";
  const perPage = 100;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const entries = top100.slice(start, end);

  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <h2 className={classes.header}>Top 100 Books</h2>
        <div className={classes["books-wrapper"]}>
          <div className={classes["book-items"]}>
            {entries.map((book) => (
              <BookItem key={book._id} {...book} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
