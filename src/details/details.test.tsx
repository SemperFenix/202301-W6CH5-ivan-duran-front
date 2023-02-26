import { configureStore } from "@reduxjs/toolkit";
import { act, render, screen } from "@testing-library/react";
import { useMemo } from "react";
import { Provider } from "react-redux";
import { useScrubs } from "../hooks/use.scrubs";
import { Scrub } from "../models/scrub.model";
import { scrubsReducer } from "../reducer/scrubs.reducer";
import { ScrubsRepo } from "../services/repository/scrubs.repo";

import { Details } from "./details";

const mockStore = configureStore({
  reducer: { scrubs: scrubsReducer },
  preloadedState: {
    scrubs: {
      scrubs: [
        {
          id: 1,
          name: "Test",
          occupattion: "testing",
          personality: "tester",
          extend_perso: "",
          img: "",
        },
        {
          id: 2,
          name: "Test2",
          occupattion: "testing2",
          personality: "tester2",
          extend_perso: "",
          img: "",
        },
      ],
      actualScrub: {} as Scrub,
    },
  },
});

describe("Given the details component", () => {
  describe("When it is called", () => {
    test("Then it should the component card details", async () => {
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        render(
          <Provider store={mockStore}>
            <Details></Details>
          </Provider>
        );
      });
      const element = await screen.findAllByRole("img");
      expect(element[0]).toBeInTheDocument();
    });
  });
});