import Image from "next/image";

import classes from "./bookItemLarge.module.css";
import Link from "next/link";
import { formatPrice } from "@/lib/formatters";

export default function BookItemLarge({ image, title, author, price, _id }) {
  const formattedPrice = formatPrice(price);
  return (
    <Link href={`/books/${_id}`} className={classes.book}>
      <Image
        className={classes.image}
        src={image}
        height={311}
        width={207}
        alt={title}
      />
      <p className={classes.title}>{title}</p>
      <p className={classes.author}>{author}</p>
      <p className={classes.price}>{formattedPrice}</p>
    </Link>
  );
}
