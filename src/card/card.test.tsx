/* eslint-disable testing-library/no-unnecessary-act */
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { mockScrub, mockStore } from "../mocks/test.mocks";

import { Card } from "./card";

describe("Given the details component", () => {
  const addActualScrub = jest.fn();

  beforeEach(async () => {
    await act(async () => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(
        <Provider store={mockStore}>
          <MemoryRouter>
            <Card
              info={mockStore.getState().scrubs.scrubs[0]}
              addActual={addActualScrub}
              status={mockScrub}
              key="1"
            ></Card>
          </MemoryRouter>
        </Provider>
      );
    });
  });

  describe("When it is rendered", () => {
    test("Then it should the component card", async () => {
      const element = await screen.findAllByRole("img");
      expect(element[0]).toBeInTheDocument();
    });
  });

  describe("When it is clicked", () => {
    test("Then it should call the addActual function", async () => {
      const element = await screen.findAllByRole("img");
      fireEvent.click(element[0]);
      expect(addActualScrub).toHaveBeenCalled();
    });
  });
});
