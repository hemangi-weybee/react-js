import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

    render() {
        const { count } = this.props
        const { incrementCount } = this.props
        return (
            <h3 onMouseOver={incrementCount}>  Hover: {count} times</h3>
        )
    }
}

export default withCounter(HoverCounter, 2)