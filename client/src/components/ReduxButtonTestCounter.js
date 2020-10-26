import React from "react";
import { increment, decrement } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const ReduxButtonTestCounter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        +
      </button>
    </div>
  );
};

export default ReduxButtonTestCounter;