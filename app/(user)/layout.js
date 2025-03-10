"use client";

import "./globals.css";

import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";

export default function RootLayout({ children }) {
  return (
    <main>
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}
