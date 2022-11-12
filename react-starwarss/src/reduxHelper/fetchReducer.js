import { FETCH_FAIL, FETCH_REQUEST, FETCH_RESET, FETCH_SUCCESS } from "./fetchType"

const initState = {
    loading: false,
    data: [],
    error: ''
}

export const fetchReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            }
        case FETCH_FAIL:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
        case FETCH_RESET:
            return {
                ...state,
                loading: false,
                data: [],
                error: ''
            }
        default:
            return state
    }
}

export default fetchReducer