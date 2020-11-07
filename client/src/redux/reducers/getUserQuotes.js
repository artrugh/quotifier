import { arrayToObject } from "../../helpers/arrayToObject.js";

const quotesReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_QUOTES":
      let newState = arrayToObject(action.payload, "_id");
      return newState;
    case "RESET":
      return;
    default:
      return state;
  }
};

export default quotesReducer;
