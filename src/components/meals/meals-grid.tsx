import { IMeal } from "@/models/meal";
import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

interface IProps {
  meals: IMeal[];
}

export default function MealsGrid({ meals }: IProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
