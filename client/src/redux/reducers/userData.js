const userReducer = (state = null, action) => {
  switch (action.type) {
    case "USER_NAME":
      let userName = action.payload.userFirst + " " + action.payload.userLast;
      return userName;
    default:
      return state;
  }
};

export default userReducer;
