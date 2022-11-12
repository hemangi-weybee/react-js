import { FETCH_POST, LOADING } from "../actions";

export const postsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_POST: {
            return action.payload;
        }
        default: return state;
    };
};

export const loadingReducer = (state = true, action) => {
    switch (action.type) {
        case LOADING: {
            return action.payload;
        }
        default: return state;
    };
}