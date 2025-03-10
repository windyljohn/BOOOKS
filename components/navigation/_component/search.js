"use client";

import Image from "next/image";
import classes from "./search.module.css";

import searchIcon from "@/icons/search.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useClickAway } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "framer-motion";

export default function Search() {
  const [toggle, setToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const ref = useClickAway(() => {
    setToggle(false);
  });

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  function handleClose() {
    setToggle(false);
    setSearchTerm("");
    router.push(`/search/${searchTerm}`);
  }

  useEffect(() => {
    if (toggle) document.getElementById("input").focus();
  }, [toggle]);

  function handleSearch(term) {
    setSearchTerm(term);
  }

  function handleEnter() {
    document.getElementById("link").click();
  }

  function handleClick() {
    if (toggle && searchTerm.trim() !== "") {
      handleClose();
    } else handleToggle();
  }

  return (
    <section className={classes.section} ref={ref}>
      <AnimatePresence>
        {toggle && (
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.1 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            id="input"
            className={classes.input}
            placeholder="Search"
            onKeyDown={(e) => (e.key === "Enter" ? handleEnter() : null)}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        )}
      </AnimatePresence>
      <div className={classes.action} id="link" onClick={handleClick}>
        <Image
          className={classes.icon}
          src={searchIcon}
          width={20}
          height={20}
          alt="Search logo"
        />
      </div>
    </section>
  );
}
