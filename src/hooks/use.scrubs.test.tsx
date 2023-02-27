import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockScrub, mockScrubPartial, mockStore } from "../mocks/test.mocks";

import { ScrubsRepo } from "../services/repository/scrubs.repo";
import { useScrubs } from "./use.scrubs";

describe("Given the useCharacters hook", () => {
  let elements: HTMLElement[];
  let mockRepo: ScrubsRepo;
  const spyOn = jest.spyOn(console, "error");

  beforeEach(async () => {
    mockRepo = {
      url: "",
      readAll: jest.fn(),
      readOne: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
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

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(
        <>
          <Provider store={mockStore}>
            <TestComp></TestComp>
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
        const data = mockStore.getState();
        expect(data.scrubs.scrubs).toEqual({
          id: 1,
          name: "Test",
          occupattion: "testing",
          personality: "tester",
          extendPerso: "",
          img: "",
        });
      });
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
    test("Then it should call the error console", () => {
      (mockRepo.readAll as jest.Mock).mockRejectedValue(new Error("hola"));
      expect(spyOn).toHaveBeenCalled();
    });
  });

  describe("When readOne method fails", () => {
    test("Then it should call the error console", async () => {
      (mockRepo.readOne as jest.Mock).mockRejectedValue(new Error("hola"));

      await fireEvent.click(elements[0]);

      await act(async () => {
        expect(spyOn).toHaveBeenCalled();
      });
    });
  });

  describe("When update method fails", () => {
    test("Then it should call the error console", async () => {
      fireEvent.click(elements[1]);
      await act(async () => {
        expect(spyOn).toHaveBeenCalled();
      });
    });
  });

  describe("When create method fails", () => {
    test("Then it should call the error console", async () => {
      fireEvent.click(elements[2]);
      await act(async () => {
        expect(spyOn).toHaveBeenCalled();
      });
    });
  });

  describe("When delete method fails", () => {
    test("Then it should call the error console", async () => {
      fireEvent.click(elements[3]);
      await act(async () => {
        expect(spyOn).toHaveBeenCalled();
      });
    });
  });
});
