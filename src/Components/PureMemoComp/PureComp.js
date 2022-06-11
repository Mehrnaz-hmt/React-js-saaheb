import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  render() {
      console.log("Pure Comp")
    return (
      <div>PureComp- {this.props.name}</div>
    )
  }
}

