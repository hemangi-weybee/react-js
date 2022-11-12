import React, { Component } from 'react'

class RegComponent extends Component {
  render() {
    console.log('Regular')
    return (
      <div>RegComponent {this.props.name}</div>
    )
  }
}

export default RegComponent