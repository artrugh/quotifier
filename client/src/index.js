import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//----------redux----------------------
import { Provider } from "react-redux"; // app is wrapped by provider and so it is connected to redux
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
//----------css-sass----------------------
import "./scss/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
