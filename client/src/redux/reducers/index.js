import isLogged from "./isLogged";
import sources from "./getUserSources";
import userData from "./userData";
import quotes from "./getUserQuotes";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userData,
  isLogged,
  sources,
  quotes,
});

export default rootReducer;
