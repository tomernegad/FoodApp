import FootItem from "./FoodItem";
export default function FoodList({ foodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <FootItem key={food.id} food={food} />
      ))}
    </div>
  );
}
