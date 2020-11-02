const initialState = {
  user: null,
  loading: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_DATA":
      return { ...state, user: action.payload };
    case "LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default userReducer;
