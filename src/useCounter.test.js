import React from "react";
import CounterProvider from "./CounterProvider";
import useCounter from "./useCounter";
import { renderHook, act } from "@testing-library/react-hooks";

test("increment", () => {
  const wrapper = ({ children }) => (
    <CounterProvider>{children}</CounterProvider>
  );
  const { result } = renderHook(() => useCounter(), { wrapper });
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
});

test("decrement", () => {
  const wrapper = ({ children }) => (
    <CounterProvider>{children}</CounterProvider>
  );
  const { result } = renderHook(() => useCounter(), { wrapper });
  act(() => {
    result.current.decrement();
  });
  expect(result.current.count).toBe(-1);
});
