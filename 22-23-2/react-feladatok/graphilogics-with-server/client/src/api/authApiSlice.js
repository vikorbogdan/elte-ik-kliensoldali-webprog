import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3030/";

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "authentication",
        method: "POST",
        body,
      }),
    }),
  }),
});

// exportáljuk a reducert is
export const authApiReducer = authApiSlice.reducer;

export const { useLoginMutation } = authApiSlice;
