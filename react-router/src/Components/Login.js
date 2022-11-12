import React, { useState } from 'react'
import { useAuth } from './auth'
import { useNavigate, useLocation } from 'react-router-dom'

function Login() {

    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || '/'

    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, {replace:true})
    }

    return (
        <div>
            Username :
            <input type='text' placeholder='Username' onChange={e => setUser(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login