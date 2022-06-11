import React, { Component } from 'react'

export default class RegComp extends Component {
  render() {
    console.log("Reg Comp")
    return (
      <div>Reg Comp {this.props.name}</div>
    )
  }
}
