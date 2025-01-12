import { LOGO_URL } from "../utils/constants";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  test("should render the footer component", () => {
    render(<Footer />);

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  test("should render the logo with correct URL and alt text", () => {
    render(<Footer />);

    const logoImage = screen.getByAltText("BrainStormFood Logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", LOGO_URL);
  });

  test("should display the current year", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear().toString();
    const yearText = screen.getByText(new RegExp(currentYear));
    expect(yearText).toBeInTheDocument();
  });

  test("should display the copyright text", () => {
    render(<Footer />);

    const copyrightText = screen.getByText(
      /© \d{4} BrainStormFood. All rights reserved./
    );
    expect(copyrightText).toBeInTheDocument();
  });

  test("should display the designed with ❤️ text", () => {
    render(<Footer />);

    const designText = screen.getByText(/Designed with ❤️ for food lovers./);
    expect(designText).toBeInTheDocument();
  });
});
