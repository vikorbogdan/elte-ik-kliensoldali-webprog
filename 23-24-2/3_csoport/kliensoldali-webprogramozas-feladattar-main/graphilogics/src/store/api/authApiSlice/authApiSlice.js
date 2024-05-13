import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { createApi } from "@reduxjs/toolkit/dist/query/react";

const baseUrl = "http://localhost:3030/";
export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: `authentication`,
        method: "POST",
        body: {
          strategy: "local",
          email: loginData.email,
          password: loginData.password,
        },
      }),
    }),
  }),
});
export const authApiReducer = authApiSlice.reducer;

export const { useLoginMutation } = authApiSlice;
