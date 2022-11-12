import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ig-food-menus.herokuapp.com' }),
    endpoints: (builder) => ({
        getChocolates: builder.query({
            query: () => '/chocolates'
        }),
        getDesserts: builder.query({
            query: () => `/desserts`
        }),
        getDrinks: builder.query({
            query: () => '/drinks'
        }),
        getIcecream: builder.query({
            query: () => '/ice-cream'
        }),
        getFood: builder.query({
            query: () => '/best-foods'
        }),
    })
});

export const {
    useGetFoodQuery,
    useGetChocolatesQuery,
    useGetDessertsQuery,
    useGetDrinksQuery,
    useGetIcecreamQuery,
} = mainApi