import { createSlice } from "@reduxjs/toolkit";
const initialState = { user: null, token: null };
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = {
        id: action.payload.id,
        email: action.payload.email,
      };
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const selectLoggedInUser = (state) => state.auth.user;
export const selectAuthToken = (state) => state.auth.token;

export const { login, logout } = authSlice.actions;
export const { reducer: authReducer } = authSlice;
