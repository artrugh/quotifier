import produce from "immer";

const quotesReducer = (state = [], action) => {
  switch (action.type) {
    case "SHOW_ALL_QUOTES":
    // const baseState = state;
    // const newArr = action.payload;
    // const allQuotesArr = produce(baseState, (draft) => {
    //   newArr.forEach((quoteID) => draft.push(quoteID));
    // });
    case "SHOW_ALL_QUOTES":
      const allQuotesArr = action.payload;
      return allQuotesArr;
    default:
      return state;
  }
};

export default quotesReducer;
