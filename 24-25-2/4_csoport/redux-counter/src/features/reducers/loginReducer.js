import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions
const toggle = createAction("login/toggle");

// Reducers

const initialState = { value: false };

const loginReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggle, (state) => {
    state.value = !state.value;
  });
});

export { toggle };
export default loginReducer;
