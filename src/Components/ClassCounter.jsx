import React, { Component } from "react";

export default class ClassCounter extends Component {
  state = {
    name: "",
    count: 0,
  };
  counterHandler = () => {
    const counter = this.state.count;
    this.setState({ counter: counter + 1 });
  };
  componentDidMount() {
    document.title = `clicked : ${this.state.count} times `;
  }
  componentDidUpdate(prevProps, prevState) { 
    //based on count state changes
   if(prevState.count !== this.state.count) {
    console.log("Document title updating")
    document.title = `clicked : ${this.state.count} times `;
   }
  } 
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count : {this.state.count}
        </button>
      </div>
    );
  }
}
