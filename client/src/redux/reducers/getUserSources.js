const sourcesReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_SOURCES":
      return { ...state, sources: action.payload };
    default:
      return state;
  }
};

export default sourcesReducer;
