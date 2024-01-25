import React from "./react";
import ReactDOM from "./react-dom";

function FunctionComponent({ name, color }) {
  return (
    <div className="function-component">
      <p style={{ color }}>Function Component</p>
      <p>{name}</p>
    </div>
  );
}
const root = document.getElementById("root");

ReactDOM.render(<FunctionComponent name="name" color="red" />, root);
