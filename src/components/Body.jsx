import { useState, useEffect } from "react";
import { fetchIndianMenu, fetchFilteredMenu } from "../utils/api";
import FilterSort from "./FilterSort";
import FoodGrid from "./FoodGrid";
import Shimmer from "./Shimmer";
const Body = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [filter, setFilter] = useState("Indian");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetchIndianMenu();
        setFoodItems(response.meals || []);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchFoodItems();
  }, []);

  const handleFilterChange = async (filterValue) => {
    setFilter(filterValue);
    
    if (filterValue) {
      try {
        const response = await fetchFilteredMenu(filterValue);
        setFoodItems(response.meals || []);
      } catch (error) {
        console.error("Error fetching filtered menu:", error);
      }
    }
  };

  const handleSortChange = (sortValue) => {
    setSort(sortValue);
    if (sortValue) {
      const sortedItems = [...foodItems].sort((a, b) =>
        sortValue === "a-z"
          ? a.strMeal.localeCompare(b.strMeal)
          : b.strMeal.localeCompare(a.strMeal)
      );
      setFoodItems(sortedItems);
    }
  };

  
  if(foodItems.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <FilterSort
        filter={filter}
        sort={sort}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <FoodGrid foodItems={foodItems}  />
      
    </div>
  );
};

export default Body;
