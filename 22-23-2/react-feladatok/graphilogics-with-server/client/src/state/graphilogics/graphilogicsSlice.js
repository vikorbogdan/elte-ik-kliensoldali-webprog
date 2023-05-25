import { createSlice } from "@reduxjs/toolkit";

export const colors = {
  WHITE: 0,
  BLACK: 1,
  GREY: 2,
};
export const graphilogicsSlice = createSlice({
  name: "graphilogics",
  initialState: {
    solution: [],
    table: [],
    solutionChecked: false,
  },
  reducers: {
    start: (state, action) => {
      const figure = action.payload; // ["# #"," # ","# #"]
      state.solution = figure.map((line) => line.split("").map((char) => char === "#"));
      state.table = state.solution.map((line) => line.map(() => colors.WHITE));
    },
    clickCell: (state, action) => {
      const { x, y } = action.payload;
      state.table[x][y] = (state.table[x][y] + 1) % 3;
    },
    startSolutionCheck: (state) => {
      state.solutionChecked = true;
    },
    finishSolutionCheck: (state) => {
      state.solutionChecked = false;
    },
  },
});

export const { start, clickCell, startSolutionCheck, finishSolutionCheck } = graphilogicsSlice.actions;
export const graphilogicsReducer = graphilogicsSlice.reducer;
