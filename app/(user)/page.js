import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import FeaturedBooks from "@/components/sections/featuredBooks";
import Qoute from "@/components/sections/qoute";
import ByCategory from "@/components/sections/byCategory";
import { FEATURED_CATEGORIES } from "@/db_offline/initdb";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "BOOOKS Official Website | BOOOKS",
  description: "Created by win",
};

async function getFeaturedBooks() {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_SERVER_URL + "/api/books/featured-books"
    );
    return res.json();
  } catch (error) {
    return console.log("Failed to get books", error);
  }
}

export default async function Home() {
  const { featuredBooks } = await getFeaturedBooks();

  return (
    <main>
      <Hero />
      <Features />
      <FeaturedBooks featuredBooks={featuredBooks} />
      <ByCategory
        title="Explore Books by Category"
        category={FEATURED_CATEGORIES}
        typeCategory="categories"
      />
      <Qoute />
    </main>
  );
}
