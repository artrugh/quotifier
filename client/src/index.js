import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//----------redux----------------------
import { createStore } from "redux";
import { Provider } from "react-redux"; // app is wrapped by provider and so it is connected to redux
import allReducer from "./reducers";
//----------css-sass----------------------
import "./scss/main.scss";

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
