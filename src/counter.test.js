import React from "react";
import Counter, { useCounter } from "./counter";
import { renderHook, act } from "@testing-library/react-hooks";

test("increment", () => {
  const { result } = renderHook(() => useCounter());
  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

test("decrement", () => {
  const { result } = renderHook(() => useCounter());
  act(() => {
    result.current.decrement();
  });

  expect(result.current.count).toBe(-1);
});
