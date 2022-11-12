import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
    return (
        <>
            <div>
                <input type='search' placeholder='Search Product'/>
            </div>

            <nav className='secondary-nav'>
                <Link to='featured'> Featured </Link>
                <Link to='new'> New </Link>
            </nav>

            <Outlet></Outlet>
        </>
    )
}

export default Products