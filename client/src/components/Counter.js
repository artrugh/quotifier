import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p> u clicked the counter {count} times </p>
      <button onClick={() => setCount(count + 1)}>click me </button>
    </div>
  );
};

export default Counter;
