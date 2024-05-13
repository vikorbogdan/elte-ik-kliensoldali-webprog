import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3030";

export const nonogramApiSlice = createApi({
  reducerPath: "nonogramApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllPuzzles: builder.query({
      query: () => "puzzles",
    }),
  }),
});

export const { useGetAllPuzzlesQuery } = nonogramApiSlice;
export const nonogramApiReducer = nonogramApiSlice.reducer;
