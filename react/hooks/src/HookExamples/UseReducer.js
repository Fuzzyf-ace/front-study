import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      if (action.operand) return state + action.operand;
      return state + 1;
    case "sub":
      if (action.operand) return state - action.operand;
      return state - 1;
    case "reset":
      return;
    default:
      return state;
  }
};

//init function, for better performance
/**
 *
 * Notice that you’re passing createInitialState, which is the function itself, and not createInitialState(),
 * which is the result of calling it. This way, the initial state does not get re-created after initialization.} initialCount
 * https://react.dev/reference/react/useReducer
 */
const init = (initialCount) => {
  return initialCount + 10;
};

function App() {
  const [number, dispatch] = useReducer(reducer, 0, init);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "add", operand: 2 })}>+2</button>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      {number}
      <button onClick={() => dispatch({ type: "sub" })}>-</button>
      <button onClick={() => dispatch({ type: "sub", operand: 2 })}>-2</button>
    </div>
  );
}

export default App;
