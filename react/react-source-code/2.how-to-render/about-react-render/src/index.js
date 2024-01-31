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
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };
  }
  render() {
    const { color } = this.props;
    return (
      <div className="class-component">
        <p style={{ color }}>Class Component</p>
        <p
          onClick={() => {
            // debugger;
            this.setState({ name: this.state.name + " new appending" });
          }}
        >
          {this.state.name}
        </p>
      </div>
    );
  }
}
const root = document.getElementById("root");

ReactDOM.render(<ClassComponent name="name" color="red" />, root);
