import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  solution: [], // a kitalálandó ábra
  table: [], // a felhasználó által módosítható tábla aktuális állapota
  isSolutionChecked: false, // éppen pirosra kell-e színezni a hibásan bejelölt négyzeteket
};

export const colors = {
  WHITE: 0,
  BLACK: 1,
  GREY: 2,
};

// selector függvény ami visszaadja a táblainfókat
export const selectTable = (state) => {
  const { solution, table } = state.nonogram;
  const leftNumbers = solution.map((row) =>
    row
      .map((block) => (block ? "#" : " "))
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

  return {
    table: table,
    solution: solution,
    leftNumbers,
    upperNumbers,
    isSolutionChecked: state.nonogram.isSolutionChecked,
  };
};

const nonogramSlice = createSlice({
  name: "nonogram",
  initialState,
  reducers: {
    start: (state, action) => {
      // action.payload:
      // ["# #",
      //  " # ",
      //  "# #"]

      state.solution = action.payload.map((row) => row.split("").map((block) => block === "#"));
      state.table = state.solution.map((row) => row.map(() => colors.WHITE));
    },
    clickCell: (state, action) => {
      // action.payload : {x : num,y : num}
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
export const { start, clickCell, startSolutionCheck, stopSolutionCheck } = nonogramSlice.actions;
export const { reducer: nonogramReducer } = nonogramSlice;
