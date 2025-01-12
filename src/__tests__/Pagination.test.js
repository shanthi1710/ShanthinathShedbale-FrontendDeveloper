import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "../components/Pagination";

describe("Pagination Component", () => {
  const mockOnPageChange = jest.fn();

  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  const renderPagination = (currentPage, totalPages) => {
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={mockOnPageChange}
      />
    );
  };

  test("should render the correct number of page buttons", () => {
    renderPagination(1, 5);
    const pageButtons = screen.getAllByRole("button", { name: /\d+/ });
    expect(pageButtons).toHaveLength(5);
  });

  test("should disable the 'Prev' button on the first page", () => {
    renderPagination(1, 5);
    const prevButton = screen.getByRole("button", { name: /prev/i });
    expect(prevButton).toBeDisabled();
  });

  test("should disable the 'Next' button on the last page", () => {
    renderPagination(5, 5);
    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).toBeDisabled();
  });

  test("should call onPageChange with the correct page when a page button is clicked", () => {
    renderPagination(1, 5);
    const page3Button = screen.getByRole("button", { name: "3" });
    fireEvent.click(page3Button);

    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  test("should call onPageChange with the previous page when 'Prev' is clicked", () => {
    renderPagination(3, 5);

    const prevButton = screen.getByRole("button", { name: /prev/i });
    fireEvent.click(prevButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  test("should call onPageChange with the next page when 'Next' is clicked", () => {
    renderPagination(3, 5);

    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });

  test("should highlight the current page button", () => {
    renderPagination(3, 5);

    const currentPageButton = screen.getByRole("button", { name: "3" });
    expect(currentPageButton).toHaveClass("bg-blue-500");
    expect(currentPageButton).toHaveClass("text-white");
  });
});
