import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    searchingValue: '',
    Category: '',
    Color: '',
    Price: '',
    Apply: ''
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
        setSearchingValue(state, action) {
            state.searchingValue = action.payload;
        },
        setCategory(state, action) {
            state.Category = action.payload;
        },
        setColor(state, action) {
            state.Color = action.payload;
        },
        setPrice(state, action) {
            state.Price = action.payload;
        },
        setClear(state) {
            state.searchingValue = '';
            state.Category = '';
            state.Color = '';
            state.Price = '';
            state.Apply = '';
        },
        setApply(state, action) {
            console.log(action)
            state.Apply = {
                price: action.payload.price,
                category: action.payload.category,
                color: action.payload.color,
                Search: state.searchingValue
            };
        }
    },
});

export const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
    },
});

export const {
    setSearchingValue,
    setCategory,
    setProducts,
    setColor,
    setPrice,
    setClear,
    setApply
} = searchSlice.actions;
