"use server";

import { redirect } from "next/navigation";

import { revalidatePath } from "next/cache";
import { IMeal } from "@/models/meal";
import { saveMeal } from "./meals";

function isInvalidText(text: string) {
  return !text || text.trim() === "";
}

export async function shareMeal(
  _prevState: { message: string },
  formData: FormData
) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  } as IMeal;

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
