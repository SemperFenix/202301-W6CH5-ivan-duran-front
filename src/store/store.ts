import { configureStore } from "@reduxjs/toolkit";
import { scrubsReducer } from "../reducer/scrubs.reducer";

export const store = configureStore({
  reducer: {
    scrubs: scrubsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
