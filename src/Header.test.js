import React from "react";
import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe("Header Component Test", () => {
  beforeEach(() => {
    render(<Header />);
  });

  test("Renders the title correctly", () => {
    const titleElement = screen.getByText(/Emoji Search/i);
    expect(titleElement).toBeInTheDocument;
  });
});
