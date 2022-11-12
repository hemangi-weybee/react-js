import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Damon'
        }
        console.log('LifeCycle[B]')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle[B] getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycle[B] componentDidMount')
    }

    render() {
        console.log('LifeCycle[B] render')
        return (
            <div>LifeCycleB</div>
        )
    }
}

export default LifeCycleB