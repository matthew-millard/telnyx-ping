import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button component", () => {
  test("renders button with text", () => {
    render(<Button label="Create Account" />);
    expect(screen.getByText("Create Account")).toBeInTheDocument();
  });

  test("renders button with correct type", () => {
    render(<Button type="submit" />);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  test("button is disabled when loading", () => {
    render(<Button loading={true} />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("button displays react spinner when loading", () => {
    render(<Button label="Create Account" loading={true} />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });
});
