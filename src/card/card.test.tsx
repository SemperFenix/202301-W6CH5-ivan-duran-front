/* eslint-disable testing-library/no-unnecessary-act */
import { configureStore } from "@reduxjs/toolkit";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event/dist/types/setup";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { useScrubs } from "../hooks/use.scrubs";
import { Scrub } from "../models/scrub.model";
import { scrubsReducer } from "../reducer/scrubs.reducer";
import { ScrubsRepo } from "../services/repository/scrubs.repo";
import { Card } from "./card";

describe("Given the details component", () => {
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
  const addActualScrub = jest.fn();
  const mockScrub = {
    id: 5,
    name: "Bob Kelzo",
    occupattion: "doctor",
    personality: "bossy",
    extend_perso: "",
    img: "",
  };

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
