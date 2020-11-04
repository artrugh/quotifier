const quotesReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_QUOTES":
      return action.payload;
    case "RESET":
      return;
    default:
      return state;
  }
};

export default quotesReducer;
