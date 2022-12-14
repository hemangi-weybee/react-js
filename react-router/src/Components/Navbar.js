import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'


function Navbar() {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bolder' : 'normal',
            color: isActive ? '#3CB371' : 'black'
        }
    }

    const auth = useAuth()

    return (
        <nav className='primary-nav'>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>
            <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
            <NavLink style={navLinkStyles} to='/profile'>Profile</NavLink>

            {
                !auth.user && (
                    <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
                )
            }
        </nav>
    )
}

export default Navbar