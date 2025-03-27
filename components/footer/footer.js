"use client";

import Image from "next/image";
import classes from "./footer.module.css";

import arrowIcon from "@/icons/right-arrow-white.svg";
import payment1 from "@/icons/payments/payment1.svg";
import payment2 from "@/icons/payments/payment2.svg";
import payment3 from "@/icons/payments/payment3.svg";
import payment4 from "@/icons/payments/payment4.svg";
import payment5 from "@/icons/payments/payment5.svg";
import payment6 from "@/icons/payments/payment6.svg";
import payment7 from "@/icons/payments/payment7.svg";
import payment8 from "@/icons/payments/payment8.svg";
import payment9 from "@/icons/payments/payment9.svg";
import Link from "next/link";
import { FOOTER_MENU } from "@/db_offline/initdb";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Footer() {
  const pathname = usePathname();
  const trimmedPathname = "/" + pathname.split("/")[1];
  const [subscribed, setSubscription] = useState(false);
  const [email, setEmail] = useState({ email: "" });
  const [error, setError] = useState(false);

  function handleChange(e) {
    setError(false);
    const value = e.target.value;
    setEmail({ email: value });
  }

  async function handleSubscribe(e) {
    e.preventDefault();
    if (email.email == "") {
      setError(true);
      return;
    }

    const res = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
      "content-type": "application/json",
    });

    if (res.ok) {
      await fetch("/api/newsletter/send", {
        method: "POST",
        body: JSON.stringify({ email }),
        "content-type": "application/json",
      });
    }

    setSubscription(true);
  }

  return (
    <footer className={classes.section}>
      <div className={classes.wrapper}>
        <div className={classes["main-col"]}>
          <h2 className={classes.icon}>BOOOKS</h2>
          <p className={classes.text1}>
            You'll only receive the essentials: new books, exclusive promotions
            and inspiring content. Sign up to our newsletter and receive a 10%
            discount on your first order.
          </p>
          {subscribed ? (
            <p className={classes.text1}>You are subscribed</p>
          ) : (
            <form
              className={classes["input-wrapper"]}
              onSubmit={handleSubscribe}
            >
              <input
                onSubmit={handleSubscribe}
                className={classes[`${error ? "input-error" : "input"}`]}
                onChange={handleChange}
                placeholder="Enter your email"
                type="email"
              />
              <button type="submit" className={classes["icon-arrow"]}>
                <Image
                  src={arrowIcon}
                  height={20}
                  width={20}
                  alt="arrow icon"
                />
              </button>
            </form>
          )}
          <p className={classes.text2}>
            By signing up, you agree to{" "}
            <Link href="/privacy-policy">BOOOK's Privacy Policy.</Link>
          </p>
        </div>

        <div className={classes["menu-col"]}>
          <p className={classes.title}>Menu</p>
          <ul className={classes.links}>
            {FOOTER_MENU.map((menu) => (
              <li key={menu.href}>
                <Link
                  href={menu.href}
                  key={menu.href}
                  className={
                    classes[
                      `${trimmedPathname === menu.href ? "active" : undefined}`
                    ]
                  }
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes["contact-col"]}>
          <p className={classes.title}>Contact Us</p>
          <ul className={classes.links}>
            <li className={classes.address}>
              3/F Jade Building, 335 Senator Gil Puyat Avenue, Makati City
            </li>
            <a href="tel:(63) 927 0734 789">(02) 716-1255</a>
            <a href="mailto:windylreylado@gmail.com">hello@boooks.com</a>
          </ul>
        </div>
      </div>
      <div className={classes["footer-line"]}></div>
      <div className={classes["bottom-wrapper"]}>
        <p className={classes["bottom-text"]}>
          Design and Development by
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://windyljohn.netlify.app/#home"
          >
            {" win"}
          </Link>
        </p>
        <div className={classes.payments}>
          <ul className={classes["payment-list"]}>
            <li>
              <Image src={payment1} alt="payment" />
            </li>
            <li>
              <Image src={payment2} alt="payment" />
            </li>
            <li>
              <Image src={payment3} alt="payment" />
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
    </footer>
  );
}
