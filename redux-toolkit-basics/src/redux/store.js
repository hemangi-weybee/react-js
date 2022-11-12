import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-thunk';
import { cakeReducer, icecreamReducer, menuReducer } from "./indexSlice";

export const store = configureStore({
    reducer: {
        menu: menuReducer
        // cake: cakeReducer,
        // icecream: icecreamReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})