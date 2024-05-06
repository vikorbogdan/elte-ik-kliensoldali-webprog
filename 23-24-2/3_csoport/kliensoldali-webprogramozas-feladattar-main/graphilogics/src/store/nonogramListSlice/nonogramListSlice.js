import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [], // az elérhető feladványok listája
};

const nonogramListSlice = createSlice({
  name: "nonogramList",
  initialState,
  //   reducers: {
  //     setList: (state, action) => {
  //       state.list = action.payload;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(fetchAllNonograms.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

// export const fetchAllNonograms = () => async (dispatch) => {
//   const response = await fetch("http://localhost:3030/puzzles");
//   const result = await response.json();
//   dispatch(setList(result.data));
// };

export const fetchAllNonograms = createAsyncThunk("nonogramList/fetchAllNonograms", async () => {
  const response = await fetch("http://localhost:3030/puzzles");
  const result = await response.json();
  return result.data;
});

export const { setList } = nonogramListSlice.actions;
export const nonogramListReducer = nonogramListSlice.reducer;
