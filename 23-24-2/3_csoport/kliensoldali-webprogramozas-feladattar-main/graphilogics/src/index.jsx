import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./grafilogika.css";
import "./index.css";
import { store } from "./store/store";
import App from "./views/App";
import { fetchAllNonograms } from "./store/nonogramListSlice/nonogramListSlice";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

store.dispatch({ type: "nonogram/start", payload: ["# #", " # ", "# #"] });
// store.dispatch({
//   type: "nonogramList/setList",
//   payload: [
//     { id: 1, puzzle: ["# #", " # ", "# #"] },
//     { id: 2, puzzle: ["###", "# #", "###"] },
//   ],
// });
store.dispatch(fetchAllNonograms());
