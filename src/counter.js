import React from "react";
import useCounter from "./useCounter";

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={increment}>+1</button>
      <div>{count}</div>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;
