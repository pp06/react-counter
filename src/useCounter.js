import { useContext } from "react";
import { CounterContext } from "./CounterProvider";

const useCounter = () => {
  const [count, setCount] = useContext(CounterContext);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  return { count, increment, decrement };
};

export default useCounter;
