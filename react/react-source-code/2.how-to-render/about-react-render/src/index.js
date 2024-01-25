import ReactDOM from "react-dom";
// import React from "react";
import React, { REACT_ELEMENT } from "./react";
// import ReactDOM from "./react-dom";
// create a virtual element using Babel to compile JSX to React.createElement(js)
const ele = (
  <div
    className="classname"
    style={{ color: "red" }}
    onClick={() => {
      console.log("dafs");
    }}
  >
    this is virtual
    <span>
      <span> inner span </span>
      span
    </span>
  </div>
);

// mount created elements to real dom
ReactDOM.render(
  //   {
  //     // this is a virtual dom demo, the return value of React.createElement function
  //     $$typeof: REACT_ELEMENT,
  //     type: "div",
  //     props: { children: "Hello JSX" },
  //     ref: null,
  //     key: null,
  //   },
  ele,
  document.getElementById("root")
);
console.log("ele", ele);
