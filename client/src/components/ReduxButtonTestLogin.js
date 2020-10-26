import React from "react";
import { login } from "../actions";
import { useDispatch } from "react-redux";

const ReduxButtonTestCounter = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login());
        }}
      >
        Log In
      </button>
    </div>
  );
};

export default ReduxButtonTestCounter;
