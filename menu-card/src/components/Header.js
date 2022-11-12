import React from 'react'

function Header(props) {

    return (
        <div className='header'>
            <div className='heading'>
                Tasty Menu
            </div>

            <div className='menus'>
                <ul>
                    {
                        props.category.map(cat =>
                            <li key={cat} className={cat === props.opt ? 'current' : ''}>
                                <button value={cat} onClick={props.optHandler}>{cat}</button>
                            </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header