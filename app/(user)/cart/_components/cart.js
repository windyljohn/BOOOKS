"use client";

import classes from "./cart.module.css";
import Link from "next/link";

import Image from "next/image";

import payment1 from "@/icons/payments/payment1.svg";
import payment2 from "@/icons/payments/payment2.svg";
import payment3 from "@/icons/payments/payment3.svg";
import payment4 from "@/icons/payments/payment4.svg";
import payment5 from "@/icons/payments/payment5.svg";
import payment6 from "@/icons/payments/payment6.svg";
import payment7 from "@/icons/payments/payment7.svg";
import payment8 from "@/icons/payments/payment8.svg";
import payment9 from "@/icons/payments/payment9.svg";
import CartItem from "./cartItem";

import { AnimatePresence, motion } from "framer-motion";

import { useContext } from "react";
import { CartContext } from "@/store/cart-context";

export default function CartPage() {
  const { items } = useContext(CartContext);

  const totalPrice = items
    ? items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  const fromFreeShipping = (30 - totalPrice).toFixed(2);
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h2 className={classes.header}>Shopping Cart</h2>
          <Link className={classes.shopping} href="/categories">
            Continue shopping
          </Link>
        </div>
        <div className={classes.content}>
          <div className={classes["cart-wrapper"]}>
            {items?.length ? (
              <AnimatePresence mode="sync">
                {items.map((book) => (
                  <CartItem key={book.title} {...book} />
                ))}
              </AnimatePresence>
            ) : (
              <motion.p
                key="fallback"
                initial={{
                  opacity: 0,
                  y: -30,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                className={classes.empty}
              >
                Your shopping cart is empty.
              </motion.p>
            )}
          </div>
          {items?.length ? (
            <div className={classes["checkout-wrapper"]}>
              <div className={classes["progress-wrapper"]}>
                <p>{`$${
                  fromFreeShipping >= 0 ? fromFreeShipping : 0
                } away from free standard shipping`}</p>
                <div className={classes["progress-bar"]}>
                  <motion.div
                    className={classes.progress}
                    animate={{ width: `${(totalPrice / 30) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </div>
              </div>
              <div className={classes.checkout}>
                <div className={classes["checkout-header"]}>
                  <h3>Subtotal</h3>
                  <h3>{formattedTotalPrice}</h3>
                </div>
                <p className={classes["checkout-text"]}>
                  Tax included. Shipping calculated at checkout.
                </p>
                <div>
                  <Link className={classes["checkout-button"]} href="/checkout">
                    <p>Checkout</p>
                  </Link>
                </div>
                <div className={classes.payments}>
                  <ul className={classes["payment-list"]}>
                    <li>
                      <Image src={payment1} alt="payment" />
                    </li>
                    <li>
                      <Image src={payment2} alt="payment" />
                    </li>

                    <li>
                      <Image src={payment4} alt="payment" />
                    </li>
                    <li>
                      <Image src={payment5} alt="payment" />
                    </li>
                    <li>
                      <Image src={payment6} alt="payment" />
                    </li>
                    <li>
                      <Image src={payment7} alt="payment" />
                    </li>
                    <li>
                      <Image src={payment8} alt="payment" />
                    </li>
                    <li>
                      <Image src={payment9} alt="payment" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
