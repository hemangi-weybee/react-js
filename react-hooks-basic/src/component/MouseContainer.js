import React, { useState } from 'react'
import MouseUseEffect from './MouseUseEffect'

function MouseContainer() {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>
                Toggle display
            </button>

            {display && <MouseUseEffect/> }
        </div>
    )
}

export default MouseContainer