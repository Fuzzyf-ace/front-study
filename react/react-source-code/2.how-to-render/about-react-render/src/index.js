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
    this.ref = createRef();
  }

  focusInput() {
    this.ref.current.focus();
  }

  render() {
    return <input ref={this.ref}></input>;
  }
}

/**
 * 为什么不将ref作为props传递给FunctionComponent
 * 因为FunctionComponent是一个函数，它没有实例，所以无法使用ref
 * 如果我们将ref传递给function component中的一个子元素，那么违背了ref的设计原则，即ref应该指向书写ref属性的元素，而不是他的子元素
 * 我们想要的效果：
 * <FunctionInputComponent ref={inputRef} /> => < ref={inputRef}> <input /> <SomeOtherComponents></SomeOtherComponents></>
 *
 * 因此我们需要使用forwardRef，来表示我们想要将ref传递给子元素
 *
 */
// const FunctionInputComponent = (props) => {
//   // return <input ref={}></input>;  // this is not working, we need to use forwardRef
//   return <input ref={}></input>; // this is not following the ref design principle
// };

// const FunctionInputComponent = React.forwardRef(function FunctionInputComponent(
//   props,
//   ref
// ) {
//   return <input ref={ref}></input>;
// });

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
        {/* <input ref={this.inputRef}></input> */}
        <CustomInput ref={this.inputRef} style={{ color: "red" }} />
        {/* <FunctionInputComponent ref={this.inputRef} /> */}
        <p
          onClick={() => {
            console.log("click");
            this.setState({ name: this.state.name + " new appending" }); // this will be stacked in update queue
            this.setState({ name: this.state.name + " sadf" }); // this will output this.state.name +  "sadf" instead of this.state.name + "new appending" + "sadf"
            this.inputRef.current.focusInput(); // for class component, the current is the instance of the class
            // this.inputRef.current.focus(); // for function component, the current is the dom element
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
