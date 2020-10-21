import React, { useState } from "react";
// import LogInElementButton from "./LogInElementButton";

const LogInElements = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p> u clicked the counter {count} times </p>
      <button onClick={() => setCount(count + 1)}>click me </button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   // instructions about how the state managed by redux should be mapped to props used in this container / it stores a function

//   return {
//     ctr: state.counter,
//   };
// };

// // which kind of actions i wanna dispatch in this container
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
//     // returns a call to dispatch
//     // value shall be an anonymous function
//   };
// };

// export default connect(null, mapStateToProps)(LogInElements);
// through connect we can access the store

export default LogInElements;
