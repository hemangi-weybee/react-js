import React, { useState } from 'react'
import useDocTitle from '../hooks/useDocTitle'

function CustomHookTitle() {

    const [count, setCount] = useState(0)

    useDocTitle(count)
    return (
        <div>
            CustomHookTitle 1
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default CustomHookTitle