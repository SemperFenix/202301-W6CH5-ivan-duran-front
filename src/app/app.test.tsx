import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./app";
import { store } from "../store/store";

import { MemoryRouter } from "react-router-dom";

describe("Given the App component", () => {
  describe("When renderized", () => {
    test("Then it should renderize the home", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      );

      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
});
