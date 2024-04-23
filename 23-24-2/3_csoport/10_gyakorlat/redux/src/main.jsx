import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import counterReducer from "./features/reducers/counter.js";
import authReducer from "./features/reducers/auth.js";
import "./index.css";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: authReducer,
  },
});

store.subscribe(() => console.log(store.getState()));
// store.dispatch(increment(2));
// store.dispatch(decrement(4));
// store.dispatch(decrement());
// store.dispatch({ type: "LOGIN" });
// store.dispatch({ type: "TOGGLE" });
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
