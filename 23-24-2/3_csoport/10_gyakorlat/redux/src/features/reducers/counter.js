import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      if (action.payload) {
        state.value += action.payload.incrementWith;
      } else {
        state.value++;
      }
    },
    decrement: (state, action) => {
      if (action.payload) {
        state.value -= action.payload.incrementWith;
      } else {
        state.value--;
      }
    },
  },
});

export default counterSlice;
export const { increment, decrement } = counterSlice.actions;

// const increment = createAction("counter/increment");
// const decrement = createAction("counter/decrement");
// const counterReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state, action) => {
//       if (action.payload) {
//         state.value += action.payload.incrementWith;
//       } else {
//         state.value++;
//       }
//     })
//     .addCase(decrement, (state, action) => {
//       if (action.payload) {
//         state.value -= action.payload.incrementWith;
//       } else {
//         state.value--;
//       }
//     });
// });

// export { increment, decrement };
// export default counterReducer;
