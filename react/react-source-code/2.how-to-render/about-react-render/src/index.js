import React, { createRef } from "./react";
import ReactDOM from "./react-dom";

// function FunctionComponent({ name, color }) {
//   return (
//     <div className="function-component">
//       <p style={{ color }}>Function Component</p>
//       <p>{name}</p>
//     </div>
//   );
// }

class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
  }
  render() {
    return <input ref={this.props.ref}></input>;
  }
}

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };
    this.inputRef = createRef();
  }
  render() {
    const { color } = this.props;
    // debugger;
    return (
      <div className="class-component">
        <p style={{ color }}>Class Component</p>
        <input ref={this.inputRef}></input>
        {/* <CustomInput ref={this.inputRef} style={{ color: "red" }} /> */}
        <p
          onClick={() => {
            // debugger;
            console.log("click");
            this.setState({ name: this.state.name + " new appending" });
            this.inputRef.current.focus();
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
