"use client";
import Link from "next/link";
import classes from "./sidebar.module.css";
import { CATEGORIES } from "@/db_offline/initdb";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className={classes.sidebar}>
      <div className={classes["categories-wrapper"]}>
        <ul className={classes.categories}>
          {CATEGORIES.map((category) => (
            <li key={category.title}>
              <Link
                href={category.href}
                className={
                  classes[`${pathname == category.href ? "active" : "link"}`]
                }
                key={category.title}
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
