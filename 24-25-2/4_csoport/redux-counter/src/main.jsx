import { configureStore } from "@reduxjs/toolkit";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import counterReducer, {
  increment,
} from "./features/reducers/counterReducer.js";
import loginReducer, { toggle } from "./features/reducers/loginReducer.js";
import "./index.css";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },
});

store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(increment(1));
store.dispatch(toggle());
store.dispatch(toggle());

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
