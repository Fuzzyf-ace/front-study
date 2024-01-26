import ReactDOM from "./react-dom";
export const updaterQueue = {
  isBatchingUpdate: false,
  updaters: new Set(),
};

// TODO: when to use flushUpdaterQueue?
export function flushUpdaterQueue() {
  updaterQueue.updaters.forEach((updater) => updater.launchUpdate());
  updaterQueue.isBatchingUpdate = false;
  updaterQueue.updaters.clear();
}

class Updater {
  constructor(classInstance) {
    this.classInstance = classInstance;
    this.pendingStates = [];
  }
  addState(partialState) {
    this.pendingStates.push(partialState);
    this.preHandleUpdate();
  }
  preHandleUpdate() {
    if (updaterQueue.isBatchingUpdate) {
      updaterQueue.updaters.add(this);
    } else {
      this.launchUpdate();
    }
  }
  launchUpdate() {
    const { classInstance, pendingStates } = this;
    classInstance.state = pendingStates.reduce((preState, curState) => {
      return { ...preState, ...curState };
    }, classInstance.state);
    pendingStates.length = 0;
  }
}

export default class Component {
  static isReactComponent = true;
  constructor(props) {
    this.props = props;
    this.state = {};
    this.updater = new Updater(this);
    this.oldVirtualNode = null;
  }
  setState(partialState) {
    // this.state = Object.assign({}, this.state, partialState);
    // 合并state
    // this.state = { ...this.state, ...partialState };
    this.updater.addState(partialState);
    // 更新组件
    this.update();
  }
  update() {
    const oldVirtualNode = this.oldVirtualNode;
    const oldRealDOM = ReactDOM.findDOMByVirtualNode(oldVirtualNode);
    const newVirtualNode = this.render();
    const newRealDOM = ReactDOM.createRealDOM(newVirtualNode);
    // TODO: compare oldVirtualNode and newVirtualNode to improve performance for updating instead of replacing all the time
    oldRealDOM.parentNode.replaceChild(newRealDOM, oldRealDOM);
    this.oldVirtualNode = newVirtualNode;
  }
  render() {
    throw new Error("Component should implement render method");
  }
}
