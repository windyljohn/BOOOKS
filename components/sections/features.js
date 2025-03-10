import classes from "./features.module.css";

import FeaturesItem from "./featuresItem";
import bookIcon from "@/icons/feature/book-open.svg";
import lockIcon from "@/icons/feature/lock.svg";
import truckIcon from "@/icons/feature/truck.svg";
import shoppingCartIcon from "@/icons/feature/shopping-cart.svg";

export default function Features() {
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <h2 className={classes["text-large"]}>
          Experience the Magic of Reading with Us
        </h2>
        <p className={classes["text-small"]}>
          We make it easy to find and enjoy your next favorite book, delivered
          right to your door.
        </p>
        <div className={classes.features}>
          <FeaturesItem
            alt="feature-icon"
            icon={bookIcon}
            title="Endless Choices, Just a Click Away"
            text="Browse a vast collection of books across all genres, ensuring you’ll always find something you love."
          />{" "}
          <FeaturesItem
            alt="feature-icon"
            icon={truckIcon}
            title="Books Delivered Directly to You"
            text="Order books online and have them delivered straight to your door for ultimate convenience."
          />{" "}
          <FeaturesItem
            alt="feature-icon"
            icon={shoppingCartIcon}
            title="Affordable Books & Special Deals"
            text="Enjoy affordable prices, exclusive discounts, and special deals that you won’t find anywhere else."
          />
          <FeaturesItem
            alt="feature-icon"
            icon={lockIcon}
            title="Safe and Secure Transactions"
            text="Shop with confidence through a simple, secure checkout process and multiple payment options."
          />
        </div>
      </div>
    </section>
  );
}
