import DishCard from "./DishCard";

const FoodGrid = ({ foodItems, onItemClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {foodItems.length > 0 ? (
        foodItems.map((item) => (
          <div key={item.idMeal} onClick={() => onItemClick(item.idMeal)}>
            <DishCard item={item} />
          </div>
        ))
      ) : (
        <p className="col-span-full text-center">No items available.</p>
      )}
    </div>
  );
};

export default FoodGrid;
