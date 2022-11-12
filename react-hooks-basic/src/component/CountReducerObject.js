import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CountReducerObject() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            CountReducerObject

            <div>
                Counter 1 : {count.firstCounter} <br></br>
                Counter 2: {count.secondCounter} <br></br>
                <button onClick={() => dispatch({ type: 'increment', value: 1 })}> FirstCounter Increment</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 1 })}> FirstCounter Decrement</button>

                <button onClick={() => dispatch({ type: 'increment2', value: 10 })}> SecondCounter Increment 10</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}> SecondCounter Decrement 5</button>

                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
        </div>
    )
}

export default CountReducerObject