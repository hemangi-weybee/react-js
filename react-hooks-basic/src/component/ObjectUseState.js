import React, { useState } from 'react'

function ObjectUseState() {
    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    })

    return (
        <form>
            <input value={name.firstName} type='text'
            onChange={e => setName({ ...name, firstName: e.target.value })}></input>
            <input value={name.lastName} type='text'
            onChange={e => setName({ ...name, lastName: e.target.value })}></input>

            <h3>FirstName : {name.firstName}</h3>
            <h3>LastName : {name.lastName}</h3>
        </form>
    )
}

export default ObjectUseState
