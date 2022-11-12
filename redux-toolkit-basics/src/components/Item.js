import React from 'react'

function Item(props) {
    return (
        <div className="menu">
            <div className="menuImg">
                <span className="border rotate"></span>
                <div className="border">
                    <img src={props.item.img} alt={props.item.title} />
                </div>
            </div>
            <div className="menuDetail">
                <div className='menuItem'>
                    <h3>{props.item.title} </h3>
                    <span className="price">${props.item.price}</span>
                </div>
                <p className='detail'>{props.item.desc}</p>
            </div>
        </div>
    )
}

export default Item