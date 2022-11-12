import React, { Component } from 'react'
import MemoComp from './MemoComp'
// import PureComp from './PureComp'
// import RegComponent from './RegComponent'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Damon'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Elena'
            })
        }, 2000)
    }

    render() {
        console.log('-----------------Parent----------------')
        return (
            <div>ParentComp
                <MemoComp name={this.state.name}/>
                {/* <RegComponent name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp