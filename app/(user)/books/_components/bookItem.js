"use client";

import classes from "./bookItem.module.css";
import Image from "next/image";

import { useContext } from "react";
import { CartContext } from "@/store/cart-context";
import Link from "next/link";
import { formatToLink } from "@/lib/formatters";
import { notFound } from "next/navigation";

export default function BooksItem({ book }) {
  const { addItemToCart } = useContext(CartContext);
  if (!book) {
    notFound();
  }

  const blurbSplit = book.blurb.split("\n");

  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <Image
          className={classes.image}
          src={book.image}
          height={585}
          width={390}
          alt={book.title}
        />
        <div className={classes.details}>
          <h2 className={classes.title}>{book.title}</h2>
          <p className={classes.author}>{book.author}</p>
          <div className={classes["category-wrapper"]}>
            {book.category.map((category) => {
              const link = formatToLink(category);
              return (
                <Link
                  className={classes.category}
                  href={`/categories/${link}`}
                  key={category}
                >
                  {category}
                </Link>
              );
            })}
          </div>
          <div className={classes["summary-container"]}>
            {blurbSplit.map((paragraph, index) => (
              <p className={classes.summary} key={index}>
                {paragraph}
              </p>
            ))}
          </div>
          <button
            className={classes.button}
            onClick={() => addItemToCart(book)}
          >
            <p>Add to Cart</p>
          </button>
        </div>
      </div>
    </section>
  );
}
