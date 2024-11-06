import { useEffect, useState } from "react";

export default function FoodDeatails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "e0d652513a5f4f5bb01aff0c319b7083";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <h1> {food.title}</h1>
      <div>
        <img src={food.image} />
        <div>
          <strong> 🕰️ {food.readyInMinutes} Minutes </strong>
          <span>
            👨‍👩‍👧‍👦<strong> Serves {food.servings} </strong>
          </span>
          <span>
            {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non - Vegetarian"}
          </span>
          <span> {food.vegan ? "🐮 Vegan" : ""} </span>
        </div>
        <div>
          💲<span> {food.pricePerServing / 100} Per serving </span>
        </div>
      </div>
      <div>
        <h2> Instructions</h2>
        {isLoading ? (
          <p> Loading... </p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => (
            <li> {step.step} </li>
          ))
        )}
      </div>
    </div>
  );
}
