import produce from "immer";

const quotesReducer = (state = [], action) => {
  switch (action.type) {
    case "SHOW_ALL_QUOTES":
      const baseState = state;
      const newArr = action.payload;
      const allQuotesArr = produce(baseState, (draft) => {
        newArr.forEach((quote) => draft.push(quote));
      });
      return allQuotesArr;
    default:
      return state;
  }
};

export default quotesReducer;
