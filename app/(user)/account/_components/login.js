"use client";

import Link from "next/link";
import Image from "next/image";

import classes from "./login.module.css";
import backgroundImage from "@/images/background-image-account.jpg";

import { useActionState, useEffect } from "react";
import { authenticate } from "@/lib/actions";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin/add-book";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  useEffect(() => {
    document.getElementById("email").focus();
  });

  return (
    <section className={classes.section}>
      <Image
        className={classes["background-image"]}
        src={backgroundImage}
        alt="Books greyscale"
      />
      <form action={formAction} className={classes.container}>
        <div className={classes.header}>
          <h3>Login</h3>
          <p>Please enter your email and password:</p>
        </div>
        <div className={classes.form}>
          <input
            placeholder="Email address"
            id="email"
            type="email"
            name="email"
            required
          />
          <input
            placeholder="Password"
            id="password"
            type="password"
            name="password"
            minLength="5"
            required
          />
          {errorMessage && <p className={classes.invalid}>{errorMessage}</p>}
        </div>
        <div className={classes["reset-password"]}>
          <Link className={classes.links} href="">
            Forgot password?
          </Link>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <button className={classes.button} type="submit" disabled={isPending}>
          Log in
        </button>
        <div className={classes["create-account"]}>
          <p>
            Don't have an account?
            <Link className={classes.links} href="#">
              Create one
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}
