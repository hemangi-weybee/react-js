import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPost, fetchUser } from '../actions';
import UserHeader from './UserHeader';

function PostList(props) {

    useEffect(() => {
        props.fetchPost();
    }, [])

    const renderList = () => {
        return props.posts.length ? props.posts.map(post => {
            return (
                <div className='item' key={post.id}>
                    <i className='large middle aligned icon user' />
                    <div className='content'>
                        <div className='description'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                    <UserHeader userId={post.userId} key={`${post.id}${post.userId}`}/>
                </div>
            )
        }) : <p>No Data Yet</p>
    }

    return (
        <div className='ui relaxed divided list'>
            {renderList()}
        </div>
    )
};

const mapStateToProps = (state) => {
    return { posts: state.posts};
};


export default connect(mapStateToProps, { fetchPost })(PostList);