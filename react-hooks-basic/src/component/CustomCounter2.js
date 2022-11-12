import React from 'react'
import useCounter from '../hooks/useCounter'

function CustomCounter2() {
    const [count, increment, decrement, reset] = useCounter(10, 5)
    return (
        <div> Count : {count}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CustomCounter2