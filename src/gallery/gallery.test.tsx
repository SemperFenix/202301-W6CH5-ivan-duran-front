import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { mockStore } from "../mocks/test.mocks";

import { Gallery } from "./gallery";

describe("Given the details component", () => {
  describe("When it is called", () => {
    test("Then it should the component card details", async () => {
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        render(
          <Provider store={mockStore}>
            <MemoryRouter>
              <Gallery></Gallery>
            </MemoryRouter>
          </Provider>
        );
      });
      const element = await screen.findAllByRole("img");
      expect(element[0]).toBeInTheDocument();
    });
  });
});
