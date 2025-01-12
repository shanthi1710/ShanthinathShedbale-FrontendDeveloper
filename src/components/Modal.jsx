import { useEffect, useState } from "react";
import MealDetails from "./MealDetails";
import MealImage from "./MealImage";
import { fetchMealDetails } from "../utils/api";
const Modal = ({ itemId, onClose }) => {
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetchMealDetails(itemId);
        setMealDetails(response.meals[0]);
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    };

    if (itemId) {
      fetchDetail();
    }
  }, [itemId]);

  if (!mealDetails) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 overflow-auto"
    >
      <div
        className="bg-white p-6 rounded-lg w-full max-w-full lg:max-w-5xl shadow-lg overflow-auto max-h-[90vh] flex flex-col lg:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 text-2xl font-bold hover:text-red-500"
        >
          ❌
        </button>

        {/* Image Section */}
        <MealImage src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />

        {/* Details Section */}
        <MealDetails mealDetails={mealDetails} />
      </div>
    </div>
  );
};

export default Modal;
