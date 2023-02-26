import { Scrub } from "../models/scrub.model";
import { scrubsActions } from "./scrubs.actions";
import { scrubsReducer, State } from "./scrubs.reducer";

describe("Given the scrubsReducer", () => {
  const mockScrubs: Scrub[] = [
    {
      id: 1,
      name: "John D. Dorian",
      occupattion: "doctor",
      personality: "hugger",
    },
    {
      id: 2,
      name: "Percyval U. Cox",
      occupattion: "doctor",
      personality: "absolute truth",
    },
  ];

  const mockScrub: Scrub = {
    id: 5,
    name: "Bob Kelzo",
    occupattion: "doctor",
    personality: "bossy",
  };

  const mockScrubPartial: Partial<Scrub> = { id: 1, name: "Test ok" };

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
    payload: 1,
  };

  const mockAddActual = {
    type: scrubsActions.addActualInfo,
    payload: mockScrub,
  };

  const mockState: State = {
    scrubs: [
      { id: 1, name: "Test", occupattion: "testing", personality: "tester" },
    ],
    actualScrub: {} as Scrub,
  };

  describe("When passing a readAll action", () => {
    test("Then it should return the state with the scrubs property full", () => {
      const scrubs = scrubsReducer(mockState, mockReadAll);
      expect(scrubs).toEqual({
        ...mockState,
        scrubs: [
          {
            id: 1,
            name: "John D. Dorian",
            occupattion: "doctor",
            personality: "hugger",
          },
          {
            id: 2,
            name: "Percyval U. Cox",
            occupattion: "doctor",
            personality: "absolute truth",
          },
        ],
      });
    });
  });

  describe("When passing a readOne action", () => {
    test("Then it should return the state with the scrubs with one value", () => {
      const scrubs = scrubsReducer(mockState, mockReadOne);
      expect(scrubs).toEqual({ ...mockState, scrubs: [mockReadOne.payload] });
    });
  });

  describe("When passing a update action", () => {
    test("Then it should return the state with the scrubs entry updated", () => {
      const scrubs = scrubsReducer(mockState, mockUpdate);
      expect(scrubs).toEqual({
        ...mockState,
        scrubs: [
          {
            id: 1,
            name: "Test ok",
            occupattion: "testing",
            personality: "tester",
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
        scrubs: [],
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
});
