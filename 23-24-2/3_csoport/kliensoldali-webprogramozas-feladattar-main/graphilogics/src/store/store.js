import { configureStore } from "@reduxjs/toolkit";
import { nonogramReducer } from "./nonogramSlice/nonogramSlice";
import { nonogramApiReducer, nonogramApiSlice } from "./api/nonogramApiSlice/nonogramApiSlice";
import { authReducer } from "./authSlice/authSlice";
import { authApiReducer, authApiSlice } from "./api/authApiSlice/authApiSlice";
export const store = configureStore({
  reducer: {
    nonogram: nonogramReducer,
    // nonogramList: nonogramListReducer,
    nonogramApi: nonogramApiReducer,
    auth: authReducer,
    authApi: authApiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nonogramApiSlice.middleware).concat(authApiSlice.middleware),
});
