import isLogged from "./isLogged";
import sources from "./getUserSources";
import userData from "./userData";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userData,
  isLogged,
  sources,
});

export default rootReducer;
