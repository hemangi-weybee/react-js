import axios from "axios"
import { FETCH_REQUEST, FETCH_FAIL, FETCH_SUCCESS, FETCH_RESET } from "./fetchType"

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
export const fetchReset = () => {
    return {
        type: FETCH_RESET,
    }
}

export const fetchData = (filter, fetchCategory ,url='https://swapi.dev/api/') => {
    console.log(url);
    console.log(filter);
    return function (dispatch) {
        dispatch(fetchRequest())
        axios.get(`${url}${filter}`)
            .then(res => {
                console.log(res.data)
                dispatch(fetchSuccess(res.data))
                dispatch(fetchCategory(res.data))
            })
            .catch(err => {
                const msg = err.message
                dispatch(fetchFail(msg))
            })
    }
}