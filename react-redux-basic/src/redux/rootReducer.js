import { combineReducers } from "redux";
import buyCakeReducer from "./cakes/cakeReducer";
import buyIcecreamReducer from "./icecream/icecreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({ 
    cake: buyCakeReducer, 
    icecream: buyIcecreamReducer,
    user: userReducer
})

export default rootReducer
