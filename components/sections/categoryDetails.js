import BookItemLarge from "./bookItemLarge";
import classes from "./categoryDetails.module.css";
import Image from "next/image";
import arrowRight from "@/icons/right-arrow.svg";
import Link from "next/link";
import Pagination from "./pagination";

export default function CategoryDetails({ title, category, type }) {
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <h2 className={classes.header}>{title}</h2>
        <div className={classes["book-container"]}>
          {category.map((book) => (
            <BookItemLarge
              key={book.title}
              href={book.href}
              image={book.image}
              title={book.title}
              author={book.author}
              price={book.price}
            />
          ))}
        </div>
      </div>
      <div className={classes.bottom}>
        <Link href={`/${type}`} className={classes.explore}>
          <div className={classes["explore-wrapper"]}>
            <p>Explore all {type}</p>
            <Image src={arrowRight} alt="arrow-icon" height={20} width={20} />
          </div>
        </Link>
        <Pagination />
      </div>
    </section>
  );
}
