import React, { Component } from "react";

class Message extends Component{

    constructor() {
        super()
        this.state = {
            name: 'Brother'
        }
    }

    changeName() {
        this.setState({
            name: 'Damon'
        })
    }

    render() { 
        return (
            <div>
                <h3> Hello {this.state.name}!</h3>
                <button onClick={() => this.changeName()}> Change text </button>
            </div>
        )
    }
}

export default Message;