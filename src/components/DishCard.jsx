const DishCard = ({ item }) => {
  const { strMeal, strMealThumb } = item;
  const randomRating = (Math.random() * 5).toFixed(1);

  return (
    <div className="flex justify-center">
      <div className="res-card m-4 p-4 w-full max-w-sm bg-white rounded-md cursor-pointer border border-blue-400 shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          className="res-image w-full h-48 object-cover rounded-md"
          src={strMealThumb}
          alt={`${strMeal} image`}
        />
        <div className="flex justify-between items-center mt-4">
          <h3 className="font-bold font-mono text-lg sm:text-xl">{strMeal}</h3>
          <div className="font-bold font-mono text-sm sm:text-md">
            <p>{randomRating} ⭐</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
