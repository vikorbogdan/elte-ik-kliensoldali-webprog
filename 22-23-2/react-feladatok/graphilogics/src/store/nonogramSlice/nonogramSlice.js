import { createSlice } from "@reduxjs/toolkit";

export const colors = {
  WHITE: 0,
  BLACK: 1,
  GREY: 2,
};
export const selectTable = (state) => {
  const { table, solution } = state.nonogram;
  const leftNumbers = solution.map((row) =>
    row
      .map((b) => (b ? "#" : " "))
      .join("")
      .trim()
      .split(" ")
      .map((s) => s.length)
      .filter(Boolean)
  );
  const upperNumbers = solution[0]
    ? solution[0].map((_, i) =>
        solution
          .map((row) => (row[i] ? "#" : " "))
          .join("")
          .trim()
          .split(" ")
          .map((s) => s.length)
          .filter(Boolean)
      )
    : [];
  return { table, solution, leftNumbers, upperNumbers };
};

const nonogramSlice = createSlice({
  name: "nonogramSlice",
  initialState: {
    solution: [], // Elvárt bemenet
    table: [], // Felhasználói
  },
  reducers: {
    start(state, action) {
      // ["# #", " # ", "# #"];
      state.solution = action.payload.map((row) => row.split("").map((cell) => cell === "#"));
      state.table = state.solution.map((row) => row.map(() => colors.WHITE));
      // [[0,0,0],
      // [0,0,0],
      // [0,0,0]]
    },
    clickCell(state, { payload: { x, y } }) {
      // {x: 0, y: 1}
      state.table[x][y] = (state.table[x][y] + 1) % 3;
    },
  },
});

export const { reducer: nonogramReducer } = nonogramSlice;
export const { start, clickCell } = nonogramSlice.actions;
