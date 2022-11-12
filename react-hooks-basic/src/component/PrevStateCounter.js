import React, { useState } from 'react'

function PrevStateCounter() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let index = 0; index < 5; index++) {
            setCount((previousCount) => previousCount + 1)
        }
    }
    return (
        <div>
            Count: {count} <br></br>
            <button onClick={() => setCount(previousCount => previousCount + 1)}>Increment</button>
            <br></br>
            <button onClick={() => setCount(previousCount => previousCount - 1)}>Decrement</button>
            <br></br>
            <button onClick={incrementFive}>Increment 5</button>
            <br></br>
            <button onClick={() => setCount(initialCount)}>Reset</button>
        </div>
    )
}

export default PrevStateCounter