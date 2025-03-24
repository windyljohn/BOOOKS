"use client";

import React, { useRef, useState } from "react";

import classes from "./bookForm.module.css";
import checkIcon from "@/icons/check.png";
import Image from "next/image";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function BookForm() {
  const startingBookData = {
    title: "",
    author: "",
    image: "",
    price: "",
    category: [],
    tags: [],
    series: "",
    blurb: "",
  };

  const [bookData, setBookData] = useState(startingBookData);
  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useRef(null);

  function handleClose() {
    setSuccess(false);
  }

  function handleOpen() {
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  }

  function handleChange(e) {
    const category = document.getElementsByName("category");
    const value = e.target.value;
    const targetName = e.target.name;
    const targetType = e.target.type;
    let val;

    if (targetType == "checkbox") {
      val = [...bookData[targetName]];
      if (val.includes(value)) {
        val = val.filter((x) => x != value);
      } else {
        val.push(value);
      }
    }

    setComplete(false);

    setBookData((prev) => ({
      ...prev,
      [targetName]: targetType == "checkbox" ? val : value,
    }));

    category.forEach((x) => (x.checked == true ? setComplete(true) : null));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if (complete) {
      const res = await fetch("/api/books", {
        method: "POST",
        body: JSON.stringify({ bookData }),
        "content-type": "application/json",
      });

      if (res.ok) {
        form.current.reset();
        setBookData(startingBookData);
        handleOpen();
      }
    } else {
      setIsLoading(false);
      return;
    }

    setComplete(false);
    setIsLoading(false);
  }

  return (
    <section className={classes.section}>
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
            exit={{ y: -30, opacity: 0, transition: { duration: 0.3 } }}
            className={classes.success}
          >
            <div className={classes["success-container"]}>
              <Image src={checkIcon} height={50} width={50} alt="Check Icon" />
              <div className={classes.text}>
                <p className={classes["success-header"]}>Success</p>
                <p className={classes["success-text"]}>
                  Book has been successfully added!
                </p>
              </div>
              <div className={classes.close} onClick={handleClose}>
                CLOSE
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <form ref={form} className={classes.form} onSubmit={handleSubmit}>
        <p className={classes.header}>Add Book</p>
        <div className={classes.grid}>
          <div className={classes.wrapper}>
            <label className={classes.title}>Title</label>
            <input
              className={classes.input}
              id="title"
              name="title"
              type="text"
              onChange={handleChange}
              required
              value={bookData.title}
            />
          </div>
          <div className={classes.wrapper}>
            <label className={classes.title} htmlFor="author">
              Author
            </label>
            <input
              className={classes.input}
              id="author"
              name="author"
              type="text"
              onChange={handleChange}
              required
              value={bookData.author}
            />
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.wrapper}>
            <label className={classes.title} htmlFor="image">
              Image link
            </label>
            <input
              className={classes.input}
              id="image"
              name="image"
              type="url"
              onChange={handleChange}
              required={true}
              value={bookData.image}
            />
          </div>
          <div className={classes.wrapper}>
            <label className={classes.title} htmlFor="price">
              Price
            </label>
            <input
              className={classes.input}
              id="price"
              name="price"
              type="number"
              onChange={handleChange}
              required={true}
              value={bookData.price}
            />
          </div>
        </div>
        <div className={classes.wrapper}>
          <label className={classes.title} htmlFor="featured">
            Category <span className={classes.alert}>(Select at least 1)</span>
          </label>
          <div className={classes.container}>
            <div className={classes["sub-container"]}>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="arts and entertainment"
                  name="category"
                  value="arts & entertainment"
                  onChange={handleChange}
                />
                <label htmlFor="arts and entertainment">
                  Arts & Entertainment
                </label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="biographies & memoirs"
                  name="category"
                  value="biographies & memoirs"
                  onChange={handleChange}
                />
                <label htmlFor="biographies & memoirs">
                  Biographies & Memoirs
                </label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="business & management"
                  name="category"
                  value="business & management"
                  onChange={handleChange}
                />
                <label htmlFor="business & management">
                  Business & Management
                </label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="design"
                  name="category"
                  value="design"
                  onChange={handleChange}
                />
                <label htmlFor="design">Design</label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="economics & politics"
                  name="category"
                  value="economics & politics"
                  onChange={handleChange}
                />
                <label htmlFor="economics & politics">
                  Economics & Politics
                </label>
              </div>
            </div>
            <div className={classes["sub-container"]}>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="fiction"
                  name="category"
                  value="fiction"
                  onChange={handleChange}
                />
                <label htmlFor="fiction">Fiction</label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="health & fitness"
                  name="category"
                  value="health & fitness"
                  onChange={handleChange}
                />
                <label htmlFor="health & fitness">Health & Fitness</label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="history"
                  name="category"
                  value="history"
                  onChange={handleChange}
                />
                <label htmlFor="history">History</label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="money & investing"
                  name="category"
                  value="money & investing"
                  onChange={handleChange}
                />
                <label htmlFor="money & investing">Money & Investing</label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="non-fiction"
                  name="category"
                  value="non-fiction"
                  onChange={handleChange}
                />
                <label htmlFor="non-fiction">Non-Fiction</label>
              </div>
            </div>
            <div className={classes["sub-container"]}>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="philosophy"
                  name="category"
                  value="philosophy"
                  onChange={handleChange}
                />
                <label htmlFor="philosophy">Philosophy</label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="science & nature"
                  name="category"
                  value="science & nature"
                  onChange={handleChange}
                />
                <label htmlFor="science & nature">Science & Nature</label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="self improvement"
                  name="category"
                  value="self improvement"
                  onChange={handleChange}
                />
                <label htmlFor="self improvement">Self Improvement</label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="spirituality & religion"
                  name="category"
                  value="spirituality & religion"
                  onChange={handleChange}
                />
                <label htmlFor="spirituality & religion">
                  Spirituality & Religion
                </label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="technology"
                  name="category"
                  value="technology"
                  onChange={handleChange}
                />
                <label htmlFor="technology">Technology</label>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapper}>
          <label className={classes.title} htmlFor="tags">
            Tags
          </label>
          <div className={classes.container}>
            <div className={classes["sub-container"]}>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="best cryptocurrency books"
                  name="tags"
                  onChange={handleChange}
                  value="best cryptocurrency books"
                />
                <label htmlFor="best cryptocurrency books">
                  Best Cryptocurrency Book
                </label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="best personal development books"
                  name="tags"
                  onChange={handleChange}
                  value="best personal development books"
                />
                <label htmlFor="best personal development books">
                  Best Personal Development Book
                </label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="best environment books"
                  name="tags"
                  onChange={handleChange}
                  value="best environment books"
                />
                <label htmlFor="best environment books">
                  Best Environment Book
                </label>
              </div>
            </div>
            <div className={classes["sub-container"]}>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="books billionaires read"
                  name="tags"
                  onChange={handleChange}
                  value="books billionaires read"
                />
                <label htmlFor="books billionaires read">
                  Books Billionaires Read
                </label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="best fiction books"
                  name="tags"
                  onChange={handleChange}
                  value="best fiction books"
                />
                <label htmlFor="best fiction books">Best Fiction Book</label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="best books for women"
                  name="tags"
                  onChange={handleChange}
                  value="best books for women"
                />
                <label htmlFor="best books for women">
                  Best Book For Women
                </label>
              </div>
            </div>
            <div className={classes["sub-container"]}>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="best books for men"
                  name="tags"
                  onChange={handleChange}
                  value="best books for men"
                />
                <label htmlFor="best books for men">Best Book For Men</label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="best mental health books"
                  name="tags"
                  onChange={handleChange}
                  value="best mental health books"
                />
                <label htmlFor="best mental health books">
                  Best Mental Health Book
                </label>
              </div>
              <div className={classes.checkbox}>
                <input
                  type="checkbox"
                  id="top 100"
                  name="tags"
                  onChange={handleChange}
                  value="top 100"
                />
                <label htmlFor="top 100">Top 100</label>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.wrapper}>
          <label className={classes.title} htmlFor="series">
            Series
          </label>
          <input
            className={classes.input}
            id="series"
            name="series"
            type="text"
            onChange={handleChange}
            value={bookData.series}
          />
        </div>
        <div className={classes.wrapper}>
          <label className={classes.title} htmlFor="blurb">
            Blurb
          </label>
          <textarea
            className={classes.input}
            id="blurb"
            name="blurb"
            onChange={handleChange}
            required={true}
            value={bookData.blurb}
            rows={5}
          />
        </div>
        <button className={classes.button} disabled={isLoading || !complete}>
          {isLoading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </section>
  );
}
