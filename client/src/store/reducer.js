import * as actionTypes from "./actions";

const initialState = {
  signIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return {
        ...state,
        signIn: state.signIn === true,
      };
  }
  return state;
};

export default reducer;
