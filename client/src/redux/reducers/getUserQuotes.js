const array = [];
const quotesReducer = (state = array, action) => {
  switch (action.type) {
    case "LOAD_QUOTES":
      array = array.concat(...action.payload);
      return array;
    default:
      return state;
  }
};

export default quotesReducer;
