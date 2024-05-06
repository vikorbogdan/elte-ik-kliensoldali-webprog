import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { authReducer } from "./features/reducers/auth.js";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/reducers/counter.js";

const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
      auth: authReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(() => console.log(store.getState()));

// store.dispatch(increment(10));
// store.dispatch(increment(10));
// store.dispatch(increment(5));
// store.dispatch(increment(4));
// store.dispatch(decrement(4));
// store.dispatch(decrement(4));
// store.dispatch(login());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
