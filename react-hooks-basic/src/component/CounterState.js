import React, { useState } from 'react'

function CounterState() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Count {count}
            </button>
        </div>
    )
}

export default CounterState