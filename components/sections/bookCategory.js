import Link from "next/link";
import classes from "./bookCategory.module.css";
import Image from "next/image";

export default function BookCategory({
  icon,
  href,
  title,
  book1,
  book2,
  book3,
  typeCategory,
}) {
  return (
    <Link href={`/${typeCategory}/${href}`} className={classes.button}>
      {icon ? (
        <Image
          className={classes.icon}
          src={icon}
          height={24}
          width={24}
          alt="icon"
        />
      ) : undefined}

      <p className={classes.text}>{title}</p>
      <div className={classes.card}>
        {book1 && book2 && book3 ? (
          <>
            <Image
              className={classes["card-book1"]}
              src={book1}
              alt={book1}
              width={100}
              height={100}
            />
            <Image
              className={classes["card-book2"]}
              src={book2}
              alt={book2}
              width={100}
              height={100}
            />
            <Image
              className={classes["card-book3"]}
              src={book3}
              alt={book3}
              width={100}
              height={100}
            />
          </>
        ) : undefined}
      </div>
    </Link>
  );
}
