import React, { PureComponent } from 'react'
import RegComponent from './RegComponent'

class PureComp extends PureComponent {

  render() {
    console.log('Pure')
    return (
      <div>PureComponent {this.props.name}
      </div>
    )
  }
}

export default PureComp