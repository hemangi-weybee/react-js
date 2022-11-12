import React, { useReducer } from 'react'
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
export const CountContext = React.createContext()

function ReducerWithContext() {
    const [count, dispatch] = useReducer(reducer, initialState) //move const outside the render */}
    return (
        <div>ReducerWithContext

            Count - {count}
            <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
                <Component1 />
                <Component2 />
                <Component3 />
            </CountContext.Provider >
        </div>
    )
}

export default ReducerWithContext