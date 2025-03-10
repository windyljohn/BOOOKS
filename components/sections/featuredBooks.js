import classes from "./featuredBooks.module.css";

import BookItem from "./bookItem";

export default async function FeaturedBooks({ featuredBooks }) {
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Featured Books</h2>
        <div className={classes["featured-books"]}>
          {featuredBooks.map((book) => (
            <BookItem key={book.title} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
}
