import React, { useEffect, useState } from 'react'
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { BarLoader } from 'react-spinners';
import ProductCard from '../component/ProductCard'
import { useGetFoodQuery, useGetChocolatesQuery, useGetDessertsQuery, useGetDrinksQuery, useGetIcecreamQuery } from '../services/api/mainApi'

function ProductListing(props) {

    const [page, setPage] = useState(1);
    const [items, setItems] = useState({
        isLoading: true,
        isSuccess: false,
        isError: false,
        data: [],
        error: ''
    });
    const [skip, setSkip] = useState({
        food: true,
        chocolates: true,
        desserts: true,
        drinks: true,
        icecreams: true
    });

    const food = useGetFoodQuery(undefined, { skip: skip.food });
    const chocolate = useGetChocolatesQuery(undefined, { skip: skip.chocolates });
    const dessert = useGetDessertsQuery(undefined, { skip: skip.desserts });
    const drink = useGetDrinksQuery(undefined, { skip: skip.drinks });
    const icecream = useGetIcecreamQuery(undefined, { skip: skip.icecreams });

    const resetPage = () => {
        setPage(1)
    }


    useEffect(() => {
        if (props.chocolates) {
            setSkip({ ...skip, chocolates: false })
        } else if (props.desserts) {
            setSkip({ ...skip, desserts: false })
        } else if (props.drinks) {
            setSkip({ ...skip, drinks: false })
        } else if (props.icecreams) {
            setSkip({ ...skip, icecreams: false })
        } else {
            setSkip({ ...skip, food: false })
        }
        resetPage();
    }, [props]);

    useEffect(() => {
        if (props.chocolates) {
            setItems(chocolate);
        } else if (props.desserts) {
            setItems(dessert);
        } else if (props.drinks) {
            setItems(drink);
        } else if (props.icecreams) {
            setItems(icecream);
        } else {
            setItems(food);
        }
    }, [chocolate, dessert, drink, food, icecream, props])

    if (items.isLoading) {
        return (<div className='loader'>
            <BarLoader color="gray" />
        </div>)

    } else if (items.isError) {
        return (<p> {items.error} </p>)
    } else if (items.isSuccess) {
        return (
            <>
                <div className='shop-products'>
                    {
                        items.data && items.data.slice(page * 1, page * 1 + 12).map(item =>
                            <ProductCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                img={item.img}
                                dsc={item.dsc}
                                country={item.country}
                                price={item.price}
                                rate={item.rate}
                            />)
                    }
                </div>
                <PaginationControl
                    page={page}
                    between={4}
                    total={items.data.length}
                    limit={12}
                    next={true}
                    last={true}
                    changePage={(pageID) => {
                        setPage(typeof (pageID) === 'number' ? pageID : Number(page) + 1);
                    }}
                    ellipsis={2}
                />
            </>
        )
    }

}

export default ProductListing