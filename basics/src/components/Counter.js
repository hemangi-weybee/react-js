import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  increment(){
    // this.setState({
    //     count: this.state.count + 1, 
    // }, () => console.log('callback value: ', this.state.count))
    
    this.setState((prevState) => ({
        count: prevState.count + 1
    }))
  }

  incrementByFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  display() {
    console.log('hii')
  }

  render() {
    return (
        <div>
            <div>Count - {this.state.count}</div>
            <button onClick={()=> this.incrementByFive()}>Add 5</button>
            <button onClick={this.display}>Log Hii</button>
        </div>
    )
  }
}

export default Counter