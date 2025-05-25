import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { IMeal } from "@/models/meal";

const db = sql("meals.db");

export async function getMeals(): Promise<IMeal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.prepare("SELECT * FROM meals").all() as IMeal[];
}

export function getMeal(slug: string): IMeal {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as IMeal;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const bufferedImage = await meal.image.arrayBuffer();
  console.log({ bufferedImage });

  meal.image = fileName;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}
