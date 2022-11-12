import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="shop-filters">
            <h2 className="shop-filters__title">Popular</h2>
            <ul className="shop-filters__list" >
                <NavLink to="/chocolates" className="shop-filters__item">
                    <img src='/icons/chocolate.svg' alt="Shop icons" />
                    <span className="shop-filters__item-name">chocolates</span>
                </NavLink>
                <NavLink to="/desserts" className="shop-filters__item">
                    <img src="/icons/dessert.svg" alt="Shop icons" />
                    <span className="shop-filters__item-name">desserts</span>
                </NavLink>
                <NavLink to="/drinks" className="shop-filters__item">
                    <img src="/icons/drink.svg" alt="Shop icons" />
                    <span className="shop-filters__item-name">drinks</span>
                </NavLink>
                <NavLink to="/ice-creams" className="shop-filters__item">
                    <img src="/icons/icecream.svg" alt="Shop icons" />
                    <span className="shop-filters__item-name">ice-cream</span>
                </NavLink>
            </ul>
        </div>
    )
}

export default Navbar