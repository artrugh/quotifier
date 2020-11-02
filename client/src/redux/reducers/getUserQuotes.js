const quotesReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_QUOTES":
      return { ...state, quotes: action.payload };
    default:
      return state;
  }
};

export default quotesReducer;
