import { createReducer } from "@reduxjs/toolkit";
import { Scrub } from "../models/scrub.model";
import * as ac from "./scrubs.actions.creator";

type State = {
  scrubs: Scrub[];
  actualScrub: Scrub;
};

const initialState: State = {
  scrubs: [],
  actualScrub: {} as Scrub,
};

export const scrubsReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.readAllCreator, (state, { payload }) => {
    return { ...state, scrubs: payload };
  });

  builder.addCase(ac.readOneCreator, (state, { payload }) => {
    return { ...state, scrubs: [payload] };
  });

  builder.addCase(ac.updateCreator, (state, { payload }) => {
    const data = state.scrubs.map((item) =>
      item.id === payload.id ? Object.assign(item, payload) : item
    );
    return { ...state, scrubs: data };
  });

  builder.addCase(ac.createCreator, (state, { payload }) => {
    return { ...state, scrubs: [...state.scrubs, payload] };
  });

  builder.addCase(ac.deleteCreator, (state, { payload }) => {
    const data = state.scrubs.filter((item) => item.id !== payload);
    return { ...state, scrubs: data };
  });

  builder.addCase(ac.addActualCreator, (state, { payload }) => {
    return { ...state, actualScrub: payload };
  });

  builder.addDefaultCase((state) => state);
});
