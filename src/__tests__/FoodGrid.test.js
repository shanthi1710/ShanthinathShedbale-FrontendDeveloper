import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import FoodGrid from "../components/FoodGrid";

jest.mock("../components/DishCard", () => ({ item }) => (
  <div>{item.strMeal}</div>
));

describe("FoodGrid Component", () => {
  const foodItems = [
    { idMeal: "1", strMeal: "Pizza" },
    { idMeal: "2", strMeal: "Burger" },
    { idMeal: "3", strMeal: "Pasta" },
  ];
  const mockOnItemClick = jest.fn();

  test("should render the grid with food items", () => {
    render(<FoodGrid foodItems={foodItems} onItemClick={mockOnItemClick} />);

    foodItems.forEach((item) => {
      expect(screen.getByText(item.strMeal)).toBeInTheDocument();
    });

    const gridElement = screen.getByRole("grid");
    expect(gridElement).toBeInTheDocument();
  });

  test("should display 'No items available' when the foodItems array is empty", () => {
    render(<FoodGrid foodItems={[]} onItemClick={mockOnItemClick} />);

    const noItemsMessage = screen.getByText("No items available.");
    expect(noItemsMessage).toBeInTheDocument();
  });

  test("should call onItemClick when a food item is clicked", () => {
    render(<FoodGrid foodItems={foodItems} onItemClick={mockOnItemClick} />);

    const firstItem = screen.getByText("Pizza");
    fireEvent.click(firstItem);

    expect(mockOnItemClick).toHaveBeenCalledWith("1");
    expect(mockOnItemClick).toHaveBeenCalledTimes(1);
  });

  test("should render the correct number of food items", () => {
    render(<FoodGrid foodItems={foodItems} onItemClick={mockOnItemClick} />);

    const items = screen.getAllByText(/Pizza|Burger|Pasta/);
    expect(items).toHaveLength(foodItems.length);
  });
});
