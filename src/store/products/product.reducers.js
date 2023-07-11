import { createSlice } from "@reduxjs/toolkit";
import { loadProducts, loadProduct } from "./products.actions";

const initialState = {};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(loadProducts.fulfilled, (state, action) => {
            const { products } = action.payload;
            products.forEach((product) => {
                const { id } = product;
                state[id] = product;
            })
        })

        .addCase(loadProduct.fulfilled, (state, action) => {
            const { product } = action.payload;
            state[product.id] = product;
        })
    }
})

export default productSlice.reducer;