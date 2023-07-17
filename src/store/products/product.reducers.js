import { createSlice } from "@reduxjs/toolkit";
import { loadProducts, loadProduct } from "./products.actions";

const initialState = {
    selectedProductId: null,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProductId: (state, action) => {
            state.selectedProductId = action.payload;
          },
    },
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

export const { setSelectedProductId } = productSlice.actions;

export default productSlice.reducer;