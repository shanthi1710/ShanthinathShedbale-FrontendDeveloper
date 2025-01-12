const DishCard = ({ item }) => {
    const { strMeal, strMealThumb } = item;
    const randomRating = (Math.random() * 5).toFixed(1);
  
    return (
      <div>
        <div className="res-card m-4 p-4 w-[80%] bg-white rounded-md cursor-pointer border border-blue-400">
          <img className="res-image rounded-md" src={strMealThumb} alt="food-image" />
          <div className="flex justify-between">
            <h3 className="font-bold font-mono py-4 text-xl">{strMeal}</h3>
            <div className="font-bold font-mono py-4 px-0 text-md">
              <p>{randomRating} ⭐</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DishCard;
  