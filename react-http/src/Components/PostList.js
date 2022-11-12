import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({
                    posts: response.data
                })
            })
            .catch(err => { 
                console.error(err.message)
                this.setState({ errorMsg: 'Something went wrong' }) })
    }

    render() {
        const { posts } = this.state
        return (
            <div>
                <h1>List of Posts</h1>
                {
                    posts.length ?
                        posts.map(post => <div key={post.id}> {post.title} </div>) :
                        null
                }
            </div>
        )
    }
}

export default PostList