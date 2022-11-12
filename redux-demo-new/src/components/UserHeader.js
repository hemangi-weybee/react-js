import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

function UserHeader(props) {

    useEffect(() => {
        props.userId && props.fetchUser(props.userId);
    }, [])
    
    if (!props.user) return null
    return (
        <div className='header'>
            {props.user && props.user.name}
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    console.log(state.users)
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);