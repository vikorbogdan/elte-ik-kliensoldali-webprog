import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const login = createAction("auth/login");
const logout = createAction("auth/logout");
const toggle = createAction("auth/toggle");

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state) => {
      state.value = true;
    })
    .addCase(logout, (state) => {
      state.value = false;
    })
    .addCase(toggle, (state) => {
      state.value = !state.value;
    });
});

export { login, logout, toggle };
export default authReducer;
