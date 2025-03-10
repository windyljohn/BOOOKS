import Link from "next/link";
import Image from "next/image";

import classes from "./navigation.module.css";
import cartIcon from "@/icons/cart.svg";

export default function Navigation() {
  return (
    <header className={classes["header-wrapper"]}>
      <div className={classes.wrapper}>
        <div className={classes["navigation-wrapper"]}>
          <div className={classes.title}>
            <Link href="/">BOOOKS</Link>
          </div>
          <div className={classes.icons}>
            <Link href="/cart">
              <Image src={cartIcon} width={20} height={20} alt="Cart logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.margin}></div>
    </header>
  );
}
