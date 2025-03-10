"use client";

import Image from "next/image";
import classes from "./cartItem.module.css";

import plusIcon from "@/icons/plus.svg";
import minusIcon from "@/icons/minus.svg";
import trashIcon from "@/icons/trash.svg";

import { useContext } from "react";
import { CartContext } from "@/store/cart-context";
import { AnimatePresence, motion } from "framer-motion";

export default function CartItem({
  id,
  title,
  author,
  image,
  quantity,
  price,
}) {
  const { updateItemToCart } = useContext(CartContext);
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <motion.div
      className={classes.item}
      transition={{ duration: 0.15 }}
      layout
      exit={{ opacity: 0, y: -30 }}
    >
      <Image
        className={classes.image}
        src={image}
        height={159}
        width={106}
        alt="item"
      />
      <div className={classes["item-details"]}>
        <p className={classes["item-title"]}>{title}</p>
        <p className={classes["item-author"]}>{author}</p>
        <div className={classes["count-wrapper"]}>
          <Image
            className={classes.icon}
            src={minusIcon}
            alt="minus icon"
            onClick={() => updateItemToCart(id, -1)}
          />
          <p className={classes["item-count"]}>{quantity}</p>
          <Image
            className={classes.icon}
            src={plusIcon}
            alt="plus icon"
            onClick={() => updateItemToCart(id, +1)}
          />
        </div>
        <div className={classes["price-wrapper"]}>
          <p className={classes["item-price"]}>{formattedPrice}</p>
          <Image
            className={classes.icon}
            src={trashIcon}
            alt="trash icon"
            onClick={() => updateItemToCart(id, -quantity)}
          />
        </div>
      </div>
    </motion.div>
  );
}
