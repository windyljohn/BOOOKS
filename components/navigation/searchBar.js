"use client";

import Link from "next/link";
import Image from "next/image";
import classes from "./searchBar.module.css";

import searchIcon from "@/icons/search.svg";
import closeIcon from "@/icons/close.svg";
import clearIcon from "@/icons/clear.svg";

import BookItem from "../sections/bookItem";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useDebounce } from "@uidotdev/usehooks";

export default function SearchBar({ ref, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [initData, setInitData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const router = useRouter();

  function useLocalstorageState(key, defaultValue) {
    const [value, setValue] = useState(defaultValue);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
      const localstorageValue = localStorage.getItem(key);

      if (localstorageValue !== null) {
        setValue(JSON.parse(localstorageValue));
      }
      setIsInitialized(true);
    }, [key]);

    useEffect(() => {
      if (isInitialized) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    }, [isInitialized, key, value]);

    return [value, setValue];
  }

  const [recentSearch, setRecentSearch] = useLocalstorageState(
    "recent-search",
    []
  );

  useEffect(() => {
    async function fetchInitData() {
      const res = await fetch(`http://localhost:3000/api/books/`);
      const { books } = await res.json();
      setInitData(books);
    }

    fetchInitData();
  }, []);

  useEffect(() => {
    async function fetchBooks() {
      setIsSearching(true);

      if (searchTerm.trim() == "") {
        setSearchResult(null);
      }

      if (debouncedSearchTerm && searchTerm.trim() != "") {
        const res = await fetch(
          `http://localhost:3000/api/books/search/${debouncedSearchTerm}`
        );
        const { books } = await res.json();
        books.length = Math.min(books.length, 8);
        setSearchResult(books);
      }

      setIsSearching(false);
    }
    fetchBooks();
  }, [debouncedSearchTerm]);

  function handleEnter() {
    if (searchTerm.trim() !== "") {
      onClose();

      if (!recentSearch.includes(searchTerm.trim())) {
        setRecentSearch((prevSearchTerm) => {
          const updatedSearchTerms = [...prevSearchTerm];
          updatedSearchTerms.unshift(searchTerm.trim());
          return updatedSearchTerms;
        });
      }

      router.push(`/search/${searchTerm}`);
    }
  }

  function handleRecent(searchTerm) {
    setSearchTerm(searchTerm);
  }

  return (
    <>
      <div className={classes.overlay}></div>
      <motion.section
        ref={ref}
        className={classes.section}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, transition: { duration: 0.2 }, y: 0 }}
        exit={{ opacity: 0, transition: { duration: 0.2 }, y: -100 }}
      >
        <div className={classes["search-header"]}>
          <div className={classes["header-input-wrapper"]}>
            <Image
              className={classes["search-icon"]}
              src={searchIcon}
              alt="search icon"
            />
            <input
              className={classes.input}
              id="input"
              placeholder="Search"
              onKeyDown={(e) => (e.key === "Enter" ? handleEnter() : null)}
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            {searchTerm !== "" && (
              <Image
                src={clearIcon}
                className={classes["clear-icon"]}
                alt="clear icon"
                onClick={() => setSearchTerm("")}
              />
            )}
            <Image
              className={classes["close-icon"]}
              src={closeIcon}
              alt="close icon"
              onClick={onClose}
            />
          </div>
        </div>
        <div className={classes["search-content"]}>
          {searchResult?.length == 0 ? (
            <>
              <div className={classes["content-recent"]}>
                <p className={classes["recent-header-no-result"]}>
                  No matching results
                </p>
                <div className={classes["no-result"]}>
                  <p>
                    Your search <span>"{searchTerm}" </span>
                    did not return any results
                  </p>
                  <p>
                    Check your spelling or try again with a less specific
                    keyword.
                  </p>
                </div>
              </div>
              <div>
                <div className={classes["books-header"]}>
                  <p className={classes["books-header-title"]}>
                    Recommended Books
                  </p>
                  <Link href="/top-100" onClick={onClose}>
                    See all
                  </Link>
                </div>
                <div className={classes["books-init"]}>
                  {initData.slice(6, 12).map((book) => (
                    <div onClick={onClose} key={book.title}>
                      <BookItem key={book.title} {...book} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {searchResult ? (
                <div className={classes["content-books"]}>
                  <div className={classes["books-header"]}>
                    <p className={classes["books-header-title"]}>Books</p>
                    <a onClick={() => handleEnter()}>See all</a>
                  </div>
                  <div className={classes["books-init"]}>
                    {searchResult.map((book) => (
                      <div onClick={onClose} key={book.title}>
                        <BookItem key={book.title} {...book} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div className={classes["recent-search"]}>
                    <p className={classes["recent-header"]}>Recent Search</p>
                    <div className={classes["recents"]}>
                      {recentSearch?.slice(0, 5).map((recent, iter) => (
                        <li key={iter} onClick={() => handleRecent(recent)}>
                          {recent}
                        </li>
                      ))}
                    </div>
                  </div>
                  <div className={classes["content-books"]}>
                    <div className={classes["books-header"]}>
                      <p className={classes["books-header-title"]}>Books</p>
                      <Link href="/top-100" onClick={onClose}>
                        See all
                      </Link>
                    </div>
                    <div className={classes["books-init"]}>
                      {initData.slice(0, 7).map((book) => (
                        <div onClick={onClose} key={book.title}>
                          <BookItem key={book.title} {...book} />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </motion.section>
    </>
  );
}
