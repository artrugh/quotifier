const sourcesReducer = (state = [], action) => {
  switch (action.type) {
    case "USER_SOURCES":
      return sourcesReducer;
    default:
      return state;
  }
};

export default sourcesReducer;
