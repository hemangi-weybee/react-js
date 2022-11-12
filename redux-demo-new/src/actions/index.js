import _ from "lodash";
import jsonPlaceholder from "../axios/jsonPlaceholder";

export const FETCH_POST = 'FETCH_POST';
export const FETCH_USER = 'FETCH_USER';
export const LOADING = 'LOADING';

const _fetchPost = _.memoize(async dispatch => {
    dispatch({ type: LOADING, payload: true });
    try {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({ type: FETCH_POST, payload: response.data });
        dispatch({ type: LOADING, payload: false });
    } catch(err) {
        dispatch({ type: FETCH_POST, payload: err.message });
        dispatch({ type: LOADING, payload: false });
    }
})

export const fetchPost = () => dispatch => _fetchPost(dispatch);

const _fetchUser = _.memoize(async (userID, dispatch) => {

    try {
        const response = await jsonPlaceholder.get(`/users/${userID}`);
        dispatch({ type: FETCH_USER, payload: response.data });

    } catch (err) {
        dispatch({ type: FETCH_USER, payload: err.message });
    }
});

export const fetchUser = (userID) => dispatch => _fetchUser(userID, dispatch);