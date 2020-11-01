import counter from "./counter";
import isLogged from "./isLogged";
import sources from "./getUserSources";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter,
  isLogged,
  sources,
});

export default rootReducer;
