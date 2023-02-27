/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import { Scrub } from "../models/scrub.model";
import { scrubsReducer } from "../reducer/scrubs.reducer";

export const mockScrubs: Scrub[] = [
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

export const mockScrub: Scrub = {
  id: 5,
  name: "Bob Kelzo",
  occupattion: "doctor",
  personality: "bossy",
  extend_perso: "",
  img: "",
};

export const mockScrubPartial: Partial<Scrub> = { id: 1, name: "Test ok" };

export const mockStore = configureStore({
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
