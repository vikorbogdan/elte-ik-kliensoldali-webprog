import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const increment = createAction("counter/increment");
const decrement = createAction("counter/decrement");

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      if (action.payload) {
        state.value += action.payload.incrementWith;
      } else {
        state.value++;
      }
    })
    .addCase(decrement, (state, action) => {
      if (action.payload) {
        state.value -= action.payload.decrementWith;
      } else {
        state.value--;
      }
    });
});

export { increment, decrement };
export default counterReducer;
