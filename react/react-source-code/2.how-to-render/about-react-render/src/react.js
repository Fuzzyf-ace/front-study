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

const React = {
  createElement,
  Component,
  createRef,
};

export default React;
