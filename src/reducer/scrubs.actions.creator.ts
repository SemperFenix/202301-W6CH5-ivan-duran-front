import { createAction } from "@reduxjs/toolkit";
import { Scrub } from "../models/scrub.model";
import { scrubsActions } from "./scrubs.actions";

export const readAllCreator = createAction<Scrub[]>(scrubsActions.readAll);
export const readOneCreator = createAction<Scrub>(scrubsActions.readOne);
export const updateCreator = createAction<Partial<Scrub>>(scrubsActions.update);
export const createCreator = createAction<Scrub>(scrubsActions.create);
export const deleteCreator = createAction<Scrub["id"]>(scrubsActions.delete);
export const addActualCreator = createAction<Scrub>(
  scrubsActions.addActualInfo
);
