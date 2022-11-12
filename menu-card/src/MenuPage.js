import React from 'react'
import Item from './components/Item'

function MenuPage(props) {
    return (
        <div className='menuPage'>
            <div className='menuContainer'>
                {
                    props.data.map(item =>
                        <Item item={item} key={item.id}></Item>
                    )
                }
            </div>
        </div>
    )
}

export default MenuPage