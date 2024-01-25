import React from "./react";
import ReactDOM from "./react-dom";

// function FunctionComponent({ name, color }) {
//   return (
//     <div className="function-component">
//       <p style={{ color }}>Function Component</p>
//       <p>{name}</p>
//     </div>
//   );
// }

class ClassComponent extends React.Component {
  render() {
    const { name, color } = this.props;
    return (
      <div className="class-component">
        <p style={{ color }}>Class Component</p>
        <p>{name}</p>
      </div>
    );
  }
}
const root = document.getElementById("root");

ReactDOM.render(<ClassComponent name="name" color="red" />, root);
