import { mockScrub, mockScrubPartial, mockScrubs } from "../mocks/test.mocks";
import { Scrub } from "../models/scrub.model";
import { scrubsActions } from "./scrubs.actions";
import { scrubsReducer, State } from "./scrubs.reducer";

describe("Given the scrubsReducer", () => {
  const mockReadAll = {
    type: scrubsActions.readAll,
    payload: mockScrubs,
  };

  const mockReadOne = {
    type: scrubsActions.readOne,
    payload: mockScrub,
  };

  const mockUpdate = {
    type: scrubsActions.update,
    payload: mockScrubPartial,
  };

  const mockCreate = {
    type: scrubsActions.create,
    payload: mockScrub,
  };

  const mockDelete = {
    type: scrubsActions.delete,
    payload: "1",
  };

  const mockAddActual = {
    type: scrubsActions.addActualInfo,
    payload: mockScrub,
  };

  const mockDefault = {
    type: "hola",
    payload: mockScrub,
  };

  const mockState: State = {
    scrubs: [
      {
        _id: "1",
        name: "Test",
        occupattion: "testing",
        personality: "tester",
        extendPerso: "",
        img: "",
      },
      {
        _id: "2",
        name: "Test2",
        occupattion: "testing2",
        personality: "tester2",
        extendPerso: "",
        img: "",
      },
    ],
    actualScrub: {} as Scrub,
  };

  describe("When passing a readAll action", () => {
    test("Then it should return the state with the scrubs property full", () => {
      const scrubs = scrubsReducer(mockState, mockReadAll);
      expect(scrubs).toEqual({
        ...mockState,
        scrubs: mockScrubs,
      });
    });
  });

  describe("When passing a readOne action", () => {
    test("Then it should return the state with the scrubs with one value", () => {
      const scrubs = scrubsReducer(mockState, mockReadOne);
      expect(scrubs).toEqual({ ...mockState, scrubs: mockReadOne.payload });
    });
  });

  describe("When passing a update action", () => {
    test("Then it should return the state with the scrubs entry updated", () => {
      const scrubs = scrubsReducer(mockState, mockUpdate);
      expect(scrubs).toEqual({
        ...mockState,
        scrubs: [
          {
            _id: "1",
            name: "Test ok",
            occupattion: "testing",
            personality: "tester",
            extendPerso: "",
            img: "",
          },
          {
            _id: "2",
            name: "Test2",
            occupattion: "testing2",
            personality: "tester2",
            extendPerso: "",
            img: "",
          },
        ],
      });
    });
  });

  describe("When passing a create action", () => {
    test("Then it should return the state with the scrub entry added", () => {
      const scrubs = scrubsReducer(mockState, mockCreate);
      expect(scrubs).toEqual({
        ...mockState,
        scrubs: [...mockState.scrubs, mockCreate.payload],
      });
    });
  });

  describe("When passing a delete action", () => {
    test("Then it should return the state with the scrub entry deleted", () => {
      const scrubs = scrubsReducer(mockState, mockDelete);
      expect(scrubs).toEqual({
        ...mockState,
        scrubs: [
          {
            _id: "2",
            name: "Test2",
            occupattion: "testing2",
            personality: "tester2",
            extendPerso: "",
            img: "",
          },
        ],
      });
    });
  });

  describe("When passing a addActual action", () => {
    test("Then it should return the state with the actualScrub updated", () => {
      const scrubs = scrubsReducer(mockState, mockAddActual);
      expect(scrubs).toEqual({
        ...mockState,
        actualScrub: mockAddActual.payload,
      });
    });
  });

  describe("When passing none of the accepted actions", () => {
    test("Then it should return the initial state", () => {
      const scrubs = scrubsReducer(mockState, mockDefault);
      expect(scrubs).toEqual(mockState);
    });
  });
});
