import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//----------redux----------------------
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux"; // app is wrapped by provider and so it is connected to redux
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/index";
//----------css-sass----------------------
import "./scss/main.scss";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
