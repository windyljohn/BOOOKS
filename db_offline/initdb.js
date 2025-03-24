import biographyIcon from "@/icons/category/user.svg";
import businessIcon from "@/icons/category/bar-chart-2.svg";
import designIcon from "@/icons/category/edit-3.svg";
import fictionIcon from "@/icons/category/feather.svg";
import healthIcon from "@/icons/category/heart.svg";
import nonFictionIcon from "@/icons/category/globe.svg";
import scienceIcon from "@/icons/category/thermometer.svg";
import technologyIcon from "@/icons/category/cpu.svg";

export const NAVIGATION = [
  {
    href: "/categories",
    title: "Books",
  },
  {
    href: "/lists",
    title: "Lists",
  },
  {
    href: "/series",
    title: "Series",
  },
  {
    href: "/top-100",
    title: "Top 100",
  },
];

export const FEATURED_CATEGORIES = [
  {
    title: "Biography & Memoirs",
    icon: biographyIcon,
    href: "biographies_and_memoirs",
    book1: "https://m.media-amazon.com/images/I/51m5khg0C1L._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/71doP+hSREL._SY522_.jpg",
    book3: "https://m.media-amazon.com/images/I/61LKD6scbfL._SY522_.jpg",
  },
  {
    title: "Business & Management",
    icon: businessIcon,
    href: "business_and_management",
    book1: "https://m.media-amazon.com/images/I/51DSHKCi1JL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/810u9MkT3SL._SY522_.jpg",
    book3: "https://m.media-amazon.com/images/I/51LBPCyw0qL._SY445_SX342_.jpg",
  },
  {
    title: "Design",
    icon: designIcon,
    href: "design",
    book1: "https://m.media-amazon.com/images/I/412my+uw80L.jpg",
    book2: "https://m.media-amazon.com/images/I/71roZh8lnML._SY522_.jpg",
    book3: "https://m.media-amazon.com/images/I/41+ncOv1ekL._SY445_SX342_.jpg",
  },
  {
    title: "Fiction",
    icon: fictionIcon,
    href: "fiction",
    book1: "https://m.media-amazon.com/images/I/41vxRvS1zyL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/410KouqgU4L._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/51D+-f5UcDL._SY445_SX342_.jpg",
  },
  {
    title: "Health & Fitness",
    icon: healthIcon,
    href: "health_and_fitness",
    book1: "https://m.media-amazon.com/images/I/51OZMrqpfOL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/418OQ6gWywL._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/81gTRv2HXrL._SY522_.jpg",
  },
  {
    title: "Non-Fiction",
    icon: nonFictionIcon,
    href: "non-fiction",
    book1: "https://m.media-amazon.com/images/I/41iq6h1FEjL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/41+30NekJML._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/41VLyddWZDL._SY445_SX342_.jpg",
  },
  {
    title: "Science & Nature",
    icon: scienceIcon,
    href: "science_and_nature",
    book1: "https://m.media-amazon.com/images/I/41cfVMaOY7L._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/41Gjjx8MSFL._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/413M9sGMhsL._SY445_SX342_.jpg",
  },
  {
    title: "Technology",
    icon: technologyIcon,
    href: "technology",
    book1: "https://m.media-amazon.com/images/I/41-J+UlIP2L._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/41jN31qHCKL._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/51GZeaevrgS._SY445_SX342_.jpg",
  },
];

import roseIcon from "@/icons/series/rose-thin.svg";
import planetIcon from "@/icons/series/planet-ringed.svg";
import dragonIcon from "@/icons/series/dragon.svg";
import diceIcon from "@/icons/series/dice.svg";
import boltIcon from "@/icons/series/bolt.svg";
import radioIcon from "@/icons/series/radio-alt.svg";
import rocketIcon from "@/icons/series/rocket.svg";
import ringIcon from "@/icons/series/ring.svg";
import atomIcon from "@/icons/series/atom.svg";

