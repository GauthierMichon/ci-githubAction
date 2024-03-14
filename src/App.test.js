import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders button react link", () => {
  render(<App />);
  const bouton = screen.getByText("Click on Me");
  expect(bouton).toBeInTheDocument();
  expect(bouton).toBeVisible();
});
