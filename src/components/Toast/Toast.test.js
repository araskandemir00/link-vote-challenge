import React from "react";
import { render } from "@testing-library/react";
import Toast from "../Toast";

test("Toast render correctly", () => {
  const { container } = render(<Toast />);

  expect(container.firstChildren).toHaveClass("toast");
});