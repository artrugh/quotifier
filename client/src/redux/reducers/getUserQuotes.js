const quotesReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_SOURCES":
      return action.payload;
    default:
      return state;
  }
};

export default quotesReducer;
