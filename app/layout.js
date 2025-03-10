"use client";

import "./globals.css";

import { CartContext } from "@/store/cart-context";
import { useEffect, useState } from "react";

export default function CheckoutLayout({ children }) {
  function useLocalstorageState(key, defaultValue) {
    const [value, setValue] = useState(defaultValue);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
      const localstorageValue = localStorage.getItem(key);

      if (localstorageValue !== null) {
        setValue(JSON.parse(localstorageValue));
      }
      setIsInitialized(true);
    }, [key]);

    useEffect(() => {
      if (isInitialized) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    }, [isInitialized, key, value]);

    return [value, setValue];
  }

  const [shoppingCart, setShoppingCart] = useLocalstorageState("cart", {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  });

  function handleAddItemToCart(book) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      let updatedTotalQuantity = prevShoppingCart.totalQuantity;
      let updatedTotalPrice = +prevShoppingCart.totalPrice.toFixed(2);

      updatedTotalQuantity += 1;
      updatedTotalPrice += book.price;

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === book._id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({
          id: book._id,
          image: book.image,
          title: book.title,
          price: book.price,
          author: book.author,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
      };
    });
  }

  function handleUpdateCartItemQuantity(id, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex((item) => item.id === id);
      let updatedTotalQuantity = prevShoppingCart.totalQuantity;
      let updatedTotalPrice = prevShoppingCart.totalPrice;

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;
      updatedTotalQuantity += amount;
      updatedTotalPrice += amount * updatedItem.price;

      if (updatedTotalQuantity <= 0) {
        updatedTotalQuantity = 0;
        updatedTotalPrice = 0;
      }

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      console;

      return {
        items: updatedItems,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
      };
    });
  }

  function handleClearCart() {
    setShoppingCart("cart", {
      items: [],
      totalQuantity: 0,
      totalPrice: 0,
    });
    localStorage.setItem(
      "cart",
      JSON.stringify({
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
      })
    );
  }

  const ctxValue = {
    items: shoppingCart.items,
    totalQuantity: shoppingCart.totalQuantity,
    totalPrice: shoppingCart.totalPrice,
    addItemToCart: handleAddItemToCart,
    updateItemToCart: handleUpdateCartItemQuantity,
    clearCart: handleClearCart,
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="any" />
      </head>
      <body>
        <CartContext value={ctxValue}>{children}</CartContext>
      </body>
    </html>
  );
}
