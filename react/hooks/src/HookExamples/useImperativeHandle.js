import React, { useRef, forwardRef, useImperativeHandle } from "react";

/**
 * https://react.dev/reference/react/useImperativeHandle
 * we can use useImperativeHandle to hide some functions from the parent component
 *
 * why we need to hide some functions from the parent component?
 * for better Encapsulation and Security purpose
 *
 *
 */

const SonComponentWithForwardRef = forwardRef((props, ref) => {
  return (
    <div>
      SonComponentWithForwardRef:
      <input ref={ref} onChange={() => console.log(ref.current.value)} />
      {/* //input value */}
    </div>
  );
});

const SonComponentBoxedWithUseImperativeHandle = forwardRef((props, ref) => {
  const inputRef = useRef();
  // only expose specific functions to the parent component
  useImperativeHandle(ref, () => ({
    // value: inputRef.current.value,   // this will not work if we comment out the exposed function
    focus: () => inputRef.current.focus(),
  }));

  return (
    <div>
      SonComponentBoxedWithUseImperativeHandle:
      <input
        ref={inputRef}
        onChange={() => console.log(inputRef.current.value)}
      />
      {/* //input value */}
    </div>
  );
});

function App() {
  console.log("app is rerendered");
  const inputRef = useRef();
  const inputRef2 = useRef();
  return (
    <div className="App">
      <div>
        SonComponentWithForwardRef
        <SonComponentWithForwardRef ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>focus</button>
        <button onClick={() => console.log(inputRef.current.value)}>
          this will work because we didnot use useImperativeHandle to hide any
          function
        </button>
      </div>
      <div>
        SonComponentBoxedWithUseImperativeHandle
        <SonComponentBoxedWithUseImperativeHandle ref={inputRef2} />
        <button onClick={() => inputRef2.current.focus()}>focus</button>
        <button onClick={() => console.log(inputRef2.current.value)}>
          this will not work if we comment out the exposed function get value
        </button>
      </div>
    </div>
  );
}

export default App;
