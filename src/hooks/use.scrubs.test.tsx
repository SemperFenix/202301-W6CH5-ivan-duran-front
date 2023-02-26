import { configureStore } from "@reduxjs/toolkit";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Scrub } from "../models/scrub.model";
import { scrubsReducer } from "../reducer/scrubs.reducer";
import { ScrubsRepo } from "../services/repository/scrubs.repo";
import { useScrubs } from "./use.scrubs";

describe("Given the useCharacters hook", () => {
  let elements: HTMLElement[];
  let mockRepo: ScrubsRepo;
  let mockErrorRepo: ScrubsRepo;
  const spyOn = jest.spyOn(console, "error");

  const mockScrubs: Scrub[] = [
    {
      id: 1,
      name: "John D. Dorian",
      occupattion: "doctor",
      personality: "hugger",
      extend_perso: "",
      img: "",
    },
    {
      id: 2,
      name: "Percyval U. Cox",
      occupattion: "doctor",
      personality: "absolute truth",
      extend_perso: "",
      img: "",
    },
  ];

  const mockScrub: Scrub = {
    id: 5,
    name: "Bob Kelzo",
    occupattion: "doctor",
    personality: "bossy",
    extend_perso: "",
    img: "",
  };

  const mockScrubPartial: Partial<Scrub> = { id: 1, name: "Test ok" };

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

  beforeEach(async () => {
    mockRepo = {
      url: "",
      readAll: jest.fn().mockResolvedValueOnce(mockScrubs),
      readOne: jest.fn().mockResolvedValueOnce(mockScrub),
      create: jest.fn().mockResolvedValue(mockScrub),
      update: jest.fn().mockResolvedValue(mockScrub),
      delete: jest.fn().mockResolvedValue({}),
    };

    mockErrorRepo = {
      url: "",
      readAll: jest.fn().mockRejectedValueOnce("Error"),
      readOne: jest.fn().mockRejectedValueOnce("Error"),
      create: jest.fn().mockRejectedValueOnce("Error"),
      update: jest.fn().mockRejectedValueOnce("Error"),
      delete: jest.fn().mockRejectedValueOnce("Error"),
    };

    function TestComp() {
      const {
        readScrub,
        updateScrub,
        createScrub,
        deleteScrub,
        addActualScrub,
      } = useScrubs(mockRepo);

      return (
        <>
          <button
            onClick={() => {
              readScrub(1);
            }}
          ></button>
          <button
            onClick={() => {
              updateScrub(mockScrubPartial);
            }}
          ></button>
          <button
            onClick={() => {
              createScrub(mockScrub);
            }}
          ></button>
          <button
            onClick={() => {
              deleteScrub(1);
            }}
          ></button>
          <button
            onClick={() => {
              addActualScrub(mockScrub);
            }}
          ></button>
        </>
      );
    }

    function TestErrorComp() {
      const { readScrub, updateScrub, createScrub, deleteScrub } =
        useScrubs(mockErrorRepo);

      return (
        <>
          <button
            onClick={() => {
              readScrub(1);
            }}
          ></button>
          <button
            onClick={() => {
              updateScrub(mockScrubPartial);
            }}
          ></button>
          <button
            onClick={() => {
              createScrub(mockScrub);
            }}
          ></button>
          <button
            onClick={() => {
              deleteScrub(1);
            }}
          ></button>
        </>
      );
    }

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(
        <>
          <Provider store={mockStore}>
            <TestComp></TestComp>
            <TestErrorComp></TestErrorComp>
          </Provider>
        </>
      );
    });
    elements = await screen.findAllByRole("button");
  });

  // OK Tests

  describe("When TestComp renderizes", () => {
    test("Then it should call the repo method readAll", async () => {
      await act(async () => {
        expect(mockRepo.readAll).toHaveBeenCalled();
      });
    });
  });

  describe("When click on first button", () => {
    test("Then it should call the repo method readOne", async () => {
      fireEvent.click(elements[0]);

      await act(async () => {
        expect(mockRepo.readOne).toHaveBeenCalled();
      });
      const data = await mockStore.getState();
      expect(data.scrubs.scrubs).toEqual([mockScrub]);
    });
  });

  describe("When click on second button", () => {
    test("Then it should call the repo method update", async () => {
      fireEvent.click(elements[1]);

      await act(async () => {
        expect(mockRepo.update).toHaveBeenCalled();
      });
    });
  });

  describe("When click on third button", () => {
    test("Then it should call the repo method create", async () => {
      fireEvent.click(elements[2]);

      await act(async () => {
        expect(mockRepo.create).toHaveBeenCalled();
      });
    });
  });

  describe("When click on fourth button", () => {
    test("Then it should call the repo method delete", async () => {
      fireEvent.click(elements[3]);

      await act(async () => {
        expect(mockRepo.delete).toHaveBeenCalled();
      });
    });
  });

  describe("When click on fifth button", () => {
    test("Then it should update the store value of actualScrub", async () => {
      fireEvent.click(elements[4]);
      const data = mockStore.getState().scrubs.actualScrub;
      expect(data).toEqual(mockScrub);
    });
  });

  // Error Tests

  describe("When readAll method fails", () => {
    test("Then it should call the error console", async () => {
      await act(async () => {
        expect(spyOn).toHaveBeenCalled();
      });
    });
  });

  describe("When readOne method fails", () => {
    test("Then it should call the error console", async () => {
      fireEvent.click(elements[5]);
      await act(async () => {
        expect(spyOn).toHaveBeenCalled();
      });
    });
  });

  describe("When update method fails", () => {
    test("Then it should call the error console", async () => {
      fireEvent.click(elements[6]);
      await act(async () => {
        expect(spyOn).toHaveBeenCalled();
      });
    });
  });

  describe("When create method fails", () => {
    test("Then it should call the error console", async () => {
      fireEvent.click(elements[7]);
      await act(async () => {
        expect(spyOn).toHaveBeenCalled();
      });
    });
  });

  describe("When delete method fails", () => {
    test("Then it should call the error console", async () => {
      fireEvent.click(elements[8]);
      await act(async () => {
        expect(spyOn).toHaveBeenCalled();
      });
    });
  });
});
