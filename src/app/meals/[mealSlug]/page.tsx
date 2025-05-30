import Image from "next/image";
import { notFound } from "next/navigation";
import burger from "@/assets/burger.jpg";

import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { images } from "@/components/image-slideshow/images";

interface IProps {
  params: {
    mealSlug: string;
  };
}

export async function generateMetadata({ params }: IProps) {
  const mealSlug = (await params).mealSlug;
  const meal = getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealDetailsPage({ params }: IProps) {
  const mealSlug = (await params).mealSlug;
  const meal = getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  const imgName = meal.image.split(".")[0];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const localImg = images[imgName] as StaticImageData;

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={localImg || burger} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
