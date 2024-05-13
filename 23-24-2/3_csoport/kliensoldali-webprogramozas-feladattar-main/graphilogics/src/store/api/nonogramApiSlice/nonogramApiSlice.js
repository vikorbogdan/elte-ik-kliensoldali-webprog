import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:3030/";

export const nonogramApiSlice = createApi({
  reducerPath: "nonogramApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    fetchAllNonograms: builder.query({
      query: () => "puzzles",
    }),
    fetchOneNonogram: builder.query({
      query: (id) => `puzzles/${id}`,
    }),
  }),
});

export const nonogramApiReducer = nonogramApiSlice.reducer;
export const { useFetchAllNonogramsQuery, useFetchOneNonogramQuery } = nonogramApiSlice;
