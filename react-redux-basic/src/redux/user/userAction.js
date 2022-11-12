import axios from "axios"
import { FETCH_REQUEST, FETCH_FAIL, FETCH_SUCCESS } from "./userType"

export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}
export const fetchSuccess = (users) => {
    return {
        type: FETCH_SUCCESS,
        payload: users
    }
}
export const fetchFail = (error) => {
    return {
        type: FETCH_FAIL,
        payload: error
    }
}

export const fetchUser = () => {
    return function (dispatch) {
        dispatch(fetchRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data.map(user => user.name)
                dispatch(fetchSuccess(users))
            })
            .catch(err => {
                const msg = err.message
                dispatch(fetchFail(msg))
            })
    }
}