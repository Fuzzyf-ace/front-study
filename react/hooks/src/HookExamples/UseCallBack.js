// useCallback with memo API
/**
 * we already know when we wrap a component with memo, it will only be rerendered when its props are changed
 * Besides, if we parse a function as a prop to a component, the component will be rerendered since the function is a reference value, it gets changed every time
 *
 * useCallback is used to solve this problem, we store the function using useCallback, avoid it to be recreated every time
 */

import React, { memo, useState, useCallback } from "react";

const SonComponentWithMemo = memo(({ onClick, children }) => {
  console.log(`${children} is rerendered`);
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
});

function App() {
  const [number, setNumber] = useState(0);
  console.log("app is rerendered");
  const useCallbackClickHandler = useCallback(
    () => console.log("useCallbackClickHandler"),
    []
  );
  const clickHanlder = () => console.log("clickHanlder");
  return (
    <div className="App">
      <button onClick={() => setNumber(number + 1)}>+</button>
      {number}
      <SonComponentWithMemo onClick={useCallbackClickHandler}>
        useCallbackClickHandler
      </SonComponentWithMemo>
      <SonComponentWithMemo onClick={clickHanlder}>
        clickHanlder
      </SonComponentWithMemo>
    </div>
  );
}

export default App;
