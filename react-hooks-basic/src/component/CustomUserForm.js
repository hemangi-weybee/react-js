import React from 'react'
import useInput from '../hooks/useInput'

function CustomUserForm() {

    const [firstname, bindFirstname, resetFirstname] = useInput('')
    const [lastname, bindLastname, resetLastname] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello! ${firstname} ${lastname}`)
        resetFirstname()
        resetLastname()
    }
    return (
        <div>
            CustomUserForm

            <form onSubmit={submitHandler}>
                <input type="text" placeholder='First Name' {...bindFirstname}></input>
                <input type="text" placeholder='Last Name' {...bindLastname}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CustomUserForm