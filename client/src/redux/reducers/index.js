import isLogged from "./isLogged";
import userName from "./userData";
import quotes from "./getUserQuotes";
import sources from "./getUserSources";
import filteredQuotes from "./filteredQuotes";
import quoteViewer from "./views";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  userName,
  isLogged,
  quotes,
  sources,
  filteredQuotes,
  quoteViewer,
});

const rootReducer = (state, action) => {
  if (action.type === "SIGN_OUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
