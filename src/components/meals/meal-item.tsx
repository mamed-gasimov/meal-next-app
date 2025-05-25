import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import burger from "@/assets/burger.jpg";

import classes from "./meal-item.module.css";
import { images } from "../image-slideshow/images";

interface IProps {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: IProps) {
  const c = image.split(".")[0];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const b = images[c] as StaticImageData;

  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={b || burger} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
