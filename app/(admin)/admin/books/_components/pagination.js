"use client";

import classes from "./pagination.module.css";

import arrowRight from "@/icons/right-arrow.svg";
import arrowLeft from "@/icons/left-arrow.svg";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ length, perPage }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const page = searchParams.get("page") ?? "1";
  const totalPage = Math.ceil(length / perPage);

  function handleForward() {
    router.replace(`${pathName}/?page=${Number(page) + 1}`);
  }

  function handleBackward() {
    router.replace(`${pathName}/?page=${Number(page) - 1}`);
  }

  return (
    <div className={classes.pagination}>
      <p className={classes.page}>
        {page} / {totalPage ? totalPage : 1}
      </p>
      <div className={classes.controls}>
        <button onClick={handleBackward} disabled={Number(page) === 1}>
          <Image className={classes.icon} src={arrowLeft} alt="left arrow" />
        </button>
        <button onClick={handleForward} disabled={Number(page) === totalPage}>
          <Image className={classes.icon} src={arrowRight} alt="right-arrow" />
        </button>
      </div>
    </div>
  );
}
