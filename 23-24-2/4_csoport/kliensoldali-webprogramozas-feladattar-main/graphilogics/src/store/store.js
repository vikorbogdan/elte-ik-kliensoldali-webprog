import { configureStore } from "@reduxjs/toolkit";
import { nonogramReducer } from "./nonogram/nonogramSlice";

export const store = configureStore({
  reducer: {
    nonogram: nonogramReducer,
  },
});
