import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
            // isLoggedIn: false
        }
    }
    render() {
        // if (this.state.isLoggedIn) {
        //     return <div>Hello User!</div>
        // } else {
        //     return <div>Hello Guest!</div>
        // }

        // let message = this.state.isLoggedIn ? 'Hello User!' : 'Hello Guest!'

        // return(
        //     <div>{message}</div>
        // )

        // return this.state.isLoggedIn ?
        //     (<div>Hello Damon!</div>) : 
        //     (<div>Hello Guest!</div>)


        return (
            this.state.isLoggedIn && <div>Hello Damon!</div>
        )
    }
}

export default UserGreeting