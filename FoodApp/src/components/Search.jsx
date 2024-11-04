import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "5211d3a099874e21b36be10421977c9d"; //classapi

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
      />{" "}
    </div>
  );
}
