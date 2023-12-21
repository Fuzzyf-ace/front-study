import React, { useRef, forwardRef } from "react";

/**
 * https://react.dev/reference/react/forwardRef
 * we cannot pass ref as a prop to a component, we need to use forwardRef
 */

/**
 *
 * @param {*} param0
 * @returns
 * react-dom.development.js:86 Warning: Function components cannot be given refs. Attempts to access this ref will fail.
 * Did you mean to use React.forwardRef()?
 */
const SonComponent = ({ ref, ...props }) => {
  console.log(ref); //undefined
  return (
    <div>
      SonComponent
      <input ref={ref} onChange={() => console.log(ref)} />
      {/* undefined */}
    </div>
  );
};

const SonComponentWithForwardRef = forwardRef((props, ref) => {
  return (
    <div>
      SonComponentWithForwardRef:
      <input ref={ref} onChange={() => console.log(ref.current.value)} />
      {/* //input value */}
    </div>
  );
});

function App() {
  console.log("app is rerendered");
  const inputRef = useRef();
  return (
    <div className="App">
      <SonComponent ref={inputRef} />
      <SonComponentWithForwardRef ref={inputRef} />
    </div>
  );
}

export default App;
