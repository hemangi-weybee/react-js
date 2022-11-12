import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <h4>{this.props.render(true)}</h4>
    )
  }
}

export default User