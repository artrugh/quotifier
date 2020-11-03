import isLogged from "./isLogged";
import userName from "./userData";
import quotes from "./getUserQuotes";
import sources from "./getUserSources";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userName,
  isLogged,
  quotes,
  sources,
});

export default rootReducer;
