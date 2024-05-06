import { configureStore } from "@reduxjs/toolkit";
import { nonogramReducer } from "./nonogramSlice/nonogramSlice";
import { nonogramApiReducer, nonogramApiSlice } from "./api/nonogramApiSlice/nonogramApiSlice";
export const store = configureStore({
  reducer: {
    nonogram: nonogramReducer,
    // nonogramList: nonogramListReducer,
    nonogramApi: nonogramApiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(nonogramApiSlice.middleware),
});
