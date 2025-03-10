import Image from "next/image";
import Link from "next/link";
import backgroundImage from "@/images/background-image.jpg";

import classes from "../sections/hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={classes.section}>
      <Image
        className={classes["background-image"]}
        src={backgroundImage}
        alt="Girl at bookstore"
      />
      <div className={classes["text-container"]}>
        <h2 className={classes.text}>Life is too short to read bad books</h2>
        <button className={classes.button}>
          <Link className={classes.shop} href="/categories">
            Shop now
          </Link>
        </button>
      </div>
    </section>
  );
}
