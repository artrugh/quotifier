import counter from "./counter";
import isLogged from "./isLogged";
import sources from "./getUserSources";
import userData from "./userData";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter,
  isLogged,
  sources,
  userData,
});

export default rootReducer;
