// https://react.dev/reference/react/memo
//memo lets you skip re-rendering a component when its props are unchanged.

// props comparison rules:
// 1. primitive values: ===
// 2. reference values: shallow comparison, if any reference value is changed, it will be rerendered

import React, { memo, useState } from "react";

const SonComponent = () => {
  console.log("sonComponen without memo wrapped is rerendered");
  return (
    <div>
      <p>sonComponent</p>
    </div>
  );
};

const SonComponentMemo = memo((props) => {
  console.log("sonComponen with memo wrapped is rerendered");
  return (
    <div>
      <p>SonComponentMemo props:{props.number}</p>
    </div>
  );
});

function App() {
  const [number, setNumber] = useState(0);
  console.log("app is rerendered");
  return (
    <div className="App">
      <button onClick={() => setNumber(number + 1)}>+</button>
      {number}
      <SonComponent />
      <SonComponentMemo />
      <SonComponentMemo number={number} />
    </div>
  );
}

export default App;
