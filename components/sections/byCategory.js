import BookCategory from "./bookCategory";

import classes from "./ByCategory.module.css";

export default function ByCategory({ title, category, typeCategory }) {
  return (
    <section className={classes.section}>
      <h2 className={classes.header}>{title}</h2>
      <div className={classes.wrapper}>
        {category.map((category) => (
          <BookCategory
            key={category.title}
            typeCategory={typeCategory}
            {...category}
          />
        ))}
      </div>
    </section>
  );
}
