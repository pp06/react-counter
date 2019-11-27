import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";
import CounterProvider from "./CounterProvider";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <CounterProvider>
      <Counter />
    </CounterProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
