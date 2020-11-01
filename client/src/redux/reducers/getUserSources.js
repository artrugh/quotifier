const sourcesReducer = (state = [], action) => {
  switch (action.type) {
    case "USER_SOURCES":
      return { sources: action.payload };
    default:
      return state;
  }
};

export default sourcesReducer;
