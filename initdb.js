const sql = require("better-sqlite3");
const db = sql("books.db");

const featuredBooks = [
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    series: "harry potter",
    href: "sapiens",
    price: 12.99,
    image: "/images/image1.webp",
    top100: "yes",
    list: "best cryptocurrency books",
    category: "non-fiction",
    summary: `100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens.

How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come?

In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?

Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.`,
  },
  {
    title: "Man's Search for Meaning",
    href: "mans-search-for-meaning",
    series: "game of thrones",
    author: "Victor E. Frankl",
    price: 12.99,
    image: "/images/image2.webp",
    top100: "yes",
    category: "non-fiction",
    list: "best cryptocurrency books",
    summary: `100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens.

How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come?

In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?

Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.`,
  },
  {
    title: "Principles",
    href: "principles",
    series: "game of thrones",
    author: "Ray Dalio",
    price: 12.99,
    list: "best cryptocurrency books",
    image: "/images/image3.webp",
    top100: "yes",
    category: "non-fiction",
    summary: `100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens.

How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come?

In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?

Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.`,
  },
  {
    title: "Zero to One",
    href: "zero-to-one",
    author: "Peter Thiel",
    series: "a court of thorns and roses",
    price: 10.99,
    image: "/images/image4.webp",
    top100: "yes",
    list: "best cryptocurrency books",
    category: "non-fiction",
    summary: `100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens.

How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come?

In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?

Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.`,
  },
  {
    title: "Thinking, Fast and Slow",
    href: "thinking-fast-and-slow",
    series: "a court of thorns and roses",
    author: "Daniel Kahneman",
    price: 10.99,
    image: "/images/image5.webp",
    top100: "yes",
    list: "best cryptocurrency books",
    category: "non-fiction",
    summary: `100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens.

How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come?

In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?

Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.`,
  },
  {
    title: "The Hard Things About Hard Things",
    href: "the-hard-things-about-hard-things",
    series: "harry potter",
    author: "Viktor E. Frankl",
    price: 10.99,
    image: "/images/image6.webp",
    top100: "yes",
    list: "best cryptocurrency books",
    category: "non-fiction",
    summary: `100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens.

How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come?

In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?

Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.`,
  },
  {
    title: "The 4-Hour WorkWeek",
    href: "the-4-hour-workweek",
    series: "a court of thorns and roses",
    author: "Tim Ferriss",
    list: null,
    price: 10.99,
    image: "/images/image7.webp",
    top100: "yes",
    category: "non-fiction",
    summary: `100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens.

How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come?

In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?

Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.`,
  },
  {
    title: "Influence",
    href: "influence",
    series: "harry potter",
    author: "Robert B. Cialdini, PhD",
    list: "best cryptocurrency books",
    price: 10.99,
    image: "/images/image8.webp",
    top100: "yes",
    category: "non-fiction",
    summary: `100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens.

How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come?

In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?

Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.`,
  },
  {
    title: "Shoe Dog",
    href: "shoe-dog",
    series: "harry potter",
    author: "Phil Knight",
    price: 10.99,
    image: "/images/image9.webp",
    top100: "yes",
    list: "",
    category: "arts & entertainment",
    summary: `100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens.

How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come?

In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?

Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.`,
  },
  {
    title: "Atlas Shrugged",
    href: "atlas-shrugged",
    series: "harry potter",
    author: "Ayn Rand",
    list: "",
    price: 10.99,
    image: "/images/image10.jpeg",
    top100: "yes",
    category: "fiction",
    summary: `100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens.

How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come?

In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?

Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.`,
  },
  {
    title: "Meditation",
    href: "meditation",
    series: "harry potter",
    author: "marcus Aurelius",
    price: 19.99,
    list: "",
    top100: "yes",
    image: "/images/image11.webp",
    category: "fiction",
    summary: `100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens.

How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come?

In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?

Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.`,
  },
  {
    title: "The Alchemist",
    href: "the-alchemist",
    series: "the hitchhikers guide to the galaxy",
    author: "Paulo Coelha",
    price: 10.99,
    list: "",
    image: "/images/image12.webp",
    top100: "yes",
    category: "fiction",
    summary: `100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens.

How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come?

In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?

Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.`,
  },
];

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS books(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    href TEXT NOT NULL UNIQUE,
    list TEXT,
    series TEXT,
    top100 TEXT,
    author TEXT NOT NULL,
    price INTEGER NOT NULL,
    image TEXT NOT NULL,
    category TEXT NOT NULL,
    summary TEXT NOT NULL
  )
`
).run();

async function initData() {
  const stmt = db.prepare(`
    INSERT INTO books 
    VALUES(
      null,
      @title,
      @href,
      @list,
      @series,
      @top100,
      @author,
      @price,
      @image,
      @category,
      @summary
    )
  `);

  for (const book of featuredBooks) {
    stmt.run(book);
  }
}

initData();
