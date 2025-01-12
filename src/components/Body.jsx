import { useState, useEffect } from "react";
import { fetchIndianMenu, fetchFilteredMenu } from "../utils/api";
import FilterSort from "./FilterSort";
import FoodGrid from "./FoodGrid";
import Shimmer from "./Shimmer";
import Pagination from "./Pagination";
import Modal from "./Modal";
const Body = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [filter, setFilter] = useState("Indian");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const itemsPerPage = 8;

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
    setCurrentPage(1);
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

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleItemClick = (itemId) => setSelectedItem(itemId);

  const closeModal = () => setSelectedItem(null);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foodItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(foodItems.length / itemsPerPage);

  if (foodItems.length === 0) {
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
      <FoodGrid foodItems={currentItems} onItemClick={handleItemClick} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {selectedItem && <Modal itemId={selectedItem} onClose={closeModal} />}
    </div>
  );
};

export default Body;
