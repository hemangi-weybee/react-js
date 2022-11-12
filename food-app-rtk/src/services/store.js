import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import { mainApi } from "./api/mainApi";

const reducer = {
    [mainApi.reducerPath]: mainApi.reducer
}

const customMiddleware = [
    mainApi.middleware
]

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, ...customMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})

