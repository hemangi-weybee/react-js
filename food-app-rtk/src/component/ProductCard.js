import React from 'react'

function ProductCard({ id, name, img, dsc, country, price, rate }) {
    return (
        <div className='shop-product' id={id}>
            <div className='shop-product__img-wrapper'>
                <img src={img} className="shop-product__img" alt="Woodford Reserve"
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/01/fastFoods1-1199461884-770x533-1-650x428.jpg";
                    }} />
                <div className="shop-product__rate">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <span>{rate}</span>
                </div>
            </div>
            <div className='shop-product__content'>
                <div className="shop-product__name">{name}</div>
                <p className="shop-product__description">{dsc}</p>
                <div className="shop-product__row">
                    <div className="shop-product__location">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>{country}</span>
                    </div>
                    <div className="shop-product__price">${price}</div>
                </div>
            </div>
            <div className='shop-product__btns'>
                <div className="shop-product__btn">
                    <i className="fa-regular fa-heart"></i>
                </div>
                <div className="shop-product__btn">
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
            {/* <div className='shop-product__label'>
                Favourite
            </div> */}
        </div>
    )
}

export default ProductCard