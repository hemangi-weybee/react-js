import React from 'react'
import { Outlet, Link, useSearchParams } from 'react-router-dom'

function Users() {
    const users = ['Admin', 'User 1', 'User 2', 'User 3']
    const [searchParams, setSearchParams] = useSearchParams()

    const showActiveUser = searchParams.get('filter') === 'active' 
    return (
        <div>
            <nav>
                {
                    users.map((u, i) => i === 0 ? <Link to='admin'>Admin</Link> : <Link to={`${i}`}>{u}</Link>)
                }
            </nav>
            <Outlet />

            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>

            <div>
                {
                    showActiveUser ? <h4>Showing Active User</h4> : <h4>Showing All User</h4>
                }
            </div>

        </div>
    )
}

export default Users