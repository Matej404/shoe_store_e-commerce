import { createSlice } from "@reduxjs/toolkit";
import { addItem, loadCart } from "./cart.action";

const initialState = {};

const cartSlice = createSlice({
    name: 'carts', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addItem.fulfilled, (state, action) => {
            const { item } = action.payload;
            state.items.push(item);
          })
         
          .addCase(loadCart.fulfilled, (state, action) => {
                const { carts } = action.payload;
                carts.forEach((cart) => {
                const { id } = cart;
                state[id] = cart;
            })
        })
        
    }
})

export default cartSlice.reducer;