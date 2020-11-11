const quotesReducer = (state = [], action) => {
  switch (action.type) {
    case "SHOW_ALL_QUOTES":
      let allQuotesArr = action.payload;
      return allQuotesArr;
    default:
      return state;
  }
};

export default quotesReducer;
