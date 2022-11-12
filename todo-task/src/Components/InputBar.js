import React, { PureComponent } from 'react'

class InputBar extends PureComponent {
    render() {
        const className = this.props.activeBtn !== null ? 'inputBar' : 'inputBar hidden'

        return (
            <div className={className}>
                <input type="text"
                    name="inputBox"
                    id="inputBox"
                    autoComplete="off"
                    onKeyUp={this.props.inputHandler}
                    ></input>
            </div>
        )

    }
}

export default InputBar