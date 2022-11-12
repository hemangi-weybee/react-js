import React, { Component } from 'react'

class HoverCounter2 extends Component {
    
    render() {
        const { count, incrementCount } = this.props

        return (
            <h3 onMouseOver={incrementCount}> Hover : {count}</h3>
        )
    }
}

export default HoverCounter2