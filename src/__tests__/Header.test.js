import Header from "../components/Header";
import { LOGO_URL } from "../utils/constants";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  test("renders the logo with correct src and alt text", () => {
    render(<Header />);
    const logo = screen.getByAltText(/BrainStromFood Logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", LOGO_URL);
  });
  test("renders the search input field", () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText(/search for dishes/i);
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("type", "text");
  });

  test("renders the search button with correct text", () => {
    render(<Header />);
    const searchButton = screen.getByRole("button", { name: /search/i });
    expect(searchButton).toBeInTheDocument();
  });
});
