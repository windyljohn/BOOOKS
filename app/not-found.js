import Link from "next/link";
import Image from "next/image";

import classes from "./not-found.module.css";
import backgroundImage from "@/images/background-image-not-found.webp";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "404 Not Found",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <Navigation />
      <section className={classes.section}>
        <Image
          className={classes["background-image"]}
          src={backgroundImage}
          alt="Books greyscale"
        />
        <div className={classes["text-container"]}>
          <h2 className={classes["text-large"]}>Whoops, our bad…</h2>
          <p className={classes["text-small"]}>
            The page you requested isn't here.
          </p>
          <button className={classes.button}>
            <Link className={classes.shop} href="/categories/">
              Explore books
            </Link>
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
