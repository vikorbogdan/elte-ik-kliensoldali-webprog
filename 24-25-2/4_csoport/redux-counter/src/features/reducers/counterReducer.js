// Actions

import { createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("counter/increment");
const decrement = createAction("counter/decrement");

// Reducer

const initialState = { value: 0 };

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value += action.payload ?? 1;
    })
    .addCase(decrement, (state, action) => {
      state.value -= action.payload ?? 1;
    });
});

export { increment, decrement };

export default counterReducer;
