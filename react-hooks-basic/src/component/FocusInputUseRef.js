import React, { useEffect, useRef } from 'react'

function FocusInputUseRef() {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            FocusInputUseRef <br/>

            <input ref={inputRef} type="text"></input>
        </div>
    )
}

export default FocusInputUseRef