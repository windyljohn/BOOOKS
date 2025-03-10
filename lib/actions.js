"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(prevState, formData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Incorrect email or password.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function signOutFunction() {
  await signOut({ redirectTo: "/account" });
}
