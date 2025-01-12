import { useState } from "react";

const MealDetails = ({ mealDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMore = () => {
    setIsExpanded(true);
  };

  return (
    <div className="lg:w-1/2 flex flex-col justify-start px-4">
      <h2 className="text-3xl font-semibold text-gray-800 text-center lg:text-left mb-4">
        {mealDetails.strMeal}
      </h2>
      <p className="text-md text-gray-600 text-center lg:text-left mb-2">
        <strong>Category:</strong> {mealDetails.strCategory}
      </p>
      <p className="text-md text-gray-600 text-center lg:text-left mb-2">
        <strong>Area:</strong> {mealDetails.strArea}
      </p>

      {/* Instructions Section */}
      <div className="mb-4 overflow-y-auto max-h-[60vh]">
        <strong className="text-lg text-gray-800">Instructions:</strong>
        <p className="text-md text-gray-700 text-center lg:text-left mb-4">
          {isExpanded
            ? mealDetails.strInstructions
            : `${mealDetails.strInstructions.substring(0, 200)}...`}
        </p>
        {!isExpanded && (
          <button
            onClick={handleShowMore}
            className="text-blue-500 font-semibold hover:underline text-center lg:text-left"
          >
            Show More
          </button>
        )}
      </div>

      <a
        href={mealDetails.strSource}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 font-semibold hover:underline text-center lg:text-left"
      >
        Full Recipe
      </a>
    </div>
  );
};

export default MealDetails;
