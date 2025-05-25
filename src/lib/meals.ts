import { IMeal } from "@/models/meal";
import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals(): Promise<IMeal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.prepare("SELECT * FROM meals").all() as IMeal[];
}

export function getMeal(slug: string): IMeal {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as IMeal;
}
