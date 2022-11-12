import React, { useContext } from 'react'
import { CountContext } from './ReducerWithContext'

function Component1() {

    const countContext = useContext(CountContext)
    return (
        <div>Component1 - {countContext.countState}
            <div>
                <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
                <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
                <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default Component1