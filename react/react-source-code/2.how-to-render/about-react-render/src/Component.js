export default class Component {
  static isReactComponent = true;
  constructor(props) {
    this.props = props;
    this.state = {};
  }
  setState(partialState) {
    // this.state = Object.assign({}, this.state, partialState);
    this.state = { ...this.state, ...partialState };
    const virtualDOM = this.render();
    updateClassComponent(this, virtualDOM);
  }
}
