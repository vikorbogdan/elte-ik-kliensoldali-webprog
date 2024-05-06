import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  solution: [], // elvárt megoldás
  table: [], // felhasználó tippje
  isSolutionChecked: false, // ha igaz, éppen pirosan villognak a rossz helyre helyezett blokkok
};

export const colors = {
  WHITE: 0,
  BLACK: 1,
  GREY: 2,
};

/**
 * [[0,0,0],
 * [0,0,0],
 * [0,0,0]]
 */

export const selectTable = (state) => {
  const { table, solution } = state.nonogram;
  const leftNumbers = solution.map((row) =>
    row
      .map((block) => (block ? "#" : " "))
      .join("")
      .trim()
      .split(" ") // ["##", "#"]
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

  return { table, solution, leftNumbers, upperNumbers, isSolutionChecked: state.nonogram.isSolutionChecked };
};

const nonogramSlice = createSlice({
  name: "nonogram",
  initialState,
  reducers: {
    start: (state, action) => {
      // action.payload: ["# #", " # ", "# #"]
      // split után: [["#", " ", "#"], ...]
      // második map után: [[true, false, true], ...]
      state.solution = action.payload.map((row) => row.split("").map((cell) => cell === "#"));
      state.table = state.solution.map((row) => row.map(() => colors.WHITE));
    },
    clickCell: (state, action) => {
      // payload: x, y koordináták
      const { x, y } = action.payload;
      state.table[x][y] = (state.table[x][y] + 1) % 3;
    },
    startSolutionCheck: (state) => {
      state.isSolutionChecked = true;
    },
    stopSolutionCheck: (state) => {
      state.isSolutionChecked = false;
    },
  },
});

export const checkSolution = () => {
  return (dispatch) => {
    dispatch(startSolutionCheck());
    setTimeout(() => dispatch(stopSolutionCheck()), 3000);
  };
};

export default nonogramSlice;
export const { reducer: nonogramReducer } = nonogramSlice;
export const { start, clickCell, startSolutionCheck, stopSolutionCheck } = nonogramSlice.actions;
