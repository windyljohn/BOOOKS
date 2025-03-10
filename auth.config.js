//not needed as file is not typescript
//import { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/account",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/admin");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // return Response.redirect(new URL("/admin/add-book", nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
};
