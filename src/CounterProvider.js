import React, { useState } from "react";

const defaultState = 0;

const CounterContext = React.createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(defaultState);
  return (
    <CounterContext.Provider value={[count, setCount]}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext };
export default CounterProvider;
