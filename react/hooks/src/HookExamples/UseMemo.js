import React, { useMemo, useState } from "react";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const fibonacci = useMemo(() => {
    console.log("fibonacci is recalculated");
    const fib = (n) => {
      if (n <= 1) return n;
      return fib(n - 1) + fib(n - 2);
    };
    return fib(number1);
  }, [number1]);
  console.log("app is rerendered");

  return (
    <div className="App">
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <p>{fibonacci}</p>
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
    </div>
  );
}

export default App;
