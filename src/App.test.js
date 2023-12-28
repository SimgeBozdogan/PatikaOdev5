import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Emoji Tests", () => {
  let searchInput;

  beforeEach(() => {
    render(<App />);
    searchInput = screen.getByRole("textbox");
  });

  test("Renders the emoji list", () => {
    const emojiListItems = screen.getAllByText(/Click to copy emoji/i);
    expect(emojiListItems.length).toEqual(20);
  });

  test("Searches for an emoji", () => {
    const emojiSearchList = screen.getAllByText(/100/i);
    userEvent.type(searchInput, "100");
    expect(emojiSearchList.length).toEqual(1);
  });
});
