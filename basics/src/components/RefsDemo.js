import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)

        //way-1 createRef()
        this.inputRef = React.createRef()
        
        //way-2 (callback function)
        this.cbRef = null
        this.setRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        /* way-1 */
        // console.log(this.inputRef)
        // this.inputRef.current.focus()

        /* way-2 */
        if (this.cbRef) this.cbRef.focus()
    }

    clickHandler = () => {
        /* way-1 */
        // alert(this.inputRef.current.value)

        /* way-2 */
        alert(this.cbRef.value)
    }

    render() {
        return (
            <div>
                {/* way-1 */}
                {/* <input type="text" ref={this.inputRef} /> */}

                {/* way-2 */}
                <input type="text" ref={this.setRef} />
                <br></br>
                <button onClick={this.clickHandler}> Click here</button>
            </div>
        )
    }
}

export default RefsDemo