export const SERIES = [
  {
    title: "A Court of Thorns And Roses",
    href: "a_court_of_thorns_and_roses",
    icon: roseIcon,
    book1: "https://m.media-amazon.com/images/I/81U27X4m6EL._SY522_.jpg",
    book2: "https://m.media-amazon.com/images/I/51NFof0I0qL._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/51FgxGdVh5L._SY445_SX342_.jpg",
  },
  {
    title: "Dune",
    href: "dune",
    icon: planetIcon,
    book1: "https://m.media-amazon.com/images/I/41BajT0B3UL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/41JU2LkT45L._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/41uBViwic5L._SY445_SX342_.jpg",
  },
  {
    title: "Game Of Thrones",
    href: "game_of_thrones",
    icon: dragonIcon,
    book1: "https://m.media-amazon.com/images/I/51e9blEl+LL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/51a9m8YgauL._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/51D+-f5UcDL._SY445_SX342_.jpg",
  },
  {
    title: "Harry Potter",
    href: "harry_potter",
    icon: wandIcon,
    book1: "https://m.media-amazon.com/images/I/514HX6+75OL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/513q+PF6cZL._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/517CL0lWQ-L._SY445_SX342_.jpg",
  },
  {
    title: "Incerto",
    href: "incerto",
    icon: diceIcon,
    book1: "https://m.media-amazon.com/images/I/41BrceqW3rL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/51jkBbZzJVL._SY522_.jpg",
    book3: "https://m.media-amazon.com/images/I/311ZkT9OczL._SY445_SX342_.jpg",
  },
  {
    title: "Percy Jackson And The Olympians",
    href: "percy_jackson_and_the_olympians",
    icon: boltIcon,
    book1: "https://m.media-amazon.com/images/I/61dAL6mARBL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/51ZwX2CfoaL._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/51LdV0opNvL._SY445_SX342_.jpg",
  },
  {
    title: "Stranger Things",
    href: "stranger_things",
    icon: radioIcon,
    book1: "https://m.media-amazon.com/images/I/51GuaA0KQeL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/41O4LAaZdtL._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/41MR1YzSk-L._SY445_SX342_.jpg",
  },
  {
    title: "The Hitchhikers Guide To The Galaxy",
    href: "the_hitchhikers_guide_to_the_galaxy",
    icon: rocketIcon,
    book1: "https://m.media-amazon.com/images/I/41gW7uJ2SOL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/51mkUgb4PWL._SY445_SX342_.jpg",
    book3:
      "https://cdn.prod.website-files.com/61cb87c118979013b4f7938b/62b2134576b43bd6cbf1caa3_The%20Hitch-Hiker%27s%20Guide%20to%20The%20Galaxy%20.jpg",
  },
  {
    title: "The Lord Of The Rings",
    href: "the_lord_of_the_rings",
    icon: ringIcon,
    book1: "https://m.media-amazon.com/images/I/41KPaTTRxFL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/41Lr-35uz8L._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/51HNV1J3UyL._SY445_SX342_.jpg",
  },
  {
    title: "Three Body Problem",
    href: "three_body_problem",
    icon: atomIcon,
    book1: "https://m.media-amazon.com/images/I/51DOz4yMk7L._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/51qUdpV5T0L._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/51ohFqjH4lL._SY445_SX342_.jpg",
  },
];

import cryptoIcon from "@/icons/lists/bitcoin-sign.svg";
import personalIcon from "@/icons/lists/head-side-brain.svg";
import leafIcon from "@/icons/lists/leaf.svg";
import suitCaseicon from "@/icons/lists/suitcase.svg";
import wandIcon from "@/icons/lists/magic-wand.svg";
import womanIcon from "@/icons/lists/woman.svg";
import manIcon from "@/icons/lists/man.svg";
import mentalHealthIcon from "@/icons/lists/hands-brain.svg";

