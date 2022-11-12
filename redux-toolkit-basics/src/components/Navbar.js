import React from 'react'

function Navbar({ category, opt = 'all', optHandler }) {
    return (
        <div className='navbar'>
            <ul>
                {
                    category.map(cat =>
                        <li key={cat} className={cat === opt ? 'current' : ''}>
                            <button value={cat} onClick={optHandler}>{cat}</button>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default Navbar