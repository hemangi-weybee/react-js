import { FETCH_FAIL, FETCH_REQUEST, FETCH_SUCCESS } from "./userType"

const initState = {
    loading: false,
    users: [],
    error: ''
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: '',
            }
        case FETCH_FAIL:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer