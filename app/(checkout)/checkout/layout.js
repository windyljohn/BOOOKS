"use client";

import "./globals.css";
import Navigation from "./_components/navigation";

export default function CheckoutLayout({ children }) {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
}
