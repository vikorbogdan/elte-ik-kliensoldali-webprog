import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3030/";

export const graphilogicsApiSlice = createApi({
  reducerPath: "graphilogicsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchGraphilogicsList: builder.query({
      query: () => "puzzles",
      transformResponse: (response) => response.data,
    }),
  }),
});

export const graphilogicsApiReducer = graphilogicsApiSlice.reducer;
export const { useFetchGraphilogicsListQuery } = graphilogicsApiSlice;
