"use client";

import classes from "./navigation-mobile.module.css";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useDebounce } from "@uidotdev/usehooks";
import { NAVIGATION } from "@/db_offline/initdb";
import Link from "next/link";

export default function MobileNavigation({ ref, onCloseMobile }) {
  return (
    <>
      <div className={classes.overlay}></div>
      <motion.section
        ref={ref}
        className={classes["section-mobile"]}
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, transition: { duration: 0.2 }, x: 0 }}
        exit={{ opacity: 0, transition: { duration: 0.2 }, x: -1000 }}
      >
        <nav className={classes.navigation}>
          {NAVIGATION.map((nav) => (
            <div
              key={nav.title}
              // whileHover={{
              //   scale: 1,
              //   transition: { duration: 0.25, type: "spring", stiffness: 400 },
              // }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <Link href={nav.href} onClick={onCloseMobile}>
                {nav.title}
              </Link>
            </div>
          ))}
        </nav>
      </motion.section>
    </>
  );
}
