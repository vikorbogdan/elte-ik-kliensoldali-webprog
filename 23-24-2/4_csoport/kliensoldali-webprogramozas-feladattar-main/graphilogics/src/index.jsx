import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./grafilogika.css";
import "./index.css";
import { store } from "./store/store";
import App from "./views/App";
import { fetchNonogramList } from "./store/nonogramList/nonogramListSlice";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// // Log the initial state
// console.log("Initial state: ", store.getState());

// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => console.log("State after dispatch: ", store.getState()));

// // Now, dispatch some actions
store.dispatch({ type: "nonogram/start", payload: ["# #", " # ", "# #"] });
// store.dispatch({
//   type: "nonogramList/setList",
//   payload: [
//     { id: 0, title: "öt pötty", puzzle: ["# #", " # ", "# #"] },
//     { id: 1, title: "négyzet", puzzle: ["###", "# #", "###"] },
//   ],
// });

store.dispatch(fetchNonogramList());
