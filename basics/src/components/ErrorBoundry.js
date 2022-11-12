import React, { Component } from 'react'

class ErrorBoundry extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false,
            errorMsg: ''
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            errorMsg: error.message
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }

    render() {

        if(this.state.hasError)
            return <h1> {this.state.errorMsg} </h1>
        
        return this.props.children
        
    }
}

export default ErrorBoundry