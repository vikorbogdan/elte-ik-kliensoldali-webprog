import { configureStore } from "@reduxjs/toolkit";
import { nonogramApiReducer, nonogramApiSlice } from "./api/nonogramApiSlice";
import { nonogramReducer } from "./nonogram/nonogramSlice";
import { nonogramListReducer } from "./nonogramList/nonogramListSlice";

export const store = configureStore({
  reducer: {
    nonogram: nonogramReducer,
    nonogramList: nonogramListReducer,
    nonogramApi: nonogramApiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(nonogramApiSlice.middleware),
});
