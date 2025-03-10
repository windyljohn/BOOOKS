"use client";

import Image from "next/image";
import classes from "./checkoutDetails.module.css";

import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/store/cart-context";
import { CheckoutForm } from "./checkoutForm";

export default function CheckoutDetails() {
  const [clientSecret, setClientSecret] = useState("");
  const { items, totalPrice, totalQuantity } = useContext(CartContext);
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  useEffect(() => {
    fetch("api/stripe/", {
      method: "POST",
      body: JSON.stringify({ amount: totalPrice, items: items }),
      "content-type": "application/json",
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <section className={classes.section}>
      <div className={classes["wrapper-left"]}>
        <div className={classes.form}>
          <CheckoutForm clientSecret={clientSecret} />
        </div>
      </div>
      <div className={classes["wrapper-right"]}>
        <div className={classes["items-wrapper"]}>
          <div className={classes.items}>
            {items.map((book) => (
              <div className={classes.item} key={book.title}>
                <div className={classes["item-details"]}>
                  <Image
                    src={book.image}
                    alt="image 1"
                    height={150}
                    width={100}
                  />
                  <div className={classes["title-author-wrapper"]}>
                    <p className={classes.title}>{book.title}</p>
                    <p className={classes.author}>{book.author}</p>
                  </div>
                </div>
                <p className={classes.price}>
                  {book.quantity} x ${book.price}
                </p>
              </div>
            ))}
          </div>
          <div className={classes.summary}>
            <div className={classes.subtotal}>
              <span>
                Subtotal • {totalQuantity}
                {totalQuantity > 1 ? " items" : " item"}
              </span>
              <span className={classes.price}>{formattedTotalPrice}</span>
            </div>
            {totalPrice <= 30 ? (
              <div className={classes.subtotal}>
                <span>Shipping</span>
                <span className={classes.price}>$10.00</span>
              </div>
            ) : null}
            <div className={classes.total}>
              <span>Total</span>
              <span>
                {totalPrice <= 30
                  ? `$${(10 + totalPrice).toFixed(2)}`
                  : formattedTotalPrice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
