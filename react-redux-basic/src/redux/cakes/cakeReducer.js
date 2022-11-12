import { BUY_CAKE } from "./cakeType";

const initState = {
    noOfCake: 100
}

export const buyCakeReducer = (state = initState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            noOfCake: state.noOfCake - action.payload,
        }
        default: return state
    }
}

export default buyCakeReducer