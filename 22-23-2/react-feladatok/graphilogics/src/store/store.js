import { configureStore } from "@reduxjs/toolkit";
import { nonogramReducer } from "./nonogramSlice/nonogramSlice";

export const store = configureStore({
  reducer: {
    nonogram: nonogramReducer,
  },
});
