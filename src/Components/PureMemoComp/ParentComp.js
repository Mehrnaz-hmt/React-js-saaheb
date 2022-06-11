import React, { PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

export default class ParentComp extends PureComponent {
  state = {
    name: "saheb",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "saheb" });
    }, 1000);
  }
  render() {
    console.log("Parent Com ---------------------------")
    return (
      <div>
        Parent Component
        <PureComp name={this.state.name} />
        <RegComp name={this.state.name} />
      </div>
    );
  }
}
