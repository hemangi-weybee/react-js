import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)

        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            this.state)
            .then(response => console.log(response))
            .catch(err => console.error(err))
    }
    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <h2>Post Form</h2>
                <form>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler} placeholder="User ID"></input>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler} placeholder="Title"></input>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler} placeholder="Content"></input>
                    </div>
                    <div>
                        <button type="submit" name="post" onClick={this.submitHandler}>Post</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm