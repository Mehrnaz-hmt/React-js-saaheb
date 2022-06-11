import React, { Component,createRef } from "react";

export default class ClassRef extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.inputRefff = createRef();
  }
  componentDidMount() {
    console.log(this.inputRefff.current);
    this.inputRefff.current.focus()
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRefff}/>
      </div>
    );
  }
}
