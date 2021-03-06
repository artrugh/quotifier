import { arrayToObject } from "../../helpers/arrayToObject.js";

const sourcesReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_SOURCES":
      let newState = arrayToObject(action.payload, "_id");
      return newState;
    default:
      return state;
  }
};

export default sourcesReducer;
