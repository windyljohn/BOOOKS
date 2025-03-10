"use client";

import Image from "next/image";
import Link from "next/link";

import cartIcon from "@/icons/cart.svg";
import classes from "./cart.module.css";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CartContext } from "@/store/cart-context";

export default function Cart() {
  const { items } = useContext(CartContext);

  const totalQuantity = items
    ? items.reduce((acc, item) => acc + item.quantity, 0)
    : 0;

  return (
    <Link href="/cart" className={classes.container}>
      <div className={classes.wrapper}>
        <Image
          className={classes.icon}
          src={cartIcon}
          width={20}
          height={20}
          alt="Cart logo"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.3 }}
          className={classes.quantity}
          key={totalQuantity}
        >
          ({totalQuantity})
        </motion.div>
      </div>
    </Link>
  );
}
