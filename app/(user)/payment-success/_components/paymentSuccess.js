"use client";

import classes from "./paymentSuccess.module.css";
import { useContext, useEffect } from "react";
import { CartContext } from "@/store/cart-context";
import Link from "next/link";

export default function PaymentSuccess() {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h2 className={classes.header}>Success!</h2>
          <Link className={classes.shopping} href="/categories/">
            Continue shopping
          </Link>
        </div>
        <div className={classes.content}>
          <div className={classes["cart-wrapper"]}>
            <p className={classes.empty}>
              Thank you so much for your purchase!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
