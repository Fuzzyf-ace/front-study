export const REACT_ELEMENT = Symbol.for("react.element");
import Component from "./Component";
function createElement(type, properties, children) {
  const ref = properties.ref || null;
  const key = properties.key || null;
  //   ["__self", "__source"].forEach((k) => delete properties[k]);
  const props = {
    ...properties,
  };
  //   debugger;
  if (arguments.length > 3) {
    props.children = Array.prototype.slice.call(arguments, 2);
  } else {
    props.children = children ? [...children] : [];
  }
  return {
    $$typeof: REACT_ELEMENT,
    type,
    props: props,
    ref,
    key,
  };
}
export function createRef() {
  return { current: null };
}

export function forwardRef(render) {
  // copilot suggestion:
  //   return class extends Component {
  //     render() {
  //       return render(this.props, this.props.ref);
  //     }
  //   };
}

const React = {
  createElement,
  Component,
  createRef,
  forwardRef,
};

export default React;
