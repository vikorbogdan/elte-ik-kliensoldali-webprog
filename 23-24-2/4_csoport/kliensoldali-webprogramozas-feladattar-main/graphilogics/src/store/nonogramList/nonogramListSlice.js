import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [{ id: 1, title: "rövid T", puzzle: ["###", " # "] }], // játszható nonogram objektumok listája
};
const nonogramListSlice = createSlice({
  name: "nonogramList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNonogramList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

// export const fetchNonogramList = () => async (dispatch) => {
//   const response = await fetch("http://localhost:3030/puzzles");
//   const data = await response.json();
//   dispatch(setList(data?.data));
// };

export const fetchNonogramList = createAsyncThunk("nonogramList/fetchNonogramList", async () => {
  const response = await fetch("http://localhost:3030/puzzles");
  const result = await response.json();
  return result.data;
});

export const { setList } = nonogramListSlice.actions;
export const nonogramListReducer = nonogramListSlice.reducer;
