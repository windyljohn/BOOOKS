import ByCategory from "@/components/sections/byCategory";

import { SERIES } from "@/db_offline/initdb";

export const metadata = {
  title: "Book Series | BOOOKS",
  description: "Created by win",
};

export default function SeriesPage() {
  return (
    <ByCategory title="All Series" category={SERIES} typeCategory="series" />
  );
}
