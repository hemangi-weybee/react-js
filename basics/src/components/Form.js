import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            topic:'1'
        }
    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleCommentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    handleTopicChange = (e) => {
        this.setState({
            topic: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    }
    
    render() {
        const { username, comment, topic } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text'
                        value={username}
                        onChange={this.handleUsernameChange} />
                </div>
            
                <div>
                    <label>Comment</label>
                    <textarea 
                        value={comment}
                        onChange={this.handleCommentChange} />
                </div>

                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}> 
                        <option value="1">React</option>
                        <option value="2">Angular</option>
                        <option value="3">Vue</option>
                    </select>
                </div>

                <div>
                    <button type='submit'> Submit </button>
                </div>
            </form>
        )
    }
}

export default Form