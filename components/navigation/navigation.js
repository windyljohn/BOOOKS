"use client";

import Link from "next/link";
import Image from "next/image";

import classes from "./navigation.module.css";

import profileIcon from "@/icons/profile.svg";
import searchIcon from "@/icons/search.svg";
import menuIcon from "@/icons/menu.png";
import closeIcon from "@/icons/close.svg";
import Cart from "./_component/cart";
import { NAVIGATION } from "@/db_offline/initdb";
import { AnimatePresence, motion } from "framer-motion";
import SearchBar from "./searchBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useClickAway } from "@uidotdev/usehooks";
import MobileNavigation from "./navigation-mobile";

export default function Navigation() {
  const [toggle, setToggle] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const [initData, setInitData] = useState([]);

  const ref = useClickAway((ref) => {
    if (ref.target.name == "search") return;
    setToggle(false);
  });

  const mobileRef = useClickAway((ref) => {
    if (ref.target.name == "mobile-nav") return;
    setToggleMobile(false);
  });

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  function handleToggleMobile() {
    setToggleMobile((prev) => !prev);
  }

  function handleClose() {
    setToggle(false);
    setSearchTerm("");
    router.push(`/search/${searchTerm}`);
  }

  useEffect(() => {
    if (toggle) document.getElementById("input").focus();
  }, [toggle]);

  useEffect(() => {
    if (toggle) {
      document.documentElement.classList.add("search-open");
    } else {
      document.documentElement.classList.remove("search-open");
    }
  }, [toggle]);

  useEffect(() => {
    if (toggleMobile) {
      document.documentElement.classList.add("search-open");
    } else {
      document.documentElement.classList.remove("search-open");
    }
  }, [toggleMobile]);

  useEffect(() => {
    async function fetchInitData() {
      const res = await fetch(
        process.env.NEXT_PUBLIC_SERVER_URL + `api/books/`
      );
      const { books } = await res.json();
      setInitData(books);
    }

    fetchInitData();
  }, []);

  return (
    <header className={classes["header-wrapper"]}>
      <AnimatePresence>
        {toggle && (
          <SearchBar onClose={handleToggle} ref={ref} books={initData} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {toggleMobile && (
          <MobileNavigation
            onCloseMobile={handleToggleMobile}
            ref={mobileRef}
          />
        )}
      </AnimatePresence>
      <div className={classes["navigation-wrapper"]}>
        <div className={classes["navigation-mobile"]}>
          {toggleMobile ? (
            <Image
              src={closeIcon}
              alt="menu icon"
              width={20}
              height={20}
              onClick={handleToggleMobile}
              name="mobile-nav"
            />
          ) : (
            <Image
              src={menuIcon}
              alt="menu icon"
              width={15}
              height={15}
              onClick={handleToggleMobile}
              name="mobile-nav"
            />
          )}
        </div>
        <nav className={classes.navigation}>
          {NAVIGATION.map((nav) => (
            <motion.div
              key={nav.title}
              whileHover={{
                scale: 1,
                transition: { duration: 0.25, type: "spring", stiffness: 400 },
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <Link href={nav.href}>{nav.title}</Link>
            </motion.div>
          ))}
        </nav>
        <div className={classes.title}>
          <motion.div
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.25, type: "spring", stiffness: 400 },
            }}
          >
            <Link href="/">BOOOKS</Link>
          </motion.div>
        </div>
        <div className={classes.icons}>
          <div className={classes.action} id="link" onClick={handleToggle}>
            <Image
              className={classes.icon}
              src={searchIcon}
              width={20}
              height={20}
              alt="Search logo"
              name="search"
              ref={ref}
            />
          </div>
          <motion.div
            whileHover={{
              scale: 1,
              transition: { duration: 0.25, type: "spring", stiffness: 400 },
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <Link href="/account">
              <Image
                className={classes.icon}
                src={profileIcon}
                width={20}
                height={20}
                alt="Profile logo"
              />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1,
              transition: { duration: 0.25, type: "spring", stiffness: 400 },
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <Cart />
          </motion.div>
        </div>
      </div>
      <div className={classes.margin}></div>
    </header>
  );
}
