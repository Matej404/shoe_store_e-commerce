import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart, fetchCart } from "../../apis/cart";

export const addItem = createAsyncThunk(
    'cart/addItem',
    async({ product, quantity }, thunkApi) => {
        try {
            const response = await addToCart(product.id, quantity);
            const item = {
                ...product,
                cartItemId: response.id,
                quantity
            }
            return { item };
        } catch(err) {
            throw err;
        }
    }
)

export const loadCart = createAsyncThunk(
    'carts/loadCart',
    async(params, thunkAPI) => {
        try {
            const response = await fetchCart();
            return {
                carts: response
            }

        } catch(err) {
            throw err;
        }
    }
)