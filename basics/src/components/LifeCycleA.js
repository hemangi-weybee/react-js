import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Damon'
        }
        console.log('LifeCycleMethods[A]')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleMethods[A] getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleMethods[A] componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleMethods[A] shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleMethods[A] getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleMethods[A] componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Elena'
        })
    }

    render() {
        console.log('LifeCycleMethods[A] render')
        return (
            <div>
                LifeCycleA

                <button onClick={this.changeState}> Change State </button>
                {/* <LifeCycleB/> */}
            </div>
        )
    }
}

export default LifeCycleA