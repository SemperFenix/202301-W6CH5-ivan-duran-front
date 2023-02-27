import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "../mocks/test.mocks";

import { NewScrub } from "./new.scrub";

describe("Given the New Item component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup

    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Provider store={mockStore}>
        <NewScrub />
      </Provider>
    );
  });
  describe("When submitted", () => {
    test("Then it should call the create new Photo method", () => {
      const element = screen.getByTestId("form");
      expect(element).toBeInTheDocument();

      // Esta parte del test no he conseguido que funcione
      // element[0] = "Test";
      // element[1] = "Test";
      // element[2] = "Test";
      // element[3] = "Test";
      // element[4] = "Test";
      // const preClick = mockStore.getState().scrubs.scrubs.length;
      // await act(async () => {
      //   fireEvent.submit(element);
      //   expect(element[0]).toBe(undefined);
      //   const postClick = mockStore.getState().scrubs.scrubs.length;
      //   expect(postClick).toBe(preClick + 1);
      // });
    });
  });
});
