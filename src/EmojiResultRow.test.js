import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmojiResults from "./EmojiResults";

describe("Emoji Results Tests", () => {
  beforeEach(() => {
    render(
      <EmojiResults
        emojiData={[
          {
            title: "100",
            symbol: "💯",
            keywords:
              "hundred points symbol symbol wow wow win win perfect perfect parties parties",
          },
        ]}
      />
    );
  });

  test("Copies the Emoji when clicked", () => {
    const copyButton = screen.queryByText(/Click to copy emoji/i);
    userEvent.click(copyButton);
    expect(copyButton.getAttribute("data-clipboard-text")).toEqual("💯");
  });
});
