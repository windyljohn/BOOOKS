"use client";

import Image from "next/image";

import classes from "./bookItem.module.css";
import Link from "next/link";
import { formatPrice } from "@/lib/formatters";

export default function BookItem({ image, _id, title, author, price }) {
  const formattedPrice = formatPrice(price);

  return (
    <Link href={`/admin/edit/${_id}`} className={classes.book}>
      <Image
        className={classes.image}
        src={image}
        height={210}
        width={140}
        alt={title}
      />
      <p className={classes.title}>{title}</p>
      <p className={classes.author}>{author}</p>
      <p className={classes.price}>{formattedPrice}</p>
    </Link>
  );
}
