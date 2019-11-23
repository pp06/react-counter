import React, { useState, useCallback } from 'react';

export const useCounter = (startValue) => {
  let [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((x) => x + 1), [])
  const decrement = useCallback(() => setCount((x) => x - 1), [])
  return { count, increment, decrement }
}

function Counter() {
  let { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <button onClick={increment} >+1</button>
      <div>{count}</div>
      <button onClick={decrement} >-1</button>
    </div>
  );
}


export default Counter;
