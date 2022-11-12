import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }

    //   this.clickHandler = this.clickHandler.bind(this) {/* Way-3 */}
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'Good bye!'
    //     }) 
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message: 'Good bye!'
        }) 
    }
  render() {
    return (
      <div>{this.state.message}
        <br/>
        {/* <button onClick={this.clickHandler.bind(this)}>Logout</button> */} {/* Way-1 */}
        {/* <button onClick={() => this.clickHandler()}>Logout</button> */} {/* Way-2 */}
        {/* <button onClick={this.clickHandler}>Logout</button>   */} {/* Way-3 */}
        <button onClick={this.clickHandler}>Logout</button>  {/* Way-4 */}
      </div>

    )
  }
}

export default EventBind