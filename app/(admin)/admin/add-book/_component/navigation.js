import Link from "next/link";
import Image from "next/image";

import classes from "./navigation.module.css";

import logoutIcon from "@/icons/logout.png";

import { signOutFunction } from "@/lib/actions";

export default function Navigation() {
  return (
    <header className={classes["header-wrapper"]}>
      <div className={classes.wrapper}>
        <div className={classes["navigation-wrapper"]}>
          <div className={classes.title}>
            <Link href="#">BOOOKS</Link>
          </div>
          <div className={classes.icons}>
            <button onClick={signOutFunction}>
              <Image src={logoutIcon} width={20} height={20} alt="Cart logo" />
            </button>
          </div>
        </div>
      </div>
      <div className={classes.margin}></div>
    </header>
  );
}
