// const convertArrayToObject = (array, key) => {
//   const initialValue = {};
//   return array.reduce((obj, item) => {
//     return {
//       ...obj,
//       [item[key]]: item,
//     };
//   }, initialValue);
// };

const quotesReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_QUOTES":
      // let newState = convertArrayToObject(action.payload, "id");
      return action.payload;
    case "RESET":
      return;
    default:
      return state;
  }
};

export default quotesReducer;
