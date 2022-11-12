import { BUY_ICECREAM } from "./icecreamType";

const initState = {
    noOfIcecream: 20
}

const buyIcecreamReducer = (state = initState , action ) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            noOfIcecream: state.noOfIcecream - 1
        } 
        default: return state
    }
}

export default buyIcecreamReducer