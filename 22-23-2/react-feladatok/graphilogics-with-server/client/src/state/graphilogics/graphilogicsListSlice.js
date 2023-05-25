import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const graphilogicsListSlice = createSlice({
  name: "graphilogicsList",
  initialState: { list: [] }, // [{id: 1, ["###","# #","###"]},{id: 2, ["###","# #","###"]}]
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGraphilogicsList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

// export const fetchGraphilogicsList = () => async (dispatch) => {
//   const response = await fetch("http://localhost:3030/puzzles");
//   const result = await response.json();
//   dispatch(setList(result.data));
//

export const fetchGraphilogicsList = createAsyncThunk("graphilogicsList/fetchGraphilogicsList", async () => {
  const response = await fetch("http://localhost:3030/puzzles");
  const result = await response.json();
  return result.data;
});

export const graphilogicsListReducer = graphilogicsListSlice.reducer;
export const { setList } = graphilogicsListSlice.actions;
