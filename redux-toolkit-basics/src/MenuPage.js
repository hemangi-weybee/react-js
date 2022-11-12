import React from 'react';
import Item from './components/Item';

function MenuPage({ data }) {

    return (
        <div className='menuPage'>
            <div className='menuContainer'>
                {
                    data.map(item =>
                        <Item item={item} key={item.id}></Item>
                    )
                }
            </div>
        </div>
    )
}

export default MenuPage;