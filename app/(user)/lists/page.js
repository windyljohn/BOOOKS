import ByCategory from "@/components/sections/byCategory";

import { FEATURED_LISTS } from "@/db_offline/initdb";

export const metadata = {
  title: "Book Lists | BOOOKS",
  description: "Created by win",
};

export default function CuratedLists() {
  return (
    <>
      <ByCategory
        title="Featured Curated Lists"
        category={FEATURED_LISTS}
        typeCategory="lists"
      />
    </>
  );
}
