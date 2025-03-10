import classes from "./featuresItem.module.css";
import Image from "next/image";

export default function FeaturesItem({ icon, title, text, alt }) {
  return (
    <div className={classes.feature}>
      <Image src={icon} className={classes.icon} alt={alt} />
      <h3 className={classes.item}>{title}</h3>
      <p className={classes.text}>{text}</p>
    </div>
  );
}
