import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   throw new Error("test failed");
// });

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByRole("link", { name: "Learn React" });
//   expect(linkElement).toBeInTheDocument();
// });

//expect(element.textContent).toBe("Hello");
//expect(elementsArray).toHaveLength(7);

//Los tests se separan por commit!

//----------------------------------------
//What does RTL Do?
//1. Creates virtual DOM for testing and utilities for interacting with DOM.
//2. Alloes testing without a browser.

//Types of TESTS
//1. Unit tests: Tests one unit of CODE in isolation (Functions, components, etc.)
//2. Integration tests: How multiple units work together.
//3. Function tests: Tests behavior (NOT CODE) of software function. Ex: Submmit form adata.
//4. Acceptance / End to end tests: Use actual browser and server (Cypress, Selenium).

//getByRole is better than getByText

//-----------------------------------------SECTION 2-----------------------------------------
test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" }); //Si dejo el role vacío, testing-library me dara sugerencias por consola!!!
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  //Click button
  fireEvent.click(colorButton);

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  //expect the button text to be "Change to red"
  expect(colorButton.textContent).toBe("Change to red");
});
