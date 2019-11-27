import React from "react";
import "./App.css";
import CounterProvider from "./CounterProvider";
import Counter from "./counter";

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}

export default App;
