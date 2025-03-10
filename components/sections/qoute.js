import classes from "./qoute.module.css";

export default function Qoute() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <p className={classes.text}>
          Warren Buffet was once asked about the key to success, he pointed to a
          stack of nearby books and said. "Read 500 pages like this every day.
          That's how knowledge works. It builds up, like compound interest. All
          of you can do it, but I guarantee not many of you will do it."
        </p>
      </div>
    </section>
  );
}
