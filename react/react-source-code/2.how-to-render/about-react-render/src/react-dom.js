import { REACT_ELEMENT } from "./react";

function render(VirtualNode, containerDOM) {
  // 将虚拟dom转换成真实dom（挂载）
  // mount virtual dom to real dom
  mount(VirtualNode, containerDOM);
}

function mount(VirtualNode, containerDOM) {
  // 将虚拟dom转换成真实dom（挂载）
  // mount virtual dom to real dom
  // 1. create real dom
  const realDOM = createRealDOM(VirtualNode);
  // 2. mount real dom to container
  realDOM && containerDOM.appendChild(realDOM);
}

function createRealDOM(VirtualNode) {
  //type, props, and children are the properties we needed when use React.creatElement function
  // 1. create real dom
  const { type, props } = VirtualNode;
  const children = props.children;
  let realDOM = null;
  //   console.log("VirtualNode.$$typeof", VirtualNode.$$typeof);
  //   console.log("REACT_ELEMENT", REACT_ELEMENT);
  //   console.log(VirtualNode.$$typeof === REACT_ELEMENT); //false
  debugger;
  if (type && VirtualNode.$$typeof === REACT_ELEMENT) {
    realDOM = document.createElement(VirtualNode.type);
  }
  // 2. set children
  if (children) {
    if (Array.isArray(children)) {
      children.forEach((child) => {
        if (typeof child === "string") {
          realDOM.appendChild(document.createTextNode(child));
        } else {
          mount(child, realDOM);
        }
      });
    } else if (typeof children === "string") {
      realDOM.appendChild(document.createTextNode(children));
    } else {
      mount(children, realDOM);
    }
  }
  // 3. set props

  return realDOM;
}

const ReactDOM = {
  render,
};

export default ReactDOM;
