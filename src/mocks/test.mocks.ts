/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import { Scrub } from "../models/scrub.model";
import { scrubsReducer } from "../reducer/scrubs.reducer";

export const mockScrubs: Scrub[] = [
  {
    _id: "1",
    name: "John D. Dorian",
    occupattion: "doctor",
    personality: "hugger",
    extendPerso: "",
    img: "",
  },
  {
    _id: "2",
    name: "Percyval U. Cox",
    occupattion: "doctor",
    personality: "absolute truth",
    extendPerso: "",
    img: "",
  },
];

export const mockScrub: Scrub = {
  _id: "5",
  name: "Bob Kelzo",
  occupattion: "doctor",
  personality: "bossy",
  extendPerso: "",
  img: "",
};

export const mockScrubPartial: Partial<Scrub> = { _id: "1", name: "Test ok" };

export const mockStore = configureStore({
  reducer: { scrubs: scrubsReducer },
  preloadedState: {
    scrubs: {
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
    },
  },
});
