import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    },
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export default authSlice;
export const { login, logout, toggle } = authSlice.actions;
export const { reducer: authReducer } = authSlice;

// import { createAction, createReducer } from "@reduxjs/toolkit";

// const intialState = { value: false };

// const login = createAction("auth/login");
// const logout = createAction("auth/logout");
// const toggle = createAction("auth/toggle");

// const authReducer = createReducer(intialState, (builder) => {
//   builder
//     .addCase(login, (state) => {
//       state.value = true;
//     })
//     .addCase(logout, (state) => {
//       state.value = false;
//     })
//     .addCase(toggle, (state) => {
//       state.value = !state.value;
//     });
// });

// export default authReducer;
// export { login, logout, toggle };
