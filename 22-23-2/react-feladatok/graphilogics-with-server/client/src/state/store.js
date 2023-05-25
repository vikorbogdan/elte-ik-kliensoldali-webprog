import { configureStore } from "@reduxjs/toolkit";
import { graphilogicsReducer } from "./graphilogics/graphilogicsSlice";

export const store = configureStore({
  reducer: { graphilogics: graphilogicsReducer },
});
