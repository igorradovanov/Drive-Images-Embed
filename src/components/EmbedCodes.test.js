import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import EmbedCodes from "./EmbedCodes";
test("renders EmbedCodes component correctly", () => {
  const { container } = render(
    <EmbedCodes id="123" alt="Image Alt" height="200" width="300" />
  );
  expect(container.innerHTML).toMatch(
    /https:\/\/lh3\.googleusercontent\.com\/d\/123/
  );
});

test("Renders Google Drive link correctly", () => {
  const { getByText } = render(
    <EmbedCodes id="123" alt="Image Alt" height="200" width="300" />
  );
  expect(getByText(/Copy HTML/)).toBeInTheDocument();
  expect(getByText(/Copy Markdown/)).toBeInTheDocument();
});
