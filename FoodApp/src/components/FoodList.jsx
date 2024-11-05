import FootItem from "./FoodItem";
export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <FootItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
