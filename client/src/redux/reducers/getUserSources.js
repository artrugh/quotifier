const sourcesReducer = (state = null, action) => {
  switch (action.type) {
    case "USER_SOURCES":
      return action.payload;
    default:
      return state;
  }
};

export default sourcesReducer;
