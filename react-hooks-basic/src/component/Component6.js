import React, { useContext } from 'react'
import { CountContext } from './ReducerWithContext'

function Component6() {
    const countContext = useContext(CountContext)
    return (
        <div>Component6 - {countContext.countState}
            <div>
                <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
                <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
                <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default Component6