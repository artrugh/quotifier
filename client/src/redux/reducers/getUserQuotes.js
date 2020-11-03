const quotesReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_QUOTES":
      return action.payload;
    default:
      return state;
  }
};

export default quotesReducer;
