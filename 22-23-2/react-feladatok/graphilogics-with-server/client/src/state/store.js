import { configureStore } from "@reduxjs/toolkit";
import { graphilogicsReducer } from "./graphilogics/graphilogicsSlice";
import { graphilogicsApiReducer, graphilogicsApiSlice } from "../api/graphilogicsApiSlice";
import { authSliceReducer } from "./auth/authSlice";
import { authApiReducer } from "../api/authApiSlice";

export const store = configureStore({
  reducer: {
    graphilogics: graphilogicsReducer,
    graphilogicsApi: graphilogicsApiReducer,
    auth: authSliceReducer,
    authApi: authApiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(graphilogicsApiSlice.middleware),
});
