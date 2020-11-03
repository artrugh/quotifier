const userReducer = (state = null, action) => {
  switch (action.type) {
    case "USER_NAME":
      let userName = action.payload.userFirst + " " + action.payload.userLast;
      return userName;
    case "LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default userReducer;
