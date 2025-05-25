import burger from "@/assets/burger.jpg";
import curry from "@/assets/curry.jpg";
import dumplings from "@/assets/dumplings.jpg";
import macncheese from "@/assets/macncheese.jpg";
import pizza from "@/assets/pizza.jpg";
import schnitzel from "@/assets/schnitzel.jpg";
import tomatoSalad from "@/assets/tomato-salad.jpg";

export const imagesForSlideshow = [
  { image: burger, alt: "A delicious, juicy burger" },
  { image: curry, alt: "A delicious, spicy curry" },
  { image: dumplings, alt: "Steamed dumplings" },
  { image: macncheese, alt: "Mac and cheese" },
  { image: pizza, alt: "A delicious pizza" },
  { image: schnitzel, alt: "A delicious schnitzel" },
  { image: tomatoSalad, alt: "A delicious tomato salad" },
];

export const images = {
  burger,
  curry,
  dumplings,
  macncheese,
  pizza,
  schnitzel,
  ["tomato-salad"]: tomatoSalad,
};
