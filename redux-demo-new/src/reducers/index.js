import { combineReducers } from "redux";
import { loadingReducer, postsReducer } from "./postsReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
    loading: loadingReducer,
    posts: postsReducer,
    users: userReducer,
});