export const FEATURED_LISTS = [
  {
    title: "Best Cryptocurrency Books",
    icon: cryptoIcon,
    href: "best_cryptocurrency_books",
    book1: "https://m.media-amazon.com/images/I/51TDyaEvhcL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/513Y9o+S-HL._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/41x6NvXWekS._SY445_SX342_.jpg",
  },
  {
    title: "Best Personal Development Books",
    icon: personalIcon,
    href: "best_personal_development_books",
    book1: "https://m.media-amazon.com/images/I/81ANaVZk5LL._SY522_.jpg",
    book2: "https://m.media-amazon.com/images/I/41uJR7e6FYL._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/91ZEUnFeUSL._SY445_SX342_.jpg",
  },
  {
    title: "Best Environment Books",
    icon: leafIcon,
    href: "best_environment_books",
    book1: "https://m.media-amazon.com/images/I/4190MeeTfyL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/31o1HlWIJUL._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/41VJZ8WUW7L._SY445_SX342_.jpg",
  },
  {
    title: "Books Billionaires Read",
    icon: suitCaseicon,
    href: "books_billionaires_read",
    book1: "https://m.media-amazon.com/images/I/51DSHKCi1JL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/31SJUjkn4TL._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/41HY51DngNL._SY445_SX342_.jpg",
  },
  {
    title: "Best Fiction Books",
    icon: wandIcon,
    href: "best_fiction_books",
    book1: "https://m.media-amazon.com/images/I/81TLiZrasVL._SY522_.jpg",
    book2: "https://m.media-amazon.com/images/I/81IS65EOrvL._SY522_.jpg",
    book3: "https://m.media-amazon.com/images/I/71ATAtJHP0L._SY522_.jpg",
  },
  {
    title: "Best Books For Women",
    icon: womanIcon,
    href: "best_books_for_women",
    book1: "https://m.media-amazon.com/images/I/31SIqrjGdgL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/4182X3CC8NL._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/31zzmiNcUuL._SY445_SX342_.jpg",
  },
  {
    title: "Best Books For Men",
    icon: manIcon,
    href: "best_books_for_men",
    book1: "https://m.media-amazon.com/images/I/41-zfEP60QL._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/31hSni7bS6L._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/71CXmQNVKzL._SY522_.jpg",
  },
  {
    title: "Best Mental Health Books",
    icon: mentalHealthIcon,
    href: "best_mental_health_books",
    book1: "https://m.media-amazon.com/images/I/41dABwfpV-L._SY445_SX342_.jpg",
    book2: "https://m.media-amazon.com/images/I/51FEq4osf7L._SY445_SX342_.jpg",
    book3: "https://m.media-amazon.com/images/I/814x9YyN0LL._SY522_.jpg",
  },
];

export const CATEGORIES = [
  {
    title: "All Books",
    href: "/categories",
  },
  {
    title: "Arts & Entertainment",
    href: "/categories/arts_and_entertainment",
  },
  {
    title: "Biographies & Memoirs",
    href: "/categories/biographies_and_memoirs",
  },
  {
    title: "Business & Management",
    href: "/categories/business_and_management",
  },
  {
    title: "Design",
    href: "/categories/design",
  },
  {
    title: "Economics & Politics",
    href: "/categories/economics_and_politics",
  },
  {
    title: "Fiction",
    href: "/categories/fiction",
  },
  {
    title: "Health & Fitness",
    href: "/categories/health_and_fitness",
  },
  {
    title: "History",
    href: "/categories/history",
  },
  {
    title: "Money & Investing",
    href: "/categories/money_and_investing",
  },
  {
    title: "Non-Fiction",
    href: "/categories/non-fiction",
  },
  {
    title: "Philosophy",
    href: "/categories/philosophy",
  },
  {
    title: "Science & Nature",
    href: "/categories/science_and_nature",
  },
  {
    title: "Self Improvement",
    href: "/categories/self_improvement",
  },
  {
    title: "Spirituality & Religion",
    href: "/categories/spirituality_and_religion",
  },
  {
    title: "Technology",
    href: "/categories/technology",
  },
];

export const FOOTER_MENU = [
  { title: "Home", href: "/" },
  { title: "Books", href: "/categories" },
  { title: "Lists", href: "/lists" },
  { title: "Series", href: "/series" },
  { title: "Top 100", href: "/top-100" },
];
