import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { mockStore } from "../mocks/test.mocks";

import { NewScrub } from "./new.scrub";

const mockCreateFn = jest.fn();
const spyOn = jest.spyOn(console, "log");

describe("Given the New Item component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup

    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Provider store={mockStore}>
        <MemoryRouter
          initialIndex={0}
          initialEntries={["/new-item/add", "/new-item/edit"]}
        >
          <NewScrub />
        </MemoryRouter>
      </Provider>
    );
  });
  describe("When submitted", () => {
    test("Then it should call the create new Photo method", async () => {
      const element = screen.getByTestId("form") as string[];
      expect(element).toBeInTheDocument();

      (element[0] as unknown as string) = "Test";
      (element[1] as unknown as string) = "Test";
      (element[2] as unknown as string) = "Test";
      (element[3] as unknown as string) = "Test";
      (element[4] as unknown as string) = "Test";

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        fireEvent.submit(element);
        expect(spyOn).toHaveBeenCalled();
      });
    });
  });
});
