import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { cakeCount: 10 };

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.cakeCount--;
        },
        restocked: (state, action) => {
            state.cakeCount += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(icecreamAction)
    }
});

export const cakeReducer = cakeSlice.reducer;
export const cakeAction = cakeSlice.actions;

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: { icecreamCount: 10 },
    reducers: {
        ordered: (state) => {
            state.icecreamCount--;
        },
        restocked: (state, action) => {
            state.icecreamCount += action.payload;
        }
    },
    extraReducers: {
        ['cake/ordered']: (state) => {
            state.icecreamCount--;
        }
    }
})

export const icecreamReducer = icecreamSlice.reducer;
export const icecreamAction = icecreamSlice.actions;

export const fetchMenu = createAsyncThunk('menu/fetchMenu', () => {
    return axios.get('https://bridgecoursereact.s3.amazonaws.com/fakeData.json')
        .then(res => res.data)
})

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        loading: false,
        item: [],
        category: [],
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMenu.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchMenu.fulfilled, (state, action) => {
            state.loading = false;
            state.item = action.payload;
            state.category = ['all', ...new Set(action.payload.map(ele => ele.category))]
            state.error = '';
        });

        builder.addCase(fetchMenu.rejected, (state, action) => {
            state.loading = false;
            state.item = [];
            state.error = action.error.message;
        });
    }
});

export const menuReducer = menuSlice.reducer;