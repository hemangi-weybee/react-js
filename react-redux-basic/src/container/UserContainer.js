import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../redux'

function UserContainer(props) {

    useEffect(() => {
        props.fetchUser()
    }, [])

    return (
        <div>
            {props.userData.loading ?
                <h2>Loading...</h2> :
                props.userData.error ? <h2> {props.userData.error} </h2> :
                    <div>
                        <h2> Users List </h2>
                        {
                            props.userData &&
                            props.userData.users &&
                            props.userData.users.map(data => <p key={data}> {data} </p>)
                        }
                    </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)